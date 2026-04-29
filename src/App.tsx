import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ArrowRight, ArrowLeft, RefreshCcw, RotateCcw, AlertTriangle, Play, BookOpen, User, GraduationCap, ChevronRight, Check } from 'lucide-react';
import { questions10HK2, Question } from './data/questions';

type AppState = 'WELCOME' | 'QUIZ' | 'RESULTS' | 'REVIEW' | 'RETRY';

export default function App() {
  const [appState, setAppState] = useState<AppState>('WELCOME');
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('');
  
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [currentIdx, setCurrentIdx] = useState(0);
  
  // For retry mode
  const [retryQueue, setRetryQueue] = useState<number[]>([]);
  const [isRetryMode, setIsRetryMode] = useState(false);

  // Derived stats
  const totalQuestions = questions10HK2.length;
  const answeredCount = Object.keys(answers).length;
  
  const correctIds = questions10HK2
    .filter(q => answers[q.id] === q.isTrue)
    .map(q => q.id);
  const incorrectIds = questions10HK2
    .filter(q => answers[q.id] !== undefined && answers[q.id] !== q.isTrue)
    .map(q => q.id);
  
  const unAnsweredIds = questions10HK2
    .filter(q => answers[q.id] === undefined)
    .map(q => q.id);

  const score10Scale = ((correctIds.length / totalQuestions) * 10).toFixed(1);

  const handleStart = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !studentClass.trim()) return;
    setAnswers({});
    setCurrentIdx(0);
    setIsRetryMode(false);
    setAppState('QUIZ');
  };

  const handleAnswer = (val: boolean) => {
    const currentQId = isRetryMode ? retryQueue[currentIdx] : questions10HK2[currentIdx].id;
    setAnswers(prev => ({ ...prev, [currentQId]: val }));
    
    // Automatically advance after a short delay for better UX
    setTimeout(() => handleNext(), 300);
  };

  const handleNext = () => {
    const maxIdx = isRetryMode ? retryQueue.length - 1 : totalQuestions - 1;
    if (currentIdx < maxIdx) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const handleSubmit = () => {
    setAppState('RESULTS');
  };

  const handleStartRetry = () => {
    // Only retry the ones they got wrong this time.
    setRetryQueue(incorrectIds);
    setCurrentIdx(0);
    setIsRetryMode(true);
    setAppState('RETRY');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center">
      <AnimatePresence mode="wait">
        
        {/* ================= WELCOME SCREEN ================= */}
        {appState === 'WELCOME' && (
          <motion.div 
            key="welcome"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-xl bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden"
          >
            <div className="bg-teal-600 p-8 text-white text-center">
              <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen size={32} />
              </div>
              <h1 className="text-3xl font-bold mb-2">Trắc Nghiệm Hướng Nghiệp 10</h1>
              <p className="text-teal-100 text-sm">Hoạt động Trải nghiệm, Hướng nghiệp - Học kỳ 2</p>
            </div>
            
            <form onSubmit={handleStart} className="p-8 space-y-6">
              <div className="flex bg-teal-50 text-teal-800 p-4 rounded-xl items-start gap-3">
                <AlertTriangle className="shrink-0 mt-0.5" size={20} />
                <p className="text-sm">
                  Bài kiểm tra gồm <strong>50 câu hỏi đúng/sai</strong>. Hãy điền thông tin để bắt đầu bài thi.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-2">
                    <User size={16} /> Họ và Tên
                  </label>
                  <input
                    type="text"
                    required
                    value={studentName}
                    onChange={e => setStudentName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="VD: Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1 flex items-center gap-2">
                    <GraduationCap size={16} /> Lớp
                  </label>
                  <input
                    type="text"
                    required
                    value={studentClass}
                    onChange={e => setStudentClass(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="VD: 10A1"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-md shadow-teal-200 transition-colors"
              >
                <Play fill="currentColor" size={18} />
                Bắt đầu làm bài
              </button>
            </form>
          </motion.div>
        )}

        {/* ================= QUIZ OR RETRY SCREEN ================= */}
        {(appState === 'QUIZ' || appState === 'RETRY') && (
          <motion.div 
            key="quiz"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="w-full max-w-3xl w-full"
          >
            {(() => {
              const totalItems = isRetryMode ? retryQueue.length : totalQuestions;
              const qId = isRetryMode ? retryQueue[currentIdx] : questions10HK2[currentIdx].id;
              const question = questions10HK2.find(q => q.id === qId)!;
              const currentAnswer = answers[question.id];

              return (
                <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200 flex-1 flex flex-col relative overflow-hidden">
                  {/* Progress Header */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold">
                      {isRetryMode ? "Làm lại câu sai" : "Bài thi chính thức"}
                    </span>
                    <div className="flex items-center space-x-4">
                      <div className="hidden sm:block text-right">
                        <p className="font-bold text-sm text-slate-800">{studentName}</p>
                        <p className="text-slate-400 text-xs">Lớp: {studentClass}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-sm font-bold text-slate-800 mb-1">
                          Câu {currentIdx + 1} / {totalItems}
                        </span>
                        <div className="flex space-x-2 items-center">
                          <div className="w-8 h-2 bg-teal-500 rounded-full"></div>
                          <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div 
                              className={`h-full transition-all duration-300 ${isRetryMode ? 'bg-amber-500' : 'bg-teal-500'}`}
                              style={{ width: `${((currentIdx + 1) / totalItems) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Question Body */}
                  <div className="flex-1 py-4 flex flex-col justify-center min-h-[250px]">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 leading-relaxed text-center sm:text-left">
                      {question.text}
                    </h2>
                    <p className="text-slate-500 mt-4 text-center sm:text-left">Hãy chọn đáp án đúng/sai cho nhận định trên.</p>
                  </div>

                  {/* Interaction Area */}
                  <div className="grid sm:grid-cols-2 gap-6 mt-8">
                    <button
                      onClick={() => handleAnswer(true)}
                      className={`h-24 rounded-2xl border-4 flex flex-col items-center justify-center gap-1 group transition-colors ${
                        currentAnswer === true 
                          ? 'bg-emerald-50 border-emerald-100 text-emerald-700' 
                          : 'bg-white border-emerald-50 hover:bg-emerald-50 hover:border-emerald-100 text-emerald-600'
                      }`}
                    >
                      <span className="block text-3xl">✅</span>
                      <span className="font-bold uppercase tracking-wider text-sm">Đúng</span>
                    </button>
                    <button
                      onClick={() => handleAnswer(false)}
                      className={`h-24 rounded-2xl border-4 flex flex-col items-center justify-center gap-1 group transition-colors ${
                        currentAnswer === false 
                          ? 'bg-rose-50 border-rose-100 text-rose-700' 
                          : 'bg-white border-rose-50 hover:bg-rose-50 hover:border-rose-100 text-rose-600'
                      }`}
                    >
                      <span className="block text-3xl">❌</span>
                      <span className="font-bold uppercase tracking-wider text-sm">Sai</span>
                    </button>
                  </div>

                  {/* Navigation Footer */}
                  <div className="mt-8 flex justify-between items-center pt-8 border-t border-slate-100">
                    <button
                      onClick={handlePrev}
                      disabled={currentIdx === 0}
                      className="px-6 py-3 sm:px-8 bg-white text-slate-600 font-bold rounded-2xl border border-slate-200 disabled:opacity-30 flex items-center gap-2 transition-colors"
                    >
                      <ArrowLeft size={18} /> <span className="hidden sm:inline">Quay lại</span>
                    </button>

                    <div className="flex space-x-2">
                       {/* Decorative dots */}
                       <div className={`w-2 h-2 rounded-full ${currentIdx % 3 === 0 ? 'bg-teal-500' : 'bg-teal-200'}`}></div>
                       <div className={`w-2 h-2 rounded-full ${currentIdx % 3 === 1 ? 'bg-teal-500' : 'bg-teal-200'}`}></div>
                       <div className={`w-2 h-2 rounded-full ${currentIdx % 3 === 2 ? 'bg-teal-500' : 'bg-teal-200'}`}></div>
                    </div>

                    {currentIdx === totalItems - 1 ? (
                      <button
                        onClick={handleSubmit}
                        className="px-6 py-3 sm:px-8 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-2xl shadow-md shadow-amber-200 flex items-center gap-2 transition-colors"
                      >
                        <Check size={18} /> Nộp bài
                      </button>
                    ) : (
                      <button
                        onClick={handleNext}
                        className="px-6 py-3 sm:px-8 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-2xl shadow-md shadow-teal-200 flex items-center gap-2 transition-colors"
                      >
                        <span className="hidden sm:inline">Câu kế tiếp</span> <ArrowRight size={18} />
                      </button>
                    )}
                  </div>
                </div>
              );
            })()}
          </motion.div>
        )}

        {/* ================= RESULTS SCREEN ================= */}
        {appState === 'RESULTS' && (
          <motion.div 
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-2xl bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden"
          >
            <div className="bg-teal-600 p-8 text-white text-center rounded-t-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <CheckCircle2 size={120} />
              </div>
              <p className="text-teal-100 font-bold mb-1 tracking-wider uppercase text-xs">
                Kết Quả Bài Thi
              </p>
              <h2 className="text-3xl font-bold mb-6">{studentName} - {studentClass}</h2>
              <div className="inline-flex flex-col items-center justify-center w-36 h-36 bg-white rounded-full bg-opacity-20 backdrop-blur-md border border-white/30 shadow-lg">
                <span className="text-5xl font-black">{score10Scale}</span>
                <span className="text-xs font-bold opacity-80 uppercase tracking-widest mt-1">Điểm</span>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-emerald-50 p-4 sm:px-6 sm:py-5 rounded-2xl flex flex-col justify-center">
                  <p className="text-xs text-emerald-600 font-bold uppercase tracking-tighter mb-1">Trả lời đúng</p>
                  <p className="text-3xl font-black text-emerald-700">{correctIds.length}</p>
                </div>
                <div className="bg-rose-50 p-4 sm:px-6 sm:py-5 rounded-2xl flex flex-col justify-center">
                  <p className="text-xs text-rose-600 font-bold uppercase tracking-tighter mb-1">Trả lời sai</p>
                  <p className="text-3xl font-black text-rose-700">{incorrectIds.length}</p>
                </div>
                <div className="bg-slate-50 p-4 sm:px-6 sm:py-5 rounded-2xl flex flex-col justify-center">
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter mb-1">Tổng số câu</p>
                  <p className="text-3xl font-black text-slate-700">{totalQuestions}</p>
                </div>
                <div className="bg-amber-50 p-4 sm:px-6 sm:py-5 rounded-2xl flex flex-col justify-center">
                  <p className="text-xs text-amber-600 font-bold uppercase tracking-tighter mb-1">Chưa trả lời</p>
                  <p className="text-3xl font-black text-amber-700">{unAnsweredIds.length}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button
                  onClick={() => setAppState('REVIEW')}
                  className="flex-1 py-4 border-2 border-dashed border-slate-300 text-slate-500 font-bold rounded-2xl transition-colors hover:bg-slate-50 hover:text-slate-700"
                >
                  Xem lại chi tiết
                </button>
                
                {incorrectIds.length > 0 && (
                  <button
                    onClick={handleStartRetry}
                    className="flex-1 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-2xl shadow-lg shadow-amber-100 transition-colors drop-shadow-sm flex items-center justify-center gap-2"
                  >
                     Làm lại câu sai ({incorrectIds.length})
                  </button>
                )}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-100">
                <button
                  onClick={() => {
                    setAppState('WELCOME');
                    setAnswers({});
                  }}
                  className="w-full py-2 text-slate-400 hover:text-teal-600 font-bold flex items-center justify-center gap-2 transition-colors uppercase text-xs tracking-wider"
                >
                  Làm lại từ đầu toàn bộ bài
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* ================= REVIEW SCREEN ================= */}
        {appState === 'REVIEW' && (
          <motion.div 
            key="review"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full max-w-4xl"
          >
            <div className="bg-white rounded-t-3xl p-6 sm:p-8 border-b border-slate-200 flex items-center justify-between sticky top-0 z-10 shadow-sm">
              <div>
                <h2 className="text-xl font-bold text-slate-800">Xem lại bài làm</h2>
                <p className="text-sm text-slate-500 mt-1">Nhấn vào từng thẻ để xem giải thích chi tiết</p>
              </div>
              <button
                onClick={() => setAppState('RESULTS')}
                className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl flex items-center gap-2 transition-colors"
              >
                <ArrowLeft size={16} /> Quay lại
              </button>
            </div>

            <div className="bg-slate-50 rounded-b-3xl p-4 sm:p-8 space-y-6">
              {questions10HK2.map((q, index) => {
                const userAns = answers[q.id];
                const isCorrect = userAns === q.isTrue;
                const isUnanswered = userAns === undefined;

                return (
                  <div 
                    key={q.id} 
                    className={`bg-white rounded-2xl overflow-hidden border-l-4 shadow-sm ${
                      isCorrect ? 'border-l-emerald-500' : isUnanswered ? 'border-l-amber-500' : 'border-l-rose-500'
                    }`}
                  >
                    <div className="p-6">
                      <div className="flex gap-4 items-start">
                        <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-lg font-bold text-sm text-white ${
                            isCorrect ? 'bg-emerald-500' : isUnanswered ? 'bg-amber-500' : 'bg-rose-500'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-800 text-lg font-bold mb-4">{q.text}</p>
                          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm mb-4">
                            <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                              Đáp án của bạn: 
                              <strong className={
                                isUnanswered ? "text-amber-600" : (userAns ? "text-emerald-600" : "text-rose-600")
                              }>
                                {isUnanswered ? "Chưa chọn" : (userAns ? "Đúng" : "Sai")}
                              </strong>
                            </span>
                            <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                              Đáp án đúng: 
                              <strong className="text-teal-600">
                                {q.isTrue ? "Đúng" : "Sai"}
                              </strong>
                            </span>
                          </div>
                          
                          <div className={`p-4 rounded-xl text-sm bg-teal-50 border border-teal-100 text-teal-900`}>
                            <p className="flex items-start gap-2">
                              <ChevronRight className="shrink-0 mt-0.5 text-teal-600" size={16} />
                              <span className="leading-relaxed"><strong>Giải thích:</strong> {q.explanation}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="py-8 text-center mt-4">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-slate-400 hover:text-slate-600 font-bold uppercase tracking-wider text-xs transition-colors"
              >
                Trở lên đầu trang
              </button>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}

