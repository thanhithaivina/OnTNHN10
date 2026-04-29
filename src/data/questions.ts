export interface Question {
  id: number;
  text: string;
  isTrue: boolean;
  explanation: string;
}

export const questions10HK2: Question[] = [
  // CHỦ ĐỀ 6: BẢO VỆ CẢNH QUAN THIÊN NHIÊN VÀ MÔI TRƯỜNG
  {
    id: 1,
    text: "Học sinh trung học phổ thông không cần phải tham gia các hoạt động bảo vệ cảnh quan thiên nhiên vì đó là trách nhiệm của các cơ quan quản lý nhà nước.",
    isTrue: false,
    explanation: "Trách nhiệm bảo vệ cảnh quan thiên nhiên là của tất cả mọi người, bao gồm cả học sinh, nhằm góp phần giữ gìn môi trường sống."
  },
  {
    id: 2,
    text: "Việc tuyên truyền, vận động người xung quanh bảo vệ môi trường là một trong những hoạt động thiết thực mà học sinh có thể thực hiện.",
    isTrue: true,
    explanation: "Tuyên truyền giúp nâng cao nhận thức cộng đồng, tạo ra sức mạnh tập thể trong việc bảo vệ môi trường."
  },
  {
    id: 3,
    text: "Sử dụng các sản phẩm dùng một lần làm từ nhựa không ảnh hưởng đáng kể đến tài nguyên thiên nhiên và biến đổi khí hậu.",
    isTrue: false,
    explanation: "Rác thải nhựa dùng một lần gây ô nhiễm nghiêm trọng, khó phân hủy và ảnh hưởng trực tiếp đến hệ sinh thái, biến đổi khí hậu."
  },
  {
    id: 4,
    text: "Báo cáo với cơ quan chức năng về các hành vi phá hoại thiên nhiên cũng là một cách thể hiện trách nhiệm bảo vệ môi trường.",
    isTrue: true,
    explanation: "Đứng lên tố giác và ngăn chặn kịp thời các hành vi phá hoại là biểu hiện của người có ý thức bảo vệ môi trường cao."
  },
  {
    id: 5,
    text: "Khái niệm 'tiêu dùng xanh' chỉ áp dụng cho các doanh nghiệp sản xuất, không liên quan đến thói quen mua sắm của cá nhân.",
    isTrue: false,
    explanation: "Tiêu dùng xanh là trách nhiệm và thói quen mà mỗi cá nhân cần rèn luyện khi chọn mua các sản phẩm thân thiện với môi trường."
  },
  {
    id: 6,
    text: "Tham gia trồng cây, thu gom rác thải tại địa phương là hành động cụ thể để bảo tồn cảnh quan thiên nhiên.",
    isTrue: true,
    explanation: "Những hành động nhỏ gọn này đóng góp trực tiếp vào việc tái tạo và bảo vệ cảnh quan tự nhiên."
  },
  {
    id: 7,
    text: "Tài nguyên thiên nhiên là vô tận, do đó con người có thể tự do khai thác phục vụ cho phát triển kinh tế mà không cần quan tâm đến tái tạo.",
    isTrue: false,
    explanation: "Nhiều tài nguyên thiên nhiên là hữu hạn. Khai thác quá mức sẽ dẫn đến cạn kiệt và phá vỡ cân bằng sinh thái."
  },
  {
    id: 8,
    text: "Tái chế rác thải là một trong những biện pháp hiệu quả nhằm giảm thiểu lượng rác chôn lấp và tiết kiệm tài nguyên.",
    isTrue: true,
    explanation: "Tái chế không chỉ giảm ô nhiễm mà còn tạo ra vòng đời mới cho vật liệu, tiết kiệm chi phí khai thác nguyên liệu mới."
  },
  {
    id: 9,
    text: "Chỉ những khu rừng nguyên sinh lớn mới cần được bảo vệ, còn các công viên hay cây xanh đô thị không mang lại tác dụng đa dạng sinh học.",
    isTrue: false,
    explanation: "Cây xanh đô thị và công viên đóng vai trò là 'lá phổi xanh' điều hoà không khí, bảo vệ hệ sinh thái ngay trong lòng thành phố."
  },
  {
    id: 10,
    text: "Biến đổi khí hậu mang lại những hậu quả nghiêm trọng và cần có sự chung tay hành động của mọi quốc gia, mọi cá nhân.",
    isTrue: true,
    explanation: "Biến đổi khí hậu là vấn đề toàn cầu tác động đến mọi mặt đời sống, cần nỗ lực giảm thiểu phát thải trên quy mô toàn thế giới."
  },

  // CHỦ ĐỀ 7: THAM GIA HOẠT ĐỘNG CỘNG ĐỒNG
  {
    id: 11,
    text: "Hoạt động cộng đồng chỉ mang lại lợi ích cho người nhận sự giúp đỡ, không mang lại giá trị nào cho người tham gia.",
    isTrue: false,
    explanation: "Người tham gia hoạt động cộng đồng được rèn luyện kỹ năng, mở rộng các mối quan hệ và nhận lại niềm vui tinh thần."
  },
  {
    id: 12,
    text: "Sự thấu cảm (Empathy) là khả năng đặt mình vào vị trí của người khác để hiểu những suy nghĩ và cảm xúc của họ.",
    isTrue: true,
    explanation: "Thấu cảm giúp chúng ta kết nối sâu sắc, chia sẻ và có các hành động hỗ trợ cộng đồng xuất phát từ tấm lòng nhân ái."
  },
  {
    id: 13,
    text: "Học sinh 16 tuổi chưa đủ trưởng thành để tham gia lập kế hoạch cho một dự án xã hội quy mô nhỏ tại trường.",
    isTrue: false,
    explanation: "Học sinh THPT hoàn toàn có năng lực tổ chức, lập kế hoạch và triển khai các dự án xã hội nhỏ lẻ phù hợp với lứa tuổi."
  },
  {
    id: 14,
    text: "Việc duy trì các mối quan hệ tích cực với cộng đồng giúp xây dựng một xã hội văn minh và đoàn kết.",
    isTrue: true,
    explanation: "Các mối quan hệ tốt đẹp tạo ra sự tin tưởng, hợp tác, đẩy lùi tiêu cực và cải thiện chất lượng sống chung."
  },
  {
    id: 15,
    text: "Trong một dự án thiện nguyện, chỉ có người đứng đầu mang lại đóng góp quan trọng, các thành viên khác chỉ cần làm theo.",
    isTrue: false,
    explanation: "Sự thành công của dự án thiện nguyện là kết quả hợp sức của mọi thành viên. Mỗi cá nhân có đóng góp và giá trị riêng biệt."
  },
  {
    id: 16,
    text: "Biết lắng nghe tích cực và tôn trọng sự khác biệt là những kỹ năng thiết yếu khi tham gia hoạt động cộng đồng.",
    isTrue: true,
    explanation: "Cộng đồng rất đa dạng. Việc tôn trọng và lắng nghe giúp giải quyết xung đột, hiểu được nhu cầu thực sự của cộng đồng."
  },
  {
    id: 17,
    text: "Giải quyết các vấn đề nảy sinh trong cộng đồng thường đòi hỏi sự linh hoạt, sáng tạo và tư duy phản biện.",
    isTrue: true,
    explanation: "Thường không có công thức chung. Sự linh hoạt và tư duy tốt giúp phân tích và tìm ra giải pháp tối ưu nhất cho từng vấn đề."
  },
  {
    id: 18,
    text: "Khi có bất đồng ý kiến trong nhóm hoạt động cộng đồng, cách tốt nhất là từ bỏ dự án để tránh xung đột.",
    isTrue: false,
    explanation: "Bất đồng là chuyện bình thường. Cần biết đối thoại, đàm phán để dung hòa lợi ích và giải quyết triệt để thay vì chạy trốn."
  },
  {
    id: 19,
    text: "Xây dựng mạng lưới xã hội tốt trong quá trình tham gia hoạt động cộng đồng có thể hỗ trợ rất lớn cho học sinh trong nghề nghiệp tương lai.",
    isTrue: true,
    explanation: "Các mối quan hệ, những thư giới thiệu hay kinh nghiệm làm việc nhóm thu được từ các hoạt động này rất có ích cho hồ sơ sự nghiệp."
  },
  {
    id: 20,
    text: "Để lan tỏa một thông điệp xã hội tốt đẹp, mạng xã hội là một công cụ mạnh mẽ nếu biết cách sử dụng an toàn và văn minh.",
    isTrue: true,
    explanation: "Mạng lưới lan truyền rộng lớn của mạng xã hội giúp thông điệp đến được với nhiều người một cách nhanh chóng với chi phí thấp."
  },

  // CHỦ ĐỀ 8: TÌM HIỂU THỊ TRƯỜNG LAO ĐỘNG VÀ ĐỊNH HƯỚNG NGHỀ NGHIỆP
  {
    id: 21,
    text: "Thị trường lao động luôn cố định và không bị ảnh hưởng bởi sự phát triển của công nghệ hay biến đổi kinh tế toàn cầu.",
    isTrue: false,
    explanation: "Ngược lại, thị trường lao động luôn biến động không ngừng dưới tác động của Cách mạng Công nghiệp, AI, và kinh tế vĩ mô."
  },
  {
    id: 22,
    text: "Chuyên gia, người đi trước, và các trang web đăng tuyển việc làm là những nguồn thông tin đáng tin cậy để tìm hiểu về một nghề nghiệp.",
    isTrue: true,
    explanation: "Tham khảo thông tin từ đa dạng các nguồn thực tế này cung cấp cái nhìn chân thực về môi trường, thu nhập và yêu cầu công việc."
  },
  {
    id: 23,
    text: "Việc chọn nghề chỉ cần dựa hoàn toàn vào việc nghề đó hiện tại có khả năng kiếm được nhiều tiền nhất, không cần cân nhắc sự phù hợp của bản thân.",
    isTrue: false,
    explanation: "Thu nhập là một yếu tố, nhưng nếu không có sự đam mê và năng lực, cá nhân sẽ không thể phát triển lâu dài hoặc dễ gặp áp lực, stress."
  },
  {
    id: 24,
    text: "Tự đánh giá nhóm tính cách nghề nghiệp (ví dụ qua bài trắc nghiệm Holland) giúp học sinh khám phá xu hướng nghề nghiệp phù hợp với bản thân.",
    isTrue: true,
    explanation: "Công cụ Holland chia nghề nghiệp thành 6 nhóm đặc trưng, giúp đối chiếu dễ dàng với sở thích và thế mạnh của từng học sinh."
  },
  {
    id: 25,
    text: "Nghề nghiệp trong lĩnh vực công nghệ thông tin (IT) không đòi hỏi khả năng làm việc nhóm mà chỉ cần code giỏi là đủ.",
    isTrue: false,
    explanation: "Kỹ năng làm việc nhóm, giao tiếp (agile/scrum) cực kỳ quan trọng trong ngành IT để kết nối hệ thống và hiểu yêu cầu của khách hàng."
  },
  {
    id: 26,
    text: "Nhiều ngành nghề truyền thống đang bị thay thế một phần hoặc hoàn toàn do sự tự động hóa và trí tuệ nhân tạo (AI).",
    isTrue: true,
    explanation: "Đây là xu hướng tất yếu của hiện tại và tương lai. Lực lượng lao động cần nâng cao kỹ năng để không bị tụt hậu."
  },
  {
    id: 27,
    text: "Năng lực khởi nghiệp kinh doanh chỉ sinh ra nhờ bẩm sinh, học sinh THPT không thể rèn luyện được năng lực này từ sớm.",
    isTrue: false,
    explanation: "Năng lực khởi nghiệp hoàn toàn có thể được hình thành và phát triển qua quá trình học tập, trải nghiệm và rèn luyện thực tế lập kế hoạch từ bậc THPT."
  },
  {
    id: 28,
    text: "Nghề thuộc nhóm 'Dịch vụ' thường đòi hỏi kỹ năng giao tiếp tốt, khả năng thấu hiểu khách hàng và giải quyết tình huống khéo léo.",
    isTrue: true,
    explanation: "Sự hài lòng của khách hàng là yếu tố sống còn của nhóm nghề Dịch vụ, nên kỹ năng mềm được đặt lên hàng đầu."
  },
  {
    id: 29,
    text: "Các trường trung cấp nghề hoặc cao đẳng chuyên nghiệp là một lựa chọn học tập hoàn toàn phù hợp đối với những người mong muốn tham gia sớm vào thị trường lao động với các kỹ năng thực hành.",
    isTrue: true,
    explanation: "Con đường Đại học không phải là duy nhất. Học nghề giúp cá nhân có ngay kỹ năng thực tế, đáp ứng được nhu cầu lao động tay nghề cao của xã hội."
  },
  {
    id: 30,
    text: "Thông tin về thị trường lao động tại địa phương thường không quan trọng bằng thông tin quốc tế khi mới bắt đầu định hướng nghề nghiệp.",
    isTrue: false,
    explanation: "Thị trường lao động địa phương là môi trường trực tiếp, người học cần tìm hiểu kỹ nơi mình sinh sống và làm việc trước khi vươn tới thị trường xa mảng hơn."
  },

  // CHỦ ĐỀ 9: RÈN LUYỆN PHẨM CHẤT, NĂNG LỰC ĐÁP ỨNG YÊU CẦU NGHỀ NGHIỆP
  {
    id: 31,
    text: "Một người có tính kỷ luật và khả năng chịu áp lực cao thường phù hợp làm việc trong môi trường của các cơ quan an ninh, quân đội hoặc y tế cấp cứu.",
    isTrue: true,
    explanation: "Các môi trường này đòi hỏi tính chính xác, tuân thủ tuyệt đối quy trình và bản lĩnh thép trước những tình huống sinh tử."
  },
  {
    id: 32,
    text: "Sự sáng tạo (Creativity) là phẩm chất độc quyền của những người làm nghệ thuật (họa sĩ, nhạc sĩ), không cần thiết cho những ngành nghề như kinh doanh, kỹ thuật.",
    isTrue: false,
    explanation: "Sáng tạo cần thiết trong mọi lĩnh vực. Trong kỹ thuật nó giúp tối ưu hóa hệ thống, trong kinh doanh giúp tạo ra mô hình lợi nhuận mới đột phá."
  },
  {
    id: 33,
    text: "Người làm công tác xã hội, nhà tâm lý học hay giáo viên đặc biệt cần có phẩm chất bao dung, thấu cảm và kiên nhẫn.",
    isTrue: true,
    explanation: "Đây là những nghề nghiệp tương tác, hỗ trợ con người giải quyết các vấn đề tinh thần hay kiến thức, cần có lòng trắc ẩn để làm tốt công việc chuyên môn."
  },
  {
    id: 34,
    text: "Năng lực tự học là kỹ năng quan trọng giúp mỗi cá nhân có thể thích ứng, tự cập nhật kiến thức khi thị trường lao động có biến đổi.",
    isTrue: true,
    explanation: "Kiến thức trường học sẽ nhanh chóng lạc hậu. Năng lực tự học đảm bảo khả năng học tập suốt đời để không bị đào thải."
  },
  {
    id: 35,
    text: "Kỹ năng lập kế hoạch tài chính cá nhân không mang lại giá trị nào trong quá trình khởi nghiệp hoặc phát triển nghề nghiệp lâu dài.",
    isTrue: false,
    explanation: "Kỹ năng quản lý tài chính giúp kiểm soát tốt rủi ro, đầu tư cá nhân hiệu quả và là nền tảng cốt lõi nếu muốn khởi nghiệp thành công."
  },
  {
    id: 36,
    text: "Thể lực tốt, khả năng giữ thăng bằng và sức khỏe dẻo dai là những yêu cầu quan trọng đối với những người làm nghề vận động viên, xây dựng hoặc thợ lặn.",
    isTrue: true,
    explanation: "Đặc thù nhóm nghề này sử dụng chủ yếu sức khỏe cơ bắp và sự bền bỉ của cơ thể, do đó yều cầu sức khỏe thể chất là tiêu chí tiên quyết."
  },
  {
    id: 37,
    text: "Xây dựng hình ảnh cá nhân uy tín, chuyên nghiệp trên không gian mạng là một điều vô bổ đối với học sinh đang ngồi trên ghế nhà trường.",
    isTrue: false,
    explanation: "Nhà tuyển dụng ngày nay thường xem xét cả hồ sơ mạng xã hội. Xây dựng hình ảnh tích cực từ sớm đem lại nhiều điểm cộng lớn trong mắt cộng đồng và đối tác."
  },
  {
    id: 38,
    text: "Phẩm chất trung thực, khách quan và tuân thủ pháp luật là cực kỳ quan trọng đối với các ngành nghề liên quan đến báo chí, luật pháp, kế toán.",
    isTrue: true,
    explanation: "Những ngành này ảnh hưởng đến quyền lợi công bằng của nhiều bên, nếu sai lệch sẽ dẫn đến hậu quả nghiêm trọng về kinh tế và pháp lý."
  },
  {
    id: 39,
    text: "Khi đối mặt với sự cố nghề nghiệp, người chuyên nghiệp sẽ lập tức đùn đẩy trách nhiệm cho người khác để bảo vệ uy tín của mình.",
    isTrue: false,
    explanation: "Người có trách nhiệm nghề nghiệp cao sẽ dũng cảm đối mặt, thừa nhận lỗi sai và đưa ra phương án khắc phục thay vì đổ lỗi."
  },
  {
    id: 40,
    text: "Việc xác định được những phẩm chất mình còn thiếu sót so với nhóm nghề đam mê giúp học sinh lập kế hoạch rèn luyện kịp thời và hiệu quả.",
    isTrue: true,
    explanation: "Biết mình yếu ở đâu để bổ sung ở đó là bước đầu của hành động lập kế hoạch hướng nghiệp và phát triển năng lực."
  },

  // TỔNG HỢP ÔN TẬP: TRẢI NGHIỆM, TỰ NHẬN THỨC VÀ LẬP KẾ HOẠCH
  {
    id: 41,
    text: "Phương pháp SWOT (Điểm mạnh, Điểm yếu, Cơ hội, Thách thức) chỉ dùng trong quản trị doanh nghiệp, không thể áp dụng để đánh giá bản thân khi lập kế hoạch nghề nghiệp.",
    isTrue: false,
    explanation: "Mô hình SWOT rất hiệu quả khi đánh giá bản thân (Personal SWOT Analysis) nhằm định hình năng lực và phát triển sự nghiệp cá nhân."
  },
  {
    id: 42,
    text: "Mục tiêu SMART (Cụ thể, Đo lường được, Khả thi, Phù hợp, Có thời hạn) giúp việc thực hiện các kế hoạch dự án cá nhân được rõ ràng và có tính kỷ luật cao hơn.",
    isTrue: true,
    explanation: "Đặt mục tiêu theo SMART giúp tránh sự mơ hồ, dễ dàng bám sát lộ trình và đánh giá kịp thời mức độ hoàn thành."
  },
  {
    id: 43,
    text: "Phát biểu 'Không có nghề nào là thấp hèn, chỉ có người không trân trọng nghề nghiệp mới thấp hèn' hoàn toàn phản ánh tư tưởng đúng đắn về sự bình đẳng nghề nghiệp.",
    isTrue: true,
    explanation: "Tất cả mọi nghề nghiệp chân chính, tạo ra giá trị cho xã hội và vươn lên bằng mồ hôi công sức đều đáng được tôn trọng bình đẳng."
  },
  {
    id: 44,
    text: "Đại học là con đường duy nhất để thành công và đảm bảo sự thịnh vượng, hạnh phúc. Không vào được đại học đồng nghĩa với việc tương lai khép lại.",
    isTrue: false,
    explanation: "Rất nhiều con đường (học nghề, khởi nghiệp, làm việc vươn lên từ thực tế) đều có thể mang lại thành công xuất sắc nếu có nỗ lực, kỹ năng và đạo đức làm việc."
  },
  {
    id: 45,
    text: "Các câu lạc bộ hướng nghiệp, CLB năng khiếu tại trường THPT là môi trường tốt để học sinh được 'thử lửa', rèn luyện kỹ năng và mở rộng mạng lưới bạn bè.",
    isTrue: true,
    explanation: "Môi trường ngoại khóa mô phỏng xã hội thu nhỏ, rèn luyện kỹ năng lãnh đạo, giao tiếp, và tự nhận thức bản thân rõ ràng nhất."
  },
  {
    id: 46,
    text: "Để kinh doanh trực tuyến (online) hiệu quả, việc xây dựng lòng tin với khách hàng thông qua chất lượng sản phẩm và thái độ phục vụ là quan trọng nhất.",
    isTrue: true,
    explanation: "Lòng tin tạo nên uy tín, và uy tín quyết định việc khách hàng có quay lại hay giới thiệu sản phẩm của bạn trên mạng lưới số hay không."
  },
  {
    id: 47,
    text: "Người bảo thủ, luôn từ chối tiếp thu những điều mới lạ sẽ có nhiều cơ hội thăng tiến hơn trong kỷ nguyên công nghệ số và hội nhập.",
    isTrue: false,
    explanation: "Thời đại hội nhập cần một tư duy mở (Open-minded), sẵn sàng học hỏi, thay đổi liên tục. Sự bảo thủ đồng nghĩa với việc sẽ sớm bị tụt hậu."
  },
  {
    id: 48,
    text: "Một kế hoạch phát triển cá nhân tốt cần có tính linh hoạt, sẵn sàng điều chỉnh khi hoàn cảnh hoặc nhu cầu xã hội thay đổi.",
    isTrue: true,
    explanation: "Sự linh hoạt giúp cá nhân không gặp bế tắc khi mọi phương án ban đầu sụp đổ trước những biến đổi không lường trước (như đại dịch hoặc khủng hoảng)."
  },
  {
    id: 49,
    text: "Chấp nhận những rủi ro có tính toán là một trong những đặc điểm quen thuộc của những người tham gia hoạt động khởi nghiệp.",
    isTrue: true,
    explanation: "Khởi nghiệp là dấn thân vào cái mới, rủi ro là tất yếu. Nhưng đó là rủi ro 'đã được làm bài toán dự phòng', khác với liều lĩnh vô thức."
  },
  {
    id: 50,
    text: "Chương trình Giáo dục Trải nghiệm, Hướng nghiệp ở THPT được thiết kế nhằm mục đích duy nhất là giải trí cho học sinh sau những giờ học văn hóa căng thẳng.",
    isTrue: false,
    explanation: "Hoạt động Trải nghiệm, Hướng nghiệp mang ý nghĩa cốt lõi giúp học sinh tự nhận thức tự đánh giá, định hình giá trị chuẩn mực và quyết định hướng đi nghề nghiệp cho tương lai dài hạn."
  }
];
