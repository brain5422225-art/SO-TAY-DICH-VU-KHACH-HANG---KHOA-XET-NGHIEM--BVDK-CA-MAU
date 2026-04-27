import React, { useState, useMemo } from 'react';
import { 
  Activity, 
  Search, 
  Calendar, 
  ShieldCheck, 
  AlertCircle, 
  ChevronRight, 
  ChevronDown,
  Filter,
  Clock, 
  Microscope, 
  Stethoscope, 
  Heart, 
  Wind, 
  Droplet, 
  Brain, 
  Database, 
  Thermometer, 
  Zap, 
  Scale, 
  Bone,
  Phone,
  MapPin,
  Lock,
  ArrowRight,
  FlaskConical,
  Dna,
  TestTube2,
  Package,
  Syringe,
  TriangleAlert,
  ClipboardList,
  CheckCircle2,
  XCircle,
  X,
  TrendingUp,
  TrendingDown,
  BookOpen,
  Stethoscope as StethoscopeIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- TYPES & DATA ---

interface LabTest {
  name: string;
  group: 'Sinh hóa' | 'Miễn dịch' | 'Huyết học' | 'Vi sinh' | 'Đông máu' | 'Sinh Hóa' | 'Nước tiểu & Dịch' | 'Truyền máu' | 'Ký sinh trùng' | 'Sinh học phân tử' | 'Vi nấm';
  time: string;
  ref: string;
  alert: string;
  concept?: string;
  indication?: string;
  pathologicalMeaning?: {
    increase: string;
    decrease: string;
  };
  // Expanded fields for deep clinical integration
  physiology?: string;
  specimenCollection?: string;
  testingMethods?: string;
  interferingFactors?: string;
  clearanceInfo?: string;
  clinicalNote?: string;
  benefits?: string;
  ebmGuidelines?: string;
  isFeatured?: boolean;
}

interface TestKnowledge {
  name: string;
  purpose: string;
  when_to_do: string;
  how_it_works: string;
  result_meaning: string;
  real_life_example: string;
  note: string;
}

const labTests: LabTest[] = [
  {
    "name": "Định lượng Glucose [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Glucose là nguồn cung cấp năng lượng chính cho cơ thể. Định lượng Glucose máu là xét nghiệm cốt lõi để sàng lọc, chẩn đoán và quản lý bệnh **Đái tháo đường** (ĐTĐ) và các rối loạn chuyển hóa.",
    "physiology": "📌 **Nguồn gốc:** Ngoại sinh (từ thức ăn) và Nội sinh (quá trình phân giải glycogen/tân tạo đường tại gan).\n📌 **Điều hòa:** Tuyến tụy tiết Insulin để làm hạ đường huyết; ngược lại Glucagon, Cortisol, Adrenalin và Hormon tăng trưởng (GH) làm tăng đường huyết.",
    "indication": "🎯 **Sàng lọc:** Theo cập nhật từ ADA 2025-2026, độ tuổi sàng lọc ĐTĐ phổ quát được hạ xuống từ **35 tuổi**.\n🎯 **Chẩn đoán:** Đái tháo đường Typ 1, Typ 2, ĐTĐ thai kỳ, và tiền đái tháo đường.\n🎯 **Theo dõi:** Nguy cơ hạ đường huyết, hiệu quả của thuốc hạ đường huyết.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết tương/Huyết thanh.\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn ít nhất **8 giờ** (đối với xét nghiệm đường huyết lúc đói - FPG).\n⚠️ **Lưu ý:** Lấy máu vào ống Natri Fluoride để ức chế quá trình đường phân. Nếu dùng ống thường, phải ly tâm tách huyết thanh sớm trong vòng 30 phút.",
    "testingMethods": "Phản ứng Enzym (Hexokinase hoặc Glucose Oxidase).",
    "ref": "📊 **Đường huyết lúc đói (FPG) bình thường:** 3,9 - 5,5 mmol/L (70 - 99 mg/dL).\n📊 **Tiền đái tháo đường (Rối loạn đường huyết đói):** FPG 5,6 - 6,9 mmol/L (100 - 125 mg/dL).\n📊 **Chẩn đoán Đái tháo đường:** FPG ≥ 7,0 mmol/L (126 mg/dL).",
    "alert": "⚠️ Hạ đường huyết (< 2,8 mmol/L) là một cấp cứu nội khoa nghiêm trọng, có thể gây tổn thương hệ thần kinh trung ương vĩnh viễn.\n💡 Tiền đái tháo đường nay được các chuyên gia nội tiết (ADA 2025) nhấn mạnh là một yếu tố nguy cơ độc lập đối với bệnh lý tim mạch do xơ vữa (ASCVD).",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Glucose máu:**\n  🔴 **Nguyên nhân sinh lý / Thứ phát:**\n    ▫️ Lấy máu ngay sau bữa ăn, đang truyền dịch chứa glucose.\n    ▫️ Tình trạng stress cấp tính (nhồi máu cơ tim, bỏng, đa chấn thương, phẫu thuật).\n  🔴 **Bệnh lý nội tiết & Chuyển hóa:**\n    ▫️ Đái tháo đường Typ 1, Typ 2, Đái tháo đường thai kỳ.\n    ▫️ Hội chứng Cushing, To đầu chi, U tủy thượng thận (Pheochromocytoma).\n    ▫️ Bệnh lý tuyến tụy (Viêm tụy cấp/mạn, ung thư tụy).",
      "decrease": "🔹 **Giảm Glucose máu:**\n  🔴 **Quá liều thuốc:**\n    ▫️ Sử dụng Insulin hoặc thuốc hạ đường huyết uống (Sulfonylurea) không đúng liều/bỏ bữa.\n  🔴 **Bệnh lý nội tiết & Chuyển hóa:**\n    ▫️ U tế bào tiết Insulin (Insulinoma).\n    ▫️ Suy thượng thận (Bệnh Addison), Suy tuyến yên, Suy giáp.\n    ▫️ Nhịn đói kéo dài, suy gan nặng, ngộ độc rượu cấp."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Để máu ở nhiệt độ phòng không có chất ức chế glycolysis làm glucose tự phân hủy giảm 5% mỗi giờ.\n💊 **Thuốc làm TĂNG Glucose:** Corticosteroid, lợi tiểu Thiazid, thuốc tránh thai chứa estrogen, chẹn beta giao cảm.\n💊 **Thuốc làm GIẢM Glucose:** Insulin, các thuốc trị đái tháo đường, Acetaminophen, thuốc ức chế MAO.",
    "clinicalNote": "Nồng độ đường huyết ngẫu nhiên ≥ 11,1 mmol/L kèm triệu chứng kinh điển (ăn nhiều, uống nhiều, tiểu nhiều, gầy nhiều) là đủ tiêu chuẩn chẩn đoán ĐTĐ mà không cần chờ nhịn đói. ADA 2026 khuyến khích mạnh mẽ việc sử dụng máy theo dõi đường huyết liên tục (CGM) ở bệnh nhân dùng Insulin để tối ưu hóa thời gian đường huyết trong mục tiêu (TIR)."
  },
  {
    "name": "Định lượng Ure [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Ure (phản ánh qua BUN - Blood Urea Nitrogen) là sản phẩm thoái hóa chính của protein, được tổng hợp tại gan và đào thải chủ yếu qua thận. Đại diện cho **chuyển hóa nitơ** và **chức năng bài tiết của thận**.",
    "physiology": "📌 **Tổng hợp:** Tại gan thông qua chu trình Krebs-Henseleit (chuyển hóa NH3 độc hại thành Ure).\n📌 **Đào thải:** Lọc qua cầu thận và tái hấp thu thụ động một phần ở các ống thận.\n📌 **Đặc tính:** Nồng độ Ure huyết thanh phụ thuộc vào 3 yếu tố: chức năng thận, khẩu phần protein trong ăn uống, và tình trạng dị hóa của cơ thể.",
    "indication": "🎯 **Chẩn đoán:** Đánh giá chức năng thận, phân biệt suy thận trước thận và suy thận thực thể (kết hợp với chỉ số Creatinin).\n🎯 **Đánh giá:** Tình trạng dị hóa protein, theo dõi bệnh nhân xuất huyết tiêu hóa trên.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh/Huyết tương.\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn nhưng khuyên bệnh nhân tránh ăn chế độ quá nhiều đạm ngay trước khi xét nghiệm.",
    "testingMethods": "Phản ứng Enzym (Urease).",
    "ref": "📊 **Người lớn:** 2,1 - 8,3 mmol/L (hoặc 13 - 40 mg/dL).\n*(Mức bình thường phụ thuộc nhiều vào chế độ ăn và khối lượng cơ thể)*.",
    "alert": "⚠️ Nồng độ Ure máu rất cao (> 33 mmol/L) mang độc tính với thần kinh (hội chứng ure máu cao), nguy cơ gây viêm màng ngoài tim, hôn mê và co giật.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Ure máu:**\n  🔴 **Nguyên nhân trước thận (Giảm tưới máu hoặc Tăng dị hóa):**\n    ▫️ Mất nước (tiêu chảy, nôn), suy tim xung huyết, sốc.\n    ▫️ Xuất huyết tiêu hóa, bỏng, sốt cao, chế độ ăn quá nhiều đạm.\n  🔴 **Nguyên nhân tại thận:**\n    ▫️ Suy thận cấp hoặc bệnh thận mạn (viêm cầu thận, viêm kẽ thận).\n  🔴 **Nguyên nhân sau thận:**\n    ▫️ Tắc nghẽn đường tiểu (sỏi thận/niệu quản, u phì đại tuyến tiền liệt).",
      "decrease": "🔹 **Giảm Ure máu:**\n  🔴 **Nguyên nhân tại gan & Dinh dưỡng:**\n    ▫️ Suy gan nặng (gan mất khả năng tổng hợp Ure từ NH3).\n    ▫️ Suy dinh dưỡng, chế độ ăn nghèo protein.\n  🔴 **Nguyên nhân sinh lý:**\n    ▫️ Phụ nữ có thai (do tăng thể tích huyết tương gây hòa loãng máu)."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Vỡ hồng cầu ít bị ảnh hưởng nhưng vẫn cần tránh.\n💊 **Thuốc làm TĂNG Ure:** Các thuốc gây độc cho thận (Kháng sinh Aminoglycosid), thuốc lợi tiểu.\n💊 **Thuốc làm GIẢM Ure:** Chloramphenicol, Streptomycin.",
    "clinicalNote": "Chỉ số Ure đơn độc không nhạy để chẩn đoán sớm suy thận. Trong lâm sàng thường sử dụng **Tỷ lệ Ure/Creatinin**: Tỷ lệ > 40 gợi ý suy thận trước thận (do giảm tưới máu), tỷ lệ < 40 gợi ý tổn thương thực thể tại thận."
  },
  {
    "name": "Định lượng Creatinin [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Creatinin là sản phẩm thoái giáng của creatin cơ. Do được lọc hoàn toàn qua cầu thận, Creatinin là dấu ấn sinh học cốt lõi để ước tính **mức lọc cầu thận (eGFR)** và đánh giá chức năng thận.",
    "physiology": "📌 **Nguồn gốc:** Chủ yếu nội sinh từ thoái hóa cơ vân (tỷ lệ thuận với khối lượng cơ của từng cá thể).\n📌 **Đào thải:** Lọc 100% qua cầu thận, một phần rất nhỏ bài tiết thêm ở ống lượn gần.\n📌 **Động học:** Mối liên quan với chức năng thận là **hàm số mũ**. Thận phải mất tới 50% chức năng thì nồng độ Creatinin mới bắt đầu tăng vượt ngưỡng bình thường.",
    "indication": "🎯 **Chẩn đoán:** Phát hiện, phân độ suy thận cấp và bệnh thận mạn tính (CKD).\n🎯 **Tính eGFR:** Ứng dụng theo hướng dẫn KDIGO 2024 để theo dõi tiến triển bệnh thận.\n🎯 **Điều chỉnh liều thuốc:** Bắt buộc để tính toán liều lượng cho các loại thuốc đào thải qua thận.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh/Huyết tương.\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn. Tránh gắng sức hoặc ăn lượng lớn thịt đỏ ngay trước khi xét nghiệm.",
    "testingMethods": "Phản ứng Jaffe (Picrat kiềm) hoặc Enzymatic.",
    "ref": "📊 **Nam:** 62 - 106 µmol/L (0,7 - 1,2 mg/dL).\n📊 **Nữ:** 44 - 80 µmol/L (0,5 - 0,9 mg/dL).\n*(Ngưỡng tham chiếu phụ thuộc mật độ cơ bắp của từng người)*.",
    "alert": "⚠️ Creatinin là một chỉ số \"kém nhạy\" trong giai đoạn suy thận sớm do đặc tính hàm số mũ.\n💡 KDIGO 2024 khuyến cáo bắt buộc phải sử dụng **eGFR (Công thức CKD-EPI 2021 không dùng yếu tố chủng tộc)** để đánh giá thay vì chỉ dựa vào nồng độ Creatinin tuyệt đối.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Creatinin máu:**\n  🔴 **Nguyên nhân tại thận:**\n    ▫️ Tổn thương thận cấp tính (AKI): Hoại tử ống thận cấp, viêm cầu thận.\n    ▫️ Bệnh thận mạn tính (CKD): Biến chứng từ Đái tháo đường, Tăng huyết áp.\n  🔴 **Nguyên nhân trước thận và sau thận:**\n    ▫️ Giảm tưới máu thận: Suy tim, sốc, mất nước nặng.\n    ▫️ Tắc nghẽn đường tiểu: Sỏi niệu quản, u phì đại tuyến tiền liệt.\n  🔴 **Nguyên nhân tại cơ vân:**\n    ▫️ Tiêu cơ vân, hội chứng vùi lấp, chấn thương cơ diện rộng, to đầu chi.",
      "decrease": "🔹 **Giảm Creatinin máu:**\n  🔴 **Nguyên nhân khối lượng cơ & Sinh lý:**\n    ▫️ Teo cơ, loạn dưỡng cơ, người già suy giảm khối lượng cơ bắp.\n    ▫️ Phụ nữ có thai."
    },
    "interferingFactors": "❌ **Nhiễu phương pháp Jaffe:** Có thể bị tăng giả tạo bởi Glucose cao, Acid ascorbic, Cephalosporin, Acid Uric, Ketone.\n💊 **Thuốc làm TĂNG Creatinin:** Cimetidin, Trimethoprim (thuốc ức chế bài tiết Creatinin ở ống thận làm tăng Creatinin máu giả tạo nhưng eGFR thực tế không giảm).",
    "clinicalNote": "Theo bản cập nhật lịch sử **KDIGO 2024**, việc tính eGFR kết hợp với Tỷ số Albumin/Creatinin niệu (uACR) được dùng trong **Phương trình rủi ro suy thận (KFRE)** để dự báo chính xác xác suất bệnh nhân phải chạy thận trong 2-5 năm, qua đó tối ưu hóa việc kê đơn thuốc bảo vệ thận như SGLT2i."
  },
 {
    "name": "Xét nghiệm Khí máu động mạch (pH, pO2, pCO2, HCO3-)",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Phân tích các chất khí trong máu động mạch giúp đánh giá chính xác **tình trạng thăng bằng toan-kiềm** (pH, PaCO2, HCO3-) và **hiệu quả trao đổi oxy** (PaO2, SaO2) của cơ thể.",
    "physiology": "📌 **Cơ chế đệm:** Thăng bằng toan-kiềm được kiểm soát bởi hệ thống đệm trong máu, hệ hô hấp (điều chỉnh PaCO2) và hệ thận (điều chỉnh HCO3-).\n📌 **PaO2:** Phản ánh lượng oxy hòa tan trong máu động mạch, giảm dần theo độ tuổi.\n📌 **PaCO2:** Phản ánh hiệu quả thông khí phế nang của phổi.",
    "indication": "🎯 **Chẩn đoán:** Rối loạn thăng bằng toan-kiềm (toan/kiềm hô hấp, toan/kiềm chuyển hóa).\n🎯 **Đánh giá:** Suy hô hấp, tình trạng giảm oxy máu.\n🎯 **Theo dõi:** Hiệu quả của liệu pháp oxy, thở máy và trong các phác đồ hồi sức cấp cứu (như Surviving Sepsis Campaign 2026).",
    "specimenCollection": "💉 **Loại mẫu:** Máu động mạch (thường lấy ở ĐM quay hoặc ĐM bẹn) hút vào bơm tiêm đã tráng Heparin.\n⏳ **Chuẩn bị:** Ghi chú rõ bệnh nhân đang thở khí trời hay thở oxy (chỉ số FiO2).\n⚠️ **Lưu ý:** Bắt buộc làm **Test Allen** trước khi chọc ĐM quay. Mẫu máu phải đuổi hết bọt khí, bảo quản ngay trong đá lạnh và phân tích càng sớm càng tốt.",
    "testingMethods": "Điện cực đo khí.",
    "ref": "📊 **pH:** 7,35 - 7,45\n📊 **PaCO2:** 35 - 45 mmHg\n📊 **HCO3-:** 22 - 26 mmol/L\n📊 **PaO2:** 75 - 100 mmHg\n📊 **SaO2:** 95 - 100%",
    "alert": "⚠️ Tình trạng nhiễm toan nặng có thể dẫn tới hôn mê và tử vong do ức chế hệ thần kinh trung ương. Đo độ bão hòa oxy qua mạch nảy (SpO2 kẹp tay) có thể bị bình thường giả tạo nếu bệnh nhân đang ngộ độc khí CO.",
    "pathologicalMeaning": {
      "increase": "🔹 **Nhiễm toan hô hấp (pH < 7,35; PaCO2 > 45 mmHg):**\n  🔴 **Tắc nghẽn đường thở:**\n    ▫️ Đợt cấp bệnh phổi tắc nghẽn mạn tính (COPD), hen phế quản nặng.\n  🔴 **Ức chế trung tâm hô hấp:**\n    ▫️ Quá liều thuốc ngủ, thuốc an thần, opiat.\n🔹 **Nhiễm toan chuyển hóa (pH < 7,35; HCO3- < 22 mmol/L):**\n  🔴 **Tăng sản xuất acid:**\n    ▫️ Nhiễm toan ceton do đái tháo đường, nhiễm toan acid lactic.\n  🔴 **Giảm thải acid hoặc mất kiềm:**\n    ▫️ Suy thận, tiêu chảy mất bicarbonat.",
      "decrease": "🔹 **Nhiễm kiềm hô hấp (pH > 7,45; PaCO2 < 35 mmHg):**\n  🔴 **Tăng thông khí:**\n    ▫️ Lo âu, sốt cao, tổn thương thần kinh trung ương, tình trạng thiếu oxy mô.\n🔹 **Nhiễm kiềm chuyển hóa (pH > 7,45; HCO3- > 26 mmol/L):**\n  🔴 **Mất acid hoặc ứ đọng kiềm:**\n    ▫️ Nôn nhiều, hút dịch vị dạ dày kéo dài, dùng thuốc lợi tiểu làm mất Kali."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Bọt khí lọt vào bơm tiêm làm tăng PaO2 giả tạo. Mẫu không bảo quản đá lạnh làm giảm pH và tăng PaCO2 (do tế bào tiếp tục chuyển hóa).\n💊 **Thuốc:** Các loại thuốc lợi tiểu quai/thiazid có thể gây kiềm chuyển hóa do mất Kali.",
    "clinicalNote": "Cần kết hợp chỉ số Kiềm dư (Base Excess: -2 đến +2 mEq/L) để đánh giá nhanh mức độ thiếu hụt/dư thừa kiềm trong các ca hồi sức nặng. Mức PaO2 bình thường cần được điều chỉnh linh hoạt theo độ cao so với mực nước biển và tuổi của bệnh nhân."
  },
  {
    "name": "Đo hoạt độ AST (GOT) [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "AST (Aspartate Aminotransferase) hay GOT là một enzym nội bào, xúc tác chuyển hóa acid amin. Khác với ALT, AST **không đặc hiệu cho gan** vì nó có mặt ở nhiều cơ quan khác (tim, cơ vân, thận).",
    "physiology": "📌 **Vị trí:** Tồn tại ở cả **bào tương (20%)** và **ty thể (80%)** của tế bào.\n📌 **Phân bố:** Có nhiều nhất ở **Cơ tim**, sau đó đến Gan, Cơ xương, Thận, Não.\n📌 **Động học:** Thời gian bán hủy trong máu ngắn, khoảng **17 giờ**.\n📌 **Cơ chế:** Khi tế bào bị hoại tử hoặc tổn thương sâu (phá vỡ đến tận ty thể), AST sẽ giải phóng ồ ạt vào dòng tuần hoàn.",
    "indication": "🎯 **Chẩn đoán bệnh gan:** Đánh giá tổn thương tế bào gan nặng, hoại tử sâu, xơ gan, viêm gan do rượu.\n🎯 **Bệnh lý tim/cơ:** Theo dõi tổn thương cơ vân, hội chứng vùi lấp, nhồi máu cơ tim (hiện nay ít dùng hơn Troponin).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Thường không bắt buộc nhịn ăn.\n⚠️ **Lưu ý:** Phải tách hồng cầu nhanh, tuyệt đối tránh **vỡ hồng cầu** vì nồng độ AST trong hồng cầu rất cao, gây sai số nghiêm trọng.",
    "testingMethods": "Đo hoạt độ enzym (Động học enzym).",
    "ref": "📊 **Nam:** < 37 U/L.\n📊 **Nữ:** < 31 U/L.\nTrẻ sơ sinh có thể tăng cao gấp 2-3 lần bình thường.",
    "alert": "⚠️ AST cực kỳ nhạy cảm với hiện tượng vỡ hồng cầu ống nghiệm. Nếu mẫu máu bị tiêu huyết, kết quả AST sẽ tăng vọt giả tạo.\n💡 Trong bệnh lý gan, phân tích tỷ số **AST/ALT (De Ritis)** mang lại giá trị định hướng chẩn đoán nguyên nhân cao hơn việc chỉ đọc mức tăng AST đơn độc.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng AST thường được phân tích qua Tỷ số De Ritis (AST/ALT):**\n  🔴 **AST/ALT > 2 (AST tăng ưu thế mạnh):**\n    ▫️ Viêm gan do rượu, xơ gan do rượu.\n  🔴 **AST/ALT > 1 (AST tăng ưu thế):**\n    ▫️ Xơ gan các loại, xâm nhiễm gan (ung thư di căn, lao, sarcoidosis).\n    ▫️ Tổn thương cơ tim (nhồi máu cơ tim) hoặc cơ vân (tiêu cơ vân).\n  🔴 **AST/ALT < 1 (ALT tăng ưu thế hơn):**\n    ▫️ Viêm gan virus cấp/mạn tính, bệnh gan nhiễm mỡ, tổn thương do thuốc.\n🔹 **Các nguyên nhân tăng cấp tính (AST > 10.000 U/L):**\n    ▫️ Gan sốc (thiếu máu cục bộ gan), ngộ độc Paracetamol nghiêm trọng.",
      "decrease": "Không có ý nghĩa lâm sàng đặc hiệu. Có thể giảm trong tình trạng thiếu hụt Vitamin B6 nặng, nhiễm toan ceton, suy thận mạn."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Vỡ hồng cầu gây sai số rất lớn (tăng giả tạo).\n💊 **Thuốc làm TĂNG AST:** Paracetamol, Statin, Isoniazid, Salicylate, thuốc tránh thai, thuốc chống co giật.",
    "clinicalNote": "Theo các cập nhật AASLD 2024-2025, tỷ số De Ritis (AST/ALT) > 1 ở bệnh nhân viêm gan mạn tính là một dấu hiệu cảnh báo bệnh đang tiến triển thành **xơ gan**. AST hiện cũng là thông số cấu thành bắt buộc trong công thức tính **chỉ số FIB-4** (dùng tuổi, AST, ALT, Tiểu cầu) để sàng lọc xơ hóa gan không xâm lấn."
  },
{
    "name": "Đo hoạt độ ALT (GPT) [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "ALT (Alanine Aminotransferase) hay GPT là enzym nội bào, xúc tác chuyển hóa acid amin. ALT **đặc hiệu cho gan** do hầu như chỉ tồn tại duy nhất trong bào tương tế bào gan.",
    "physiology": "📌 **Vị trí:** Phân bố chủ yếu ở **Gan** (nhiều nhất), sau đó là Thận, Tim, Cơ xương.\n📌 **Đặc tính:** Chỉ có mặt trong **bào tương** của tế bào.\n📌 **Động học:** Thời gian bán hủy trong máu là **47 giờ**.\n📌 **Cơ chế:** Khi màng tế bào gan tổn thương/hoại tử, ALT rò rỉ vào vòng tuần hoàn làm **tăng nồng độ máu**.",
    "indication": "🎯 **Chẩn đoán:** Tầm soát, đánh giá bệnh lý tổn thương gan (viêm gan cấp/mạn, xơ gan).\n🎯 **Theo dõi độc tính thuốc:** Các thuốc nguy cơ độc gan cao (Statin, thuốc kháng lao).\n🎯 **Tầm soát bệnh chuyển hóa:** Sàng lọc chủ động bệnh gan nhiễm mỡ liên quan đến rối loạn chuyển hóa (**MASLD**).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Thường không bắt buộc nhịn ăn.\n⚠️ **Lưu ý:** Phải tách hồng cầu nhanh, tránh **vỡ hồng cầu** làm sai lệch kết quả.",
    "testingMethods": "Đo hoạt độ enzym.",
    "ref": "📊 **Ngưỡng truyền thống:** Nam < 22 U/L, Nữ < 17 U/L. Trẻ sơ sinh tăng 2-3 lần bình thường.\n📊 **Cập nhật AASLD 2024-2025:** Ngưỡng bình thường thực tế (ULN) là **≤ 35 U/L (Nam)** và **≤ 25 U/L (Nữ)** nhằm tăng khả năng phát hiện sớm tổn thương gan.",
    "alert": "⚠️ Mức độ tăng ALT **không phản ánh tỷ lệ thuận** với mức độ nặng của tổn thương gan (Trong xơ gan hoặc viêm gan tối cấp, ALT có thể không tăng cao do tế bào gan đã suy kiệt).\n💡 Nồng độ ALT tăng nhẹ (dù < 40 U/L) hiện được xem là tín hiệu sớm của **kháng insulin** và gia tăng **rủi ro tim mạch**.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng ALT thường được phân tích qua Tỷ số De Ritis (AST/ALT) để định hướng nguyên nhân:**\n  🔴 **AST/ALT < 1 (ALT tăng ưu thế):**\n    ▫️ Viêm gan virus cấp/mạn (A, B, C, EBV, CMV).\n    ▫️ Viêm gan do thuốc hoặc nhiễm độc (Rifampicin, Paracetamol, CCl4...).\n    ▫️ Tắc mật ngoài gan, bệnh gan nhiễm mỡ liên quan rối loạn chuyển hóa (MASLD).\n  🔴 **AST/ALT > 1 (AST tăng ưu thế):**\n    ▫️ Xơ gan hoặc Viêm gan do rượu (đặc trưng).\n    ▫️ Tổn thương cơ tim (Nhồi máu cơ tim) hoặc cơ vân.\n    ▫️ Xâm nhiễm gan (di căn ung thư, lao, sarcoidosis).\n🔹 **Các nguyên nhân khác:**\n    ▫️ Hội chứng HELLP (tiền sản giật).\n    ▫️ Hội chứng Reye.\n    ▫️ Suy tim mất bù (gan xung huyết), viêm tụy.",
      "decrease": "Không có ý nghĩa lâm sàng đặc hiệu. Có thể gặp giảm trong **nhiễm toan ceton** do đái tháo đường, hoặc thiếu hụt **Vitamin B1, B6**."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Vỡ hồng cầu gây sai số.\n💊 **Thuốc làm TĂNG ALT:** Nhóm Statin (hạ mỡ máu), Paracetamol, kháng sinh, thuốc chống co giật, ức chế men chuyển, thuốc tránh thai (estrogen), NSAIDs.",
    "clinicalNote": "ALT là test nhạy nhất phát hiện sớm tổn thương gan do virus/thuốc (có thể tăng trước khi có biểu hiện vàng da). Bệnh nhân dùng **Statin** cần kiểm tra ALT 6 - 12 tuần sau khi bắt đầu dùng. Hiện nay, ALT kết hợp AST, tuổi và tiểu cầu được tính thành **chỉ số FIB-4** để đánh giá xơ hóa gan không xâm lấn trong quản lý bệnh **MASLD**."
  },
 {
    "name": "Đo hoạt độ GGT [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "GGT (Gamma-Glutamyl Transferase) là enzym gắn trên màng tế bào, tham gia chuyển hóa glutathion (chất chống oxy hóa). Mặc dù có mặt ở thận và tụy, nhưng GGT trong huyết tương chủ yếu có nguồn gốc từ gan và đường mật.",
    "physiology": "📌 **Đặc tính:** GGT là enzym cực kỳ nhạy nhưng thiếu tính đặc hiệu. Đây thường là enzym phản ứng đầu tiên khi có bất kỳ tổn thương gan mật nào.\n📌 **Thời gian bán hủy:** Khoảng 7-10 ngày, nhưng có thể kéo dài lên tới 28 ngày ở người lạm dụng rượu mạn tính do suy giảm thanh thải gan.\n📌 **Chỉ báo rượu:** Mức độ tăng GGT thường tỷ lệ thuận với lượng rượu tiêu thụ, khiến nó trở thành chỉ dấu theo dõi cai rượu hiệu quả.",
    "indication": "🎯 **Chẩn đoán:** Tình trạng ứ mật, viêm gan, xơ gan.\n🎯 **Chẩn đoán phân biệt:** Xác định nguồn gốc của tình trạng tăng Phosphatase kiềm (ALP) là do gan mật (GGT tăng) hay do xương (GGT bình thường).\n🎯 **Sàng lọc và Theo dõi:** Tình trạng lạm dụng rượu mạn tính.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn 8 giờ. **Đặc biệt:** Tuyệt đối không uống rượu bia trong vòng 24 giờ trước khi lấy máu.\n⚠️ **Lưu ý:** Phải tách hồng cầu nhanh để tránh vỡ hồng cầu.",
    "testingMethods": "Đo hoạt độ động học enzym.",
    "ref": "📊 **Nam:** 5 - 38 U/L.\n📊 **Nữ:** 5 - 29 U/L.\n*(Người béo phì có thể tăng 25-50%; Nữ dùng thuốc tránh thai giảm 20%)*",
    "alert": "⚠️ GGT bình thường không cho phép loại trừ hoàn toàn ngộ độc rượu. Ngược lại, GGT tăng cũng không khẳng định 100% nghiện rượu vì có thể do đái tháo đường, cường giáp hoặc thuốc.\n💡 Tỷ lệ **GGT / ALP > 2,5** là bằng chứng cực kỳ mạnh mẽ gợi ý tình trạng lạm dụng rượu.",
    "pathologicalMeaning": {
      "increase": "🔹 **Nhóm bệnh lý Gan - Mật:**\n  🔴 **Tổn thương tế bào gan:**\n    ▫️ Viêm gan do rượu (thường tăng > 3,5 lần ULN).\n    ▫️ Viêm gan mạn hoạt động, xơ gan, viêm gan virus.\n    ▫️ Viêm gan nhiễm độc hoặc do thuốc (Paracetamol, thuốc kháng lao).\n  🔴 **Tình trạng ứ mật:**\n    ▫️ Tắc mật cơ học (sỏi mật, u đầu tụy).\n    ▫️ Xơ gan ứ mật tiên phát (PBC) (tăng rất cao > 13 lần ULN).\n    ▫️ Xâm nhiễm gan (Ung thư di căn, áp xe).\n🔹 **Các nguyên nhân ngoài gan:**\n  🔴 **Bệnh lý khác:**\n    ▫️ Viêm tụy cấp/mạn tính.\n    ▫️ Nhồi máu cơ tim (tăng vào ngày 4-5 do gan ứ huyết).\n    ▫️ Bệnh phổi tắc nghẽn mạn tính (COPD), đái tháo đường.",
      "decrease": "Không có ý nghĩa lâm sàng đặc hiệu. Có thể gặp trong suy giáp."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Vỡ hồng cầu gây sai số.\n💊 **Thuốc làm TĂNG GGT:** Barbiturat (Phenobarbital), Phenytoin, Warfarin, Cimetidin, NSAIDs, thuốc tránh thai.\n💊 **Thuốc làm GIẢM GGT:** Clofibrat, thuốc chống đông.",
    "clinicalNote": "Theo bản cập nhật EASL 2025, GGT đóng vai trò cốt lõi trong chẩn đoán Xơ gan ứ mật tiên phát (PBC). Sự kết hợp giữa **ALP > 1.5 lần ULN và GGT tăng cao** là dấu hiệu bắt buộc để chỉ định đánh giá chuyên sâu kháng thể kháng ty thể (AMA)."
  },
  {
    "name": "Định lượng Triglyceride [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Triglyceride (TG) là dạng mỡ dự trữ chính trong cơ thể, cung cấp năng lượng cho tế bào. Chúng được vận chuyển trong máu chủ yếu dưới dạng Chylomicron (từ ruột) và VLDL (từ gan).",
    "physiology": "📌 **Nguồn gốc:** Tổng hợp nội sinh tại gan (dưới dạng VLDL) và ngoại sinh từ thức ăn (dưới dạng Chylomicron).\n📌 **Động học:** Nồng độ TG thấp nhất vào buổi sáng và đạt đỉnh quanh buổi trưa sau ăn.\n📌 **Rủi ro sinh lý:** Tăng TG thường phản ánh tình trạng quá tải VLDL, liên quan mật thiết với bệnh béo phì, kháng insulin và hội chứng chuyển hóa.",
    "indication": "🎯 **Sàng lọc:** Đánh giá rối loạn lipid máu, nguy cơ bệnh tim mạch xơ vữa (ASCVD).\n🎯 **Phòng ngừa:** Đánh giá nguy cơ viêm tụy cấp khi mỡ máu tăng cao.\n🎯 **Theo dõi:** Hiệu quả kiểm soát đường huyết ở bệnh nhân đái tháo đường.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn **12 giờ**. Không uống rượu trong 24 giờ trước khi xét nghiệm.\n⚠️ **Lưu ý:** Xét nghiệm sau ăn sẽ làm TG tăng vọt, gây sai lệch toàn bộ việc tính toán LDL-C (nếu dùng công thức Friedewald).",
    "testingMethods": "Phương pháp enzym so màu.",
    "ref": "📊 **Bình thường:** < 1,70 mmol/L (< 150 mg/dL).\n📊 **Giới hạn cao:** 1,70 - 2,24 mmol/L (150 - 199 mg/dL).\n📊 **Cao:** 2,25 - 5,63 mmol/L (200 - 499 mg/dL).\n📊 **Rất cao (Nguy hiểm):** ≥ 5,64 mmol/L (≥ 500 mg/dL).",
    "alert": "⚠️ Nồng độ **TG ≥ 500 mg/dL (5,64 mmol/L)** mang nguy cơ rất cao gây **Viêm tụy cấp**. Trọng tâm điều trị lúc này là hạ TG ngay lập tức thay vì phòng ngừa tim mạch.\n💡 Ở bệnh nhân đái tháo đường, TG cao thường đi kèm HDL-C thấp. Kiểm soát tốt đường huyết thường kéo theo sự cải thiện đáng kể của Triglyceride.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Triglyceride:**\n  🔴 **Nguyên nhân nguyên phát:**\n    ▫️ Tăng lipoprotein máu có tính gia đình (Typ I, IIb, III, IV, V).\n  🔴 **Nguyên nhân thứ phát (rất phổ biến):**\n    ▫️ Béo phì, thừa cân, lười vận động.\n    ▫️ Đái tháo đường kiểm soát kém, kháng insulin.\n    ▫️ Lạm dụng rượu.\n    ▫️ Hội chứng thận hư, suy thận mạn.\n    ▫️ Nhược giáp, bệnh gout.",
      "decrease": "🔹 **Giảm Triglyceride:**\n  🔴 **Nguyên nhân sinh lý / bệnh lý:**\n    ▫️ Chế độ ăn kiêng mỡ quá mức, suy dinh dưỡng.\n    ▫️ Hội chứng kém hấp thu.\n    ▫️ Cường giáp."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Không nhịn ăn đủ thời gian, ống máu để quá lâu.\n💊 **Thuốc làm TĂNG TG:** Corticosteroid, estrogen, thuốc tránh thai, chẹn beta giao cảm, lợi tiểu Thiazid.\n💊 **Thuốc làm GIẢM TG:** Fibrate, Niacin, Omega-3 liều cao, Statin, Metformin (nhờ kiểm soát đường).",
    "clinicalNote": "Theo bản cập nhật **AHA/ACC 2026**, đối với bệnh nhân có TG ở mức cao (200 - 499 mg/dL), mục tiêu điều trị cấp 1 vẫn là hạ LDL-C, sau đó **Cholesterol không phải HDL (Non-HDL-C)** sẽ trở thành mục tiêu điều trị cấp 2 quan trọng nhất. Fibrate hiện nay chủ yếu dùng để phòng ngừa viêm tụy khi TG > 500 mg/dL chứ không dùng thường quy để giảm biến cố tim mạch."
  },
  {
    "name": "Định lượng Cholesterol toàn phần [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Cholesterol là một lipid thiết yếu cấu tạo nên màng tế bào, là tiền chất tổng hợp acid mật, Vitamin D và các hormon steroid (cortisol, sinh dục). Trong máu, nó tồn tại dưới dạng liên kết với các Lipoprotein (HDL, LDL, VLDL).",
    "physiology": "📌 **Nguồn gốc:** Khoảng 80% được tổng hợp nội sinh tại gan (từ Acetyl CoA), 20% hấp thu từ thức ăn (ngoại sinh).\n📌 **Động học:** Nồng độ Cholesterol phản ánh tổng lượng phân bố trong tất cả các Lipoprotein. Nó không hòa tan trong nước nên bắt buộc phải gắn với apolipoprotein để di chuyển trong máu.",
    "indication": "🎯 **Sàng lọc:** Đánh giá bilan lipid máu định kỳ.\n🎯 **Dự báo:** Thành phần bắt buộc trong các thang điểm dự báo nguy cơ tim mạch (như SCORE2, PREVENT-ASCVD).\n🎯 **Theo dõi:** Đánh giá bệnh lý gan mật, tuyến giáp và hội chứng thận hư.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn **12 giờ**. Không uống rượu trong 24h.\n⚠️ **Lưu ý:** Tư thế lấy máu ảnh hưởng đến kết quả (tư thế nằm làm giảm nồng độ khoảng 10-15% so với đứng do dịch di chuyển).",
    "testingMethods": "Phương pháp enzym so màu.",
    "ref": "📊 **Mức mong muốn:** < 5,18 mmol/L (< 200 mg/dL).\n📊 **Giới hạn cao:** 5,18 - 6,19 mmol/L (200 - 239 mg/dL).\n📊 **Nguy cơ cao:** ≥ 6,20 mmol/L (≥ 240 mg/dL).",
    "alert": "⚠️ Chỉ số Cholesterol toàn phần đơn độc có giá trị tiên lượng tim mạch thấp hơn nhiều so với việc phân tích chi tiết LDL-C và HDL-C.\n💡 Theo **AHA/ACC 2026**, Cholesterol toàn phần được tích hợp vào phương trình **PREVENT-ASCVD** để dự báo xác suất biến cố tim mạch trong 10 năm và 30 năm cho người từ 30-79 tuổi.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Cholesterol toàn phần:**\n  🔴 **Rối loạn Lipid:**\n    ▫️ Tăng cholesterol máu có tính gia đình, tăng lipoprotein typ IIa, IIb, III.\n  🔴 **Nguyên nhân thứ phát:**\n    ▫️ Chế độ ăn giàu cholesterol và acid béo bão hòa.\n    ▫️ Xơ vữa động mạch, bệnh mạch vành.\n    ▫️ Đái tháo đường kiểm soát kém.\n    ▫️ Hội chứng thận hư, suy thận.\n    ▫️ Tắc mật, xơ gan ứ mật tiên phát.\n    ▫️ Nhược giáp.",
      "decrease": "🔹 **Giảm Cholesterol toàn phần:**\n  🔴 **Nguyên nhân thứ phát:**\n    ▫️ Suy dinh dưỡng, hội chứng kém hấp thu.\n    ▫️ Suy tế bào gan nặng (gan mất khả năng tổng hợp).\n    ▫️ Cường giáp.\n    ▫️ Nhiễm trùng nặng, sepsis, stress mạn tính."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Thay đổi tư thế đột ngột khi lấy máu. Biến thiên theo mùa (mùa đông cao hơn mùa hè 8%).\n💊 **Thuốc làm TĂNG:** Chẹn beta, Thiazid, steroid tăng đồng hóa, thuốc tránh thai, lithium.\n💊 **Thuốc làm GIẢM:** Statin, Fibrate, Niacin, ức chế men chuyển, estrogen, Allopurinol.",
    "clinicalNote": "Nếu Cholesterol toàn phần ≥ 5,2 mmol/L, bắt buộc phải khảo sát đầy đủ bộ mỡ máu (LDL-C, HDL-C, Triglyceride). Tình trạng giảm Cholesterol < 3.0 mmol/L ở bệnh nhân xơ gan là một dấu hiệu tiên lượng cực kỳ xấu, phản ánh tế bào gan đã hoại tử sâu và mất chức năng."
  },
  {
    "name": "Định lượng HDL-C [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "HDL-C (High-Density Lipoprotein Cholesterol) được mệnh danh là \"Cholesterol Tốt\". Nó thực hiện nhiệm vụ \"vận chuyển ngược\", thu gom cholesterol dư thừa từ các mô ngoại vi và mảng xơ vữa mạch máu đưa về gan để đào thải.",
    "physiology": "📌 **Đặc tính:** Có tỷ trọng cao nhất nhưng kích thước nhỏ nhất trong các Lipoprotein. Thành phần protein chính là Apolipoprotein A1.\n📌 **Chức năng:** Ngoài việc dọn dẹp cholesterol, HDL còn có đặc tính chống viêm, chống oxy hóa và bảo vệ nội mạc mạch máu.\n📌 **Tương quan:** Nồng độ HDL-C tương quan nghịch với nguy cơ mắc bệnh động mạch vành (CAD).",
    "indication": "🎯 **Sàng lọc:** Thành phần bắt buộc của bilan lipid máu.\n🎯 **Phân tầng nguy cơ:** Đánh giá rủi ro tim mạch xơ vữa (ASCVD).\n🎯 **Chẩn đoán:** Là một tiêu chuẩn chính trong chẩn đoán Hội chứng chuyển hóa.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn **12 giờ** (để đồng bộ với việc tính LDL-C).",
    "testingMethods": "Đo trực tiếp bằng enzym so màu hoặc kết tủa.",
    "ref": "📊 **Nam:** 0,9 - 1,4 mmol/L (35 - 54 mg/dL).\n📊 **Nữ:** 1,1 - 1,7 mmol/L (45 - 64 mg/dL).\n*(Ngưỡng bảo vệ tim mạch lý tưởng: > 1,55 mmol/L hay > 60 mg/dL)*.",
    "alert": "⚠️ HDL-C < 1,03 mmol/L (< 40 mg/dL) ở nam và < 1,30 mmol/L (< 50 mg/dL) ở nữ là yếu tố nguy cơ độc lập đe dọa biến cố tim mạch.\n💡 Các hướng dẫn **ESC 2025** và **AHA 2026** lưu ý: Mặc dù HDL thấp là rủi ro lớn, nhưng việc dùng thuốc để cố tình đẩy HDL lên cao (bằng Niacin hay CETP inhibitors) không mang lại lợi ích giảm tử vong tim mạch rõ ràng. Thay đổi lối sống vẫn là biện pháp tối ưu nhất.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng HDL-C (Có lợi):**\n  🔴 **Nguyên nhân:**\n    ▫️ Vận động thể lực cường độ cao thường xuyên.\n    ▫️ Chế độ ăn uống lành mạnh, giảm cân.\n    ▫️ Phụ nữ trong độ tuổi sinh đẻ (do tác dụng của Estrogen).\n    ▫️ Tăng Alphalipoprotein máu có tính gia đình.",
      "decrease": "🔹 **Giảm HDL-C (Nguy cơ cao):**\n  🔴 **Nguyên nhân chuyển hóa / lối sống:**\n    ▫️ Béo phì, hút thuốc lá, lười vận động.\n    ▫️ Đái tháo đường kiểm soát kém, kháng insulin.\n  🔴 **Bệnh lý tạng:**\n    ▫️ Suy thận mạn, hội chứng thận hư, urê máu cao.\n    ▫️ Bệnh lý tế bào gan, tắc mật.\n    ▫️ Bệnh Tangier (thiếu hụt cực nặng HDL có tính di truyền)."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Tăng Triglyceride quá cao (> 400 mg/dL) có thể làm sai lệch kết quả đo HDL-C ở một số máy xét nghiệm.\n💊 **Thuốc làm TĂNG:** Estrogen, Insulin, rượu (lượng vừa phải).\n💊 **Thuốc làm GIẢM:** Chẹn beta giao cảm, lợi tiểu Thiazid, Steroid, Androgen.",
    "clinicalNote": "Tỷ số **Cholesterol toàn phần / HDL-C** hoặc **ApoB / ApoA1** hiện được sử dụng trong nhiều bệnh viện thay vì chỉ nhìn vào một chỉ số đơn lẻ. Tỷ số Cholesterol/HDL-C > 4.5 ở nam hoặc > 4.0 ở nữ báo động nguy cơ xơ vữa đang diễn tiến."
  },
  {
    "name": "Định lượng LDL-C [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "LDL-C (Low-Density Lipoprotein Cholesterol) được gọi là \"Cholesterol Xấu\". LDL chuyên chở cholesterol từ gan đến các mô. Khi dư thừa, nó chui vào lớp nội mạc động mạch, bị oxy hóa, bị đại thực bào nuốt lấy và tạo thành mảng xơ vữa.",
    "physiology": "📌 **Cấu trúc:** Thành phần protein đặc trưng duy nhất là Apolipoprotein B (ApoB).\n📌 **Chức năng:** Nguồn cung cấp cholesterol cho quá trình tổng hợp màng tế bào và hormon.\n📌 **Bệnh sinh:** LDL-C là nguyên nhân **trực tiếp** gây ra bệnh xơ vữa động mạch và nhồi máu cơ tim.",
    "indication": "🎯 **Tiêu chuẩn vàng:** Là thông số quyết định để khởi trị, điều chỉnh liều thuốc hạ mỡ máu (Statin, Ezetimibe, PCSK9i).\n🎯 **Theo dõi:** Đánh giá hiệu quả điều trị phòng ngừa tiên phát và thứ phát bệnh lý tim mạch.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn **12 giờ** (Đặc biệt quan trọng nếu sử dụng công thức tính gián tiếp Friedewald).",
    "testingMethods": "Đo trực tiếp (Enzym so màu) hoặc Đo gián tiếp (Công thức Friedewald: LDL = TC - HDL - TG/2.2 [tính theo mmol/L]).",
    "ref": "📊 **Mức lý tưởng:** < 2,59 mmol/L (< 100 mg/dL).\n📊 **Giới hạn cao:** 3,36 - 4,11 mmol/L (130 - 159 mg/dL).\n📊 **Rất cao:** ≥ 4,91 mmol/L (≥ 190 mg/dL).",
    "alert": "⚠️ Nếu dùng công thức Friedewald để tính LDL, kết quả sẽ bị **sai số nghiêm trọng nếu Triglyceride > 4.5 mmol/L (400 mg/dL)**. Trong trường hợp này, bắt buộc phải đo LDL-C trực tiếp.\n💡 **Cập nhật cực kỳ quan trọng từ ESC 2025 / AHA 2026:** Mục tiêu LDL-C hiện nay áp dụng nguyên tắc \"Càng thấp càng tốt\" (The lower, the better). Với nhóm bệnh nhân có nguy cơ rất cao (đã từng bị nhồi máu cơ tim, đột quỵ), mục tiêu bắt buộc là **LDL-C < 1,4 mmol/L (< 55 mg/dL)** và phải giảm tối thiểu 50% so với mức nền.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng LDL-C (Nguy hiểm):**\n  🔴 **Nguyên nhân nguyên phát:**\n    ▫️ Tăng cholesterol máu có tính gia đình (Familial hypercholesterolemia).\n    ▫️ Tăng lipid máu Typ II và III.\n  🔴 **Nguyên nhân thứ phát:**\n    ▫️ Chế độ ăn nhiều mỡ bão hòa và cholesterol (mỡ động vật, thức ăn nhanh).\n    ▫️ Đái tháo đường, suy thận mạn, hội chứng thận hư.\n    ▫️ Nhược giáp, tắc mật, bệnh lý gan.",
      "decrease": "🔹 **Giảm LDL-C:**\n  🔴 **Nguyên nhân:**\n    ▫️ Cường giáp, suy gan nặng.\n    ▫️ Thiếu máu mạn tính, tình trạng stress cấp/nhiễm trùng nặng.\n    ▫️ Suy dinh dưỡng, hội chứng kém hấp thu.\n    ▫️ Sử dụng thuốc hạ mỡ máu (Đạt mục tiêu điều trị)."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Bệnh nhân không nhịn ăn đủ 12 tiếng làm tăng TG, kéo theo tính sai LDL-C.\n💊 **Thuốc làm TĂNG:** Steroid đồng hóa, Progestin, thuốc lợi tiểu.\n💊 **Thuốc làm GIẢM:** Nhóm Statin, Ezetimibe, ức chế PCSK9, Bempedoic Acid, Estrogen.",
    "clinicalNote": "Theo guideline **ESC 2025 và AHA 2026**, đối với bệnh nhân nhập viện vì Hội chứng vành cấp (ACS) mà có nồng độ LDL-C nền rất cao, khuyến cáo phối hợp ngay lập tức **Statin cường độ cao + Ezetimibe** (hoặc ức chế PCSK9) ngay trong thời gian nằm viện, thay vì chờ đợi tiếp cận bậc thang như trước đây."
  },
  {
    "name": "Định lượng Acid Uric [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Acid uric là sản phẩm thoái giáng của nhân purin (có trong DNA/RNA và thực phẩm giàu đạm). Chất này hòa tan kém trong máu và khi dư thừa sẽ dễ kết tủa thành các tinh thể urat sắc nhọn gây tổn thương khớp và thận.",
    "physiology": "📌 **Nguồn gốc:** Ngoại sinh (thực phẩm chứa purin như hải sản, nội tạng) và Nội sinh (quá trình chuyển hóa và phá hủy tế bào tự nhiên).\n📌 **Đào thải:** Chủ yếu qua thận (75%) và một phần qua đường tiêu hóa (25%).\n📌 **Động học:** Hệ số thanh thải acid uric phụ thuộc chặt chẽ vào mức lọc cầu thận và khả năng tái hấp thu/bài xuất của các ống thận.",
    "indication": "🎯 **Chẩn đoán:** Bệnh Gout, sỏi thận acid uric, suy thận không rõ nguyên nhân.\n🎯 **Sản khoa:** Theo dõi mức độ nặng và tiên lượng ở bệnh nhân nhiễm độc thai nghén, tiền sản giật.\n🎯 **Ung thư:** Theo dõi nguy cơ suy thận cấp do hội chứng ly giải khối u ở bệnh nhân đang hóa/xạ trị.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết tương hoặc Huyết thanh.\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn 4 - 8 giờ trước khi lấy máu.\n⚠️ **Lưu ý:** Bệnh nhân cần được dặn không ăn quá nhiều thực phẩm giàu purin hoặc uống rượu trước ngày xét nghiệm.",
    "testingMethods": "Phản ứng Enzym hoặc Đo màu.",
    "ref": "📊 **Nam:** 214 - 506 µmol/L (3,6 - 8,5 mg/dL).\n📊 **Nữ:** 137 - 393 µmol/L (2,3 - 6,6 mg/dL).",
    "alert": "⚠️ Việc điều trị bằng thuốc hạ acid uric cho các trường hợp \"tăng acid uric máu không triệu chứng\" (chưa từng có cơn gout cấp) hiện chưa có tiếng nói đồng thuận chung do thiếu bằng chứng về việc cải thiện nguy cơ tim mạch hoặc ngăn chặn tạo sỏi.\n💡 Khuyến cáo ưu tiên cho nhóm này là: Uống nhiều nước, kiêng rượu bia và hạn chế thực phẩm giàu purin.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng do sản xuất quá mức:**\n    ▫️ Tăng acid uric tiên phát (Gout vô căn).\n    ▫️ Phá hủy tổ chức ồ ạt: Hội chứng ly giải khối u (Leukemia, Lymphoma, sau hóa/xạ trị).\n    ▫️ Bệnh lý huyết học: Đa hồng cầu, tan máu, sốt rét.\n    ▫️ Chế độ ăn: Quá nhiều purin, béo phì, nhịn đói lâu ngày.\n🔹 **Tăng do giảm đào thải qua thận:**\n    ▫️ Suy thận cấp/mạn tính.\n    ▫️ Sử dụng thuốc lợi tiểu (Thiazid, Furosemid).\n    ▫️ Suy tim ứ huyết, nhiễm toan lactic, nghiện rượu cấp.\n🔹 **Bệnh lý khác:**\n    ▫️ Tiền sản giật, suy giáp, nhiễm độc chì.",
      "decrease": "🔹 **Giảm Acid Uric máu hiếm gặp hơn, có thể do:**\n    ▫️ Bệnh gan tổn thương nặng, bệnh Wilson.\n    ▫️ Khiếm khuyết enzyme bẩm sinh (đái xanthin).\n    ▫️ Bệnh Celiac hoặc to đầu chi."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Thu thập mẫu sai quy cách ở bệnh nhân đang dùng thuốc rasburicase (hóa trị).\n💊 **Thuốc làm TĂNG:** Lợi tiểu (Thiazid, Furosemid), Aspirin liều thấp (<4g/ngày), thuốc chống lao, hóa chất ung thư.\n💊 **Thuốc làm GIẢM:** Allopurinol, Aspirin liều cao, Corticosteroid, Vitamin C liều cao, Estrogen.",
    "clinicalNote": "Khoảng 80% bệnh nhân có tăng Triglycerid máu sẽ có kèm theo tăng Acid Uric máu. Sự gia tăng đồng thời này là những mảnh ghép điển hình của Hội chứng chuyển hóa, báo động rủi ro lớn về bệnh lý tim mạch do xơ vữa."
  },
  {
    "name": "Định lượng Albumin [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Albumin là protein phong phú nhất trong huyết thanh, đóng vai trò như một \"xe tải\" chuyên chở các chất (bilirubin, hormon, thuốc) và là yếu tố cốt lõi tạo ra **áp lực keo** giúp giữ nước lại trong lòng mạch, chống phù nề.",
    "physiology": "📌 **Tổng hợp:** Duy nhất tại Gan.\n📌 **Chức năng:** Duy trì áp lực keo huyết tương và vận chuyển acid béo, kim loại, thuốc.\n📌 **Động học:** Thời gian bán hủy (half-life) khá dài (khoảng 20 ngày), do đó nó phản ánh tình trạng tổn thương gan mạn tính tốt hơn là tổn thương cấp tính.",
    "indication": "🎯 **Dinh dưỡng:** Đánh giá tình trạng suy dinh dưỡng, suy nhược cơ thể.\n🎯 **Bệnh lý tạng:** Thăm dò và theo dõi bệnh lý gan mạn tính, hội chứng thận hư.\n🎯 **Hồi sức:** Cân nhắc chỉ định bù dịch, bù albumin ở bệnh nhân bỏng, đa chấn thương hoặc chọc hút cổ trướng lượng lớn.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh (ống khô).\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn trước khi lấy máu.\n⚠️ **Lưu ý:** Tư thế lấy máu có ảnh hưởng lớn. Tư thế nằm làm giảm nồng độ Albumin 10-15% so với tư thế đứng (do dịch di chuyển).",
    "testingMethods": "Đo màu (Bromcresol green/purple).",
    "ref": "📊 **Người lớn bình thường:** 33 - 55 g/L (3,3 - 5,5 g/dL).",
    "alert": "⚠️ Tình trạng giảm Albumin máu xuống mức < 45% so với Protein toàn phần luôn luôn mang ý nghĩa bệnh lý nghiêm trọng (thường gặp nhất là xơ gan hoặc hội chứng kém hấp thu).\n💡 Phương pháp đo BCP (bromcresol purple) có thể ước tính thấp hơn thực tế nồng độ albumin ở bệnh nhân suy thận mạn được lọc máu.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Albumin máu:**\n    ▫️ Hiếm khi gợi ý bệnh lý đặc hiệu. Chủ yếu gặp do tình trạng **cô đặc máu** (Mất nước nặng, nôn mửa, tiêu chảy).",
      "decrease": "🔹 **Giảm do giảm tổng hợp:**\n    ▫️ Xơ gan, viêm gan mạn tính.\n    ▫️ Suy dinh dưỡng, suy chức năng tuyến giáp.\n🔹 **Giảm do tăng mất ra ngoài:**\n    ▫️ Mất qua thận: Hội chứng thận hư.\n    ▫️ Mất qua tiêu hóa: Bệnh Crohn, viêm loét đại tràng, rò bạch mạch.\n    ▫️ Mất qua da: Bỏng rộng, chấn thương dập nát.\n🔹 **Giảm do pha loãng hoặc tăng dị hóa:**\n    ▫️ Phụ nữ có thai, suy tim ứ huyết.\n    ▫️ Sốt cao, ung thư, phản ứng pha cấp do nhiễm trùng."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Đặt garo quá chặt hoặc quá lâu làm tăng giả tạo do ứ trệ tĩnh mạch.\n💊 **Thuốc làm thay đổi kết quả:** Corticosteroid, thuốc tránh thai, Estrogen, Aspirin, Penicillin.",
    "clinicalNote": "Trong thực hành lâm sàng, nồng độ Albumin máu được dùng để hiệu chỉnh nồng độ Calci máu (Do khoảng 40% Calci gắn với Albumin). Khi Albumin máu giảm, nồng độ Calci toàn phần sẽ giảm theo một cách giả tạo, mặc dù lượng Calci tự do (có hoạt tính sinh lý) vẫn bình thường."
  },
  {
    "name": "Định lượng Protein toàn phần [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Protein toàn phần trong huyết thanh bao gồm 2 thành phần chính là **Albumin** và các **Globulin** (Alpha, Beta, Gamma). Nó phản ánh tổng quan tình trạng dinh dưỡng và cân bằng nội môi của cơ thể.",
    "physiology": "📌 **Albumin:** Do gan sản xuất, đảm nhận duy trì áp lực keo.\n📌 **Globulin:** Do gan và hệ thống miễn dịch (lympho bào B) sản xuất, tham gia vào đáp ứng miễn dịch, quá trình viêm, đông máu và tiêu fibrin.",
    "indication": "🎯 **Sàng lọc:** Thăm dò các bệnh lý gây phù nề, cổ trướng, tràn dịch đa màng.\n🎯 **Chẩn đoán:** Bệnh lý gamma globulin đơn dòng (Đa u tủy xương - Myeloma), bệnh lý gan, hội chứng thận hư, bệnh lý tự miễn.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Thường không bắt buộc nhịn ăn.",
    "testingMethods": "Phản ứng so màu (Biuret) kết hợp Điện di protein huyết thanh (nếu cần phân tích sâu).",
    "ref": "📊 **Bình thường:** 60 - 80 g/L (6,0 - 8,0 g/dL).",
    "alert": "⚠️ Xét nghiệm Protein toàn phần tương đối thô sơ. Bất kỳ sự tăng/giảm bất thường nào cũng cần được đánh giá tiếp bằng xét nghiệm **Điện di protein huyết thanh** để tìm nguyên nhân gốc rễ (như Đa u tủy xương).",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng do cô đặc máu:**\n    ▫️ Tình trạng mất nước nặng.\n🔹 **Tăng do rối loạn Gamma Globulin:**\n    ▫️ Bệnh Đa u tủy xương (Multiple Myeloma).\n    ▫️ Bệnh tăng macroglobulin máu Waldenstrom.\n    ▫️ Nhiễm trùng mạn tính, bệnh Sarcoidosis, bệnh tự miễn.",
      "decrease": "🔹 **Giảm do hòa loãng máu:**\n    ▫️ Lọc máu, truyền dịch quá mức, suy tim ứ huyết.\n    ▫️ Phụ nữ có thai những tháng cuối.\n🔹 **Giảm do giảm tổng hợp hoặc tăng mất protein:**\n    ▫️ Hội chứng thận hư (mất qua nước tiểu).\n    ▫️ Xơ gan, viêm gan mạn tính (gan không thể tổng hợp).\n    ▫️ Suy dinh dưỡng, hội chứng kém hấp thu, bệnh lý ruột gây mất protein."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Tình trạng vỡ hồng cầu hoặc đặt garo quá lâu làm tăng giả tạo nồng độ protein toàn phần.\n💊 **Thuốc làm thay đổi kết quả:** Corticosteroid, thuốc tránh thai, Estrogen, Penicillin.",
    "clinicalNote": "Tỷ số **Albumin/Globulin (A/G)** có ý nghĩa chẩn đoán rất lớn. Bình thường A/G dao động 1,3 - 1,8. Nếu A/G < 1 (đảo ngược tỷ số A/G), bác sĩ phải nghĩ ngay đến bệnh lý Xơ gan (suy giảm tổng hợp Albumin trầm trọng) hoặc Đa u tủy xương (sản xuất Globulin vô tội vạ)."
  },
  {
    "name": "Định lượng Bilirubin toàn phần [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Bilirubin (sắc tố mật) là sản phẩm thoái hóa của Hemoglobin sinh ra từ quá trình phá hủy hồng cầu già cỗi. Bilirubin toàn phần là tổng của Bilirubin gián tiếp (chưa liên hợp) và Bilirubin trực tiếp (đã liên hợp tại gan).",
    "physiology": "📌 **Chuyển hóa:** Hồng cầu vỡ giải phóng Hemoglobin -> tạo thành Bilirubin gián tiếp (không tan trong nước) -> được gan giữ lại và liên hợp với glucuronid thành Bilirubin trực tiếp (tan trong nước) -> bài xuất vào đường mật và thải ra phân.",
    "indication": "🎯 **Chẩn đoán:** Bệnh lý gan mật (viêm gan, xơ gan, sỏi mật, u đường mật).\n🎯 **Huyết học:** Đánh giá tình trạng tan máu (hemolysis).\n🎯 **Nhi khoa:** Đánh giá vàng da sơ sinh để quyết định liệu pháp chiếu đèn (quang trị liệu).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Nhịn ăn 4 - 8 giờ, nhưng được phép uống nước.\n⚠️ **Lưu ý đặc biệt:** Bilirubin cực kỳ nhạy cảm với ánh sáng, phải **tránh phơi sáng trực tiếp** và chuyển mẫu đo ngay (ánh sáng làm giảm tới 50% nồng độ mỗi giờ). Tránh tuyệt đối vỡ hồng cầu.",
    "testingMethods": "Phản ứng so màu.",
    "ref": "📊 **Người lớn:** < 17,1 µmol/L (0,2 - 1,0 mg/dL).\n📊 **Trẻ sơ sinh:** < 171 µmol/L (< 10 mg/dL).",
    "alert": "⚠️ Nồng độ Bilirubin máu phải vượt mức > 40 µmol/L (2,5 mg/dL) thì mới gây ra biểu hiện vàng da, vàng mắt trên lâm sàng.\n💡 Tăng Bilirubin máu liên hợp > 17 µmol/L (1,0 mg/dL) ở trẻ nhỏ luôn chỉ dẫn tình trạng bệnh lý nặng nề.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng sản xuất (Ưu thế Bilirubin Gián tiếp):**\n    ▫️ Tan máu (Sốt rét, tan máu tự miễn, bệnh do không tương hợp Rh sơ sinh).\n    ▫️ Tạo hồng cầu không hiệu quả (Thiếu máu Biermer), cường lách, khối máu tụ lớn.\n🔹 **Giảm liên hợp tại gan:**\n    ▫️ Hội chứng Gilbert (thường gặp, bẩm sinh), Hội chứng Crigler-Najjar.\n    ▫️ Suy tim mất bù, dùng thuốc (Rifampicin).\n🔹 **Bệnh lý nhu mô gan và tắc mật (Tăng hỗn hợp hoặc Trực tiếp):**\n    ▫️ Viêm gan cấp/mạn, xơ gan, ung thư gan.\n    ▫️ Tắc mật ngoài gan (Sỏi ống mật chủ, u đầu tụy).",
      "decrease": "Không có ý nghĩa bệnh lý lâm sàng đặc hiệu."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Tiêu huyết (vỡ hồng cầu) hoặc mẫu tiếp xúc với ánh sáng làm sai lệch kết quả.\n💊 **Thuốc làm TĂNG:** Adrenalin, thuốc điều trị sốt rét, thuốc tránh thai, Rifampicin, Vitamin C, kháng sinh nhóm Sulfonamid.\n💊 **Thuốc làm GIẢM:** Barbituric, Corticosteroid, Penicillin, Ethanol.",
    "clinicalNote": "Bilirubin toàn phần không phải là một chỉ số nhạy để chẩn đoán sớm tổn thương gan, vì chỉ tăng khi gan đã tổn thương đáng kể. Tuy nhiên, trong viêm gan do rượu, nồng độ Bilirubin toàn phần > 85 µmol/L (5 mg/dL) là dấu hiệu cảnh báo tiên lượng rất xấu."
  },
  {
    "name": "Định lượng Bilirubin trực tiếp [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Bilirubin trực tiếp (Bilirubin liên hợp) là sản phẩm sinh ra sau khi gan xử lý Bilirubin gián tiếp. Vì đã được gắn với acid glucuronic, nó trở nên **hòa tan được trong nước**, do đó có thể lọc qua thận và đào thải vào nước tiểu.",
    "physiology": "📌 **Đặc tính:** Bình thường, Bilirubin trực tiếp chỉ chiếm < 20% lượng Bilirubin toàn phần lưu hành trong máu.\n📌 **Bệnh sinh:** Khi tế bào gan tổn thương hoặc đường mật bị tắc, Bilirubin trực tiếp trào ngược vào máu, lọc qua thận làm nước tiểu có màu vàng sậm (như nước vối).",
    "indication": "🎯 **Chẩn đoán phân biệt:** Khi xét nghiệm Bilirubin toàn phần tăng, bắt buộc phải đo Bilirubin trực tiếp để phân biệt vàng da do bệnh gan/tắc mật (Trực tiếp tăng) với vàng da do tan máu (Trực tiếp bình thường).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Nhịn ăn 4 - 8 giờ.\n⚠️ **Lưu ý đặc biệt:** Giống như Bilirubin toàn phần, bắt buộc phải bảo quản bệnh phẩm **tránh ánh sáng** và tránh vỡ hồng cầu.",
    "testingMethods": "Phản ứng so màu.",
    "ref": "📊 **Người lớn:** 0 - 7,0 µmol/L (0,0 - 0,4 mg/dL). *(Một số bệnh viện dùng ngưỡng < 5,1 µmol/L)*.",
    "alert": "⚠️ Sự xuất hiện của Bilirubin trong nước tiểu luôn là Bilirubin trực tiếp và là một dấu hiệu phát hiện rất sớm bệnh lý gan mật (vì Bilirubin gián tiếp không thể lọc qua thận).",
    "pathologicalMeaning": {
      "increase": "🔹 **Đánh giá qua Tỷ lệ Bilirubin trực tiếp / Bilirubin toàn phần:**\n  🔴 **Tăng ưu thế (> 50%):**\n    ▫️ Tắc nghẽn đường mật ngoài gan (Sỏi ống mật chủ, khối u đường mật, u đầu tụy). Gợi ý nguyên nhân \"Sau gan\".\n  🔴 **Tăng hỗn hợp (20 - 50%):**\n    ▫️ Bệnh lý nhu mô gan: Viêm gan virus, xơ gan, tổn thương gan do thuốc. Gợi ý nguyên nhân \"Tại gan\".\n  🔴 **< 20% (Tăng ưu thế gián tiếp):**\n    ▫️ Hội chứng Gilbert, vàng da tan máu.",
      "decrease": "Không có ý nghĩa bệnh lý lâm sàng đặc hiệu."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Phơi sáng làm phân hủy Bilirubin nhanh chóng.\n💊 **Thuốc:** Các thuốc gây tổn thương tế bào gan hoặc gây ứ mật (như một số loại kháng sinh, thuốc tránh thai) sẽ làm tăng Bilirubin trực tiếp.",
    "clinicalNote": "Nếu có tình trạng tăng Bilirubin trực tiếp, bác sĩ cần lập tức đánh giá thêm các enzyme đường mật như **Phosphatase kiềm (ALP)** và **GGT**. Nếu ALP và GGT cùng tăng cao, chẩn đoán tắc nghẽn đường mật là gần như chắc chắn."
  },
   {
    "name": "Định lượng CRP / hs-CRP [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "CRP (C-Reactive Protein) là protein phản ứng pha cấp do gan sản xuất. Nó là chỉ dấu nhạy bén cho tình trạng viêm hệ thống và tổn thương mô. Hiện nay có 2 loại: **CRP chuẩn** (đánh giá viêm/nhiễm trùng) và **hs-CRP siêu nhạy** (đánh giá rủi ro viêm mạch máu và tim mạch).",
    "physiology": "📌 **Tổng hợp:** Được gan sản xuất dưới sự kích thích của các cytokine (Interleukin-1, 6) trong quá trình phá hủy mô.\n📌 **Động học:** Nồng độ tăng cực nhanh trong vòng **6 giờ** sau khi bắt đầu viêm và mất đi nhanh chóng khi hết viêm.\n📌 **Ưu điểm:** Nhạy hơn Tốc độ lắng hồng cầu (ESR) và không bị ảnh hưởng bởi những thay đổi về hematocrit hay globulin máu.",
    "indication": "🎯 **Đánh giá viêm (CRP chuẩn):** Chẩn đoán và theo dõi mức độ tiến triển của phản ứng viêm (ruột thừa, bệnh tự miễn, nhiễm trùng do vi khuẩn).\n🎯 **Phân tầng rủi ro (hs-CRP):** Đánh giá nguy cơ nhồi máu cơ tim, đột quỵ ở bệnh nhân có yếu tố nguy cơ tim mạch hoặc đái tháo đường typ 2.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Thường không bắt buộc nhịn ăn. Cần vận chuyển nhanh tới phòng xét nghiệm.",
    "testingMethods": "Đo độ đục miễn dịch (Immunoturbidimetric).",
    "ref": "📊 **CRP chuẩn (Viêm):** < 1,0 mg/dL (< 10 mg/L).\n📊 **hs-CRP (Nguy cơ tim mạch):** Nguy cơ thấp (< 1 mg/L); Nguy cơ Vừa (1-3 mg/L); Nguy cơ Cao (> 3 mg/L).",
    "alert": "⚠️ Ở bệnh nhân có biểu hiện dịch não tủy nghi ngờ viêm màng não mủ nhưng soi Gram âm tính, nồng độ CRP máu bình thường có giá trị **dự đoán âm tính rất cao**, giúp loại trừ căn nguyên do vi khuẩn.\n💡 Tăng hs-CRP là lời cảnh báo mạch máu đang bị viêm âm ỉ, bệnh nhân cần chủ động thay đổi lối sống để giảm rủi ro tim mạch.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng CRP chuẩn (Viêm cấp/mạn):**\n  🔴 **Nhiễm trùng:**\n    ▫️ Viêm ruột thừa, viêm màng não, viêm phần phụ, lao tiến triển.\n    ▫️ Nhiễm khuẩn huyết (sepsis), nhiễm trùng nặng do vi khuẩn.\n  🔴 **Tổn thương mô & Phản ứng viêm:**\n    ▫️ Nhồi máu cơ tim, bỏng nặng, phẫu thuật (trong 3 ngày đầu).\n    ▫️ Viêm tụy cấp.\n  🔴 **Bệnh lý tự miễn:**\n    ▫️ Viêm khớp dạng thấp, Lupus ban đỏ hệ thống (SLE), bệnh ruột viêm (Viêm loét đại tràng, Crohn).\n🔹 **Tăng hs-CRP:**\n  🔴 **Bệnh lý tim mạch & Chuyển hóa:**\n    ▫️ Mảng xơ vữa đang tiến triển, tăng nguy cơ nhồi máu mạch vành, đột quỵ, Đái tháo đường typ 2.",
      "decrease": "Không có ý nghĩa bệnh lý lâm sàng đặc hiệu."
    },
    "interferingFactors": "❌ **Giao thoa:** Đặt dụng cụ tránh thai (IUD), béo phì, có thai, tập thể dục quá sức có thể làm tăng nhẹ kết quả.\n💊 **Thuốc làm TĂNG:** Liệu pháp thay thế hormon (HRT), thuốc ngừa thai.\n💊 **Thuốc làm GIẢM:** NSAIDs, Aspirin, Corticosteroid, thuốc hạ mỡ máu nhóm Statin, chẹn beta giao cảm.",
    "clinicalNote": "Theo bản cập nhật **ESC 2025/AHA 2026**, hs-CRP (cùng với Lipoprotein(a)) được nhấn mạnh là dấu ấn cực kỳ quan trọng để đánh giá **tình trạng viêm tồn dư**. Ở các bệnh nhân đã kiểm soát tốt LDL-C (đạt mục tiêu) nhưng hs-CRP vẫn cao, mảng xơ vữa vẫn có nguy cơ nứt vỡ và bệnh nhân vẫn đối mặt với rủi ro nhồi máu cơ tim."
  },
  {
    "name": "Đo hoạt độ LDH [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "LDH (Lactate Dehydrogenase) là một enzym nội bào xúc tác chuyển hóa pyruvate thành lactate. Do có mặt ở hầu hết các mô trong cơ thể, LDH có độ nhạy rất cao với tình trạng phá hủy tế bào nhưng lại **thiếu tính đặc hiệu** cơ quan.",
    "physiology": "📌 **Phân bố:** Tồn tại dưới 5 loại isoenzym. LDH-1 (nhiều nhất ở tim, hồng cầu); LDH-2 (hệ lưới nội mô); LDH-3 (phổi); LDH-4 (thận, tụy); LDH-5 (gan, cơ vân).\n📌 **Động học (trong Nhồi máu cơ tim):** Tăng sau 8 giờ, đạt đỉnh ở 48 giờ và kéo dài rất lâu (10-15 ngày).",
    "indication": "🎯 **Huyết học:** Chẩn đoán phân biệt các loại thiếu máu (Thiếu máu tan máu, thiếu máu Biermer).\n🎯 **Ung bướu:** Đánh giá tình trạng hoạt động và tiên lượng khối u (bệnh bạch cầu, u lympho).\n🎯 **Chẩn đoán phân biệt:** Cùng với AST/ALT và CK để xác định tổn thương gan, cơ vân hay phổi.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn.\n⚠️ **Lưu ý cực kỳ quan trọng:** Tuyệt đối không xét nghiệm mẫu máu bị **vỡ hồng cầu** (vì LDH trong hồng cầu cao gấp 100 lần huyết thanh). Không bảo quản lạnh mẫu (4°C) quá 12h vì sẽ làm hỏng LDH-5.",
    "testingMethods": "Đo hoạt độ enzym (Động học).",
    "ref": "📊 **LDH toàn phần:** 110 - 210 U/L (có thể thay đổi tùy hệ thống máy).",
    "alert": "⚠️ Trong chẩn đoán Nhồi máu cơ tim cấp, hiện nay xét nghiệm Troponin đã gần như thay thế hoàn toàn LDH do tính đặc hiệu tuyệt đối. Tuy nhiên, LDH vẫn giữ nguyên giá trị cốt lõi trong Huyết học và Hồi sức (Ví dụ: hội chứng vùi lấp).",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng do tổn thương Cơ tim / Cơ vân:**\n  🔴 **Cơ tim:** Nhồi máu cơ tim cấp (kéo dài tới 14 ngày), viêm cơ tim.\n  🔴 **Cơ vân:** Tiêu cơ vân do chấn thương (hội chứng vùi lấp), bỏng điện, loạn dưỡng cơ Duchene, viêm đa cơ.\n🔹 **Tăng do Bệnh lý Huyết học & Ung thư:**\n  🔴 **Huyết học:** Thiếu máu do tan máu, thiếu máu Biermer (tạo hồng cầu không hiệu quả), tan máu do van tim nhân tạo.\n  🔴 **Ung thư:** Leukemia, U lympho, di căn ung thư đặc.\n🔹 **Tăng do tổn thương Gan / Mật:**\n  🔴 **Gan:** Viêm gan nhiễm độc, viêm gan virus (LDH-5 tăng rõ), xơ gan, di căn gan.\n🔹 **Các nguyên nhân khác:** Nhồi máu phổi, tắc mạch phổi, nhồi máu vỏ thận, viêm tụy cấp.",
      "decrease": "Chỉ gặp sau khi bệnh nhân được chiếu tia xạ hoặc có khiếm khuyết di truyền (rất hiếm)."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Vỡ hồng cầu gây tăng vọt giả tạo. Bệnh nhân tập thể dục quá sức trước khi lấy máu làm tăng LDH.\n💊 **Thuốc làm TĂNG:** Rượu, Aspirin, thuốc mê, kháng sinh, chẹn beta giao cảm, NSAIDs, Verapamil.\n💊 **Thuốc làm GIẢM:** Vitamin C, Oxalat.",
    "clinicalNote": "Để tối ưu hóa chẩn đoán khi LDH tăng cao, bác sĩ luôn phải biện luận kết hợp: \n- LDH tăng + Haptoglobin giảm = **Chắc chắn có tan máu**.\n- LDH tăng + CPK tăng (Transaminase bình thường) = **Bệnh lý cơ vân/Cơ tim**.\n- LDH tăng + Transaminase tăng (CPK bình thường) = **Bệnh lý tế bào gan**."
  },
  {
    "name": "Định lượng Sắt huyết thanh",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Sắt (Fe) là vi khoáng thiết yếu để tổng hợp Hemoglobin (vận chuyển oxy) và các cytochrom. Xét nghiệm Sắt huyết thanh đo lượng sắt đang được **vận chuyển trong máu**, không phản ánh toàn bộ lượng sắt dự trữ trong gan/tủy xương.",
    "physiology": "📌 **Vận chuyển:** Sắt lưu hành trong dòng máu nhờ gắn với protein Transferrin.\n📌 **Dự trữ:** Khoảng 30% sắt của cơ thể được tích trữ tại gan, lách, tủy xương dưới dạng Ferritin và Hemosiderin.\n📌 **Động học:** Nồng độ Sắt giao động mạnh theo nhịp ngày đêm (cao nhất vào buổi sáng sớm, thấp nhất vào nửa đêm).",
    "indication": "🎯 **Huyết học:** Chẩn đoán phân biệt nguyên nhân thiếu máu (thiếu sắt, Thalassemia, thiếu máu bệnh mạn tính).\n🎯 **Thừa sắt:** Chẩn đoán bệnh nhiễm thiết huyết tố (Hemochromatosis) hoặc ngộ độc sắt cấp.\n🎯 **Theo dõi:** Đánh giá hiệu quả điều trị bù sắt.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn 12 giờ. **Bắt buộc lấy máu vào buổi sáng** (trước 10h).\n⚠️ **Lưu ý:** Ngừng uống thuốc chứa sắt/vitamin tổng hợp ít nhất 24-48 giờ trước xét nghiệm. Tuyệt đối tránh vỡ hồng cầu.",
    "testingMethods": "Phương pháp đo quang phổ.",
    "ref": "📊 **Nam:** 12,5 - 34,1 µmol/L (70 - 190 µg/dL).\n📊 **Nữ:** 10,7 - 34,1 µmol/L (60 - 190 µg/dL).\n*(Ở người già, nồng độ sắt huyết thanh thường giảm đi tự nhiên)*.",
    "alert": "⚠️ Sắt huyết thanh là một chỉ số rất \"đỏng đảnh\", dễ bị thay đổi tạm thời bởi thức ăn và phản ứng viêm. Đo Sắt đơn độc **không đủ độ tin cậy** để chẩn đoán thiếu sắt. Bắt buộc phải kết hợp với Ferritin, Transferrin và Độ bão hòa Transferrin (TIBC).",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng do quá tải Sắt:**\n  🔴 **Di truyền:** Bệnh nhiễm thiết huyết tố (Hemochromatosis).\n  🔴 **Ngoại sinh:** Tăng lắng đọng sắt (Hemosiderosis) do truyền máu nhiều lần, ngộ độc sắt cấp tính.\n🔹 **Tăng do phá hủy tế bào:**\n  🔴 **Tan huyết:** Tan máu miễn dịch, Thalassemia.\n  🔴 **Tổn thương gan:** Hoại tử gan cấp (phóng thích ồ ạt sắt dự trữ vào máu).\n🔹 **Tăng do giảm tạo hồng cầu:**\n  🔴 **Tủy xương:** Thiếu máu bất sản, thiếu máu Biermer, viêm khớp dạng thấp thể hoạt động.\n🔹 **Các nguyên nhân khác:** Có thai, dùng thuốc tránh thai (estrogen), ngộ độc chì.",
      "decrease": "🔹 **Giảm do thiếu hụt thực sự:**\n  🔴 **Cung cấp kém / Hấp thu kém:** Chế độ ăn thiếu dinh dưỡng, hội chứng kém hấp thu, bệnh Celiac.\n  🔴 **Mất máu mạn tính:** Loét dạ dày - tá tràng, trĩ, giun móc, rong kinh.\n  🔴 **Tăng nhu cầu:** Phụ nữ mang thai, trẻ em đang tuổi lớn.\n🔹 **Giảm do tái phân bố (Không thiếu sắt thực sự):**\n  🔴 **Hội chứng viêm:** Nhiễm trùng cấp/mạn tính, ung thư, viêm khớp (sắt bị hệ võng nội mô \"nhốt\" lại, không đưa ra máu)."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Vỡ hồng cầu làm tăng giả tạo. Máu đục do mỡ làm giảm giả tạo.\n💊 **Thuốc làm TĂNG:** Estrogen, Vitamin B12, Methotrexate, kháng sinh Chloramphenicol.\n💊 **Thuốc làm GIẢM:** Aspirin, Metformin, Allopurinol, Corticosteroid, Testosteron.",
    "clinicalNote": "Cách biện luận thiếu máu cực kỳ quan trọng: \n- **Thiếu sắt thực sự:** Sắt giảm, Transferrin tăng (cơ thể thèm khát sắt), Độ bão hòa < 15%, Ferritin giảm.\n- **Thiếu máu do viêm mạn tính:** Sắt giảm nhưng Transferrin thấp, Độ bão hòa > 15% và Ferritin tăng cao. \n💡 *Theo Hiệp hội USPSTF (Mỹ), sàng lọc tình trạng thiếu máu thiếu sắt là bắt buộc cho mọi phụ nữ mang thai không có triệu chứng.*"
  },
  {
    "name": "Định lượng Ethanol (Cồn) [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Ethanol (hay Ethyl Alcohol) là chất gây ức chế hệ thần kinh trung ương có trong rượu bia. Xét nghiệm nồng độ Ethanol là tiêu chuẩn vàng để xác định ngộ độc rượu cấp và cung cấp bằng chứng pháp lý trong các tai nạn giao thông.",
    "physiology": "📌 **Động học:** Hấp thu rất nhanh (đạt đỉnh sau 1 giờ). Bị đào thải hoàn toàn qua gan và hô hấp sau 4-5 giờ.\n📌 **Đặc tính:** Ở bệnh nhân bị cắt dạ dày, nồng độ cồn tăng vọt đạt đỉnh chỉ sau 25 phút. Hấp thu cùng với thức ăn sẽ làm giảm đỉnh nồng độ.",
    "indication": "🎯 **Cấp cứu nội khoa:** Chẩn đoán hôn mê, lú lẫn, rối loạn hành vi do ngộ độc rượu cấp.\n🎯 **Bilan toan kiềm:** Thăm dò nguyên nhân gây tăng khoảng trống áp lực thẩm thấu máu (Osmolal Gap).\n🎯 **Pháp y:** Cung cấp bằng chứng pháp lý đối với người gây tai nạn giao thông.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần, Huyết thanh hoặc Huyết tương.\n⏳ **Chuẩn bị:** Không cần nhịn ăn. Cần có người làm chứng nếu mẫu dùng cho mục đích pháp lý.\n⚠️ **Lưu ý Pháp y (Cực kỳ quan trọng):** Tuyệt đối **KHÔNG dùng cồn** hay dung dịch chứa I-ốt có cồn để sát trùng da lấy máu. Mẫu phải được niêm phong trong túi chuyên dụng và ký nhận bàn giao đúng quy trình.",
    "testingMethods": "Sắc ký khí (Tiêu chuẩn vàng) hoặc Kỹ thuật miễn dịch.",
    "ref": "📊 **Bình thường:** 0 mg/dL (hoặc 0 mmol/L).\n📊 **Ngưỡng pháp lý:** Tùy thuộc vào quy định luật pháp của từng quốc gia.",
    "alert": "⚠️ Nồng độ cồn > 400 mg/dL (4 g/L) có thể gây hạ thân nhiệt, hạ đường huyết, co giật. Nồng độ > 700 mg/dL gây suy hô hấp tồi tệ và tử vong.",
    "pathologicalMeaning": {
      "increase": "🔹 **Ngộ độc rượu cấp tính (Biểu hiện tương ứng nồng độ):**\n  🔴 **50 mg/dL:** Giảm ức chế, mất phối hợp vận động nhẹ.\n  🔴 **100 mg/dL:** Thời gian phản ứng chậm, cảm giác bị biến đổi.\n  🔴 **150 - 200 mg/dL:** Đi đứng loạng choạng, buồn nôn, lú lẫn, thay đổi nhân cách.\n  🔴 **300 mg/dL:** Nói líu nhíu, mất cảm giác, rối loạn thị lực.\n  🔴 **> 400 mg/dL:** Ức chế trung tâm hô hấp, mất ý thức, nguy cơ tử vong.",
      "decrease": "Không có ý nghĩa lâm sàng."
    },
    "interferingFactors": "❌ **Lỗi kỹ thuật:** Dùng bông tẩm cồn sát khuẩn tĩnh mạch gây dương tính giả.\n💊 **Tương tác khuếch đại:** Tác dụng ức chế thần kinh của cồn sẽ bị tăng lên mức nguy hiểm tính mạng nếu dùng chung với: Thuốc ngủ (Barbiturat), thuốc an thần (Diazepam), thuốc kháng Histamin, và nhóm Opiate.",
    "clinicalNote": "Ở bệnh nhân cấp cứu vì ngộ độc rượu hoặc hôn mê không rõ nguyên nhân, bác sĩ luôn phải chỉ định kèm xét nghiệm **Glucose máu**. Rượu ức chế quá trình tân tạo glucose tại gan, khiến bệnh nhân rất dễ rơi vào hạ đường huyết cấp tính đe dọa tính mạng."
  },
  {
    "name": "Đo hoạt độ Amylase [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Amylase là enzym thủy phân carbohydrat phức tạp (tinh bột) thành đường đơn. Trong máu, Amylase được tạo ra từ 2 nguồn chính: Tuyến tụy (Isoenzym P) và Tuyến nước bọt (Isoenzym S).",
    "physiology": "📌 **Vị trí:** Chủ yếu ở Tụy và Tuyến nước bọt. Một lượng nhỏ ở niêm mạc ruột non, buồng/vòi trứng.\n📌 **Động học (trong viêm tụy cấp):** Bắt đầu tăng từ 3 - 6 giờ, đạt đỉnh sau 24 giờ và thường trở về bình thường nhanh chóng sau 2 - 3 ngày. Do kích thước nhỏ, nó dễ dàng bị lọc qua thận ra nước tiểu.",
    "indication": "🎯 **Cấp cứu bụng:** Tiêu chuẩn quan trọng để chẩn đoán viêm tụy cấp hoặc đợt cấp viêm tụy mạn.\n🎯 **Chẩn đoán phân biệt:** Phân biệt đau bụng do nguyên nhân tụy với các cấp cứu ngoại khoa ổ bụng khác (thủng tạng rỗng, tắc ruột).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn trước khi lấy máu.\n⚠️ **Lưu ý:** Bệnh phẩm bị nhiễm bẩn nước bọt (ví dụ người lấy mẫu vô tình hắt hơi/nói chuyện) có thể gây tăng giả tạo.",
    "testingMethods": "Đo hoạt độ enzym.",
    "ref": "📊 **Người lớn:** 53 - 123 U/L. *(Người cao tuổi có thể tăng nhẹ).* \n📊 **Amylase niệu:** 0 - 375 U/L.",
    "alert": "⚠️ Bệnh nhân viêm tụy cấp do lạm dụng rượu thường có nồng độ Amylase máu **hoàn toàn bình thường**. \n💡 Mức độ tăng Amylase không phản ánh tỷ lệ thuận với độ hoại tử của tụy.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng do bệnh lý Tụy (Tăng Isoenzym P):**\n  🔴 **Tuyến tụy:** Viêm tụy cấp, đợt cấp của viêm tụy mạn, biến chứng nang giả tụy, chấn thương tụy, ung thư đầu tụy.\n  🔴 **Đường mật:** Tắc nghẽn ống mật (sỏi ống mật chủ), sau thủ thuật ERCP.\n🔹 **Tăng do các cấp cứu Ổ bụng & Tiêu hóa khác:**\n  🔴 **Ngoại khoa:** Thủng ổ loét dạ dày - tá tràng, tắc ruột, nhồi máu mạc treo, viêm túi mật cấp.\n  🔴 **Phụ khoa:** Chửa ngoài tử cung vỡ, u nang buồng trứng, viêm phần phụ.\n🔹 **Tăng do bệnh lý Tuyến nước bọt (Tăng Isoenzym S):**\n  🔴 Quai bị, viêm mưng mủ tuyến nước bọt, sỏi tuyến nước bọt, sau tia xạ.\n🔹 **Các nguyên nhân khác:**\n  🔴 Suy thận (giảm đào thải), nhiễm toan ceton do đái tháo đường, ngộ độc rượu cấp, phình tách động mạch chủ.",
      "decrease": "🔹 **Giảm do phá hủy cơ quan đích:**\n  🔴 Tuyến tụy bị phá hủy lan rộng: Viêm tụy cấp thể bùng phát hoại tử, viêm tụy mạn giai đoạn cuối.\n  🔴 Tổn thương gan nặng (Viêm gan nhiễm độc, bỏng nặng)."
    },
    "interferingFactors": "❌ **Hiện tượng Macro-amylase:** Phân tử amylase bị gắn với globulin tạo thành phân tử khổng lồ không lọc qua được thận. Hậu quả: Amylase máu tăng cao dai dẳng nhưng Amylase niệu bình thường (không có viêm tụy).\n❌ **Lỗi mẫu:** Vỡ hồng cầu hoặc tăng Triglycerid quá cao (> 5 lần bình thường) gây ức chế enzym (âm tính giả).\n💊 **Thuốc làm TĂNG:** NSAIDs, Corticosteroid, Paracetamol, lợi tiểu Thiazid, Opiate.",
    "clinicalNote": "Tiêu chuẩn chẩn đoán Viêm tụy cấp yêu cầu hoạt độ Amylase máu **≥ 3 lần** giới hạn trên bình thường. Nếu bệnh nhân đến viện muộn (sau 3-4 ngày), Amylase máu có thể đã về bình thường. Lúc này, chỉ định **Đo Lipase máu** và **Amylase niệu** (tồn tại ở mức cao 7-10 ngày) là vũ khí cứu cánh để không bỏ sót chẩn đoán."
  },
 {
    "name": "Đo hoạt độ CK-MB [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "CK-MB là một trong ba isoenzym của Creatin Kinase (CK), đóng vai trò chủ chốt trong việc xúc tác quá trình cung cấp năng lượng. Khác với CK-MM (ở cơ vân) hay CK-BB (ở não), CK-MB **khu trú chủ yếu ở cơ tim**.",
    "physiology": "📌 **Tỷ lệ:** Trong điều kiện bình thường, CK-MB chỉ chiếm khoảng 5% tổng lượng CK toàn phần của cơ thể.\n📌 **Động học (Nhồi máu cơ tim):** Bắt đầu tăng từ 4 - 8 giờ sau khi cơ tim bị hoại tử, đạt đỉnh ở 12 - 36 giờ và **trở về bình thường rất nhanh** vào ngày thứ 4 (Nhanh hơn so với Troponin và LDH).",
    "indication": "🎯 **Chẩn đoán:** Tình trạng hoại tử hoặc tổn thương cơ tim cấp tính.\n🎯 **Phát hiện tái nhồi máu:** Do thời gian bán hủy ngắn, CK-MB đặc biệt hữu ích để chẩn đoán nhồi máu cơ tim tái phát ở giai đoạn bán cấp (khi Troponin vẫn còn đang ở mức cao từ lần nhồi máu đầu tiên).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Thường được chỉ định làm cấp cứu (đo nhiều lần trong 4-24h). Không bắt buộc nhịn ăn.\n⚠️ **Lưu ý:** Tuyệt đối tránh làm vỡ hồng cầu. Không được tiêm bắp trong vòng 1 giờ trước khi lấy máu (gây nhiễu từ cơ vân).",
    "testingMethods": "Đo hoạt độ enzym miễn dịch (Immunoinhibition) hoặc Khối lượng (Mass assay).",
    "ref": "📊 **Nồng độ CK-MB:** Nam < 4,4 ng/mL; Nữ < 4,4 ng/mL.\n📊 **Chỉ số CK-MB (CK-MB Index):** 0,0 - 4,0 (Tỷ lệ phần trăm giữa CK-MB / CK toàn phần).",
    "alert": "⚠️ Tăng CK-MB không thể khẳng định 100% là tổn thương cơ tim nếu không xét đến Chỉ số CK-MB Index, vì nó có thể tăng do chấn thương cơ vân nặng, bỏng điện hoặc suy thận.\n💡 **Cập nhật AHA/ACC 2025:** Trong phác đồ hội chứng vành cấp (ACS) hiện đại, **Troponin nhạy cao (hs-cTn)** là tiêu chuẩn vàng tuyệt đối nhờ khả năng phát hiện tổn thương ở mức picogram. CK-MB hiện không còn là lựa chọn đầu tay để chẩn đoán NMCT cấp, nhưng vẫn giữ vai trò quan trọng khi xét nghiệm Troponin không khả dụng hoặc để đánh giá tái nhồi máu sớm.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng do tổn thương Cơ tim (Chỉ số CK-MB Index > 4%):**\n  🔴 **Bệnh lý mạch vành:**\n    ▫️ Nhồi máu cơ tim cấp.\n  🔴 **Tổn thương cơ tim trực tiếp:**\n    ▫️ Phẫu thuật tim mở (trở về mức nền sau 24-48h), đụng dập cơ tim.\n    ▫️ Viêm cơ tim do virus, nhiễm độc CO.\n🔹 **Tăng do tổn thương Cơ vân (Chỉ số CK-MB Index < 4%):**\n  🔴 **Chấn thương & Bệnh lý:**\n    ▫️ Tiêu cơ vân, bỏng điện nhiệt, loạn dưỡng cơ, viêm đa cơ.\n  🔴 **Hoạt động quá sức:**\n    ▫️ Vận động viên thể lực mạnh (Chạy marathon).",
      "decrease": "Không có ý nghĩa bệnh lý lâm sàng đặc hiệu."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Vỡ hồng cầu làm tăng giả tạo.\n💊 **Thuốc làm TĂNG CK-MB:** Aspirin, thuốc chống đông, Cocain, Dexamethason, Furosemid, Rượu, nhóm Statin.",
    "clinicalNote": "Đo CK-MB chỉ thực sự có giá trị khi nồng độ CK toàn phần tăng. Tiêu chuẩn phần trăm (**Chỉ số CK-MB Index**) rất quan trọng: Nếu tỷ lệ CK-MB/CK toàn phần > 4% (hoặc > 2.5% theo một số hệ thống), tổn thương chắc chắn có nguồn gốc từ cơ tim. Nếu < 4%, nguồn gốc chủ yếu từ cơ vân."
  },
  {
    "name": "Định lượng Lactat [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Lactat (Acid Lactic) là sản phẩm của quá trình chuyển hóa yếm khí carbohydrat (khi tế bào không được cung cấp đủ Oxy). Các vị trí sản xuất chính là cơ vân, não và hồng cầu.",
    "physiology": "📌 **Chuyển hóa:** Lactat được sản xuất tại mô và được chuyển hóa/thanh thải hoàn toàn tại **Gan** (để tân tạo glycogen).\n📌 **Bệnh sinh:** Sự tích tụ acid lactic quá mức trong máu phản ánh tình trạng tăng sản xuất (thiếu oxy mô) hoặc giảm thanh thải (suy gan), gây ra tình trạng **nhiễm toan chuyển hóa với khoảng trống anion tăng cao**.",
    "indication": "🎯 **Hồi sức cấp cứu:** Chẩn đoán và theo dõi diễn biến của tình trạng sốc, nhiễm trùng huyết (Sepsis).\n🎯 **Nội khoa:** Đánh giá tình trạng nhiễm toan chuyển hóa không rõ nguyên nhân.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết tương máu động mạch hoặc tĩnh mạch.\n⏳ **Chuẩn bị:** Bệnh nhân không được hoạt động thể lực vài giờ trước XN.\n⚠️ **Lưu ý đặc biệt:** Đặt garo quá lâu hoặc bóp tay nhiều lần làm **tăng giả tạo** Lactat. Máu lấy xong phải bảo quản ngay trong **đá lạnh** và phân tích lập tức (nếu để ở nhiệt độ phòng, Lactat tăng gấp đôi mỗi 30 phút do hồng cầu tiếp tục chuyển hóa).",
    "testingMethods": "Đo quang phổ / Điện cực.",
    "ref": "📊 **Bình thường:** 0,5 - 2,2 mmol/L (Máu tĩnh mạch).",
    "alert": "⚠️ Nồng độ Lactat máu > 30 mmol/L ở bệnh nhân hồi sức cấp cứu mang ý nghĩa tiên lượng cực kỳ xấu, nguy cơ tử vong rất cao.\n💡 **Cập nhật Surviving Sepsis Campaign (SSC) 2026:** Việc đo Lactat máu hiện được coi là **bắt buộc** đối với tất cả các ca nghi ngờ nhiễm trùng huyết nhằm đánh giá tình trạng giảm tưới máu mô. Nếu Lactat tăng cao (đặc biệt > 2 mmol/L), phải bắt đầu truyền dịch tinh thể hồi sức (30 mL/kg) ngay lập tức.",
    "pathologicalMeaning": {
      "increase": "🔹 **Nhiễm toan Lactic Typ A (Do giảm oxy mô nghiêm trọng):**\n  🔴 **Sốc & Thiếu máu cục bộ:**\n    ▫️ Sốc nhiễm khuẩn (Sepsis), sốc tim, sốc giảm thể tích.\n    ▫️ Tắc nghẽn mạch máu mạc treo, thiếu máu cục bộ chi.\n    ▫️ Ngạt thở, ngộ độc CO.\n🔹 **Nhiễm toan Lactic Typ B (Không do thiếu oxy mô):**\n  🔴 **Bệnh lý chuyển hóa & Tạng:**\n    ▫️ Suy tế bào gan nặng (gan mất khả năng thanh thải Lactat).\n    ▫️ Đái tháo đường, suy thận mạn.\n  🔴 **Do thuốc & Độc chất:**\n    ▫️ Thuốc đái tháo đường nhóm Biguanide (Metformin), Salicylate, cồn (Ethanol).",
      "decrease": "Hạ thân nhiệt."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Để máu ở nhiệt độ phòng, garo quá chặt, hoặc máu bị vỡ hồng cầu.\n💊 **Thuốc làm TĂNG Lactat:** Rượu (Ethanol), Adrenalin, Natri Bicarbonat, truyền Glucose khối lượng lớn.",
    "clinicalNote": "Tăng acid lactic máu (hyperlactatémie) là khi Lactat tăng nhưng pH máu chưa biến đổi. Nhiễm toan lactic (lactic acidosis) là khi Lactat tăng cao (thường > 7 mmol/L) kèm theo giảm pH máu. Cần lưu ý xét nghiệm này không đo được D-lactat (một loại toan hiếm gặp nhưng dễ bị bỏ sót ở bệnh nhân ruột ngắn)."
  },
  {
    "name": "Streptococcus Pyogenes ASO [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "ASLO (Anti-Streptolysin O) là kháng thể do hệ miễn dịch sinh ra để chống lại Streptolysin-O - một loại enzym độc do vi khuẩn Liên cầu tan máu beta nhóm A (Group A Streptococcus) tiết ra.",
    "physiology": "📌 **Động học:** Kháng thể ASLO bắt đầu xuất hiện trong máu từ 7 - 10 ngày sau đợt nhiễm liên cầu cấp, tiếp tục tăng và đạt đỉnh trong vòng 2 - 4 tuần.\n📌 **Thoái triển:** Điển hình, nồng độ ASLO sẽ giảm dần và trở về mức cơ sở trong vòng từ 6 đến 12 tháng sau khi bệnh nhân khỏi bệnh.",
    "indication": "🎯 **Chẩn đoán hồi cứu:** Cung cấp bằng chứng xác nhận bệnh nhân đã từng nhiễm Liên cầu nhóm A gần đây (đặc biệt khi cấy dịch họng không còn tìm thấy vi khuẩn).\n🎯 **Bệnh lý hậu liên cầu:** Hỗ trợ chẩn đoán Thấp tim (Thấp khớp cấp) và Viêm cầu thận cấp sau nhiễm liên cầu.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn trước khi lấy máu.\n⚠️ **Lưu ý:** Thường cần lấy 2 mẫu máu cách nhau 10 - 14 ngày để so sánh hiệu giá kháng thể (xem có đang tăng lên hay không).",
    "testingMethods": "Phản ứng ngưng kết hoặc Miễn dịch độ đục.",
    "ref": "📊 **Trẻ sơ sinh (0 - 2 tuổi):** < 50 đơn vị Todd/mL.\n📊 **Trẻ nhỏ (2 - 5 tuổi):** < 160 đơn vị Todd/mL.\n📊 **Trẻ em (5 - 12 tuổi):** < 170 đơn vị Todd/mL.\n📊 **Người lớn:** < 160 đơn vị Todd/mL.",
    "alert": "⚠️ Xét nghiệm ASLO đơn độc chỉ giúp phát hiện được 75 - 85% các trường hợp nhiễm trùng do liên cầu. Nồng độ ASLO thường **không tăng** ở người bị nhiễm trùng da do liên cầu (như chốc lở).\n💡 ASLO cao chỉ chứng minh có sự hiện diện của kháng thể, nó **không giúp dự đoán** liệu bệnh nhân có bị biến chứng hay không, và cũng không phản ánh mức độ nặng của tình trạng nhiễm trùng.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng hiệu giá kháng thể ASLO (Dương tính):**\n  🔴 **Biến chứng miễn dịch hậu liên cầu:**\n    ▫️ Thấp khớp cấp (Sốt thấp khớp - Rheumatic fever) (Tăng ở >80% bệnh nhân).\n    ▫️ Viêm cầu thận cấp sau nhiễm liên cầu (Tăng ở 95% bệnh nhân).\n  🔴 **Nhiễm trùng liên cầu tiến triển:**\n    ▫️ Bệnh tinh hồng nhiệt (Scarlet fever).\n    ▫️ Viêm nội tâm mạc do liên cầu nhóm A.",
      "decrease": "Không có ý nghĩa lâm sàng đặc hiệu."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Vỡ hồng cầu hoặc nồng độ Lipid máu tăng quá cao có thể gây kết quả dương tính giả.\n💊 **Thuốc làm GIẢM hiệu giá ASLO:** Kháng sinh (vì tiêu diệt vi khuẩn sớm làm giảm tạo kháng thể) và Corticosteroid (ức chế miễn dịch).",
    "clinicalNote": "Đứng trước một bệnh nhân đau sưng khớp cấp tính hoặc phù/tiểu máu (viêm cầu thận), xét nghiệm ASLO là chìa khóa để bác sĩ xác định xem tổn thương này là do viêm khớp/viêm thận thông thường hay là hệ lụy của một đợt viêm họng do liên cầu cách đó vài tuần."
  },
  {
    "name": "Định lượng RF (Yếu tố dạng thấp) [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Yếu tố dạng thấp (Rheumatoid Factor - RF) chủ yếu là các tự kháng thể typ IgM, được hệ miễn dịch của cơ thể sản xuất ra để tấn công lại chính đoạn Fc của các kháng thể IgG bị biến đổi. Kháng thể này lắng đọng tại màng hoạt dịch khớp gây viêm và sưng đau.",
    "physiology": "📌 **Động học:** RF xuất hiện trong huyết thanh và dịch khớp vài tháng sau khi khởi phát Viêm khớp dạng thấp và có thể tồn tại nhiều năm sau khi điều trị.\n📌 **Ý nghĩa:** Có khoảng 50 - 95% bệnh nhân người lớn bị Viêm khớp dạng thấp có yếu tố RF dương tính trong máu.",
    "indication": "🎯 **Chẩn đoán:** Hỗ trợ chẩn đoán Viêm khớp dạng thấp (đặc biệt các ca khó phân biệt trên lâm sàng).\n🎯 **Miễn dịch:** Chẩn đoán hội chứng Sjogren (khi kết hợp với kháng thể Anti-Ro/Anti-La).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn.",
    "testingMethods": "Kỹ thuật đo độ đục (Nephelometry), Test Latex, hoặc Phản ứng Waaler - Rose.",
    "ref": "📊 **Định tính:** Âm tính.\n📊 **Đo độ đục:** < 60 U/mL (hoặc < 60 kU/L).\n📊 **Ngưỡng dương tính (Định lượng):** > 1/32 (Waaler-Rose) hoặc > 1:80 (Test Latex).",
    "alert": "⚠️ Test RF (+) **không hoàn toàn đặc hiệu** cho Viêm khớp dạng thấp. Phát hiện RF ở mức hiệu giá thấp có thể gặp ở 4% người bình thường và lên tới 20% người > 70 tuổi khỏe mạnh.\n💡 Test RF (-) cũng không loại trừ được Viêm khớp dạng thấp (được gọi là Viêm khớp dạng thấp thể huyết thanh âm tính).",
    "pathologicalMeaning": {
      "increase": "🔹 **Yếu tố RF Dương tính (Tăng):**\n  🔴 **Bệnh tự miễn & Mô liên kết:**\n    ▫️ Viêm khớp dạng thấp (Rheumatoid Arthritis).\n    ▫️ Hội chứng Sjogren, Lupus ban đỏ hệ thống (SLE), Xơ cứng bì.\n    ▫️ Viêm da cơ (Dermatomyositis).\n  🔴 **Bệnh lý Viêm / Nhiễm trùng mạn tính:**\n    ▫️ Viêm nội tâm mạc bán cấp nhiễm khuẩn (Osler).\n    ▫️ Lao, Giang mai, Sốt rét.\n    ▫️ Nhiễm virus: Viêm gan C, Viêm gan mạn tính, Rubella, Tăng bạch cầu đơn nhân (EBV).\n  🔴 **Các bệnh lý Tạng & Ác tính:**\n    ▫️ Xơ gan, Bệnh phổi kẽ, Sarcoidosis.\n    ▫️ Tăng macroglobulin máu Waldenstrom, Globulin tủa lạnh (Cryoglobulinemia).",
      "decrease": "Không có ý nghĩa bệnh lý."
    },
    "interferingFactors": "❌ **Dương tính giả:** Rất hay gặp ở người già, người có tăng nồng độ lipid máu nặng, hoặc người vừa mới tiêm phòng nhiều loại vaccine / truyền máu gần đây.\n💡 **Thông tin thêm:** Các thuốc giảm đau chống viêm như Aspirin và NSAIDs không gây nhiễu, không làm thay đổi kết quả RF.",
    "clinicalNote": "Theo tiêu chuẩn chẩn đoán Viêm khớp dạng thấp (ACR), Yếu tố RF (+) là 1 trong 7 tiêu chuẩn cốt lõi (Bệnh nhân cần đạt ít nhất 4/7 tiêu chuẩn và kéo dài trên 6 tuần). Trên lâm sàng, RF thường được xét nghiệm kết hợp với Anti-CCP (có độ đặc hiệu cao hơn RF rất nhiều) và các chỉ số viêm (CRP, Máu lắng) để đưa ra quyết định chẩn đoán chính xác."
  },
     {
    "name": "Điện giải đồ (Na, K, Cl) [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Điện giải đồ là xét nghiệm định lượng các ion chủ chốt ở dịch ngoài tế bào, trong đó: **Natri (Na+)** quyết định áp lực thẩm thấu; **Kali (K+)** cực kỳ quan trọng cho dẫn truyền thần kinh và co bóp cơ tim; **Clo (Cl-)** đi kèm Na+ để duy trì thăng bằng toan-kiềm.",
    "physiology": "📌 **Natri (Na+):** Ion dương chính ngoài tế bào, được điều hòa bởi Aldosteron, Cortisol và ADH.\n📌 **Kali (K+):** Ion dương chính trong tế bào, nồng độ máu rất thấp. Bơm Na+-K+ ATPase duy trì chênh lệch này.\n📌 **Clo (Cl-):** Ion âm chính ngoài tế bào, tương quan nghịch với Bicarbonat (HCO3-) trong hệ đệm toan-kiềm.",
    "indication": "🎯 **Sàng lọc:** Rối loạn thăng bằng nước - điện giải và toan - kiềm.\n🎯 **Bệnh lý:** Suy thận cấp/mạn, suy tim, xơ gan, đái tháo đường mất bù.\n🎯 **Giám sát điều trị:** Bệnh nhân dùng thuốc lợi tiểu, thuốc hạ huyết áp (ACEi/ARB), truyền dịch, hoặc dùng thuốc SGLT2i/MRA theo hướng dẫn tim-thận mới.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh hoặc huyết tương.\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn. Cần khai báo các thuốc đang sử dụng.\n⚠️ **Lưu ý đặc biệt:** Tránh buộc garo quá lâu hoặc cho bệnh nhân co duỗi tay liên tục khi lấy máu vì sẽ làm **tăng giả tạo Kali máu** lên tới 20%. Mẫu vỡ hồng cầu tuyệt đối không đo Kali.",
    "testingMethods": "Điện cực chọn lọc ion (Ion Selective Electrode - ISE).",
    "ref": "📊 **Natri:** 135 - 145 mmol/L. Ngưỡng nguy hiểm: <121 hoặc >158 mmol/L.\n📊 **Kali:** 3,5 - 5,0 mmol/L. Ngưỡng nguy hiểm: <2,5 hoặc >6,5 mmol/L.\n📊 **Clo:** 96 - 110 mmol/L.",
    "alert": "⚠️ Tăng hoặc giảm Kali máu đều có thể gây **loạn nhịp tim đe dọa tính mạng**. Hạ Kali làm tăng độc tính của Digitalis.\n💡 Bệnh nhân dùng **Finerenone (MRA mới)** hoặc thuốc ức chế men chuyển/chẹn thụ thể (ACEi/ARB) theo chuẩn ADA 2025/KDIGO 2024 cần theo dõi sát Kali máu vì nguy cơ tăng Kali.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Natri máu:**\n    ▫️ Mất nước (đái tháo nhạt, nôn, ỉa chảy, hôn mê tăng thẩm thấu).\n    ▫️ Cường Aldosteron tiên phát, hội chứng Cushing.\n🔹 **Tăng Kali máu:**\n    ▫️ Suy thận cấp/mạn (khi GFR giảm nặng).\n    ▫️ Chuyển dịch ion: Nhiễm toan ceton, ly giải khối u, tiêu cơ vân, bỏng nặng.\n    ▫️ Bệnh Addison (suy thượng thận).\n🔹 **Tăng Clo máu:**\n    ▫️ Toan chuyển hóa mất Bicarbonat (tiêu chảy kéo dài).\n    ▫️ Toan hóa do ống thận.",
      "decrease": "🔹 **Giảm Natri máu:**\n    ▫️ Ứ đọng dịch (Suy tim ứ huyết, xơ gan, hội chứng thận hư).\n    ▫️ Hội chứng SIADH (Tăng tiết ADH không thích hợp).\n🔹 **Giảm Kali máu:**\n    ▫️ Mất qua tiêu hóa (Nôn, ỉa chảy mạn).\n    ▫️ Mất qua thận (Dùng lợi tiểu quai/Thiazid, cường Aldosteron).\n    ▫️ Chuyển dịch ion: Nhiễm kiềm, dùng Insulin.\n🔹 **Giảm Clo máu:**\n    ▫️ Mất acid dạ dày (Nôn nhiều, hút dịch vị).\n    ▫️ Kiềm chuyển hóa."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Vỡ hồng cầu làm tăng vọt Kali giả tạo do Kali từ trong nội bào rò rỉ ra ngoài.\n💊 **Thuốc làm TĂNG Kali:** ACEi, ARB, MRA (Spironolacton, Finerenone), NSAIDs.\n💊 **Thuốc làm GIẢM Kali:** Lợi tiểu quai (Furosemid), Thiazid, Insulin (đẩy K+ vào tế bào).",
    "clinicalNote": "Theo KDIGO 2024 và tim mạch hiện đại, mọi bệnh nhân suy thận mạn (CKD) hoặc suy tim dùng SGLT2i và MRA (như Finerenone) bắt buộc phải có phác đồ theo dõi điện giải định kỳ để kiểm soát nguy cơ tăng Kali máu, giúp bệnh nhân an toàn duy trì các loại thuốc bảo vệ cơ quan đích này."
  },
  {
    "name": "Định lượng Calci toàn phần [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Calci (Ca) là khoáng chất phong phú nhất cơ thể, 99% nằm trong xương. Calci máu toàn phần bao gồm: dạng tự do (ion hóa - có hoạt tính), dạng gắn protein (chủ yếu là Albumin), và dạng phức hợp (với citrate, phosphate).",
    "physiology": "📌 **Điều hòa:** Chịu sự kiểm soát nghiêm ngặt của 3 yếu tố: Hormon cận giáp (PTH), Vitamin D và Calcitonin.\n📌 **Chức năng:** Tham gia dẫn truyền thần kinh, co cơ (đặc biệt cơ tim), và quá trình đông máu.\n📌 **Liên kết:** Khoảng 40-45% Calci toàn phần gắn với Albumin. Do đó, nồng độ Calci toàn phần phụ thuộc rất lớn vào nồng độ Albumin trong máu.",
    "indication": "🎯 **Sàng lọc:** Đánh giá các rối loạn chuyển hóa xương, bệnh lý tuyến cận giáp.\n🎯 **Bệnh lý:** Suy thận mạn (CKD-MBD), sỏi thận, bệnh lý ác tính di căn xương, đa u tủy xương.\n🎯 **Hồi sức:** Tình trạng co giật (tetany), rối loạn nhịp tim.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn trước khi lấy máu. Ngừng các thuốc bổ sung Calci trước đó nếu được chỉ định.\n⚠️ **Lưu ý:** Buộc garo quá lâu gây ứ trệ tĩnh mạch sẽ làm **tăng giả tạo** Calci máu.",
    "testingMethods": "Đo quang phổ (P/p so màu).",
    "ref": "📊 **Người lớn:** 2,1 - 2,6 mmol/L (8,5 - 10,5 mg/dL).\n📊 **Trẻ em:** Thường cao hơn người lớn do quá trình phát triển xương.",
    "alert": "⚠️ Tình trạng tăng Calci máu bất kể nguyên nhân gì có thể hoàn toàn không có triệu chứng cho đến khi đột ngột biểu hiện bằng các rối loạn nhịp tim nguy hiểm.\n💡 Khoảng 30% bệnh nhân ung thư có di căn xương (như vú, phổi, đa u tủy) sẽ bị tăng Calci máu do hội chứng nội tiết cận u hoặc tiêu xương.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Calci toàn phần:**\n    ▫️ Cường tuyến cận giáp tiên phát (Adenoma hoặc tăng sản).\n    ▫️ Bệnh lý ác tính (Di căn xương có tiêu xương, Đa u tủy xương, U lympho).\n    ▫️ Hội chứng tăng Calci máu thể dịch (do khối u tiết chất giống PTH).\n    ▫️ Ngộ độc Vitamin D, lạm dụng thuốc kháng acid dạ dày chứa Calci.\n    ▫️ Bệnh tạo u hạt (Sarcoidosis, Lao).",
      "decrease": "🔹 **Giảm Calci toàn phần:**\n    ▫️ Giảm Albumin máu (nguyên nhân cực kỳ phổ biến làm giảm Calci toàn phần nhưng Calci ion hóa vẫn bình thường).\n    ▫️ Suy thận mạn (do giảm tổng hợp Vitamin D hoạt tính và ứ đọng Phosphate).\n    ▫️ Suy tuyến cận giáp (Sau phẫu thuật vùng cổ hoặc tự miễn).\n    ▫️ Thiếu hụt Vitamin D (Còi xương, nhuyễn xương, hội chứng kém hấp thu).\n    ▫️ Viêm tụy cấp thể hoại tử chảy máu."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Tăng giả tạo do ứ trệ tĩnh mạch kéo dài. Giảm giả tạo khi dùng ống chống đông EDTA (vì EDTA gắp Calci).\n💊 **Thuốc làm TĂNG:** Lợi tiểu Thiazid, Lithium, Vitamin A & D, Androgen.\n💊 **Thuốc làm GIẢM:** Lợi tiểu quai (Furosemid), Calcitonin, Bisphosphonates, Corticosteroid, Magie Sulfat.",
    "clinicalNote": "Khi Albumin máu giảm, Calci toàn phần sẽ giảm theo giả tạo. Bác sĩ luôn phải áp dụng công thức hiệu chỉnh: **Calci hiệu chỉnh = Calci đo được + 0,8 × (4,0 - Albumin bệnh nhân)**. Theo KDIGO 2024, kiểm soát Calci và Phosphate là cực kỳ quan trọng ở bệnh nhân suy thận mạn để ngăn ngừa biến chứng mạch máu vôi hóa."
  },
  {
    "name": "Định lượng Calci ion hóa [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Calci ion hóa ($Ca^{2+}$) là dạng Calci tự do, không gắn với protein (chiếm khoảng 45-50% tổng lượng Calci trong máu). Đây là phần Calci duy nhất có **hoạt tính sinh lý** trực tiếp tham gia vào các hoạt động của tế bào.",
    "physiology": "📌 **Đặc tính:** Không bị ảnh hưởng bởi sự thay đổi nồng độ Albumin trong máu.\n📌 **Ảnh hưởng của pH:** Tương quan nghịch với pH máu. Tình trạng nhiễm kiềm làm tăng gắn Calci vào protein, làm giảm Calci ion hóa (gây co rút cơ). Nhiễm toan làm tăng Calci ion hóa.",
    "indication": "🎯 **Ưu tiên chỉ định:** Khám và hồi sức cấp cứu ở các bệnh nhân nặng, suy đa tạng, sốc.\n🎯 **Bệnh lý:** Phẫu thuật lớn, truyền máu khối lượng lớn (Citrat trong máu truyền sẽ gắp Calci ion hóa), bệnh nhân suy gan, hội chứng thận hư, rối loạn toan-kiềm nghiêm trọng.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần hoặc huyết thanh (lấy vào ống chân không hoàn toàn kín).\n⏳ **Chuẩn bị:** Thường không bắt buộc nhịn ăn.\n⚠️ **Lưu ý:** Phải tránh tiếp xúc mẫu với không khí (làm mất CO2 gây kiềm hóa máu, làm giảm giả tạo Calci ion hóa).",
    "testingMethods": "Điện cực chọn lọc ion (ISE).",
    "ref": "📊 **Người lớn:** 1,14 - 1,30 mmol/L.\n📊 **Trẻ sơ sinh:** Nồng độ thường có biến động sinh lý trong những ngày đầu sau sinh.",
    "alert": "⚠️ Triệu chứng hạ Calci máu (tê bì quanh miệng, co cứng cơ - cơn Tetany, dấu hiệu Chvostek/Trousseau dương tính) thường chỉ xuất hiện rõ rệt khi nồng độ **Calci ion hóa bị sụt giảm**, ngay cả khi Calci toàn phần trông có vẻ bình thường.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Calci ion hóa:**\n    ▫️ Tương tự các nguyên nhân gây tăng Calci toàn phần (Cường cận giáp, ung thư di căn).\n    ▫️ Nhiễm toan máu (làm nhả Calci khỏi Albumin).",
      "decrease": "🔹 **Giảm Calci ion hóa:**\n    ▫️ Nhiễm kiềm máu (Tăng thông khí, dùng Bicarbonat quá mức).\n    ▫️ Truyền máu ồ ạt (do chất chống đông Citrat trong túi máu liên kết với Calci ion hóa).\n    ▫️ Tăng acid béo tự do (trong viêm tụy cấp, nhiễm toan ceton, nhồi máu cơ tim cấp).\n    ▫️ Suy thận, suy cận giáp, thiếu Vitamin D."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Mở nắp ống nghiệm làm bay hơi CO2, làm thay đổi pH mẫu máu dẫn đến giảm Calci ion hóa giả tạo.\n💊 **Thuốc:** Tương tự như Calci toàn phần, nhưng cần đặc biệt lưu ý việc truyền Lipid tĩnh mạch hoặc dùng Heparin có thể làm tăng acid béo tự do, kéo theo giảm Calci ion hóa.",
    "clinicalNote": "Trong hồi sức tích cực (ICU), đo Calci ion hóa là tiêu chuẩn vàng. Khoảng 25% bệnh nhân cường cận giáp có nồng độ Calci toàn phần bình thường nhưng Calci ion hóa lại tăng. Đặc biệt khi truyền máu khối lượng lớn, bác sĩ phải theo dõi sát Calci ion hóa để bổ sung kịp thời tránh trụy tim mạch."
  },
  {
    "name": "Đo hoạt độ Lipase [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Lipase là enzym nội bào do tuyến tụy sản xuất, có chức năng phân giải chất béo (triglycerid) thành acid béo và glycerol trong ống tiêu hóa. Nó đặc hiệu cho mô tụy hơn so với Amylase.",
    "physiology": "📌 **Động học:** Trong viêm tụy cấp, Lipase tăng lên trong máu từ 24 - 36 giờ (trễ hơn Amylase một chút) nhưng **duy trì mức tăng rất lâu** (lên tới 14 ngày), trong khi Amylase thường về bình thường sau 3 ngày.\n📌 **Thải trừ:** Được lọc qua cầu thận và được ống thận gần tái hấp thu lại hoàn toàn.",
    "indication": "🎯 **Chẩn đoán:** Tiêu chuẩn vàng sinh hóa để chẩn đoán viêm tụy cấp.\n🎯 **Chẩn đoán phân biệt:** Phân biệt đau bụng do viêm tụy với các cơn đau bụng cấp tính khác (thủng tạng rỗng, nhồi máu mạc treo).\n🎯 **Theo dõi:** Biến chứng nang giả tụy sau viêm tụy cấp.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn từ 8 - 12h trước khi lấy máu.\n⚠️ **Lưu ý:** Không sử dụng ống chứa chất chống đông Citrat, EDTA vì có thể ức chế hoạt độ enzym.",
    "testingMethods": "Đo độ đục động học (Turbidimetric) hoặc P/p Enzym.",
    "ref": "📊 **Người lớn bình thường:** 0 - 50 U/L (tùy thuộc hệ thống máy, có thể dao động 13-60 U/L ở nhiệt độ 37°C).",
    "alert": "⚠️ Tăng Lipase ≥ 3 lần giới hạn trên bình thường (kèm theo đau thượng vị cấp tính) là tiêu chuẩn chẩn đoán chắc chắn viêm tụy cấp.\n💡 Theo cảnh báo từ ADA 2025/2026, nhóm thuốc đồng vận GLP-1 (như Semaglutide) dùng trị đái tháo đường và béo phì có mang nguy cơ hiếm gặp gây viêm tụy cấp. Việc đo Lipase định kỳ khi có triệu chứng đau bụng ở nhóm này là bắt buộc.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Lipase máu:**\n    ▫️ Viêm tụy cấp (tăng cực cao), Đợt cấp của viêm tụy mạn.\n    ▫️ Tắc nghẽn ống tụy (Sỏi mật, khối u, co thắt cơ Oddi do dùng thuốc Opiate).\n    ▫️ Biến chứng nang giả tụy.\n    ▫️ Các cấp cứu ổ bụng khác: Loét dạ dày-tá tràng thủng, tắc ruột non, nhồi máu mạc treo.\n    ▫️ Suy thận cấp/mạn (tăng gấp 2-3 lần bình thường do giảm thải trừ).\n    ▫️ Bệnh gan mạn tính, viêm gan do rượu.",
      "decrease": "🔹 **Giảm Lipase máu:**\n    ▫️ Giai đoạn cuối của viêm tụy mạn (tuyến tụy xơ hóa, mất chức năng tổng hợp).\n    ▫️ Bệnh xơ nang (Cystic fibrosis)."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Vỡ hồng cầu có thể làm sai lệch kết quả XN.\n💊 **Thuốc làm TĂNG Lipase:** Paracetamol, Opiates (Morphin, Codein - gây co thắt cơ Oddi), Thuốc tránh thai, Thiazid, Corticosteroid, thuốc ức chế men chuyển.\n💊 **Giao thoa phương pháp:** Canxi, Quinin, kim loại nặng có thể làm giảm hoạt độ enzym do ức chế phản ứng trong phòng thí nghiệm.",
    "clinicalNote": "So với Amylase, Lipase là xét nghiệm nhạy hơn và đặc hiệu hơn nhiều để chẩn đoán viêm tụy cấp. Đặc biệt với các bệnh nhân đến viện muộn (sau 3-4 ngày kể từ lúc đau bụng), Amylase có thể đã về bình thường nhưng Lipase vẫn tăng rất cao, giúp bác sĩ không bỏ sót chẩn đoán."
  },
  {
    "name": "Định lượng Ceton (Ketone) [Máu/Niệu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Khi tế bào không có đủ Insulin để đưa Glucose vào bên trong tạo năng lượng, cơ thể buộc phải đốt cháy acid béo dự trữ để thay thế. Quá trình thoái hóa lipid này sinh ra 3 loại thể Ceton: Acetoacetate, Aceton và Beta-hydroxybutyrate. Chúng mang tính acid và tích tụ sẽ gây toan máu.",
    "physiology": "📌 **Sinh lý bệnh:** Ceton là sản phẩm chuyển hóa năng lượng \"bất đắc dĩ\". Tích tụ lượng lớn Ceton gây ra bệnh cảnh **Nhiễm toan ceton do đái tháo đường (DKA)** – một cấp cứu nội tiết nguy hiểm chết người.\n📌 **Định lượng:** Thường kiểm tra Ceton niệu qua que nhúng nước tiểu, hoặc chính xác hơn là đo trực tiếp nồng độ Beta-hydroxybutyrate trong máu.",
    "indication": "🎯 **Sàng lọc và Cấp cứu:** Chẩn đoán tình trạng nhiễm toan ceton đái tháo đường (DKA) ở bệnh nhân có đường huyết cao, lơ mơ, thở nhanh sâu (Kussmaul).\n🎯 **Kiểm tra:** Khi bệnh nhân đái tháo đường bị ốm, sốt, nôn mửa hoặc đường huyết liên tục > 14 mmol/L.\n🎯 **Giám sát:** Phụ nữ mang thai bị ốm nghén nặng, người nhịn đói dài ngày.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh, Huyết tương hoặc Nước tiểu ngẫu nhiên.\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn. Cấp cứu lấy mẫu ngay lập tức.\n⚠️ **Lưu ý:** Nước tiểu để ở nhiệt độ phòng quá lâu sẽ làm bay hơi Aceton, vi khuẩn phân hủy Acetoacetate, dẫn đến kết quả **âm tính giả**.",
    "testingMethods": "Phản ứng Nitroprusside (cho Acetoacetate) hoặc Enzymatic (cho Beta-hydroxybutyrate máu).",
    "ref": "📊 **Huyết thanh:** Âm tính hoặc < 0,6 mmol/L.\n📊 **Nước tiểu:** Âm tính.",
    "alert": "⚠️ Ceton dương tính mạnh trong máu kèm theo độ toan (pH máu giảm) là tiêu chuẩn chẩn đoán DKA cần truyền Insulin tĩnh mạch cấp cứu.\n💡 **Cập nhật ADA 2025/2026 cực kỳ quan trọng:** Nhóm thuốc ức chế SGLT2 (SGLT2i) ưu việt trong bảo vệ tim/thận nhưng có nguy cơ gây **Nhiễm toan ceton ĐTĐ nồng độ glucose máu bình thường (Euglycemic DKA)**. Cần đo Ceton máu ngay nếu bệnh nhân dùng SGLT2i có biểu hiện buồn nôn, mệt mỏi dù đường máu không cao.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Ceton (Ceton dương tính):**\n    ▫️ Nhiễm toan ceton do Đái tháo đường (DKA).\n    ▫️ Nhịn đói lâu ngày, suy dinh dưỡng nặng, chứng chán ăn tâm thần (Anorexia).\n    ▫️ Chế độ ăn Keto (giàu Lipid, cực ít Carbohydrate).\n    ▫️ Ngộ độc rượu cấp, xơ gan.\n    ▫️ Nôn nghén quá mức ở phụ nữ có thai (Hyperemesis gravidarum).\n    ▫️ Sốt cao, cường giáp (tình trạng tăng tiêu thụ năng lượng).\n    ▫️ Ngộ độc Isopropanol.",
      "decrease": "Không có ý nghĩa bệnh lý (Bình thường cơ thể không có Ceton trong máu/niệu)."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Nước tiểu lấy xong không xét nghiệm ngay gây âm tính giả do vi khuẩn phân hủy.\n💊 **Thuốc gây dương tính giả (que thử niệu):** Levodopa, Captopril, thuốc cản quang, Penicillamine.\n💊 **Yếu tố nội sinh:** Nồng độ Vitamin C liều cao trong nước tiểu có thể can thiệp vào phản ứng màu của que thử.",
    "clinicalNote": "Theo dõi Beta-hydroxybutyrate trong máu chính xác hơn so với dùng que nhúng nước tiểu khi cấp cứu DKA. Lý do: Que nhúng nước tiểu chủ yếu đo Acetoacetate. Khi bệnh nhân bắt đầu hồi phục, Beta-hydroxybutyrate chuyển hóa ngược lại thành Acetoacetate, làm que thử nước tiểu vẫn \"đỏ đậm\" khiến bác sĩ tưởng bệnh nặng lên, nhưng thực chất máu đang bớt toan dần."
  },
    {
        name: "Đo hoạt độ ALP [máu]", 
        group: "Sinh Hóa", 
        time: "120 phút / 45 phút", 
        ref: "Nam: 43-115 U/L; Nữ: 33-98 U/L", 
        alert: "",
        concept: "ALP (Phosphatase kiềm) là enzyme có nhiều trong ống dẫn mật của gan và tổ chức xương đang tạo cốt.",
        indication: "Chẩn đoán bệnh lý gan mật (tắc mật) và bệnh lý về xương (bệnh Paget, di căn xương).",
        pathologicalMeaning: {
            increase: "Tăng cao trong tắc đường mật (sỏi, u), viêm gan, bệnh còi xương, ung thư di căn xương. Trẻ em đang tuổi lớn hoặc phụ nữ có thai ALP cũng tăng sinh lý.",
            decrease: "Ít gặp, có thể do suy dinh dưỡng nặng, thiếu kẽm, magie."
        }
    },
    {
        name: "Định lượng Phospho [máu]", 
        group: "Sinh Hóa", 
        time: "120 phút / 45 phút", 
        ref: "2.5 - 4.5 mg/dL", 
        alert: "≥ 8.9 mg/dL.",
        concept: "Phospho là khoáng chất chiếm lượng lớn thứ hai trong cơ thể (sau canxi), kết hợp cùng canxi để bảo vệ hệ xương khớp.",
        indication: "Đánh giá các bệnh lý thận - tiết niệu, cơ xương khớp, và tuyến cận giáp.",
        pathologicalMeaning: {
            increase: "Rất thường gặp trong suy thận mạn (thận không thể đào thải phospho), suy tuyến cận giáp, tiêu cơ vân.",
            decrease: "Cường tuyến cận giáp, thiếu vitamin D, suy dinh dưỡng."
        }
    },
    {
        name: "Định lượng Amoniac (NH3) [máu]", 
        group: "Sinh Hóa", 
        time: "120 phút / 45 phút", 
        ref: "18 - 72 µmol/L", 
        alert: "≥ 200 µmol/L.",
        concept: "Amoniac là một chất độc thần kinh sinh ra do vi khuẩn đường ruột phân hủy protein. Gan có nhiệm vụ chuyển NH3 thành Ure lành tính.",
        indication: "Chẩn đoán bệnh não gan (hôn mê gan), đánh giá tổn thương tâm thần và hệ thần kinh do suy gan nặng.",
        pathologicalMeaning: {
            increase: "Cảnh báo gan đã mất chức năng chuyển hóa (xơ gan giai đoạn cuối, suy gan cấp), dẫn đến tích tụ NH3 gây độc cho não, lú lẫn, hôn mê.",
            decrease: "Không có ý nghĩa bệnh lý."
        }
    },
    {
        name: "Định lượng FT3 [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "1.4 - 4.2 pg/mL", 
        alert: "",
        concept: "FT3 (Free Triiodothyronine) là hoóc-môn tuyến giáp ở dạng tự do (chiếm tỷ lệ rất nhỏ nhưng có hoạt tính sinh học trực tiếp), giúp điều hòa quá trình trao đổi chất của cơ thể.",
        indication: "Chẩn đoán, phân loại và theo dõi các bệnh lý tuyến giáp (cường giáp, suy giáp), thường được làm cùng FT4 và TSH.",
        pathologicalMeaning: {
            increase: "• TĂNG: Cảnh báo hội chứng cường giáp (như bệnh Basedow/Graves), viêm tuyến giáp, hoặc do dùng quá liều thuốc hormone tuyến giáp.",
            decrease: "• GIẢM: Gặp trong hội chứng suy giáp, suy tuyến yên, hoặc suy dinh dưỡng nặng."
        }
    },
    {
        name: "Định lượng FT4 [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "0.8 - 2.0 ng/dL", 
        alert: "",
        concept: "FT4 (Free Thyroxine) là dạng tự do của hoóc-môn Thyroxine do tuyến giáp tiết ra. Đây là dạng hoóc-môn dự trữ chính trước khi chuyển hóa thành FT3.",
        indication: "Đánh giá chức năng tuyến giáp, xét nghiệm đầu tay để chẩn đoán suy giáp hoặc cường giáp.",
        pathologicalMeaning: {
            increase: "• TĂNG: Dấu hiệu điển hình của cường giáp (Basedow), bướu độc tuyến giáp.",
            decrease: "• GIẢM: Chỉ điểm của suy giáp (viêm tuyến giáp Hashimoto), suy tuyến yên, thiếu hụt I-ốt."
        }
    },
    {
        name: "Định lượng TSH [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "0.3 - 6.2 mIU/L", 
        alert: "",
        concept: "TSH (Thyroid Stimulating Hormone) là hoóc-môn do tuyến yên tiết ra để kích thích tuyến giáp sản xuất FT3, FT4. Nó hoạt động theo cơ chế phản hồi ngược (feedback).",
        indication: "Xét nghiệm nhạy nhất để sàng lọc sớm các rối loạn chức năng tuyến giáp, theo dõi hiệu quả điều trị cường/suy giáp.",
        pathologicalMeaning: {
            increase: "• TĂNG: Phản ánh tình trạng suy giáp (tuyến giáp hoạt động kém nên tuyến yên phải tăng tiết TSH để bù trừ), hoặc có khối u tuyến yên.",
            decrease: "• GIẢM: Phản ánh tình trạng cường giáp (lượng FT3, FT4 trong máu quá cao ức chế tuyến yên tiết TSH)."
        }
    },
    {
        name: "Định lượng AFP [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "< 20 ng/ml", 
        alert: "",
        concept: "AFP (Alpha-fetoprotein) là một protein do gan của thai nhi sản xuất. Ở người trưởng thành khỏe mạnh, nồng độ này rất thấp.",
        indication: "Tầm soát, hỗ trợ chẩn đoán ung thư gan nguyên phát (HCC), ung thư tinh hoàn/buồng trứng, và chẩn đoán dị tật ống thần kinh ở thai nhi.",
        pathologicalMeaning: {
            increase: "• TĂNG: Cảnh báo ung thư gan nguyên phát, xơ gan, viêm gan mạn tính, hoặc ung thư tế bào mầm. Tăng sinh lý ở phụ nữ có thai.",
            decrease: "• GIẢM/BÌNH THƯỜNG: Đáp ứng tốt với điều trị ung thư hoặc không có bệnh lý ác tính."
        }
    },
    {
        name: "Định lượng PSA toàn phần [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "< 4 ng/ml", 
        alert: "",
        concept: "PSA (Prostate-Specific Antigen) là một kháng nguyên đặc hiệu do tuyến tiền liệt ở nam giới tiết ra.",
        indication: "Tầm soát ung thư tiền liệt tuyến ở nam giới > 50 tuổi, theo dõi phì đại tiền liệt tuyến lành tính.",
        pathologicalMeaning: {
            increase: "• TĂNG: Cảnh báo ung thư tiền liệt tuyến, viêm tiền liệt tuyến, hoặc phì đại tiền liệt tuyến lành tính (BPH).",
            decrease: "• BÌNH THƯỜNG: Tiền liệt tuyến khỏe mạnh hoặc đáp ứng tốt sau phẫu thuật cắt bỏ u."
        }
    },
    {
        name: "Định lượng CEA [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "< 5 ng/ml", 
        alert: "",
        concept: "CEA (Carcinoembryonic Antigen) là một kháng nguyên ung thư phôi, thường xuất hiện ở đường tiêu hóa của thai nhi và biến mất sau khi sinh.",
        indication: "Theo dõi điều trị, phát hiện tái phát ung thư đại trực tràng, ung thư dạ dày, ung thư phổi.",
        pathologicalMeaning: {
            increase: "• TĂNG: Ung thư đại trực tràng, dạ dày, phổi, tuyến tụy. Tăng nhẹ ở người hút thuốc lá dai dẳng, viêm ruột.",
            decrease: "• BÌNH THƯỜNG: Tiên lượng tốt sau phẫu thuật cắt bỏ khối u tiêu hóa."
        }
    },
    {
        name: "Định lượng CA 15-3 [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "< 31.4 IU/mL", 
        alert: "",
        concept: "CA 15-3 (Cancer Antigen 15-3) là một protein được sản xuất bởi các tế bào tuyến vú bình thường, nhưng được sản xuất ồ ạt bởi các tế bào ung thư vú.",
        indication: "Theo dõi đáp ứng điều trị và phát hiện di căn/tái phát của bệnh ung thư vú.",
        pathologicalMeaning: {
            increase: "• TĂNG: Cảnh báo ung thư vú di căn, tái phát. Tăng nhẹ trong u vú lành tính, xơ gan, viêm gan.",
            decrease: "• BÌNH THƯỜNG: Đáp ứng tốt với liệu pháp điều trị ung thư vú."
        }
    },
    {
        name: "Định lượng Tg [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "3.5 - 77 ng/mL", 
        alert: "",
        concept: "Tg (Thyroglobulin) là một protein do tuyến giáp sản xuất, đóng vai trò như một 'kho chứa' để tổng hợp hormone tuyến giáp.",
        indication: "Marker đặc hiệu để theo dõi ung thư tuyến giáp thể nhú và thể nang sau phẫu thuật cắt bỏ tuyến giáp.",
        pathologicalMeaning: {
            increase: "• TĂNG: Dấu hiệu ung thư tuyến giáp tái phát hoặc di căn sau phẫu thuật. Có thể tăng trong viêm tuyến giáp.",
            decrease: "• GIẢM: Kết quả mong muốn sau khi phẫu thuật cắt bỏ toàn bộ tuyến giáp."
        }
    },
    {
        name: "HBsAg test nhanh", 
        group: "Miễn dịch", 
        time: "60 phút", 
        ref: "Âm tính", 
        alert: "",
        concept: "HBsAg (Hepatitis B surface Antigen) là kháng nguyên bề mặt của virus viêm gan B. Xét nghiệm test nhanh giúp sàng lọc cấp cứu sự hiện diện của virus.",
        indication: "Sàng lọc viêm gan B trước phẫu thuật, hiến máu, phụ nữ mang thai hoặc khám sức khỏe định kỳ.",
        pathologicalMeaning: {
            increase: "• DƯƠNG TÍNH: Bệnh nhân đang nhiễm virus Viêm gan B (cấp tính hoặc mạn tính), có khả năng lây nhiễm cho người khác.",
            decrease: "• ÂM TÍNH: Hiện không nhiễm virus viêm gan B."
        }
    },
    {
        name: "HIV Ab test nhanh", 
        group: "Miễn dịch", 
        time: "60 phút", 
        ref: "Âm tính", 
        alert: "",
        concept: "Xét nghiệm tìm kháng thể chống lại virus HIV trong máu.",
        indication: "Sàng lọc cấp cứu nhiễm HIV trước phẫu thuật, phụ nữ mang thai, phơi nhiễm nghề nghiệp.",
        pathologicalMeaning: {
            increase: "• DƯƠNG TÍNH: Có thể đang nhiễm HIV. (Cần làm thêm các xét nghiệm chuyên sâu như PCR, khẳng định 3 phương pháp để kết luận).",
            decrease: "• ÂM TÍNH: Không phát hiện kháng thể HIV tại thời điểm hiện tại (cần chú ý thời kỳ cửa sổ)."
        }
    },
    {
        name: "Dengue virus IgM/IgG test nhanh", 
        group: "Miễn dịch", 
        time: "60 phút", 
        ref: "Âm tính", 
        alert: "",
        concept: "IgM là kháng thể sinh ra ở giai đoạn cấp tính, IgG là kháng thể sinh ra ở giai đoạn muộn và tồn tại lâu dài sau khi nhiễm virus Sốt xuất huyết (Dengue).",
        indication: "Chẩn đoán sốt xuất huyết Dengue từ ngày thứ 4 - 5 của bệnh trở đi.",
        pathologicalMeaning: {
            increase: "• DƯƠNG TÍNH: IgM (+) nghĩa là đang nhiễm cấp tính; IgG (+) nghĩa là đã từng nhiễm hoặc đang tái nhiễm.",
            decrease: "• ÂM TÍNH: Không mắc Sốt xuất huyết hoặc xét nghiệm quá sớm (kháng thể chưa kịp sinh ra)."
        }
    },
    {
        name: "Dengue virus NS1Ag test nhanh", 
        group: "Miễn dịch", 
        time: "60 phút", 
        ref: "Âm tính", 
        alert: "",
        concept: "NS1Ag là kháng nguyên của virus Sốt xuất huyết, xuất hiện rất sớm trong máu ngay từ ngày đầu tiên có triệu chứng sốt.",
        indication: "Chẩn đoán sớm Sốt xuất huyết Dengue ngay từ ngày 1 đến ngày 3 của bệnh.",
        pathologicalMeaning: {
            increase: "• DƯƠNG TÍNH: Xác định chắc chắn bệnh nhân đang mắc Sốt xuất huyết Dengue giai đoạn khởi phát.",
            decrease: "• ÂM TÍNH: Không phát hiện virus, hoặc nồng độ virus đã giảm (sau ngày thứ 4 của bệnh)."
        }
    },
    {
        name: "Treponema pallidum test nhanh", 
        group: "Miễn dịch", 
        time: "60 phút", 
        ref: "Âm tính", 
        alert: "",
        concept: "Treponema pallidum là xoắn khuẩn gây bệnh Giang mai. Xét nghiệm giúp tìm kháng thể kháng vi khuẩn này.",
        indication: "Sàng lọc bệnh Giang mai trước phẫu thuật, thai kỳ, hoặc khám các bệnh lây truyền qua đường tình dục.",
        pathologicalMeaning: {
            increase: "• DƯƠNG TÍNH: Có thể đang mắc hoặc đã từng mắc bệnh Giang mai (cần xét nghiệm thêm RPR/VDRL để chẩn đoán giai đoạn hoạt động).",
            decrease: "• ÂM TÍNH: Không nhiễm vi khuẩn Giang mai."
        }
    },
    {
        name: "Salmonella Widal", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "Âm tính", 
        alert: "",
        concept: "Phản ứng Widal tìm kháng thể ngưng kết chống lại các kháng nguyên O và H của vi khuẩn Salmonella gây bệnh thương hàn.",
        indication: "Hỗ trợ chẩn đoán bệnh Sốt thương hàn kéo dài.",
        pathologicalMeaning: {
            increase: "• DƯƠNG TÍNH: Cảnh báo bệnh nhân đang mắc bệnh Sốt thương hàn (hiệu giá kháng thể tăng cao trên 1/100).",
            decrease: "• ÂM TÍNH: Bình thường."
        }
    },
    {
        name: "HBsAg miễn dịch tự động", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "< 0.03 IU/ml", 
        alert: "",
        concept: "Định lượng nồng độ kháng nguyên bề mặt virus viêm gan B bằng hệ thống máy tự động, cho độ chính xác cực cao.",
        indication: "Chẩn đoán chính xác tình trạng nhiễm viêm gan B và theo dõi đáp ứng với thuốc kháng virus.",
        pathologicalMeaning: {
            increase: "• TĂNG (Dương tính): Mắc viêm gan B. Nồng độ càng cao phản ánh lượng kháng nguyên virus trong máu càng nhiều.",
            decrease: "• BÌNH THƯỜNG (Âm tính): Không nhiễm viêm gan B, hoặc đã điều trị khỏi (chuyển đảo huyết thanh)."
        }
    },
    {
        name: "HCV Ab miễn dịch tự động", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "< 1.0 COI", 
        alert: "",
        concept: "Tìm kháng thể chống lại virus Viêm gan C (HCV) bằng hệ thống miễn dịch tự động.",
        indication: "Tầm soát, chẩn đoán người có nguy cơ mắc viêm gan C.",
        pathologicalMeaning: {
            increase: "• TĂNG (> 1.0 COI): Dấu hiệu cho thấy bệnh nhân đang nhiễm hoặc đã từng tiếp xúc với virus Viêm gan C.",
            decrease: "• BÌNH THƯỜNG (< 1.0 COI): Không nhiễm virus Viêm gan C."
        }
    },
    {
        name: "Toxocara Ab miễn dịch bán tự động", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "< 1.1 S/CO", 
        alert: "",
        concept: "Đo nồng độ kháng thể (IgG) chống lại giun đũa chó/mèo (Toxocara canis/cati) trong máu.",
        indication: "Chẩn đoán bệnh ấu trùng giun đũa chó/mèo nội tạng ở người bệnh có biểu hiện ngứa ngáy, mề đay, tăng bạch cầu ái toan.",
        pathologicalMeaning: {
            increase: "• DƯƠNG TÍNH (≥ 1.1): Xác nhận bệnh nhân đang nhiễm hoặc đã từng nhiễm ấu trùng giun đũa chó/mèo.",
            decrease: "• ÂM TÍNH: Không nhiễm."
        }
    },
    {
        name: "Định lượng NT-ProBNP", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "< 50 tuổi: < 50 pg/ml\n50 - 75 tuổi: 75 - 100 pg/ml\n> 75 tuổi: 250 - 300 pg/ml", 
        alert: "",
        concept: "NT-ProBNP là một mảnh peptide được giải phóng từ tâm thất của tim khi cơ tim bị căng giãn hoặc chịu áp lực cao.",
        indication: "Tiêu chuẩn vàng để chẩn đoán, đánh giá mức độ nghiêm trọng và theo dõi điều trị bệnh Suy tim.",
        pathologicalMeaning: {
            increase: "• TĂNG: Cảnh báo bệnh lý Suy tim (cấp hoặc mạn tính), phì đại tâm thất, nhồi máu cơ tim, hoặc thuyên tắc phổi.",
            decrease: "• BÌNH THƯỜNG: Chức năng bơm máu của tim bình thường, giúp loại trừ nguyên nhân suy tim ở bệnh nhân khó thở."
        }
    },
    {
        name: "Định lượng Troponin I [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "Bình thường ở mức cực thấp", 
        alert: "> 50 pg/ml.",
        concept: "Troponin I là protein tham gia vào sự co bóp của cơ tim. Nó cực kỳ đặc hiệu cho tim, khi cơ tim bị hoại tử, Troponin I sẽ phóng thích ồ ạt vào máu.",
        indication: "Xét nghiệm cấp cứu sống còn để chẩn đoán Nhồi máu cơ tim cấp (cơn đau tim).",
        pathologicalMeaning: {
            increase: "• TĂNG CAO: Chẩn đoán xác định có sự hoại tử cơ tim (Nhồi máu cơ tim), viêm cơ tim, hoặc chấn thương dập cơ tim.",
            decrease: "• BÌNH THƯỜNG: Không có dấu hiệu hoại tử cơ tim cấp."
        }
    },
    {
        name: "Định lượng Pro-calcitonin [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "< 0.5 ng/mL", 
        alert: "",
        concept: "Procalcitonin (PCT) là một prohormone được sinh ra từ nhiều mô trong cơ thể khi có sự kích thích của nội độc tố vi khuẩn nặng.",
        indication: "Dấu ấn sinh học tuyệt vời để chẩn đoán Sốc nhiễm trùng, nhiễm khuẩn huyết và quyết định việc sử dụng/ngưng sử dụng Kháng sinh.",
        pathologicalMeaning: {
            increase: "• TĂNG RẤT CAO: Cảnh báo nhiễm trùng huyết nghiêm trọng do vi khuẩn, sốc nhiễm trùng, suy đa tạng.",
            decrease: "• BÌNH THƯỜNG: Tình trạng viêm thường là do virus (không cần kháng sinh) hoặc không có nhiễm trùng hệ thống."
        }
    },
    {
        name: "Định lượng Interleukin 6 [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "< 6.4 pg/ml", 
        alert: "",
        concept: "IL-6 là một cytokine (chất trung gian hóa học) kích hoạt phản ứng viêm của hệ miễn dịch, báo hiệu tình trạng viêm toàn thân.",
        indication: "Theo dõi tình trạng 'cơn bão cytokine' trong nhiễm trùng nặng (như Covid-19, viêm phổi nặng), bệnh tự miễn.",
        pathologicalMeaning: {
            increase: "• TĂNG: Cảnh báo phản ứng viêm hệ thống nghiêm trọng, tiên lượng nặng ở bệnh nhân hồi sức tích cực, viêm khớp dạng thấp cấp.",
            decrease: "• BÌNH THƯỜNG: Tình trạng viêm đã được kiểm soát."
        }
    },
    {
        name: "Định lượng Ferritin [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "15 - 320 ng/ml", 
        alert: "",
        concept: "Ferritin là một protein nội bào có chức năng lưu trữ sắt. Nồng độ Ferritin trong máu phản ánh trực tiếp lượng 'kho dự trữ sắt' của cơ thể.",
        indication: "Phân biệt nguyên nhân gây thiếu máu (do thiếu sắt hay bệnh mạn tính), chẩn đoán bệnh thừa sắt.",
        pathologicalMeaning: {
            increase: "• TĂNG: Gặp trong bệnh ứ sắt (Hemochromatosis), viêm nhiễm cấp/mãn tính, tổn thương gan, hoặc truyền máu nhiều lần.",
            decrease: "• GIẢM: Dấu hiệu sớm nhất và đặc hiệu nhất của bệnh Thiếu máu do thiếu sắt."
        }
    },
    {
        name: "Định lượng Folate [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "2.3 - 24.8 ng/mL", 
        alert: "",
        concept: "Folate (Vitamin B9) cần thiết cho việc sản xuất DNA và phân chia tế bào, đặc biệt là sự hình thành hồng cầu khỏe mạnh và phát triển thần kinh thai nhi.",
        indication: "Chẩn đoán nguyên nhân gây thiếu máu hồng cầu to, kiểm tra suy dinh dưỡng, đánh giá ở phụ nữ mang thai.",
        pathologicalMeaning: {
            increase: "• TĂNG: Ít gặp, có thể do ăn chay nhiều rau xanh hoặc bổ sung quá nhiều vitamin.",
            decrease: "• GIẢM: Gây thiếu máu hồng cầu khổng lồ, sụt cân, tiêu chảy. Gặp ở người nghiện rượu, suy dinh dưỡng, hội chứng kém hấp thu."
        }
    },
    {
        name: "Định lượng Vitamin B12 [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "180 - 914 pg/mL", 
        alert: "",
        concept: "Vitamin B12 tham gia vào quá trình tạo máu và duy trì hệ thần kinh khỏe mạnh. Cơ thể không tự tổng hợp được mà phải lấy từ thức ăn động vật.",
        indication: "Tầm soát nguyên nhân thiếu máu hồng cầu to, tê bì chân tay do tổn thương thần kinh thần kinh, đánh giá hội chứng kém hấp thu.",
        pathologicalMeaning: {
            increase: "• TĂNG: Gặp trong bệnh gan nặng, suy thận mạn, bệnh bạch cầu.",
            decrease: "• GIẢM: Gây bệnh Thiếu máu ác tính, tổn thương thần kinh. Gặp ở người ăn chay trường, cắt dạ dày, nhiễm giun sán."
        }
    },
    {
        name: "Định lượng 25-OH Vitamin D (D3) [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "30 - 100 ng/mL", 
        alert: "",
        concept: "Vitamin D3 giúp cơ thể hấp thụ Canxi và Phospho từ ruột để duy trì sức mạnh của hệ xương cốt và hệ miễn dịch.",
        indication: "Tầm soát loãng xương, còi xương ở trẻ em, và theo dõi các bệnh lý chuyển hóa xương.",
        pathologicalMeaning: {
            increase: "• TĂNG (Ngộ độc): Dùng quá liều thực phẩm chức năng vitamin D, gây tăng canxi máu, vôi hóa mạch máu.",
            decrease: "• GIẢM: Gây còi xương ở trẻ em, nhuyễn xương/loãng xương ở người lớn, tăng nguy cơ bệnh tự miễn."
        }
    },
    {
        name: "Định lượng sắt chưa bão hòa huyết thanh (UIBC)", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "27.8 - 63.6 µmol/L", 
        alert: "",
        concept: "UIBC (Unsaturated Iron-Binding Capacity) là khả năng liên kết dự trữ của Transferrin (protein vận chuyển sắt) chưa được bão hòa bởi sắt.",
        indication: "Phối hợp với Sắt huyết thanh để tính toán độ bão hòa Transferrin, giúp chẩn đoán phân biệt các loại thiếu máu.",
        pathologicalMeaning: {
            increase: "• TĂNG: Cơ thể thiếu sắt (Transferrin trống nhiều do không có sắt để gắn vào), gặp trong Thiếu máu thiếu sắt.",
            decrease: "• GIẢM: Cơ thể thừa sắt, bệnh nhiễm sắt, viêm nhiễm mạn tính, hoặc tan máu."
        }
    },
    {
        name: "Định lượng EPO", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "2.59 - 18.5 mIU/mL", 
        alert: "",
        concept: "EPO (Erythropoietin) là hormone do Thận tiết ra để kích thích tủy xương sản xuất hồng cầu khi cơ thể bị thiếu oxy.",
        indication: "Phân biệt nguyên nhân thiếu máu (do suy thận hay nguyên nhân khác), chẩn đoán chứng đa hồng cầu.",
        pathologicalMeaning: {
            increase: "• TĂNG: Thiếu máu do tan máu, mất máu, hoặc bệnh nhân có khối u tiết EPO.",
            decrease: "• GIẢM: Nguyên nhân chính gây thiếu máu ở bệnh nhân Suy thận mạn (do thận hỏng không tiết được EPO)."
        }
    },
    {
        name: "Định lượng Testosteron [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "Nam: 168 - 746 ng/dl\nNữ: 10 - 90 ng/dl", 
        alert: "",
        concept: "Testosteron là hormone sinh dục nam chính (cũng có ở nữ với lượng nhỏ), chịu trách nhiệm về các đặc điểm giới tính, cơ bắp và chức năng sinh sản.",
        indication: "Đánh giá rối loạn cương dương, vô sinh nam, dậy thì muộn, hoặc hội chứng buồng trứng đa nang (PCOS) ở nữ.",
        pathologicalMeaning: {
            increase: "• TĂNG: U tinh hoàn, u thượng thận, hoặc buồng trứng đa nang ở nữ (gây rậm lông, rối loạn kinh nguyệt).",
            decrease: "• GIẢM: Suy tuyến sinh dục nam, rối loạn cương dương, béo phì, tổn thương tinh hoàn."
        }
    },
    {
        name: "Định lượng Cortisol [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "Sáng (8h-12h): 138 - 690 nmol/L\nChiều (12h-20h): 138 - 410 nmol/L\nTối (20h-8h): 0 - 276 nmol/L", 
        alert: "",
        concept: "Cortisol là 'hormone căng thẳng' do tuyến thượng thận tiết ra, giúp cơ thể chống lại stress, điều hòa huyết áp và chuyển hóa đường. Nồng độ cao nhất vào buổi sáng và giảm dần về đêm.",
        indication: "Chẩn đoán hội chứng Cushing (thừa Cortisol) và bệnh Addison (suy thượng thận).",
        pathologicalMeaning: {
            increase: "• TĂNG: Cảnh báo Hội chứng Cushing (béo bụng, rạn da, mặt tròn), u tuyến thượng thận, stress nặng, hoặc lạm dụng thuốc Corticoid.",
            decrease: "• GIẢM: Bệnh Addison (suy tuyến thượng thận), suy tuyến yên, mệt mỏi, sạm da, hạ huyết áp."
        }
    },
    {
        name: "Định lượng Insulin [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "1.9 - 23 µIU/mL", 
        alert: "",
        concept: "Insulin là hormone do tuyến tụy tiết ra, chìa khóa mở cửa cho Glucose đi vào tế bào. Nếu thiếu hoặc kháng Insulin sẽ gây ra bệnh tiểu đường.",
        indication: "Đánh giá hội chứng kháng insulin, tìm nguyên nhân hạ đường huyết, hoặc xác định u tiết insulin (Insulinoma).",
        pathologicalMeaning: {
            increase: "• TĂNG: Bệnh tiểu đường tuýp 2 giai đoạn đầu (kháng insulin), u tiết insulin, béo phì, hội chứng buồng trứng đa nang.",
            decrease: "• GIẢM: Tiểu đường tuýp 1 (tụy bị phá hủy không tiết được insulin), hoặc tụy bị hoại tử."
        }
    },
    {
        name: "Định lượng C-peptid [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "1.8 - 4.2 ng/mL", 
        alert: "",
        concept: "C-peptide được tuyến tụy tạo ra cùng lúc và tỷ lệ 1:1 với Insulin nội sinh. Xét nghiệm C-peptide giúp đánh giá chính xác khả năng tự sản xuất Insulin của tuyến tụy.",
        indication: "Phân biệt tiểu đường type 1 và type 2, kiểm tra xem bệnh nhân tiểu đường có cần tiêm insulin ngoại sinh hay chưa.",
        pathologicalMeaning: {
            increase: "• TĂNG: Kháng insulin (tiểu đường type 2), béo phì, hội chứng Cushing, hoặc u tuyến tụy.",
            decrease: "• GIẢM: Suy kiệt tế bào beta tuyến tụy (tiểu đường type 1), tụy không còn khả năng tự sản xuất insulin."
        }
    },
    {
        name: "Định lượng Digoxin [máu]", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "1.0 - 2.0 ng/mL", 
        alert: "",
        concept: "Digoxin là thuốc trợ tim điều trị suy tim và rối loạn nhịp tim. Thuốc có cửa sổ điều trị rất hẹp, dễ gây ngộ độc nếu nồng độ hơi cao.",
        indication: "Theo dõi nồng độ thuốc trong máu để đảm bảo hiệu quả điều trị và tránh ngộ độc cấp.",
        pathologicalMeaning: {
            increase: "• TĂNG (> 2.0 ng/mL): Nguy cơ ngộ độc Digoxin, gây buồn nôn, rối loạn thị giác (nhìn thấy màu vàng/xanh), nhịp tim chậm nguy hiểm.",
            decrease: "• GIẢM (< 1.0 ng/mL): Thuốc chưa đạt nồng độ hiệu quả, bệnh nhân vẫn có nguy cơ suy tim/rối loạn nhịp."
        }
    },
    {
        name: "Định lượng Vancomycin", 
        group: "Miễn dịch", 
        time: "120 phút / 60 phút", 
        ref: "20 - 40 µg/mL", 
        alert: "",
        concept: "Vancomycin là kháng sinh liều cao chuyên trị vi khuẩn Gram dương kháng thuốc (MRSA). Thuốc rất độc cho thận và thính giác.",
        indication: "Theo dõi nồng độ thuốc đáy (trough) để đảm bảo diệt được vi khuẩn và tránh làm suy thận bệnh nhân.",
        pathologicalMeaning: {
            increase: "• TĂNG: Nguy cơ cao gây độc tính suy thận cấp và tổn thương dây thần kinh thính giác (gây điếc).",
            decrease: "• GIẢM: Không đủ nồng độ tiêu diệt vi khuẩn, dễ dẫn đến thất bại điều trị và vi khuẩn kháng thuốc."
        }
    },
    {
        name: "Test Methamphetamine", 
        group: "Miễn dịch", 
        time: "60 phút / 30 phút", 
        ref: "Âm tính", 
        alert: "",
        concept: "Test nhanh kiểm tra sự hiện diện của Methamphetamine (Ma túy đá - chất kích thích thần kinh trung ương) trong cơ thể.",
        indication: "Hỗ trợ chẩn đoán ngộ độc chất kích thích tại phòng cấp cứu, khám sức khỏe tâm thần, giám định pháp y.",
        pathologicalMeaning: {
            increase: "• DƯƠNG TÍNH: Xác định bệnh nhân có sử dụng Methamphetamine (ma túy đá) trong thời gian gần đây.",
            decrease: "• ÂM TÍNH: Không sử dụng."
        }
    },
    {
        name: "Test Morphin/Heroin", 
        group: "Miễn dịch", 
        time: "60 phút / 30 phút", 
        ref: "Âm tính", 
        alert: "",
        concept: "Test nhanh kiểm tra nhóm chất dạng thuốc phiện (Opiates) như Morphin, Heroin (chất ức chế thần kinh).",
        indication: "Xử trí cấp cứu hôn mê/suy hô hấp nghi do ngộ độc ma túy, giám định pháp y.",
        pathologicalMeaning: {
            increase: "• DƯƠNG TÍNH: Bệnh nhân có sử dụng ma túy nhóm Opiates (Heroin, Morphin). Cần chú ý nguy cơ ức chế hô hấp.",
            decrease: "• ÂM TÍNH: Không sử dụng."
        }
    },
    {
        name: "Định lượng Creatinin [niệu]", 
        group: "Nước tiểu & Dịch", 
        time: "120 phút / 45 phút", 
        ref: "Nam: 9.0 - 21.0 mmol/24h\nNữ: 7.0 - 14.0 mmol/24h", 
        alert: "",
        concept: "Đo tổng lượng Creatinin được bài tiết qua nước tiểu (thường thu thập trong 24 giờ). Xét nghiệm này giúp đánh giá trực tiếp tốc độ lọc máu của cầu thận.",
        indication: "Kết hợp với Creatinin máu để tính Độ thanh thải Creatinin (Creatinine Clearance), giúp đánh giá chính xác mức độ suy thận.",
        pathologicalMeaning: {
            increase: "• TĂNG: Chế độ ăn quá nhiều thịt, tập luyện cơ bắp quá sức, hoặc giai đoạn đầu của bệnh tiểu đường, nhiễm trùng.",
            decrease: "• GIẢM: Phản ánh thận đang suy giảm chức năng lọc (suy thận cấp/mạn), bệnh teo cơ, suy dinh dưỡng."
        }
    },
    {
        name: "Định lượng Glucose [niệu]", 
        group: "Nước tiểu & Dịch", 
        time: "120 phút / 45 phút", 
        ref: "1.8 - 14.4 mg/dl (Hoặc Âm tính)", 
        alert: "",
        concept: "Ở người bình thường khỏe mạnh, glucose sẽ được thận tái hấp thu gần như hoàn toàn nên không có mặt trong nước tiểu. Đường chỉ xuất hiện trong nước tiểu khi nồng độ đường trong máu vượt quá 'ngưỡng của thận' (thường > 180 mg/dL).",
        indication: "Hỗ trợ chẩn đoán đái tháo đường, theo dõi tình trạng đường huyết và đánh giá tổn thương ống thận.",
        pathologicalMeaning: {
            increase: "• DƯƠNG TÍNH (Có đường trong nước tiểu): Gặp trong bệnh đái tháo đường kiểm soát kém, đái tháo đường thai kỳ, hoặc hội chứng Fanconi (thận mất khả năng tái hấp thu đường).",
            decrease: "• ÂM TÍNH: Bình thường."
        }
    },
    {
        name: "Định lượng MAU [niệu]", 
        group: "Nước tiểu & Dịch", 
        time: "120 phút / 45 phút", 
        ref: "< 25 mg/L", 
        alert: "",
        concept: "MAU (Microalbumin niệu) là xét nghiệm đo lượng rất nhỏ protein albumin bị rò rỉ qua màng lọc cầu thận vào nước tiểu, ở mức mà các xét nghiệm nước tiểu thông thường không phát hiện được.",
        indication: "Xét nghiệm vàng để tầm soát sớm tổn thương vi mạch thận ở bệnh nhân đái tháo đường và tăng huyết áp.",
        pathologicalMeaning: {
            increase: "• TĂNG (> 30 mg/24h): Dấu hiệu sớm nhất của bệnh thận đái tháo đường (Diabetic Nephropathy) hoặc tổn thương thận do cao huyết áp. Giúp bác sĩ can thiệp sớm trước khi thận hỏng hoàn toàn.",
            decrease: "• BÌNH THƯỜNG: Chức năng màng lọc cầu thận còn tốt."
        }
    },
    {
        name: "Định lượng Protein niệu (Nước tiểu 24h)", 
        group: "Nước tiểu & Dịch", 
        time: "120 phút / 45 phút", 
        ref: "< 300 mg/24h", 
        alert: "",
        concept: "Bệnh nhân phải thu thập toàn bộ nước tiểu trong 24 giờ để đo tổng lượng protein mất đi. Màng lọc cầu thận khỏe mạnh sẽ không để lọt các protein phân tử lớn.",
        indication: "Chẩn đoán Hội chứng thận hư, viêm cầu thận, và đặc biệt để đánh giá biến chứng Tiền sản giật ở phụ nữ mang thai.",
        pathologicalMeaning: {
            increase: "• TĂNG CAO: Tăng rất cao (> 3.5g/24h) là chỉ điểm của Hội chứng thận hư. Tăng vừa gặp trong viêm cầu thận, suy thận mạn, tiền sản giật, lupus ban đỏ.",
            decrease: "• BÌNH THƯỜNG: Không tổn thương thận."
        }
    },
    {
        name: "Đo hoạt độ Amylase [niệu]", 
        group: "Nước tiểu & Dịch", 
        time: "120 phút / 45 phút", 
        ref: "< 450 U/L", 
        alert: "",
        concept: "Amylase từ máu được lọc qua thận và bài tiết vào nước tiểu. Trong viêm tụy cấp, Amylase nước tiểu sẽ tăng muộn hơn nhưng lại duy trì ở mức cao lâu hơn so với Amylase máu (kéo dài từ 7-10 ngày).",
        indication: "Hỗ trợ chẩn đoán Viêm tụy cấp, đặc biệt hữu ích khi bệnh nhân đến viện muộn (lúc này Amylase máu đã trở về bình thường).",
        pathologicalMeaning: {
            increase: "• TĂNG: Viêm tụy cấp tính, tắc nghẽn ống tụy (sỏi, u), thủng loét dạ dày, hoặc quai bị.",
            decrease: "• BÌNH THƯỜNG: Không có bệnh lý tuyến tụy cấp tính."
        }
    },
    {
        name: "Điện giải đồ (Na, K, Cl) [niệu]", 
        group: "Nước tiểu & Dịch", 
        time: "120 phút / 45 phút", 
        ref: "Na: 54 - 150 mEq/L\nK: 20 - 80 mEq/L\nCl: 46 - 168 mEq/L", 
        alert: "",
        concept: "Đo lượng muối (Natri, Kali, Clo) mà thận bài tiết ra. Phản ánh trực tiếp khả năng cô đặc/pha loãng nước tiểu và duy trì cân bằng điện giải của thận.",
        indication: "Xác định nguyên nhân gây rối loạn điện giải máu là do mất qua thận (bệnh lý ống thận, lợi tiểu) hay mất ngoài thận (tiêu chảy, nôn mửa).",
        pathologicalMeaning: {
            increase: "• TĂNG BÀI TIẾT (Mất muối qua thận): Gặp do sử dụng thuốc lợi tiểu, suy thượng thận (thiếu Aldosterone), viêm ống thận mô kẽ.",
            decrease: "• GIẢM BÀI TIẾT (Thận giữ muối): Thận đang cố gắng giữ nước bù trừ do bệnh nhân bị mất nước nặng (tiêu chảy, nôn ói), suy tim, hoặc hội chứng Cushing."
        }
    },
    {
        name: "Tổng phân tích nước tiểu bằng máy tự động", 
        group: "Nước tiểu & Dịch", 
        time: "120 phút / 30 phút", 
        ref: "Tỷ trọng: 1.005 - 1.030\npH: 5.0 - 8.0\nCác chỉ số khác (Hồng cầu, Bạch cầu, Nitrit...): Âm tính", 
        alert: "",
        concept: "Là xét nghiệm sàng lọc nhanh 10-11 thông số hóa lý của nước tiểu bằng que thử tự động (Urine Dipstick).",
        indication: "Khám sức khỏe tổng quát, tầm soát nhiễm trùng tiết niệu, sỏi thận, bệnh lý gan mật và đái tháo đường.",
        pathologicalMeaning: {
            increase: "• BẤT THƯỜNG: Có Hồng cầu (nghi sỏi, u, viêm); Có Bạch cầu/Nitrit (Nhiễm trùng đường tiểu); Có Protein (Bệnh lý màng lọc thận); Có Urobilinogen (Bệnh lý gan mật); Có Ceton/Glucose (Tiểu đường).",
            decrease: "• BÌNH THƯỜNG: Nước tiểu sạch, không có bệnh lý tiết niệu."
        }
    },
    {
        name: "Xét nghiệm tế bào cặn nước tiểu", 
        group: "Nước tiểu & Dịch", 
        time: "120 phút / 45 phút", 
        ref: "", 
        alert: "",
        concept: "Nhân viên y tế tiến hành quay ly tâm nước tiểu và soi cặn lắng dưới kính hiển vi quang học để đếm trực tiếp số lượng Hồng cầu, Bạch cầu, Trụ niệu, Tế bào biểu mô và Tinh thể.",
        indication: "Kiểm tra chuyên sâu khi Tổng phân tích nước tiểu có bất thường, giúp chẩn đoán chính xác vị trí và nguyên nhân tổn thương hệ tiết niệu.",
        pathologicalMeaning: {
            increase: "• BẤT THƯỜNG: Thấy nhiều Hồng cầu méo mó/Trụ hồng cầu (Viêm cầu thận); Thấy nhiều Bạch cầu (Viêm bàng quang, niệu đạo); Thấy tinh thể Urat/Canxi (Nguy cơ sỏi thận).",
            decrease: "• BÌNH THƯỜNG: Rất ít hoặc không có tế bào."
        }
    },
    {
        name: "Định lượng Glucose (dịch não tủy)", 
        group: "Nước tiểu & Dịch", 
        time: "120 phút / 45 phút", 
        ref: "39.6 - 70.3 mg/dl (khoảng 60% nồng độ Glucose máu)", 
        alert: "",
        concept: "Dịch não tủy (DNT) là chất lỏng trong suốt bao quanh não và tủy sống. Glucose trong DNT được vận chuyển từ máu sang để nuôi dưỡng hệ thần kinh trung ương.",
        indication: "Xét nghiệm cực kỳ quan trọng để chẩn đoán phân biệt các loại Viêm màng não.",
        pathologicalMeaning: {
            increase: "• TĂNG: Tăng theo đường huyết do bệnh đái tháo đường, không mang nhiều ý nghĩa chẩn đoán bệnh lý màng não.",
            decrease: "• GIẢM MẠNH: Dấu hiệu điển hình của Viêm màng não mủ (do vi khuẩn, nấm, lao tiêu thụ hết đường để sinh sôi). Trong viêm màng não do Virus, lượng đường thường bình thường."
        }
    },
    {
        name: "Định lượng Protein (dịch não tủy)", 
        group: "Nước tiểu & Dịch", 
        time: "120 phút / 45 phút", 
        ref: "< 45 mg/dL", 
        alert: "",
        concept: "Hàng rào máu não bình thường ngăn cản các phân tử protein lớn xâm nhập vào DNT. Khi màng não bị viêm, rách hoặc có khối u, protein sẽ rò rỉ vào DNT làm nồng độ tăng cao.",
        indication: "Chẩn đoán viêm màng não, xuất huyết màng não, u não và hội chứng Guillain-Barré.",
        pathologicalMeaning: {
            increase: "• TĂNG: Bệnh lý thần kinh nghiêm trọng như Viêm màng não mủ, Lao màng não, Xuất huyết dưới nhện, U não, tủy sống hoặc các bệnh thoái hóa thần kinh.",
            decrease: "• BÌNH THƯỜNG/GIẢM: DNT rò rỉ ra ngoài (chấn thương sọ não, tai biến chọc dò)."
        }
    },
    {
        name: "Định lượng Glucose (dịch chọc dò)", 
        group: "Nước tiểu & Dịch", 
        time: "120 phút / 45 phút", 
        ref: "Tương đương nồng độ huyết thanh", 
        alert: "",
        concept: "Đo nồng độ đường trong dịch màng phổi, màng bụng hoặc dịch khớp.",
        indication: "Hỗ trợ phân biệt dịch tiết (do viêm/ung thư) và dịch thấm (do áp lực mạch máu).",
        pathologicalMeaning: {
            increase: "• TĂNG: Thường tương đồng với đường huyết bệnh nhân.",
            decrease: "• GIẢM MẠNH: Dấu hiệu của Dịch tiết do Viêm nhiễm mủ (vi khuẩn tiêu thụ đường), Lao màng phổi, hoặc bệnh lý Ác tính (Ung thư di căn), Viêm khớp dạng thấp."
        }
    },
    {
        name: "Định lượng Protein (dịch chọc dò)", 
        group: "Nước tiểu & Dịch", 
        time: "120 phút / 45 phút", 
        ref: "< 30 g/L (Tùy thuộc bản chất dịch)", 
        alert: "",
        concept: "Xác định lượng protein trong khoang dịch. Là tiêu chuẩn chính (Tiêu chuẩn Light) để phân loại Dịch thấm và Dịch tiết.",
        indication: "Phân biệt nguyên nhân gây tràn dịch các khoang màng.",
        pathologicalMeaning: {
            increase: "• TĂNG (DỊCH TIẾT - Protein dịch/máu > 0.5): Gặp do tính thấm mao mạch tăng vì tổn thương màng. Phổ biến trong Viêm phổi màng phổi, Ung thư di căn, Lao, Viêm tụy cấp.",
            decrease: "• THẤP (DỊCH THẤM): Gặp do mất cân bằng áp lực keo/thủy tĩnh. Phổ biến trong Suy tim sung huyết, Xơ gan, Hội chứng thận hư."
        }
    },
    {
        name: "Đo hoạt độ LDH (dịch chọc dò)", 
        group: "Nước tiểu & Dịch", 
        time: "120 phút / 45 phút", 
        ref: "Tùy thuộc bản chất dịch", 
        alert: "",
        concept: "LDH là enzyme rò rỉ ra khi có sự phá hủy tế bào mô.",
        indication: "Tiêu chuẩn quan trọng (Tiêu chuẩn Light) phối hợp với Protein để phân loại Dịch thấm / Dịch tiết.",
        pathologicalMeaning: {
            increase: "• TĂNG CAO (LDH dịch/máu > 0.6): Dấu hiệu có hoại tử mô, viêm nhiễm nhiều tế bào tại khoang màng. Gặp trong Dịch tiết (Lao, Ung thư, Viêm mủ).",
            decrease: "• THẤP: Thường là Dịch thấm (Suy tim, Suy gan)."
        }
    },
    {
        name: "Đo hoạt độ Amylase (dịch)", 
        group: "Nước tiểu & Dịch", 
        time: "120 phút / 45 phút", 
        ref: "", 
        alert: "",
        concept: "Đo lượng enzyme tuyến tụy rò rỉ vào các khoang cơ thể (thường là màng phổi hoặc màng bụng).",
        indication: "Chẩn đoán tràn dịch do nguyên nhân từ tuyến tụy hoặc thủng đường tiêu hóa.",
        pathologicalMeaning: {
            increase: "• TĂNG RẤT CAO: Gặp trong Viêm tụy cấp (dịch lan lên màng phổi/bụng), nang giả tụy vỡ, hoặc thủng/vỡ thực quản, loét dạ dày tá tràng thủng.",
            decrease: "• BÌNH THƯỜNG: Tràn dịch do các nguyên nhân khác ngoài đường tiêu hóa."
        }
    },
    {
        name: "Định lượng Creatinin (dịch chọc dò)", 
        group: "Nước tiểu & Dịch", 
        time: "120 phút / 45 phút", 
        ref: "", 
        alert: "",
        concept: "So sánh nồng độ Creatinin trong dịch chọc dò (dịch ổ bụng) với nồng độ trong máu.",
        indication: "Chẩn đoán phân biệt tràn dịch màng bụng do nguyên nhân tiết niệu (rò rỉ nước tiểu).",
        pathologicalMeaning: {
            increase: "• TĂNG MẠNH (Tỷ lệ Dịch/Máu > 1.0): Chẩn đoán xác định có sự vỡ bàng quang, chấn thương niệu quản làm rò rỉ nước tiểu vào khoang bụng (Cổ trướng nước tiểu).",
            decrease: "• BÌNH THƯỜNG: Không có rò rỉ từ đường tiết niệu."
        }
    },
    {
        name: "Định lượng Cholesterol (dịch chọc dò)", 
        group: "Nước tiểu & Dịch", 
        time: "120 phút / 45 phút", 
        ref: "", 
        alert: "",
        concept: "Phân tích lượng mỡ trong dịch màng phổi hoặc ổ bụng.",
        indication: "Hỗ trợ phân biệt Dịch thấm/Dịch tiết và chẩn đoán tràn dịch dưỡng trấp giả.",
        pathologicalMeaning: {
            increase: "• TĂNG (> 45 mg/dL): Gợi ý Dịch tiết. Nếu cholesterol rất cao kèm theo có tinh thể cholesterol, thường gợi ý Tràn dịch màng phổi do Viêm khớp dạng thấp hoặc Lao cũ mạn tính.",
            decrease: "• BÌNH THƯỜNG: Gợi ý Dịch thấm."
        }
    },
    {
        name: "Định lượng Ure (dịch chọc dò)", 
        group: "Nước tiểu & Dịch", 
        time: "120 phút / 45 phút", 
        ref: "", 
        alert: "",
        concept: "So sánh nồng độ Ure trong dịch với huyết thanh.",
        indication: "Thường dùng chung với Creatinin dịch để chẩn đoán chấn thương rách vỡ đường tiết niệu.",
        pathologicalMeaning: {
            increase: "• TĂNG CAO: Xác nhận có nước tiểu tràn vào khoang bụng do vỡ bàng quang, chấn thương niệu quản.",
            decrease: "• BÌNH THƯỜNG: Không có nguồn gốc rò rỉ từ hệ tiết niệu."
        }
    },
    {
        name: "Định lượng Triglycerid (dịch chọc dò)", 
        group: "Nước tiểu & Dịch", 
        time: "120 phút / 45 phút", 
        ref: "", 
        alert: "",
        concept: "Kiểm tra mức độ mỡ máu (Triglyceride) trong khoang dịch. Dịch chứa nhiều Triglyceride thường có màu trắng đục như sữa.",
        indication: "Chẩn đoán xác định Tràn dịch dưỡng trấp (Chylothorax/Chylous ascites).",
        pathologicalMeaning: {
            increase: "• TĂNG CAO (> 110 mg/dL): Xác định Tràn dịch dưỡng trấp do vỡ/tắc nghẽn ống ngực (ống dẫn bạch huyết chính) bởi khối u (Lymphoma), chấn thương, hoặc phẫu thuật lồng ngực.",
            decrease: "• THẤP (< 50 mg/dL): Loại trừ tràn dịch dưỡng trấp."
        }
    },
    {
        name: "Phản ứng Rivalta (dịch)", 
        group: "Nước tiểu & Dịch", 
        time: "120 phút / 45 phút", 
        ref: "Âm tính", 
        alert: "",
        concept: "Là phản ứng hóa học định tính cổ điển và nhanh chóng bằng cách nhỏ giọt dịch chọc dò vào dung dịch axit acetic loãng để quan sát hiện tượng kết tủa (khói trắng).",
        indication: "Sàng lọc nhanh tại giường hoặc phòng lab để phân biệt Dịch thấm và Dịch tiết dựa trên lượng Protein.",
        pathologicalMeaning: {
            increase: "• DƯƠNG TÍNH (Có kết tủa khói trắng): Dịch có chứa nhiều Protein (> 30g/L), xác định đây là Dịch tiết (do Viêm nhiễm mủ, Lao, hoặc Ác tính).",
            decrease: "• ÂM TÍNH (Nước trong suốt): Dịch có ít Protein, xác định đây là Dịch thấm (do Suy tim, Xơ gan, Hội chứng thận hư)."
        }
    },
    {
        name: "Bạch cầu (WBC)", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "3.70 - 10.1 (10^3/µL)", 
        alert: "> 50 hoặc < 1 (10^3/µL).",
        concept: "WBC (White Blood Cell) là tổng số lượng tế bào bạch cầu trong máu. Bạch cầu đóng vai trò như 'đội quân bảo vệ', giúp cơ thể chống lại các tác nhân gây bệnh như vi khuẩn, virus, nấm và ký sinh trùng.",
        indication: "Xét nghiệm thường quy để tầm soát, chẩn đoán và theo dõi tình trạng nhiễm trùng, viêm, dị ứng hoặc các bệnh lý ác tính về máu (như ung thư máu bạch cầu).",
        pathologicalMeaning: {
            increase: "• TĂNG CAO: Gặp trong nhiễm trùng cấp tính (đặc biệt do vi khuẩn), viêm ruột thừa, áp xe, hoặc bệnh lý ác tính như bệnh Bạch cầu cấp/mạn (Leukemia).\n\n• TĂNG NHẸ: Phản ứng viêm, dị ứng, sau phẫu thuật hoặc phụ nữ có thai.",
            decrease: "• GIẢM: Cơ thể suy giảm miễn dịch, dễ bị nhiễm trùng cơ hội. Gặp trong nhiễm virus nặng (như Dengue, HIV), suy tủy xương, hoặc do tác dụng phụ của hóa/xạ trị."
        }
    },
    {
        name: "NEU#", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "1.63 - 6.96 (10^3/µL)", 
        alert: "",
        concept: "NEU (Neutrophil - Bạch cầu đa nhân trung tính) là loại bạch cầu chiếm tỷ lệ cao nhất. Chúng là lực lượng phản ứng nhanh, chuyên tiêu diệt vi khuẩn và xử lý các mô hoại tử.",
        indication: "Đánh giá chi tiết tình trạng nhiễm khuẩn cấp tính hoặc mức độ ức chế tủy xương.",
        pathologicalMeaning: {
            increase: "• TĂNG: Điển hình của nhiễm khuẩn cấp tính (viêm phổi, nhiễm trùng huyết), nhồi máu cơ tim, stress nặng.",
            decrease: "• GIẢM: Nhiễm virus, suy tủy, thiếu hụt vitamin B12/Folate, hoặc do dùng thuốc ức chế miễn dịch."
        }
    },
    {
        name: "Lympho#", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "1.09 - 2.99 (10^3/µL)", 
        alert: "",
        concept: "Lympho (Lymphocyte - Bạch cầu lympho) là tế bào miễn dịch đặc hiệu, bao gồm tế bào B (sản xuất kháng thể) và tế bào T (tiêu diệt tế bào nhiễm virus/ung thư).",
        indication: "Chẩn đoán phân biệt các nguyên nhân nhiễm trùng (chủ yếu do virus) và bệnh lý lympho.",
        pathologicalMeaning: {
            increase: "• TĂNG: Gặp trong các bệnh nhiễm virus (Cúm, Sởi, Quai bị, Viêm gan), ho gà, lao, hoặc ung thư hạch (Lymphoma).",
            decrease: "• GIẢM: Hội chứng suy giảm miễn dịch (HIV/AIDS), sử dụng corticoid kéo dài, hoặc xạ trị."
        }
    },
    {
        name: "Mono#", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "0.24 - 0.79 (10^3/µL)", 
        alert: "",
        concept: "Mono (Monocyte - Bạch cầu đơn nhân) là những 'tế bào dọn dẹp' kích thước lớn. Chúng di chuyển đến các mô viêm, biến thành đại thực bào để thực bào vi khuẩn và mô chết.",
        indication: "Hỗ trợ chẩn đoán các bệnh lý nhiễm trùng mạn tính hoặc bệnh tự miễn.",
        pathologicalMeaning: {
            increase: "• TĂNG: Nhiễm trùng mạn tính (Lao, sốt rét, giang mai), bệnh tự miễn, hoặc trong giai đoạn phục hồi của nhiễm trùng cấp.",
            decrease: "• GIẢM: Ít có ý nghĩa lâm sàng, có thể gặp trong suy tủy."
        }
    },
    {
        name: "EOS#", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "0.03 - 0.44 (10^3/µL)", 
        alert: "",
        concept: "EOS (Eosinophil - Bạch cầu ái toan) là loại bạch cầu chuyên biệt chống lại ký sinh trùng và phản ứng trong các tình trạng dị ứng.",
        indication: "Chẩn đoán tình trạng nhiễm ký sinh trùng (giun, sán) và các bệnh lý dị ứng.",
        pathologicalMeaning: {
            increase: "• TĂNG: Đặc trưng trong nhiễm giun sán (Toxocara, giun đũa, giun móc), bệnh dị ứng (hen phế quản, chàm, mề đay).",
            decrease: "• GIẢM: Giai đoạn đầu của nhiễm trùng cấp hoặc sử dụng thuốc corticoid."
        }
    },
    {
        name: "BASO#", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "0.0 - 0.08 (10^3/µL)", 
        alert: "",
        concept: "BASO (Basophil - Bạch cầu ái kiềm) chiếm tỷ lệ thấp nhất, giải phóng histamine tham gia vào phản ứng dị ứng nghiêm trọng và phản ứng viêm.",
        indication: "Hỗ trợ theo dõi bệnh lý tủy xương và dị ứng nặng.",
        pathologicalMeaning: {
            increase: "• TĂNG: Bệnh bạch cầu mạn tính, rối loạn tăng sinh tủy, phản ứng dị ứng nặng.",
            decrease: "• GIẢM: Bão hòa trong máu do giải phóng hạt viêm, ít có ý nghĩa chẩn đoán."
        }
    },
    {
        name: "Hồng cầu (RBC)", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "4.06 - 4.69 (10^6/µL)", 
        alert: "",
        concept: "RBC (Red Blood Cell) là tổng số lượng tế bào hồng cầu trong máu. Hồng cầu chứa Hemoglobin giúp vận chuyển oxy từ phổi đến các mô và mang CO2 trở lại phổi.",
        indication: "Khảo sát cơ bản để đánh giá tình trạng thiếu máu hoặc chứng đa hồng cầu.",
        pathologicalMeaning: {
            increase: "• TĂNG: Bệnh đa hồng cầu nguyên phát, mất nước nặng, hoặc cơ thể tăng sản xuất để bù trừ do thiếu oxy mạn tính (bệnh phổi tắc nghẽn, bệnh tim bẩm sinh).",
            decrease: "• GIẢM: Tình trạng Thiếu máu do nhiều nguyên nhân (xuất huyết, suy tủy, thiếu sắt, tan máu)."
        }
    },
    {
        name: "Hemoglobin (HGB)", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "12.9 - 14.2 g/dL", 
        alert: "≤ 7 hoặc > 20 g/dL.",
        concept: "HGB là phân tử protein giàu sắt nằm trong hồng cầu, tạo nên màu đỏ của máu và đảm nhiệm chức năng chuyên chở oxy.",
        indication: "Là tiêu chuẩn vàng và chính xác nhất để chẩn đoán xác định bệnh Thiếu máu và đánh giá mức độ thiếu máu.",
        pathologicalMeaning: {
            increase: "• TĂNG (Nguy cơ tắc mạch): Gặp ở bệnh đa hồng cầu, người sống ở vùng cao, người hút thuốc lá lâu năm, hoặc mất nước.",
            decrease: "• GIẢM (Thiếu máu): Gây mệt mỏi, da xanh xao. Cảnh báo mức ≤ 7 g/dL là thiếu máu rất nặng, thường có chỉ định truyền máu cấp cứu."
        }
    },
    {
        name: "Hematocrit (HCT)", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "37.7 - 53.7%", 
        alert: "< 18% hoặc > 60%.",
        concept: "HCT (Dung tích hồng cầu) là tỷ lệ phần trăm thể tích mà các tế bào hồng cầu chiếm chỗ trong tổng thể tích máu toàn phần.",
        indication: "Đánh giá mức độ cô đặc của máu (trong bệnh sốt xuất huyết, sốc) hoặc tình trạng thiếu máu.",
        pathologicalMeaning: {
            increase: "• TĂNG (> 60%): Máu bị cô đặc cao độ, tăng độ nhớt, nguy cơ huyết khối. Cảnh báo tình trạng thoát huyết tương nặng trong Sốt xuất huyết Dengue hoặc sốc mất nước.",
            decrease: "• GIẢM (< 18%): Máu loãng do thiếu máu nặng, mất máu ồ ạt, hoặc do truyền quá nhiều dịch."
        }
    },
    {
        name: "MCV", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "81.1 - 96.0 fL", 
        alert: "",
        concept: "MCV (Mean Corpuscular Volume) đo thể tích trung bình của một tế bào hồng cầu, giúp phân loại kích thước hồng cầu là nhỏ, bình thường hay to.",
        indication: "Cực kỳ quan trọng để chẩn đoán phân biệt nguyên nhân gây Thiếu máu.",
        pathologicalMeaning: {
            increase: "• TĂNG (Hồng cầu to): Điển hình trong thiếu máu do thiếu Vitamin B12, thiếu Folate, hoặc bệnh gan.",
            decrease: "• GIẢM (Hồng cầu nhỏ): Gặp trong thiếu máu thiếu sắt, bệnh Thalassemia (tan máu bẩm sinh)."
        }
    },
    {
        name: "MCH", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "27.0 - 31.2 pg", 
        alert: "",
        concept: "MCH (Mean Corpuscular Hemoglobin) đo lượng huyết sắc tố (Hemoglobin) trung bình có trong một tế bào hồng cầu, phản ánh độ 'nhạt' hay 'đậm' màu của hồng cầu.",
        indication: "Dùng chung với MCV để phân loại thiếu máu.",
        pathologicalMeaning: {
            increase: "• TĂNG (Hồng cầu ưu sắc): Thường đi kèm với MCV tăng trong thiếu máu hồng cầu to (thiếu B12/Folate).",
            decrease: "• GIẢM (Hồng cầu nhược sắc): Điển hình trong thiếu máu thiếu sắt, Thalassemia (màu hồng cầu nhợt nhạt do thiếu huyết sắc tố)."
        }
    },
    {
        name: "MCHC", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "31.8 - 35.4 g/dl", 
        alert: "",
        concept: "MCHC (Mean Corpuscular Hemoglobin Concentration) là nồng độ trung bình của hemoglobin trong một thể tích hồng cầu nhất định.",
        indication: "Kiểm tra chéo độ chính xác của máy huyết học và hỗ trợ phân loại thiếu máu.",
        pathologicalMeaning: {
            increase: "• TĂNG: Bệnh hồng cầu hình cầu di truyền (spherocytosis).",
            decrease: "• GIẢM: Thiếu máu thiếu sắt, Thalassemia."
        }
    },
    {
        name: "RDW", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "11.5 - 14.5%", 
        alert: "",
        concept: "RDW (Red Cell Distribution Width) là dải phân bố kích thước hồng cầu, đánh giá xem các hồng cầu có kích thước đồng đều nhau hay không.",
        indication: "Phân biệt thiếu máu thiếu sắt (kích thước hồng cầu rất không đều) và Thalassemia (kích thước hồng cầu nhỏ nhưng đều nhau).",
        pathologicalMeaning: {
            increase: "• TĂNG (Hồng cầu to nhỏ không đều): Gặp trong thiếu máu thiếu sắt, thiếu B12/Folate, hoặc bệnh nhân vừa được truyền máu.",
            decrease: "• GIẢM: Không có ý nghĩa lâm sàng (Hồng cầu đồng đều)."
        }
    },
    {
        name: "Tiểu cầu (PLT)", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "155 - 366 (10^3/µL)", 
        alert: "< 30 hoặc > 1000 (10^3/µL).",
        concept: "PLT (Platelet) là các mảnh tế bào nhỏ không nhân lưu thông trong máu. Chức năng sống còn của tiểu cầu là kết dính với nhau tạo thành cục máu đông để cầm máu khi mạch máu bị tổn thương.",
        indication: "Đánh giá rối loạn đông máu, theo dõi sốt xuất huyết, và kiểm tra trước các phẫu thuật/thủ thuật xâm lấn.",
        pathologicalMeaning: {
            increase: "• TĂNG CAO (> 1000): Nguy cơ hình thành huyết khối (cục máu đông) gây tắc mạch. Gặp trong hội chứng tăng sinh tủy, sau cắt lách, hoặc phản ứng sau viêm/chảy máu.",
            decrease: "• GIẢM NẶNG (< 30): Cảnh báo cực kỳ nguy hiểm, nguy cơ xuất huyết tự nhiên (chảy máu não, chảy máu nội tạng). Điển hình trong Sốt xuất huyết Dengue, xuất huyết giảm tiểu cầu miễn dịch (ITP), suy tủy."
        }
    },
    {
        name: "MPV", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "6.90 - 10.6 fL", 
        alert: "",
        concept: "MPV (Mean Platelet Volume) đo thể tích trung bình của tiểu cầu, giúp đánh giá tuổi thọ và kích thước của tiểu cầu trong máu.",
        indication: "Hỗ trợ tìm nguyên nhân gây giảm tiểu cầu (do tủy xương không sản xuất được hay do bị phá hủy ở ngoại vi).",
        pathologicalMeaning: {
            increase: "• TĂNG (Tiểu cầu to): Tiểu cầu non mới được tủy xương giải phóng ồ ạt để bù đắp (gặp trong xuất huyết giảm tiểu cầu miễn dịch ITP).",
            decrease: "• GIẢM (Tiểu cầu nhỏ): Suy tủy xương (tủy không sản xuất được tiểu cầu non)."
        }
    },
    {
        name: "PDW", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "7 - 17.0 fL", 
        alert: "",
        concept: "PDW (Platelet Distribution Width) đánh giá độ đồng đều về kích thước của các tiểu cầu.",
        indication: "Hỗ trợ chẩn đoán các bệnh lý huyết khối hoặc xuất huyết.",
        pathologicalMeaning: {
            increase: "• TĂNG: Kích thước tiểu cầu to nhỏ không đều, gặp trong các rối loạn sinh tủy.",
            decrease: "• GIẢM: Không có ý nghĩa bệnh lý rõ rệt."
        }
    },
    {
        name: "PCT", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "0.10 - 2.28%", 
        alert: "",
        concept: "PCT (Plateletcrit) là dung tích tiểu cầu, tính bằng phần trăm thể tích máu được chiếm bởi tiểu cầu (tương tự như HCT của hồng cầu).",
        indication: "Đánh giá tổng khối lượng tiểu cầu tham gia vào quá trình đông máu.",
        pathologicalMeaning: {
            increase: "• TĂNG: Có nguy cơ huyết khối.",
            decrease: "• GIẢM: Phản ánh nguy cơ chảy máu do thiếu hụt khối lượng tiểu cầu."
        }
    },
    {
        name: "Tổng phân tích tế bào máu ngoại vi (Phết máu ngoại biên)", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "", 
        alert: "",
        concept: "Kỹ thuật viên trải một giọt máu mỏng lên lam kính, nhuộm màu và soi trực tiếp dưới kính hiển vi để quan sát hình thái, kích thước và cấu trúc của từng tế bào máu.",
        indication: "Khi máy tự động báo lỗi hoặc nghi ngờ có tế bào bất thường, giúp chẩn đoán Ung thư máu (Leukemia), Thalassemia, hoặc ký sinh trùng sốt rét.",
        pathologicalMeaning: {
            increase: "• BẤT THƯỜNG: Phát hiện tế bào non ác tính (Blast) cảnh báo ung thư máu; Hồng cầu hình bia/hình liềm cảnh báo bệnh lý di truyền; Phát hiện mảnh vỡ hồng cầu.",
            decrease: "• BÌNH THƯỜNG: Tế bào máu trưởng thành có hình thái chuẩn."
        }
    },
    {
        name: "Số lượng và độ tập trung tiểu cầu (thủ công)", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "", 
        alert: "",
        concept: "Kiểm tra và đếm tiểu cầu bằng mắt thường qua kính hiển vi.",
        indication: "Xác nhận lại kết quả khi máy tự động báo tiểu cầu giảm sâu (để loại trừ trường hợp tiểu cầu bị vón cục giả tạo trong ống nghiệm EDTA).",
        pathologicalMeaning: {
            increase: "• BẤT THƯỜNG: Tiểu cầu vón cụm to (giảm giả tạo trên máy). Cần lấy lại máu bằng ống Citrat để đếm lại.",
            decrease: "• BÌNH THƯỜNG: Xác nhận kết quả đếm của máy tự động là chính xác."
        }
    },
    {
        name: "Hồng cầu lưới (phương pháp thủ công)", 
        group: "Huyết học", 
        time: "90 phút / 30 phút", 
        ref: "0.2 - 2.0%", 
        alert: "",
        concept: "Hồng cầu lưới là những tế bào hồng cầu non, mới được tủy xương giải phóng vào máu ngoại vi. Tỷ lệ này phản ánh trực tiếp 'công suất' làm việc của tủy xương.",
        indication: "Đánh giá khả năng đáp ứng tạo máu của tủy xương ở bệnh nhân thiếu máu, và theo dõi hiệu quả sau khi điều trị bổ sung Sắt/B12.",
        pathologicalMeaning: {
            increase: "• TĂNG: Phản ứng tốt của tủy xương đang tăng tốc sản xuất hồng cầu để bù đắp (sau khi mất máu cấp, tan máu, hoặc đáp ứng tốt với thuốc trị thiếu máu).",
            decrease: "• GIẢM: Tủy xương suy yếu, không sản xuất được hồng cầu (suy tủy), hoặc thiếu hụt nguyên liệu tạo máu (sắt, B12, Folate)."
        }
    },
    {
        name: "Thời gian máu đông (TS)", 
        group: "Huyết học", 
        time: "30 phút", 
        ref: "4 - 10 phút", 
        alert: "",
        concept: "Đo thời gian từ khi máu chảy ra khỏi tĩnh mạch vào ống nghiệm thủy tinh không có chất chống đông cho đến khi tạo thành cục máu đông hoàn toàn.",
        indication: "Đánh giá con đường đông máu nội sinh tổng quát.",
        pathologicalMeaning: {
            increase: "• KÉO DÀI (> 10 phút): Thiếu hụt nghiêm trọng các yếu tố đông máu nội sinh (Hemophilia), bệnh gan nặng, hoặc đang dùng thuốc chống đông (Heparin).",
            decrease: "• RÚT NGẮN: Máu dễ đông, có tình trạng tăng đông."
        }
    },
    {
        name: "Thời gian máu chảy (TC) phương pháp Duke", 
        group: "Huyết học", 
        time: "30 phút", 
        ref: "2 - 4 phút", 
        alert: "",
        concept: "Tạo một vết chích nhỏ ở dái tai và đo thời gian cho đến khi vết thương tự ngừng chảy máu. Phản ánh chức năng tạo nút cầm máu của thành mạch và tiểu cầu.",
        indication: "Kiểm tra chức năng tiểu cầu và thành mao mạch trước khi thực hiện các tiểu phẫu (nhổ răng, cắt amidan).",
        pathologicalMeaning: {
            increase: "• KÉO DÀI: Dấu hiệu của giảm số lượng tiểu cầu, giảm chức năng tiểu cầu (suy nhược tiểu cầu), hoặc tổn thương thành mạch mạn tính.",
            decrease: "• BÌNH THƯỜNG: Chức năng cầm máu ban đầu hoạt động tốt."
        }
    },
    {
        name: "Máu lắng (bằng máy tự động)", 
        group: "Huyết học", 
        time: "120 phút / 60 phút", 
        ref: "Giờ 1: < 15mm\nGiờ 2: < 20mm", 
        alert: "",
        concept: "ESR (Erythrocyte Sedimentation Rate) đo tốc độ lắng của hồng cầu xuống đáy ống nghiệm thẳng đứng. Khi trong máu có nhiều protein viêm, hồng cầu sẽ kết dính và lắng nhanh hơn.",
        indication: "Xét nghiệm không đặc hiệu nhưng rất hữu ích để sàng lọc, theo dõi các tình trạng viêm nhiễm mạn tính, nhiễm khuẩn, và các bệnh lý tự miễn (Lao, Viêm khớp dạng thấp).",
        pathologicalMeaning: {
            increase: "• TĂNG NHANH: Chỉ điểm cơ thể đang có phản ứng viêm mạnh mẽ (viêm khớp dạng thấp, đa u tủy xương, nhiễm trùng mạn tính, lao).",
            decrease: "• BÌNH THƯỜNG: Không có viêm nhiễm hệ thống tiến triển."
        }
    },
    {
        name: "Xét nghiệm tế bào trong nước dịch chẩn đoán tế bào học", 
        group: "Huyết học", 
        time: "120 phút / 60 phút", 
        ref: "", 
        alert: "",
        concept: "Quay ly tâm các loại dịch (màng phổi, màng bụng, khớp, DNT), lấy cặn lắng nhuộm và soi dưới kính hiển vi để tìm và phân biệt các loại tế bào (Hồng cầu, Bạch cầu đoạn, Bạch cầu Lympho).",
        indication: "Rất quan trọng để chẩn đoán nguyên nhân gây tràn dịch các khoang màng.",
        pathologicalMeaning: {
            increase: "• BẤT THƯỜNG: Ưu thế Bạch cầu đa nhân trung tính (Viêm nhiễm cấp, mủ); Ưu thế Lympho (Gợi ý Lao hoặc Viêm mạn tính); Ưu thế Bạch cầu ái toan (Gợi ý Dị ứng hoặc ký sinh trùng). Thấy tế bào ác tính (Ung thư di căn).",
            decrease: "• BÌNH THƯỜNG: Dịch trong suốt, ít tế bào."
        }
    },
    {
        name: "Thời gian prothrombin (PT)", 
        group: "Đông máu", 
        time: "60 phút / 30 phút", 
        ref: "PT < 16 giây\nINR < 1.2", 
        alert: "PT > 180 giây\nINR > 15.0",
        concept: "PT (Prothrombin Time) là xét nghiệm đo lường thời gian cần thiết để hình thành cục máu đông qua con đường đông máu ngoại sinh. Chỉ số INR được tính toán từ PT để chuẩn hóa kết quả toàn cầu.",
        indication: "Đánh giá chức năng đông máu trước phẫu thuật, theo dõi bệnh nhân đang dùng thuốc chống đông kháng Vitamin K (như Warfarin, Sintrom), và đánh giá chức năng tổng hợp của gan.",
        pathologicalMeaning: {
            increase: "• KÉO DÀI (Máu chậm đông): Bệnh nhân có nguy cơ chảy máu ồ ạt. Nguyên nhân do dùng quá liều thuốc chống đông, xơ gan nặng (gan không tổng hợp được yếu tố đông máu), thiếu hụt Vitamin K.",
            decrease: "• RÚT NGẮN (Máu dễ đông): Nguy cơ hình thành huyết khối (cục máu đông gây tắc mạch)."
        }
    },
    {
        name: "APTT", 
        group: "Đông máu", 
        time: "60 phút / 30 phút", 
        ref: "< 36 giây", 
        alert: "> 140 giây",
        concept: "APTT (Activated Partial Thromboplastin Time) đo thời gian đông máu theo con đường nội sinh.",
        indication: "Tầm soát các rối loạn chảy máu (như bệnh máu khó đông Hemophilia), theo dõi bệnh nhân đang điều trị bằng thuốc chống đông Heparin tiêu chuẩn.",
        pathologicalMeaning: {
            increase: "• KÉO DÀI: Nguy cơ xuất huyết cao. Gặp ở bệnh nhân Hemophilia A/B, bệnh von Willebrand, đang truyền Heparin, hoặc mắc hội chứng DIC (Đông máu rải rác trong lòng mạch).",
            decrease: "• RÚT NGẮN: Ít gặp, có thể do tình trạng tăng đông máu hoặc do lỗi lấy mẫu."
        }
    },
    {
        name: "Định lượng Fibrinogen", 
        group: "Đông máu", 
        time: "60 phút / 30 phút", 
        ref: "200 - 400 mg/dl", 
        alert: "< 60 hoặc > 1200 mg/dl",
        concept: "Fibrinogen là một protein hòa tan trong huyết tương do gan sản xuất. Trong quá trình đông máu, nó chuyển hóa thành mạng lưới Fibrin để cầm máu.",
        indication: "Khảo sát rối loạn chảy máu, chẩn đoán hội chứng DIC, và đánh giá tình trạng viêm nhiễm hệ thống (do fibrinogen cũng là một protein phản ứng pha cấp).",
        pathologicalMeaning: {
            increase: "• TĂNG: Phản ứng viêm cấp/mạn tính, phụ nữ có thai, nhồi máu cơ tim, hoặc người có nguy cơ huyết khối tĩnh mạch.",
            decrease: "• GIẢM MẠNH: Nguy cơ chảy máu nghiêm trọng. Gặp trong hội chứng DIC (suy kiệt yếu tố đông máu), xơ gan giai đoạn cuối, hoặc tiêu sợi huyết tiên phát."
        }
    },
    {
        name: "Định lượng D-Dimer", 
        group: "Đông máu", 
        time: "60 phút / 30 phút", 
        ref: "0 - 0.55 mg/L", 
        alert: "",
        concept: "D-Dimer là một đoạn protein nhỏ xuất hiện trong máu sau khi một cục máu đông bị hòa tan (tiêu sợi huyết).",
        indication: "Là xét nghiệm loại trừ (Rule-out test) quan trọng tại phòng cấp cứu để chẩn đoán huyết khối tĩnh mạch sâu (DVT) và Thuyên tắc phổi (PE).",
        pathologicalMeaning: {
            increase: "• TĂNG: Cơ thể đang hình thành và phá vỡ cục máu đông ở đâu đó. Gặp trong Thuyên tắc phổi, Huyết khối tĩnh mạch sâu, DIC, chấn thương lớn, sau phẫu thuật, hoặc phụ nữ có thai.",
            decrease: "• BÌNH THƯỜNG: Có giá trị chẩn đoán loại trừ rất cao (khẳng định bệnh nhân không bị thuyên tắc phổi/huyết khối ở thời điểm hiện tại)."
        }
    },
    {
        name: "Xét nghiệm Anti-Xa", 
        group: "Đông máu", 
        time: "60 phút / 30 phút", 
        ref: "UFH: 0 - 1.50 IU/ml\nLMWH: 0 - 1.75 IU/ml", 
        alert: "",
        concept: "Xét nghiệm Anti-Xa đo lường hoạt động của Yếu tố Xa (một yếu tố đông máu), thông qua đó đánh giá nồng độ và hiệu quả của thuốc chống đông Heparin trong máu.",
        indication: "Theo dõi sát sao nồng độ thuốc ở bệnh nhân đang điều trị bằng Heparin trọng lượng phân tử thấp (LMWH) hoặc Heparin không phân đoạn (UFH) để tránh quá liều.",
        pathologicalMeaning: {
            increase: "• TĂNG (Hoạt độ Anti-Xa cao): Bệnh nhân đang bị quá liều thuốc chống đông Heparin, đối mặt với nguy cơ xuất huyết đe dọa tính mạng.",
            decrease: "• GIẢM: Liều Heparin chưa đủ để ngăn ngừa huyết khối (cục máu đông vẫn tiếp tục lan rộng)."
        }
    },
    {
        name: "Định nhóm máu tại giường bệnh trước truyền máu", 
        group: "Truyền máu", 
        time: "Nhanh chóng", 
        ref: "", 
        alert: "",
        concept: "Là bước kiểm tra chéo cuối cùng, được thực hiện ngay tại giường bệnh nhân bởi bác sĩ/điều dưỡng ngay trước khi cắm kim truyền bịch máu.",
        indication: "Quy định bắt buộc của Bộ Y tế nhằm đảm bảo an toàn tuyệt đối, tránh tai biến truyền nhầm nhóm máu.",
        pathologicalMeaning: {
            increase: "• THUẬN HỢP: Ngưng kết đúng nhóm máu, an toàn để tiến hành truyền máu.",
            decrease: "• KHÔNG THUẬN HỢP: Phát hiện bất đồng nhóm máu giữa bệnh nhân và bịch máu. Đình chỉ truyền máu ngay lập tức."
        }
    },
    {
        name: "Định nhóm máu hệ ABO, Rh(D) bằng máy tự động", 
        group: "Truyền máu", 
        time: "120 phút / 60 phút", 
        ref: "Nhóm máu ABO: A, B, AB, O\nYếu tố Rh: (+) hoặc (-)", 
        alert: "",
        concept: "Xác định sự hiện diện của các kháng nguyên A, B (hệ ABO) và kháng nguyên D (hệ Rh) trên bề mặt hồng cầu bằng hệ thống máy tự động chính xác cao.",
        indication: "Sàng lọc định kỳ, chuẩn bị trước phẫu thuật, phụ nữ mang thai, hoặc làm hồ sơ quản lý sức khỏe.",
        pathologicalMeaning: {
            increase: "• Nhóm O: Nhóm chuyên cho phổ biến.\n• Nhóm AB: Nhóm chuyên nhận.\n• Rh(D) Âm tính (-): Nhóm máu hiếm ở Việt Nam, cần quản lý chặt chẽ ở phụ nữ có thai để tránh tan máu ở trẻ sơ sinh.",
            decrease: "• Kết quả là thông số sinh học cố định của mỗi người, không phải bệnh lý."
        }
    },
    {
        name: "Phản ứng hòa hợp trong môi trường nước muối / kháng Globulin", 
        group: "Truyền máu", 
        time: "120 phút", 
        ref: "", 
        alert: "Không thuận hợp",
        concept: "Xét nghiệm trộn hồng cầu của người hiến với huyết thanh của người nhận (và ngược lại) để kiểm tra xem có xảy ra hiện tượng ngưng kết (đánh nhau) hay không.",
        indication: "Là xét nghiệm Cross-match bắt buộc tại phòng xét nghiệm trước khi phát máu cho bệnh nhân.",
        pathologicalMeaning: {
            increase: "• TƯƠNG THÍCH (Âm tính): Không có phản ứng ngưng kết, máu an toàn để truyền.",
            decrease: "• KHÔNG TƯƠNG THÍCH (Cảnh báo): Có hiện tượng ngưng kết/tan máu. Bịch máu này tuyệt đối không được truyền cho bệnh nhân vì sẽ gây tai biến tử vong."
        }
    },
    {
        name: "Nghiệm pháp Coombs trực tiếp / gián tiếp", 
        group: "Truyền máu", 
        time: "120 phút / 60 phút", 
        ref: "Âm tính", 
        alert: "Dương tính",
        concept: "Xét nghiệm tìm các kháng thể bất thường bám trên bề mặt hồng cầu (Trực tiếp) hoặc trôi tự do trong huyết thanh (Gián tiếp) gây phá hủy hồng cầu.",
        indication: "Chẩn đoán bệnh Thiếu máu tan máu tự miễn, bất đồng nhóm máu mẹ-con, hoặc tìm nguyên nhân tai biến truyền máu.",
        pathologicalMeaning: {
            increase: "• DƯƠNG TÍNH: Xác nhận cơ thể bệnh nhân đang tự sản xuất kháng thể chống lại chính hồng cầu của mình (hoặc chống lại hồng cầu của thai nhi/người hiến), gây ra tình trạng tan máu (vỡ hồng cầu).",
            decrease: "• ÂM TÍNH: Bình thường, không có kháng thể bất thường."
        }
    },
    {
        name: "Đơn bào đường ruột soi tươi", 
        group: "Ký sinh trùng", 
        time: "120 phút / 60 phút", 
        ref: "Âm tính", 
        alert: "",
        concept: "Quan sát trực tiếp mẫu phân dưới kính hiển vi để tìm sự chuyển động hoặc nang của các loại đơn bào (như Amip Entamoeba histolytica, Giardia).",
        indication: "Chẩn đoán nguyên nhân tiêu chảy kéo dài, phân có nhầy máu, viêm đại tràng do Amip.",
        pathologicalMeaning: {
            increase: "• DƯƠNG TÍNH: Phát hiện đơn bào gây bệnh. Bệnh nhân cần được điều trị bằng thuốc diệt đơn bào (như Metronidazole).",
            decrease: "• ÂM TÍNH: Không tìm thấy đơn bào (Tuy nhiên có thể cần soi nhiều lần trong nhiều ngày để chắc chắn)."
        }
    },
    {
        name: "Trứng giun, sán soi tươi", 
        group: "Ký sinh trùng", 
        time: "120 phút / 60 phút", 
        ref: "Âm tính", 
        alert: "",
        concept: "Lấy cặn lắng của mẫu phân soi dưới kính hiển vi quang học để tìm cấu trúc đặc trưng của trứng các loại giun (đũa, móc, tóc, kim) và sán.",
        indication: "Chẩn đoán bệnh nhiễm giun sán đường ruột, tìm nguyên nhân đau bụng dai dẳng, suy dinh dưỡng, thiếu máu.",
        pathologicalMeaning: {
            increase: "• DƯƠNG TÍNH: Phát hiện trứng giun/sán, xác định loại giun để chỉ định thuốc tẩy giun phù hợp.",
            decrease: "• ÂM TÍNH: Không tìm thấy trứng giun sán trong mẫu phân này."
        }
    },
    {
        name: "Hồng cầu, Bạch cầu trong phân soi tươi", 
        group: "Ký sinh trùng", 
        time: "120 phút / 60 phút", 
        ref: "Âm tính", 
        alert: "",
        concept: "Soi phân để đếm sự xuất hiện của tế bào máu (Hồng cầu, Bạch cầu) - những tế bào vốn dĩ không được phép có mặt trong phân bình thường.",
        indication: "Chẩn đoán phân biệt hội chứng lỵ (do Amip hay trực khuẩn), lồng ruột, u xơ ruột, hoặc viêm loét đại tràng.",
        pathologicalMeaning: {
            increase: "• DƯƠNG TÍNH: Sự xuất hiện của Bạch cầu phản ánh tình trạng viêm nhiễm khuẩn đường ruột (như lỵ trực khuẩn, Shigella). Sự xuất hiện của Hồng cầu cảnh báo có xuất huyết/tổn thương viêm loét niêm mạc ruột.",
            decrease: "• ÂM TÍNH: Đường ruột không có tổn thương xuất huyết hay viêm nhiễm cấp."
        }
    },
    {
        name: "Tìm ký sinh trùng sốt rét trong máu (phương pháp thủ công)", 
        group: "Ký sinh trùng", 
        time: "120 phút / 60 phút", 
        ref: "Âm tính", 
        alert: "",
        concept: "Kéo lam máu đàn (giọt mỏng/giọt đặc), nhuộm Giemsa và soi kính hiển vi để tìm trực tiếp ký sinh trùng Plasmodium cư trú bên trong hồng cầu.",
        indication: "Tiêu chuẩn vàng để chẩn đoán xác định bệnh Sốt Rét, xác định chủng loại và mật độ ký sinh trùng.",
        pathologicalMeaning: {
            increase: "• DƯƠNG TÍNH: Chẩn đoán chắc chắn bệnh nhân mắc Sốt Rét. Loại ký sinh trùng (P. falciparum hay P. vivax) sẽ quyết định phác đồ thuốc điều trị.",
            decrease: "• ÂM TÍNH: Không tìm thấy. Nếu lâm sàng vẫn nghi ngờ, cần lấy máu soi lại trong cơn sốt tiếp theo."
        }
    },
    {
        name: "Neisseria gonorrhoeae nhuộm soi (Lậu cầu)", 
        group: "Vi sinh", 
        time: "120 phút / 60 phút", 
        ref: "Âm tính", 
        alert: "",
        concept: "Lấy dịch mủ niệu đạo/âm đạo, nhuộm Gram và soi để tìm song cầu khuẩn Gram âm (Neisseria gonorrhoeae) hình hạt cà phê nằm trong và ngoài bạch cầu.",
        indication: "Chẩn đoán nhanh bệnh Lậu (bệnh lây truyền qua đường tình dục STDs).",
        pathologicalMeaning: {
            increase: "• DƯƠNG TÍNH: Chẩn đoán xác định bệnh nhân đang mắc bệnh Lậu, cần tiến hành điều trị ngay cho cả bệnh nhân và bạn tình.",
            decrease: "• ÂM TÍNH: Không tìm thấy vi khuẩn Lậu trong mẫu mủ/dịch."
        }
    },
    {
        name: "Vi nấm nhuộm soi / Vi nấm soi tươi", 
        group: "Vi sinh", 
        time: "120 phút / 60 phút", 
        ref: "Âm tính", 
        alert: "",
        concept: "Lấy bệnh phẩm (vảy da, tóc, móng, dịch tỵ hầu, đàm), hòa với dung dịch KOH và soi để tìm cấu trúc sợi nấm hoặc bào tử nấm.",
        indication: "Chẩn đoán nhanh các bệnh lý nấm da, nấm móng, nấm men Candida ở niêm mạc (miệng, âm đạo).",
        pathologicalMeaning: {
            increase: "• DƯƠNG TÍNH: Bệnh nhân bị nhiễm nấm. Tùy hình thái (sợi nấm hay nấm men sinh chồi) để bác sĩ chỉ định thuốc kháng nấm phù hợp.",
            decrease: "• ÂM TÍNH: Không có hiện tượng nhiễm vi nấm."
        }
    },
    {
        name: "AFB trực tiếp nhuộm Ziehl-Neelsen", 
        group: "Vi sinh", 
        time: "24 giờ", 
        ref: "Âm tính", 
        alert: "",
        concept: "AFB (Acid-Fast Bacillus) là trực khuẩn kháng cồn kháng toan (vi khuẩn Lao). Nhuộm Ziehl-Neelsen làm vi khuẩn Lao bắt màu đỏ rực rỡ nổi bật trên nền xanh dưới kính hiển vi.",
        indication: "Xét nghiệm đầu tay và kinh điển nhất để sàng lọc, chẩn đoán Lao phổi ở người có triệu chứng ho kéo dài, ho ra máu.",
        pathologicalMeaning: {
            increase: "• DƯƠNG TÍNH (AFB +): Khẳng định bệnh nhân đang mắc bệnh Lao hoạt động và đang ở giai đoạn thải vi khuẩn ra môi trường (khả năng lây nhiễm rất cao).",
            decrease: "• ÂM TÍNH: Không tìm thấy vi khuẩn lao (Nhưng không loại trừ hoàn toàn, cần cấy đàm hoặc làm sinh học phân tử PCR để chắc chắn)."
        }
    },
    {
        name: "HBV đo tải lượng hệ thống tự động", 
        group: "Sinh học phân tử", 
        time: "14 ngày", 
        ref: "Dưới ngưỡng phát hiện", 
        alert: "",
        concept: "Sử dụng công nghệ PCR (Polymerase Chain Reaction) tự động để khuếch đại và đếm chính xác số lượng bản sao DNA của virus Viêm gan B trong máu.",
        indication: "Quyết định thời điểm bắt đầu dùng thuốc kháng virus, theo dõi tiến độ điều trị và đánh giá tình trạng kháng thuốc của virus HBV.",
        pathologicalMeaning: {
            increase: "• TĂNG CAO (Virus đang nhân lên): Mật độ virus trong máu càng lớn, nguy cơ tiến triển thành xơ gan, ung thư gan càng cao và khả năng lây nhiễm cho người khác rất mạnh.",
            decrease: "• DƯỚI NGƯỠNG PHÁT HIỆN: Đáp ứng cực kỳ tốt với thuốc kháng virus. Virus đang bị ức chế tối đa (tuy nhiên chưa hẳn là đã loại bỏ hoàn toàn khỏi cơ thể)."
        }
    },
    {
        name: "HCV đo tải lượng hệ thống tự động", 
        group: "Sinh học phân tử", 
        time: "14 ngày", 
        ref: "Dưới ngưỡng phát hiện", 
        alert: "",
        concept: "Sử dụng công nghệ RT-PCR để đếm số lượng bản sao RNA của virus Viêm gan C trong 1ml máu.",
        indication: "Khẳng định chẩn đoán nhiễm Viêm gan C (khi Test kháng thể HCV Ab dương tính) và theo dõi phác đồ điều trị viêm gan C.",
        pathologicalMeaning: {
            increase: "• PHÁT HIỆN VIRUS: Bệnh nhân đang nhiễm Viêm gan C thể hoạt động, cần chỉ định phác đồ thuốc kháng virus DAA ngay lập tức.",
            decrease: "• DƯỚI NGƯỠNG PHÁT HIỆN SÂU (Sau 12 tuần điều trị): Bệnh nhân đã đạt được Đáp ứng virus bền vững (SVR), đồng nghĩa với việc đã chữa khỏi hoàn toàn bệnh Viêm gan C."
        }
    },
    {
                name: "Vi khuẩn nuôi cấy và định danh hệ thống tự động", group: "Vi sinh", time: "3 - 5 ngày", ref: "VI KHUẨN KHÔNG MỌC", alert: "",
                concept: "Phương pháp nuôi cấy mẫu bệnh phẩm trên môi trường thạch để vi khuẩn mọc, sau đó định danh bằng máy tự động.",
                indication: "Xác định chính xác nguyên nhân gây nhiễm trùng và định hướng điều trị.",
                pathologicalMeaning: {
                    increase: `• VI KHUẨN MỌC: Phát hiện vi khuẩn. Chi tiết từ tài liệu gốc:
<details style="margin-top:12px; background:#f8fbfe; padding:12px; border-radius:8px; border:1px solid #90caf9;">
    <summary style="font-weight:900; color:#0d47a1; cursor:pointer; font-size:1.3em; outline:none; font-family:'Inter', sans-serif; letter-spacing: -0.5px; display:flex; align-items:center;">🔵 VI KHUẨN GRAM ÂM (Nguyên bản tài liệu)</summary>
    <div style="margin-top:10px; font-size:0.95em; line-height:1.6; color:#2c3e50;">
        <div style="background: linear-gradient(90deg, #e3f2fd 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #2196f3; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#1976d2; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(33,150,243,0.5); text-transform:uppercase; margin-right:10px;">1.</span>
            <b style="font-size:1.15em; color:#0d47a1; font-family:'Montserrat', sans-serif;">Trực khuẩn ruột lên men Lactose (E. coli, Klebsiella spp., Enterobacter, Citrobacter)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Hình thể & Nuôi cấy]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Trực khuẩn Gram (-), yếm khí tùy ý. Mọc trên thạch MacConkey. Lên men Lactose,. E. coli: Indole (+). Klebsiella: có nang nhầy, Indole (-), không di động.</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Cư trú & Gây bệnh]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Hệ vi khuẩn ruột. Gây nhiễm khuẩn tiết niệu (UTI), viêm phổi, nhiễm khuẩn huyết, nhiễm trùng bệnh viện.</span>
        </div>

        <div style="background: linear-gradient(90deg, #f1f8e9 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #4caf50; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#388e3c; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(76,175,80,0.5); text-transform:uppercase; margin-right:10px;">2.</span>
            <b style="font-size:1.15em; color:#1b5e20; font-family:'Montserrat', sans-serif;">Trực khuẩn ruột KHÔNG lên men Lactose (Proteus spp., Morganella, Providencia, Serratia)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Hình thể & Nuôi cấy]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Trực khuẩn Gram (-). Không lên men Lactose. Proteus: di động tràn lan (swarming), Urease (+); P. mirabilis Indole (-), P. vulgaris Indole (+),. Serratia: sinh sắc tố đỏ.</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Cư trú & Gây bệnh]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Vi khuẩn ruột. Proteus gây nhiễm trùng tiểu, sỏi tiết niệu. Serratia, Morganella gây nhiễm khuẩn cơ hội.</span>
        </div>

        <div style="background: linear-gradient(90deg, #fff3e0 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #ff9800; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#f57c00; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(255,152,0,0.5); text-transform:uppercase; margin-right:10px;">3.</span>
            <b style="font-size:1.15em; color:#e65100; font-family:'Montserrat', sans-serif;">Trực khuẩn ruột Gây bệnh chuyên biệt (Salmonella, Shigella)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Hình thể & Nuôi cấy]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Trực khuẩn Gram (-). Lên men Glucose, không lên men Lactose. Salmonella: sinh H2S (tâm đen trên thạch), di động,. Shigella: Không sinh H2S, KHÔNG di động.</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Cư trú & Gây bệnh]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Ký sinh ở người/động vật. Salmonella gây thương hàn, tiêu chảy. Shigella gây lỵ trực khuẩn.</span>
        </div>

        <div style="background: linear-gradient(90deg, #e0f2f1 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #009688; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#00796b; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(0,150,136,0.5); text-transform:uppercase; margin-right:10px;">4.</span>
            <b style="font-size:1.15em; color:#004d40; font-family:'Montserrat', sans-serif;">Nhóm Pseudomonas (P. aeruginosa, P. fluorescens, P. putida)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Hình thể & Nuôi cấy]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Trực khuẩn Gram (-) thẳng hoặc cong. Hiếu khí tuyệt đối, Oxidase (+). P. aeruginosa: sinh sắc tố xanh (Pyocyanin), có mùi trái cây (nho),,.</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Cư trú & Gây bệnh]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Đất, nước, môi trường bệnh viện. Gây viêm phổi thở máy, nhiễm trùng bỏng, nhiễm khuẩn huyết ở người suy giảm miễn dịch,.</span>
        </div>

        <div style="background: linear-gradient(90deg, #ede7f6 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #673ab7; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#512da8; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(103,58,183,0.5); text-transform:uppercase; margin-right:10px;">5.</span>
            <b style="font-size:1.15em; color:#311b92; font-family:'Montserrat', sans-serif;">Nhóm Acinetobacter (A. baumannii, A. lwoffii, A. calcoaceticus)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Hình thể & Nuôi cấy]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Cầu trực khuẩn Gram (-) ngắn. Hiếu khí tuyệt đối, Oxidase (-). KHÔNG di động,.</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Cư trú & Gây bệnh]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Bề mặt bệnh viện, da người bệnh. Tác nhân hàng đầu gây nhiễm khuẩn bệnh viện đa kháng (viêm phổi, nhiễm khuẩn huyết).</span>
        </div>

        <div style="background: linear-gradient(90deg, #fbe9e7 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #ff5722; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#e64a19; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(255,87,34,0.5); text-transform:uppercase; margin-right:10px;">6.</span>
            <b style="font-size:1.15em; color:#bf360c; font-family:'Montserrat', sans-serif;">Burkholderia & Stenotrophomonas (B. pseudomallei, B. cepacia, S. maltophilia)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Hình thể & Nuôi cấy]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Trực khuẩn Gram (-). Burkholderia: Oxidase (+). Stenotrophomonas: Oxidase (-).</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Cư trú & Gây bệnh]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Đất, nước. B. pseudomallei gây bệnh Whitmore. B. cepacia gây viêm phổi xơ nang. S. maltophilia gây viêm phổi BV.</span>
        </div>

        <div style="background: linear-gradient(90deg, #fffde7 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #fbc02d; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#f9a825; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(251,192,45,0.5); text-transform:uppercase; margin-right:10px;">7.</span>
            <b style="font-size:1.15em; color:#f57f17; font-family:'Montserrat', sans-serif;">Phẩy khuẩn & Ưa ẩm (Vibrio cholerae, Aeromonas, Campylobacter)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Hình thể & Nuôi cấy]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Trực khuẩn Gram (-) hình dấu phẩy/chữ S, di động rất mạnh. Oxidase (+). Vibrio ưa kiềm (mọc trên thạch TCBS),.</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Cư trú & Gây bệnh]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Nước mặn/ngọt, hải sản. Gây bệnh Tả (V. cholerae), nhiễm trùng vết thương (V. vulnificus), tiêu chảy (Aeromonas, Campylobacter),.</span>
        </div>

        <div style="background: linear-gradient(90deg, #e8f5e9 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #43a047; margin-bottom: 0px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#2e7d32; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(67,160,71,0.5); text-transform:uppercase; margin-right:10px;">8.</span>
            <b style="font-size:1.15em; color:#1b5e20; font-family:'Montserrat', sans-serif;">Neisseria & Moraxella (Cầu khuẩn Gram Âm)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Hình thể & Nuôi cấy]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Song cầu Gram (-) hình hạt cà phê. Vi hiếu khí, mọc trên thạch Thayer-Martin/Sô-cô-la có CO2.</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Cư trú & Gây bệnh]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Mũi họng, sinh dục người. Gây bệnh Lậu, Viêm màng não.</span>
        </div>
    </div>
</details>

<details style="margin-top:12px; background:#fff1f0; padding:12px; border-radius:8px; border:1px solid #ffcdd2;">
    <summary style="font-weight:900; color:#c62828; cursor:pointer; font-size:1.3em; outline:none; font-family:'Inter', sans-serif; letter-spacing: -0.5px; display:flex; align-items:center;">🔴 VI KHUẨN GRAM DƯƠNG (Nguyên bản tài liệu)</summary>
    <div style="margin-top:10px; font-size:0.95em; line-height:1.6; color:#2c3e50;">
        <div style="background: linear-gradient(90deg, #ffebee 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #f44336; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#d32f2f; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(244,67,54,0.5); text-transform:uppercase; margin-right:10px;">1.</span>
            <b style="font-size:1.15em; color:#b71c1c; font-family:'Montserrat', sans-serif;">Tụ cầu vàng (Staphylococcus aureus)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Dạng & Nuôi cấy]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Cầu khuẩn Gram (+), xếp đám chùm nho. Catalase (+), Coagulase (+). Mọc thạch máu sinh sắc tố vàng, tan huyết Beta.</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Cư trú & Gây bệnh]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Da, mũi họng. Tác nhân gây mụn nhọt, áp xe, viêm phổi, nhiễm khuẩn huyết, sốc nhiễm độc.</span>
        </div>

        <div style="background: linear-gradient(90deg, #f3e5f5 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #9c27b0; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#7b1fa2; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(156,39,176,0.5); text-transform:uppercase; margin-right:10px;">2.</span>
            <b style="font-size:1.15em; color:#4a148c; font-family:'Montserrat', sans-serif;">Nhóm Tụ cầu Coagulase âm tính (CoNS)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Dạng & Nuôi cấy]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Cầu khuẩn Gram (+), xếp đám. Catalase (+), Coagulase (-).</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Cư trú & Gây bệnh]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Da. S. epidermidis tiết màng biofilm gây nhiễm trùng thiết bị cấy ghép. S. saprophyticus gây UTI phụ nữ.</span>
        </div>

        <div style="background: linear-gradient(90deg, #e1f5fe 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #03a9f4; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#0288d1; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(3,169,244,0.5); text-transform:uppercase; margin-right:10px;">3.</span>
            <b style="font-size:1.15em; color:#01579b; font-family:'Montserrat', sans-serif;">Tràng cầu khuẩn (Enterococcus spp.)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Dạng & Nuôi cấy]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Gram (+) xếp đôi/chuỗi ngắn. Catalase (-). Sống được trong mật 40% và NaCl 6.5%.</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Cư trú & Gây bệnh]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Ruột. Tác nhân gây nhiễm trùng vết mổ, ống thông tiểu, viêm nội tâm mạc.</span>
        </div>

        <div style="background: linear-gradient(90deg, #f1f8e9 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #8bc34a; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#689f38; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(139,195,74,0.5); text-transform:uppercase; margin-right:10px;">4.</span>
            <b style="font-size:1.15em; color:#33691e; font-family:'Montserrat', sans-serif;">Liên cầu tan huyết Beta (Strep Nhóm A & B)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Dạng & Nuôi cấy]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Gram (+) xếp chuỗi dài. Catalase (-). Tan huyết Beta (vòng sáng).</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Cư trú & Gây bệnh]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Họng, da, âm đạo. Gây viêm họng, sốt thấp khớp, viêm màng não trẻ sơ sinh.</span>
        </div>

        <div style="background: linear-gradient(90deg, #fffde7 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #fdd835; margin-bottom: 0px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#fbc02d; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(253,216,53,0.5); text-transform:uppercase; margin-right:10px;">5.</span>
            <b style="font-size:1.15em; color:#f57f17; font-family:'Montserrat', sans-serif;">Phế cầu & Liên cầu Viridans</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Dạng & Nuôi cấy]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Gram (+) song cầu ngọn giáo hoặc chuỗi. Thường tan huyết Alpha (vòng xanh).</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Cư trú & Gây bệnh]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Hô hấp trên, kẽ răng. Gây viêm phổi cộng đồng, viêm nội tâm mạc, áp xe tạng sâu.</span>
        </div>
    </div>
</details>`,
                    decrease: "• VI KHUẨN KHÔNG MỌC: Không phát hiện vi khuẩn mọc sau thời gian ủ bệnh tiêu chuẩn."
                }
            },
            {
                name: "Vi khuẩn kháng thuốc hệ thống tự động", group: "Vi sinh", time: "3 - 5 ngày", ref: "Không áp dụng", alert: "",
                concept: "Thử nghiệm Kháng sinh đồ (AST) để đánh giá mức độ Nhạy cảm (S), Trung gian (I) hoặc Đề kháng (R) của vi khuẩn.",
                indication: "Giúp bác sĩ lâm sàng lựa chọn kháng sinh điều trị hiệu quả nhất.",
                pathologicalMeaning: {
                    increase: `• DƯƠNG TÍNH: Có vi khuẩn. Chi tiết Kháng sinh đồ từ tài liệu gốc:
<details style="margin-top:12px; background:#f8fbfe; padding:12px; border-radius:8px; border:1px solid #90caf9;">
    <summary style="font-weight:900; color:#0d47a1; cursor:pointer; font-size:1.3em; outline:none; font-family:'Inter', sans-serif; letter-spacing: -0.5px; display:flex; align-items:center;">🔵 VI KHUẨN GRAM ÂM (Kháng sinh & Lưu ý)</summary>
    <div style="margin-top:10px; font-size:0.95em; line-height:1.6; color:#2c3e50;">
        <div style="background: linear-gradient(90deg, #e3f2fd 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #2196f3; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#1976d2; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(33,150,243,0.5); text-transform:uppercase; margin-right:10px;">1.</span>
            <b style="font-size:1.15em; color:#0d47a1; font-family:'Montserrat', sans-serif;">Trực khuẩn ruột lên men Lactose (E. coli, Klebsiella spp., Enterobacter, Citrobacter)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Ampicillin, Cefotaxime, Ceftazidime, Ciprofloxacin, Ertapenem, Imipenem, Meropenem, Pip/Tazo, TMP/SMX,.</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý & Kháng thuốc]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">E. coli & Klebsiella có tỷ lệ sinh ESBL cao (cần thử nghiệm ESBL). Klebsiella kháng tự nhiên với Ampicillin.</span>
        </div>

        <div style="background: linear-gradient(90deg, #f1f8e9 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #4caf50; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#388e3c; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(76,175,80,0.5); text-transform:uppercase; margin-right:10px;">2.</span>
            <b style="font-size:1.15em; color:#1b5e20; font-family:'Montserrat', sans-serif;">Trực khuẩn ruột KHÔNG lên men Lactose (Proteus spp., Morganella, Providencia, Serratia)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Tương tự nhóm trên (Cefotaxime, Ciprofloxacin, Ertapenem, Meropenem...).</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý & Kháng thuốc]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">P. vulgaris kháng tự nhiên Ampicillin, Cefuroxime. Serratia kháng tự nhiên Ampicillin, Macrolide, Cefuroxime.</span>
        </div>

        <div style="background: linear-gradient(90deg, #fff3e0 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #ff9800; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#f57c00; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(255,152,0,0.5); text-transform:uppercase; margin-right:10px;">3.</span>
            <b style="font-size:1.15em; color:#e65100; font-family:'Montserrat', sans-serif;">Trực khuẩn ruột Gây bệnh chuyên biệt (Salmonella, Shigella)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Cefotaxime, Ceftriaxone, Ciprofloxacin, Meropenem, TMP/SMX.</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý & Kháng thuốc]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Thường nhạy cảm nhưng đang gia tăng đề kháng. Aminoglycoside (Gentamicin) có tác dụng in vitro nhưng không hiệu quả in vivo.</span>
        </div>

        <div style="background: linear-gradient(90deg, #e0f2f1 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #009688; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#00796b; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(0,150,136,0.5); text-transform:uppercase; margin-right:10px;">4.</span>
            <b style="font-size:1.15em; color:#004d40; font-family:'Montserrat', sans-serif;">Nhóm Pseudomonas (P. aeruginosa, P. fluorescens, P. putida)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Ceftazidime, Cefepime, Ciprofloxacin, Gentamicin, Imipenem, Meropenem, Pip/Tazo.</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý & Kháng thuốc]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Đa kháng thuốc tự nhiên rất cao. KHÔNG dùng Ertapenem, Ampicillin, Cefotaxime, Tigecycline,.</span>
        </div>

        <div style="background: linear-gradient(90deg, #ede7f6 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #673ab7; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#512da8; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(103,58,183,0.5); text-transform:uppercase; margin-right:10px;">5.</span>
            <b style="font-size:1.15em; color:#311b92; font-family:'Montserrat', sans-serif;">Nhóm Acinetobacter (A. baumannii, A. lwoffii, A. calcoaceticus)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Cefotaxime, Ciprofloxacin, Imipenem, Meropenem, Pip/Tazo.</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý & Kháng thuốc]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Đa kháng thuốc (MDR) cực kỳ nghiêm trọng. Không có chỉ định thử nghiệm Ertapenem.</span>
        </div>

        <div style="background: linear-gradient(90deg, #fbe9e7 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #ff5722; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#e64a19; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(255,87,34,0.5); text-transform:uppercase; margin-right:10px;">6.</span>
            <b style="font-size:1.15em; color:#bf360c; font-family:'Montserrat', sans-serif;">Burkholderia & Stenotrophomonas</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Ceftazidime, TMP/SMX (Bactrim), Levofloxacin. (Thuốc thử nghiệm tuỳ loài).</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý & Kháng thuốc]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">S. maltophilia kháng Carbapenem. B. cepacia kháng Aminoglycoside.</span>
        </div>

        <div style="background: linear-gradient(90deg, #fffde7 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #fbc02d; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#f9a825; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(251,192,45,0.5); text-transform:uppercase; margin-right:10px;">7.</span>
            <b style="font-size:1.15em; color:#f57f17; font-family:'Montserrat', sans-serif;">Phẩy khuẩn & Ưa ẩm (Vibrio cholerae, Aeromonas, Campylobacter)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Ciprofloxacin, Meropenem, Tetracycline, Macrolide (tuỳ loài cụ thể).</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý & Kháng thuốc]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Campylobacter ưu tiên dùng Macrolide. Aeromonas thường kháng tự nhiên Ampicillin.</span>
        </div>

        <div style="background: linear-gradient(90deg, #e8f5e9 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #43a047; margin-bottom: 0px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#2e7d32; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(67,160,71,0.5); text-transform:uppercase; margin-right:10px;">8.</span>
            <b style="font-size:1.15em; color:#1b5e20; font-family:'Montserrat', sans-serif;">Neisseria & Moraxella (Cầu khuẩn Gram Âm)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">KHÔNG dùng AST-N428. KS ưu tiên: Ceftriaxone, Ciprofloxacin. Đánh giá bằng E-test.</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý & Kháng thuốc]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Lậu cầu đề kháng cao với Penicillin. Moraxella nhạy với Amoxicillin/Clavulanate.</span>
        </div>
    </div>
</details>

<details style="margin-top:12px; background:#fff1f0; padding:12px; border-radius:8px; border:1px solid #ffcdd2;">
    <summary style="font-weight:900; color:#c62828; cursor:pointer; font-size:1.3em; outline:none; font-family:'Inter', sans-serif; letter-spacing: -0.5px; display:flex; align-items:center;">🔴 VI KHUẨN GRAM DƯƠNG (Kháng sinh & Lưu ý)</summary>
    <div style="margin-top:10px; font-size:0.95em; line-height:1.6; color:#2c3e50;">
        <div style="background: linear-gradient(90deg, #ffebee 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #f44336; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#d32f2f; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(244,67,54,0.5); text-transform:uppercase; margin-right:10px;">1.</span>
            <b style="font-size:1.15em; color:#b71c1c; font-family:'Montserrat', sans-serif;">Tụ cầu vàng (Staphylococcus aureus)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Penicillin, Ciprofloxacin, Linezolid, Vancomycin, TMP/SMX.</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý lâm sàng]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Chủng MRSA rất nguy hiểm (tỷ lệ 78% tại VN), buộc dùng Vancomycin hoặc Linezolid.</span>
        </div>

        <div style="background: linear-gradient(90deg, #f3e5f5 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #9c27b0; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#7b1fa2; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(156,39,176,0.5); text-transform:uppercase; margin-right:10px;">2.</span>
            <b style="font-size:1.15em; color:#4a148c; font-family:'Montserrat', sans-serif;">Nhóm Tụ cầu Coagulase âm tính (CoNS)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Tương tự S. aureus: Ciprofloxacin, Clindamycin, Linezolid, Oxacillin, Vancomycin.</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý lâm sàng]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Lớp màng biofilm làm giảm nghiêm trọng khả năng xâm nhập của kháng sinh.</span>
        </div>

        <div style="background: linear-gradient(90deg, #e1f5fe 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #03a9f4; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#0288d1; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(3,169,244,0.5); text-transform:uppercase; margin-right:10px;">3.</span>
            <b style="font-size:1.15em; color:#01579b; font-family:'Montserrat', sans-serif;">Tràng cầu khuẩn (Enterococcus spp.)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Ampicillin, Linezolid, Nitrofurantoin, Vancomycin. Thử nghiệm High Level Gentamicin.</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý lâm sàng]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Chủng VRE kháng Vancomycin đang gia tăng (26.2% tại VN). Phải chuyển sang Linezolid.</span>
        </div>

        <div style="background: linear-gradient(90deg, #f1f8e9 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #8bc34a; margin-bottom: 8px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#689f38; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(139,195,74,0.5); text-transform:uppercase; margin-right:10px;">4.</span>
            <b style="font-size:1.15em; color:#33691e; font-family:'Montserrat', sans-serif;">Liên cầu khuẩn (Strep Nhóm A & B)</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Ampicillin, Penicillin, Vancomycin. Thường nhạy cảm tự nhiên với Penicillin G.</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý lâm sàng]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Penicillin G vẫn là ưu tiên hàng đầu. Chú ý hiện tượng kháng Macrolide.</span>
        </div>

        <div style="background: linear-gradient(90deg, #fffde7 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #fdd835; margin-bottom: 0px;">
            <span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#fbc02d; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(253,216,53,0.5); text-transform:uppercase; margin-right:10px;">5.</span>
            <b style="font-size:1.15em; color:#f57f17; font-family:'Montserrat', sans-serif;">Phế cầu & Liên cầu Viridans</b><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Ceftriaxone, Erythromycin, Levofloxacin, Vancomycin, Penicillin.</span><br>
            <span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý lâm sàng]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">Đang gia tăng đề kháng với Macrolide. Nên tiêm ngừa vắc-xin Phế cầu.</span>
        </div>
    </div>
</details>`,
                    decrease: "• KHÔNG ÁP DỤNG."
                }
            
    },
];

const testKnowledgeBase: Record<string, TestKnowledge> = {
  "NT-ProBNP": {
    "name": "NT-ProBNP",
    "purpose": "Kiểm tra xem tim có bị suy yếu hay phải làm việc quá sức không.",
    "when_to_do": "Khi bạn thấy khó thở, mệt mỏi nhiều, sưng phù chân hoặc nghi ngờ mắc bệnh tim.",
    "how_it_works": "Đo một loại chất đạm do tim tiết ra khi cơ tim bị căng giãn, máu bơm đi khó khăn.",
    "result_meaning": "Bình thường: Tim khỏe. Cao: Tim đang bị suy hoặc chịu áp lực rất lớn.",
    "real_life_example": "Một bác lớn tuổi hay bị hụt hơi khi leo cầu thang, đi khám thử máu thấy chỉ số này cao, bác sĩ kết luận bị suy tim.",
    "note": "Rất quan trọng trong cấp cứu để phân biệt người bệnh khó thở do tim hay do phổi."
  },
  "Troponin I": {
    "name": "Troponin I",
    "purpose": "Phát hiện nhanh tình trạng nhồi máu cơ tim.",
    "when_to_do": "Khi đột ngột đau thắt ngực dữ dội, cơn đau lan ra cánh tay trái hoặc sau lưng.",
    "how_it_works": "Tìm kiếm chất đạm đặc biệt chỉ tràn vào máu khi tế bào cơ tim đang bị chết đi hoặc tổn thương.",
    "result_meaning": "Bình thường: Không sao. Cao: Đang bị nhồi máu cơ tim, vô cùng nguy hiểm.",
    "real_life_example": "Một người đang ngồi bỗng ôm ngực ngã gục, vào viện thử Troponin I tăng vọt, bác sĩ lập tức đưa đi can thiệp mạch vành.",
    "note": "Là tiêu chuẩn vàng trong cấp cứu tim mạch, cho kết quả chỉ sau khoảng 10-15 phút."
  },
  "CK-MB": {
    "name": "CK-MB",
    "purpose": "Đánh giá mức độ tổn thương của cơ tim.",
    "when_to_do": "Khi có dấu hiệu đau ngực, nghi ngờ nhồi máu cơ tim hoặc viêm cơ tim.",
    "how_it_works": "Đo nồng độ một loại men nằm trong cơ tim, men này rò rỉ vào máu khi tim bị tổn thương.",
    "result_meaning": "Bình thường: Tim ổn định. Cao: Cơ tim đang bị viêm hoặc hoại tử.",
    "real_life_example": "Thanh niên trẻ bị tức ngực sau đợt cảm cúm, xét nghiệm CK-MB cao giúp phát hiện bệnh viêm cơ tim do virus.",
    "note": "Thường được bác sĩ chỉ định làm cùng với xét nghiệm Troponin để chẩn đoán chắc chắn hơn."
  },
  "AST": {
    "name": "AST",
    "purpose": "Đánh giá tình trạng tổn thương của tế bào gan.",
    "when_to_do": "Khi khám sức khỏe định kỳ, hoặc có biểu hiện vàng da, mệt mỏi, chán ăn.",
    "how_it_works": "Đo lượng men gan AST rò rỉ vào dòng máu khi tế bào gan bị phá hủy.",
    "result_meaning": "Bình thường: Gan khỏe. Cao: Gan đang bị tổn thương do viêm, xơ gan hoặc uống nhiều rượu bia.",
    "real_life_example": "Một chú hay nhậu nhẹt đi khám thấy men gan AST tăng gấp 3 lần bình thường, báo hiệu gan đang bị tàn phá do cồn.",
    "note": "Vì AST cũng có ở cơ bắp, nên bác sĩ thường cho làm thêm xét nghiệm ALT để biết chính xác là do gan."
  },
  "LDH": {
    "name": "LDH",
    "purpose": "Kiểm tra mức độ tổn thương chung của các mô và tế bào trong cơ thể.",
    "when_to_do": "Nghi ngờ mắc bệnh lý về máu, tổn thương cơ, gan hoặc bệnh ung thư.",
    "how_it_works": "Đo lượng men LDH sinh ra khi bất kỳ tế bào nào trong cơ thể bị vỡ hoặc hoại tử.",
    "result_meaning": "Bình thường: Không có tổn thương lớn. Cao: Các tế bào đang bị phá hủy nhiều (như do ung thư, tan máu).",
    "real_life_example": "Bệnh nhân mệt mỏi xanh xao, thử máu thấy LDH rất cao, bác sĩ phát hiện ra chứng bệnh hồng cầu bị vỡ nát liên tục.",
    "note": "Chỉ số này sẽ bị sai lệch nếu lúc y tá lấy máu làm vỡ hồng cầu trong ống nghiệm."
  },
  "CRP": {
    "name": "CRP",
    "purpose": "Phát hiện tình trạng viêm nhiễm trong cơ thể và đánh giá nguy cơ tim mạch.",
    "when_to_do": "Khi bị sốt, sưng đau không rõ nguyên nhân hoặc khám tầm soát đột quỵ.",
    "how_it_works": "Đo một loại protein do gan tạo ra và tống vào máu mỗi khi cơ thể có phản ứng viêm.",
    "result_meaning": "Bình thường: Không viêm. Cao: Đang bị nhiễm trùng hoặc có rủi ro tắc nghẽn mạch máu.",
    "real_life_example": "Bé bị sốt cao lừ đừ, xét nghiệm CRP tăng vọt giúp bác sĩ biết bé bị nhiễm vi khuẩn chứ không phải virus thông thường.",
    "note": "CRP tăng rất nhanh khi cơ thể có viêm và cũng giảm nhanh khi bệnh thuyên giảm."
  },
  "Khí máu": {
    "name": "Khí máu",
    "purpose": "Đánh giá tình trạng hô hấp và độ cân bằng axit-kiềm trong máu.",
    "when_to_do": "Khi bệnh nhân khó thở nặng, ngạt thở, suy hô hấp hoặc hôn mê.",
    "how_it_works": "Lấy mẫu máu ở động mạch để đo trực tiếp lượng Oxy và CO2.",
    "result_meaning": "Bình thường: Phổi trao đổi khí tốt. Bất thường: Máu bị thiếu oxy trầm trọng hoặc bị nhiễm axit.",
    "real_life_example": "Người bệnh hen suyễn lên cơn thở dốc tím tái, đo khí máu thấy CO2 ứ đọng nhiều, bác sĩ phải cho thở máy ngay.",
    "note": "Là xét nghiệm sinh tử tại phòng cấp cứu, lấy máu động mạch sẽ đau hơn lấy máu bình thường."
  },
  "Điện giải": {
    "name": "Điện giải",
    "purpose": "Kiểm tra lượng muối và các chất khoáng quan trọng trong máu.",
    "when_to_do": "Khi bị nôn mửa nhiều, tiêu chảy mất nước, tụt huyết áp hoặc yếu cơ.",
    "how_it_works": "Đo lường các ion khoáng chất có nhiệm vụ giữ nước và duy trì nhịp đập của tim.",
    "result_meaning": "Bình thường: Đủ nước và khoáng. Bất thường: Mất nước nặng hoặc thận đang bị suy yếu.",
    "real_life_example": "Người bị ngộ độc thực phẩm tiêu chảy 2 ngày liền tay chân run rẩy, xét nghiệm thấy thiếu Kali nặng phải truyền dịch bù.",
    "note": "Rối loạn Kali rất nguy hiểm vì có thể gây ngừng tim đột ngột."
  },
  "Bộ mỡ máu": {
    "name": "Bộ mỡ máu",
    "purpose": "Kiểm tra lượng mỡ trong máu để phòng ngừa đột quỵ và nhồi máu cơ tim.",
    "when_to_do": "Khám sức khỏe tổng quát hoặc ở người béo phì, cao huyết áp, hay nhậu nhẹt.",
    "how_it_works": "Đo 4 chỉ số chính: mỡ toàn phần, mỡ xấu LDL, mỡ tốt HDL và chất béo trung tính Triglyceride.",
    "result_meaning": "Bình thường: Mạch máu thông thoáng. Cao: Mỡ đóng cặn gây xơ vữa, hẹp mạch máu.",
    "real_life_example": "Người đàn ông 45 tuổi đi khám thấy mỡ xấu LDL rất cao, được cảnh báo nếu không ăn kiêng sẽ dễ bị tai biến.",
    "note": "Phải nhịn ăn hoàn toàn từ 8 đến 12 tiếng trước khi lấy máu để kết quả chính xác."
  },
  "PT": {
    "name": "PT",
    "purpose": "Kiểm tra máu đông có nhanh không và theo dõi thuốc chống đông.",
    "when_to_do": "Trước khi lên bàn mổ, nhổ răng, hoặc bị chảy máu cam/chảy máu chân răng liên tục.",
    "how_it_works": "Bác sĩ thêm hóa chất vào máu trong ống nghiệm và bấm giờ xem mất bao lâu để máu đông lại.",
    "result_meaning": "Bình thường: Khả năng cầm máu tốt. Kéo dài: Máu bị loãng, rủi ro chảy máu không cầm được rất cao.",
    "real_life_example": "Bệnh nhân chuẩn bị mổ ruột thừa phải làm xét nghiệm này để bác sĩ chắc chắn lúc mổ máu sẽ tự cầm.",
    "note": "Đặc biệt quan trọng với người già đang uống thuốc làm loãng máu ngừa đột quỵ."
  },
  "APTT": {
    "name": "APTT",
    "purpose": "Đánh giá toàn diện hệ thống đông máu bên trong cơ thể.",
    "when_to_do": "Khám tiền phẫu thuật, hay bị bầm tím trên da mà không rõ lý do đụng dập.",
    "how_it_works": "Đo thời gian đông máu theo một con đường khác để tìm xem cơ thể có bị thiếu chất đông máu nào không.",
    "result_meaning": "Bình thường: Hệ thống đông máu ổn. Kéo dài: Có bệnh ưa chảy máu hoặc bệnh gan.",
    "real_life_example": "Một cậu bé chỉ sờ nhẹ vào tay cũng bị bầm tím mảng lớn, đi xét nghiệm APTT dài bất thường phát hiện bệnh máu khó đông di truyền.",
    "note": "Luôn được bác sĩ chỉ định đi kèm một cặp với xét nghiệm PT để có bức tranh toàn cảnh."
  },
  "D-Dimer": {
    "name": "D-Dimer",
    "purpose": "Phát hiện xem có cục máu đông nào đang đi lạc trong lòng mạch máu không.",
    "when_to_do": "Khi tự nhiên sưng to một bên chân, hoặc đau ngực khó thở nghi tắc mạch phổi.",
    "how_it_works": "Tìm kiếm các mảnh vỡ sinh ra khi một cục máu đông trong cơ thể đang bị tan rã.",
    "result_meaning": "Bình thường: Ít có khả năng bị huyết khối. Cao: Đang có cục máu đông gây tắc nghẽn mạch máu.",
    "real_life_example": "Người phụ nữ ngồi máy bay 10 tiếng thấy bắp chân sưng đỏ đau nhức, thử D-Dimer cao giúp bác sĩ chẩn đoán tắc tĩnh mạch chân.",
    "note": "Là xét nghiệm cực nhạy giúp bác sĩ loại trừ nhanh tình trạng huyết khối nguy hiểm tính mạng."
  },
  "AFP": {
    "name": "AFP",
    "purpose": "Tầm soát ung thư gan ở người có rủi ro cao.",
    "when_to_do": "Người bị viêm gan B, viêm gan C, xơ gan đi khám định kỳ mỗi 6 tháng.",
    "how_it_works": "Đo chất protein AFP, chất này thường được tiết ra rất nhiều khi các tế bào gan bị ung thư.",
    "result_meaning": "Bình thường: Gan chưa có u ác tính. Tăng cao: Báo động có thể đang có khối u ung thư ở gan.",
    "real_life_example": "Nam giới 50 tuổi bị viêm gan B mạn tính, đi xét nghiệm thấy AFP tăng vọt, siêu âm phát hiện ngay một khối u nhỏ ở gan.",
    "note": "Phụ nữ mang thai bình thường chất này cũng tăng, nên không dùng để chẩn đoán u gan cho bà bầu."
  },
  "CEA": {
    "name": "CEA",
    "purpose": "Tầm soát và theo dõi ung thư đường ruột, dạ dày.",
    "when_to_do": "Khi đi ngoài ra máu, sụt cân nhanh, hoặc theo dõi sau khi đã mổ cắt khối u ruột.",
    "how_it_works": "Đo lượng chất CEA trong máu, chất này sinh ra nhiều khi có tế bào ung thư ở đại trực tràng.",
    "result_meaning": "Bình thường: Nguy cơ ung thư ruột thấp. Tăng: Có thể có ung thư dạ dày, ruột già hoặc tuyến tụy.",
    "real_life_example": "Bác trai đã mổ ung thư đại tràng 1 năm trước, nay đi xét nghiệm lại thấy CEA thấp nghĩa là bệnh chưa tái phát.",
    "note": "Người hút thuốc lá lâu năm xét nghiệm này cũng có thể tăng nhẹ dù không bị ung thư."
  },
  "PSA": {
    "name": "PSA",
    "purpose": "Tầm soát sớm bệnh ung thư tuyến tiền liệt ở nam giới.",
    "when_to_do": "Nam giới trên 50 tuổi khám định kỳ hoặc có dấu hiệu tiểu buốt, tiểu đêm nhiều lần.",
    "how_it_works": "Đo nồng độ chất PSA do tuyến tiền liệt tiết ra vào dòng máu.",
    "result_meaning": "Bình thường: Tuyến tiền liệt ổn định. Cao: Có thể bị viêm, phì đại lành tính hoặc ung thư tuyến tiền liệt.",
    "real_life_example": "Ông cụ 65 tuổi dạo này tiểu khó phải rặn, thử PSA tăng cao giúp bác sĩ có cơ sở cho đi sinh thiết tìm ung thư.",
    "note": "Không nên quan hệ tình dục hoặc đạp xe đạp đường dài trước ngày lấy máu vì có thể làm tăng PSA giả mạo."
  },
  "CA 15-3": {
    "name": "CA 15-3",
    "purpose": "Theo dõi tiến triển và điều trị bệnh ung thư vú.",
    "when_to_do": "Người đã hoặc đang điều trị ung thư vú cần kiểm tra xem khối u có di căn không.",
    "how_it_works": "Đo nồng độ kháng nguyên CA 15-3 do các tế bào u vú tiết ra.",
    "result_meaning": "Bình thường: Bệnh đang được kiểm soát tốt. Tăng dần: Khối u đang phát triển hoặc đã lan sang cơ quan khác.",
    "real_life_example": "Một cô đang hóa trị ung thư vú, hàng tháng đo CA 15-3 thấy chỉ số giảm dần chứng tỏ thuốc có tác dụng tiêu diệt u tốt.",
    "note": "Không dùng để khám tầm soát ban đầu cho người khỏe mạnh vì độ nhạy chưa cao, thường chỉ dùng để theo dõi bệnh."
  },
  "Tg": {
    "name": "Tg",
    "purpose": "Theo dõi bệnh ung thư tuyến giáp sau phẫu thuật.",
    "when_to_do": "Kiểm tra định kỳ ở người đã bị cắt bỏ tuyến giáp do ung thư.",
    "how_it_works": "Đo chất Thyroglobulin do tế bào tuyến giáp tiết ra.",
    "result_meaning": "Bình thường: Đã sạch tế bào ung thư. Tăng cao: Bệnh ung thư tuyến giáp tái phát.",
    "real_life_example": "Chị gái mổ cắt toàn bộ tuyến giáp 2 năm trước, nay đi thử Tg thấy tăng lại báo hiệu tế bào ung thư mọc lại ở cổ.",
    "note": "Kết quả chính xác nhất khi được làm cùng với xét nghiệm kháng thể Anti-Tg."
  },
  "Tế bào học dịch": {
    "name": "Tế bào học dịch",
    "purpose": "Tìm tế bào viêm hoặc tế bào ung thư trong các chất dịch bị ứ đọng của cơ thể.",
    "when_to_do": "Khi bị trướng bụng trễ nước, tràn dịch màng phổi gây khó thở, hoặc sưng to khớp gối.",
    "how_it_works": "Bác sĩ dùng kim chọc hút nước dịch ra, đem quay ly tâm và soi dưới kính hiển vi tìm tế bào lạ.",
    "result_meaning": "Bình thường: Dịch sạch. Bất thường: Có tế bào mủ (nhiễm trùng) hoặc tế bào dị dạng ác tính (ung thư).",
    "real_life_example": "Người bệnh ho hoài nhức ngực chụp phim thấy phổi có nước, bác sĩ hút nước đó đi soi phát hiện ra vi khuẩn lao.",
    "note": "Cần bác sĩ có tay nghề chọc hút dịch an toàn trực tiếp trên người bệnh trước khi đem xuống phòng lab."
  },
  "Pro-calcitonin": {
    "name": "Pro-calcitonin",
    "purpose": "Nhận biết cực nhanh tình trạng nhiễm trùng máu nguy hiểm do vi khuẩn.",
    "when_to_do": "Khi bệnh nhân sốt rét run lẩy bẩy, tụt huyết áp, nghi ngờ bị sốc nhiễm trùng.",
    "how_it_works": "Đo nồng độ chất Pro-calcitonin, chất này sẽ tăng dựng đứng khi vi khuẩn xâm nhập sâu vào máu.",
    "result_meaning": "Bình thường: Không có vi khuẩn. Tăng cao: Nhiễm khuẩn máu nặng, phải dùng kháng sinh liều cao tức khắc.",
    "real_life_example": "Bé bị sốt li bì, test CRP chỉ tăng nhẹ nhưng Pro-calcitonin cao chót vót, bác sĩ nhận định ngay bé bị nhiễm trùng máu rất nặng.",
    "note": "Rất có giá trị để phân biệt người bệnh sốt do vi khuẩn (cần kháng sinh) hay do virus (không cần kháng sinh)."
  },
  "Interleukin 6": {
    "name": "Interleukin 6",
    "purpose": "Đo lường mức độ bùng phát của phản ứng viêm toàn thân.",
    "when_to_do": "Khi bị viêm phổi nặng, bệnh tự miễn, hoặc cơ thể bị virus tấn công gây suy hô hấp cấp.",
    "how_it_works": "Đo nồng độ chất trung gian IL-6 do bạch cầu phát ra để gọi hội đến tiêu diệt mầm bệnh.",
    "result_meaning": "Bình thường: Khỏe mạnh. Tăng rất cao: Hệ miễn dịch đang phản ứng quá mức tự phá hủy cơ thể.",
    "real_life_example": "Bệnh nhân nhiễm cúm viêm phổi nặng khó thở, đo IL-6 cao vọt cảnh báo phổi đang bị chính hệ miễn dịch phá hủy.",
    "note": "Được dùng nhiều trong hồi sức cấp cứu để quyết định dùng thuốc ức chế miễn dịch cứu mạng người bệnh."
  },
  "WBC": {
    "name": "WBC (Bạch cầu)",
    "purpose": "Đánh giá khả năng bảo vệ của cơ thể trước các mầm bệnh.",
    "when_to_do": "Trong các lần khám sức khỏe thông thường, hoặc khi có sốt, sưng đau tấy đỏ ở bất kỳ đâu.",
    "how_it_works": "Máy đếm tự động số lượng các chiến binh bạch cầu trong 1 lít máu.",
    "result_meaning": "Bình thường: Đề kháng tốt. Tăng: Đang có nhiễm trùng vi khuẩn. Giảm: Suy giảm miễn dịch hoặc nhiễm virus.",
    "real_life_example": "Anh thanh niên đau quặn bụng phải vào viện, thử máu thấy bạch cầu vọt lên 18.000, bác sĩ cho đi mổ ruột thừa ngay lập tức.",
    "note": "Là một phần trong xét nghiệm công thức máu cơ bản, rẻ tiền nhưng vô cùng quan trọng."
  },
  "Máu lắng": {
    "name": "Máu lắng",
    "purpose": "Báo động tình trạng viêm mạn tính đang âm ỉ trong cơ thể.",
    "when_to_do": "Khi hay bị đau nhức xương khớp kéo dài, hoặc sốt nhẹ kéo dài không rõ lý do.",
    "how_it_works": "Cho máu vào ống nghiệm dọc và đo xem các tế bào hồng cầu rơi xuống đáy ống nhanh hay chậm trong 1 giờ.",
    "result_meaning": "Bình thường: Hồng cầu lắng chậm. Lắng nhanh: Trong máu có nhiều protein viêm, gợi ý bệnh khớp hoặc lao.",
    "real_life_example": "Bà cụ đau cứng các khớp ngón tay mỗi sáng, đi đo máu lắng cao giúp bác sĩ chẩn đoán bệnh viêm khớp dạng thấp.",
    "note": "Không cho biết chính xác viêm ở đâu, chỉ đưa ra tín hiệu báo động đỏ để bác sĩ tìm nguyên nhân."
  },
  "Nhuộm AFB tìm Lao": {
    "name": "Nhuộm AFB tìm Lao",
    "purpose": "Xác định người bệnh có đang mắc và lây truyền vi khuẩn lao không.",
    "when_to_do": "Khi ho khạc đờm kéo dài trên 2 tuần, ho ra máu, sốt nhẹ về chiều, sụt cân.",
    "how_it_works": "Lấy đờm khạc ra bôi lên kính, nhuộm hóa chất đặc biệt và soi tìm hình dáng con vi khuẩn lao.",
    "result_meaning": "Âm tính: Không thấy vi khuẩn. Dương tính: Chắc chắn mắc bệnh lao phổi và có nguy cơ lây cho người khác.",
    "real_life_example": "Bác xe ôm ho sụ sụ cả tháng, sụt 5kg, đi khạc đờm xét nghiệm AFB dương tính nên được đưa vào chương trình uống thuốc lao miễn phí.",
    "note": "Bắt buộc phải khạc đờm sâu từ phổi vào buổi sáng sớm khi mới ngủ dậy mới dễ bắt được vi khuẩn."
  },
  "Cấy vi khuẩn": {
    "name": "Cấy vi khuẩn",
    "purpose": "Tìm tận gốc mặt mũi con vi khuẩn gây bệnh và thử xem nó sợ loại kháng sinh nào.",
    "when_to_do": "Khi bị nhiễm trùng nặng, vết thương mưng mủ mãi không lành dù đã uống thuốc.",
    "how_it_works": "Lấy máu, mủ hoặc dịch bôi lên đĩa thạch dinh dưỡng, ủ ấm vài ngày để vi khuẩn mọc thành cụm.",
    "result_meaning": "Âm tính: Không có vi khuẩn. Dương tính: Định danh được vi khuẩn và đưa ra bản danh sách kháng sinh tiêu diệt được nó.",
    "real_life_example": "Một người bị loét bàn chân tiểu đường nhiễm trùng nặng, bác sĩ quệt mủ đi cấy tìm ra vi khuẩn kháng thuốc để đổi thuốc mạnh hơn.",
    "note": "Phải lấy mẫu đem đi cấy ngay trước khi bệnh nhân bắt đầu uống hoặc tiêm kháng sinh thì vi khuẩn mới mọc được."
  },
  "Glucose": {
    "name": "Glucose",
    "purpose": "Kiểm tra lượng đường đang lưu thông trong máu tại thời điểm hiện tại.",
    "when_to_do": "Khám định kỳ, hoặc khi có biểu hiện tiểu nhiều, uống nhiều nước, sụt cân.",
    "how_it_works": "Đo nồng độ đường trong máu, thường lấy vào buổi sáng khi chưa ăn gì.",
    "result_meaning": "Bình thường: Đường huyết ổn định. Cao: Dấu hiệu mắc bệnh đái tháo đường.",
    "real_life_example": "Chú hàng xóm dạo này hay khát nước đi tiểu đêm, sáng ra trạm y tế chích máu ngón tay đo Glucose lên tới 12, bị chẩn đoán tiểu đường.",
    "note": "Bạn bắt buộc phải nhịn ăn từ 8 đến 10 tiếng đồng hồ thì chỉ số đường huyết lúc đói mới phản ánh đúng."
  },
  "HbA1C": {
    "name": "HbA1C",
    "purpose": "Đánh giá mức độ kiểm soát đường huyết trung bình trong suốt 3 tháng qua.",
    "when_to_do": "Dùng để chẩn đoán chính xác tiểu đường hoặc kiểm tra xem người bệnh có ăn kiêng tốt không.",
    "how_it_works": "Đo tỷ lệ phần trăm lượng đường bám dính chặt vào các tế bào hồng cầu trong máu.",
    "result_meaning": "Bình thường: Dưới 5.7%. Cao: Mắc bệnh tiểu đường và rủi ro biến chứng cao.",
    "real_life_example": "Một người bệnh tiểu đường tự tin nói dạo này ăn kiêng tốt, nhưng xét nghiệm HbA1C tới 9% vạch trần việc 3 tháng qua đường vẫn rất cao.",
    "note": "Xét nghiệm này không cần nhịn ăn, có thể lấy máu vào bất kỳ lúc nào trong ngày."
  },
  "Insulin": {
    "name": "Insulin",
    "purpose": "Kiểm tra xem tuyến tụy tiết ra được bao nhiêu hormone giúp hạ đường huyết.",
    "when_to_do": "Khi hay bị bủn rủn tay chân do hạ đường huyết, hoặc để xem tiểu đường thuộc tuýp 1 hay tuýp 2.",
    "how_it_works": "Đo nồng độ insulin trực tiếp lưu thông trong dòng máu.",
    "result_meaning": "Thấp: Tuyến tụy bị hỏng (Tiểu đường tuýp 1). Cao: Cơ thể kháng insulin, tụy đang ráng sức làm việc (Tiểu đường tuýp 2).",
    "real_life_example": "Một thanh niên trẻ gầy ốm bị tiểu đường, xét nghiệm Insulin rất thấp, bác sĩ kết luận tụy đã ngưng làm việc và bắt buộc phải tiêm insulin suốt đời.",
    "note": "Cần làm chung với xét nghiệm Glucose lúc đói để bác sĩ đối chiếu chéo."
  },
  "C-peptid": {
    "name": "C-peptid",
    "purpose": "Đo chính xác khả năng tự sản xuất insulin thực tại của tuyến tụy.",
    "when_to_do": "Rất quan trọng với người đang tiêm insulin ngoài vào, muốn biết tuyến tụy của mình còn sống không.",
    "how_it_works": "Tụy sinh ra 1 insulin thì sẽ sinh ra 1 C-peptid. Đo chất này sẽ không bị nhầm với insulin tiêm từ ngoài vào.",
    "result_meaning": "Bình thường: Tuyến tụy khỏe. Rất thấp: Tụy suy kiệt hoàn toàn, không thể tự sinh insulin nữa.",
    "real_life_example": "Bác sĩ đo C-peptid cho một người bệnh đái tháo đường lâu năm để quyết định xem có thể đổi từ thuốc tiêm sang thuốc uống được không.",
    "note": "C-peptid là thước đo trung thực nhất phản ánh sức lực của lá lách (tuyến tụy)."
  },
  "Acid Uric": {
    "name": "Acid Uric",
    "purpose": "Chẩn đoán bệnh Gout và đánh giá nguy cơ sỏi thận.",
    "when_to_do": "Khi tự nhiên sưng tấy, đỏ ửng và đau nhức dữ dội ở khớp ngón chân cái.",
    "how_it_works": "Đo lượng chất thải sinh ra sau khi cơ thể tiêu hóa thịt đỏ, hải sản và bia rượu.",
    "result_meaning": "Bình thường: Thận thải độc tốt. Cao: Acid Uric đọng lại thành tinh thể sắc nhọn đâm vào khớp gây bệnh Gout.",
    "real_life_example": "Một anh hay đi nhậu hải sản sáng ngủ dậy ngón chân đau điếng không bước nổi, xét nghiệm Acid Uric cao vọt kết luận bị Gout cấp.",
    "note": "Cần nhịn ăn và tuyệt đối không uống rượu bia trong 24 giờ trước khi đi lấy máu."
  },
  "Ceton": {
    "name": "Ceton",
    "purpose": "Phát hiện biến chứng cực kỳ nguy hiểm có thể gây hôn mê ở người bệnh tiểu đường.",
    "when_to_do": "Khi người bệnh tiểu đường bị nôn ói, mệt mỏi lả người, hơi thở có mùi như trái cây lên men.",
    "how_it_works": "Tìm chất Ceton trong máu hoặc nước tiểu, chất này sinh ra khi cơ thể thiếu đường phải tự đốt mỡ để sống.",
    "result_meaning": "Âm tính: An toàn. Dương tính: Máu đang bị axit hóa nặng, báo động đỏ cần cấp cứu y tế ngay.",
    "real_life_example": "Bạn trẻ tiểu đường tuýp 1 bỏ tiêm thuốc vài ngày ngất xỉu, thử nước tiểu có Ceton cấp cứu lập tức để giữ mạng sống.",
    "note": "Que thử Ceton nước tiểu có thể tự mua ở nhà thuốc để người bệnh tiểu đường tự kiểm tra tại nhà."
  },
  "Ure": {
    "name": "Ure",
    "purpose": "Đánh giá bước đầu xem thận có đang làm tốt công việc lọc chất thải không.",
    "when_to_do": "Khám sức khỏe tổng quát, sưng phù mí mắt chân tay, hoặc đi tiểu rắt tiểu ít.",
    "how_it_works": "Đo nồng độ Ure, một loại rác thải sinh ra sau khi cơ thể tiêu hóa chất đạm.",
    "result_meaning": "Bình thường: Thận lọc tốt. Cao: Thận yếu, không đẩy được rác ra ngoài, hoặc do ăn quá nhiều thịt.",
    "real_life_example": "Một người ăn chế độ giàu đạm tập gym đi khám thấy Ure tăng nhẹ, bác sĩ khuyên uống nhiều nước và đối chiếu thêm Creatinin.",
    "note": "Vì Ure dễ bị ảnh hưởng bởi thức ăn nên bác sĩ không bao giờ chỉ dùng Ure để kết luận suy thận."
  },
  "Creatinin": {
    "name": "Creatinin",
    "purpose": "Chỉ số vàng, quan trọng nhất để chẩn đoán chính xác bệnh suy thận.",
    "when_to_do": "Khám định kỳ, hoặc khi uống các loại thuốc tây có hại cho thận, người bị cao huyết áp tiểu đường lâu năm.",
    "how_it_works": "Đo lượng chất thải sinh ra từ cơ bắp, chất này chỉ được lọc ra ngoài qua một con đường duy nhất là màng lọc thận.",
    "result_meaning": "Bình thường: Quả thận hoàn toàn khỏe mạnh. Cao: Chắc chắn thận đang bị suy yếu.",
    "real_life_example": "Cụ ông bị cao huyết áp 10 năm đi xét nghiệm Creatinin tăng gấp đôi, bác sĩ chẩn đoán cụ đã bước sang suy thận giai đoạn 3.",
    "note": "Chỉ số này được bác sĩ dùng để lắp vào công thức tính ra thận của bạn còn sống được bao nhiêu phần trăm."
  },
  "MAU niệu": {
    "name": "MAU niệu",
    "purpose": "Bắt mạch tổn thương vi mạch máu ở thận từ giai đoạn cực kỳ sớm.",
    "when_to_do": "Khám sức khỏe cho người đái tháo đường, cao huyết áp mỗi 6 tháng một lần.",
    "how_it_works": "Tìm một lượng đạm (Albumin) vô cùng nhỏ rò rỉ qua màng lọc thận rơi vào trong nước tiểu.",
    "result_meaning": "Bình thường: Màng lọc thận kín. Dương tính: Thận chớm bị tổn thương, cần can thiệp bảo vệ thận ngay.",
    "real_life_example": "Cô bệnh nhân tiểu đường thử máu Ure Creatinin vẫn tốt, nhưng thử MAU niệu ra dương tính, nhờ vậy bác sĩ cho thuốc cứu thận kịp thời.",
    "note": "Đây là xét nghiệm tốt nhất để ngăn chặn bệnh nhân tiểu đường tiến triển thành suy thận chạy thận."
  },
  "Protein niệu 24h": {
    "name": "Protein niệu 24h",
    "purpose": "Đo đếm chính xác xem thận bị lủng màng lọc làm thất thoát bao nhiêu đạm một ngày.",
    "when_to_do": "Khi bệnh nhân phù toàn thân, tiểu ra bọt trắng xóa lâu tan, hoặc thai phụ bị cao huyết áp.",
    "how_it_works": "Bệnh nhân phải tiểu và gom toàn bộ nước tiểu trong vòng đúng 24 tiếng đồng hồ vào 1 bình to đem đi đo.",
    "result_meaning": "Bình thường: Gần như không có đạm. Cao: Hội chứng thận hư hoặc viêm cầu thận, đạm bị vứt ra ngoài quá nhiều.",
    "real_life_example": "Mẹ bầu tháng thứ 8 bị sưng phù chân ấn lõm, gom nước tiểu 24h đo đạm rất cao, bác sĩ chẩn đoán tiền sản giật phải mổ lấy thai gấp.",
    "note": "Cần hướng dẫn kỹ cách gom nước tiểu và bảo quản bình nước tiểu ở chỗ mát để không bị hỏng mẫu."
  },
  "ALT": {
    "name": "ALT",
    "purpose": "Chỉ số nhạy nhất và đặc hiệu nhất để phát hiện gan đang bị viêm.",
    "when_to_do": "Khi có dấu hiệu mệt mỏi, chán ăn sợ mỡ, da dẻ vàng vọt, mắt vàng.",
    "how_it_works": "Đo nồng độ enzyme ALT chỉ nằm độc quyền bên trong tế bào gan, khi tế bào gan vỡ nó sẽ tràn ra máu.",
    "result_meaning": "Bình thường: Lá gan khỏe. Tăng cao: Viêm gan cấp do virus, do ngộ độc thuốc tây hoặc gan nhiễm mỡ.",
    "real_life_example": "Thanh niên uống liền 10 viên Paracetamol trị sốt, hôm sau thử máu ALT tăng vọt nghìn lần do gan bị ngộ độc phá hủy cấp tính.",
    "note": "Chỉ số ALT càng cao, tế bào gan đang bị chết đi càng nhiều."
  },
  "GGT": {
    "name": "GGT",
    "purpose": "Đánh giá tình trạng tổn thương gan do lạm dụng bia rượu hoặc tắc đường mật.",
    "when_to_do": "Khi cần kiểm tra gan của người nghiện nhậu, hoặc người đau mạn sườn phải nghi sỏi túi mật.",
    "how_it_works": "Đo men GGT, loại men nhạy cảm cực kỳ với cồn và thường nằm ở ống dẫn mật trong gan.",
    "result_meaning": "Bình thường: Đường mật thông thoáng. Cao: Gan đang kiệt quệ vì rượu, hoặc có sỏi làm kẹt đường mật.",
    "real_life_example": "Một bác tài xế nhậu nhẹt liên miên đi khám, các men gan khác bình thường nhưng GGT tăng vọt, bác sĩ khuyên phải cai rượu ngay.",
    "note": "GGT tăng rất sớm trước cả khi bệnh nhân cảm thấy có triệu chứng đau ốm do rượu."
  },
  "Bilirubin": {
    "name": "Bilirubin",
    "purpose": "Tìm nguyên nhân gây ra chứng vàng da, vàng mắt ở bệnh nhân.",
    "when_to_do": "Khi người lớn tự nhiên vàng da tiểu sậm màu, hoặc trẻ sơ sinh bị vàng da nhiều ngày không bớt.",
    "how_it_works": "Đo lượng sắc tố mật màu vàng sinh ra từ xác của hồng cầu chết, gan có nhiệm vụ dọn dẹp chất này.",
    "result_meaning": "Bình thường: Gan dọn dẹp rác tốt. Cao: Viêm gan nặng, tắc ống mật hoặc bệnh vỡ hồng cầu hàng loạt.",
    "real_life_example": "Em bé mới sinh 3 ngày người vàng ươm, thử máu Bilirubin quá cao có nguy cơ thấm vào não nên phải đưa đi chiếu đèn ngay.",
    "note": "Bác sĩ sẽ chia Bilirubin ra làm 2 loại (trực tiếp và gián tiếp) để biết chính xác bệnh nằm tại gan hay ngoài gan."
  },
  "Albumin": {
    "name": "Albumin",
    "purpose": "Kiểm tra tình trạng suy dinh dưỡng và khả năng nhà máy gan sản xuất protein.",
    "when_to_do": "Khi người bệnh bị phù nề tay chân, trướng bụng nước, hay người xơ gan giai đoạn cuối.",
    "how_it_works": "Đo lượng protein Albumin trong máu, chất này giúp giữ nước lại trong mạch máu không cho tràn ra ngoài.",
    "result_meaning": "Bình thường: Đủ chất đạm. Thấp: Gan hỏng không làm ra đạm được, hoặc suy thận làm đạm lọt ra nước tiểu.",
    "real_life_example": "Bệnh nhân xơ gan bụng to như cái trống, thử máu thấy Albumin tụt thê thảm làm nước tràn ra ổ bụng, phải truyền chai Albumin đắt tiền.",
    "note": "Albumin thấp làm nước thoát khỏi mạch máu gây phù, chứng tỏ gan đã suy kiệt nặng."
  },
  "Amylase": {
    "name": "Amylase",
    "purpose": "Chẩn đoán nhanh căn bệnh viêm tụy cấp nguy hiểm.",
    "when_to_do": "Khi tự nhiên đau quặn bụng trên rốn, đau gập người lăn lộn sau một bữa nhậu no say hoặc ăn nhiều dầu mỡ.",
    "how_it_works": "Đo men tiêu hóa tinh bột do tuyến tụy tiết ra, khi tụy bị viêm, men này ộc vào máu rất nhiều.",
    "result_meaning": "Bình thường: Tuyến tụy an toàn. Tăng rất cao: Viêm tụy cấp, cần nhập viện điều trị nhịn ăn ngay.",
    "real_life_example": "Buổi tối đi ăn đồ nướng uống bia, đêm về anh thanh niên ôm bụng rên la, thử máu Amylase tăng gấp 5 lần xác định ngay viêm tụy cấp.",
    "note": "Amylase cũng tăng khi bị bệnh quai bị (sưng mang tai) nên cần bác sĩ phân biệt rõ."
  },
  "Lipase": {
    "name": "Lipase",
    "purpose": "Chẩn đoán bệnh viêm tụy cấp một cách chính xác và đặc hiệu hơn Amylase.",
    "when_to_do": "Làm song song với Amylase khi bệnh nhân có cơn đau bụng cấp cứu.",
    "how_it_works": "Đo men tiêu hóa chất béo của tuyến tụy. Nó chỉ nằm ở tụy nên độ chính xác cao hơn.",
    "result_meaning": "Bình thường: Tuyến tụy không viêm. Tăng cao: Khẳng định chắc chắn bệnh nhân bị viêm tụy cấp.",
    "real_life_example": "Người bệnh đau bụng, Amylase hơi tăng nhẹ khó kết luận, bác sĩ cho làm thêm Lipase thấy tăng cao chót vót, khóa sổ chẩn đoán viêm tụy.",
    "note": "Lipase ở lại trong máu lâu hơn Amylase nên rất hữu ích nếu bệnh nhân đến viện muộn sau vài ngày đau bụng."
  },
  "HBsAg": {
    "name": "HBsAg",
    "purpose": "Khẳng định xem bạn có đang mang trong người virus Viêm gan B không.",
    "when_to_do": "Khám sức khỏe đi làm, phụ nữ trước khi bầu, hoặc chuẩn bị kết hôn.",
    "how_it_works": "Tìm kiếm lớp vỏ bên ngoài của con virus viêm gan B trôi nổi trong máu.",
    "result_meaning": "Âm tính: Không mắc bệnh. Dương tính: Đang bị nhiễm Viêm gan B.",
    "real_life_example": "Một bạn trẻ đi hiến máu nhân đạo bị từ chối và nhận được thư báo kết quả HBsAg dương tính, lúc này mới biết mình mắc bệnh.",
    "note": "Nếu âm tính, bạn nên đi tiêm ngừa vắc xin viêm gan B ngay để bảo vệ bản thân."
  },
  "HCV Ab": {
    "name": "HCV Ab",
    "purpose": "Tầm soát xem bạn có từng hoặc đang mắc bệnh Viêm gan C không.",
    "when_to_do": "Khám sức khỏe tổng quát, người hay xăm hình, dùng chung bơm kim tiêm.",
    "how_it_works": "Tìm dấu vết kháng thể mà cơ thể tạo ra để đánh lại virus Viêm gan C.",
    "result_meaning": "Âm tính: Chưa từng nhiễm bệnh. Dương tính: Đang bị viêm gan C hoặc đã từng tự khỏi bệnh trong quá khứ.",
    "real_life_example": "Đi xăm chân mày mười năm trước, nay đi khám sức khỏe cô gái bàng hoàng khi biết mình bị viêm gan C qua kết quả HCV Ab.",
    "note": "Nếu dương tính, bắt buộc phải làm thêm xét nghiệm tải lượng virus (HCV-RNA) để xem virus còn sống không."
  },
  "Tải lượng HBV": {
    "name": "Tải lượng HBV",
    "purpose": "Đếm xem có bao nhiêu virus Viêm gan B đang sống trong máu.",
    "when_to_do": "Sau khi đã biết mình bị viêm gan B, cần quyết định xem có phải uống thuốc diệt virus không.",
    "how_it_works": "Dùng máy PCR khuế n đại gen để đếm chính xác số lượng virus trên 1ml máu.",
    "result_meaning": "Số lượng thấp: Virus đang ngủ, chỉ cần theo dõi. Số lượng cao: Virus đang sinh sôi phá gan, phải uống thuốc ngay.",
    "real_life_example": "Bệnh nhân viêm gan B đi tái khám đo HBV-DNA lên đến hàng tỷ con, bác sĩ lập tức kê toa thuốc kháng virus để ngừa xơ gan.",
    "note": "Được dùng để theo dõi xem thuốc trị viêm gan B có đang phát huy tác dụng hay bị lờn thuốc."
  },
  "Tải lượng HCV": {
    "name": "Tải lượng HCV",
    "purpose": "Đếm chính xác số lượng virus Viêm gan C để điều trị dứt điểm bệnh.",
    "when_to_do": "Khi test HCV Ab dương tính, cần đếm virus để bắt đầu liệu trình chữa bệnh.",
    "how_it_works": "Sử dụng công nghệ PCR tìm và đếm lõi gen của virus Viêm gan C.",
    "result_meaning": "Âm tính: Cơ thể không còn con virus nào. Dương tính: Virus đang phá gan, cần uống thuốc đặc trị.",
    "real_life_example": "Sau 3 tháng uống thuốc chữa viêm gan C, bệnh nhân làm lại xét nghiệm HCV-RNA thấy âm tính, bác sĩ tuyên bố đã khỏi bệnh hoàn toàn.",
    "note": "Bệnh viêm gan C hiện nay đã có thuốc chữa khỏi dứt điểm 100% nhờ việc theo dõi chỉ số này."
  },
  "Soi phân": {
    "name": "Soi phân",
    "purpose": "Tìm kiếm trứng giun sán, vi khuẩn tiêu chảy hoặc dấu vết máu nấp trong phân.",
    "when_to_do": "Khi hay bị đau quặn bụng, tiêu chảy lâu ngày, đi tiêu ra nhầy máu hoặc nghi ngờ ung thư ruột.",
    "how_it_works": "Lấy mẫu phân đưa lên kính hiển vi phóng to hoặc dùng hóa chất thử tìm hồng cầu tàng hình.",
    "result_meaning": "Bình thường: Phân sạch sẽ. Bất thường: Thấy trứng giun đũa, amip hoặc có máu ẩn cảnh báo ung thư đại tràng.",
    "real_life_example": "Ông chú hay đi cầu lắt nhắt, làm xét nghiệm phân có máu ẩn, bác sĩ cho đi nội soi ruột phát hiện ra khối u ác tính sớm.",
    "note": "Là xét nghiệm rất rẻ tiền nhưng lại là công cụ vàng để tầm soát ung thư đường ruột."
  },
  "Calci toàn phần/ion hóa": {
    "name": "Calci toàn phần/ion hóa",
    "purpose": "Kiểm tra cơ thể có đủ canxi để giúp xương chắc khỏe và tim đập tốt không.",
    "when_to_do": "Khi hay bị chuột rút, tê rần quanh mép miệng, phụ nữ tuổi tiền mãn kinh nghi loãng xương.",
    "how_it_works": "Đo nồng độ canxi hòa tan trong huyết thanh (toàn phần) và lượng canxi tự do hoạt động (ion hóa).",
    "result_meaning": "Thấp: Gây co giật, tê tay chân. Cao: Nguy cơ sỏi thận cứng, vôi hóa mạch máu hoặc u tuyến cận giáp.",
    "real_life_example": "Bà bầu tháng thứ 7 hay bị chuột rút bắp chân ban đêm, thử Calci ion hóa thấp, bác sĩ cho uống viên canxi bổ sung liền hết bệnh.",
    "note": "Chỉ số Calci ion hóa phản ánh chính xác lượng canxi cơ thể đang thiếu hơn là Calci toàn phần."
  },
  "Phospho": {
    "name": "Phospho",
    "purpose": "Đánh giá khoáng chất giúp tạo xương, thường đi cặp với canxi.",
    "when_to_do": "Người bị bệnh suy thận mạn tính, hoặc các bệnh xương thủy tinh, loãng xương.",
    "how_it_works": "Đo lượng khoáng Phospho trong máu, chất này luôn hoạt động đối nghịch với Canxi.",
    "result_meaning": "Bình thường: Đủ chất. Cao: Ở bệnh nhân suy thận, thận không vứt Phospho ra ngoài được gây ngứa ngáy toàn thân.",
    "real_life_example": "Người suy thận chạy thận nhân tạo da dẻ hay bị ngứa gãi sứt sẹo, xét nghiệm Phospho tăng vọt do không lọc được ra ngoài.",
    "note": "Thường luôn được bác sĩ chỉ định xét nghiệm song song cùng với Canxi và Vitamin D3."
  },
  "Tế bào cặn nước tiểu": {
    "name": "Tế bào cặn nước tiểu",
    "purpose": "Tìm xem có mủ, máu hay cặn sỏi rơi rớt trong ống tiểu không.",
    "when_to_do": "Khi đi tiểu rát buốt, tiểu ra máu màu hồng, hoặc đau thắt lưng nghi sỏi thận rớt xuống.",
    "how_it_works": "Quay ly tâm ống nước tiểu cho cặn lắng xuống đáy, lấy phần cặn đó soi dưới kính hiển vi.",
    "result_meaning": "Bình thường: Nước tiểu trong vắt. Bất thường: Thấy đầy bạch cầu, hồng cầu hoặc tinh thể sỏi.",
    "real_life_example": "Chị nhân viên văn phòng hay nhịn tiểu, nay tiểu gắt buốt, soi cặn thấy toàn bạch cầu mủ, chẩn đoán ngay viêm đường tiết niệu.",
    "note": "Nên rửa sạch vùng kín và bỏ khúc nước tiểu đầu tiên, chỉ hứng khúc giữa để mẫu không bị dính cặn bẩn từ da."
  },
  "Cấy vi khuẩn nước tiểu": {
    "name": "Cấy vi khuẩn nước tiểu",
    "purpose": "Tróc nã thủ phạm vi khuẩn gây viêm tiểu buốt và chọn đúng thuốc trị nó.",
    "when_to_do": "Khi uống thuốc kháng sinh vài ngày mà vẫn tiểu buốt, viêm tái đi tái lại nhiều lần.",
    "how_it_works": "Lấy nước tiểu vô trùng đem nuôi trong đĩa sinh dưỡng xem con vi khuẩn nào mọc lên, rồi thử nhỏ kháng sinh vào xem nó chết không.",
    "result_meaning": "Âm tính: Sạch vi khuẩn. Dương tính: Tìm ra vi khuẩn kháng thuốc, bác sĩ sẽ cấp cho tờ giấy chỉ dẫn loại kháng sinh mạnh hơn.",
    "real_life_example": "Bà cụ bị viêm đường tiểu uống kháng sinh cũ không hết, cấy nước tiểu ra con E.coli kháng thuốc, đổi sang thuốc tiêm mới khỏi.",
    "note": "Bắt buộc phải lấy nước tiểu cho vào lọ vô khuẩn trước khi bạn uống viên thuốc kháng sinh đầu tiên."
  },
  "Dengue virus": {
    "name": "Dengue virus",
    "purpose": "Phát hiện nhanh bạn có đang bị sốt xuất huyết do muỗi chích không.",
    "when_to_do": "Khi tự nhiên sốt hầm hập 39-40 độ, đau nhức hốc mắt, vỡ mồ hôi đau mình mẩy trong mùa dịch.",
    "how_it_works": "Tìm mầm bệnh virus Dengue (NS1) trong 3 ngày đầu, hoặc tìm kháng thể cơ thể chống lại nó ở những ngày sau.",
    "result_meaning": "Dương tính: Đang mắc bệnh sốt xuất huyết, cần nằm màn và theo dõi tiểu cầu sát sao phòng chảy máu.",
    "real_life_example": "Con trai sốt cao 2 ngày uống thuốc không hạ, test NS1 sốt xuất huyết lên 2 vạch dương tính, bác sĩ căn dặn cho uống nhiều nước cam, oresol.",
    "note": "Nếu bạn thử máu quá sớm hoặc quá trễ so với ngày khởi sốt, kết quả có thể âm tính giả dù vẫn đang mắc bệnh."
  },
  "HIV": {
    "name": "HIV",
    "purpose": "Khẳng định xem cơ thể có bị nhiễm virus suy giảm miễn dịch HIV không.",
    "when_to_do": "Tầm soát trước kết hôn, phụ nữ mang thai, khám sức khỏe đi nước ngoài, hoặc lo sợ sau khi có hành vi nguy cơ cao.",
    "how_it_works": "Dùng que test nhanh hoặc máy sinh hóa tìm kháng thể chống HIV và thành phần của virus trong máu.",
    "result_meaning": "Âm tính: Không mắc bệnh. Có phản ứng: Cần gửi máu lên tuyến trên làm xét nghiệm khẳng định 3 phương pháp mới chắc chắn.",
    "real_life_example": "Thanh niên có quan hệ không an toàn đi test HIV sau 1 tuần ra âm tính, bác sĩ khuyên 3 tháng sau quay lại test lần nữa cho chắc.",
    "note": "Virus HIV có thời kỳ cửa sổ (ẩn mình) từ 1 đến 3 tháng đầu, lúc này xét nghiệm vẫn có thể ra âm tính dù đã mang mầm bệnh."
  },
  "Sốt rét": {
    "name": "Sốt rét",
    "purpose": "Tìm con ký sinh trùng sốt rét trốn trong các tế bào hồng cầu.",
    "when_to_do": "Khi đi làm rẫy, đi rừng về bị sốt rét run lập cập, đắp mấy cái chăn không ấm, vã mồ hôi theo cơn.",
    "how_it_works": "Lấy một giọt máu chích từ ngón tay phết lên lam kính soi trực tiếp xem có con ký sinh trùng nằm trong hồng cầu không.",
    "result_meaning": "Dương tính: Đang bị sốt rét, vi trùng đang phá vỡ hồng cầu gây thiếu máu, phải uống thuốc đặc trị gấp.",
    "real_life_example": "Anh công nhân làm mỏ ở rừng về sốt rét run đùng đùng, lấy máu soi thấy con Plasmodium falciparum ác tính, cấp cứu ngay.",
    "note": "Cơ hội bắt được vi trùng cao nhất là lấy máu ngay tại lúc bệnh nhân đang lên cơn rét run."
  },
  "Treponema pallidum": {
    "name": "Treponema pallidum",
    "purpose": "Chẩn đoán căn bệnh xã hội lây qua đường tình dục là giang mai.",
    "when_to_do": "Phát hiện vết loét không đau ở vùng kín, hoặc mẹ bầu làm xét nghiệm để phòng lây sang con.",
    "how_it_works": "Kiểm tra xem trong máu có kháng thể sinh ra để đánh lại xoắn khuẩn giang mai hay không.",
    "result_meaning": "Âm tính: Không mắc bệnh. Dương tính: Đang bị giang mai hoặc đã từng bị và chữa khỏi nhưng vết sẹo kháng thể vẫn còn.",
    "real_life_example": "Cô gái sắp cưới đi khám tiền hôn nhân làm xét nghiệm giang mai âm tính, vui vẻ yên tâm tổ chức đám cưới.",
    "note": "Nếu test nhanh dương tính, bác sĩ sẽ cho làm thêm test RPR định lượng để xem bệnh đang hoạt động mạnh hay yếu."
  },
  "Salmonella": {
    "name": "Salmonella",
    "purpose": "Kiểm tra xem bệnh nhân có đang bị ngộ độc thương hàn do ăn đồ dơ không.",
    "when_to_do": "Khi đi ngoài phân lỏng như nước, đau bụng, sốt liên miên lừ đừ nhiều ngày sau khi ăn vỉa hè.",
    "how_it_works": "Thử máu xem có kháng thể chống lại con vi khuẩn thương hàn (Phản ứng Widal) hoặc cấy phân.",
    "result_meaning": "Dương tính: Nhiễm vi khuẩn thương hàn từ thực phẩm ôi thiu, cần dùng kháng sinh đường ruột.",
    "real_life_example": "Chú công nhân ăn hủ tiếu gõ ngoài đường về tiêu chảy sốt cao 3 ngày, thử máu Widal dương tính, bác sĩ cho truyền dịch uống thuốc tiêu chảy.",
    "note": "Ngoài thử máu, cấy phân tìm vi khuẩn là cách chính xác nhất để bắt tận tay con Salmonella."
  },
  "Toxocara": {
    "name": "Toxocara",
    "purpose": "Tìm dấu vết ấu trùng giun đũa từ chó mèo đi lạc vào cơ thể người.",
    "when_to_do": "Khi nuôi chó mèo sờ vuốt nhiều, bỗng hay nổi mề đay dị ứng ngứa ngáy uống thuốc không bớt.",
    "how_it_works": "Lấy máu tìm xem cơ thể có phản ứng tạo kháng thể chống lại giun sán của chó mèo tiết ra không.",
    "result_meaning": "Dương tính: Bạn đã vô tình nuốt trứng giun chó mèo vào bụng, chúng đang bò dưới da hoặc gan gây ngứa.",
    "real_life_example": "Chị gái ôm hôn mèo cưng suốt ngày, dạo này gãi xước cả da tay, thử Toxocara dương tính, uống thuốc tẩy giun sán là dứt ngứa.",
    "note": "Kể cả khi bạn đã uống thuốc diệt sạch giun, kết quả xét nghiệm này vẫn có thể dương tính thêm vài tháng nữa mới giảm."
  },
  "Lactat": {
    "name": "Lactat",
    "purpose": "Đo mức độ ngạt thở của tế bào và rủi ro tử vong do sốc bệnh lý.",
    "when_to_do": "Khi bệnh nhân vào cấp cứu trong tình trạng tụt huyết áp, mất máu nhiều, thở ngáp cá.",
    "how_it_works": "Đo axit lactic, chất độc sinh ra khi các tế bào phải vùng vẫy tạo năng lượng trong tình trạng không có oxy.",
    "result_meaning": "Bình thường: Máu lưu thông tốt. Cao: Các nội tạng đang hoại tử dần vì cạn oxy, nguy hiểm chết người.",
    "real_life_example": "Bệnh nhân bị tai nạn chấn thương nát đùi chảy máu ồ ạt, vào viện đo Lactat cao vọt, bác sĩ lập tức truyền máu xối xả cứu nội tạng.",
    "note": "Người bệnh khi lấy máu xét nghiệm này tuyệt đối không được gồng siết cơ tay, nếu không chỉ số sẽ tăng giả mạo."
  },
  "Ethanol": {
    "name": "Ethanol",
    "purpose": "Kiểm tra chính xác có bao nhiêu cồn (rượu bia) đang chạy trong máu.",
    "when_to_do": "Giám định cho người bị tai nạn giao thông, hoặc khi có người bị ngộ độc sùi bọt mép nghi uống rượu giả.",
    "how_it_works": "Lấy mẫu máu tĩnh mạch đưa vào máy phân tích nồng độ cồn.",
    "result_meaning": "Âm tính: Không có cồn. Cao: Bệnh nhân đang say xỉn nặng, nếu quá cao có thể ức chế não gây ngừng thở.",
    "real_life_example": "Một tài xế đụng xe bất tỉnh, công an yêu cầu lấy máu đo cồn, kết quả Ethanol rất cao chứng tỏ người này đã say xỉn trước khi lái.",
    "note": "Lúc sát trùng da để chích kim lấy máu, cô y tá bắt buộc phải dùng thuốc đỏ Povidine thay vì dùng cồn để tránh làm sai kết quả."
  },
  "Test ma túy": {
    "name": "Test ma túy",
    "purpose": "Phát hiện nhanh người có sử dụng các chất kích thích cấm hay không.",
    "when_to_do": "Khám sức khỏe tài xế lái xe, xin việc làm, hoặc thanh niên có biểu hiện ngáo đá ảo giác ngoài đường.",
    "how_it_works": "Bệnh nhân tè vào lọ, y tá nhúng que thử nhiều vạch vào nước tiểu để dò tìm heroin, cần sa, thuốc lắc.",
    "result_meaning": "Âm tính: Sạch sẽ. Dương tính: Đã chơi chất cấm trong khoảng 3 đến 5 ngày trở lại đây.",
    "real_life_example": "Công ty khám sức khỏe bất chợt cho tài xế xe tải, test nước tiểu ra dương tính ma túy đá, tài xế lập tức bị đình chỉ lái xe.",
    "note": "Một số loại thuốc tây chữa cảm sổ mũi uống vào cũng có thể làm que thử hiện 2 vạch giả mạo, hãy báo bác sĩ thuốc bạn đang uống."
  },
  "Nhóm máu ABO/Rh": {
    "name": "Nhóm máu ABO/Rh",
    "purpose": "Xác định nhãn dán nhóm máu của bạn là A, B, AB hay O, và có hiếm không.",
    "when_to_do": "Khi đi hiến máu, phụ nữ mang thai, chuẩn bị mổ, hoặc làm thẻ căn cước.",
    "how_it_works": "Trộn máu của bạn với các giọt hóa chất sinh học, xem nó kết tủa với loại nào thì ra nhóm máu đó.",
    "result_meaning": "Ra được nhóm máu của bạn. Nếu có chữ Rh(-) đi kèm thì bạn thuộc nhóm máu cực kỳ hiếm.",
    "real_life_example": "Chị gái sinh con lần đầu thử máu ra nhóm O âm (O-), bác sĩ viện sản lập tức phải đặt kho dự trữ máu hiếm phòng hờ lúc sinh băng huyết.",
    "note": "Nhóm máu là thông tin không bao giờ thay đổi từ lúc sinh ra đến khi chết đi, bạn nên ghi nhớ để dùng lúc nguy cấp."
  },
  "Phản ứng hòa hợp": {
    "name": "Phản ứng hòa hợp",
    "purpose": "Bước chốt chặn tử thần cuối cùng trước khi cắm bịch máu vào người bệnh nhân.",
    "when_to_do": "Làm ngay tại phòng xét nghiệm và tại giường bệnh trước khi y tá mở van truyền máu.",
    "how_it_works": "Lấy một giọt máu trong bịch ni lông trộn với giọt máu của bệnh nhân xem chúng có vón cục đánh nhau không.",
    "result_meaning": "Hòa hợp: Truyền an toàn. Bất hợp: Không được truyền, nếu truyền vào hồng cầu vỡ tan tành gây sốc chết người.",
    "real_life_example": "Bệnh nhân cần truyền máu gấp, phòng lab báo phản ứng chéo an toàn, y tá mới tự tin mang bịch máu đỏ tươi gắn vào tay bệnh nhân.",
    "note": "Dù bệnh nhân đã đeo vòng tay ghi rõ nhóm máu, thì bịch máu cũng phải làm phản ứng hòa hợp này rồi mới được truyền."
  },
  "Dịch não tủy": {
    "name": "Dịch não tủy",
    "purpose": "Chọc tìm nguyên nhân gây viêm màng não hoặc chảy máu trong não.",
    "when_to_do": "Khi bệnh nhân đau đầu như búa bổ, cổ cứng ngắc gập không được, nôn vọt, sốt cao co giật.",
    "how_it_works": "Bác sĩ gây tê và chọc một cây kim dài vào cột sống thắt lưng để lấy vài giọt nước tủy sống đem đo nồng độ đường, đạm và tìm vi khuẩn.",
    "result_meaning": "Bình thường: Nước trong vắt. Bất thường: Nước đục như nước vo gạo là viêm màng não mủ, nước đỏ là chảy máu não.",
    "real_life_example": "Em bé 2 tuổi sốt cao cứng cổ, bác sĩ chọc dịch não tủy đục ngầu do vi khuẩn não mô cầu, lập tức cho thuốc đặc trị màng não.",
    "note": "Đường Glucose trong dịch não tủy giảm mạnh là dấu hiệu đặc trưng của viêm màng não do vi khuẩn."
  },
  "Amoniac (NH3)": {
    "name": "Amoniac (NH3)",
    "purpose": "Đo nồng độ khí độc ngấm lên não do gan không lọc được.",
    "when_to_do": "Khi người xơ gan giai đoạn cuối bắt đầu lơ mơ, nói năng lảm nhảm, tay chân run rẩy vỗ cánh.",
    "how_it_works": "Đo nồng độ NH3 trong máu, một loại khí độc sinh ra từ ruột mà gan hỏng nên không biến nó thành chất vô hại được.",
    "result_meaning": "Bình thường: Gan giải độc tốt. Cao: Khí độc bay lên não gây ngộ độc hệ thần kinh (Hôn mê gan).",
    "real_life_example": "Bác trai xơ gan tự nhiên sáng ngủ dậy không nhận ra người nhà, xét nghiệm NH3 cao chót vót, bác sĩ chẩn đoán tiền hôn mê gan.",
    "note": "Mẫu máu rút ra phải được ướp trong đá lạnh ngay lập tức đem đi chạy máy thì chỉ số NH3 mới không bị sai."
  },
  "Vitamin D3": {
    "name": "Vitamin D3",
    "purpose": "Kiểm tra xem cơ thể có đủ vitamin để hút canxi vào xương hay không.",
    "when_to_do": "Trẻ em bị còi xương rụng tóc hình vành khăn, người lớn hay nhức mỏi xương, phụ nữ loãng xương.",
    "how_it_works": "Đo lượng vitamin D lưu trữ trong máu, loại vitamin được da tổng hợp khi phơi nắng mặt trời.",
    "result_meaning": "Bình thường: Khung xương được bảo vệ. Thấp: Xương giòn dễ gãy, cơ bắp yếu đuối, hệ miễn dịch kém.",
    "real_life_example": "Chị nhân viên văn phòng 35 tuổi che nắng kín mít, hay đau mỏi lưng, đo Vitamin D3 rất thấp, uống canxi mãi không ngấm được vào xương.",
    "note": "Nếu bạn thiếu Vitamin D3, dù bạn có uống cả ký Canxi thì nó cũng trôi ra ngoài qua đường tiêu tiểu hết."
  },
  "RF": {
    "name": "RF",
    "purpose": "Truy tìm căn bệnh viêm khớp dạng thấp tự miễn tàn phá khớp.",
    "when_to_do": "Khi sáng ngủ dậy tay chân cứng đơ khó cử động, các khớp ngón tay sưng đỏ đối xứng 2 bên.",
    "how_it_works": "Tìm một loại kháng thể bị lỗi do cơ thể tự sinh ra quay ngược lại cắn xé các sụn khớp của chính mình.",
    "result_meaning": "Âm tính: Khó mắc bệnh. Dương tính: Chắc chắn bị viêm khớp dạng thấp, lâu dài khớp sẽ bị biến dạng cong vẹo.",
    "real_life_example": "Bà cụ các đốt ngón tay sưng to đau nhức bóp méo, đi xét nghiệm RF dương tính, bác sĩ cho uống thuốc ức chế miễn dịch làm chậm hư khớp.",
    "note": "Ở người già khỏe mạnh đôi khi xét nghiệm này cũng dương tính nhẹ mà không có bệnh, cần bác sĩ khớp khám trực tiếp."
  },
  "ASO": {
    "name": "ASO",
    "purpose": "Phát hiện dấu vết con vi khuẩn ăn thịt người (Liên cầu khuẩn) gây hỏng van tim.",
    "when_to_do": "Trẻ em sau đợt viêm họng mủ đau họng sưng to, nay tự nhiên sưng đau đầu gối, mệt tim.",
    "how_it_works": "Đo nồng độ kháng thể mà cơ thể sinh ra để diệt độc tố của con vi khuẩn liên cầu nhóm A.",
    "result_meaning": "Bình thường: Không nhiễm vi khuẩn. Cao: Vi khuẩn đã vào máu, nguy cơ cắn đứt sụn khớp, màng lọc thận và hỏng van tim.",
    "real_life_example": "Bé trai 8 tuổi viêm họng tuần trước, nay kêu đau cổ chân, thử ASO tăng vọt, bác sĩ cho tiêm phòng thấp tim để cứu lấy trái tim bé.",
    "note": "Con vi khuẩn này có biệt danh là 'liếm khớp đớp tim', nếu viêm họng liên cầu phải uống kháng sinh đủ liều 10 ngày để diệt cỏ tận gốc."
  },
  "Sắt huyết thanh": {
    "name": "Sắt huyết thanh",
    "purpose": "Đo lượng sắt đang đi lông nhông trên các chuyến xe trong máu.",
    "when_to_do": "Khi nhợt nhạt, hoa mắt chóng mặt khi đứng lên ngồi xuống, tóc rụng da khô móng tay gãy.",
    "how_it_works": "Đo lường trực tiếp khoáng chất sắt có mặt trong huyết thanh ở thời điểm rút máu.",
    "result_meaning": "Thấp: Mắc bệnh thiếu máu do thiếu sắt. Cao: Bị ngộ độc sắt làm đen da, hỏng gan thận.",
    "real_life_example": "Bà bầu tháng thứ 4 xanh xao hay xây xẩm mặt mày, đi đo sắt huyết thanh thấy thấp chạm đáy, bác sĩ kê ngay viên sắt và dặn ăn nhiều thịt bò.",
    "note": "Nên lấy máu vào buổi sáng và không uống viên sắt trước ngày xét nghiệm để số đo không bị nhiễu."
  },
  "Ferritin": {
    "name": "Ferritin",
    "purpose": "Đo xem kho dự trữ sắt cất giấu sâu trong gan và tủy xương còn đầy hay đã cạn.",
    "when_to_do": "Làm cùng xét nghiệm sắt huyết thanh để biết chắc chắn bạn thiếu máu lâu ngày chưa.",
    "how_it_works": "Đo một cái bao tải protein tên là Ferritin, nhiệm vụ của nó là ôm giữ sắt cất đi để xài dần.",
    "result_meaning": "Thấp: Kho đã cạn sạch, cơ thể đói sắt trầm trọng. Cao: Đang có viêm nhiễm hoặc mắc bệnh dư thừa sắt di truyền.",
    "real_life_example": "Một cô gái ăn kiêng giảm cân, sắt máu bình thường nhưng Ferritin rất thấp, báo hiệu kho dự trữ đã cạn, sắp sửa bị thiếu máu nặng.",
    "note": "Ferritin là bộ xét nghiệm trung thực nhất, chỉ cần nó thấp thì 100% bạn đang thiếu sắt."
  },
  "Folate": {
    "name": "Folate",
    "purpose": "Đánh giá lượng vitamin B9 giúp tạo máu và chống dị tật não cho thai nhi.",
    "when_to_do": "Người có hồng cầu to bất thường, mẹ bầu đi khám thai những tháng đầu tiên.",
    "how_it_works": "Đo nồng độ Folate trong máu, vi chất này thường có nhiều trong rau xanh ăn lá.",
    "result_meaning": "Thấp: Gây bệnh thiếu máu hồng cầu to, phụ nữ mang thai thiếu chất này con sinh ra dễ bị dị tật nứt đốt sống lưng.",
    "real_life_example": "Vợ chồng chuẩn bị có con đi khám tiền thai sản, bác sĩ khuyên vợ uống bổ sung axit folic liên tục 3 tháng trước khi bầu.",
    "note": "Cần nhịn ăn sáng trước khi lấy máu để kết quả vitamin B9 không bị tăng giả tạo do bữa ăn."
  },
  "Vitamin B12": {
    "name": "Vitamin B12",
    "purpose": "Kiểm tra vitamin giúp bảo vệ dây thần kinh và sản xuất hồng cầu.",
    "when_to_do": "Người già hay bị tê rần châm chích bàn chân bàn tay, hay quên, người ăn chay trường kỳ.",
    "how_it_works": "Đo lượng vitamin B12 trong máu, vi chất này chỉ có trong thịt động vật, không có trong thực vật.",
    "result_meaning": "Thấp: Gây suy nhược thần kinh, thiếu máu ác tính, đi lại chao đảo loạng choạng.",
    "real_life_example": "Cụ ông bị viêm loét dạ dày lâu năm hay bị tê tay, khám đo B12 thấp do dạ dày hỏng không hút được vitamin từ thịt cá.",
    "note": "Nếu bạn ăn chay trường nhiều năm, bạn bắt buộc phải uống viên bổ sung B12 để không bị hỏng hệ thần kinh."
  },
  "UIBC": {
    "name": "UIBC",
    "purpose": "Kiểm tra xem các cỗ xe chở sắt trong máu Transferrin còn trống bao nhiêu chỗ.",
    "when_to_do": "Được làm gộp chung trong bộ kiểm tra thiếu máu, thừa sắt cùng với Sắt và Ferritin.",
    "how_it_works": "Đo công suất còn lại của các protein vận chuyển sắt chưa bị chiếm dụng.",
    "result_meaning": "Cao: Xe trống rỗng quá nhiều chứng tỏ bạn đang thiếu sắt. Thấp: Xe chở quá tải chứng tỏ ngộ độc sắt.",
    "real_life_example": "Cô gái thiếu máu, đo Sắt thấp nhưng UIBC lại tăng cao, chứng tỏ cơ thể đang khát sắt, xe ra bến đón mà không có sắt để chở.",
    "note": "Cộng UIBC với Sắt huyết thanh sẽ ra chỉ số TIBC (Sức chứa sắt tổng cộng của cơ thể)."
  },
  "Phết máu ngoại biên": {
    "name": "Phết máu ngoại biên",
    "purpose": "Quan sát tận mắt hình dáng, màu sắc và cấu trúc của các tế bào máu.",
    "when_to_do": "Khi máy đếm công thức máu tự động báo lỗi có tế bào lạ, nghi ngờ ung thư máu hoặc sốt rét.",
    "how_it_works": "Nhỏ một giọt máu dàn mỏng tang lên tấm kính thủy tinh, nhuộm màu cho nổi bật rồi đưa lên kính hiển vi soi mắt thường.",
    "result_meaning": "Thấy được hồng cầu bị cắn vỡ, hồng cầu hình bia bắn, hoặc thấy các bạch cầu non non nớt tràn ngập do ung thư tủy.",
    "real_life_example": "Em bé xanh xao sốt dai dẳng, máy đếm bạch cầu cao bất thường, bác sĩ soi kính hiển vi thấy toàn bạch cầu ác tính chẩn đoán ung thư máu cấp.",
    "note": "Đây là xét nghiệm thủ công, kết quả phụ thuộc 100% vào cặp mắt nhà nghề của bác sĩ chuyên khoa huyết học."
  },
  "Hồng cầu lưới": {
    "name": "Hồng cầu lưới",
    "purpose": "Kiểm tra xem nhà máy tủy xương có đang sản xuất đủ hồng cầu mới ra lò không.",
    "when_to_do": "Sau đợt xuất huyết rỉ máu rỉ rả, hoặc đang uống thuốc sắt xem thuốc có hiệu quả không.",
    "how_it_works": "Đếm tỷ lệ những tế bào hồng cầu non trẻ mới ra lò so với tổng số hồng cầu trưởng thành trong máu.",
    "result_meaning": "Cao: Nhà máy tủy xương đang hoạt động hết công suất để bù đắp máu mất. Thấp: Tủy xương bị hỏng, suy tủy không đẻ được máu.",
    "real_life_example": "Chị bị trĩ nội chảy máu rỉ rả, được truyền máu và uống sắt 1 tuần, xét nghiệm thấy hồng cầu lưới tăng vọt chứng tỏ tủy xương đang phục hồi tốt.",
    "note": "Chỉ số này là cách tuyệt vời nhất để bác sĩ biết tủy xương của bạn còn sống khỏe hay đã teo tóp."
  },
  "FT3": {
    "name": "FT3",
    "purpose": "Đánh giá mức độ làm việc của tuyến giáp ở vùng cổ.",
    "when_to_do": "Khi hay bị trống ngực hồi hộp, sụt cân nhanh dù ăn rất nhiều, tay run rẩy bần bật (Cường giáp).",
    "how_it_works": "Đo nồng độ hormone T3 tự do, đây là loại hormone có sức công phá cực mạnh do tuyến giáp tiết ra.",
    "result_meaning": "Cao: Tuyến giáp hoạt động quá mức. Thấp: Tuyến giáp lười biếng, làm cơ thể mập ú ù lì.",
    "real_life_example": "Cô gái trẻ hay cáu gắt, lồi mắt, tim đập thình thịch 120 nhịp/phút, thử FT3 tăng rất cao xác định mắc chứng Cường giáp.",
    "note": "Dù lượng FT3 trong máu rất nhỏ so với FT4, nhưng nó lại là kẻ quyết định tốc độ tiêu hao năng lượng của cơ thể."
  },
  "FT4": {
    "name": "FT4",
    "purpose": "Công cụ chính xác nhất để chẩn đoán bệnh bướu cổ tuyến giáp.",
    "when_to_do": "Đi kèm thành bộ 3 hoàn hảo với FT3 và TSH khi khám sức khỏe bướu cổ.",
    "how_it_works": "Đo nồng độ hormone T4 tự do trong máu. T4 giống như một kho dự trữ, khi cần sẽ biến thành FT3 để xài.",
    "result_meaning": "Bình thường: Tuyến giáp hiền hòa. Cao: Bệnh cường giáp. Thấp: Tuyến giáp bị suy yếu không sinh đủ hormone.",
    "real_life_example": "Bà mẹ sau sinh người mệt mỏi phù nề, ăn ít vẫn mập, đo FT4 thấp tè, bác sĩ cho uống viên bù hormone tuyến giáp liền khỏe lại ngay.",
    "note": "Bác sĩ ưu tiên đo FT4 (tự do) thay vì T4 (toàn phần) vì nó không bị ảnh hưởng sai lệch do các protein trong máu."
  },
  "TSH": {
    "name": "TSH",
    "purpose": "Chỉ số trinh sát nhạy bén nhất để tầm soát mọi vấn đề về tuyến giáp.",
    "when_to_do": "Là xét nghiệm đầu tiên được bác sĩ chỉ định khi bạn có bướu to ở cổ hoặc nghi ngờ bệnh tuyến giáp.",
    "how_it_works": "Đo hormone TSH từ tuyến yên trên não tiết ra. Não dùng TSH để ra lệnh cho tuyến giáp làm việc.",
    "result_meaning": "Thấp: Tuyến giáp đang sản xuất quá mức (Cường giáp). Cao: Tuyến giáp bị yếu nên não phải thúc ép liên tục (Suy giáp).",
    "real_life_example": "Kết quả xét nghiệm FT3 FT4 bình thường nhưng TSH tăng cao, bác sĩ kết luận đây là suy giáp tiềm ẩn sớm, chuẩn bị cho uống thuốc.",
    "note": "TSH luôn đi ngược chiều với FT3 và FT4. Nó là chỉ số thay đổi sớm nhất khi tuyến giáp mới chớm có vấn đề."
  },
  "Testosteron": {
    "name": "Testosteron",
    "purpose": "Đánh giá phong độ sinh lý, ham muốn và cơ bắp ở nam giới.",
    "when_to_do": "Nam giới rụng tóc hói đầu, yếu sinh lý liệt dương, hoặc nữ giới mọc ria mép nổi mụn đầy mặt.",
    "how_it_works": "Đo lượng hormone nam tính lưu thông trong máu.",
    "result_meaning": "Thấp ở nam: Mãn dục nam, yếu sinh lý, vô sinh. Cao ở nữ: Bệnh buồng trứng đa nang gây rối loạn kinh nguyệt.",
    "real_life_example": "Chú 50 tuổi than vãn không còn hứng thú chuyện vợ chồng, đo Testosteron sụt thê thảm, được bác sĩ cho uống bổ sung hormone lấy lại phong độ.",
    "note": "Bắt buộc phải đi lấy máu vào buổi sáng sớm vì đây là lúc hormone sinh dục nam dâng trào cao nhất trong ngày."
  },
  "Cortisol": {
    "name": "Cortisol",
    "purpose": "Đo lường mức độ stress căng thẳng của cơ thể và chức năng tuyến thượng thận.",
    "when_to_do": "Người hay tự mua thuốc khớp đông y uống, dạo này mặt sưng tròn như mặt trăng, chân tay teo tóp.",
    "how_it_works": "Đo hormone Cortisol do tuyến thượng thận tiết ra mỗi khi bạn bị áp lực, đói, sợ hãi.",
    "result_meaning": "Cao: Mắc bệnh u tuyến thượng thận hoặc do lạm dụng thuốc corticoid. Thấp: Suy tuyến thượng thận.",
    "real_life_example": "Cô bán hàng uống thuốc tễ trị nhức mỏi nửa năm nay, giờ mặt béo phị mọc lông, thử Cortisol rối loạn do ngộ độc corticoid trộn trong thuốc tễ.",
    "note": "Cortisol tăng cao vọt lúc sáng sớm khi mới ngủ dậy và thấp dần về chiều tối, nên y tá sẽ dặn bạn lấy máu đúng 8 giờ sáng."
  },
};

const diseaseGroups = [
  {
    title: 'Tim mạch & Đột quỵ',
    img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80',
    icon: <Heart className="text-red-500" />,
    tests: ['NT-ProBNP', 'Troponin I', 'CK-MB', 'AST', 'LDH', 'CRP', 'Khí máu', 'Điện giải', 'Bộ mỡ máu', 'PT', 'APTT', 'D-Dimer'],
    description: 'Hỗ trợ chẩn đoán cấp cứu nhồi máu cơ tim, suy tim, đột quỵ.',
    meaning: 'Hỗ trợ chẩn đoán cấp cứu nhồi máu cơ tim, suy tim, đột quỵ. Tầm soát rối loạn mỡ máu và theo dõi tình trạng huyết khối.'
  },
  {
    title: 'Ung bướu (Ung thư)',
    img: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&q=80',
    icon: <Microscope className="text-purple-500" />,
    tests: ['AFP', 'CEA', 'PSA', 'CA 15-3', 'Tg', 'Tế bào học dịch'],
    description: 'Tầm soát sớm, chẩn đoán và theo dõi đáp ứng điều trị các loại ung thư phổ biến.',
    meaning: 'Tầm soát sớm, chẩn đoán và theo dõi đáp ứng điều trị các loại ung thư phổ biến. Tìm tế bào ác tính trong dịch cơ thể.'
  },
  {
    title: 'Hô hấp (Phổi, Lao)',
    img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&q=70',
    icon: <Wind className="text-blue-400" />,
    tests: ['Khí máu', 'CRP', 'Pro-calcitonin', 'Interleukin 6', 'WBC', 'Máu lắng', 'Nhuộm AFB tìm Lao', 'Cấy vi khuẩn'],
    description: 'Đánh giá mức độ suy hô hấp và chẩn đoán các bệnh lý nhiễm trùng phổi.',
    meaning: 'Đánh giá mức độ suy hô hấp. Tìm nguyên nhân viêm phổi cấp do vi khuẩn/virus và chẩn đoán đặc thù bệnh lao phổi.'
  },
  {
    title: 'Chuyển hóa & Tiểu đường',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
    icon: <Droplet className="text-orange-500" />,
    tests: ['Glucose', 'HbA1C', 'Insulin', 'C-peptid', 'Acid Uric', 'Ceton', 'Ure', 'Creatinin', 'MAU niệu', 'Protein niệu 24h'],
    description: 'Chẩn đoán, theo dõi kiểm soát đường huyết và biến chứng thận.',
    meaning: 'Chẩn đoán, theo dõi kiểm soát đường huyết. Phát hiện sớm biến chứng thận của tiểu đường và theo dõi bệnh Gout.'
  },
  {
    title: 'Gan mật & Tiêu hóa',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    icon: <Activity className="text-green-600" />,
    tests: ['AST', 'ALT', 'GGT', 'Bilirubin', 'Albumin', 'Amylase', 'Lipase', 'HBsAg', 'HCV Ab', 'Tải lượng HBV','Tải lượng HCV', 'Soi phân'],
    description: 'Đánh giá mức độ tổn thương gan, viêm tụy cấp và viêm gan siêu vi.',
    meaning: 'Đánh giá mức độ tổn thương gan, viêm tụy cấp. Tầm soát viêm gan siêu vi B, C và tìm nguyên nhân xuất huyết tiêu hóa.'
  },
  {
    title: 'Thận - Tiết niệu',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
    icon: <Stethoscope className="text-blue-600" />,
    tests: ['Ure', 'Creatinin', 'Điện giải', 'Calci', 'Phospho', 'Protein niệu 24h', 'Tế bào cặn nước tiểu', 'Cấy vi khuẩn nước tiểu'],
    description: 'Đánh giá chức năng lọc của thận và nhiễm trùng đường tiết niệu.',
    meaning: 'Đánh giá chức năng lọc của thận, rối loạn cân bằng điện giải. Chẩn đoán các tình trạng nhiễm trùng đường tiết niệu.'
  },
  {
    title: 'Truyền nhiễm & Ký sinh trùng',
    img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=400&q=70',
    icon: <Thermometer className="text-red-600" />,
    tests: ['Dengue virus', 'HIV', 'Sốt rét', 'Treponema pallidum', 'Salmonella', 'Toxocara'],
    description: 'Chẩn đoán các bệnh dịch truyền nhiễm nhiệt đới và giun sán.',
    meaning: 'Chẩn đoán các bệnh dịch truyền nhiễm nhiệt đới nguy hiểm và xác định gánh nặng bệnh lý do giun sán lây nhiễm.'
  },
  {
    title: 'Chấn thương & Cấp cứu',
    img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
    icon: <Zap className="text-yellow-500" />,
    tests: ['Khí máu', 'Lactat', 'Ethanol', 'Test ma túy', 'Nhóm máu ABO/Rh', 'Phản ứng hòa hợp'],
    description: 'Đánh giá hồi sức tích cực và chuẩn bị an toàn truyền máu.',
    meaning: 'Đánh giá tình trạng hồi sức tích cực đa chấn thương. Tầm soát nguyên nhân tai nạn do rượu/ma túy và chuẩn bị an toàn truyền máu.'
  },
  {
    title: 'Tâm thần & Thần kinh',
    img: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80',
    icon: <Brain className="text-pink-500" />,
    tests: ['Dịch não tủy', 'Ethanol', 'Amoniac (NH3)', 'AST', 'ALT', 'GGT'],
    description: 'Tìm nguyên nhân viêm màng não và đánh giá tổn thương thần kinh.',
    meaning: 'Tìm nguyên nhân viêm màng não/viêm não. Đánh giá tổn thương gan và thần kinh do tình trạng lạm dụng rượu/chất kích thích.'
  },
  {
    title: 'Cơ xương khớp',
    img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&q=80',
    icon: <Bone className="text-slate-500" />,
    tests: ['Acid Uric', 'Calci toàn phần/ion hóa', 'Phospho', 'Vitamin D3', 'RF', 'ASO', 'CRP', 'Máu lắng'],
    description: 'Tầm soát bệnh lý tự miễn và loãng xương.',
    meaning: 'Tầm soát các bệnh lý tự miễn, đánh giá tình trạng loãng xương ở người lớn tuổi và tình trạng viêm nhiễm cấp/mãn tính tại khớp.'
  },
  {
    title: 'Dinh dưỡng & Thiếu máu',
    img: 'https://images.unsplash.com/photo-1576086476234-1103be98f096?w=400&q=70',
    icon: <Scale className="text-green-500" />,
    tests: ['Sắt huyết thanh', 'Ferritin', 'Folate', 'Vitamin B12', 'UIBC', 'Phết máu ngoại biên', 'Hồng cầu lưới'],
    description: 'Chẩn đoán nguyên nhân thiếu máu và thiếu hụt vi chất.',
    meaning: 'Chẩn đoán phân biệt các nguyên nhân gây thiếu máu. Tầm soát thiếu hụt vi chất dinh dưỡng ở trẻ em và phụ nữ mang thai.'
  },
  {
    title: 'Tuyến giáp & Nội tiết',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
    icon: <Activity className="text-cyan-500" />,
    tests: ['FT3', 'FT4', 'TSH', 'Testosteron', 'Cortisol'],
    description: 'Kiểm tra chức năng tuyến giáp và hormone sinh dục.',
    meaning: 'Chẩn đoán các hội chứng cường giáp/suy giáp, đánh giá chức năng tuyến thượng thận và tình trạng suy giảm hormone sinh dục.'
  }
];

const patientInstructions = [
  {
    id: 'nuoc-tieu',
    title: 'Nước Tiểu Thường',
    icon: <FlaskConical className="text-yellow-500" />,
    steps: [
      { 
        title: '1. Chuẩn bị', 
        desc: 'Sử dụng ống nhựa trắng 7ml. <span class="text-red-500 font-bold">Rửa sạch tay và vùng kín</span> bằng nước sạch.' 
      },
      { 
        title: '2. Cách lấy', 
        desc: 'Bỏ đoạn nước tiểu đầu. <span class="text-red-500 font-bold">Hứng đoạn giữa dòng</span> vào ống nhựa. Đừng để ống chạm vào da.' 
      },
      { 
        title: '3. Hoàn tất', 
        desc: 'Đóng nắp chặt. Đặt ống lên giá tại phòng xét nghiệm theo chỉ dẫn.' 
      }
    ]
  },
  {
    id: 'nuoc-tieu-24h',
    title: 'Nước Tiểu 24H',
    icon: <Clock className="text-blue-500" />,
    steps: [
      { 
        title: '1. Bắt đầu (6 giờ sáng)', 
        desc: '<span class="text-red-500 font-bold">Tiểu hết bỏ đi</span>, không lấy vào bình.' 
      },
      { 
        title: '2. Thu thập', 
        desc: 'Mọi lần đi tiểu sau đó (kể cả khi tắm, đi ngoài) <span class="text-red-500 font-bold">phải hứng hết vào bình lớn</span>.' 
      },
      { 
        title: '3. Kết thúc', 
        desc: '6 giờ sáng hôm sau tiểu lần cuối vào bình. Lắc đều, đo tổng thể tích, ghi lại và <span class="text-red-500 font-bold">chiết ra lọ nhựa nhỏ</span> mang đi gửi.' 
      }
    ]
  },
  {
    id: 'dam',
    title: 'Xét Nghiệm Đàm',
    icon: <Wind className="text-cyan-500" />,
    steps: [
      { 
        title: '1. Chuẩn bị', 
        desc: 'Nên lấy vào <span class="text-red-500 font-bold">sáng sớm khi mới ngủ dậy</span>. Súc miệng bằng nước muối sinh lý.' 
      },
      { 
        title: '2. Cách lấy', 
        desc: 'Hít sâu, nín thở rồi <span class="text-red-500 font-bold">ho thật mạnh</span> để khạc đờm từ phổi ra lọ. Đảm bảo lấy đàm đặc, đục/vàng/xanh, không lấy nước bọt.' 
      },
      { 
        title: '3. Lưu ý', 
        desc: 'Đóng nắp chặt. Mang nộp trong vòng 30 phút.' 
      }
    ]
  },
  {
    id: 'phan',
    title: 'Xét Nghiệm Phân',
    icon: <Microscope className="text-green-600" />,
    steps: [
      { 
        title: '1. Chuẩn bị', 
        desc: 'Dùng bô sạch <span class="text-red-500 font-bold">tráng nước sôi để nguội</span>. Không dùng hóa chất tẩy rửa.' 
      },
      { 
        title: '2. Cách lấy', 
        desc: 'Dùng que múc phân cỡ <span class="text-red-500 font-bold">đầu ngón tay út (5 gram)</span>. Lấy chỗ có nhày, máu hoặc lợn cợn trắng.' 
      },
      { 
        title: '3. nộp mẫu', 
        desc: 'Đóng nắp kỹ. Mang đến phòng xét nghiệm ngay trong vòng 30 phút.' 
      }
    ]
  }
];

// --- COMPONENTS ---

const Header = ({ 
  darkMode, 
  setDarkMode, 
  activeTab, 
  setActiveTab 
}: { 
  darkMode: boolean, 
  setDarkMode: (v: boolean) => void,
  activeTab: string,
  setActiveTab: (t: string) => void
}) => {
  return (
    <nav className="sticky top-0 z-50 glass px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="bg-blue-600 p-1.5 sm:p-2 rounded-lg sm:rounded-xl">
          <Microscope className="text-white w-5 h-5 sm:w-6 h-6" />
        </div>
        <div>
          <h1 className="fluid-title font-bold tracking-tight text-blue-900 leading-none">KHOA XÉT NGHIỆM</h1>
          <p className="text-[8px] sm:text-[10px] uppercase font-semibold text-blue-600 tracking-[0.1em] sm:tracking-widest mt-0.5 sm:mt-1">BVĐK CÀ MAU</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 sm:gap-12 text-sm sm:text-xl font-black uppercase tracking-tight text-slate-500">
        <button 
          onClick={() => setActiveTab('patients')}
          className={`transition-all pb-1 sm:pb-2 border-b-2 sm:border-b-4 ${activeTab === 'patients' ? 'text-blue-700 border-blue-700 scale-105 sm:scale-110' : 'border-transparent hover:text-blue-600 cursor-pointer'}`}
        >
          Bệnh nhân
        </button>
        <button 
          onClick={() => setActiveTab('staff')}
          className={`transition-all pb-1 sm:pb-2 border-b-2 sm:border-b-4 ${activeTab === 'staff' ? 'text-blue-700 border-blue-700 scale-105 sm:scale-110' : 'border-transparent hover:text-blue-600 cursor-pointer'}`}
        >
          Nhân viên
        </button>
      </div>

      <div className="flex items-center gap-4">
        {/* Removed theme toggle and appointment button per user request */}
      </div>
    </nav>
  );
};


const KnowledgeCardPopup = ({ 
  knowledge, 
  onClose 
}: { 
  knowledge: TestKnowledge, 
  onClose: () => void 
}) => {
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 py-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-lg bg-white dark:bg-slate-800 rounded-[30px] sm:rounded-[40px] shadow-2xl overflow-hidden border-4 border-white mx-auto"
      >
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 sm:p-10 text-white relative">
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-white/20 hover:bg-white/40 rounded-xl transition-all"
            >
                <X className="w-5 h-5 sm:w-6 h-6" />
            </button>
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-white/20 rounded-xl sm:rounded-2xl">
                    <Database className="w-6 h-6 sm:w-8 h-8" />
                </div>
                <h2 className="text-2xl sm:text-4xl font-black tracking-tighter uppercase leading-tight">{knowledge.name}</h2>
            </div>
            <p className="text-blue-100 text-sm sm:text-lg font-medium italic opacity-90 leading-tight">Thông tin cơ bản cần biết dành cho bệnh nhân</p>
        </div>
        
        <div className="p-6 sm:p-10 space-y-6 sm:space-y-8 overflow-y-auto max-h-[60vh] sm:max-h-[70vh]">
            <section>
                <h3 className="flex items-center gap-2 text-blue-600 font-black text-[10px] sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
                    <Activity className="w-4 h-4" /> Mục đích xét nghiệm
                </h3>
                <p className="text-slate-800 dark:text-slate-200 text-lg sm:text-xl font-bold leading-relaxed">{knowledge.purpose}</p>
            </section>

            <section className="bg-amber-50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-amber-100">
                <h3 className="flex items-center gap-2 text-amber-700 font-black text-[10px] sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
                    <Clock className="w-4 h-4" /> Khi nào cần thực hiện?
                </h3>
                <p className="text-slate-700 font-bold leading-relaxed italic text-sm sm:text-base">{knowledge.when_to_do}</p>
            </section>

            <section>
                <h3 className="flex items-center gap-2 text-indigo-600 font-black text-[10px] sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
                    <Zap className="w-4 h-4" /> Nguyên lý đơn giản
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-sm sm:text-base">{knowledge.how_it_works}</p>
            </section>

            <section className="bg-emerald-50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-emerald-100">
                <h3 className="flex items-center gap-2 text-emerald-700 font-black text-[10px] sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
                    <TrendingUp className="w-4 h-4" /> Ý nghĩa kết quả
                </h3>
                <p className="text-emerald-900 font-black leading-relaxed text-sm sm:text-base">{knowledge.result_meaning}</p>
            </section>

            <section className="bg-slate-50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-slate-100 italic">
                <h3 className="flex items-center gap-2 text-slate-500 font-black text-[10px] sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
                    <ShieldCheck className="w-4 h-4" /> Ví dụ thực tế
                </h3>
                <p className="text-slate-600 font-medium text-sm sm:text-base">{knowledge.real_life_example}</p>
            </section>

            {knowledge.note && (
                <div className="bg-blue-50 p-4 sm:p-6 rounded-2xl sm:rounded-3xl border-l-[6px] sm:border-l-8 border-blue-600">
                    <p className="text-blue-900 font-black text-base sm:text-lg">💡 Lưu ý: {knowledge.note}</p>
                </div>
            )}
        </div>

        <div className="p-6 sm:p-8 bg-slate-50 flex justify-center">
            <button 
                onClick={onClose}
                className="px-8 py-3 sm:px-10 sm:py-4 bg-slate-900 text-white rounded-xl sm:rounded-2xl font-black text-lg sm:text-xl hover:bg-black transition-all shadow-xl active:scale-95"
            >
                Đã Hiểu
            </button>
        </div>
      </motion.div>
    </div>
  );
};


// --- APP ---


const STAFF_PASSWORD = "Xetnghiem2026"; // <--- BẠN CÓ THỂ THAY ĐỔI PASSWORD TẠI ĐÂY


export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('patients'); // 'patients' | 'staff'
  const [isStaffAuthenticated, setIsStaffAuthenticated] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [patientSubTab, setPatientSubTab] = useState('instructions'); // 'instructions' | 'tests'
  const [staffSubTab, setStaffSubTab] = useState<'order' | 'collect' | 'policy' | 'dictionary'>('order');
  const [selectedGroup, setSelectedGroup] = useState<null | typeof diseaseGroups[0]>(null);
  const [selectedTest, setSelectedTest] = useState<null | LabTest>(null);
  const [selectedKnowledge, setSelectedKnowledge] = useState<null | TestKnowledge>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showGroupFilter, setShowGroupFilter] = useState(false);

  const filteredTests = useMemo(() => {
    let results = labTests.filter(test => 
      test.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      test.group.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedCategory) {
      results = results.filter(test => test.group === selectedCategory);
    }

    // Luôn sắp xếp Alpha B (theo tên) khi có chọn nhóm hoặc hiển thị tổng quát
    return results.sort((a, b) => a.name.localeCompare(b.name, 'vi', { sensitivity: 'base' }));
  }, [searchTerm, selectedCategory]);

  const uniqueGroups = useMemo(() => {
    return Array.from(new Set(labTests.map(t => t.group))).sort();
  }, []);

  const handleSetActiveTab = (tab: string) => {
    if (tab === 'staff' && !isStaffAuthenticated) {
      setShowPasswordModal(true);
    } else {
      setActiveTab(tab);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === STAFF_PASSWORD) {
      setIsStaffAuthenticated(true);
      setShowPasswordModal(false);
      setActiveTab('staff');
      setPasswordInput('');
      setPasswordError(false);
    } else {
      setPasswordError(true);
      setTimeout(() => setPasswordError(false), 2000);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 relative ${darkMode ? 'dark bg-slate-900' : 'bg-slate-50'}`}>
      {/* Background Logo Watermark - Centered and Subtle */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-10 dark:opacity-5">
         <div className="relative w-full max-w-xl aspect-square flex items-center justify-center">
            {/* Pulsing blurred glows to create a professional medical-tech depth */}
            <div className="absolute w-[120%] h-[120%] bg-blue-500/10 rounded-full blur-[140px] animate-pulse-soft" />
            <div className="absolute w-[80%] h-[80%] bg-blue-600/5 rounded-full blur-[100px]" />
            <div className="absolute w-[40%] h-[40%] bg-red-500/5 rounded-full blur-[80px]" />
            
            {/* Subtle logo silhouette container */}
            <div className="absolute inset-0 flex items-center justify-center p-20">
               {/* Note: User can replace this with an <img> tag pointing to the uploaded logo if available */}
               <div className="w-full h-full border-[1.5px] border-blue-600/20 rounded-full flex items-center justify-center border-dashed animate-spin-slow">
                  <Microscope className="w-32 h-32 text-blue-600/20" />
               </div>
            </div>
         </div>
      </div>

      {/* SEO Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "Khoa Xét nghiệm - BVĐK Cà Mau",
          "url": "https://bvdkcamau.vn/xet-nghiem",
          "logo": "https://bvdkcamau.vn/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+84-290-3835-171",
            "contactType": "customer service"
          },
          "medicalSpecialty": "Laboratory Medicine",
          "knowsAbout": "ISO 15189:2022, Clinical Pathology"
        })}
      </script>

      <Header darkMode={darkMode} setDarkMode={setDarkMode} activeTab={activeTab} setActiveTab={handleSetActiveTab} />

      <main className="pt-8 pb-20">
        <AnimatePresence mode="wait">
          {activeTab === 'patients' && (
            <motion.div
              key="patients"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto px-6"
            >
              {/* Patient Sub-navigation */}
              <div className="flex justify-center mb-12">
                <div className="inline-flex flex-wrap justify-center p-1 bg-white/50 dark:bg-slate-800/50 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                  <button 
                    onClick={() => setPatientSubTab('instructions')}
                    className={`px-4 sm:px-10 py-3 sm:py-4 rounded-[20px] sm:rounded-[25px] text-base sm:text-xl font-black transition-all ${patientSubTab === 'instructions' ? 'bg-blue-600 text-white shadow-xl scale-105' : 'text-slate-500 hover:text-blue-600'}`}
                  >
                    <FlaskConical className="w-4 h-4 sm:w-5 h-5 inline-block mr-2 sm:mr-3" /> Hướng dẫn lấy Mẫu
                  </button>
                  <button 
                    onClick={() => setPatientSubTab('tests')}
                    className={`px-4 sm:px-10 py-3 sm:py-4 rounded-[20px] sm:rounded-[25px] text-base sm:text-xl font-black transition-all ${patientSubTab === 'tests' ? 'bg-blue-600 text-white shadow-xl scale-105' : 'text-slate-500 hover:text-blue-600'}`}
                  >
                    <Search className="w-4 h-4 sm:w-5 h-5 inline-block mr-2 sm:mr-3" /> Tham khảo Xét nghiệm
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {patientSubTab === 'instructions' ? (
                  <motion.div
                    key="p-inst"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="text-center mb-10 sm:mb-16">
                      <h2 className="fluid-title font-black text-blue-900 dark:text-white mb-4 sm:mb-6 uppercase tracking-tight">Quy trình lấy mẫu chuẩn</h2>
                      <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg sm:text-2xl leading-relaxed font-bold italic">
                        Tuân thủ hướng dẫn từ Bộ Y tế để kết quả xét nghiệm đạt độ chính xác cao nhất.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                      {patientInstructions.map((inst, idx) => (
                        <div key={inst.id} className={`p-6 sm:p-10 rounded-[30px] sm:rounded-[45px] border-2 shadow-xl hover:shadow-2xl transition-all group ${
                          idx === 0 ? 'bg-blue-50 border-blue-100' :
                          idx === 1 ? 'bg-emerald-50 border-emerald-100' :
                          idx === 2 ? 'bg-amber-50 border-amber-100' :
                          'bg-rose-50 border-rose-100'
                        }`}>
                          <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                            <div className="p-4 sm:p-6 bg-white rounded-2xl sm:rounded-3xl shadow-md group-hover:scale-110 transition-transform">
                              {inst.icon}
                            </div>
                            <h3 className="text-2xl sm:text-4xl font-black text-slate-800 dark:text-white leading-tight">{inst.title}</h3>
                          </div>
                          <div className="space-y-6 sm:space-y-8">
                            {inst.steps.map((step, sidx) => (
                              <div key={sidx} className="relative pl-6 sm:pl-8 border-l-4 border-white">
                                <h4 className="font-black text-blue-700 dark:text-blue-400 text-lg sm:text-xl mb-1 sm:mb-2 uppercase tracking-wide">{step.title}</h4>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg font-bold" dangerouslySetInnerHTML={{ __html: step.desc }} />
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="p-tests"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="text-center mb-10 sm:mb-16">
                      <h2 className="fluid-title font-black text-blue-900 dark:text-white mb-4 sm:mb-6 uppercase tracking-tight">Danh mục nhóm bệnh lý</h2>
                      <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg sm:text-2xl leading-relaxed font-bold">
                        Tra cứu các chỉ số xét nghiệm quan trọng tương ứng với từng tình trạng sức khỏe của quý khách.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                      {diseaseGroups.map((group, idx) => (
                        <motion.div 
                          key={idx}
                          whileHover={{ y: -12 }}
                          className="group relative rounded-[30px] sm:rounded-[40px] overflow-hidden bg-white border-2 border-slate-100 shadow-lg hover:shadow-2xl flex flex-col h-full transition-all"
                        >
                          <div className="h-48 sm:h-56 overflow-hidden relative">
                            <img 
                              src={group.img} 
                              alt={group.title}
                              className="medical-img-3d object-cover transition-transform duration-700 group-hover:scale-110"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/95 p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl">
                              {group.icon}
                            </div>
                            <div className="absolute bottom-4 left-6 sm:bottom-6 sm:left-8">
                              <h3 className="text-xl sm:text-2xl font-black text-white mb-0 shadow-sm leading-tight">{group.title}</h3>
                            </div>
                          </div>
                          <div className="p-6 sm:p-8 flex-1 flex flex-col bg-sky-50/30">
                            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 line-clamp-2 italic font-medium leading-relaxed">
                              {group.description}
                            </p>
                            <div className="mt-auto">
                              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                                {group.tests.map((test, tidx) => (
                                  <span key={tidx} className="text-[10px] sm:text-xs font-black px-2 sm:px-3 py-1 bg-white text-blue-700 rounded-full border border-blue-100 shadow-sm">
                                    {test}
                                  </span>
                                ))}
                              </div>
                              <button 
                                onClick={() => setSelectedGroup(group)}
                                className="w-full py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white border-2 border-blue-200 text-blue-600 text-base sm:text-lg font-black flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm"
                              >
                                Xem chi tiết <ChevronRight className="w-4 h-4 sm:w-5 h-5" />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Detail Modal */}
                    <AnimatePresence>
                      {selectedGroup && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6">
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedGroup(null)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                          />
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-white dark:bg-slate-800 rounded-[30px] sm:rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                          >
                            <div className="h-48 sm:h-64 relative overflow-hidden">
                              <img 
                                src={selectedGroup.img} 
                                alt={selectedGroup.title} 
                                className="medical-img-3d w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                              <button 
                                onClick={() => setSelectedGroup(null)}
                                className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 bg-black/40 hover:bg-black/60 text-white rounded-xl sm:rounded-2xl backdrop-blur-md transition-all shadow-2xl"
                              >
                                <X className="w-6 h-6 sm:w-8 h-8" />
                              </button>
                              <div className="absolute bottom-4 left-6 sm:bottom-8 sm:left-10 flex items-center gap-4 sm:gap-6">
                                <div className="bg-white p-3 sm:p-5 rounded-2xl sm:rounded-[28px] shadow-2xl hidden sm:block">
                                  {React.cloneElement(selectedGroup.icon as React.ReactElement, { size: 32 })}
                                </div>
                                <h3 className="text-2xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-none shadow-sm">{selectedGroup.title}</h3>
                              </div>
                            </div>
                            
                            <div className="p-6 sm:p-12 space-y-8 sm:space-y-12">
                              <div>
                                <h4 className="text-blue-600 dark:text-blue-400 text-xs sm:text-lg font-black uppercase tracking-widest mb-4 sm:mb-6 border-b-4 border-blue-100 w-fit pb-1">Vai trò & Ý nghĩa lâm sàng</h4>
                                <p className="text-lg sm:text-3xl leading-relaxed font-serif italic font-medium bg-blue-50/50 p-6 sm:p-8 rounded-[25px] sm:rounded-[35px] border-2 border-blue-50">
                                  "{selectedGroup.meaning}"
                                </p>
                              </div>
                              
                              <div>
                                <h4 className="text-blue-600 dark:text-blue-400 text-xs sm:text-lg font-black uppercase tracking-widest mb-4 sm:mb-8 border-b-4 border-blue-100 w-fit pb-1">Các xét nghiệm tiêu biểu</h4>
                                <div className="flex flex-wrap gap-2 sm:gap-4">
                                  {selectedGroup.tests.map((testName, idx) => (
                                    <button 
                                      key={idx} 
                                      onClick={() => {
                                        // check if we have patient-friendly knowledge card first
                                        if (testKnowledgeBase[testName]) {
                                          setSelectedKnowledge(testKnowledgeBase[testName]);
                                        } else {
                                          // fallback to professional dictionary
                                          const found = labTests.find(lt => 
                                            lt.name.toLowerCase().includes(testName.toLowerCase().split('(')[0].trim())
                                          );
                                          if (found) {
                                            setSelectedTest({ ...found, ref: "", alert: "" });
                                          }
                                        }
                                      }}
                                      className="bg-slate-50 hover:bg-blue-600 hover:text-white border-2 border-slate-100 px-4 sm:px-8 py-3 sm:py-5 rounded-xl sm:rounded-[25px] text-base sm:text-xl font-black text-slate-800 flex items-center gap-2 sm:gap-4 transition-all shadow-sm active:scale-95 group/btn"
                                    >
                                      <div className="w-2 h-2 sm:w-3.5 h-3.5 rounded-full bg-blue-500 group-hover/btn:bg-white transition-colors" />
                                      {testName}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-slate-50 dark:bg-slate-900 px-6 sm:px-12 py-6 sm:py-8 flex justify-end">
                              <button 
                                onClick={() => setSelectedGroup(null)}
                                className="w-full sm:w-auto px-12 py-4 sm:py-5 bg-blue-600 text-white rounded-xl sm:rounded-[25px] text-xl sm:text-2xl font-black hover:bg-blue-700 transition-all shadow-2xl active:scale-95"
                              >
                                Đóng Cửa Sổ
                              </button>
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {activeTab === 'staff' && (
            <motion.div
              key="staff"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto px-6"
            >
              {/* Staff Sub-navigation */}
              <div className="flex justify-center mb-12">
                <div className="inline-flex flex-wrap justify-center p-1 bg-white/50 dark:bg-slate-800/50 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
                    <button 
                      onClick={() => setStaffSubTab('order')}
                      className={`px-4 sm:px-5 py-3 rounded-xl text-sm sm:text-base font-black transition-all border-2 ${staffSubTab === 'order' ? 'bg-indigo-600 border-indigo-600 text-white shadow-xl scale-105' : 'bg-white/0 text-slate-500 border-transparent hover:text-indigo-600'}`}
                    >
                      <Syringe className="w-4 h-4 sm:w-5 h-5 inline-block mr-1 sm:mr-2" /> Thứ tự Lấy mẫu
                    </button>
                    <button 
                      onClick={() => setStaffSubTab('collect')}
                      className={`px-4 sm:px-5 py-3 rounded-xl text-sm sm:text-base font-black transition-all border-2 ${staffSubTab === 'collect' ? 'bg-emerald-600 border-emerald-600 text-white shadow-xl scale-105' : 'bg-white/0 text-slate-500 border-transparent hover:text-emerald-600'}`}
                    >
                      <ClipboardList className="w-4 h-4 sm:w-5 h-5 inline-block mr-1 sm:mr-2" /> Quy chuẩn Thu thập
                    </button>
                    <button 
                      onClick={() => setStaffSubTab('policy')}
                      className={`px-4 sm:px-5 py-3 rounded-xl text-sm sm:text-base font-black transition-all border-2 ${staffSubTab === 'policy' ? 'bg-rose-600 border-rose-600 text-white shadow-xl scale-105' : 'bg-white/0 text-slate-500 border-transparent hover:text-rose-600'}`}
                    >
                      <TriangleAlert className="w-4 h-4 sm:w-5 h-5 inline-block mr-1 sm:mr-2" /> Nhận/Từ chối Mẫu
                    </button>
                    <button 
                      onClick={() => setStaffSubTab('dictionary')}
                      className={`px-4 sm:px-5 py-3 rounded-xl text-sm sm:text-base font-black transition-all border-2 ${staffSubTab === 'dictionary' ? 'bg-amber-600 border-amber-600 text-white shadow-xl scale-105' : 'bg-white/0 text-slate-500 border-transparent hover:text-amber-600'}`}
                    >
                      <Search className="w-4 h-4 sm:w-5 h-5 inline-block mr-1 sm:mr-2" /> Từ điển Xét nghiệm
                    </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {staffSubTab === 'order' && (
                  <motion.div key="s-order" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h2 className="fluid-title font-black text-blue-900 dark:text-white mb-6 sm:mb-10 border-l-[6px] sm:border-l-8 border-blue-600 pl-4 sm:pl-6 uppercase tracking-tight">Thứ Tự Bơm Máu Chuẩn</h2>
                    
                    {/* Desktop View Table */}
                    <div className="hidden lg:block overflow-x-auto rounded-[25px] sm:rounded-[40px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-2xl">
                      <table className="w-full text-left border-collapse min-w-[800px]">
                        <thead className="bg-slate-100 dark:bg-slate-900/80">
                          <tr>
                            <th className="px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg font-black text-slate-800 uppercase tracking-wide">Thứ tự</th>
                            <th className="px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg font-black text-slate-800 uppercase tracking-wide">Loại ống / Màu nắp</th>
                            <th className="px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg font-black text-slate-800 uppercase tracking-wide">Xét nghiệm tương ứng</th>
                            <th className="px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg font-black text-slate-800 uppercase tracking-wide">Thể tích</th>
                            <th className="px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-lg font-black text-slate-800 uppercase tracking-wide">Lắc trộn</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                          {[
                            { num: 1, type: 'Chai cấy máu', color: 'Trắng', colorClass: 'bg-white', textClass: 'text-slate-900 dark:text-slate-100', tests: 'Vi sinh (Cấy máu)', vol: 'NL: 8-10ml; Trẻ em: 3-5ml', mix: '3 - 5 lần' },
                            { num: 2, type: 'Sodium Citrate 3.8% (Nắp xanh lá cây)', color: 'Xanh lá cây', colorClass: 'bg-green-500', textClass: 'text-green-800 dark:text-green-300', tests: 'Đông máu', vol: 'Đúng 2 ml (bắt buộc)', mix: '5 - 8 lần' },
                            { num: 3, type: 'Sodium Citrate 1:4 (Đen dài)', color: 'Đen dài', colorClass: 'bg-slate-800', textClass: 'text-slate-900 dark:text-slate-200', tests: 'Máu lắng (ESR)', vol: '1.6 ml', mix: '5 - 8 lần' },
                            { num: 4, type: 'Serum (Nắp đỏ)', color: 'Đỏ', colorClass: 'bg-red-600', textClass: 'text-red-800 dark:text-red-300', tests: 'Vi sinh, Miễn dịch, Hóa sinh', vol: '2 - 3 ml', mix: '3 - 5 lần' },
                            { num: 5, type: 'Heparin (Nắp Đen)', color: 'Đen', colorClass: 'bg-slate-950', textClass: 'text-slate-950 dark:text-white', tests: 'Hóa sinh, Miễn dịch', vol: '2 ml', mix: '5 - 8 lần' },
                            { num: 6, type: 'EDTA (Nắp Xanh dương)', color: 'Xanh dương', colorClass: 'bg-blue-600', textClass: 'text-blue-800 dark:text-blue-300', tests: 'Công thức máu, HbA1c', vol: '2 ml', mix: '5 - 8 lần' },
                          ].map((row, i) => (
                            <tr key={i} className={`hover:bg-blue-50/50 dark:hover:bg-slate-900/50 transition-all ${row.textClass}`}>
                              <td className="px-4 sm:px-8 py-4 sm:py-8 text-xl sm:text-3xl font-black">{row.num}</td>
                              <td className="px-4 sm:px-8 py-4 sm:py-8">
                                <div className="text-lg sm:text-2xl font-black leading-tight mb-2">{row.type}</div>
                                <div className="flex items-center gap-2 sm:gap-4">
                                  <div className={`w-12 sm:w-20 h-4 sm:h-6 rounded-lg border-2 border-slate-300 shadow-sm ${row.colorClass}`} />
                                  <span className="text-[10px] sm:text-sm uppercase font-black tracking-widest opacity-80">{row.color}</span>
                                </div>
                              </td>
                              <td className="px-4 sm:px-8 py-4 sm:py-8 text-base sm:text-xl font-bold">{row.tests}</td>
                              <td className="px-4 sm:px-8 py-4 sm:py-8 text-lg sm:text-2xl font-black text-indigo-700 dark:text-indigo-400">{row.vol}</td>
                              <td className="px-4 sm:px-8 py-4 sm:py-8 text-base sm:text-xl font-bold">{row.mix}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile Card List View */}
                    <div className="lg:hidden space-y-6">
                      {[
                        { num: 1, type: 'Chai cấy máu', color: 'Trắng', colorClass: 'bg-white', tests: 'Vi sinh (Cấy máu)', vol: 'NL: 8-10ml; Trẻ em: 3-5ml', mix: '3 - 5 lần' },
                        { num: 2, type: 'Sodium Citrate 3.8%', color: 'Xanh lá cây', colorClass: 'bg-green-500', tests: 'Đông máu', vol: 'Đúng 2 ml', mix: '5 - 8 lần' },
                        { num: 3, type: 'Sodium Citrate 1:4', color: 'Đen dài', colorClass: 'bg-slate-800', tests: 'Máu lắng (ESR)', vol: '1.6 ml', mix: '5 - 8 lần' },
                        { num: 4, type: 'Serum (Nắp đỏ)', color: 'Đỏ', colorClass: 'bg-red-600', tests: 'Vi sinh, Miễn dịch, Hóa sinh', vol: '2 - 3 ml', mix: '3 - 5 lần' },
                        { num: 5, type: 'Heparin (Nắp Đen)', color: 'Đen', colorClass: 'bg-slate-950', tests: 'Hóa sinh, Miễn dịch', vol: '2 ml', mix: '5 - 8 lần' },
                        { num: 6, type: 'EDTA (Xanh dương)', color: 'Xanh dương', colorClass: 'bg-blue-600', tests: 'Công thức máu, HbA1c', vol: '2 ml', mix: '5 - 8 lần' },
                      ].map((row, i) => (
                        <div key={i} className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xl border border-slate-100 dark:border-slate-700 relative overflow-hidden">
                          <div className="absolute top-0 right-0 p-4 bg-slate-50 dark:bg-slate-900 text-3xl font-black text-slate-200 dark:text-slate-700">#{row.num}</div>
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`w-12 h-12 rounded-xl border-2 border-slate-200 shadow-inner ${row.colorClass}`} />
                            <div>
                              <h3 className="text-xl font-black text-slate-800 dark:text-slate-100">{row.type}</h3>
                              <p className="text-xs uppercase font-bold tracking-widest text-slate-400">{row.color}</p>
                            </div>
                          </div>
                          <div className="space-y-4 pt-4 border-t border-slate-50 dark:border-slate-700">
                            <div>
                                <p className="text-[10px] uppercase font-black text-blue-600 mb-1">Xét nghiệm</p>
                                <p className="text-base font-bold text-slate-700 dark:text-slate-300">{row.tests}</p>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-[10px] uppercase font-black text-indigo-600 mb-1">Thể tích</p>
                                    <p className="text-sm font-black text-indigo-700 dark:text-indigo-400">{row.vol}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] uppercase font-black text-emerald-600 mb-1">Lắc trộn</p>
                                    <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{row.mix}</p>
                                </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {staffSubTab === 'collect' && (
                  <motion.div key="s-collect" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h2 className="fluid-title font-black text-blue-900 dark:text-white mb-6 sm:mb-10 border-l-[6px] sm:border-l-8 border-blue-600 pl-4 sm:pl-6 uppercase tracking-tight">Hướng Dẫn Thu Thập Bệnh Phẩm</h2>
                    
                    {/* Desktop Table View */}
                    <div className="hidden lg:block overflow-x-auto rounded-[25px] sm:rounded-[40px] border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-2xl">
                      <table className="w-full text-left border-collapse min-w-[1000px]">
                        <thead className="bg-slate-100 dark:bg-slate-900/80">
                          <tr className="whitespace-nowrap">
                            <th className="px-4 sm:px-6 py-4 sm:py-6 text-sm sm:text-lg font-black text-slate-800 uppercase tracking-wide">Loại bệnh phẩm</th>
                            <th className="px-4 sm:px-6 py-4 sm:py-6 text-sm sm:text-lg font-black text-slate-800 uppercase tracking-wide">Dụng cụ chứa</th>
                            <th className="px-4 sm:px-6 py-4 sm:py-6 text-sm sm:text-lg font-black text-slate-800 uppercase tracking-wide">Yêu cầu / Cách lấy</th>
                            <th className="px-4 sm:px-6 py-4 sm:py-6 text-sm sm:text-lg font-black text-slate-800 uppercase tracking-wide">Thể tích</th>
                            <th className="px-4 sm:px-6 py-4 sm:py-6 text-sm sm:text-lg font-black text-slate-800 uppercase tracking-wide">Vận chuyển</th>
                            <th className="px-4 sm:px-6 py-4 sm:py-6 text-sm sm:text-lg font-black text-slate-800 uppercase tracking-wide">Từ chối</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                          {[
                            { type: 'Máu tĩnh mạch', container: 'Ống đỏ/chống đông', notes: 'Nhịn đói 8h. Lắc 5-8 lần. Không bọt khí.', vol: 'Tùy ống', time: 'Sớm nhất', reject: 'Tán huyết; Cục đông; Sai thể tích' },
                            { type: 'Khí máu động mạch', container: 'Bơm tiêm Heparin', notes: 'Không bọt khí, trộn đều liên tục.', vol: '0.5 - 1 ml', time: '< 30p', reject: '-' },
                            { type: 'Máu (Cấy máu)', container: 'Chai cấy máu', notes: 'Lấy trước khi sốt cao. Lắc chai 3-5 lần.', vol: '8-10ml', time: '< 30p', reject: 'Thiếu thể tích; Sai bảo quản' },
                            { type: 'Nước tiểu (Cấy)', container: 'Lọ vô khuẩn đỏ', notes: 'Lấy giữa dòng / Catheter. Vệ sinh kỹ.', vol: '10 ml', time: '< 30p', reject: '> 2h; Mọc >3 loại VK' },
                            { type: 'Dịch (Não tủy, phổi...)', container: 'Lọ vô khuẩn', notes: 'BS thực hiện. Lấy trước khi dùng KS.', vol: '3-10 ml', time: '< 30p', reject: 'Dịch bị đông; Ống dẫn lưu' },
                            { type: 'Mủ / Ngoáy họng', container: 'Tăm bông vô khuẩn', notes: 'Dùng que quệt tổn thương/amidam.', vol: '2 que', time: '< 30p', reject: 'Tăm bông bị khô' },
                            { type: 'Phân / Đàm', container: 'Lọ nhựa sạch', notes: 'Lấy vùng nhầy máu / Đàm đặc sáng sớm.', vol: '5g / Đủ XN', time: '< 30p', reject: 'Lấy nhầm nước bọt' },
                          ].map((row, i) => (
                            <tr key={i} className="hover:bg-blue-50/50 transition-all">
                              <td className="px-4 sm:px-6 py-6 sm:py-8 text-lg sm:text-2xl font-black text-slate-900 dark:text-slate-100 leading-tight">{row.type}</td>
                              <td className="px-4 sm:px-6 py-6 sm:py-8 text-base sm:text-xl font-bold text-indigo-700 dark:text-indigo-400">{row.container}</td>
                              <td className="px-4 sm:px-6 py-6 sm:py-8 text-sm sm:text-lg font-medium text-slate-600 dark:text-slate-400 italic leading-relaxed">{row.notes}</td>
                              <td className="px-4 sm:px-6 py-6 sm:py-8 text-base sm:text-xl font-black text-slate-800 dark:text-slate-200">{row.vol}</td>
                              <td className="px-4 sm:px-6 py-6 sm:py-8 text-base sm:text-xl font-black text-blue-700 dark:text-blue-400">{row.time}</td>
                              <td className="px-4 sm:px-6 py-6 sm:py-8 text-sm sm:text-lg font-black text-red-600 dark:text-red-400">{row.reject}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Mobile Card List View */}
                    <div className="lg:hidden space-y-6">
                      {[
                        { type: 'Máu tĩnh mạch', container: 'Ống đỏ/chống đông', notes: 'Nhịn đói 8h. Lắc 5-8 lần. Không bọt khí.', vol: 'Tùy ống', time: 'Sớm nhất', reject: 'Tán huyết; Cục đông; Sai thể tích' },
                        { type: 'Khí máu động mạch', container: 'Bơm tiêm Heparin', notes: 'Không bọt khí, trộn đều liên tục.', vol: '0.5 - 1 ml', time: '< 30p', reject: '-' },
                        { type: 'Máu (Cấy máu)', container: 'Chai cấy máu', notes: 'Lấy trước khi sốt cao. Lắc chai 3-5 lần.', vol: '8-10ml', time: '< 30p', reject: 'Thiếu thể tích; Sai bảo quản' },
                        { type: 'Nước tiểu (Cấy)', container: 'Lọ vô khuẩn đỏ', notes: 'Lấy giữa dòng / Catheter. Vệ sinh kỹ.', vol: '10 ml', time: '< 30p', reject: '> 2h; Mọc >3 loại VK' },
                        { type: 'Dịch (Não tủy, phổi...)', container: 'Lọ vô khuẩn', notes: 'BS thực hiện. Lấy trước khi dùng KS.', vol: '3-10 ml', time: '< 30p', reject: 'Dịch bị đông; Ống dẫn lưu' },
                        { type: 'Mủ / Ngoáy họng', container: 'Tăm bông vô khuẩn', notes: 'Dùng que quệt tổn thương/amidam.', vol: '2 que', time: '< 30p', reject: 'Tăm bông bị khô' },
                        { type: 'Phân / Đàm', container: 'Lọ nhựa sạch', notes: 'Lấy vùng nhầy máu / Đàm đặc sáng sớm.', vol: '5g / Đủ XN', time: '< 30p', reject: 'Lấy nhầm nước bọt' },
                      ].map((row, i) => (
                        <div key={i} className="bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-xl border border-slate-100 dark:border-slate-700">
                          <div className="flex justify-between items-start mb-6">
                            <h3 className="text-xl font-black text-blue-900 dark:text-blue-400 uppercase leading-none">{row.type}</h3>
                            <span className="text-[10px] font-black px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 rounded-lg">{row.container}</span>
                          </div>
                          <div className="space-y-4">
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 rounded-2xl italic text-slate-600 dark:text-slate-400 text-sm font-medium border border-slate-100 dark:border-slate-700">
                              "{row.notes}"
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="text-center p-2 bg-blue-50/50 dark:bg-blue-900/20 rounded-xl">
                                    <p className="text-[8px] uppercase font-black text-blue-500 mb-1">Thể tích</p>
                                    <p className="text-xs font-black text-slate-800 dark:text-slate-200">{row.vol}</p>
                                </div>
                                <div className="text-center p-2 bg-emerald-50/50 dark:bg-emerald-900/20 rounded-xl">
                                    <p className="text-[8px] uppercase font-black text-emerald-500 mb-1">Cần Gửi</p>
                                    <p className="text-xs font-black text-slate-800 dark:text-slate-200">{row.time}</p>
                                </div>
                                <div className="text-center p-2 bg-rose-50/50 dark:bg-rose-900/20 rounded-xl">
                                    <p className="text-[8px] uppercase font-black text-rose-500 mb-1">Lỗi Loại</p>
                                    <p className="text-[10px] font-black text-rose-600 dark:text-rose-400 leading-tight">{row.reject}</p>
                                </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {staffSubTab === 'policy' && (
                  <motion.div key="s-policy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <h2 className="text-2xl sm:text-4xl font-black text-blue-900 dark:text-white mb-6 sm:mb-10 border-l-[6px] sm:border-l-8 border-blue-600 pl-4 sm:pl-6 uppercase tracking-tight">Tiêu Chuẩn Chấp Nhận & Từ Chối Mẫu</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
                      <div className="glass dark:bg-slate-800 p-6 sm:p-10 rounded-[30px] sm:rounded-[40px] border-l-[12px] sm:border-l-[16px] border-green-500 shadow-2xl hover:scale-[1.02] transition-transform">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-green-800 dark:text-green-400 font-black text-xl sm:text-2xl uppercase tracking-tighter">
                          <CheckCircle2 className="w-6 h-6 sm:w-8 h-8" /> 1. Chấp nhận chung
                        </div>
                        <ul className="space-y-3 sm:space-y-4 text-slate-700 dark:text-slate-300 text-base sm:text-xl font-bold leading-relaxed">
                          <li>• Phiếu chỉ định đầy đủ thông tin (Họ tên, năm sinh, địa chỉ, chẩn đoán, mã code).</li>
                          <li>• Thông tin SID, tên, năm sinh trên phiếu và ống mẫu <strong className="text-green-600">khớp nhau tuyệt đối</strong>.</li>
                          <li>• Đúng loại mẫu, đủ lượng, đúng dụng cụ, không vi phạm bảo quản.</li>
                        </ul>
                      </div>

                      <div className="glass dark:bg-slate-800 p-6 sm:p-10 rounded-[30px] sm:rounded-[40px] border-l-[12px] sm:border-l-[16px] border-red-500 shadow-2xl hover:scale-[1.02] transition-transform">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-red-800 dark:text-red-400 font-black text-xl sm:text-2xl uppercase tracking-tighter">
                          <XCircle className="w-6 h-6 sm:w-8 h-8" /> 2. Mẫu <span className="text-white bg-red-600 px-2 rounded-lg mx-1">KHÔNG</span> Đạt
                        </div>
                        <ul className="space-y-3 sm:space-y-4 text-slate-700 dark:text-slate-300 text-base sm:text-xl font-bold leading-relaxed">
                          <li>• Khoa Xét Nghiệm <strong className="text-red-600">từ chối nhận mẫu</strong>.</li>
                          <li>• Thông báo lý do từ chối và hướng xử lý (lấy lại, bổ sung lại tin).</li>
                          <li>• Ghi nhận sự việc vào công cụ theo dõi <span className="underline decoration-4 decoration-red-400">"Sổ từ chối mẫu"</span>.</li>
                        </ul>
                      </div>

                      <div className="glass dark:bg-slate-800 p-6 sm:p-10 rounded-[30px] sm:rounded-[40px] border-l-[12px] sm:border-l-[16px] border-orange-500 shadow-2xl hover:scale-[1.02] transition-transform">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-orange-800 dark:text-orange-400 font-black text-xl sm:text-2xl uppercase tracking-tighter">
                          <AlertCircle className="w-6 h-6 sm:w-8 h-8" /> 3. KHÔNG đạt (Khó lấy lại)
                        </div>
                        <p className="mb-4 sm:mb-6 text-orange-600 dark:text-orange-400 font-black text-lg sm:text-2xl italic">Dịch não tủy, Dịch khớp...</p>
                        <ul className="space-y-3 sm:space-y-4 text-slate-700 dark:text-slate-300 text-base sm:text-xl font-bold leading-relaxed">
                          <li>• Bác sĩ phải <strong className="text-orange-600 uppercase">ghi rõ lý do và ký xác nhận</strong> vào phiếu.</li>
                          <li>• KXN xử lý và ghi chú tình trạng mẫu lên phiếu KQ.</li>
                          <li>• Kết quả chỉ trả khi nhận đủ phiếu chỉ định đúng chuẩn.</li>
                        </ul>
                      </div>

                      <div className="glass dark:bg-slate-800 p-6 sm:p-10 rounded-[30px] sm:rounded-[40px] border-l-[12px] sm:border-l-[16px] border-blue-500 shadow-2xl hover:scale-[1.02] transition-transform">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-blue-800 dark:text-blue-400 font-black text-xl sm:text-2xl uppercase tracking-tighter">
                          <Zap className="w-6 h-6 sm:w-8 h-8" /> 4. Cấp cứu / Khẩn
                        </div>
                        <ul className="space-y-3 sm:space-y-4 text-slate-700 dark:text-slate-300 text-base sm:text-xl font-bold leading-relaxed">
                          <li>• Vẫn tiến hành làm xét nghiệm dù thiếu phiếu chuẩn.</li>
                          <li>• Trả kết quả qua điện thoại nếu rơi vào <strong className="text-red-600 animate-pulse">ngưỡng báo động</strong>.</li>
                          <li>• Bản giấy chỉ trả khi nhận được phiếu chỉ định chuẩn.</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}

                {staffSubTab === 'dictionary' && (
                  <motion.div key="s-dict" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-[#f0f4f8] dark:bg-slate-950 p-4 sm:p-10 rounded-[3rem] shadow-inner border border-slate-100 dark:border-slate-900 border-opacity-50">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
                      <div>
                        <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-2 underline decoration-blue-500 decoration-4 underline-offset-8">Từ điển Xét nghiệm</h2>
                        <p className="text-slate-500 dark:text-slate-400 text-base sm:text-lg mt-2 sm:mt-4 font-serif italic">SOP & Dữ liệu tham chiếu chuẩn kỹ thuật.</p>
                      </div>
                      <div className="flex gap-2 w-full md:w-auto">
                        <div className="relative flex-1 md:w-96">
                          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                          <input 
                            type="text" 
                            placeholder="Tìm xét nghiệm..."
                            className="w-full pl-12 pr-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all shadow-sm text-sm sm:text-base"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                          />
                        </div>
                        {/* Mobile Filter Button toggle */}
                        <div className="lg:hidden relative">
                           <button 
                            onClick={() => setShowGroupFilter(!showGroupFilter)}
                            className={`h-full px-4 rounded-xl border-2 transition-all flex items-center justify-center ${selectedCategory ? 'bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-500/30' : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'}`}
                           >
                              <Filter className="w-5 h-5" />
                           </button>

                           <AnimatePresence>
                             {showGroupFilter && (
                               <>
                                 <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setShowGroupFilter(false)} />
                                 <motion.div 
                                   initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                   animate={{ opacity: 1, y: 0, scale: 1 }}
                                   exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                   className="absolute top-full right-0 mt-2 z-50 bg-white dark:bg-slate-800 rounded-[24px] shadow-2xl border-4 border-white dark:border-slate-700 overflow-hidden min-w-[280px] text-slate-800 dark:text-white"
                                 >
                                   <div className="p-3 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 flex items-center justify-between">
                                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Chọn nhóm lọc</span>
                                   </div>
                                   <div className="max-h-80 overflow-y-auto p-2 space-y-1">
                                      <button 
                                        onClick={() => { setSelectedCategory(null); setShowGroupFilter(false); }}
                                        className={`w-full text-center px-5 py-4 rounded-xl text-sm font-black transition-all ${
                                          !selectedCategory 
                                            ? 'bg-blue-600 text-white shadow-md' 
                                            : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                                        }`}
                                      >
                                        --- TẤT CẢ XÉT NGHIỆM ---
                                      </button>
                                      {uniqueGroups.map(group => {
                                        const g = group.toLowerCase();
                                        const colorClass = 
                                          g === 'sinh hóa' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                                          g === 'huyết học' ? 'bg-purple-100 text-purple-700 border-purple-200' :
                                          g === 'miễn dịch' ? 'bg-orange-100 text-orange-700 border-orange-200' :
                                          g === 'đông máu' ? 'bg-red-100 text-red-700 border-red-200' :
                                          g === 'vi sinh' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' :
                                          g === 'nước tiểu & dịch' ? 'bg-cyan-100 text-cyan-700 border-cyan-200' :
                                          g === 'truyền máu' ? 'bg-rose-100 text-rose-700 border-rose-200' :
                                          'bg-slate-100 text-slate-700 border-slate-200';

                                        return (
                                          <button 
                                            key={group}
                                            onClick={() => { setSelectedCategory(group); setShowGroupFilter(false); }}
                                            className={`w-full text-left px-5 py-4 rounded-xl text-sm font-black transition-all border ${
                                              selectedCategory === group 
                                                ? 'bg-blue-600 text-white border-blue-500 shadow-md' 
                                                : `${colorClass} dark:opacity-90`
                                            }`}
                                          >
                                            {group.toUpperCase()}
                                          </button>
                                        );
                                      })}
                                   </div>
                                 </motion.div>
                               </>
                             )}
                           </AnimatePresence>
                        </div>
                      </div>
                    </div>

                    {/* Dictionary Content */}
                    <div className="hidden lg:block rounded-[2.5rem] border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30 overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] backdrop-blur-md p-2">
                      <div className="rounded-[2rem] overflow-hidden border border-white dark:border-slate-800 bg-white/70 dark:bg-slate-800/70">
                        <table className="w-full text-left border-collapse table-fixed min-w-[1000px]">
                          <thead className="bg-slate-900 dark:bg-slate-950 text-slate-200">
                            <tr>
                              <th className="w-[20%] px-6 py-6 text-xs font-black uppercase tracking-[0.2em] border-b border-slate-800">
                                <div className="flex items-center gap-2">
                                  <FlaskConical className="w-5 h-5 text-cyan-400" />
                                  Tên Xét nghiệm
                                </div>
                              </th>
                              <th className="w-[12%] px-6 py-6 text-xs font-black uppercase tracking-[0.2em] border-b border-slate-800 text-center relative">
                                <button 
                                  onClick={() => setShowGroupFilter(!showGroupFilter)}
                                  className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl transition-all border-2 font-black shadow-lg ${
                                    selectedCategory 
                                      ? 'bg-blue-500 text-white border-blue-400 shadow-blue-500/30' 
                                      : 'bg-cyan-400 text-blue-950 border-cyan-300 hover:bg-cyan-300 shadow-cyan-400/40 hover:scale-[1.02] active:scale-95'
                                  }`}
                                >
                                  <Filter className="w-5 h-5 hidden sm:block" />
                                  <span>{selectedCategory ? selectedCategory : 'PHÂN LOẠI'}</span>
                                  <ChevronDown className={`w-5 h-5 transition-transform ${showGroupFilter ? 'rotate-180' : ''}`} />
                                </button>

                                <AnimatePresence>
                                  {showGroupFilter && (
                                    <>
                                      <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setShowGroupFilter(false)} />
                                      <motion.div 
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        className="absolute top-full left-0 mt-3 z-50 bg-white dark:bg-slate-800 rounded-[24px] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 border-white dark:border-slate-700 overflow-hidden min-w-[280px] text-slate-800 dark:text-white"
                                      >
                                        <div className="p-3 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 flex items-center justify-between">
                                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 pl-2">Lọc theo nhóm chuyên môn</span>
                                          <Filter className="w-3 h-3 text-slate-300" />
                                        </div>
                                        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
                                          <button 
                                            onClick={() => { setSelectedCategory(null); setShowGroupFilter(false); }}
                                            className={`w-full text-center px-5 py-3 rounded-xl text-sm font-black transition-all ${
                                              !selectedCategory 
                                                ? 'bg-blue-600 text-white shadow-md' 
                                                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-blue-900/20'
                                            }`}
                                          >
                                            --- TẤT CẢ XÉT NGHIỆM ---
                                          </button>
                                          {uniqueGroups.map(group => {
                                            const g = group.toLowerCase();
                                            const colorClass = 
                                              g === 'sinh hóa' ? 'bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200' :
                                              g === 'huyết học' ? 'bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200' :
                                              g === 'miễn dịch' ? 'bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200' :
                                              g === 'đông máu' ? 'bg-red-100 text-red-700 border-red-200 hover:bg-red-200' :
                                              g === 'vi sinh' ? 'bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200' :
                                              g === 'nước tiểu & dịch' ? 'bg-cyan-100 text-cyan-700 border-cyan-200 hover:bg-cyan-200' :
                                              g === 'truyền máu' ? 'bg-rose-100 text-rose-700 border-rose-200 hover:bg-rose-200' :
                                              'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200';

                                            return (
                                              <button 
                                                key={group}
                                                onClick={() => { setSelectedCategory(group); setShowGroupFilter(false); }}
                                                className={`w-full text-left px-5 py-3 rounded-xl text-xs sm:text-sm font-black transition-all border ${
                                                  selectedCategory === group 
                                                    ? 'bg-blue-600 text-white border-blue-500 shadow-md ring-2 ring-blue-500/20' 
                                                    : `${colorClass} dark:opacity-90`
                                                }`}
                                              >
                                                {group.toUpperCase()}
                                              </button>
                                            );
                                          })}
                                        </div>
                                      </motion.div>
                                    </>
                                  )}
                                </AnimatePresence>
                              </th>
                              <th className="w-[12%] px-6 py-6 text-xs font-black uppercase tracking-[0.2em] border-b border-slate-800 text-center">
                                <div className="flex items-center justify-center gap-2 text-emerald-400">
                                  <Clock className="w-5 h-5 sm:w-6 h-6" />
                                  Trả Kết Quả
                                </div>
                              </th>
                              <th className="w-[26%] px-6 py-6 text-xs font-black uppercase tracking-[0.2em] border-b border-slate-800">Khoảng Tham Chiếu</th>
                              <th className="w-[30%] px-6 py-6 text-xs font-black uppercase tracking-[0.2em] border-b border-slate-800 text-rose-300">CẢNH BÁO LÂM SÀNG</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 dark:divide-slate-700 bg-white dark:bg-slate-800">
                            {filteredTests.map((test) => (
                              <tr 
                                key={test.name}
                                className="hover:bg-blue-50/50 dark:hover:bg-blue-900/10 transition-all cursor-pointer border-b border-slate-50 dark:border-slate-800"
                                onClick={() => setSelectedTest(test)}
                              >
                                <td className="px-4 sm:px-6 py-4 sm:py-6 font-black text-indigo-900 dark:text-indigo-200 text-lg sm:text-xl leading-tight">
                                  {test.name}
                                </td>
                                <td className="px-4 sm:px-6 py-4 sm:py-6 text-center">
                                  <div className="flex justify-center">
                                    <span className={`text-xs sm:text-sm font-black px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-xl uppercase tracking-tight shadow-sm border inline-flex flex-col items-center justify-center text-center leading-[1.15] min-w-[100px] ${
                                      test.group.toLowerCase() === 'sinh hóa' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                                      test.group.toLowerCase() === 'huyết học' ? 'bg-purple-100 text-purple-700 border-purple-200' :
                                      test.group.toLowerCase() === 'miễn dịch' ? 'bg-orange-100 text-orange-700 border-orange-200' :
                                      test.group.toLowerCase() === 'đông máu' ? 'bg-red-100 text-red-700 border-red-200' :
                                      test.group.toLowerCase() === 'vi sinh' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' :
                                      test.group.toLowerCase() === 'nước tiểu & dịch' ? 'bg-cyan-100 text-cyan-700 border-cyan-200' :
                                      test.group.toLowerCase() === 'sinh học phân tử' ? 'bg-indigo-100 text-indigo-700 border-indigo-200' :
                                      test.group.toLowerCase() === 'truyền máu' ? 'bg-rose-100 text-rose-700 border-rose-200' :
                                      'bg-slate-100 text-slate-700 border-slate-200'
                                    }`}>
                                      {test.group.toLowerCase() === 'nước tiểu & dịch' ? (
                                        <>
                                          <span>NƯỚC TIỂU</span>
                                          <span>& DỊCH</span>
                                        </>
                                      ) : test.group.toLowerCase() === 'sinh học phân tử' ? (
                                        <>
                                          <span>SINH HỌC</span>
                                          <span>PHÂN TỬ</span>
                                        </>
                                      ) : test.group}
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-6 text-slate-500 dark:text-slate-400 font-bold text-xs text-center">
                                  <div className="bg-slate-50 dark:bg-slate-900/50 py-1 rounded-lg border border-slate-100 dark:border-slate-800">
                                    {test.time}
                                  </div>
                                </td>
                                <td className="px-6 py-6 font-mono text-[10px] font-bold text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed tracking-tight">
                                  {test.ref}
                                </td>
                                <td className="px-6 py-6 bg-rose-50/20 dark:bg-rose-950/10">
                                  <p className="text-[11px] font-bold text-rose-700 dark:text-rose-300 whitespace-pre-wrap leading-relaxed">
                                    {test.alert}
                                  </p>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Mobile Card List View */}
                    <div className="lg:hidden space-y-4">
                      {filteredTests.map((test) => (
                        <div 
                          key={test.name}
                          onClick={() => setSelectedTest(test)}
                          className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-100 dark:border-slate-700 shadow-xl active:scale-95 transition-all"
                        >
                          <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-black text-indigo-900 dark:text-indigo-200 leading-tight">{test.name}</h3>
                            <span className={`text-[10px] font-black px-3 py-1.5 rounded-xl uppercase border text-center inline-flex flex-col items-center justify-center leading-[1.15] min-w-[70px] ${
                              test.group.toLowerCase() === 'sinh hóa' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                              test.group.toLowerCase() === 'huyết học' ? 'bg-purple-50 text-purple-600 border-purple-100' :
                              test.group.toLowerCase() === 'miễn dịch' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                              test.group.toLowerCase() === 'nước tiểu & dịch' ? 'bg-cyan-50 text-cyan-600 border-cyan-100' :
                              test.group.toLowerCase() === 'sinh học phân tử' ? 'bg-indigo-50 text-indigo-600 border-indigo-100' :
                              test.group.toLowerCase() === 'đông máu' ? 'bg-red-50 text-red-600 border-red-100' :
                              test.group.toLowerCase() === 'vi sinh' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' :
                              test.group.toLowerCase() === 'truyền máu' ? 'bg-rose-50 text-rose-600 border-rose-100' :
                              'bg-slate-50 text-slate-600 border-slate-100'
                            }`}>
                              {test.group.toLowerCase() === 'nước tiểu & dịch' ? (
                                <>
                                  <span>NƯỚC TIỂU</span>
                                  <span>& DỊCH</span>
                                </>
                              ) : test.group.toLowerCase() === 'sinh học phân tử' ? (
                                <>
                                  <span>SINH HỌC</span>
                                  <span>PHÂN TỬ</span>
                                </>
                              ) : test.group}
                            </span>
                          </div>
                          <div className="space-y-4 mt-4 pt-4 border-t border-slate-50 dark:border-slate-700">
                             <div className="flex items-center gap-3 text-slate-500 text-sm font-bold">
                                <Clock className="w-5 h-5 text-emerald-500" /> Trả Kết Quả: <span className="text-slate-800 dark:text-slate-200">{test.time}</span>
                             </div>
                             <div className="bg-slate-50 dark:bg-slate-900/40 p-4 rounded-2xl">
                                <p className="text-[10px] uppercase font-black text-slate-400 mb-2">Khoảng Tham Chiếu</p>
                                <div className="text-[10px] sm:text-xs font-mono font-bold text-slate-800 dark:text-slate-200 leading-tight whitespace-pre-wrap">
                                  {test.ref}
                                </div>
                             </div>
                             {test.alert && (
                               <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-2xl border border-red-100 dark:border-red-900/50">
                                  <p className="text-[10px] uppercase font-black text-red-500 mb-2">Cảnh Báo Lâm Sàng</p>
                                  <p className="text-sm font-black text-red-600 dark:text-red-400 leading-relaxed">{test.alert}</p>
                               </div>
                             )}
                          </div>
                        </div>
                      ))}
                    </div>

                    <AnimatePresence>
                      {selectedTest && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                          <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedTest(null)}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                          />
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className={`relative w-full max-w-2xl bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-700 max-h-[90vh] overflow-y-auto ${selectedTest.isFeatured ? 'ring-8 ring-blue-500/5' : ''}`}
                          >
                            <div className={`${selectedTest.isFeatured ? 'bg-gradient-to-tr from-[#a18cd1] 0% via-[#fbc2eb] 100% shadow-inner' : 'bg-blue-600'} p-6 sm:p-10 text-white relative overflow-hidden`}>
                              {/* Soft decorative blur circles for Korean style */}
                              {selectedTest.isFeatured && (
                                <>
                                  <div className="absolute top-[-20%] left-[-10%] w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse" />
                                  <div className="absolute bottom-[-10%] right-[-5%] w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl" />
                                </>
                              )}
                              
                              <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className="bg-white/30 p-3 sm:p-4 rounded-2xl backdrop-blur-xl border border-white/40 shadow-xl">
                                  <FlaskConical className="w-8 h-8 sm:w-10 h-10 drop-shadow-md text-white" />
                                </div>
                                <button 
                                  onClick={() => setSelectedTest(null)}
                                  className="p-2 sm:p-3 hover:bg-white/30 rounded-2xl transition-all duration-300 backdrop-blur-md active:scale-90"
                                >
                                  <X className="w-6 h-6 sm:w-7 h-7" />
                                </button>
                              </div>
                              <h3 className="text-2xl sm:text-4xl font-black mb-3 tracking-tighter leading-tight uppercase drop-shadow-sm relative z-10 italic">{selectedTest.name}</h3>
                              <div className="flex items-center gap-3 relative z-10">
                                <span className="bg-white/40 border border-white/50 px-4 py-1.5 rounded-2xl text-[10px] sm:text-xs font-black backdrop-blur-lg uppercase tracking-widest shadow-sm">
                                  {selectedTest.group}
                                </span>
                              </div>
                            </div>

                            <div className={`p-6 sm:p-10 space-y-8 sm:space-y-12 ${selectedTest.isFeatured ? 'bg-[#fcfcf9]' : 'bg-[#fafafa]'}`}>
                              {selectedTest.concept && (
                                <div className={selectedTest.isFeatured ? 'p-6 bg-white rounded-3xl border border-indigo-50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden' : ''}>
                                  {selectedTest.isFeatured && <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-400" />}
                                  <h4 className={`${selectedTest.isFeatured ? 'text-indigo-500' : 'text-blue-600 dark:text-blue-400'} text-xs font-black uppercase tracking-[0.2em] mb-4`}>Khái niệm & Cơ chế</h4>
                                  <div className="text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-serif italic text-justify space-y-3">
                                    {selectedTest.concept.split('\n\n').map((block, i) => (
                                      <p key={i}>{block}</p>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {selectedTest.physiology && (
                                <div className={selectedTest.isFeatured ? 'p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl border border-purple-100 shadow-sm relative overflow-hidden' : ''}>
                                  {selectedTest.isFeatured && <div className="absolute top-0 left-0 w-1.5 h-full bg-purple-400" />}
                                  <h4 className="text-purple-600 text-xs font-black uppercase tracking-[0.2em] mb-4">Sinh lý học & Tổng hợp</h4>
                                  <div className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify font-medium space-y-4">
                                    {selectedTest.physiology.split('\n').map((paragraph, i) => (
                                      <p key={i}>
                                        {paragraph}
                                      </p>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {selectedTest.indication && (
                                <div className={selectedTest.isFeatured ? 'p-6 bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl border border-pink-100 shadow-sm relative overflow-hidden' : ''}>
                                  {selectedTest.isFeatured && <div className="absolute top-0 left-0 w-1.5 h-full bg-pink-400" />}
                                  <h4 className={`${selectedTest.isFeatured ? 'text-pink-600' : 'text-blue-600 dark:text-blue-400'} text-xs font-black uppercase tracking-[0.2em] mb-4`}>Chỉ định</h4>
                                  <div className="text-slate-800 dark:text-slate-300 text-base sm:text-lg font-sans font-bold leading-relaxed space-y-2">
                                    {selectedTest.indication.split('\n').map((line, i) => (
                                      <div key={i} className="flex items-start gap-2">
                                        <span className="text-pink-400">◆</span>
                                        <span>{line}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {selectedTest.specimenCollection && (
                                <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl border border-amber-100 shadow-sm relative overflow-hidden">
                                  <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-400" />
                                  <h4 className="text-amber-600 text-xs font-black uppercase tracking-[0.2em] mb-4">Lấy bệnh phẩm & Lưu ý đặc biệt</h4>
                                  <div className="text-slate-800 text-sm sm:text-base leading-relaxed font-sans font-semibold space-y-3">
                                    {selectedTest.specimenCollection.split('\n').filter(l => l.trim()).map((line, i) => (
                                      <div key={i} className="bg-white/50 p-3 rounded-xl border border-amber-100/50">
                                        {line}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {selectedTest.testingMethods && (
                                <div className="p-6 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl border border-cyan-100 shadow-sm relative overflow-hidden">
                                  <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-400" />
                                  <h4 className="text-cyan-600 text-xs font-black uppercase tracking-[0.2em] mb-4">Phương pháp xét nghiệm</h4>
                                  <div className="text-slate-700 text-sm sm:text-base leading-relaxed font-mono font-bold italic space-y-2">
                                    {selectedTest.testingMethods.split('\n').filter(line => line.trim()).map((line, i) => (
                                      <div key={i} className="flex items-start gap-2">
                                        <span className="text-cyan-500">•</span>
                                        <span>{line}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {(selectedTest.ref || selectedTest.alert) && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                                  {selectedTest.ref && (
                                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-3xl border-2 border-white shadow-lg shadow-green-100 relative overflow-hidden">
                                      <div className="absolute top-0 right-0 p-2 opacity-10"><Dna className="w-12 h-12" /></div>
                                      <h4 className="text-green-700 text-xs font-black uppercase tracking-widest mb-4">Khoảng tham chiếu</h4>
                                      <div className="font-mono text-base sm:text-xl font-black text-green-800 whitespace-pre-wrap leading-relaxed tracking-tight space-y-2">
                                        {selectedTest.ref.split('\n').map((line, idx) => (
                                          <div key={idx} className="flex items-start gap-2">
                                            <span className="text-green-500 mt-1">•</span>
                                            <span>{line}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                  {selectedTest.alert && (
                                    <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-3xl border-2 border-white shadow-lg shadow-red-100 relative overflow-hidden">
                                      <div className="absolute top-0 right-0 p-2 opacity-10"><TriangleAlert className="w-12 h-12" /></div>
                                      <h4 className="text-red-700 text-xs font-black uppercase tracking-widest mb-4">Cảnh báo lâm sàng</h4>
                                      <div className="font-mono text-base sm:text-xl font-black text-red-800 whitespace-pre-wrap leading-relaxed tracking-tight space-y-2">
                                        {selectedTest.alert.split('\n').filter(l => l.trim()).map((line, i) => (
                                          <div key={i} className="flex items-start gap-2">
                                            <span className="text-red-500">⚠</span>
                                            <span>{line}</span>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}

                              {selectedTest.pathologicalMeaning && (
                                <div className="space-y-6">
                                  <h4 className={`${selectedTest.isFeatured ? 'text-indigo-600' : 'text-blue-600 dark:text-blue-400'} text-xs font-black uppercase tracking-[0.2em] mb-2 text-center`}>--- Ý nghĩa bệnh lý & Phân tích ---</h4>
                                  <div className="grid grid-cols-1 gap-6">
                                    <div className="group flex flex-col sm:flex-row gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-500">
                                      <div className="bg-gradient-to-br from-red-100 to-rose-200 p-4 rounded-2xl h-fit w-fit shadow-inner">
                                        <TrendingUp className="w-6 h-6 text-red-600" />
                                      </div>
                                      <div>
                                        <p className="font-black text-red-600 mb-2 text-xl uppercase tracking-tighter decoration-red-200 decoration-4 underline-offset-4 underline">Tăng nồng độ</p>
                                        <div 
                                          className="text-base sm:text-lg text-slate-800 leading-relaxed text-justify whitespace-pre-wrap font-sans font-medium space-y-3"
                                        >
                                          <div className="space-y-2 mt-2">
                                            {(() => {
                                              let counter = 0;
                                              const lines = selectedTest.pathologicalMeaning.increase.split('\n').filter(line => line.trim());
                                              const parentCount = lines.filter(line => line.trim().startsWith('🔹')).length;
                                              return lines.map((line, i) => {
                                                const isParent = line.trim().startsWith('🔹');
                                                if (isParent) counter++;
                                                return (
                                                  <div key={i} className={`flex items-start gap-4 ${isParent ? 'p-4 bg-red-50/50 dark:bg-red-900/10 rounded-2xl border border-red-100/50 dark:border-red-800/10 hover:bg-red-100/50' : 'pr-4 py-1'} transition-colors group/item`}>
                                                    <div className="flex-shrink-0 w-8 flex justify-center">
                                                      {isParent && parentCount > 1 ? (
                                                        <span className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-black shadow-lg shadow-red-200 group-hover/item:scale-110 transition-transform">
                                                          {counter}
                                                        </span>
                                                      ) : null}
                                                    </div>
                                                    <div dangerouslySetInnerHTML={{ __html: line.replace(/^\d+\.\s*/, '') }} className={`flex-1 text-slate-700 dark:text-slate-300 leading-relaxed ${isParent ? 'font-bold italic' : 'font-medium'}`} />
                                                  </div>
                                                );
                                              });
                                            })()}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="group flex flex-col sm:flex-row gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-500">
                                      <div className="bg-gradient-to-br from-blue-100 to-indigo-200 p-4 rounded-2xl h-fit w-fit shadow-inner">
                                        <TrendingDown className="w-6 h-6 text-blue-600" />
                                      </div>
                                      <div className="flex-1">
                                        <p className="font-black text-blue-600 mb-2 text-xl uppercase tracking-tighter decoration-blue-200 decoration-4 underline-offset-4 underline">Giảm nồng độ</p>
                                        <div 
                                          className="text-base sm:text-lg text-slate-800 leading-relaxed text-justify whitespace-pre-wrap font-sans font-medium space-y-3"
                                        >
                                          <div className="space-y-2 mt-2">
                                            {(() => {
                                              let counter = 0;
                                              const lines = selectedTest.pathologicalMeaning.decrease.split('\n').filter(line => line.trim());
                                              const parentCount = lines.filter(line => line.trim().startsWith('🔹')).length;
                                              return lines.map((line, i) => {
                                                const isParent = line.trim().startsWith('🔹');
                                                if (isParent) counter++;
                                                return (
                                                  <div key={i} className={`flex items-start gap-4 ${isParent ? 'p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100/50 dark:border-blue-800/10 hover:bg-blue-100/50' : 'pr-4 py-1'} transition-colors group/item`}>
                                                    <div className="flex-shrink-0 w-8 flex justify-center">
                                                      {isParent && parentCount > 1 ? (
                                                        <span className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-black shadow-lg shadow-blue-200 group-hover/item:scale-110 transition-transform">
                                                          {counter}
                                                        </span>
                                                      ) : null}
                                                    </div>
                                                    <div dangerouslySetInnerHTML={{ __html: line.replace(/^\d+\.\s*/, '') }} className={`flex-1 text-slate-700 dark:text-slate-300 leading-relaxed ${isParent ? 'font-bold italic' : 'font-medium'}`} />
                                                  </div>
                                                );
                                              });
                                            })()}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {selectedTest.benefits && (
                                <div className="p-8 bg-gradient-to-br from-emerald-50 to-green-100/50 rounded-3xl border-2 border-white shadow-xl relative overflow-hidden group">
                                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform duration-700">
                                    <ShieldCheck className="w-20 h-20 text-emerald-600" />
                                  </div>
                                  <h4 className="text-emerald-700 text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Lợi ích lâm sàng
                                  </h4>
                                  <div className="text-slate-800 text-sm sm:text-base leading-relaxed font-sans font-bold space-y-3 relative z-10">
                                    {selectedTest.benefits.split('\n').filter(l => l.trim()).map((line, i) => (
                                      <div key={i} className="flex items-start gap-3">
                                        <span className="text-emerald-500 font-black">✔</span>
                                        <span>{line}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {selectedTest.interferingFactors && (
                                <div className="p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl border-2 border-white shadow-xl">
                                  <div className="flex items-center gap-3 mb-4">
                                     <div className="w-2 h-2 rounded-full bg-yellow-400 animate-ping" />
                                     <h4 className="text-yellow-700 text-xs font-black uppercase tracking-widest">Yếu tố gây nhiễu & Thuốc</h4>
                                  </div>
                                  <div className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-wrap font-bold space-y-2">
                                    {selectedTest.interferingFactors.split('\n').map((line, i) => (
                                      <div key={i} dangerouslySetInnerHTML={{ __html: line }} />
                                    ))}
                                  </div>
                                </div>
                              )}

                              {selectedTest.clearanceInfo && (
                                <div className="p-8 bg-gradient-to-br from-[#e0c3fc] to-[#8ec5fc] rounded-3xl border-2 border-white shadow-2xl relative group">
                                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform duration-700"><CheckCircle2 className="w-16 h-16" /></div>
                                  <h4 className="text-blue-900 text-xs font-black uppercase tracking-widest mb-4">Hệ số thanh thải (Clearance)</h4>
                                  <p className="text-blue-950 text-base sm:text-lg leading-relaxed font-serif font-black italic">
                                    {selectedTest.clearanceInfo}
                                  </p>
                                </div>
                              )}

                              {selectedTest.ebmGuidelines && (
                                <div className="p-8 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-3xl border-2 border-white shadow-xl relative overflow-hidden group">
                                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:-rotate-6 transition-transform duration-700">
                                    <BookOpen className="w-20 h-20 text-indigo-600" />
                                  </div>
                                  <h4 className="text-indigo-700 text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                                    Y học bằng chứng (EBM)
                                  </h4>
                                  <div className="text-slate-800 text-sm sm:text-base leading-relaxed font-sans font-bold space-y-4 relative z-10 italic border-l-4 border-indigo-200 pl-4">
                                    {selectedTest.ebmGuidelines.split('\n').filter(l => l.trim()).map((line, i) => (
                                      <p key={i}>{line}</p>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {selectedTest.clinicalNote && (
                                <div className="p-8 bg-gradient-to-br from-white to-blue-50/50 rounded-[40px] border-4 border-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] relative">
                                  <div className="absolute -top-4 left-10 bg-blue-600 text-white px-6 py-1.5 rounded-full text-xs font-black shadow-lg uppercase">Lời khuyên chuyên môn</div>
                                  <h4 className="text-blue-800 text-xs font-black uppercase tracking-widest mb-6 opacity-0 h-0">Ghi chú & Cảnh báo lối sống</h4>
                                  <div className="text-slate-800 text-base sm:text-lg leading-relaxed text-left font-bold italic space-y-4">
                                    {selectedTest.clinicalNote.split('\n').filter(l => l.trim()).map((paragraph, i) => (
                                      <p key={i} className={i === 0 ? "first-letter:text-5xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:text-blue-600" : ""}>
                                        {paragraph}
                                      </p>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                            
                            <div className="bg-slate-50 dark:bg-slate-900 px-6 sm:px-8 py-4 flex justify-end">
                              <button 
                                onClick={() => setSelectedTest(null)}
                                className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors shadow-lg text-lg"
                              >
                                Đóng
                              </button>
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
          {selectedKnowledge && (
            <KnowledgeCardPopup 
              knowledge={selectedKnowledge}
              onClose={() => setSelectedKnowledge(null)}
            />
          )}
        </AnimatePresence>
      </main>

      <footer id="security" className="bg-white dark:bg-slate-950 pt-20 pb-10 px-6 border-t border-slate-100 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Microscope className="text-blue-600 w-8 h-8" />
                <span className="text-xl font-bold dark:text-white uppercase tracking-tight">KHOA XÉT NGHIỆM</span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 mb-6 font-bold leading-relaxed text-lg">
                Đơn vị xét nghiệm đạt chuẩn ISO 15189:2022.
              </p>
              <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-sm text-sm">
                Cam kết kết quả chính xác, nhanh chóng phục vụ chẩn đoán và điều trị tại Bệnh viện Đa khoa Cà Mau.
              </p>
              <div className="flex gap-4">
                <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <ShieldCheck className="text-green-500 w-6 h-6" />
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <Lock className="text-blue-500 w-6 h-6" />
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <Activity className="text-red-500 w-6 h-6" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold dark:text-white mb-6 uppercase text-xs tracking-widest text-blue-600">Liên hệ hỗ trợ</h4>
              <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li className="flex items-start gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 dark:text-slate-200">Địa chỉ</p>
                    <p>16 Hải Thượng Lãn Ông, Hòa Thành, Cà Mau</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg shrink-0">
                    <Phone className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 dark:text-slate-200">Điện thoại</p>
                    <p>0290 3835 171</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg shrink-0">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800 dark:text-slate-200">Giờ làm việc</p>
                    <p>Mở cả ngày (Phục vụ 24/7)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] text-slate-400 font-medium uppercase tracking-widest">
              © {new Date().getFullYear()} KHOA XÉT NGHIỆM - BVĐK CÀ MAU. ISO 15189 CERTIFIED.
            </p>
            <div className="flex gap-8 text-[12px] font-black uppercase tracking-[0.2em]">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] filter animate-pulse">
                A product of handsome Long
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Staff Password Modal */}
      <AnimatePresence>
        {showPasswordModal && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPasswordModal(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-sm bg-white dark:bg-slate-800 rounded-[30px] sm:rounded-[40px] shadow-2xl p-8 sm:p-10 border-4 border-white mx-auto overflow-hidden"
            >
              <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Lock className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-white uppercase tracking-tighter">Yêu cầu bảo mật</h3>
                  <p className="text-slate-500 dark:text-slate-400 mt-2 font-bold italic text-lg truncate px-2">Nhập PW để đăng nhập</p>
              </div>
              
              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                  <div className="relative">
                    <input 
                        type="password"
                        placeholder="Mật khẩu..."
                        autoFocus
                        className={`w-full px-6 py-5 rounded-3xl border-4 outline-none transition-all font-black text-center text-2xl tracking-widest ${passwordError ? 'border-red-500 bg-red-50 dark:bg-red-900/10' : 'border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:border-blue-500'}`}
                        value={passwordInput}
                        onChange={(e) => {
                            setPasswordInput(e.target.value);
                            setPasswordError(false);
                        }}
                    />
                    {passwordError && (
                      <motion.p 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-center font-black text-xs uppercase mt-2"
                      >
                        Mật khẩu không chính xác!
                      </motion.p>
                    )}
                  </div>

                  <button 
                      type="submit"
                      className="w-full py-5 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-3xl font-black text-xl transition-all shadow-xl active:scale-95 flex items-center justify-center gap-3"
                  >
                      <span>Vào hệ thống</span>
                      <ArrowRight className="w-6 h-6" />
                  </button>
                  
                  <button 
                      type="button"
                      onClick={() => setShowPasswordModal(false)}
                      className="w-full py-2 text-slate-400 dark:text-slate-500 font-bold hover:text-slate-600 dark:hover:text-slate-300 transition-all uppercase text-sm tracking-widest"
                  >
                      Hủy bỏ
                  </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
