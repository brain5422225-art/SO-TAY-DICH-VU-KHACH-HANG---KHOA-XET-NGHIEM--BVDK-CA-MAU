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
  group: 'Sinh hóa' | 'Miễn Dịch' | 'Huyết học' | 'Vi sinh' | 'Đông máu' | 'Sinh Hóa' | 'Nước tiểu & Dịch' | 'Truyền máu' | 'Ký sinh trùng' | 'Sinh học phân tử' | 'Vi nấm';
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
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn trước khi lấy máu.\n⚠️ **Lưu ý:** Thường cần lấy 2 mẫu máu cách nhau 10 - 14 ngày để so sánh hiệu giá kháng thể (đánh giá động lực kháng thể xem có đang tăng lên hay không).",
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
    "physiology": "📌 **Động học:** RF xuất hiện trong huyết thanh và dịch khớp vài tháng sau khi khởi phát Viêm khớp dạng thấp và có thể tồn tại nhiều năm sau khi điều trị.\n📌 **Ý nghĩa:** Khoảng 50 - 95% bệnh nhân người lớn bị Viêm khớp dạng thấp có yếu tố RF dương tính trong máu.",
    "indication": "🎯 **Chẩn đoán:** Hỗ trợ chẩn đoán Viêm khớp dạng thấp (đặc biệt các ca khó phân biệt trên lâm sàng).\n🎯 **Miễn dịch:** Chẩn đoán hội chứng Sjogren (khi kết hợp với kháng thể Anti-Ro/Anti-La).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn.",
    "testingMethods": "Kỹ thuật đo độ đục (Nephelometry), Test Latex, hoặc Phản ứng Waaler - Rose.",
    "ref": "📊 **Định tính:** Âm tính.\n📊 **Đo độ đục:** < 60 U/mL (hoặc < 60 kU/L).\n📊 **Ngưỡng dương tính (Định lượng):** > 1/32 (Waaler-Rose) hoặc > 1:80 (Test Latex).",
    "alert": "⚠️ Test RF (+) **không hoàn toàn đặc hiệu** cho Viêm khớp dạng thấp. Phát hiện RF ở mức hiệu giá thấp có thể gặp ở 4% người bình thường và lên tới 20% người > 70 tuổi khỏe mạnh.\n💡 Test RF (-) cũng không loại trừ được Viêm khớp dạng thấp (được gọi là Viêm khớp dạng thấp thể huyết thanh âm tính).",
    "pathologicalMeaning": {
      "increase": "🔹 **Yếu tố RF Dương tính (Tăng):**\n  🔴 **Bệnh tự miễn & Mô liên kết:**\n    ▫️ Viêm khớp dạng thấp (Rheumatoid Arthritis).\n    ▫️ Hội chứng Sjogren, Lupus ban đỏ hệ thống (SLE), Xơ cứng bì.\n    ▫️ Viêm da cơ (Dermatomyositis).\n  🔴 **Bệnh lý Viêm / Nhiễm trùng mạn tính:**\n    ▫️ Viêm nội tâm mạc bán cấp nhiễm khuẩn (Osler).\n    ▫️ Lao, Giang mai, Sốt rét.\n    ▫️ Nhiễm virus: Viêm gan C, Viêm gan mạn tính, Rubella, Tăng bạch cầu đơn nhân (EBV).\n  🔴 **Các bệnh lý Tạng & Ác tính:**\n    ▫️ Xơ gan, Bệnh phổi kẽ, Sarcoidosis.\n    ▫️ Tăng macroglobulin máu Waldenstrom, Globulin tủa lạnh (Cryoglobulinemia).",
      "decrease": "Không có ý nghĩa bệnh lý lâm sàng."
    },
    "interferingFactors": "❌ **Dương tính giả:** Rất hay gặp ở người già, người có tăng nồng độ lipid máu nặng, hoặc người vừa mới tiêm phòng nhiều loại vaccine / truyền máu gần đây.\n💊 **Ghi chú Thuốc:** Các thuốc giảm đau chống viêm như Aspirin và NSAIDs không gây nhiễu, không làm thay đổi kết quả xét nghiệm RF.",
    "clinicalNote": "Theo bản cập nhật **EULAR 2025**, chiến lược \"Điều trị mục tiêu\" (Treat-to-Target) yêu cầu kiểm soát viêm cực kỳ nhanh chóng. RF (+) là một yếu tố cấu thành chẩn đoán quan trọng, nhưng thường được xét nghiệm kết hợp với **Anti-CCP** (có độ đặc hiệu cao hơn RF rất nhiều) để đánh giá phân tầng rủi ro chính xác và ra quyết định sử dụng các thuốc DMARDs sớm nhằm ngăn chặn sự tiến triển của biến dạng khớp."
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
    "name": "Định lượng HbA1C [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "HbA1c là dạng Hemoglobin bị glycosyl hóa (gắn đường) một cách tự nhiên. Xét nghiệm này là \"thước đo vàng\" phản ánh nồng độ đường huyết trung bình của cơ thể trong vòng 2 - 3 tháng trước đó, không bị ảnh hưởng bởi bữa ăn hay stress tức thời.",
    "physiology": "📌 **Cơ chế:** Phản ứng glycosyl hóa diễn ra liên tục không cần enzym xúc tác, tỷ lệ thuận với nồng độ Glucose máu.\n📌 **Động học:** Do đời sống của hồng cầu là khoảng 120 ngày, nồng độ HbA1c trở thành một \"cuốn nhật ký\" lưu trữ thông tin đường huyết trong 8 - 12 tuần.",
    "indication": "🎯 **Sàng lọc & Chẩn đoán:** Tiền đái tháo đường, Đái tháo đường (ĐTĐ) Type 1 và Type 2.\n🎯 **Theo dõi:** Đánh giá hiệu quả điều trị và mức độ kiểm soát đường huyết dài hạn ở bệnh nhân ĐTĐ, tiên lượng rủi ro biến chứng vi mạch.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (chống đông bằng EDTA).\n⏳ **Chuẩn bị:** **Không bắt buộc nhịn ăn**, có thể lấy máu bất kỳ thời điểm nào trong ngày.",
    "testingMethods": "Sắc ký lỏng hiệu năng cao (HPLC).",
    "ref": "📊 **Bình thường:** 4,8% - 5,6%.\n📊 **Tiền đái tháo đường:** 5,7% - 6,4%.\n📊 **Chẩn đoán Đái tháo đường:** > 6,5%.",
    "alert": "⚠️ **Cập nhật ADA 2025/2026:** Nếu bệnh nhân không có triệu chứng lâm sàng rõ rệt của tăng đường huyết, chẩn đoán ĐTĐ bắt buộc phải có **2 kết quả bất thường** (từ cùng 1 mẫu máu như kết hợp HbA1c và Glucose đói, hoặc ở 2 thời điểm khác nhau).\n💡 HbA1c sẽ **bị sai lệch** và không dùng được để chẩn đoán trong các trường hợp có thay đổi đời sống hồng cầu: Phụ nữ có thai (đặc biệt 3 tháng cuối), tán huyết, bệnh lý huyết sắc tố, hoặc suy thận mạn giai đoạn cuối.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng HbA1c:**\n  🔴 **Bệnh lý nội tiết chuyển hóa:**\n    ▫️ Đái tháo đường.\n    ▫️ Tiền đái tháo đường.\n    ▫️ Tình trạng kháng Insulin.",
      "decrease": "🔹 **Giảm HbA1c (Thường do sai số hoặc bệnh lý huyết học):**\n  🔴 **Nguyên nhân làm giảm giả tạo:**\n    ▫️ Tình trạng tan máu, xuất huyết cấp tính (hồng cầu mới sinh ra chưa kịp gắn đường).\n    ▫️ Truyền máu số lượng lớn."
    },
    "interferingFactors": "❌ **Lỗi phương pháp:** Các biến thể Hemoglobin bẩm sinh (HbS, HbC, HbF) có thể gây nhiễu phương pháp HPLC ở một số dòng máy.\n💊 **Thuốc / Sinh lý:** Bệnh nhân đang dùng EPO (Erythropoietin) tạo hồng cầu mới liên tục sẽ làm giảm HbA1c. Uống liều cao Vitamin C hoặc Vitamin E cũng có thể gây nhiễu kết quả.",
    "clinicalNote": "Theo **ADA 2025-2026**, độ tuổi sàng lọc ĐTĐ phổ quát được hạ xuống từ **35 tuổi**. Bệnh nhân chuẩn bị phẫu thuật chương trình được yêu cầu kiểm soát HbA1c < 8% hoặc chỉ số TIR (Time in Range qua máy đo liên tục CGM) > 50% để hạn chế biến chứng nhiễm trùng vết mổ. Hiện nay, ADA đặc biệt khuyến khích sử dụng công nghệ CGM (Đo đường huyết liên tục) song hành cùng HbA1c để cá thể hóa việc điều trị."
  },
  {
    "name": "Đo hoạt độ ALP (Phosphatase kiềm) [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Phosphatase kiềm (ALP) là một enzym tham gia vào quá trình tách nhóm phosphat. Trong cơ thể, nó được tìm thấy chủ yếu ở 2 nơi: **các tế bào biểu mô lót đường mật (trong Gan)** và **các tạo cốt bào (trong Xương)**.",
    "physiology": "📌 **Nguồn gốc:** Tồn tại dưới dạng các isoenzym khác nhau: Gan mật, Xương, Ruột non, Thận, Rau thai.\n📌 **Chức năng:** Ở xương, nó tham gia mạnh mẽ vào quá trình tân tạo xương mới (canxi hóa). Ở gan, nó tăng vọt khi ống mật bị tắc nghẽn.",
    "indication": "🎯 **Gan mật:** Chẩn đoán và phân biệt tình trạng ứ mật (tắc mật) với hoại tử tế bào gan.\n🎯 **Cơ xương khớp:** Chẩn đoán bệnh lý tủy xương, Paget xương, còi xương, u di căn xương.\n🎯 **Sàng lọc:** Đánh giá tình trạng ứ mật ở bệnh nhân đang dùng các thuốc có rủi ro độc gan.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn từ 10 - 12h trước khi lấy máu xét nghiệm (do ALP ruột tăng nhẹ sau bữa ăn).\n⚠️ **Lưu ý:** Xét nghiệm nên được phân tích sớm, hoặc bảo quản lạnh.",
    "testingMethods": "Đo hoạt độ động học enzym.",
    "ref": "📊 **Nam:** 45 - 115 U/L.\n📊 **Nữ:** 30 - 100 U/L.\n*(Người cao tuổi và trẻ em đang tuổi lớn sẽ có mức ALP sinh lý cao hơn đáng kể)*.",
    "alert": "⚠️ Ở trẻ em và thanh thiếu niên, ALP tăng sinh lý rất cao (do xương đang dài ra). Ở phụ nữ có thai 3 tháng cuối, ALP cũng tăng gấp đôi do rau thai bài tiết. Do đó, tăng ALP ở các đối tượng này hiếm khi mang ý nghĩa bệnh lý gan mật.\n💡 Khi ALP tăng cao, bắt buộc phải đo thêm **GGT**. Nếu GGT tăng cùng, nguyên nhân 100% từ Gan mật. Nếu GGT bình thường, nguyên nhân từ Xương hoặc Sinh lý.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng do nguyên nhân Gan Mật (Cùng tăng GGT):**\n  🔴 **Tắc nghẽn đường mật:**\n    ▫️ Sỏi ống mật chủ, u đầu tụy, ung thư đường mật.\n    ▫️ Xơ gan ứ mật tiên phát (PBC), viêm đường mật xơ hóa nguyên phát (PSC).\n  🔴 **Tổn thương nhu mô gan:**\n    ▫️ Áp xe gan, ung thư gan di căn, viêm gan do thuốc (tác dụng ứ trệ mật).\n🔹 **Tăng do nguyên nhân Xương (GGT bình thường):**\n  🔴 **Tăng hoạt động tạo cốt bào:**\n    ▫️ Bệnh Paget xương (tăng rất cao).\n    ▫️ Ung thư di căn xương (đặc biệt từ vú, tuyến tiền liệt).\n    ▫️ Quá trình liền xương sau gãy, bệnh nhuyễn xương, cường cận giáp.\n🔹 **Các nguyên nhân khác:**\n    ▫️ Có thai 3 tháng cuối, trẻ em đang lớn.",
      "decrease": "🔹 **Giảm ALP (Ít gặp):**\n  🔴 **Nguyên nhân:**\n    ▫️ Suy dinh dưỡng nặng (thiếu Kẽm, Magiê).\n    ▫️ Suy giáp, thiếu máu ác tính."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Mẫu máu bị vỡ hồng cầu làm sai lệch kết quả.\n💊 **Thuốc làm TĂNG ALP:** Rất nhiều loại thuốc gây ứ mật (Allopurinol, kháng sinh Macrolide, thuốc tránh thai, Androgen).\n💊 **Yếu tố sinh lý:** BMI cao tăng 25%, hút thuốc tăng 10%.",
    "clinicalNote": "Theo bản cập nhật **EASL 2025**, ALP đóng vai trò trung tâm trong chẩn đoán và theo dõi bệnh **Xơ gan ứ mật tiên phát (PBC)**. Sự kết hợp giữa **ALP > 1.5 lần giới hạn trên bình thường (ULN) và GGT tăng cao** là chỉ dấu lâm sàng mạnh mẽ nhất để bác sĩ đưa ra quyết định chỉ định xét nghiệm chuyên sâu kháng thể kháng ty thể (AMA)."
  },
  {
    "name": "Định lượng Phospho vô cơ [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Phospho (P) là khoáng chất quan trọng, với 85% kết hợp cùng Canxi ở trong xương và răng. Trong máu, phospho vô cơ tham gia vào cấu trúc màng tế bào, duy trì hệ đệm toan-kiềm, và đặc biệt là tổng hợp năng lượng (ATP).",
    "physiology": "📌 **Điều hòa:** Mức Phospho máu bị chi phối mạnh mẽ bởi nồng độ Canxi, Hormon cận giáp (PTH) và Vitamin D. Khi Canxi máu tăng, Phospho thường giảm và ngược lại.\n📌 **Thải trừ:** Quá trình đào thải Phospho dư thừa do Thận đảm nhận.",
    "indication": "🎯 **Bilan xương & nội tiết:** Đánh giá chức năng tuyến cận giáp (cường/suy cận giáp), rối loạn chuyển hóa Vitamin D.\n🎯 **Bệnh lý Thận:** Theo dõi và quản lý tiến triển bệnh thận mạn tính (CKD-MBD).\n🎯 **Hồi sức cấp cứu:** Chẩn đoán các tình trạng yếu cơ nặng, suy hô hấp không rõ nguyên nhân (do thiếu hụt ATP).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh hoặc huyết tương.\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn qua đêm. Nên lấy mẫu máu vào buổi sáng (do nồng độ Phospho có nhịp sinh học, giảm mạnh sau ăn carbohydrat).\n⚠️ **Lưu ý:** Tuyệt đối tránh vỡ hồng cầu.",
    "testingMethods": "Đo quang phổ / Phản ứng Molybdate.",
    "ref": "📊 **Người lớn:** 0,84 - 1,45 mmol/L (2,6 - 4,5 mg/dL).\n📊 **Trẻ em:** Thường cao hơn người lớn do nhu cầu phát triển xương (khoảng 1,29 - 2,26 mmol/L).",
    "alert": "⚠️ Hạ Phospho máu nặng (< 0,3 mmol/L) là một cấp cứu nội khoa, gây suy kiệt năng lượng tế bào dẫn đến tiêu cơ vân, suy tim, suy hô hấp và rối loạn tri giác.\n💡 Bệnh nhân nhịn ăn dài ngày, khi được truyền dinh dưỡng ồ ạt trở lại cực kỳ dễ gặp \"Hội chứng nuôi ăn lại\" (Refeeding Syndrome) do Phospho bị đẩy hết vào trong tế bào, gây hạ Phospho máu đột ngột đe dọa tính mạng.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Phospho máu:**\n  🔴 **Giảm đào thải qua Thận:**\n    ▫️ Suy thận cấp và suy thận mạn (nguyên nhân cực kỳ phổ biến).\n    ▫️ Suy tuyến cận giáp (giảm PTH làm thận tăng tái hấp thu Phospho).\n  🔴 **Tăng giải phóng từ Nội bào hoặc Xương:**\n    ▫️ Hội chứng ly giải khối u (do hóa trị ung thư).\n    ▫️ Tiêu cơ vân, nhiễm toan acid lactic, nhiễm toan ceton đái tháo đường.\n    ▫️ Thừa Vitamin D, tổn thương xương do di căn.",
      "decrease": "🔹 **Giảm Phospho máu:**\n  🔴 **Giảm hấp thu:**\n    ▫️ Hội chứng kém hấp thu, suy dinh dưỡng nặng, nghiện rượu mạn.\n    ▫️ Thiếu hụt Vitamin D (Còi xương, nhuyễn xương).\n  🔴 **Tăng đào thải / Mất cân bằng nội môi:**\n    ▫️ Cường tuyến cận giáp tiên phát (tăng PTH làm thận tăng thải Phospho).\n    ▫️ Kiềm hô hấp, điều trị Insulin (kéo Phospho vào trong tế bào).\n    ▫️ Dùng thuốc trung hòa acid dạ dày (Antacid) kéo dài."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Vỡ hồng cầu làm tăng giả tạo Phospho vì nồng độ trong hồng cầu rất cao.\n💊 **Thuốc làm TĂNG:** Thuốc nhuận tràng chứa Phosphat, lượng lớn Vitamin D.\n💊 **Thuốc làm GIẢM:** Antacid chứa Nhôm/Magiê (gây tủa phospho ở ruột), Lợi tiểu, Insulin.",
    "clinicalNote": "Theo hướng dẫn **KDIGO 2024**, ở bệnh nhân Suy thận mạn (CKD), tình trạng tăng Phospho máu là tác nhân trực tiếp gây \"Rối loạn chuyển hóa khoáng chất và xương\" (CKD-MBD), dẫn đến vôi hóa mạch máu và làm tăng đáng kể tỷ lệ tử vong tim mạch. Kiểm soát nghiêm ngặt bộ 3 thông số: Phospho, Canxi và PTH là bắt buộc ở nhóm bệnh nhân này."
  },
  {
    "name": "Định lượng Ammoniac (NH3) [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Amoniac (NH3) là một sản phẩm thoái hóa mang độc tính cao sinh ra từ quá trình phân giải protein (đặc biệt tại ruột do vi khuẩn phân hủy máu/thức ăn). Ở người khỏe mạnh, gan nhận trách nhiệm biến đổi hoàn toàn NH3 độc hại này thành Urê để đào thải qua đường tiểu.",
    "physiology": "📌 **Sinh lý bệnh:** Khi tế bào gan suy kiệt nghiêm trọng, hoặc khi dòng máu bị nối tắt (shunt cửa-chủ) lẩn tránh việc đi qua gan, NH3 sẽ tích tụ ồ ạt trong máu.\n📌 **Độc tính thần kinh:** NH3 dư thừa dễ dàng xuyên qua hàng rào máu não, gây độc cho hệ thần kinh trung ương (Bệnh não gan).",
    "indication": "🎯 **Gan mật:** Chẩn đoán tình trạng tiền hôn mê gan, hôn mê gan (bệnh não gan) ở bệnh nhân xơ gan, viêm gan tối cấp.\n🎯 **Tiêu hóa:** Đánh giá rủi ro bệnh não gan sau xuất huyết tiêu hóa.\n🎯 **Nhi khoa:** Chẩn đoán hội chứng Reye, rối loạn chu trình Urê bẩm sinh ở trẻ em có biểu hiện lú lẫn, ngủ lịm.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết tương (chống đông bằng EDTA).\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn 8h. Tuyệt đối không hút thuốc và không gắng sức trước khi lấy máu.\n⚠️ **Lưu ý đặc biệt:** Máu lấy xong **phải đặt ngay vào đá lạnh** và chuyển ngay đến labo (do tế bào hồng cầu liên tục sản sinh NH3 trong ống nghiệm, để ở nhiệt độ phòng sẽ gây tăng giả tạo rất mạnh).",
    "testingMethods": "Phản ứng enzym (Đo quang phổ).",
    "ref": "📊 **Người lớn:** 11 - 32 µmol/L (15 - 45 µg/dL). \n*(Lưu ý: Ngưỡng bình thường dao động tùy nam/nữ, Nam thường cao hơn Nữ một chút).* \n📊 **Trẻ sơ sinh:** Nồng độ sinh lý có thể cao gấp nhiều lần người lớn do chức năng gan chưa hoàn thiện.",
    "alert": "⚠️ Mức độ tăng nồng độ NH3 **không tương quan tuyến tính chặt chẽ** với mức độ nặng của hôn mê gan. Bệnh nhân có thể hôn mê rất sâu dù NH3 tăng không quá cao, hoặc NH3 tăng nhưng chưa hôn mê.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng NH3 máu (Độc tính):**\n  🔴 **Suy giảm chức năng Gan:**\n    ▫️ Xơ gan giai đoạn cuối, viêm gan virus/nhiễm độc hoại tử tối cấp.\n    ▫️ Hội chứng Reye ở trẻ em (suy gan não cấp sau khi dùng Aspirin trị nhiễm virus).\n  🔴 **Mất cân bằng tạo và thải NH3 trên nền bệnh Gan:**\n    ▫️ Xuất huyết tiêu hóa trên (lượng lớn máu ở ruột bị vi khuẩn phân hủy sinh ra ồ ạt NH3).\n    ▫️ Shunt cửa-chủ (tự nhiên hoặc nhân tạo sau phẫu thuật TIPS).\n  🔴 **Các bệnh lý khác:**\n    ▫️ Suy tim sung huyết nặng, suy thận, bệnh lý di truyền chu trình Urê.",
      "decrease": "Không có ý nghĩa lâm sàng đặc hiệu. Có thể gặp ở người dùng một số loại kháng sinh phổ rộng (tiêu diệt vi khuẩn ruột sinh NH3)."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Không bảo quản đá lạnh, garo quá chặt, thời gian chờ chuyển mẫu lâu.\n💊 **Thuốc làm TĂNG:** Lợi tiểu (gây hạ Kali máu kéo theo tăng NH3), acid valproic, barbiturat, rượu, thuốc cản quang.\n💊 **Thuốc làm GIẢM:** Kháng sinh diệt khuẩn ruột (Neomycin, Kanamycin), Lactulose (thuốc hạ NH3 đặc hiệu).",
    "clinicalNote": "Ở bệnh nhân xơ gan có xuất huyết tiêu hóa hoặc táo bón lâu ngày, nồng độ NH3 sẽ tăng vọt đẩy bệnh nhân vào cơn hôn mê gan. Việc sử dụng Lactulose hoặc thụt tháo làm sạch đại tràng là các can thiệp lâm sàng tức thời để tống xuất nguồn sinh NH3 ra ngoài."
  },
  {
    "name": "Định lượng FT3 (T3 Tự do) [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Triiodothyronine Tự do (FT3) là phần hormon tuyến giáp không gắn với protein mang. Mặc dù chiếm chưa tới 0,5% tổng lượng T3, nhưng đây chính là **dạng có hoạt tính sinh học mạnh mẽ nhất** (gấp khoảng 4-5 lần T4) và chịu trách nhiệm trực tiếp chi phối các phản ứng chuyển hóa của mô đích.",
    "physiology": "📌 **Nguồn gốc:** Chỉ có khoảng 20% T3 được tuyến giáp tiết trực tiếp, 80% còn lại là do quá trình khử i-ốt của T4 tại các mô ngoại vi (gan, thận) chuyển thành T3.\n📌 **Ưu điểm xét nghiệm:** Nồng độ FT3 phản ánh chính xác trạng thái chuyển hóa thực tế của bệnh nhân do không bị làm sai lệch bởi các thay đổi của protein mang huyết thanh (như TBG).",
    "indication": "🎯 **Cường giáp:** Chẩn đoán tình trạng nhiễm độc giáp, đặc biệt là hội chứng \"Nhiễm độc giáp do T3\" (T3 Thyrotoxicosis - TSH giảm, FT4 bình thường nhưng FT3 tăng cao).\n🎯 **Phân biệt:** Phân biệt nguyên nhân gây bất thường các hormon giáp toàn phần do thay đổi protein mang hay do bệnh lý thực thể.\n🎯 **Theo dõi:** Đánh giá hiệu quả liệu pháp ức chế tuyến giáp.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Thường không bắt buộc nhịn ăn. Lấy máu bất kỳ thời điểm nào.\n⚠️ **Lưu ý:** Khuyến cáo tạm ngưng các thuốc có ảnh hưởng tuyến giáp trước khi lấy máu (nếu mục đích là để chẩn đoán lần đầu).",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA, ECLIA).",
    "ref": "📊 **Bình thường:** 3,1 - 6,8 pmol/L (2,3 - 4,2 pg/mL).",
    "alert": "⚠️ Không được dùng FT3 như một xét nghiệm tuyến đầu để chẩn đoán **Suy giáp**. Lý do: Khi tuyến giáp suy yếu, cơ thể sẽ ưu tiên tăng tốc độ chuyển T4 thành T3 để duy trì mức FT3 bình thường bù trừ càng lâu càng tốt. TSH và FT4 là các chỉ số chuẩn xác hơn cho suy giáp.\n💡 Ở những bệnh nhân nằm viện thuộc khoa hồi sức tích cực (chấn thương nặng, suy đa tạng), FT3 thường giảm rất thấp gọi là \"Hội chứng Euthyroid Sick\". Đây là cơ chế tự bảo vệ sinh lý (giảm chuyển hóa) chứ không phải là bệnh suy giáp thực thể.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng FT3 máu:**\n  🔴 **Cường giáp & Nhiễm độc giáp:**\n    ▫️ Bệnh Graves (Basedow).\n    ▫️ Bướu giáp đa nhân độc, u tuyến độc giáp (Toxic adenoma).\n    ▫️ Nhiễm độc giáp do T3 đơn thuần (T3 Thyrotoxicosis).\n    ▫️ Viêm tuyến giáp giai đoạn đầu (giải phóng ồ ạt hormon dự trữ).",
      "decrease": "🔹 **Giảm FT3 máu:**\n  🔴 **Bệnh lý nội tiết & Sinh lý:**\n    ▫️ Suy tuyến giáp tiên phát hoặc thứ phát (Giai đoạn rất muộn).\n    ▫️ Hội chứng bệnh lý không do tuyến giáp (Euthyroid Sick Syndrome / Nonthyroidal Illness) ở bệnh nhân hồi sức tích cực.\n    ▫️ Suy dinh dưỡng nặng, nhịn đói kéo dài."
    },
    "interferingFactors": "❌ **Giao thoa:** Các thuốc điều trị rối loạn nhịp như Amiodarone có khả năng ức chế quá trình chuyển đổi T4 thành T3 tại ngoại vi, dẫn đến FT3 giảm giả tạo.\n💊 **Thuốc làm TĂNG:** Các chế phẩm thay thế hormon tuyến giáp chứa T3 (Liothyronine).\n💊 **Thuốc làm GIẢM:** Thuốc kháng giáp (PTU, Methimazole), Propranolol liều cao, Glucocorticoid (ức chế chuyển hóa T4 thành T3).",
    "clinicalNote": "Trong thực hành lâm sàng lâm sàng, bộ 3 xét nghiệm cơ bản nhất của tuyến giáp thường là **TSH và FT4**. Bác sĩ chỉ chỉ định thêm xét nghiệm **FT3** khi lâm sàng bệnh nhân có các triệu chứng cường giáp (nhịp tim nhanh, gầy sút, run tay, bướu cổ) rõ rệt nhưng kết quả FT4 lại hoàn toàn bình thường, nhằm không bỏ sót thể bệnh Nhiễm độc giáp do T3."
  },
     {
    "name": "Định lượng FT4 (T4 tự do) [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Thyroxin tự do (FT4) là phần hormone tuyến giáp lưu hành trong máu không gắn kết với protein mang (TBG). Mặc dù chỉ chiếm khoảng 0,03% tổng lượng T4, nhưng đây là dạng có hoạt tính sinh học và là tiền chất để chuyển hóa thành T3 tại các mô ngoại vi.",
    "physiology": "📌 **Nguồn gốc:** T4 được tổng hợp và bài tiết duy nhất từ tuyến giáp, dưới sự kích thích của TSH tuyến yên.\n📌 **Ưu điểm:** Khác với T4 toàn phần, nồng độ FT4 phản ánh trung thực chức năng tuyến giáp do không bị ảnh hưởng bởi những thay đổi nồng độ protein vận chuyển trong huyết thanh (như khi có thai, dùng thuốc tránh thai, hoặc suy gan).",
    "indication": "🎯 **Chẩn đoán:** Khẳng định tình trạng cường giáp hoặc suy giáp khi kết quả TSH có bất thường.\n🎯 **Theo dõi:** Đánh giá hiệu quả của phác đồ điều trị hormone thay thế (suy giáp) hoặc thuốc kháng giáp trạng (cường giáp).\n🎯 **Phân biệt:** Chẩn đoán các rối loạn tuyến giáp ở phụ nữ có thai (do TBG tăng cao làm sai lệch T4 toàn phần).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Thường không bắt buộc nhịn ăn. Lấy máu bất kỳ thời điểm nào.\n⚠️ **Lưu ý:** Nếu để theo dõi liều thuốc hormone tuyến giáp (Levothyroxine), bệnh nhân nên lấy máu TRƯỚC khi uống liều thuốc của ngày hôm đó.",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA, ECLIA).",
    "ref": "📊 **Bình thường:** 12,0 - 22,0 pmol/L (0,93 - 1,7 ng/dL).",
    "alert": "⚠️ Dùng liều cao Heparin tĩnh mạch có thể làm tăng giả tạo FT4 do Heparin kích thích giải phóng acid béo tự do, đẩy T4 ra khỏi protein mang trong ống nghiệm.\n💡 Nồng độ FT4 ở giới hạn trên của mức bình thường có thể là sinh lý ở người trẻ, nhưng luôn phải được coi là bất thường (bệnh lý) ở người cao tuổi.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng FT4 máu (Cường giáp):**\n  🔴 **Nguồn gốc tại tuyến giáp:**\n    ▫️ Bệnh Graves (Basedow).\n    ▫️ Bướu giáp đa nhân độc, U tuyến độc giáp (Toxic adenoma).\n    ▫️ Viêm tuyến giáp (Giai đoạn đầu giải phóng ồ ạt hormone dự trữ).\n  🔴 **Nguồn gốc ngoài tuyến:**\n    ▫️ Dùng quá liều thuốc hormone tuyến giáp (Nhiễm độc giáp giả tạo).",
      "decrease": "🔹 **Giảm FT4 máu (Suy giáp):**\n  🔴 **Nguồn gốc tiên phát (Tại tuyến):**\n    ▫️ Viêm tuyến giáp Hashimoto (Giai đoạn muộn).\n    ▫️ Sau phẫu thuật cắt tuyến giáp hoặc xạ trị bằng I-131.\n    ▫️ Bướu cổ do thiếu hụt Iod nghiêm trọng.\n  🔴 **Nguồn gốc thứ phát:**\n    ▫️ Suy tuyến yên hoặc tổn thương vùng dưới đồi (Giảm tiết TSH)."
    },
    "interferingFactors": "❌ **Giao thoa:** Mẫu máu vỡ hồng cầu hoặc bệnh nhân vừa chụp xạ hình đồng vị phóng xạ làm sai lệch kết quả.\n💊 **Thuốc làm TĂNG:** Amiodarone (chứa Iod), Propranolol, Corticosteroid liều cao, Heparin, thuốc cản quang có Iod.\n💊 **Thuốc làm GIẢM:** Phenytoin, Carbamazepine, Lithium, Rifampicin.",
    "clinicalNote": "Theo Viện Hàn lâm Hóa sinh Lâm sàng Quốc gia Mỹ (NACB): Ở bệnh nhân mới bắt đầu điều trị cường giáp/suy giáp (tình trạng giáp chưa ổn định), định lượng **FT4 là test có độ tin cậy cao hơn TSH** để theo dõi trong 2-3 tháng đầu. (Lý do: Trục tuyến yên cần nhiều tuần để \"thức tỉnh\" và điều chỉnh lại TSH cho phù hợp với nồng độ hormone mới)."
  },
  {
    "name": "Định lượng TSH [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "TSH (Thyroid-Stimulating Hormone) là hormone hướng tuyến giáp do thùy trước tuyến yên tiết ra. TSH đóng vai trò là \"vị chỉ huy\" kích thích tuyến giáp tổng hợp và giải phóng T3, T4 vào dòng tuần hoàn.",
    "physiology": "📌 **Điều hòa ngược (Negative Feedback):** Tuyến yên liên tục cảm nhận nồng độ T3, T4 trong máu. Nếu T3/T4 thấp, tuyến yên sẽ tăng tiết TSH để \"thúc giục\" tuyến giáp làm việc. Ngược lại, nếu T3/T4 cao, tuyến yên sẽ giảm hoặc ngừng tiết TSH.\n📌 **Động học:** Do bản chất nhạy bén khuếch đại của trục dưới đồi - tuyến yên, một sự thay đổi cực nhỏ của FT4 (chưa vượt khỏi ngưỡng bình thường) đã khiến TSH biến đổi gấp hàng chục lần.",
    "indication": "🎯 **Sàng lọc & Chẩn đoán tuyến đầu:** Đây là xét nghiệm đơn độc nhạy nhất, tốt nhất để phát hiện sớm rối loạn chức năng tuyến giáp ở bệnh nhân ngoại trú.\n🎯 **Chẩn đoán phân biệt:** Phân biệt suy giáp tại tuyến (TSH tăng) hay suy giáp thứ phát do tuyến yên (TSH giảm).\n🎯 **Theo dõi:** Đánh giá hiệu quả và độ an toàn của liệu pháp hormone thay thế hoặc thuốc kháng giáp.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn.\n⚠️ **Lưu ý:** TSH có nhịp sinh học ngày đêm (đỉnh vào 2-4h sáng, đáy vào 5-6h chiều), nhưng mẫu máu lấy ban ngày vẫn nằm trong giới hạn tham chiếu chuẩn.",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA, ECLIA).",
    "ref": "📊 **Người lớn:** 0,27 - 4,20 mIU/L (hoặc µU/mL).\n📊 **Trẻ sơ sinh:** TSH tăng cao sinh lý trong vài giờ đầu sau sinh và sẽ tự hạ về bình thường trong vòng 5 ngày.",
    "alert": "⚠️ TSH phản ứng chậm. Phải mất từ **6 - 8 tuần** nồng độ TSH mới thiết lập lại được trạng thái cân bằng sau khi bác sĩ bắt đầu hoặc thay đổi liều điều trị hormone tuyến giáp.\n💡 Không nên dùng TSH đơn độc để đánh giá chức năng giáp ở **bệnh nhân hồi sức tích cực (ICU)** do bệnh lý toàn thân nặng có thể làm ức chế TSH tạm thời (Hội chứng Euthyroid Sick).",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng TSH máu (Phản ứng với suy giáp):**\n  🔴 **Suy giáp tiên phát (Tại tuyến giáp):**\n    ▫️ Viêm tuyến giáp Hashimoto.\n    ▫️ Suy giáp sau phẫu thuật / xạ trị I-131.\n    ▫️ Suy giáp tiềm tàng (TSH tăng, FT4 vẫn bình thường).\n  🔴 **Nguyên nhân khác:**\n    ▫️ U tuyến yên tiết TSH (hiếm gặp).\n    ▫️ Điều trị thay thế hormone tuyến giáp không đủ liều.",
      "decrease": "🔹 **Giảm TSH máu (Bị ức chế):**\n  🔴 **Cường giáp (Tuyến giáp hoạt động quá mức):**\n    ▫️ Bệnh Graves (Basedow), bướu đa nhân độc.\n    ▫️ Cường giáp tiềm tàng (TSH giảm, FT4 bình thường).\n  🔴 **Nguyên nhân tuyến yên / Dưới đồi:**\n    ▫️ Suy tuyến yên (Suy giáp thứ phát).\n  🔴 **Nguyên nhân khác:**\n    ▫️ Dùng quá liều thuốc hormone tuyến giáp (Nhiễm độc giáp ngụy tạo).\n    ▫️ Quý 1 của thai kỳ (do hCG có cấu trúc giống TSH nên ức chế tạm thời TSH)."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Vỡ hồng cầu làm sai lệch kết quả.\n💊 **Thuốc làm TĂNG TSH:** Amiodarone, Lithium, Metoclopramide, Haloperidol.\n💊 **Thuốc làm GIẢM TSH:** Glucocorticoid liều cao, Dopamine, Aspirin liều cao.",
    "clinicalNote": "Theo các guideline chuyên ngành, trước khi kê đơn **Amiodarone** (thuốc chống loạn nhịp chứa nhiều Iod), bác sĩ bắt buộc phải kiểm tra TSH nền và tầm soát lại mỗi 6 tháng, vì thuốc này gây rối loạn chức năng tuyến giáp ở 14-18% bệnh nhân sử dụng."
  },
  {
    "name": "Định lượng AFP [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Alpha-fetoprotein (AFP) là một glycoprotein được sản xuất chủ yếu ở gan, túi noãn hoàng và hệ tiêu hóa của bào thai. Sau khi sinh, nồng độ AFP giảm nhanh chóng và chỉ tồn tại dạng vết trong máu người trưởng thành. Nó được ứng dụng làm chất chỉ điểm khối u (Tumor Marker) quan trọng nhất cho gan.",
    "physiology": "📌 **Đặc tính:** Sự gia tăng AFP ở người lớn phản ánh tình trạng tái tạo tế bào gan mạnh mẽ hoặc sự biệt hóa ngược (ác tính hóa) của tế bào biểu mô gan.\n📌 **Động học:** Thời gian bán hủy của AFP trong máu là khoảng 5 - 7 ngày.",
    "indication": "🎯 **Ung bướu:** Sàng lọc, hỗ trợ chẩn đoán và theo dõi đáp ứng điều trị Ung thư biểu mô tế bào gan nguyên phát (HCC) và ung thư tế bào mầm (tinh hoàn, buồng trứng).\n🎯 **Sản khoa:** Sàng lọc dị tật ống thần kinh (nứt đốt sống, thai vô sọ) hoặc bất thường nhiễm sắc thể ở bào thai (thường kết hợp trong bộ Triple Test).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn.\n⚠️ **Lưu ý Sản khoa:** Việc xác định chính xác tuổi thai (bằng siêu âm) là cốt lõi, vì giá trị tham chiếu AFP biến thiên liên tục theo từng tuần thai.",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA, ECLIA).",
    "ref": "📊 **Người trưởng thành (không mang thai):** < 7,0 ng/mL.\n📊 **Phụ nữ có thai:** Giá trị tham chiếu phụ thuộc vào tuổi thai (được đánh giá bằng đơn vị MoM - Multiple of Median).",
    "alert": "⚠️ AFP không được khuyến cáo dùng làm test sàng lọc ung thư đơn độc cho quần thể người khỏe mạnh bình thường do độ đặc hiệu không cao.\n💡 Nồng độ AFP không phải lúc nào cũng tương quan với kích thước khối u gan. Khoảng 30% bệnh nhân ung thư gan nguyên phát (HCC) có nồng độ AFP hoàn toàn bình thường.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng AFP máu:**\n  🔴 **Bệnh lý Ác tính:**\n    ▫️ Ung thư biểu mô tế bào gan nguyên phát (HCC).\n    ▫️ Ung thư tế bào mầm không thuộc loại tinh bào (Non-seminomatous germ cell tumors của tinh hoàn/buồng trứng).\n    ▫️ Ung thư di căn gan (Dạ dày, đại tràng, tụy, phổi).\n  🔴 **Bệnh lý Gan Mật Lành tính (Tái tạo tế bào gan):**\n    ▫️ Xơ gan, viêm gan virus (B, C) đợt cấp hoặc mạn tính hoạt động.\n  🔴 **Sản khoa (Bất thường bào thai):**\n    ▫️ Khuyết tật ống thần kinh (Nứt đốt sống, vô sọ).\n    ▫️ Thai suy, đa thai, dị tật thành bụng thai nhi.",
      "decrease": "🔹 **Giảm AFP máu (Trong Sản khoa):**\n  🔴 Hội chứng Down (Trisomy 21).\n  🔴 Thai chết lưu hoặc sảy thai."
    },
    "interferingFactors": "❌ **Giao thoa:** Các kháng thể dị vòng (HAMA) hoặc yếu tố dạng thấp (RF) có thể gây dương tính giả.\n💊 **Ghi chú:** Ở bệnh nhân viêm gan virus, nồng độ AFP có thể tăng (thường < 200 ng/mL) do quá trình gan phục hồi và sẽ tự giảm sau vài tháng.",
    "clinicalNote": "Theo **QĐ 3129/QĐ-BYT (Ung thư biểu mô tế bào gan)** và các hướng dẫn AASLD/EASL cập nhật 2024-2025: Để tầm soát HCC ở nhóm nguy cơ cao (viêm gan B/C, xơ gan), **Siêu âm bụng + AFP mỗi 6 tháng** là tiêu chuẩn. Giá trị AFP > 400 ng/mL (hoặc > 500) kết hợp với tổn thương khu trú trên hình ảnh là bằng chứng mạnh để chẩn đoán HCC. Hiện nay, để tăng độ nhạy, y học ưu tiên sử dụng bộ 3 marker: **AFP, AFP-L3 và PIVKA-II**."
  },
  {
    "name": "Định lượng PSA toàn phần [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "PSA (Prostate-Specific Antigen) là một glycoprotein được sản xuất chuyên biệt bởi các tế bào biểu mô tuyến tiền liệt (cả lành tính và ác tính). Chức năng sinh lý của PSA là làm loãng tinh dịch. Một lượng rất nhỏ rò rỉ vào máu, và sẽ tăng vọt khi cấu trúc tuyến bị phá vỡ.",
    "physiology": "📌 **Động học:** Trong máu, PSA tồn tại ở 2 dạng: dạng gắn kết với protein (chiếm đa số) và dạng tự do (free PSA). PSA toàn phần là tổng của cả hai.\n📌 **Đặc tính:** PSA đặc hiệu cho **CƠ QUAN** (tuyến tiền liệt), nhưng KHÔNG đặc hiệu cho **BỆNH LÝ** (tăng trong cả ung thư, viêm, và phì đại lành tính).",
    "indication": "🎯 **Sàng lọc:** Phát hiện sớm Ung thư tuyến tiền liệt ở nam giới > 50 tuổi (hoặc sớm hơn với người có tiền sử gia đình).\n🎯 **Phân tầng:** Đánh giá rủi ro, dự đoán di căn xương.\n🎯 **Theo dõi:** Phát hiện sớm tình trạng tái phát sinh hóa sau phẫu thuật cắt bỏ toàn bộ tuyến tiền liệt hoặc sau xạ trị.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn qua đêm. Lấy máu vào buổi sáng.\n⚠️ **Lưu ý Vô cùng Quan trọng:** Máu PHẢI ĐƯỢC LẤY TRƯỚC khi bác sĩ thăm khám trực tràng (DRE), trước khi siêu âm qua trực tràng hoặc sinh thiết. Tốt nhất bệnh nhân nên kiêng xuất tinh hoặc đạp xe đạp 48h trước khi xét nghiệm.",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA, ECLIA).",
    "ref": "📊 **Bình thường (Được chấp nhận chung):** < 4,0 ng/mL.\n*(Lưu ý: Ngưỡng này tăng dần theo độ tuổi sinh lý. Nam < 40 tuổi: < 2,0 ng/mL; Nam 40-50 tuổi: < 2,5 ng/mL; Nam > 60 tuổi có thể lên tới 4,5 ng/mL).*.",
    "alert": "⚠️ Nồng độ PSA bình thường KHÔNG loại trừ được ung thư (20% ung thư tiền liệt tuyến có PSA < 4 ng/mL).\n💡 Tốc độ gia tăng PSA (**PSA Velocity**) trên 0,75 ng/mL/năm ở nam giới có PSA bình thường là một dấu hiệu cảnh báo đỏ, cần sinh thiết ngay.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng PSA máu:**\n  🔴 **Ác tính:**\n    ▫️ Ung thư tuyến tiền liệt (Prostate Cancer).\n  🔴 **Lành tính (Thường gặp):**\n    ▫️ Phì đại tuyến tiền liệt lành tính (BPH).\n    ▫️ Viêm tuyến tiền liệt cấp/mạn tính (tăng vọt rất cao).\n    ▫️ Tắc nghẽn đường tiểu cấp tính (bí tiểu).\n    ▫️ Đụng dập do cơ học (Thăm khám trực tràng, nội soi bàng quang, đặt ống thông tiểu, sinh thiết tuyến).",
      "decrease": "🔹 **Giảm PSA máu:**\n    ▫️ Phản ánh đáp ứng tốt với các phương pháp điều trị cắt bỏ ung thư (phẫu thuật, xạ trị, cắt tinh hoàn nội khoa/ngoại khoa)."
    },
    "interferingFactors": "❌ **Lỗi lâm sàng:** Chọc lấy máu ngay sau khi bác sĩ vừa khám tuyến tiền liệt bằng tay (PSA tăng giả tạo trong 2-3 ngày).\n💊 **Thuốc làm GIẢM PSA:** Nhóm ức chế 5-alpha reductase điều trị phì đại tuyến tiền liệt (Finasteride, Dutasteride) làm **giảm 50%** nồng độ PSA máu sau 6 tháng. Bác sĩ phải nhân đôi kết quả đo được để đánh giá nguy cơ ung thư thực sự.",
    "clinicalNote": "Theo **Quyết định số 3130/QĐ-BYT**, khi kết quả PSA toàn phần nằm trong \"vùng xám\" từ **4,0 - 10,0 ng/mL**, bác sĩ bắt buộc phải chỉ định thêm xét nghiệm **Tỷ lệ PSA tự do / PSA toàn phần (fPSA/tPSA)**. \n- Nếu Tỷ lệ này > 25%: Khả năng cao là phì đại lành tính.\n- Nếu Tỷ lệ này < 15%: Rủi ro ác tính rất cao, có chỉ định sinh thiết tuyến tiền liệt."
  },
  {
    "name": "Định lượng CEA [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "CEA (Carcinoembryonic Antigen - Kháng nguyên ung thư biểu mô phôi) là một glycoprotein phức tạp. Trong thời kỳ bào thai, nó được sản xuất dồi dào ở niêm mạc đại trực tràng. Ở người lớn, gen sản xuất CEA bị ức chế nên nó chỉ tồn tại dạng vết trong máu, nhưng sẽ được bộc lộ trở lại khi có các đột biến ung thư biểu mô.",
    "physiology": "📌 **Động học:** CEA bị thanh thải qua gan. Thời gian bán hủy khoảng 2 - 8 ngày.\n📌 **Đặc tính:** CEA không đặc hiệu cho riêng một cơ quan nào và cũng có thể tăng nhẹ trong các tình trạng viêm mạn tính lành tính. Nó là chỉ dấu bộc lộ ưu thế ở nhóm ung thư biểu mô tuyến (Adenocarcinoma).",
    "indication": "🎯 **Tiên lượng & Phân giai đoạn:** Đánh giá nồng độ CEA trước mổ ở bệnh nhân ung thư đại trực tràng (nồng độ càng cao, khối u càng lớn hoặc đã di căn).\n🎯 **Theo dõi (Chỉ định số 1):** Đánh giá hiệu quả phẫu thuật, hóa/xạ trị và phát hiện cực kỳ sớm tình trạng tái phát hoặc di căn gan ở bệnh nhân ung thư đường tiêu hóa.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn.\n⚠️ **Khai báo:** Phải lưu ý tình trạng **hút thuốc lá** của bệnh nhân vì nó làm thay đổi dải tham chiếu bình thường.",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA, ECLIA) hoặc RIA.",
    "ref": "📊 **Người không hút thuốc:** < 3,4 ng/mL (hay < 3,4 µg/L).\n📊 **Người có hút thuốc lá:** Có thể lên tới ≤ 4,3 ng/mL (hay < 5,0 µg/L).",
    "alert": "⚠️ Tuyệt đối không dùng CEA để \"tầm soát ung thư\" định kỳ cho người khỏe mạnh vì tỷ lệ âm tính giả (khối u nhỏ chưa tăng CEA) và dương tính giả (viêm dạ dày, hút thuốc) rất cao.\n💡 Nồng độ CEA máu > 20 ng/mL hầu như luôn luôn cảnh báo bệnh lý ung thư đã lan rộng hoặc di căn xa (đặc biệt là di căn gan).",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng CEA máu:**\n  🔴 **Các bệnh lý Ác tính:**\n    ▫️ Ung thư Đại tràng và Trực tràng (Tăng mạnh nhất, tỷ lệ cao nhất).\n    ▫️ Ung thư Dạ dày, Tụy, Đường mật.\n    ▫️ Ung thư Vú, Phổi (không phải tế bào nhỏ), Buồng trứng, Tuyến giáp thể tủy.\n  🔴 **Các bệnh lý Lành tính (Thường tăng nhẹ < 10 ng/mL):**\n    ▫️ Viêm loét đại tràng (UC), bệnh Crohn, túi thừa ruột.\n    ▫️ Xơ gan do rượu, viêm gan mạn tính, tắc mật.\n    ▫️ Viêm loét dạ dày - tá tràng.\n    ▫️ Viêm phổi, Bệnh phổi tắc nghẽn mạn tính (COPD).\n    ▫️ Suy thận cấp/mạn (do giảm thanh thải CEA).",
      "decrease": "🔹 **Giảm CEA máu:**\n    ▫️ Là dấu hiệu tuyệt vời cho thấy khối u đã được cắt bỏ triệt để hoặc hóa trị đang đáp ứng tốt."
    },
    "interferingFactors": "❌ **Giao thoa:** Kỹ thuật xét nghiệm giữa các hãng máy khác nhau có thể cho ra kết quả chênh lệch. Cần theo dõi bệnh nhân dọc theo thời gian trên **cùng một hệ thống máy**.\n💊 **Lối sống:** Hút thuốc lá kéo dài làm tăng tổng hợp CEA biểu mô đường hô hấp, hòa vào máu gây dương tính giả.",
    "clinicalNote": "Theo bản cập nhật **ESMO 2026** và Bộ Y tế: Sau phẫu thuật cắt bỏ ung thư đại tràng, nồng độ CEA bắt buộc phải giảm về mức bình thường trong vòng **6 - 12 tuần**. Nếu CEA chững lại hoặc tăng tiếp, đó là bằng chứng của việc ung thư vẫn còn sót lại hoặc đã vi di căn (micro-metastasis). Trong quá trình theo dõi, mức thay đổi nồng độ CEA trên 30% so với giá trị nền được coi là có ý nghĩa lâm sàng, cần chỉ định chụp PET/CT ngay lập tức."
  },
     {
    "name": "Định lượng CA 15-3 [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Kháng nguyên CA 15-3 (Cancer Antigen 15-3) là một glycoprotein được bộc lộ trên tế bào ung thư biểu mô tuyến. Đây là chất chỉ điểm khối u (Tumor Marker) quan trọng đối với ung thư vú.",
    "physiology": "📌 **Phân bố:** Tìm thấy ở cả tế bào tuyến vú bình thường và ác tính.\n📌 **Động học:** Nồng độ trong dòng tuần hoàn tăng cao khi cấu trúc mô tuyến bị phá vỡ, đặc biệt khi khối u lan rộng hoặc di căn tới các tạng khác (gan, xương).",
    "indication": "🎯 **Theo dõi điều trị:** Đánh giá đáp ứng với phác đồ hóa/xạ trị ở bệnh nhân ung thư vú giai đoạn II, III và IV.\n🎯 **Phát hiện tái phát:** Thường quy theo dõi định kỳ sau phẫu thuật để phát hiện sớm tình trạng di căn.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn trước khi lấy máu.",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA, ECLIA).",
    "ref": "📊 **Bình thường:** < 35 U/mL (hoặc < 35 kU/L).",
    "alert": "⚠️ Tuyệt đối không sử dụng xét nghiệm CA 15-3 độc lập để tầm soát (sàng lọc) ung thư vú ở phụ nữ khỏe mạnh, do độ nhạy ở giai đoạn sớm rất thấp (chỉ tăng ở khoảng 30% số ca ung thư vú giai đoạn I/II).\n💡 Sự gia tăng liên tục của CA 15-3 trên 25% so với giá trị nền có ý nghĩa lâm sàng dự báo bệnh tiến triển hoặc tái phát, thường xuất hiện trước khi có biểu hiện trên chẩn đoán hình ảnh từ vài tháng.",
    "pathologicalMeaning": {
      "increase": "🔹 **Bệnh lý Ác tính:**\n  🔴 **Ung thư vú:**\n    ▫️ Tăng cực kỳ rõ rệt trong ung thư vú có di căn (đặc biệt là di căn xương, gan, phổi).\n  🔴 **Các ung thư biểu mô khác (ít đặc hiệu hơn):**\n    ▫️ Ung thư buồng trứng, ung thư phổi, ung thư tụy, ung thư dạ dày, đại trực tràng.\n🔹 **Bệnh lý Lành tính (Thường chỉ tăng nhẹ):**\n  🔴 **Tại vú:**\n    ▫️ U xơ tuyến vú, các bệnh lý tuyến vú lành tính.\n  🔴 **Ngoài vú:**\n    ▫️ Lạc nội mạc tử cung.\n    ▫️ Viêm gan, xơ gan, viêm vùng tiểu khung.",
      "decrease": "🔹 **Giảm nồng độ:**\n    ▫️ Phản ánh đáp ứng tốt với phác đồ điều trị ung thư (phẫu thuật cắt bỏ u thành công, hóa/xạ trị có hiệu quả)."
    },
    "interferingFactors": "❌ **Giao thoa phương pháp:** Kết quả có thể dao động giữa các thuốc thử của các hãng máy xét nghiệm khác nhau. Để theo dõi chính xác, bắt buộc phải xét nghiệm dọc theo thời gian trên **cùng một hệ thống máy**.",
    "clinicalNote": "Theo hướng dẫn của ESMO 2026, đối với ung thư vú di căn, việc đánh giá nồng độ CA 15-3 kết hợp với CEA được khuyến cáo để theo dõi diễn tiến bệnh học, thay vì lạm dụng chụp chiếu hình ảnh (như PET/CT) quá dày đặc gây tốn kém và độc hại phóng xạ cho bệnh nhân."
  },
  {
    "name": "HBsAg test nhanh [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "HBsAg (Hepatitis B surface Antigen) là kháng nguyên bề mặt của vi rút viêm gan B (HBV). Đây là chỉ dấu sinh học đầu tiên xuất hiện trong máu khi nhiễm HBV và là xét nghiệm cốt lõi để chẩn đoán bệnh.",
    "physiology": "📌 **Động học:** Xuất hiện trong máu từ 1 - 10 tuần sau khi phơi nhiễm, ngay cả trước khi có triệu chứng lâm sàng và men gan tăng.\n📌 **Đặc tính:** Nếu HBsAg tồn tại trong máu liên tục quá 6 tháng, bệnh nhân được chẩn đoán là nhiễm Viêm gan B mạn tính.",
    "indication": "🎯 **Sàng lọc phổ quát:** Tầm soát nhiễm HBV trong cộng đồng, khám sức khỏe định kỳ, phụ nữ có thai, người hiến máu, nhân viên y tế.\n🎯 **Chẩn đoán:** Xác định nguyên nhân viêm gan cấp hoặc mạn tính.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh, huyết tương hoặc máu toàn phần.\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn.",
    "testingMethods": "Sắc ký miễn dịch (Test nhanh định tính / POC - Point of care).",
    "ref": "📊 **Bình thường:** Âm tính (-).",
    "alert": "⚠️ Test nhanh HBsAg có thể **âm tính giả** trong 'giai đoạn cửa sổ' (khi lượng kháng nguyên chưa đủ ngưỡng phát hiện), hoặc ở các thể HBV đột biến gen (Mutant YMDD/đột biến tiền lõi).\n💡 Một kết quả HBsAg Dương tính (+) chỉ khẳng định có vi rút trong cơ thể, **không phản ánh** vi rút đang hoạt động mạnh hay mức độ tàn phá gan.",
    "pathologicalMeaning": {
      "increase": "🔹 **HBsAg Dương tính (+) (Có nhiễm HBV):**\n  🔴 **Viêm gan B cấp tính:**\n    ▫️ Vi rút đang nhân lên, nguy cơ lây nhiễm cao.\n  🔴 **Viêm gan B mạn tính:**\n    ▫️ Khi kết quả dương tính kéo dài liên tục trên 6 tháng.\n  🔴 **Tình trạng người lành mang vi rút (Thể ẩn/Thể dung nạp miễn dịch):**\n    ▫️ HBsAg (+) nhưng men gan (ALT, AST) bình thường, HBV-DNA thấp, không có hoại tử tế bào gan.",
      "decrease": "🔹 **HBsAg Âm tính (-):**\n    ▫️ Không nhiễm HBV hoặc cơ thể đã thải trừ hoàn toàn vi rút. (Cần xét nghiệm thêm Anti-HBs để xác nhận cơ thể đã có kháng thể bảo vệ chưa)."
    },
    "interferingFactors": "❌ **Lỗi kỹ thuật:** Đọc kết quả quá thời gian quy định của nhà sản xuất (thường > 20 phút) có thể gây dương tính giả.\n💊 **Vắc xin:** Bệnh nhân vừa tiêm vắc xin viêm gan B trong vòng 1-2 tuần có thể có kết quả HBsAg (+) giả thoáng qua.",
    "clinicalNote": "Theo bản cập nhật **WHO 2024**, xét nghiệm HBsAg bằng test nhanh (POC) được đặc biệt khuyến cáo mở rộng cho nhóm phụ nữ mang thai và các khu vực có tỷ lệ nhiễm > 5%. Đặc biệt, WHO nhấn mạnh chiến lược **'Reflex HBV DNA testing'**: ngay khi HBsAg (+), phòng xét nghiệm tự động dùng lại mẫu máu đó để đo tải lượng HBV-DNA, giúp rút ngắn thời gian chờ đợi và kết nối bệnh nhân vào chương trình điều trị kháng vi rút ngay lập tức."
  },
  {
    "name": "HIV Ab test nhanh [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Xét nghiệm phát hiện kháng thể (Antibody - Ab) do hệ thống miễn dịch của cơ thể sinh ra để nhận diện và chống lại vi rút gây suy giảm miễn dịch ở người (HIV-1 và HIV-2).",
    "physiology": "📌 **Động học:** Kháng thể IgG đặc hiệu thường xuất hiện từ 6 - 12 tuần sau khi phơi nhiễm với HIV. Ở 95% bệnh nhân, kháng thể này có thể phát hiện rõ ở tháng thứ 6 và tồn tại suốt đời.",
    "indication": "🎯 **Sàng lọc:** Kiểm tra thường quy trước phẫu thuật, khám thai, hiến máu/hiến tạng.\n🎯 **Dịch tễ:** Sàng lọc cộng đồng cho các nhóm nguy cơ cao (quan hệ tình dục không an toàn, tiêm chích ma túy, đa bạn tình).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh, huyết tương hoặc máu toàn phần.\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn.\n⚠️ **Bảo mật:** Yêu cầu tư vấn tâm lý (Pre-test counseling) và bảo mật tuyệt đối thông tin người bệnh.",
    "testingMethods": "Sắc ký miễn dịch (Test nhanh định tính ELISA / EIA).",
    "ref": "📊 **Bình thường:** Âm tính (-).",
    "alert": "⚠️ Test nhanh HIV là xét nghiệm SÀNG LỌC, có độ nhạy cực cao (để không bỏ sót) nhưng độ đặc hiệu không tuyệt đối. Một kết quả dương tính (Có phản ứng) **CHƯA THỂ khẳng định** bệnh nhân nhiễm HIV mà bắt buộc phải chạy xét nghiệm khẳng định (Western Blot hoặc PCR).",
    "pathologicalMeaning": {
      "increase": "🔹 **HIV Ab Dương tính (Có phản ứng):**\n  🔴 **Nhiễm HIV thực sự:**\n    ▫️ Bệnh nhân đã phơi nhiễm và hệ miễn dịch đã tạo kháng thể chống lại vi rút.\n  🔴 **Dương tính giả (Phản ứng chéo do Dị kháng thể):**\n    ▫️ Phụ nữ mang thai (do dị kháng thể thai kỳ).\n    ▫️ Bệnh nhân mắc các bệnh tự miễn (Lupus ban đỏ hệ thống, xơ cứng bì).\n    ▫️ Bệnh nhân đang nhiễm vi rút khác (EBV, CMV, Rubella, Cúm A) hoặc vừa tiêm vắc xin.",
      "decrease": "🔹 **HIV Ab Âm tính:**\n    ▫️ Không có kháng thể HIV tại thời điểm lấy mẫu."
    },
    "interferingFactors": "❌ **Giai đoạn cửa sổ (Window phase):** Thường từ 3 - 6 tháng đầu tiên ngay sau khi phơi nhiễm. Lúc này vi rút đã có trong máu nhưng cơ thể chưa kịp sản xuất đủ lượng kháng thể, dẫn đến test cho kết quả **âm tính giả**.",
    "clinicalNote": "Quy định của Bộ Y tế rất nghiêm ngặt: Nếu nghi ngờ phơi nhiễm nguy cơ cao nhưng test nhanh âm tính, bắt buộc phải tư vấn bệnh nhân xét nghiệm lại sau 1 tháng, 3 tháng và 6 tháng. Không một cơ sở y tế nào được phép thông báo bệnh nhân 'Nhiễm HIV' nếu chỉ dựa vào một lần test nhanh có phản ứng, mà phải chờ kết quả Western Blot."
  },
  {
    "name": "Dengue virus IgM/IgG test nhanh [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Xét nghiệm phát hiện kháng thể IgM và IgG chống lại vi rút Dengue gây bệnh Sốt xuất huyết. Kháng thể IgM đại diện cho phản ứng miễn dịch cấp tính, trong khi IgG đại diện cho miễn dịch lưu nhớ lâu dài hoặc tái nhiễm.",
    "physiology": "📌 **Động học IgM:** Bắt đầu xuất hiện từ ngày thứ 3 - 5 của cơn sốt, đạt đỉnh vào khoảng tuần thứ 2 và giảm dần rồi biến mất sau 2 - 3 tháng.\n📌 **Động học IgG:** Trong nhiễm Dengue lần đầu, IgG xuất hiện rất muộn (sau ngày 10). Nhưng trong nhiễm lần hai (tái nhiễm), IgG bùng phát và tăng vọt rất nhanh ngay từ những ngày đầu tiên của bệnh.",
    "indication": "🎯 **Chẩn đoán:** Khẳng định Sốt xuất huyết Dengue từ ngày thứ 4 của cơn sốt trở đi.\n🎯 **Phân loại:** Phân biệt tình trạng nhiễm bệnh tiên phát (mắc lần đầu) hay thứ phát (tái nhiễm).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh, huyết tương.\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn. Có thể lấy máu bất kỳ thời điểm nào trong ngày.",
    "testingMethods": "Sắc ký miễn dịch (Test nhanh định tính).",
    "ref": "📊 **Bình thường:** Âm tính (-).",
    "alert": "⚠️ Kháng thể IgM của vi rút Dengue có thể phản ứng chéo với các vi rút nhóm Flavivirus khác (như vi rút Zika, Viêm não Nhật Bản), gây kết quả dương tính giả.\n💡 Việc xét nghiệm quá sớm (trong 1-3 ngày đầu của bệnh) thường cho kết quả âm tính giả vì cơ thể chưa kịp sinh kháng thể.",
    "pathologicalMeaning": {
      "increase": "🔹 **Phân tích kết quả Dương tính (+):**\n  🔴 **IgM (+) và IgG (-):**\n    ▫️ Nhiễm Dengue tiên phát cấp tính (Bệnh nhân mắc Sốt xuất huyết lần đầu tiên).\n  🔴 **IgM (+) và IgG (+):**\n    ▫️ Nhiễm Dengue thứ phát cấp tính (Bệnh nhân tái nhiễm với một type vi rút Dengue khác).\n  🔴 **IgM (-) và IgG (+):**\n    ▫️ Bệnh nhân đã từng mắc Sốt xuất huyết trong quá khứ và hiện tại đã có kháng thể bảo vệ (Không phải đợt bệnh cấp).",
      "decrease": "🔹 **Âm tính:**\n    ▫️ Chưa nhiễm bệnh hoặc lấy mẫu quá sớm trong giai đoạn cửa sổ của vi rút."
    },
    "interferingFactors": "❌ **Lỗi thời điểm:** Chạy test IgM/IgG vào ngày thứ 1 hoặc 2 của cơn sốt là không có giá trị chẩn đoán.\n💊 **Bệnh lý nền:** Tình trạng tăng yếu tố dạng thấp (RF) cao có thể gây phản ứng nhiễu trên test nhanh.",
    "clinicalNote": "Theo Hướng dẫn chẩn đoán và điều trị Sốt xuất huyết Dengue (**QĐ 1450/QĐ-BYT 2024**), việc phân biệt nhiễm tiên phát hay thứ phát rất quan trọng. Bệnh nhân tái nhiễm (thứ phát, có IgG dương tính sớm) có nguy cơ diễn tiến nặng, thoát huyết tương và rơi vào Sốc (Dengue Shock Syndrome) cao hơn rất nhiều so với nhiễm lần đầu do cơ chế tăng cường miễn dịch phụ thuộc kháng thể (ADE)."
  },
  {
    "name": "Dengue virus NS1Ag test nhanh [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "NS1 (Non-Structural protein 1) là một kháng nguyên protein không cấu trúc do vi rút Dengue tiết ra vào dòng máu trong quá trình nhân lên. Nó xuất hiện cực kỳ sớm ngay khi vi rút vừa xâm nhập cơ thể.",
    "physiology": "📌 **Động học:** Kháng nguyên NS1 xuất hiện trong máu ngay từ ngày đầu tiên (ngày 1) có triệu chứng sốt và nồng độ duy trì ở mức cao trong 5 ngày đầu. Sau ngày thứ 5, kháng nguyên này bị trung hòa bởi các kháng thể nội sinh nên giảm nhanh chóng.",
    "indication": "🎯 **Chẩn đoán cực sớm:** Khẳng định bệnh Sốt xuất huyết Dengue trong giai đoạn đầu tiên (từ ngày 1 đến ngày 5 của bệnh) khi kháng thể IgM/IgG chưa hình thành.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh, huyết tương.\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn. Cần chỉ định lấy máu ngay khi bệnh nhân có biểu hiện sốt cao đột ngột, nghi ngờ dịch tễ.",
    "testingMethods": "Sắc ký miễn dịch (Test nhanh định tính).",
    "ref": "📊 **Bình thường:** Âm tính (-).",
    "alert": "⚠️ Sau ngày thứ 5 của cơn sốt, nồng độ NS1 trong máu sụt giảm rất nhanh. Một kết quả **NS1 (-) ở ngày thứ 6 hoàn toàn không loại trừ được Sốt xuất huyết** (lúc này phải chuyển sang xét nghiệm IgM/IgG).\n💡 Không được dùng mức độ đậm nhạt của vạch test NS1 để tiên lượng độ nặng của bệnh (Vạch NS1 đậm không có nghĩa là bệnh nhân chắc chắn sẽ bị sốc hay giảm tiểu cầu nặng).",
    "pathologicalMeaning": {
      "increase": "🔹 **NS1Ag Dương tính (+):**\n  🔴 **Ý nghĩa chẩn đoán:**\n    ▫️ Khẳng định chắc chắn bệnh nhân đang nhiễm vi rút Dengue cấp tính ở giai đoạn sớm (Giai đoạn vi rút huyết - Viremia).\n  🔴 **Đặc điểm lâm sàng đi kèm:**\n    ▫️ Giai đoạn này bệnh nhân thường sốt cao liên tục 39-40 độ C, nhức mỏi cơ khớp rã rời, đau hốc mắt, sung huyết da (nhưng chưa đến giai đoạn nguy hiểm thoát mạch).",
      "decrease": "🔹 **Âm tính:**\n    ▫️ Không mắc bệnh hoặc lấy mẫu quá muộn (khi vi rút huyết đã giảm)."
    },
    "interferingFactors": "❌ **Âm tính giả:** Bệnh nhân đến khám muộn (sau ngày 5), hoặc tải lượng vi rút sinh ra trong máu quá thấp dưới ngưỡng phát hiện của test nhanh.",
    "clinicalNote": "Theo Phác đồ điều trị của Bộ Y tế hiện hành (**QĐ 1450/QĐ-BYT 2024**), chiến lược cận lâm sàng hoàn hảo nhất là: Sốt < 4 ngày: Chỉ định NS1Ag. Sốt ≥ 4 ngày: Chỉ định IgM/IgG. Cần đặc biệt ghi nhớ, dù test NS1 (+) hay (-), việc quyết định truyền dịch hay cho bệnh nhân nhập viện phải dựa vào việc theo dõi sát sao **HCT (Dung tích hồng cầu) và Tiểu cầu (PLT)** mỗi ngày, vì đây mới là các thông số phản ánh biến chứng thoát dịch và chảy máu."
  },
   {
    "name": "Treponema pallidum test nhanh [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Xét nghiệm test nhanh phát hiện kháng thể đặc hiệu chống lại xoắn khuẩn **Treponema pallidum** - tác nhân gây bệnh Giang mai (Syphilis).",
    "physiology": "📌 **Động học:** Kháng thể đặc hiệu xuất hiện trong máu từ 1 - 4 tuần sau khi xuất hiện săng giang mai.\n📌 **Đặc tính:** Kháng thể này tồn tại rất lâu, thường là **suốt đời** ngay cả khi bệnh nhân đã được điều trị khỏi bệnh thành công.",
    "indication": "🎯 **Sàng lọc:** Phụ nữ mang thai, người hiến máu, nhóm đối tượng có nguy cơ cao (quan hệ tình dục không an toàn).\n🎯 **Chẩn đoán:** Hỗ trợ chẩn đoán sơ bộ bệnh giang mai ở các tuyến cơ sở.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh, huyết tương hoặc máu toàn phần.\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn.\n⚠️ **Bảo mật:** Yêu cầu tư vấn và bảo mật thông tin người bệnh trước và sau xét nghiệm.",
    "testingMethods": "Sắc ký miễn dịch (Test nhanh định tính).",
    "ref": "📊 **Bình thường:** Âm tính (-).",
    "alert": "⚠️ Kết quả Treponema pallidum test nhanh Dương tính (+) **chỉ chứng tỏ bệnh nhân đã từng nhiễm** xoắn khuẩn giang mai. Nó KHÔNG thể phân biệt được bệnh nhân đang mắc bệnh cấp tính hay là sẹo huyết thanh của một nhiễm trùng trong quá khứ đã được chữa khỏi.",
    "pathologicalMeaning": {
      "increase": "🔹 **Test Dương tính (+):**\n  🔴 **Bệnh lý:**\n    ▫️ Giang mai thời kỳ I, II, III hoặc giang mai tiềm ẩn.\n    ▫️ Tiền sử đã từng mắc bệnh giang mai.",
      "decrease": "🔹 **Test Âm tính (-):**\n    ▫️ Không nhiễm bệnh.\n    ▫️ Giai đoạn cửa sổ (đang ủ bệnh, cơ thể chưa sinh đủ kháng thể)."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Mẫu máu vỡ hồng cầu hoặc nhiễm khuẩn.\n💊 **Dương tính giả:** Có thể gặp ở phụ nữ có thai, bệnh lý tự miễn (Lupus ban đỏ hệ thống), bệnh phong, sốt rét, hoặc các nhiễm trùng xoắn khuẩn khác (Yaws, Pinta).",
    "clinicalNote": "Nếu Treponema pallidum test nhanh cho kết quả Dương tính, bác sĩ **bắt buộc phải chỉ định thêm** các xét nghiệm không đặc hiệu (như RPR hoặc VDRL) để định lượng kháng thể. RPR/VDRL sẽ phản ánh mức độ hoạt động thực sự của bệnh ở hiện tại và được dùng để theo dõi xem phác đồ điều trị kháng sinh (Penicillin) có hiệu quả hay không [1]."
  },
  {
    "name": "Salmonella Widal [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Phản ứng Widal là xét nghiệm ngưng kết nhằm phát hiện kháng thể đặc hiệu trong huyết thanh chống lại kháng nguyên thân (O) và kháng nguyên lông (H) của trực khuẩn **Salmonella typhi và paratyphi** (tác nhân gây bệnh Thương hàn).",
    "physiology": "📌 **Kháng thể O (IgM):** Xuất hiện sớm từ ngày 8 của bệnh, đạt đỉnh ở tuần thứ 3 và giảm nhanh chóng. Phản ánh một nhiễm trùng cấp tính.\n📌 **Kháng thể H (IgG):** Xuất hiện muộn hơn (ngày 10-12), tăng từ từ và tồn tại rất lâu trong máu (có thể nhiều năm). Phản ánh tình trạng đã từng mắc bệnh hoặc sau tiêm vắc xin.",
    "indication": "🎯 **Chẩn đoán:** Hỗ trợ chẩn đoán sốt thương hàn và phó thương hàn ở tuần thứ 2 của bệnh trở đi.\n🎯 **Dịch tễ:** Thăm dò dịch tễ học tại các khu vực đang có dịch thương hàn bùng phát.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn.\n⚠️ **Lưu ý:** Thường yêu cầu lấy **2 mẫu máu** cách nhau 1 tuần để tìm động lực kháng thể (sự gia tăng hiệu giá kháng thể).",
    "testingMethods": "Phản ứng ngưng kết trên phiến kính hoặc trong ống nghiệm.",
    "ref": "📊 **Bình thường:** Kháng thể O < 1/100 và Kháng thể H < 1/200.",
    "alert": "⚠️ Phản ứng Widal có độ nhạy và độ đặc hiệu không cao. Xét nghiệm âm tính trong tuần đầu tiên của cơn sốt là điều hoàn toàn bình thường (do cơ thể chưa kịp sinh kháng thể).\n💡 Việc lạm dụng kháng sinh sớm có thể ngăn cản sự hình thành kháng thể, dẫn đến kết quả Widal **âm tính giả** dù bệnh nhân thực sự mắc thương hàn.",
    "pathologicalMeaning": {
      "increase": "🔹 **Widal Dương tính có ý nghĩa chẩn đoán:**\n  🔴 **Nhiễm thương hàn cấp tính:**\n    ▫️ Hiệu giá kháng nguyên O ≥ 1/100 và H ≥ 1/200 ở một lần thử duy nhất (có giá trị gợi ý).\n    ▫️ Động lực kháng thể tăng gấp 4 lần giữa 2 lần lấy máu cách nhau 7-10 ngày (giá trị chẩn đoán chắc chắn).\n  🔴 **Tình trạng khác:**\n    ▫️ Kháng thể H tăng cao đơn độc: Tiền sử mắc thương hàn hoặc đã tiêm vắc xin (TAB).",
      "decrease": "Không có ý nghĩa lâm sàng đặc hiệu."
    },
    "interferingFactors": "❌ **Dương tính giả:** Viêm gan mạn, các nhiễm khuẩn đường ruột khác do có phản ứng chéo kháng nguyên.\n💊 **Âm tính giả:** Bệnh nhân suy giảm miễn dịch, hoặc đã dùng kháng sinh đặc hiệu từ rất sớm.",
    "clinicalNote": "Ngày nay, để chẩn đoán chính xác bệnh thương hàn trong tuần đầu tiên của cơn sốt, **Cấy máu** (Blood culture) là tiêu chuẩn vàng. Phản ứng Widal chủ yếu mang lại lợi ích chẩn đoán hồi cứu khi cấy máu âm tính hoặc được áp dụng ở các cơ sở y tế tuyến dưới thiếu trang thiết bị nuôi cấy vi sinh [1]."
  },
  {
    "name": "HBsAg miễn dịch tự động [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "HBsAg là kháng nguyên bề mặt của vi rút Viêm gan B (HBV). Đo HBsAg bằng hệ thống miễn dịch tự động (phát quang hóa học) mang lại độ nhạy tuyệt đối, giúp khẳng định sự hiện diện của HBV trong cơ thể.",
    "physiology": "📌 **Động học:** Xuất hiện rất sớm trong máu từ 1 - 10 tuần sau khi phơi nhiễm, ngay cả trước khi men gan (ALT/AST) tăng hoặc có triệu chứng vàng da.\n📌 **Tiến triển mạn tính:** Nếu HBsAg tồn tại liên tục trong máu **vượt quá 6 tháng**, bệnh nhân được chẩn đoán là nhiễm Viêm gan B mạn tính.",
    "indication": "🎯 **Sàng lọc:** Mọi phụ nữ có thai (để dự phòng lây truyền mẹ con), người hiến máu, khám sức khỏe định kỳ.\n🎯 **Chẩn đoán:** Khẳng định bệnh viêm gan B cấp hoặc mạn tính.\n🎯 **Theo dõi:** Đánh giá đáp ứng với liệu pháp điều trị kháng vi rút.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh hoặc huyết tương.\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn.",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA, ECLIA) hoặc Điện hóa phát quang.",
    "ref": "📊 **Bình thường:** Âm tính (Chỉ số COI/SCO < 1.0 tùy hệ thống).",
    "alert": "⚠️ HBsAg Dương tính (+) chỉ khẳng định có vi rút trong cơ thể, **không phản ánh** mức độ nhân lên của vi rút hay sự tàn phá gan. Bắt buộc phải đo thêm men gan và tải lượng vi rút.\n💡 Hiện nay, sự xuất hiện của **Định lượng HBsAg (qHBsAg)** giúp bác sĩ tiên lượng khả năng chuyển đổi huyết thanh và quyết định thời điểm an toàn để ngừng thuốc kháng vi rút.",
    "pathologicalMeaning": {
      "increase": "🔹 **HBsAg Dương tính (Nhiễm HBV):**\n  🔴 **Viêm gan B cấp tính:** Vi rút đang nhân lên mạnh, nguy cơ lây nhiễm cao.\n  🔴 **Viêm gan B mạn tính:** HBsAg dương tính kéo dài > 6 tháng.\n  🔴 **Người lành mang vi rút (Thể dung nạp/ẩn):** HBsAg (+), nhưng men gan bình thường, HBV-DNA thấp, không có tổn thương viêm hoại tử nhu mô gan.",
      "decrease": "🔹 **HBsAg Âm tính:**\n    ▫️ Không nhiễm HBV hoặc vi rút đã bị thải trừ hoàn toàn (Cần đo thêm Anti-HBs để xác nhận cơ thể đã có kháng thể bảo vệ chưa)."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Mẫu máu vỡ hồng cầu nặng có thể ảnh hưởng quang học của máy đo.\n💊 **Dương tính giả thoáng qua:** Bệnh nhân vừa tiêm vắc xin Viêm gan B trong vòng 1-2 tuần trước đó.",
    "clinicalNote": "Theo bản cập nhật **WHO 2024**, chiến lược **'Reflex HBV DNA testing'** được ưu tiên áp dụng: Khi phòng xét nghiệm chạy ra kết quả HBsAg Dương tính, mẫu máu lưu trữ đó sẽ tự động được sử dụng để đo ngay tải lượng HBV-DNA (PCR) mà không cần chờ bệnh nhân quay lại. Việc này giúp thúc đẩy liên kết chăm sóc, rút ngắn thời gian và đưa bệnh nhân vào phác đồ điều trị sớm nhất [2, 3]."
  },
  {
    "name": "HCV Ab miễn dịch tự động [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Anti-HCV (HCV Ab) là kháng thể do hệ miễn dịch tạo ra để chống lại Vi rút Viêm gan C (HCV). Xét nghiệm miễn dịch tự động (CLIA) mang lại độ nhạy và đặc hiệu gần 100% trong việc phát hiện sự phơi nhiễm với HCV.",
    "physiology": "📌 **Động học:** Sự chuyển đổi huyết thanh (xuất hiện kháng thể) khá muộn, thường từ **15 - 30 ngày** sau khi nồng độ men gan đạt đỉnh.\n📌 **Đặc tính:** Kháng thể Anti-HCV **không có vai trò bảo vệ**. Nó sẽ tồn tại suốt đời trong máu ngay cả khi bệnh nhân đã được điều trị tiêu diệt hoàn toàn vi rút.",
    "indication": "🎯 **Sàng lọc:** Quần thể nguy cơ cao (nhận truyền máu trước 1990, tiêm chích, chạy thận nhân tạo), kiểm tra sức khỏe tổng quát.\n🎯 **Chẩn đoán:** Tìm nguyên nhân viêm gan, xơ gan, hoặc bất thường men gan chưa rõ lý do.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh hoặc huyết tương.\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn.",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA, ECLIA).",
    "ref": "📊 **Bình thường:** Âm tính (Chỉ số S/CO < 1.0 tùy hệ thống).",
    "alert": "⚠️ Kết quả Anti-HCV Dương tính (+) **KHÔNG ĐỒNG NGHĨA** với việc bệnh nhân hiện đang mắc Viêm gan C. Nó chỉ chứng minh bệnh nhân đã TỪNG tiếp xúc với vi rút trong quá khứ.\n💡 Có khoảng 15-25% bệnh nhân tự thải trừ vi rút HCV cấp tính mà không cần thuốc, nhưng Anti-HCV của họ vẫn sẽ dương tính suốt đời.",
    "pathologicalMeaning": {
      "increase": "🔹 **Anti-HCV Dương tính (+):**\n  🔴 **Tình trạng phơi nhiễm:**\n    ▫️ Đang nhiễm Viêm gan C cấp hoặc mạn tính.\n    ▫️ Tiền sử đã nhiễm Viêm gan C và đã khỏi bệnh (tự khỏi hoặc do điều trị thành công).",
      "decrease": "🔹 **Anti-HCV Âm tính (-):**\n    ▫️ Không bị lây nhiễm.\n    ▫️ Đang ở \"Giai đoạn cửa sổ\" (phơi nhiễm cấp tính nhưng cơ thể chưa kịp sản xuất kháng thể)."
    },
    "interferingFactors": "❌ **Âm tính giả:** Thường gặp ở bệnh nhân suy giảm miễn dịch nặng (đồng nhiễm HIV), bệnh nhân chạy thận nhân tạo (do suy giảm sản xuất kháng thể).\n💊 **Dương tính giả:** Ở bệnh nhân có bệnh lý tự miễn hoặc có yếu tố dạng thấp (RF) tăng cao.",
    "clinicalNote": "Theo **Quyết định 2855/QĐ-BYT (2024)**, quy trình chuẩn khi có kết quả Anti-HCV Dương tính là **BẮT BUỘC** chỉ định đo ngay tải lượng **HCV-RNA (bằng PCR)**. Nếu HCV-RNA dương tính, bệnh nhân sẽ được đánh giá mức độ xơ hóa gan bằng các phương pháp không xâm lấn (như FIB-4, APRI) và bắt đầu phác đồ thuốc kháng vi rút trực tiếp (DAA) ưu việt hiện nay với tỷ lệ chữa khỏi dứt điểm (SVR) trên 95% [4, 5]."
  },
   {
    "name": "Định lượng NT-ProBNP [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "NT-ProBNP (N-terminal pro-brain natriuretic peptide) là một đoạn peptid không có hoạt tính sinh học, được giải phóng vào máu khi cơ tâm thất bị kéo căng do tăng áp lực hoặc quá tải thể tích. Đây là \"Tiêu chuẩn vàng\" sinh hóa để chẩn đoán suy tim.",
    "physiology": "📌 **Nguồn gốc:** Tiết ra chủ yếu từ các tế bào cơ tâm thất của tim.\n📌 **Động học:** NT-ProBNP có thời gian bán hủy dài (khoảng 120 phút) và ổn định trong ống nghiệm hơn nhiều so với BNP (chỉ 20 phút).\n📌 **Thải trừ:** Lọc và bài xuất hoàn toàn qua thận.",
    "indication": "🎯 **Cấp cứu hô hấp:** Vũ khí sắc bén nhất để phân biệt tình trạng khó thở do suy tim cấp với khó thở do các bệnh lý phổi (COPD, hen).\n🎯 **Phân tầng:** Đánh giá mức độ trầm trọng và tiên lượng rủi ro tử vong ở bệnh nhân suy tim.\n🎯 **Giám sát:** Theo dõi đáp ứng với các thuốc điều trị nội khoa suy tim.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh hoặc huyết tương (thường dùng ống EDTA).\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn. Bệnh nhân nên được nghỉ ngơi tĩnh trước khi lấy máu.",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA, ECLIA).",
    "ref": "📊 **Bình thường (Loại trừ suy tim mạn):** < 125 pg/mL.\n📊 **Ngưỡng cấp cứu (Rule-out suy tim cấp):** < 300 pg/mL.\n📊 **Ngưỡng chẩn đoán (Rule-in suy tim cấp) theo tuổi:** \n▫️ Dưới 50 tuổi: > 450 pg/mL.\n▫️ 50 - 75 tuổi: > 900 pg/mL.\n▫️ Trên 75 tuổi: > 1800 pg/mL.",
    "alert": "⚠️ Độ thanh thải của thận chi phối mạnh mẽ NT-ProBNP. Ở bệnh nhân Suy thận mạn, NT-ProBNP sẽ **tăng cao giả tạo** do giảm thải trừ.\n💡 Ngược lại, ở bệnh nhân béo phì (BMI cao), NT-ProBNP lại có xu hướng **thấp giả tạo**, khiến bác sĩ dễ bỏ sót chẩn đoán suy tim nếu chỉ nhìn đơn thuần vào con số.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng NT-ProBNP:**\n  🔴 **Bệnh lý cơ tim (Căng giãn cơ tim):**\n    ▫️ Suy tim sung huyết cấp/mạn tính (Tăng cực cao, tỷ lệ thuận với phân độ NYHA).\n    ▫️ Nhồi máu cơ tim cấp, hội chứng vành cấp.\n    ▫️ Bệnh lý van tim, phì đại thất trái, viêm cơ tim.\n  🔴 **Bệnh lý ngoài tim:**\n    ▫️ Thuyên tắc phổi, tăng áp động mạch phổi, tâm phế mạn (COPD).\n    ▫️ Suy thận cấp/mạn.",
      "decrease": "🔹 **Giảm NT-ProBNP:**\n    ▫️ Phản ánh bệnh nhân đang đáp ứng rất tốt với phác đồ điều trị suy tim hiện tại (giảm tải thể tích và áp lực buồng tim)."
    },
    "interferingFactors": "❌ **Yếu tố sinh lý:** Tăng tự nhiên ở người cao tuổi và phụ nữ. Giảm ở người béo phì.\n💊 **Thuốc:** Nhóm thuốc điều trị suy tim mới ARNI (như Entresto) làm tăng nồng độ BNP nhưng **KHÔNG** làm tăng NT-ProBNP.",
    "clinicalNote": "Theo bản cập nhật từ **AHA/ACC**, một giá trị NT-ProBNP < 300 pg/mL ở bệnh nhân nhập viện cấp cứu vì khó thở cho phép bác sĩ loại trừ nguyên nhân suy tim cấp với độ tin cậy lên tới 98-99%. Ngoài ra, với sự phổ biến của nhóm thuốc ARNI (Entresto), **NT-ProBNP là chỉ dấu duy nhất được công nhận** để theo dõi hiệu quả suy tim ở nhóm bệnh nhân này, vì đo BNP sẽ bị dương tính giả [6, 7]."
  },
   {
    "name": "Định lượng Troponin I [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Troponin I (cTnI) là một protein co cơ đặc hiệu tuyệt đối cho cơ tim. Khác với CK-MB hay Myoglobin có thể tăng khi tổn thương cơ vân, Troponin I chỉ giải phóng vào máu khi tế bào cơ tim bị hoại tử hoặc tổn thương nghiêm trọng.",
    "physiology": "📌 **Động học (Nhồi máu cơ tim):** Bắt đầu tăng từ 3 - 6 giờ sau tổn thương, đạt đỉnh ở 14 - 20 giờ và **kéo dài rất lâu** (từ 5 đến 7 ngày, Troponin T có thể kéo dài tới 14 ngày).\n📌 **Thanh thải:** Kích thước phân tử lớn, thanh thải chậm qua hệ thống nội mô và thận.",
    "indication": "🎯 **Cấp cứu (Tiêu chuẩn vàng):** Chẩn đoán xác định Nhồi máu cơ tim cấp (NMCT) và Hội chứng vành cấp (ACS).\n🎯 **Phân tầng rủi ro:** Đánh giá tiên lượng tử vong ở bệnh nhân suy tim, viêm cơ tim hoặc bệnh nhân hồi sức tích cực (ICU).\n🎯 **Bilan trước mổ:** Đánh giá rủi ro tim mạch chu phẫu theo hướng dẫn AHA/ACC 2024.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh hoặc huyết tương (EDTA/Heparin tùy hệ thống máy).\n⏳ **Chuẩn bị:** Cấp cứu không cần nhịn ăn. Lấy máu theo chuỗi thời gian (Vd: 0 giờ, 1 giờ, 2 giờ).",
    "testingMethods": "Hóa phát quang miễn dịch siêu nhạy (hs-cTnI).",
    "ref": "📊 **Ngưỡng truyền thống:** < 0,04 ng/mL.\n📊 **Cập nhật AHA/ACC 2025 (hs-cTnI):** Ngưỡng phân vị thứ 99 (99th percentile) phụ thuộc vào giới tính. Phụ nữ có khối lượng cơ tim nhỏ hơn nên ngưỡng cắt (cut-off) bình thường sẽ **thấp hơn nam giới**.",
    "alert": "⚠️ **Cập nhật AHA/ACC 2025:** Troponin siêu nhạy (hs-cTn) là tiêu chuẩn vàng. Việc sử dụng phác đồ loại trừ nhanh (Rule-out) ở thời điểm **0 giờ và 1 giờ** (hoặc 2 giờ) bằng hs-cTn cho phép bác sĩ cho bệnh nhân xuất viện an toàn chỉ sau 1-2 tiếng theo dõi nếu không có biến động động học (Delta thay đổi không có ý nghĩa).",
    "pathologicalMeaning": {
      "increase": "🔹 **Bệnh lý Mạch vành (Hội chứng vành cấp - ACS):**\n  🔴 **Hoại tử cơ tim do thiếu máu cục bộ:**\n    ▫️ Nhồi máu cơ tim cấp (ST chênh lên hoặc không có ST chênh lên).\n🔹 **Tổn thương cơ tim không do Mạch vành:**\n  🔴 **Bệnh lý cơ tim trực tiếp:**\n    ▫️ Viêm cơ tim cấp (do virus, tự miễn), đụng dập cơ tim do chấn thương.\n    ▫️ Suy tim cấp mất bù.\n    ▫️ Độc tính cơ tim do hóa chất điều trị ung thư (Doxorubicin).\n  🔴 **Tổn thương thứ phát (Mất cân bằng cung/cầu Oxy):**\n    ▫️ Tắc mạch phổi (gây căng giãn thất phải).\n    ▫️ Nhiễm trùng huyết nặng (Sepsis), sốc nhiễm khuẩn.\n    ▫️ Suy thận mạn tính (làm giảm thanh thải và tổn thương cơ tim âm ỉ).",
      "decrease": "Không có ý nghĩa bệnh lý lâm sàng."
    },
    "interferingFactors": "❌ **Giao thoa:** Yếu tố dạng thấp (RF) ở nồng độ rất cao hoặc kháng thể dị vòng (HAMA) có thể gây kết quả dương tính giả.\n💊 **Bệnh lý nền:** Bệnh thận mạn tính thường làm nền Troponin tăng nhẹ dai dẳng, do đó chẩn đoán NMCT bắt buộc phải dựa vào **động học (sự tăng/giảm rõ rệt)** thay vì chỉ một con số cắt ngang.",
    "clinicalNote": "Theo **AHA/ACC 2025**, để chẩn đoán chính xác tổn thương cơ tim cấp, bắt buộc phải có sự biến thiên nồng độ (tăng lên hoặc giảm xuống) trong đó ít nhất một giá trị vượt ngưỡng phân vị thứ 99. Nếu Troponin tăng cao nhưng duy trì bình nguyên (không thay đổi qua các lần đo), đó là tổn thương cơ tim mạn tính (như suy thận, suy tim mạn) chứ không phải nhồi máu cơ tim cấp."
  },
   {
    "name": "Định lượng Ferritin [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Ferritin là protein dự trữ sắt chính của cơ thể (chủ yếu ở gan, lách, tủy xương). Trong máu, nồng độ Ferritin huyết thanh phản ánh trực tiếp và chính xác nhất tổng khối lượng sắt dự trữ có thể huy động được (1 ng/mL Ferritin tương đương 10 mg sắt dự trữ).",
    "physiology": "📌 **Đặc tính:** Ferritin đồng thời là một **protein phản ứng pha cấp** (Acute-phase reactant). Nghĩa là nồng độ của nó sẽ tự động tăng vọt khi cơ thể có tình trạng viêm, nhiễm trùng hoặc hoại tử mô, bất kể kho dự trữ sắt thực tế là bao nhiêu.",
    "indication": "🎯 **Chẩn đoán:** Tiêu chuẩn vàng để chẩn đoán phân biệt Thiếu máu thiếu sắt (Ferritin giảm) với Thiếu máu do bệnh mạn tính (Ferritin tăng/bình thường).\n🎯 **Quá tải sắt:** Sàng lọc và theo dõi bệnh nhiễm thiết huyết tố (Hemochromatosis) hoặc bệnh nhân phải truyền máu nhiều lần (Thalassemia).\n🎯 **Dinh dưỡng:** Đánh giá rủi ro thiếu hụt sắt ở nhóm nguy cơ cao (phụ nữ có thai, trẻ đẻ non).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh hoặc huyết tương.\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn qua đêm. Lấy máu vào buổi sáng.",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA, ECLIA).",
    "ref": "📊 **Nam:** 30 - 400 ng/mL (hoặc µg/L).\n📊 **Nữ:** 13 - 150 ng/mL.\n*(Ngưỡng thiếu hụt sắt chắc chắn: < 15 ng/mL. Tuy nhiên ở người có bệnh viêm nhiễm, ngưỡng thiếu sắt có thể được đẩy lên < 100 ng/mL).*.",
    "alert": "⚠️ Ferritin là xét nghiệm nhạy nhất để phát hiện tình trạng cạn kiệt dự trữ sắt (giảm rất lâu trước khi hồng cầu nhỏ lại hay lượng Hemoglobin sụt giảm). Tuy nhiên, nó dễ bị **bình thường hóa giả tạo** nếu bệnh nhân đang có sốt, viêm nhiễm hoặc mắc bệnh gan.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng do Quá tải Sắt thực sự:**\n  🔴 **Bệnh lý:**\n    ▫️ Bệnh nhiễm thiết huyết tố bẩm sinh (Hemochromatosis) (nồng độ có thể > 1000 ng/mL).\n    ▫️ Quá tải sắt thứ phát (truyền máu nhiều lần trong Thalassemia, suy tủy).\n🔹 **Tăng do Hội chứng Viêm / Phá hủy mô (Phản ứng pha cấp):**\n  🔴 **Nhiễm trùng & Viêm mạn tính:**\n    ▫️ Viêm khớp dạng thấp, Lupus, nhiễm trùng huyết.\n  🔴 **Tổn thương tế bào gan:**\n    ▫️ Viêm gan virus cấp, xơ gan do rượu, gan nhiễm mỡ (giải phóng Ferritin dự trữ từ tế bào gan bị vỡ vào máu).\n  🔴 **Ác tính:**\n    ▫️ Bệnh bạch cầu cấp (Leukemia), U lympho Hodgkin, ung thư biểu mô.",
      "decrease": "🔹 **Giảm Ferritin máu (Cạn kiệt dự trữ sắt):**\n  🔴 **Cung cấp thiếu / Mất máu mạn tính:**\n    ▫️ Xuất huyết rỉ rả đường tiêu hóa (loét dạ dày, trĩ, ung thư đại tràng) hoặc rong kinh nặng.\n    ▫️ Chế độ ăn thiếu sắt, hội chứng kém hấp thu (bệnh Celiac).\n  🔴 **Tăng nhu cầu:**\n    ▫️ Phụ nữ mang thai (đặc biệt 3 tháng cuối), trẻ em đang giai đoạn tăng trưởng nhanh."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Mẫu máu vỡ hồng cầu hoặc nồng độ Lipid máu quá cao.\n💊 **Thuốc:** Bổ sung sắt đường uống/tĩnh mạch trước đó làm tăng tạm thời Ferritin. Dùng thuốc tránh thai đường uống cũng làm tăng Ferritin.",
    "clinicalNote": "Theo hướng dẫn của Hiệp hội USPSTF (Mỹ), việc sàng lọc thiếu máu thiếu sắt là bắt buộc đối với phụ nữ mang thai. Khi điều trị thiếu máu thiếu sắt, nồng độ Hemoglobin có thể bình thường lại sau vài tuần, nhưng bác sĩ phải duy trì việc uống Sắt liên tục trong **3 đến 6 tháng** cho đến khi xét nghiệm Ferritin máu đạt mức dự trữ an toàn."
  },
   {
    "name": "Định lượng Folate (Vitamin B9) [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Folate (hay Folic Acid) là một vitamin nhóm B hòa tan trong nước, thiết yếu đối với quá trình tổng hợp DNA, RNA và sự phân chia tế bào (đặc biệt là quá trình tạo hồng cầu ở tủy xương). Cơ thể không tự tổng hợp được Folate mà phải hấp thu hoàn toàn từ thức ăn (rau xanh, nấm, gan động vật) tại hỗng tràng.",
    "physiology": "📌 **Dự trữ:** Kho chứa Folate của cơ thể rất nhỏ. Nếu ngừng hoàn toàn nguồn cung cấp, cơ thể sẽ cạn kiệt Folate và biểu hiện thiếu máu chỉ sau **3 đến 4 tháng** (nhanh hơn rất nhiều so với Vitamin B12 kéo dài 3-5 năm).\n📌 **Động học:** Nồng độ Folate huyết thanh phản ánh lượng Folate được hấp thu gần đây. Để đánh giá dự trữ tế bào chính xác hơn, có thể đo Folate trong hồng cầu.",
    "indication": "🎯 **Huyết học:** Chẩn đoán phân biệt nguyên nhân gây Thiếu máu hồng cầu to (Macrocytic anemia).\n🎯 **Dinh dưỡng & Sản khoa:** Đánh giá tình trạng suy dinh dưỡng, nghiện rượu. Tầm soát trước mang thai để dự phòng dị tật ống thần kinh ở thai nhi.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh (ống tránh sáng).\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn qua đêm (rất quan trọng vì Folate tăng vọt ngay sau bữa ăn).\n⚠️ **Lưu ý:** Mẫu máu không được vỡ hồng cầu (vì nồng độ Folate trong hồng cầu cao gấp nhiều lần huyết thanh).",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA).",
    "ref": "📊 **Bình thường:** > 7,3 nmol/L (≥ 3,3 ng/mL).\n📊 **Thiếu hụt ở mức ranh giới:** 5,7 - 7,3 nmol/L (2,5 - 3,2 ng/mL).\n📊 **Thiếu hụt:** < 5,7 nmol/L (< 2,5 ng/mL).",
    "alert": "⚠️ Nếu bệnh nhân bị thiếu hụt cả Folate và Vitamin B12, việc chỉ kê đơn bù Folate đơn độc sẽ làm tình trạng thiếu máu có vẻ hồi phục, nhưng lại **che lấp và làm trầm trọng thêm các tổn thương thần kinh** không hồi phục do thiếu B12 gây ra. Phải luôn xét nghiệm và bù cả hai nếu cần.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Folate máu (Ít có ý nghĩa bệnh lý):**\n  🔴 **Nguyên nhân:**\n    ▫️ Bổ sung Vitamin quá mức hoặc ăn chế độ ăn cực giàu rau xanh sát giờ xét nghiệm.\n    ▫️ Hội chứng quai ruột mù (Blind loop syndrome) - do vi khuẩn ruột sản sinh quá mức Folate.",
      "decrease": "🔹 **Giảm Folate máu (Thiếu máu hồng cầu to):**\n  🔴 **Giảm cung cấp / Giảm hấp thu:**\n    ▫️ Chế độ ăn nghèo nàn, nghiện rượu mạn tính (nguyên nhân cực kỳ phổ biến).\n    ▫️ Bệnh Celiac, cắt đoạn hỗng tràng.\n  🔴 **Tăng nhu cầu hoặc Mất mát:**\n    ▫️ Phụ nữ có thai, trẻ đẻ non.\n    ▫️ Tình trạng tăng sinh tế bào ác tính (Ung thư máu), tan máu mạn tính.\n    ▫️ Bệnh nhân phải chạy thận nhân tạo."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Vỡ hồng cầu gây tăng giả tạo. Phơi sáng ống máu làm phân hủy Folate gây giảm giả tạo.\n💊 **Thuốc làm GIẢM Folate:** Methotrexate, Phenytoin, thuốc chống co giật, thuốc tránh thai đường uống, Trimethoprim (kháng sinh ức chế tổng hợp Folate).",
    "clinicalNote": "Tình trạng thiếu Folate quanh thời điểm thụ thai làm tăng đáng kể rủi ro khuyết tật ống thần kinh (như nứt đốt sống, thai vô sọ). Mọi hướng dẫn sản khoa hiện đại đều khuyến cáo phụ nữ nên chủ động uống bổ sung Acid Folic (ít nhất 400 µg/ngày) từ 1-3 tháng trước khi có ý định mang thai."
  },
    {
    "name": "Định lượng Vitamin B12 [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Vitamin B12 (Cobalamin) là vi chất phức tạp có chứa Cobalt, không thể thiếu cho quá trình tổng hợp DNA, tạo hồng cầu và duy trì sự toàn vẹn của lớp myelin bao bọc hệ thần kinh. Nguồn cung cấp B12 hoàn toàn từ động vật (thịt, cá, trứng, sữa).",
    "physiology": "📌 **Hấp thu:** Quá trình hấp thu B12 cực kỳ phức tạp. Dạ dày phải tiết ra acid và **Yếu tố nội (Intrinsic Factor)** để gắn kết với B12. Phức hợp này sau đó mới được hấp thu đặc hiệu tại đoạn cuối của hồi tràng.\n📌 **Dự trữ:** Gan là kho chứa khổng lồ của B12. Quá trình cạn kiệt B12 do chế độ ăn mất từ **3 đến 5 năm**.",
    "indication": "🎯 **Huyết học:** Chẩn đoán nguyên nhân Thiếu máu hồng cầu to (bệnh cảnh phân biệt với thiếu Folate).\n🎯 **Thần kinh:** Chẩn đoán các bệnh lý viêm đa dây thần kinh, tê bì tay chân, sa sút trí tuệ, suy giảm trí nhớ không rõ nguyên nhân ở người lớn tuổi.\n🎯 **Tiêu hóa:** Đánh giá tình trạng kém hấp thu ở bệnh nhân viêm teo niêm mạc dạ dày, cắt dạ dày hoặc viêm ruột.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh (ống tránh sáng).\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn qua đêm.",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA, ECLIA).",
    "ref": "📊 **Bình thường:** 151 - 646 pmol/L (205 - 876 pg/mL).\n📊 **Mức ranh giới:** 103 - 150 pmol/L (140 - 204 pg/mL).\n📊 **Thiếu hụt:** < 103 pmol/L (< 140 pg/mL).",
    "alert": "⚠️ Tổn thương thần kinh (tê bì, thất điều, sa sút trí tuệ) do thiếu Vitamin B12 nếu không được phát hiện và bù đắp kịp thời sẽ trở thành **tổn thương vĩnh viễn không thể hồi phục**.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Vitamin B12 máu:**\n  🔴 **Nguyên nhân:**\n    ▫️ Bệnh lý tế bào gan hoại tử (Viêm gan cấp, xơ gan) làm giải phóng kho dự trữ B12 vào máu.\n    ▫️ Bệnh tăng sinh tủy (Đa hồng cầu Vaquez, bạch cầu mạn dòng tủy).\n    ▫️ Uống quá liều thuốc bổ chứa B12.",
      "decrease": "🔹 **Giảm Vitamin B12 máu (Thiếu máu hồng cầu to):**\n  🔴 **Thiếu Yếu tố nội (Bệnh Biermer - Pernicious Anemia):**\n    ▫️ Thiếu máu ác tính do hệ miễn dịch sinh kháng thể phá hủy tế bào thành dạ dày, làm mất hoàn toàn khả năng hấp thu B12.\n  🔴 **Giảm hấp thu tại ruột / dạ dày:**\n    ▫️ Sau phẫu thuật cắt dạ dày, cắt hồi tràng, mổ nối tắt dạ dày giảm béo.\n    ▫️ Hội chứng kém hấp thu, bệnh Crohn, viêm hồi tràng.\n  🔴 **Cung cấp thiếu:**\n    ▫️ Người ăn thuần chay kéo dài (Vegan) không dùng thực phẩm chức năng bổ sung."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Phơi sáng làm giảm giả tạo. Chỉ định xét nghiệm B12 ngay sau khi tiêm thuốc nhuộm huỳnh quang phóng xạ có thể gây sai số.\n💊 **Thuốc làm GIẢM hấp thu B12:** Metformin (thuốc ĐTĐ), thuốc kháng acid dạ dày (Ức chế bơm proton - PPI, kháng H2), Colchicine, Neomycin.",
    "clinicalNote": "Ở bệnh nhân Đái tháo đường Type 2 điều trị bằng **Metformin** dài ngày, tình trạng thiếu hụt Vitamin B12 xảy ra khá phổ biến do cản trở hấp thu. ADA khuyến cáo nên kiểm tra định kỳ nồng độ B12 ở nhóm bệnh nhân này, đặc biệt khi bệnh nhân phàn nàn về chứng tê bì tay chân (dễ bị nhầm lẫn là biến chứng thần kinh do tiểu đường)."
  },
     {
    "name": "Định lượng 25-OH Vitamin D (D3) [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Vitamin D là một prohormon (tiền hormon) thiết yếu giúp ruột hấp thu Canxi và Phospho, duy trì độ khoáng hóa của xương. 25-OH Vitamin D là dạng chuyển hóa tại gan, có nồng độ cao nhất và thời gian bán hủy dài nhất trong máu, do đó nó là \"thước đo chuẩn xác nhất\" để đánh giá kho dự trữ Vitamin D của cơ thể.",
    "physiology": "📌 **Nguồn gốc:** Khoảng 80% được tổng hợp dưới da nhờ tia cực tím (UVB) từ ánh sáng mặt trời, 20% đến từ thức ăn (cá hồi, lòng đỏ trứng, ngũ cốc).\n📌 **Động học:** Chuyển hóa lần 1 tại Gan thành 25-OH Vitamin D (dạng dự trữ, bán hủy 2-3 tuần). Sau đó chuyển hóa lần 2 tại Thận thành 1,25-OH Vitamin D (dạng có hoạt tính sinh học mạnh nhất, bán hủy chỉ vài giờ).",
    "indication": "🎯 **Nội tiết & Xương khớp:** Chẩn đoán còi xương (trẻ em), nhuyễn xương và loãng xương (người lớn).\n🎯 **Bệnh Thận mạn:** Đánh giá tình trạng Rối loạn chuyển hóa khoáng chất và xương (CKD-MBD) theo chuẩn KDIGO 2024.\n🎯 **Tuyến cận giáp:** Tìm nguyên nhân gây cường cận giáp thứ phát (do nồng độ Vitamin D thấp làm giảm Canxi máu, kích thích tiết PTH).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn. Tình trạng lấy máu không bị ảnh hưởng mạnh bởi chu kỳ sinh học ngày đêm.",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA, ECLIA) hoặc LC-MS/MS.",
    "ref": "📊 **Đủ Vitamin D:** 30 - 100 ng/mL (75 - 250 nmol/L).\n📊 **Thiếu hụt ranh giới (Insufficiency):** 20 - 29 ng/mL (50 - 74 nmol/L).\n📊 **Thiếu hụt thực sự (Deficiency):** < 20 ng/mL (< 50 nmol/L).\n📊 **Nguy cơ độc tính:** > 150 ng/mL.",
    "alert": "⚠️ Trong thực hành lâm sàng, tuyệt đối **không chỉ định đo 1,25-OH Vitamin D** để sàng lọc tình trạng thiếu hụt Vitamin D. Dạng có hoạt tính này thường chỉ giảm khi chức năng thận đã suy kiệt nghiêm trọng, và nó có thể tăng bù trừ khiến bác sĩ bị đánh lừa.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Vitamin D (Ngộ độc):**\n  🔴 **Nguyên nhân:**\n    ▫️ Bổ sung quá liều các chế phẩm Vitamin D đường uống liên tục kéo dài.\n    ▫️ Hội chứng Williams (tăng Canxi máu tự phát ở trẻ em).\n    ▫️ (*Lưu ý: Phơi nắng nhiều không bao giờ gây ngộ độc Vitamin D do da có cơ chế tự thoái giáng khi dư thừa*).",
      "decrease": "🔹 **Giảm 25-OH Vitamin D (Thiếu hụt):**\n  🔴 **Giảm tổng hợp / Cung cấp:**\n    ▫️ Ít tiếp xúc ánh sáng mặt trời (làm việc văn phòng, bôi kem chống nắng thường xuyên), người lớn tuổi (da giảm khả năng tổng hợp).\n    ▫️ Chế độ ăn thiếu chất mỡ, hội chứng kém hấp thu (Cắt dạ dày, bệnh Crohn).\n  🔴 **Tăng dị hóa / Thải trừ:**\n    ▫️ Hội chứng thận hư (mất protein mang Vitamin D qua nước tiểu).\n    ▫️ Bệnh gan nặng (giảm khả năng chuyển hóa thành 25-OH).\n    ▫️ Đang dùng thuốc chống co giật kéo dài."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Giao thoa phương pháp giữa các hệ thống máy đo khác nhau. Nếu theo dõi điều trị, nên xét nghiệm trên cùng một hệ thống.\n💊 **Thuốc làm GIẢM:** Phenytoin, Phenobarbital (làm tăng thoái giáng Vitamin D ở gan), Cholestyramine, Orlistat (thuốc giảm béo ngăn hấp thu mỡ).",
    "clinicalNote": "Theo **KDIGO 2024**, bệnh nhân Bệnh thận mạn (CKD) thuộc nhóm nguy cơ cực cao bị thiếu hụt Vitamin D do thận mất khả năng hydroxyl hóa lần 2. Tình trạng này kích hoạt Cường cận giáp thứ phát phá hủy xương. Khuyến cáo mọi bệnh nhân CKD từ giai đoạn 3 trở đi phải được đo 25-OH Vitamin D định kỳ để bù đắp, nhằm cắt đứt vòng xoắn bệnh lý biến chứng mạch máu - xương."
  },
  {
    "name": "Định lượng Sắt chưa bão hòa (UIBC) và Khả năng gắn sắt toàn thể (TIBC) [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "TIBC đánh giá khả năng gắn sắt với transferrin của máu. UIBC là phần khả năng mang sắt không bão hòa (chưa bị gắn). Đây là thông số gián tiếp đánh giá lượng transferrin lưu hành [1], [2].",
    "physiology": "📌 **Động học:** 1 mg transferrin có thể gắn được 1,25 µg sắt [1]. \n📌 **Phân bố:** Bình thường chỉ có khoảng 30% các vị trí gắn sắt trên transferrin được bão hòa [3].",
    "indication": "🎯 **Huyết học:** Chẩn đoán phân biệt các loại thiếu máu (thiếu máu do thiếu sắt, thiếu máu bệnh mạn tính) [4].\n🎯 **Tầm soát:** Sàng lọc và theo dõi tình trạng tăng gánh sắt (nhiễm thiết huyết tố - hemochromatosis) [4].",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Nhịn ăn 12h trước khi lấy máu. Lấy máu vào buổi sáng (sau 10h) [5].\n⚠️ **Lưu ý:** Ngừng các chế phẩm bổ sung sắt 24 - 48h trước khi XN [5].",
    "testingMethods": "Đo quang phổ so màu.",
    "ref": "📊 **Bình thường (TIBC):** 255 - 450 µg/dL (45 - 73 µmol/L) [6], [7].",
    "alert": "⚠️ Tỷ lệ bão hòa Transferrin (Sắt / TIBC) < 15% là tiêu chuẩn vàng để xác định tình trạng thiếu máu do thiếu hụt sắt thực sự [3], [8].",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng TIBC / UIBC:**\n  🔴 **Nguyên nhân sinh lý & Dinh dưỡng:**\n    ▫️ Thiếu hụt sắt, mất máu cấp và mạn tính [2].\n    ▫️ Phụ nữ ở giai đoạn muộn của thai kỳ [2].\n  🔴 **Tổn thương tạng:**\n    ▫️ Tổn thương gan cấp [2].",
      "decrease": "🔹 **Giảm TIBC / UIBC:**\n  🔴 **Bệnh lý ứ đọng và mạn tính:**\n    ▫️ Nhiễm thiết huyết tố (Hemochromatosis) [6].\n    ▫️ Bệnh xơ gan, Thalassemia [6].\n    ▫️ Hội chứng viêm, nhiễm trùng, bệnh ác tính, hội chứng tăng urê máu [6].\n    ▫️ Hội chứng thận hư (mất protein) [6]."
    },
    "interferingFactors": "❌ **Thuốc làm TĂNG TIBC:** Estrogen, thuốc viên ngừa thai [2].\n💊 **Thuốc làm GIẢM TIBC:** Chloramphenicol, corticotropin, testosteron [2].",
    "clinicalNote": "Không được nhầm lẫn giữa TIBC (Toàn thể) và UIBC (Không bão hòa) [2]. Trong ngộ độc sắt cấp tính, tỷ lệ sắt huyết thanh/TIBC không mang lại giá trị chẩn đoán [9]."
  },
  {
    "name": "Định lượng Procalcitonin [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Procalcitonin là một tiền chất của hormon calcitonin, được tiết ra mạnh mẽ bởi nhiều mô trong cơ thể khi có sự hiện diện của độc tố vi khuẩn hoặc các cytokine tiền viêm [10], [11].",
    "physiology": "📌 **Đặc tính:** Có tính đặc hiệu cao hơn CRP trong việc phân biệt giữa nhiễm khuẩn và nhiễm virus [10], [11].",
    "indication": "🎯 **Hồi sức cấp cứu:** Chẩn đoán, tiên lượng và theo dõi các trường hợp nhiễm khuẩn nặng, đặc biệt là nhiễm khuẩn huyết (Sepsis) [11], [12].\n🎯 **Hô hấp:** Đánh giá tình trạng bội nhiễm vi khuẩn ở bệnh nhân nhiễm cúm mùa/Covid-19 [10].",
    "specimenCollection": "💉 **Loại mẫu:** Huyết tương (ống EDTA) [11].\n⏳ **Chuẩn bị:** Thường lấy ngay khi cấp cứu, không yêu cầu nhịn ăn.",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA / ECLIA).",
    "ref": "📊 **Bình thường:** < 0,05 ng/mL [11].",
    "alert": "⚠️ Nồng độ Procalcitonin tăng vọt tỷ lệ thuận với mức độ nặng của tình trạng nhiễm khuẩn huyết và sốc nhiễm khuẩn [12].",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Procalcitonin:**\n  🔴 **Bệnh lý nhiễm trùng:**\n    ▫️ Nhiễm khuẩn huyết, sốc nhiễm khuẩn [12].\n    ▫️ Viêm phổi do vi khuẩn, bội nhiễm sau nhiễm virus [10].\n    ▫️ Nhiễm nấm hệ thống [10].",
      "decrease": "🔹 **Giảm Procalcitonin:**\n    ▫️ Phản ánh đáp ứng tốt với phác đồ kháng sinh hiện tại (nồng độ giảm nhanh chóng khi kiểm soát được ổ nhiễm khuẩn)."
    },
    "interferingFactors": "❌ **Giao thoa:** Ở các bệnh nhân đa chấn thương hoặc bỏng nặng trong những ngày đầu, Procalcitonin có thể tăng mà không do nhiễm khuẩn.",
    "clinicalNote": "Theo các hướng dẫn Hồi sức (Surviving Sepsis Campaign), việc theo dõi động học Procalcitonin không chỉ giúp chẩn đoán mà còn là công cụ mạnh mẽ để bác sĩ quyết định thời điểm an toàn để **ngừng kháng sinh**, giúp giảm tình trạng kháng thuốc."
  },
  {
    "name": "Định lượng Interleukin-6 (Cytokin) [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Cytokin (bao gồm Interleukin-6) là các protein do tế bào của hệ miễn dịch sản xuất, đóng vai trò trung gian trong việc điều hòa miễn dịch, kích hoạt phản ứng viêm và kích thích tạo hồng cầu [13].",
    "physiology": "📌 **Đặc tính:** Các cytokin hoạt động như các tín hiệu thông tin giữa các tế bào. IL-6 là một cytokin tiền viêm chủ chốt, kích thích gan sản xuất các protein pha cấp (như CRP) [13].",
    "indication": "🎯 **Theo dõi hội chứng viêm:** Đánh giá mức độ cơn bão cytokin trong các nhiễm trùng nặng, nhiễm cúm mùa nguy kịch [10], hoặc Covid-19.\n🎯 **Bệnh tự miễn:** Đánh giá và tiên lượng trong Viêm khớp dạng thấp [14].",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh [14].\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn [14].\n⚠️ **Lưu ý:** Bệnh phẩm phải được ly tâm và bảo quản đúng cách vì cytokin tiếp tục sản xuất hoặc phân hủy ngay trong ống nghiệm [15].",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA / ECLIA).",
    "ref": "📊 **Bình thường:** Tùy thuộc vào giá trị tham chiếu của từng hệ thống máy phòng Lab [14].",
    "alert": "⚠️ Sự gia tăng đột ngột của IL-6 là dấu hiệu báo động đỏ cho \"Hội chứng bão Cytokine\" (Cytokine Storm Syndrome), đe dọa tổn thương đa tạng nghiêm trọng.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Cytokin (IL-6):**\n  🔴 **Bệnh lý Miễn dịch & Viêm:**\n    ▫️ Nhiễm trùng huyết do vi khuẩn hoặc virus (Cúm, Covid) [10].\n    ▫️ Viêm khớp dạng thấp [14].\n    ▫️ Hội chứng suy giảm miễn dịch (AIDS) [14].\n  🔴 **Ung bướu:**\n    ▫️ Đa u tủy xương, các bệnh lý ác tính [14].",
      "decrease": "Không mang ý nghĩa lâm sàng đặc hiệu."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Sự thoái giáng nhanh của cytokine nếu không bảo quản mẫu huyết thanh bằng đá lạnh có thể gây sai số [15].",
    "clinicalNote": "Theo Hướng dẫn điều trị cúm mùa của Bộ Y tế, định lượng Cytokines được chỉ định ở các bệnh nhân cúm nặng/nguy kịch để đánh giá tình trạng viêm toàn thân và suy cơ quan [10]."
  },
  {
    "name": "Định lượng Testosteron [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Testosteron là hormon androgen chính. Ở nam, nó chịu trách nhiệm phát triển sinh dục và duy trì đặc tính sinh dục thứ phát. Ở nữ, testosteron đóng vai trò là chất tiền thân để tổng hợp estrogen [16].",
    "physiology": "📌 **Điều hòa:** Được điều hòa qua cơ chế hồi tác âm (feed-back) trên trục dưới đồi - tuyến yên (chịu sự chi phối của LH) [17].\n📌 **Động học:** Nồng độ Testosteron đạt đỉnh cao nhất vào buổi sáng sớm [18].",
    "indication": "🎯 **Ở Nam:** Đánh giá suy chức năng sinh dục, rối loạn cương dương, vô sinh, hoặc tình trạng dậy thì sớm/muộn [19], [20].\n🎯 **Ở Nữ:** Khảo sát tình trạng rậm lông, nam tính hóa, hội chứng buồng trứng đa nang (PCOS) [21].",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh [21].\n⏳ **Chuẩn bị:** Lấy máu vào 7h sáng. Tránh hoạt động thể lực mạnh hoặc stress trước khi xét nghiệm [18].",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA / ECLIA).",
    "ref": "📊 **Nam trưởng thành:** 300 - 1100 ng/dL (10,4 - 38,1 nmol/L) [18], [22].\n📊 **Nữ trưởng thành:** 20 - 90 ng/dL (0,7 - 3,1 nmol/L) [22].",
    "alert": "⚠️ Định lượng Testosteron toàn phần thường là đủ cho chẩn đoán, ngoại trừ trường hợp có bất thường về protein mang (SHBG) thì mới cần đo Testosteron tự do [17].",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Testosteron:**\n  🔴 **Ở Nam:** Dậy thì sớm, khối u tinh hoàn tiết androgen, cường giáp [23].\n  🔴 **Ở Nữ:** Hội chứng buồng trứng đa nang (PCOS), khối u buồng trứng hoặc thượng thận gây nam hóa, tăng sản thượng thận bẩm sinh [24].",
      "decrease": "🔹 **Giảm Testosteron:**\n  🔴 **Ở Nam:**\n    ▫️ Suy sinh dục (nguyên phát hoặc thứ phát do suy tuyến yên) [23].\n    ▫️ Hội chứng Klinefelter, xơ gan, suy thận [23].\n    ▫️ Cắt bỏ tinh hoàn, chấn thương tinh hoàn [23]."
    },
    "interferingFactors": "❌ **Thuốc làm TĂNG:** Nữ dùng estrogen, thuốc chống co giật, tamoxifen [25].\n💊 **Thuốc làm GIẢM:** Nam dùng corticosteroid, cimetidin, estrogen, spironolacton, ketoconazol [25].",
    "clinicalNote": "Ở bệnh nhân nữ có hội chứng buồng trứng đa nang (PCOS), nồng độ testosteron toàn phần tăng nhưng hiếm khi vượt quá 200 ng/dL. Nếu nồng độ > 200 ng/dL, phải nghĩ ngay đến khối u tiết androgen ở buồng trứng hoặc thượng thận [24]."
  },
  {
    "name": "Định lượng Cortisol [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Cortisol là một hormon glucocorticoid thiết yếu do vỏ thượng thận tiết ra dưới sự kích thích của ACTH. Nó chi phối chuyển hóa đường, lipid, protein và giúp cơ thể chống đỡ lại các tình trạng stress [26], [27].",
    "physiology": "📌 **Động học:** Hầu hết gắn với protein (globulin và albumin). Khoảng 5-10% là dạng tự do có hoạt tính [27].\n📌 **Nhịp ngày đêm:** Nồng độ cao nhất vào 8h sáng và thấp nhất vào 20h tối (nửa đêm) [28].",
    "indication": "🎯 **Chẩn đoán:** Phân biệt và chẩn đoán Hội chứng Cushing (cường thượng thận) và Bệnh Addison (suy thượng thận) [29].",
    "specimenCollection": "💉 **Loại mẫu:** Huyết tương.\n⏳ **Chuẩn bị:** Nhịn ăn và hạn chế vận động 10 - 12h. Để chẩn đoán Cushing, bắt buộc phải lấy máu ở 2 thời điểm: 8h sáng và 20h tối để đánh giá nhịp sinh học [28].\n⚠️ **Lưu ý:** Ngừng các thuốc ngừa thai (estroprogestatif) trước 24h [28].",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA / ECLIA).",
    "ref": "📊 **8h - 12h:** 138 - 690 nmol/L (5,0 - 25,0 µg/dL) [30].\n📊 **20h - 8h sáng:** 0 - 276 nmol/L (0 - 10,0 µg/dL) [30].",
    "alert": "⚠️ Tình trạng stress cấp tính, nằm viện, phẫu thuật, trầm cảm hoặc nghiện rượu có thể làm **mất hoàn toàn nhịp ngày đêm bình thường** của cortisol [31].",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Cortisol máu:**\n  🔴 **Bệnh lý nội tiết:**\n    ▫️ Hội chứng Cushing, u tiết ACTH lạc chỗ, ung thư thượng thận [30].\n    ▫️ Cường giáp, béo phì [30].\n  🔴 **Tình trạng Sinh lý & Stress:**\n    ▫️ Có thai, chấn thương, stress thể lực/tâm lý, nhồi máu cơ tim [30].",
      "decrease": "🔹 **Giảm Cortisol máu:**\n  🔴 **Bệnh lý nội tiết:**\n    ▫️ Bệnh Addison (Suy thượng thận nguyên phát) [32].\n    ▫️ Suy tuyến yên (giảm tiết ACTH) [32].\n    ▫️ Hoại tử tuyến yên sau đẻ (Hội chứng Sheehan) [32]."
    },
    "interferingFactors": "❌ **Phản ứng chéo:** Bệnh nhân đang uống Prednison/Prednisolon không nên làm XN này vì thuốc có thể phản ứng chéo với kháng thể đo lường, gây tăng giả tạo [33].\n💊 **Giảm giả tạo:** Bệnh nhân hồi sức tích cực (ICU) bị giảm albumin và globulin máu kéo theo giảm cortisol toàn phần giả tạo [31].",
    "clinicalNote": "Chẩn đoán Hội chứng Cushing đặc trưng bởi việc nồng độ cortisol lúc 20h tối không giảm mà lại duy trì ở mức cao tương đương hoặc cao hơn mức 8h sáng (mất nhịp ngày đêm) [34]. Kết hợp định lượng Cortisol tự do trong nước tiểu 24h sẽ cho kết quả cực kỳ chính xác [29]."
  },
  {
    "name": "Định lượng Insulin [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Insulin là hormon duy nhất có tác dụng làm hạ đường huyết, do tế bào beta của đảo Langerhans (tuyến tụy) sản xuất. Nó cho phép đưa glucose từ dòng máu vào bên trong tế bào để sinh năng lượng [35].",
    "physiology": "📌 **Động học:** Chế tiết tương ứng với mức độ tăng của glucose máu. Đánh giá sự kháng insulin là một chìa khóa trong bệnh lý chuyển hóa [36].",
    "indication": "🎯 **Nội tiết:** Chẩn đoán các nguyên nhân gây hạ đường huyết lúc đói, phát hiện u tiết insulin (Insulinoma) [35].\n🎯 **Chuyển hóa:** Cùng với đường huyết để tính chỉ số HOMA-IR đánh giá tình trạng kháng insulin trong Tiền đái tháo đường và PCOS [36].",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn 8h trước khi lấy máu [35]. Nếu tiến hành nghiệm pháp dung nạp glucose (OGTT), phải lấy máu đo insulin trước khi cho uống đường [35].",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA / ECLIA).",
    "ref": "📊 **Lúc đói:** 2,6 - 24,9 µU/mL (0 - 208 pmol/L) [37], [38].",
    "alert": "⚠️ Khi chẩn đoán hạ đường huyết vô căn, việc định lượng insulin bắt buộc phải đi đôi với định lượng C-peptid để loại trừ nguyên nhân do tiêm lén insulin [39], [40].",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Insulin máu:**\n  🔴 **Bệnh lý Tụy:**\n    ▫️ U tế bào tiết Insulin (Insulinoma) [35].\n  🔴 **Rối loạn Chuyển hóa (Kháng insulin):**\n    ▫️ Đái tháo đường type 2 (giai đoạn đầu), béo phì, hội chứng buồng trứng đa nang (PCOS) [38].\n    ▫️ Hội chứng Cushing, To đầu chi [35].",
      "decrease": "🔹 **Giảm Insulin máu:**\n  🔴 **Bệnh lý Tụy:**\n    ▫️ Đái tháo đường type 1 (tế bào tụy bị phá hủy hoàn toàn) [38], [41].\n    ▫️ Suy tuyến yên."
    },
    "interferingFactors": "❌ **Kháng thể kháng insulin:** Có thể gây nhiễu và làm sai lệch nghiêm trọng kết quả định lượng insulin ở bệnh nhân dùng insulin ngoại sinh. Trong trường hợp này, C-peptid là xét nghiệm thay thế ưu việt [39].",
    "clinicalNote": "Theo bản cập nhật **AACE 2026**, tình trạng kháng insulin (tăng insulin máu bù trừ) trong giai đoạn tiền đái tháo đường được coi là một yếu tố nguy cơ độc lập gây xơ vữa động mạch và bệnh gan nhiễm mỡ MASLD, cần được can thiệp sớm ngay cả khi đường máu chưa đạt mức chẩn đoán [36]."
  },
  {
    "name": "Định lượng C-peptid [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "C-peptid là phần chuỗi acid amin bị cắt ra khi pro-insulin phân tách thành insulin hoạt động. Do tụy luôn bài tiết C-peptid và insulin vào máu với tỷ lệ 1:1, nồng độ C-peptid phản ánh chính xác tuyệt đối **lượng insulin nội sinh** do cơ thể tự sản xuất [39].",
    "physiology": "📌 **Ưu điểm:** Khác với insulin, C-peptid không bị gan giữ lại và thanh thải nhiều, thời gian bán hủy dài hơn, và đặc biệt **không bị nhiễu bởi insulin tiêm từ ngoài vào** [39], [40].",
    "indication": "🎯 **Phân loại Đái tháo đường:** Đánh giá khả năng tiết insulin còn lại của tụy, giúp phân biệt rõ ĐTĐ type 1 (LADA) và ĐTĐ type 2 [39], [41].\n🎯 **Cấp cứu nội tiết:** Chẩn đoán hạ đường huyết giả tạo (do tiêm lén insulin) [42], [40].",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Yêu cầu nhịn ăn 8 - 10h [42]. Có thể làm test động bằng cách đo C-peptid trước và sau khi tiêm Glucagon để kích thích tụy [42].",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA / ECLIA).",
    "ref": "📊 **Bình thường:** 0,37 - 1,47 nmol/L [38].",
    "alert": "⚠️ **Cập nhật ADA 2025 / AACE 2026:** Định lượng C-peptid kết hợp tự kháng thể tụy là tiêu chuẩn vàng khi bệnh nhân ĐTĐ có kiểu hình không điển hình (người gầy, kiểm soát kém, nhanh phải dùng insulin) để xác định xem có phải ĐTĐ Type 1 hoặc LADA hay không [41].",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng C-peptid:**\n  🔴 **Tăng tiết nội sinh:**\n    ▫️ U tiết insulin (Insulinoma) [43], [38].\n    ▫️ Đái tháo đường type 2 có kháng insulin nặng [38].\n    ▫️ Suy thận (do giảm bài xuất C-peptid qua thận làm tăng tích tụ trong máu) [40].",
      "decrease": "🔹 **Giảm C-peptid:**\n  🔴 **Suy kiệt tuyến tụy:**\n    ▫️ Đái tháo đường type 1 [41].\n    ▫️ Hạ đường huyết do tiêm insulin ngoại sinh (tiêm lén) [40]."
    },
    "interferingFactors": "❌ **Thuốc:** Nhóm thuốc kích thích tụy sulfonylureas (Gliclazide, Glimepiride...) làm tăng nồng độ C-peptid máu [40].",
    "clinicalNote": "Để chẩn đoán hạ đường huyết giả tạo (Ví dụ: đầu độc bằng insulin): Nếu tiêm insulin ngoại lai vào, máu sẽ có **Insulin tăng rất cao nhưng C-peptid lại giảm thấp** (do tụy ngừng tiết). Nếu là Insulinoma, cả Insulin và C-peptid đều tăng song hành [40], [43]."
  },
  {
    "name": "Định lượng Thyroglobulin (Tg) [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Thyroglobulin (Tg) là một glycoprotein kích thước lớn, đóng vai trò là chất tiền thân trong quá trình sinh tổng hợp hormon tuyến giáp (T3, T4). Tg **chỉ được sản xuất duy nhất tại các nang tuyến giáp** [44], [11].",
    "physiology": "📌 **Đặc tính:** Sự hiện diện của Tg trong dòng tuần hoàn là dấu hiệu sinh học chứng tỏ có sự tồn tại của mô tuyến giáp (lành tính hoặc ác tính) trong cơ thể [45].",
    "indication": "🎯 **Ung bướu (Chỉ định số 1):** Dùng làm Tumor Marker (chất chỉ điểm khối u) để theo dõi sự tái phát và di căn của Ung thư giáp thể biệt hóa (sau khi đã phẫu thuật cắt bỏ toàn bộ giáp hoặc điều trị I-131) [44], [11].\n🎯 **Nhi khoa:** Chẩn đoán tình trạng không có tuyến giáp bẩm sinh ở trẻ sơ sinh [46].",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn [44].\n⚠️ **Thời điểm vàng:** Chỉ định đo Tg phải tiến hành **ít nhất 6 tuần** sau khi phẫu thuật cắt giáp hoặc xạ trị I-131 (do cần thời gian để Tg cũ thoái giáng hết) [47].",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA / ECLIA).",
    "ref": "📊 **Người có tuyến giáp bình thường:** 1,4 - 7,8 ng/mL (hoặc 0 - 50 ng/mL tùy phương pháp) [44], [11].\n📊 **Sau cắt toàn bộ tuyến giáp:** Giá trị mong muốn là không thể phát hiện (< 0,1 ng/mL).",
    "alert": "⚠️ Tuyệt đối **không khuyến cáo** sử dụng Tg để sàng lọc hay chẩn đoán ban đầu ung thư tuyến giáp vì Tg tăng trong rất nhiều bệnh lý lành tính khác [46].",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Thyroglobulin:**\n  🔴 **Ác tính:**\n    ▫️ Tái phát hoặc di căn ung thư giáp thể nhú / thể nang sau khi đã điều trị tiệt căn [45].\n    ▫️ Sự hiện diện Tg trong dịch màng phổi khẳng định ung thư giáp đã di căn lên phổi [46].\n  🔴 **Lành tính:**\n    ▫️ Viêm tuyến giáp Hashimoto, Basedow, viêm tuyến giáp bán cấp [48].\n    ▫️ Bướu cổ đa nhân [48].",
      "decrease": "🔹 **Giảm Thyroglobulin:**\n    ▫️ Bệnh nhân đã được cắt bỏ tuyến giáp hoàn toàn thành công [48].\n    ▫️ Không có tuyến giáp bẩm sinh."
    },
    "interferingFactors": "❌ **Giao thoa (Rất quan trọng):** Sự hiện diện của tự kháng thể **Anti-Tg** (có mặt ở khoảng 10% dân số) sẽ gây nhiễu phương pháp đo, dẫn tới kết quả Tg bị **âm tính giả**. Luôn luôn phải chỉ định đo kèm xét nghiệm Anti-Tg [45].\n💊 **Yếu tố sinh lý:** Thai kỳ làm tăng sinh lý Tg [46].",
    "clinicalNote": "Ở bệnh nhân đã cắt toàn bộ tuyến giáp, nồng độ Tg bất ngờ tăng lên là hồi chuông báo động sớm về việc tế bào ung thư đang phân chia hoặc mô giáp còn sót lại đang tái phát. Cần kết hợp xạ hình toàn thân hoặc siêu âm để định vị tổn thương [45]."
  },
  {
    "name": "Định lượng Digoxin [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Digoxin là một loại thuốc trợ tim nhóm glycosid trợ tim, được sử dụng trong điều trị suy tim và kiểm soát tần số thất trong Rung nhĩ. Việc xét nghiệm nồng độ thuốc trong máu được gọi là **Giám sát nồng độ thuốc điều trị (Therapeutic Drug Monitoring - TDM)**.",
    "physiology": "📌 **Cửa sổ điều trị:** Digoxin có khoảng cách an toàn giữa liều điều trị và liều độc rất hẹp. Nồng độ thuốc cao dễ gây ngộ độc đe dọa tính mạng (rối loạn nhịp thất chết người).",
    "indication": "🎯 **Giám sát an toàn:** Đánh giá hiệu quả điều trị, kiểm tra tình trạng tuân thủ uống thuốc.\n🎯 **Cấp cứu ngộ độc:** Bệnh nhân đang dùng Digoxin nhập viện với biểu hiện nôn mửa, nhìn mờ (nhìn thấy quầng sáng vàng), loạn nhịp tim chậm/nhanh [49].",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh hoặc huyết tương.\n⏳ **Thời điểm bắt buộc:** Phải lấy máu sau liều uống cuối cùng từ **6 đến 8 giờ** (khi thuốc đã phân bố ổn định trong các mô). Lấy quá sớm sẽ cho nồng độ cao giả tạo [49].",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA) / FPIA.",
    "ref": "📊 **Nồng độ điều trị đạt đích:** 1,2 - 2,6 nmol/L [49].\n*(Tuy nhiên theo các Hướng dẫn Tim mạch hiện đại (AHA), với suy tim, đích nên duy trì ở mức thấp hơn: 0,64 - 1,15 nmol/L)*.",
    "alert": "⚠️ Nếu bệnh nhân có **hạ Kali máu** hoặc **hạ Magie máu**, độc tính của Digoxin sẽ xuất hiện ngay cả khi nồng độ Digoxin trong máu vẫn nằm trong giới hạn \"bình thường\" [50], [51].",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng (Ngộ độc Digoxin):**\n  🔴 **Nguyên nhân:**\n    ▫️ Uống quá liều thuốc.\n    ▫️ Suy giảm chức năng thận (làm giảm đào thải digoxin ra khỏi cơ thể).\n    ▫️ Tương tác thuốc (Amiodaron, Verapamil, Spironolacton làm tăng mạnh nồng độ digoxin).",
      "decrease": "🔹 **Giảm nồng độ:**\n    ▫️ Không tuân thủ điều trị (bệnh nhân quên uống thuốc).\n    ▫️ Rối loạn hấp thu ở đường tiêu hóa."
    },
    "interferingFactors": "❌ **Can thiệp kỹ thuật:** Bệnh nhân đang được cấp cứu bằng chất giải độc Digoxin-Fab fragments sẽ có kết quả đo nồng độ digoxin bị sai lệch hoàn toàn.\n💊 **Rối loạn điện giải:** Việc dùng thuốc lợi tiểu quai (Furosemid) gây mất Kali là nguyên nhân hàng đầu thúc đẩy ngộ độc Digoxin.",
    "clinicalNote": "Theo dõi TDM là bắt buộc ở các bệnh nhân lớn tuổi, người có bệnh lý thận mạn tính hoặc có chỉ định phối hợp thuốc phức tạp. Khi có biểu hiện ngộ độc, ngay lập tức phải ngưng thuốc, bù Kali và đo nồng độ thuốc trong máu."
  },
  {
    "name": "Định lượng Kháng sinh (Aminoglycosid / Vancomycin) [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Các kháng sinh diệt khuẩn mạnh (như Vancomycin, hay nhóm Aminoglycosid: Amikacin, Gentamicin, Tobramycin) có đặc điểm là **độc tính rất cao trên thận và thính giác**. Việc Giám sát nồng độ thuốc điều trị (TDM) là bắt buộc để đảm bảo liều lượng đủ diệt khuẩn nhưng không gây hỏng thận [52], [12].",
    "physiology": "📌 **Đỉnh (Peak):** Mức nồng độ cao nhất của thuốc sau khi truyền, quyết định hiệu quả tiêu diệt vi khuẩn.\n📌 **Đáy (Trough):** Mức nồng độ thấp nhất ngay trước khi dùng liều tiếp theo, quyết định mức độ an toàn (tránh tích lũy gây độc).",
    "indication": "🎯 **Hồi sức và Truyền nhiễm:** Theo dõi sát sao ở bệnh nhân nhiễm khuẩn huyết nặng, viêm nội tâm mạc, hoặc bệnh nhân đang bị suy giảm chức năng thận cần dùng kháng sinh mạnh [12].",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh hoặc huyết tương.\n⏳ **Nồng độ đỉnh (Peak):** Lấy máu 30 phút sau khi kết thúc truyền tĩnh mạch [12].\n⏳ **Nồng độ đáy (Trough):** Lấy máu ngay trước liều thuốc kế tiếp (trong vòng 30 phút trước khi tiêm) [12].",
    "testingMethods": "Hóa phát quang miễn dịch, FPIA, hoặc LC-MS/MS.",
    "ref": "📊 *(Giá trị tham khảo đối với Aminoglycosid)*:\n▫️ **Amikacin:** Đỉnh 34,2 - 42,8 µmol/L; Đáy 8,6 - 17,1 µmol/L [12].\n▫️ **Gentamicin:** Đỉnh 10,5 - 16,7 µmol/L; Đáy 2,1 - 4,2 µmol/L [12].",
    "alert": "⚠️ Nếu nồng độ đáy (Trough) liên tục duy trì ở mức cao, nguy cơ bệnh nhân bị suy thận cấp (hoại tử ống thận) và điếc vĩnh viễn là cực kỳ lớn.",
    "pathologicalMeaning": {
      "increase": "🔹 **Nồng độ thuốc tăng quá mức:**\n  🔴 Bệnh nhân suy thận (giảm thải trừ), tính toán sai liều lượng hoặc khoảng cách đưa thuốc quá ngắn.\n  🔴 Hậu quả: Tổn thương ống thận cấp (tăng Ure, Creatinin) [52], nhiễm độc tai trong.",
      "decrease": "🔹 **Nồng độ thuốc không đạt đích:**\n  🔴 Bệnh nhân có mức thanh thải thận tăng cao (thường gặp ở người trẻ, chấn thương sọ não, bỏng), hoặc liều dùng không đủ.\n  🔴 Hậu quả: Không tiêu diệt được vi khuẩn, dẫn đến kháng thuốc (như chuẩn IDSA 2024 cảnh báo về đề kháng kháng sinh) [53]."
    },
    "interferingFactors": "❌ **Lấy mẫu sai thời điểm:** Lấy máu sai giờ Peak/Trough sẽ khiến bác sĩ tính toán nhầm và đổi liều sai lầm.",
    "clinicalNote": "Đối với bệnh nhân sử dụng các loại kháng sinh độc với thận, bắt buộc bác sĩ phải chỉ định định kỳ xét nghiệm **Ure và Creatinin máu** kèm theo. Theo hướng dẫn IDSA 2024, việc tối ưu hóa dược động học / dược lực học (PK/PD) bằng phương pháp TDM là vũ khí cốt lõi để cứu sống bệnh nhân nhiễm vi khuẩn đa kháng thuốc [53]."
  },
   {
    "name": "Toxocara Ab miễn dịch bán tự động [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Xét nghiệm huyết thanh học nhằm phát hiện kháng thể IgG chống lại ấu trùng giun đũa chó/mèo (Toxocara canis/cati) - tác nhân gây hội chứng ấu trùng di chuyển nội tạng. *(Lưu ý: Thông tin sinh lý/bệnh lý được bổ sung từ kiến thức y khoa chung do không có trong tài liệu gốc)*.",
    "physiology": "📌 **Cơ chế:** Con người là ký chủ ngẫu nhiên. Khi nuốt phải trứng giun đũa chó/mèo, ấu trùng nở ra ở ruột, xuyên qua thành ruột và theo dòng máu đi lạc vị trí vào các tạng (gan, phổi, mắt, não) gây viêm và kích thích hệ miễn dịch sinh kháng thể.",
    "indication": "🎯 **Ký sinh trùng:** Chẩn đoán hội chứng ấu trùng di chuyển nội tạng (đau bụng, gan to, ho kéo dài) hoặc ấu trùng di chuyển ở mắt (giảm thị lực).\n🎯 **Lâm sàng:** Bệnh nhân có nổi mẩn ngứa, mề đay dai dẳng kèm tăng bạch cầu ái toan (Eosinophil) không rõ nguyên nhân.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn.",
    "testingMethods": "Miễn dịch Enzym (ELISA) phát hiện kháng thể IgG.",
    "ref": "📊 **Bình thường:** Âm tính.",
    "alert": "⚠️ Kháng thể IgG của Toxocara có thể tồn tại trong máu **nhiều năm** sau khi đã điều trị khỏi bệnh. Một kết quả Dương tính đơn thuần chỉ chứng minh bệnh nhân đã \"từng phơi nhiễm\", không khẳng định 100% đang mắc bệnh cấp tính.",
    "pathologicalMeaning": {
      "increase": "🔹 **Dương tính (+):**\n    ▫️ Đang nhiễm hoặc có tiền sử nhiễm giun đũa chó/mèo.",
      "decrease": "🔹 **Âm tính (-):**\n    ▫️ Không nhiễm, hoặc lấy máu quá sớm trong giai đoạn cửa sổ khi cơ thể chưa kịp sinh kháng thể."
    },
    "interferingFactors": "❌ **Phản ứng chéo (Dương tính giả):** Có thể xẩy ra nếu bệnh nhân đang nhiễm các loại giun sán khác (Giun lươn, giun móc, giun đũa người).",
    "clinicalNote": "Không được chỉ định thuốc tẩy giun sán diệt Toxocara chỉ dựa trên một tờ kết quả ELISA (+). Bác sĩ bắt buộc phải kết hợp với triệu chứng lâm sàng (ngứa, tổn thương tạng) và xét nghiệm thấy tỷ lệ Bạch cầu ái toan (EOS) tăng cao để quyết định điều trị."
  },
  {
    "name": "Test Methamphetamine (Ma túy đá) [niệu]",
    "group": "Miễn Dịch",
    "time": "Làm ngay",
    "isFeatured": false,
    "concept": "Methamphetamine là một chất kích thích hệ thần kinh trung ương cực mạnh, gây nghiện cao (thường gọi là ma túy đá). Xét nghiệm này sử dụng nguyên lý sắc ký miễn dịch để phát hiện sự bài tiết của chất này hoặc các chất chuyển hóa của nó qua nước tiểu. *(Lưu ý: Thông tin bổ sung từ kiến thức y khoa chung)*.",
    "physiology": "📌 **Động học:** Methamphetamine hấp thu nhanh và bài tiết chủ yếu qua thận. Thời gian phát hiện trong nước tiểu thường kéo dài từ 3 - 5 ngày sau lần sử dụng cuối cùng (tùy thuộc vào liều lượng và độ pH của nước tiểu).",
    "indication": "🎯 **Sàng lọc & Pháp y:** Kiểm tra sức khỏe, tầm soát chất gây nghiện, giám định pháp y, cấp cứu các trường hợp rối loạn tâm thần kích động nghi do ngộ độc ma túy.",
    "specimenCollection": "💧 **Loại mẫu:** Nước tiểu lấy ngẫu nhiên.\n⚠️ **Bảo mật:** Việc lấy mẫu phải được giám sát chặt chẽ để chống tình trạng tráo đổi mẫu hoặc pha loãng nước tiểu.",
    "testingMethods": "Sắc ký miễn dịch (Test nhanh định tính).",
    "ref": "📊 **Bình thường:** Âm tính (-).",
    "alert": "⚠️ Đây là test SÀNG LỌC định tính. Mọi kết quả Dương tính đều mang ý nghĩa pháp lý và y khoa nghiêm trọng, do đó nếu có tranh chấp, mẫu nước tiểu phải được gửi đi chạy Sắc ký khí khối phổ (GC-MS) để khẳng định.",
    "pathologicalMeaning": {
      "increase": "🔹 **Dương tính (+):**\n    ▫️ Bệnh nhân có sử dụng Methamphetamine hoặc các dẫn xuất của Amphetamine trong vài ngày qua.",
      "decrease": "Âm tính."
    },
    "interferingFactors": "❌ **Dương tính giả:** Một số thuốc cảm cúm, thuốc chống ngạt mũi (chứa Pseudoephedrine, Ephedrine) hoặc thuốc giảm cân có thể phản ứng chéo gây dương tính giả.\n❌ **Âm tính giả:** Bệnh nhân uống quá nhiều nước trước khi lấy mẫu làm hòa loãng nồng độ chất gây nghiện dưới ngưỡng phát hiện của test.",
    "clinicalNote": "Trong cấp cứu, bệnh nhân ngộ độc Methamphetamine thường có biểu hiện nhịp tim rất nhanh, tăng huyết áp dữ dội, vã mồ hôi, đồng tử giãn và hoang tưởng ảo giác. Test nhanh nước tiểu giúp định hướng xử trí chống loạn thần kịp thời."
  },
  {
    "name": "Test Morphin / Heroin (Opiat) [niệu]",
    "group": "Miễn Dịch",
    "time": "Làm ngay",
    "isFeatured": false,
    "concept": "Morphin và Heroin thuộc nhóm chất dạng thuốc phiện (Opiate) có tác dụng giảm đau mạnh, ức chế hô hấp và gây nghiện. Test nhanh Opiate phát hiện sự có mặt của nhóm chất này trong nước tiểu. *(Lưu ý: Thông tin bổ sung từ kiến thức y khoa chung)*.",
    "physiology": "📌 **Chuyển hóa:** Heroin sau khi vào cơ thể sẽ nhanh chóng bị thủy phân thành Morphin. Morphin được bài tiết qua nước tiểu và có thể được phát hiện trong vòng từ 2 đến 4 ngày sau khi sử dụng.",
    "indication": "🎯 **Sàng lọc & Pháp y:** Giám định pháp y, kiểm tra định kỳ người cai nghiện, cấp cứu bệnh nhân hôn mê nghi quá liều ma túy.",
    "specimenCollection": "💧 **Loại mẫu:** Nước tiểu lấy ngẫu nhiên.\n⚠️ **Lưu ý:** Lấy mẫu dưới sự giám sát trực tiếp.",
    "testingMethods": "Sắc ký miễn dịch (Test nhanh định tính) hoặc Định lượng.",
    "ref": "📊 **Bình thường:** Âm tính (-).",
    "alert": "⚠️ Bệnh nhân hôn mê, đồng tử co nhỏ như đầu đinh ghim, nhịp thở chậm là tam chứng kinh điển của ngộ độc Opiate cấp. Lúc này test nước tiểu có vai trò củng cố chẩn đoán để sử dụng ngay thuốc giải độc Naloxone.",
    "pathologicalMeaning": {
      "increase": "🔹 **Dương tính (+):**\n    ▫️ Bệnh nhân có sử dụng Heroin, Morphin, Codein hoặc các chế phẩm thuốc phiện khác.",
      "decrease": "Âm tính."
    },
    "interferingFactors": "❌ **Dương tính giả:** Ăn lượng lớn hạt anh túc (poppy seeds), dùng các loại thuốc ho chứa Codein (Terpin Codein) hoặc thuốc giảm đau chứa Opiate trong y tế.\n❌ **Âm tính giả:** Pha loãng mẫu hoặc đã qua thời gian thải trừ của thuốc.",
    "clinicalNote": "Nếu test Opiate (+) trên một bệnh nhân không có tiền sử nghiện, bác sĩ phải lập tức rà soát lại đơn thuốc xem bệnh nhân có đang được kê các loại thuốc ho (chứa codein, pholcodin) hoặc thuốc giảm đau (tramadol, morphin) hay không để tránh kết luận sai lệch."
  },
  {
    "name": "Định lượng Creatinin [niệu]",
    "group": "Nước tiểu & Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Creatinin là sản phẩm thoái hóa của cơ bắp, được lọc hoàn toàn qua cầu thận và KHÔNG bị ống thận tái hấp thu. Do đó, định lượng Creatinin trong nước tiểu là thước đo cực kỳ trung thực để đánh giá khả năng lọc của cầu thận.",
    "physiology": "📌 **Động học:** Creatinin niệu phản ánh khối lượng cơ bắp của cơ thể. Tỷ lệ thải trừ luôn hằng định ở mức ổn định mỗi ngày đối với người khỏe mạnh.\n📌 **Ưu điểm vượt trội:** Tuyệt đối không bao giờ được chỉ định Creatinin niệu đơn độc. Xét nghiệm này sinh ra để đánh giá kèm với Creatinin máu nhằm tính **Độ thanh thải Creatinin (Mức lọc cầu thận - eGFR)** hoặc dùng làm mẫu số để tính các tỷ lệ (như Tỷ lệ Albumin/Creatinin).",
    "indication": "🎯 **Chức năng Thận:** Tính độ thanh thải Creatinin (CrCl) để đánh giá giai đoạn suy thận.\n🎯 **Kiểm soát chất lượng mẫu:** Sử dụng để xác nhận xem bệnh nhân có thu thập đủ và đúng lượng nước tiểu 24 giờ hay không.",
    "specimenCollection": "💧 **Loại mẫu:** Nước tiểu 24 giờ hoặc Mẫu nước tiểu ngẫu nhiên.\n⚠️ **Lưu ý:** Việc lấy mẫu nước tiểu 24 giờ sai quy cách (bỏ sót nước tiểu) sẽ làm sai lệch hoàn toàn kết quả chẩn đoán.",
    "testingMethods": "Phản ứng mầu động học (Jaffe) hoặc Enzym.",
    "ref": "📊 **Nước tiểu 24 giờ:** \n▫️ Nam: 800 - 2000 mg/ngày.\n▫️ Nữ: 600 - 1800 mg/ngày.\n*(Lưu ý: Mẫu ngẫu nhiên được tính theo mg/g Creatinin)*.",
    "alert": "⚠️ Tuyệt đối không dùng nồng độ Creatinin niệu để kết luận tình trạng suy thận (bởi trong suy thận, nồng độ Creatinin niệu sẽ bị tăng giả tạo do ống thận tăng bài xuất bù trừ).",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Creatinin niệu:**\n  🔴 Chế độ ăn quá nhiều đạm động vật (thịt), gắng sức thể lực.\n  🔴 To đầu chi, Đái tháo đường, nhiễm trùng.",
      "decrease": "🔹 **Giảm Creatinin niệu:**\n  🔴 Suy thận giai đoạn nặng (cầu thận mất khả năng lọc).\n  🔴 Teo cơ, loạn dưỡng cơ, thiếu máu, chế độ ăn thuần chay."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Không bảo quản lạnh mẫu nước tiểu 24h gây thoái giáng creatinin (âm tính giả). Mẫu có nhiều xeton cũng gây sai số.\n💊 **Thuốc làm TĂNG:** Corticosteroid, thuốc ngừa thai.\n💊 **Thuốc làm GIẢM:** NSAIDs (Ibuprofen), thuốc lợi tiểu Thiazid, Cimetidin.",
    "clinicalNote": "Khi tính độ thanh thải Creatinin theo nước tiểu 24h, nếu phát hiện lượng Creatinin niệu tổng cộng < 500 mg/ngày ở một người trưởng thành có cơ bắp bình thường, bác sĩ có thể khẳng định chắc chắn 100% bệnh nhân đã **lấy thiếu nước tiểu** và yêu cầu thu thập lại từ đầu."
  },
  {
    "name": "Định lượng Glucose [niệu]",
    "group": "Nước tiểu & Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Ở người có chức năng thận khỏe mạnh, 100% lượng glucose lọc qua cầu thận sẽ được tái hấp thu tại ống lượn gần. Glucose chỉ xuất hiện trong nước tiểu khi nồng độ đường trong máu vượt quá **\"Ngưỡng thận\"** (thường là khoảng 180 mg/dL hay 10 mmol/L).",
    "physiology": "📌 **Đặc tính:** Ngưỡng thận đối với Glucose khác nhau ở từng cá thể. Nó có thể tăng lên ở người già (suy thận) và bị hạ thấp sinh lý ở phụ nữ mang thai.\n📌 **Hậu quả:** Sự có mặt của lượng lớn đường trong nước tiểu sẽ kéo theo nước (lợi tiểu thẩm thấu) gây ra triệu chứng đái nhiều, khát nhiều kinh điển của Đái tháo đường.",
    "indication": "🎯 **Nội tiết:** Đánh giá tình trạng Đái tháo đường mất bù.\n🎯 **Thận học:** Chẩn đoán khiếm khuyết chức năng ống thận gần (Hội chứng Fanconi - Đường máu bình thường nhưng đường niệu dương tính).",
    "specimenCollection": "💧 **Loại mẫu:** Nước tiểu 24 giờ hoặc mẫu ngẫu nhiên (sàng lọc qua que nhúng - Dipstick).\n⚠️ **Lưu ý:** Không bảo quản bằng hóa chất, giữ trong tủ lạnh.",
    "testingMethods": "Phản ứng Enzym (Que thử) hoặc Sinh hóa tự động.",
    "ref": "📊 **Nước tiểu 24h:** < 200 mg/24h (hay < 11,2 mmol/L).\n📊 **Định tính:** Âm tính (-).",
    "alert": "⚠️ Sàng lọc Đái tháo đường bằng Glucose niệu có tỷ lệ **âm tính giả rất cao**. Rất nhiều bệnh nhân bị Đái tháo đường nhưng đường niệu hoàn toàn âm tính (do ngưỡng thận tăng lên). Phải dùng Đường máu hoặc HbA1C để chẩn đoán.",
    "pathologicalMeaning": {
      "increase": "🔹 **Xuất hiện Glucose niệu (Dương tính):**\n  🔴 **Đường máu vượt ngưỡng thận:**\n    ▫️ Đái tháo đường không kiểm soát, Đái tháo đường thai kỳ.\n    ▫️ Bệnh nội tiết: Hội chứng Cushing, To đầu chi, U tủy thượng thận, Nhiễm độc giáp.\n    ▫️ Stress nặng: Nhồi máu cơ tim, bỏng, đột quỵ.\n  🔴 **Đường máu bình thường (Ngưỡng thận bị hạ thấp):**\n    ▫️ Rối loạn chức năng ống thận gần (Hội chứng Fanconi).\n    ▫️ Phụ nữ có thai (sinh lý).",
      "decrease": "Không có ý nghĩa (Bình thường là âm tính)."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Để mẫu nước tiểu ở nhiệt độ phòng quá lâu, vi khuẩn sẽ tiêu thụ hết glucose gây âm tính giả.\n💊 **Dương tính giả:** Dùng Cephalosporin, Penicillin, Vitamin C liều cao.\n💊 **Thuốc ức chế SGLT2:** (Nhóm thuốc trị tiểu đường mới như Dapagliflozin) chủ động ức chế tái hấp thu đường, ép thận đào thải glucose, làm Glucose niệu luôn dương tính mạnh (Đây là tác dụng điều trị, không phải lỗi).",
    "clinicalNote": "Nếu bệnh nhân đi khám có kết quả Đường máu lúc đói hoàn toàn bình thường (5.0 mmol/L) nhưng xét nghiệm nước tiểu lại có Glucose niệu (+++), bác sĩ phải nghĩ ngay đến Hội chứng Fanconi (ống thận hỏng không giữ được đường) hoặc hỏi xem bệnh nhân có đang uống thuốc tiểu đường nhóm SGLT2 (như Forxiga, Jardiance) hay không."
  },
  {
    "name": "Định lượng MAU (Microalbumin) [niệu]",
    "group": "Nước tiểu & Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Microalbumin niệu (MAU) là tình trạng rò rỉ một lượng cực nhỏ Albumin vào nước tiểu (30 - 300 mg/ngày). Lượng này quá nhỏ để các que thử nước tiểu thông thường (Dipstick) phát hiện được, nhưng lại là **\"Bằng chứng sớm nhất\"** cảnh báo màng lọc cầu thận đang bị tổn thương.",
    "physiology": "📌 **Động học:** Xuất hiện rất sớm, thường xảy ra từ vài năm trước khi nồng độ Creatinin máu tăng hay chức năng thận suy giảm rõ rệt trên lâm sàng.\n📌 **Tiên lượng:** Ở bệnh nhân Đái tháo đường Typ 1, nếu có Microalbumin niệu, nguy cơ chuyển thành suy thận mạn trong 15 năm tới tăng gấp 20 lần.",
    "indication": "🎯 **Sàng lọc Bắt buộc:** Hội Đái tháo đường Mỹ (ADA) quy định sàng lọc MAU hàng năm cho mọi bệnh nhân Đái tháo đường (Typ 2 ngay khi chẩn đoán, Typ 1 sau 5 năm mắc bệnh).\n🎯 **Tăng huyết áp:** Phát hiện tổn thương cơ quan đích (Thận) ở bệnh nhân Tăng huyết áp vô căn.",
    "specimenCollection": "💧 **Loại mẫu ưu tiên:** Mẫu nước tiểu thu ngẫu nhiên (Lấy nước tiểu đầu tiên buổi sáng là tốt nhất).\n⚠️ **Quy trình:** Để giảm sai số do lượng nước tiểu ít/nhiều, hiện nay toàn thế giới sử dụng XN tính **Tỷ lệ Albumin/Creatinin niệu (UACR - mg/g)**.",
    "testingMethods": "Đo độ đục miễn dịch (Immunoturbidimetric).",
    "ref": "📊 **Bình thường:** < 30 mg/24h (hoặc < 30 µg/mg Creatinin).\n📊 **Microalbumin niệu:** 30 - 300 mg/24h (hoặc 30 - 300 µg/mg Creatinin).\n📊 **Protein niệu đại thể:** > 300 mg/24h.",
    "alert": "⚠️ Sự bài xuất Albumin có dao động cực lớn (tới 50%) tùy theo thời điểm trong ngày và hoạt động thể lực. Do đó, chẩn đoán chỉ được xác lập khi có **2 trong 3 mẫu thử** dương tính trong khoảng thời gian từ 3 - 6 tháng.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Microalbumin niệu (Dương tính):**\n  🔴 **Tổn thương Thận & Mạch máu:**\n    ▫️ Bệnh cầu thận do Đái tháo đường (Diabetic Nephropathy).\n    ▫️ Bệnh thận do Tăng huyết áp.\n    ▫️ Tiền sản giật ở phụ nữ có thai.\n  🔴 **Nguyên nhân thoáng qua (Lành tính):**\n    ▫️ Gắng sức thể lực quá mức, stress tâm thần, sốt, nhiễm trùng tiết niệu.\n    ▫️ Đang trong kỳ kinh nguyệt, chế độ ăn quá nhiều đạm.",
      "decrease": "Không có ý nghĩa."
    },
    "interferingFactors": "❌ **Âm tính giả:** Nước tiểu bị hòa loãng quá mức (uống nhiều nước).\n❌ **Dương tính giả:** Nhiễm bẩn máu kinh nguyệt, nước tiểu có tính kiềm cao.",
    "clinicalNote": "Việc phát hiện Microalbumin niệu mang tính chất sống còn. Ngay khi có kết quả dương tính, dù huyết áp bệnh nhân đang bình thường, bác sĩ bắt buộc phải khởi trị bằng nhóm thuốc **Ức chế men chuyển (ACEi)** hoặc **Ức chế thụ thể (ARB)**. Các thuốc này có tác dụng giãn tiểu động mạch đi của cầu thận, giúp \"đóng lại\" lỗ thủng, đảo ngược tình trạng rò rỉ Albumin và bảo vệ thận."
  },
  {
    "name": "Định lượng Protein niệu (Nước tiểu 24h)",
    "group": "Nước tiểu & Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Trong điều kiện bình thường, màng lọc cầu thận như một chiếc rây thông minh, chặn đứng các phân tử Protein kích thước lớn (như Albumin, Globulin) không cho lọt vào nước tiểu. Sự xuất hiện của Protein trong nước tiểu với số lượng lớn (>300 mg/ngày) luôn là chỉ điểm kinh điển của sự sụp đổ hàng rào màng lọc cầu thận hoặc tổn thương ống thận.",
    "physiology": "📌 **Phân loại nguồn gốc:** \n- Nguồn gốc cầu thận: Do rách màng lọc (xuất hiện nhiều phân tử lớn).\n- Nguồn gốc ống thận: Do ống lượn gần mất khả năng tái hấp thu (xuất hiện phân tử nhỏ).\n- Nguồn gốc trước thận: Do sản xuất quá mức protein dị thường trong máu vượt khả năng lọc (Protein Bence-Jones).",
    "indication": "🎯 **Thận học:** Tiêu chuẩn vàng để chẩn đoán Hội chứng thận hư, Viêm cầu thận, và theo dõi đáp ứng điều trị bệnh thận mạn.\n🎯 **Sản khoa:** Chẩn đoán Tiền sản giật (Tăng HA + Protein niệu) đe dọa sinh non.",
    "specimenCollection": "💧 **Loại mẫu:** Nước tiểu 24 giờ (Tiêu chuẩn vàng) hoặc mẫu ngẫu nhiên tính tỷ số Protein/Creatinin.\n⚠️ **Lưu ý:** Nước tiểu 24h phải được thu gom chính xác tuyệt đối, bảo quản trong tủ mát (không dùng chất bảo quản làm sai lệch protein).",
    "testingMethods": "Đo độ đục hoặc So màu (Pyrogallol red).",
    "ref": "📊 **Bình thường:** < 150 mg/24h (hoặc < 0,15 g/24h).\n*(Trẻ em, phụ nữ có thai có thể có ngưỡng khác một chút)*.",
    "alert": "⚠️ Tình trạng \"Protein niệu tư thế đứng\" (Orthostatic proteinuria) rất hay gặp ở người trẻ tuổi: Protein chỉ xuất hiện vào ban ngày khi đứng, và hoàn toàn âm tính vào ban đêm khi nằm ngủ. Đây là tình trạng hoàn toàn lành tính.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Protein niệu (Dương tính):**\n  🔴 **Ngưỡng Hội chứng thận hư (> 3.5 g/24h):**\n    ▫️ Viêm cầu thận mạn, Hội chứng thận hư nguyên phát/thứ phát.\n    ▫️ Bệnh cầu thận do Đái tháo đường, Bệnh Lupus ban đỏ hệ thống.\n  🔴 **Ngưỡng trung bình (0.5 - 3.0 g/24h):**\n    ▫️ Viêm thận - bể thận, Tăng huyết áp ác tính.\n    ▫️ Đa u tủy xương (Sản xuất ồ ạt chuỗi nhẹ tự do Bence-Jones).\n    ▫️ Tiền sản giật.\n  🔴 **Nguyên nhân sinh lý / Tạm thời:**\n    ▫️ Sốt cao, gắng sức nặng, stress, suy tim ứ huyết.",
      "decrease": "Không có ý nghĩa."
    },
    "interferingFactors": "❌ **Dương tính giả:** Nước tiểu quá kiềm, lẫn máu kinh nguyệt, viêm nhiễm đường tiết niệu hoặc để nước tiểu quá lâu vi khuẩn phân hủy urê thành kiềm.\n💊 **Thuốc làm TĂNG:** Thuốc cản quang, kháng sinh nhóm Aminoglycosid, Cephalosporin.",
    "clinicalNote": "Theo hướng dẫn KDIGO 2024, đối với bệnh nhân khám ngoại trú, việc yêu cầu xách bình nước tiểu 24h đi lại rất bất tiện và dễ lấy sai mẫu. Hiện nay, thế giới ưu tiên dùng **Tỷ số Protein/Creatinin niệu ngẫu nhiên (UPCR)** hoặc **Albumin/Creatinin niệu (UACR)** làm công cụ chẩn đoán và theo dõi thường quy thay cho nước tiểu 24h."
  },
  {
    "name": "Đo hoạt độ Amylase [niệu]",
    "group": "Nước tiểu & Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Amylase là enzym tiêu hóa sinh ra từ Tụy và Tuyến nước bọt. Do có phân tử lượng rất nhỏ, Amylase dễ dàng lọt qua màng lọc cầu thận và bài xuất ra ngoài nước tiểu. Tốc độ thanh thải Amylase qua thận phản ánh rất nhanh tình trạng ứ đọng enzym này trong dòng máu.",
    "physiology": "📌 **Động học (trong Viêm tụy cấp):** Trong khi Amylase máu chỉ tăng nhanh và biến mất trong vòng 2 - 3 ngày, thì Amylase niệu có độ trễ hơn (phản ánh lại sau 6-10 giờ) nhưng lại **tồn tại ở mức cao rất lâu** (có thể kéo dài từ 7 đến 10 ngày).",
    "indication": "🎯 **Tiêu hóa / Cấp cứu bụng:** Chẩn đoán Viêm tụy cấp, đặc biệt hữu ích khi bệnh nhân đến viện muộn (sau 3 ngày khởi phát đau bụng, lúc này Amylase máu đã về mức bình thường).",
    "specimenCollection": "💧 **Loại mẫu:** Nước tiểu 24 giờ hoặc Mẫu nước tiểu thu ngẫu nhiên (nước tiểu giữa dòng).\n⚠️ **Bảo quản:** Phải giữ trong tủ mát hoặc đá lạnh.",
    "testingMethods": "Đo hoạt độ enzym.",
    "ref": "📊 **Bình thường:** 0 - 375 U/L (hay 0 - 6,25 µkat/L).\n*(Lưu ý: Tùy sinh phẩm phòng Lab, có thể có ngưỡng cắt khác nhau)*.",
    "alert": "⚠️ Tăng Amylase niệu là bằng chứng muộn nhưng bền vững nhất của Viêm tụy cấp. Tuy nhiên, mức độ tăng cao của Amylase niệu không dùng để tiên lượng mức độ nặng hay độ hoại tử của tuyến tụy.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Amylase niệu:**\n  🔴 **Bệnh lý tại Tụy:**\n    ▫️ Viêm tụy cấp (Tăng rất cao, có thể > 1000 U/L).\n    ▫️ Đợt cấp của viêm tụy mạn.\n    ▫️ Biến chứng nang giả tụy.\n  🔴 **Tổn thương ngoài Tụy:**\n    ▫️ Thủng ổ loét dạ dày - tá tràng, tắc ruột, viêm phúc mạc.\n    ▫️ Viêm tuyến nước bọt (Quai bị).",
      "decrease": "🔹 **Giảm Amylase niệu:**\n  🔴 Tổn thương nhu mô tụy lan rộng (Viêm tụy cấp thể hoại tử bùng phát, Viêm tụy mạn giai đoạn cuối).\n  🔴 Tổn thương thận nặng (Giảm chức năng lọc)."
    },
    "interferingFactors": "❌ **Hiện tượng Macro-amylase:** Phân tử Amylase kết hợp với Globulin tạo thành phân tử khổng lồ, không thể lọt qua màng lọc cầu thận. Hậu quả: Amylase máu tăng vọt nhưng **Amylase niệu hoàn toàn bình thường**. (Trường hợp này không bị Viêm tụy cấp).\n💊 **Thuốc làm TĂNG:** Aspirin, thuốc lợi tiểu Thiazid, Corticosteroid.",
    "clinicalNote": "Bài toán biện luận kinh điển trong Viêm tụy: \n- Bệnh nhân đau bụng ngày 1: Amylase máu TĂNG, Amylase niệu BÌNH THƯỜNG.\n- Bệnh nhân đau bụng ngày 5: Amylase máu BÌNH THƯỜNG, Amylase niệu TĂNG CAO.\nĐây là chìa khóa để bác sĩ không bỏ sót các trường hợp viêm tụy đến muộn."
  },
  {
    "name": "Điện giải đồ (Na, K, Cl) [niệu]",
    "group": "Nước tiểu & Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Xét nghiệm đo lường lượng các ion Natri, Kali, Clo bài xuất ra nước tiểu 24 giờ. Thận là cơ quan chủ chốt duy trì sự cân bằng muối nước (hằng định nội môi). Khi nồng độ điện giải trong máu biến động, việc đánh giá điện giải niệu giúp bác sĩ \"đọc vị\" xem Thận đang phản ứng bảo vệ đúng cách hay chính Thận là kẻ gây ra lỗi.",
    "physiology": "📌 **Đặc tính:** \n- Khi Natri máu giảm (Thiếu muối), thận khỏe mạnh sẽ co thắt tối đa để tái hấp thu Natri, khiến Natri niệu giảm sát đáy (< 20 mmol/L).\n- Ngược lại, nếu Natri máu giảm mà Natri niệu vẫn tăng ào ạt, chứng tỏ màng lọc hoặc ống thận đã bị \"thủng/hỏng\", mất khả năng giữ muối.",
    "indication": "🎯 **Thận & Hồi sức:** Chẩn đoán phân biệt nguyên nhân hạ Natri máu, hạ Kali máu.\n🎯 **Chẩn đoán Suy thận cấp:** Xác định suy thận nguồn gốc \"Trước thận\" (do mất nước, tụt huyết áp) hay \"Tại thận\" (hoại tử ống thận cấp).",
    "specimenCollection": "💧 **Loại mẫu:** Nước tiểu 24 giờ (tốt nhất) hoặc Mẫu ngẫu nhiên.\n⚠️ **Lưu ý:** Phải khai báo toàn bộ các thuốc lợi tiểu bệnh nhân đang sử dụng (vì lợi tiểu ép thận thải muối nước, làm sai lệch hoàn toàn biện luận lâm sàng).",
    "testingMethods": "Điện cực ion chọn lọc (ISE).",
    "ref": "📊 **Natri niệu:** 40 - 220 mmol/24h.\n📊 **Kali niệu:** 25 - 125 mmol/24h.\n📊 **Clo niệu:** 110 - 250 mmol/24h.\n*(Tất cả đều dao động phụ thuộc chặt chẽ vào lượng muối đưa vào qua ăn uống)*.",
    "alert": "⚠️ Điện giải đồ niệu là một trong những xét nghiệm có tính \"biện luận\" cao nhất. Đánh giá nó luôn phải đặt trên bàn cân cùng lúc với **Điện giải đồ máu** và **Tình trạng thể tích** (phù hay mất nước) của bệnh nhân.",
    "pathologicalMeaning": {
      "increase": "🔹 **Na, K, Cl Niệu TĂNG:**\n  🔴 **Do tổn thương Ống thận (Mất muối):**\n    ▫️ Hoại tử ống thận cấp (Suy thận cấp tại thận).\n    ▫️ Bệnh thận kẽ, viêm thận - bể thận mạn.\n  🔴 **Do Nội tiết & Thuốc:**\n    ▫️ Hội chứng tiết ADH không thích hợp (SIADH) (Natri niệu > 40 mmol/L dù Natri máu đang hạ).\n    ▫️ Lạm dụng thuốc lợi tiểu (Thiazid, Furosemid).\n    ▫️ Bệnh Addison (Suy thượng thận - không giữ được Natri).",
      "decrease": "🔹 **Na, K, Cl Niệu GIẢM:**\n  🔴 **Phản ứng bù trừ sinh lý (Giữ muối):**\n    ▫️ Mất nước nặng, sốc giảm thể tích, nôn, tiêu chảy ồ ạt.\n    ▫️ Suy tim sung huyết, Xơ gan cổ trướng (Cơ thể lầm tưởng đang thiếu nước nên ép thận giữ muối tối đa).\n  🔴 **Do Nội tiết:**\n    ▫️ Cường Aldosteron (Giữ Natri, thải Kali)."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Thu thập nước tiểu 24h không đủ.\n💊 **Thuốc làm nhiễu:** Thuốc lợi tiểu là \"kẻ thù\" của xét nghiệm này, làm kết quả bài xuất điện giải niệu tăng vọt giả tạo, phá hỏng mọi công thức biện luận.",
    "clinicalNote": "Trong thực hành Hồi sức, để phân biệt Suy thận cấp (Tiểu ít, Creatinin máu tăng): \n- **Nếu Tỷ lệ $Na^+ / K^+$ niệu < 1 (Bị đảo ngược):** Đây là suy thận nguồn gốc \"Trước thận\" (Do sốc, mất nước). Thận vẫn tốt, đang cố gắng giữ Natri và thải Kali.\n- **Nếu Tỷ lệ $Na^+ / K^+$ niệu > 1 (Bình thường):** Đây là suy thận nguồn gốc \"Tại thận\" hoặc \"Sau thận\". Ống thận đã hoại tử, mất hoàn toàn khả năng giữ Natri."
  },
   {
    "name": "Tổng phân tích nước tiểu bằng máy tự động",
    "group": "Nước tiểu & Dịch",
    "time": "Làm ngay / 45 phút",
    "isFeatured": true,
    "concept": "Là xét nghiệm tầm soát cơ bản (sử dụng que nhúng - dipstick) đánh giá 10 thông số hóa lý của nước tiểu (pH, Tỷ trọng, Protein, Glucose, Cetôn, Urobilinogen, Bilirubin, Nitrit, Bạch cầu, Hồng cầu). Xét nghiệm cung cấp bức tranh toàn cảnh về hệ tiết niệu và các rối loạn chuyển hóa toàn thân.",
    "physiology": "📌 **Động học:** Nước tiểu là sản phẩm lọc của huyết tương qua cầu thận và sự tái hấp thu/bài tiết tại ống thận. Bất kỳ sự xuất hiện nào của các chất vốn dĩ không có trong nước tiểu (glucose, protein phân tử lớn, tế bào máu) đều là dấu hiệu chỉ điểm tổn thương.\n📌 **Bảo quản:** Vi khuẩn trong môi trường có thể phân hủy urê thành amoniac (làm kiềm hóa nước tiểu) và tiêu thụ glucose nếu để mẫu quá 2 giờ.",
    "indication": "🎯 **Sàng lọc thường quy:** Khám sức khỏe định kỳ, bilan trước mổ, phụ nữ có thai.\n🎯 **Chẩn đoán:** Nhiễm khuẩn tiết niệu (Nitrit, Bạch cầu), bệnh thận (Protein, Hồng cầu), rối loạn chuyển hóa (Glucose, Ceton trong Đái tháo đường), bệnh gan mật (Bilirubin, Urobilinogen).",
    "specimenCollection": "💧 **Loại mẫu:** Nước tiểu giữa dòng, ưu tiên lấy mẫu đầu tiên vào buổi sáng (đậm đặc nhất).\n⏳ **Chuẩn bị:** Vệ sinh sạch bộ phận sinh dục ngoài trước khi lấy. Phân tích ngay trong vòng 1-2 giờ.",
    "testingMethods": "Hóa sinh tự động (Nguyên lý phản ứng màu trên que nhúng).",
    "ref": "📊 **Bình thường:** pH 4,8 - 7,4; Tỷ trọng 1,014 - 1,028; Các thông số còn lại: Âm tính hoặc dạng vết.",
    "alert": "⚠️ Test Nitrit chỉ phát hiện được vi khuẩn Gram (-) có khả năng khử nitrat thành nitrit (như E.Coli). Một kết quả Nitrit (-) **không loại trừ** nhiễm khuẩn tiết niệu do vi khuẩn Gram (+) hoặc nấm.\n💡 Không dùng que nhúng Glucose niệu để chẩn đoán Đái tháo đường vì tỷ lệ âm tính giả cao (do ngưỡng thận thay đổi).",
    "pathologicalMeaning": {
      "increase": "🔹 **Thay đổi bất thường (Dương tính):**\n  🔴 **Đường tiết niệu:**\n    ▫️ Nhiễm khuẩn (Nitrit +, Leukocyte +).\n    ▫️ Sỏi, u bàng quang, viêm cầu thận (Erythrocyte +, Protein +).\n  🔴 **Chuyển hóa & Toàn thân:**\n    ▫️ Đái tháo đường mất bù (Glucose +, Keton +).\n    ▫️ Bệnh lý gan mật, tắc mật (Bilirubin +, Urobilinogen +/giảm).\n    ▫️ Mất nước (Tỷ trọng tăng cao).",
      "decrease": "Không có ý nghĩa (bình thường là âm tính)."
    },
    "interferingFactors": "❌ **Âm tính giả:** Uống quá nhiều nước làm hòa loãng nước tiểu. Dùng liều cao Vitamin C gây âm tính giả với Glucose, Máu, Nitrit, Bilirubin.\n💊 **Dương tính giả:** Dùng thuốc nhuộm màu nước tiểu (Phenazopyridine), nhiễm bẩn máu kinh nguyệt, chất tiết âm đạo.",
    "clinicalNote": "Theo **KDIGO 2024**, que nhúng nước tiểu là test sàng lọc đầu tay. Nếu que nhúng dương tính với Protein (≥ 1+), bệnh nhân bắt buộc phải được chỉ định làm xét nghiệm định lượng (UACR hoặc UPCR) để chẩn đoán chính xác Bệnh thận mạn (CKD)."
  },
  {
    "name": "Xét nghiệm tế bào cặn nước tiểu",
    "group": "Nước tiểu & Dịch",
    "time": "Làm ngay / 45 phút",
    "isFeatured": true,
    "concept": "Là bước soi vi thể ly tâm cặn nước tiểu dưới kính hiển vi để định danh và đếm số lượng các tế bào (hồng cầu, bạch cầu, tế bào biểu mô), các loại trụ niệu (casts) và tinh thể (crystals).",
    "physiology": "📌 **Trụ niệu (Casts):** Được hình thành do sự đông vón của protein Tamm-Horsfall trong lòng ống thận lượn xa và ống góp. Sự xuất hiện của trụ là bằng chứng \"đóng dấu\" chắc chắn tổn thương có nguồn gốc từ Nhu mô thận (không phải từ bàng quang hay niệu đạo).",
    "indication": "🎯 **Thận - Tiết niệu:** Chẩn đoán phân biệt nguyên nhân đái máu (viêm cầu thận vs. sỏi/u), đánh giá tổn thương ống thận cấp, phát hiện sỏi tinh thể.",
    "specimenCollection": "💧 **Loại mẫu:** Nước tiểu giữa dòng, mới lấy, đựng trong lọ sạch vô khuẩn.\n⏳ **Bảo quản:** Phải soi vi thể ngay khi mẫu còn tươi để tránh tế bào và trụ niệu bị phá hủy (ly giải).",
    "testingMethods": "Soi vi thể cặn lắng (sau khi ly tâm).",
    "ref": "📊 **Bình thường:** Hồng cầu 0-5/vi trường; Bạch cầu 0-5/vi trường; Không có trụ niệu (trừ vài trụ trong/hyaline); Ít tế bào biểu mô.",
    "alert": "⚠️ **Trụ hồng cầu** là dấu hiệu chỉ điểm kinh điển và đặc hiệu tuyệt đối cho **Viêm cầu thận cấp**.\n💡 **Trụ bạch cầu** là bằng chứng cực kỳ giá trị để phân biệt Viêm thận-bể thận cấp (viêm nhu mô thận) với Viêm bàng quang đơn thuần (không bao giờ có trụ).",
    "pathologicalMeaning": {
      "increase": "🔹 **Sự hiện diện bất thường:**\n  🔴 **Tế bào máu:**\n    ▫️ Đái máu (Hồng cầu > 5/VT): Sỏi, u, chấn thương, viêm cầu thận.\n    ▫️ Đái mủ (Bạch cầu > 5/VT): Nhiễm khuẩn tiết niệu, viêm thận kẽ.\n  🔴 **Trụ niệu (Casts):**\n    ▫️ Trụ sáp/bùn nâu (Muddy brown casts): Hoại tử ống thận cấp (ATN).\n    ▫️ Trụ mỡ (Fatty casts): Hội chứng thận hư.\n    ▫️ Trụ hạt (Granular casts): Bệnh thận mạn tính.\n  🔴 **Tinh thể (Crystals):**\n    ▫️ Tinh thể Urat, Oxalat, Canxi (Nguy cơ sỏi thận).",
      "decrease": "Không có ý nghĩa."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Để nước tiểu quá lâu làm tế bào và trụ bị ly giải. Nước tiểu quá kiềm cũng làm trụ niệu tan nhanh.\n💊 **Nhiễu:** Lẫn dịch tiết âm đạo sẽ làm tăng lượng tế bào biểu mô vảy (Squamous epithelial cells), làm mờ kết quả.",
    "clinicalNote": "Khi bệnh nhân có đái máu vi thể, việc soi hình thái hồng cầu rất quan trọng. Nếu hồng cầu **méo mó, biến dạng, gai góc (Dysmorphic RBCs)**, tổn thương 100% nằm ở màng lọc cầu thận. Nếu hồng cầu **nguyên vẹn**, nguyên nhân từ đường bài xuất (sỏi, u bàng quang)."
  },
   {
    "name": "Định lượng Glucose [dịch chọc dò]",
    "group": "Nước tiểu & Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Glucose trong các khoang thanh mạc (màng phổi, màng bụng, màng ngoài tim, bao hoạt dịch) được khuếch tán tự do từ máu. Trong điều kiện bình thường, nồng độ glucose trong dịch chọc dò gần tương đương với đường huyết. Sự giảm đường trong dịch chọc dò là dấu hiệu tế bào viêm hoặc vi khuẩn đang hoạt động mạnh mẽ.",
    "physiology": "📌 **Động học:** Bạch cầu đa nhân, đại thực bào và vi khuẩn sinh sôi trong dịch tiết sẽ tiêu thụ glucose ồ ạt, đồng thời tình trạng dày dính màng thanh mạc làm giảm sự khuếch tán glucose từ máu vào khoang dịch bù trừ.",
    "indication": "🎯 **Hô hấp / Nội khoa:** Phân biệt nguyên nhân tràn dịch màng phổi, tràn dịch ổ bụng (Dịch thấm hay Dịch tiết). Đặc biệt hữu ích trong chẩn đoán Tràn mủ màng phổi, Lao màng phổi hoặc Viêm khớp dạng thấp.",
    "specimenCollection": "💧 **Loại mẫu:** Dịch chọc dò (Dịch màng phổi, màng bụng, dịch khớp...).\n⏳ **Bắt buộc:** Đo đường huyết máu tĩnh mạch cùng lúc để so sánh.",
    "testingMethods": "Phản ứng Enzym sinh hóa.",
    "ref": "📊 **Bình thường:** Gần tương đương với nồng độ Glucose huyết thanh (Tỷ lệ Dịch/Máu xấp xỉ 1.0).",
    "alert": "⚠️ Nồng độ Glucose dịch màng phổi < 3,3 mmol/L (< 60 mg/dL) luôn mang ý nghĩa bệnh lý nghiêm trọng, đặc trưng cho một \"Dịch tiết\" (Exudate) cường độ cao.",
    "pathologicalMeaning": {
      "increase": "Không có ý nghĩa chẩn đoán (chủ yếu do tăng đường huyết toàn thân).",
      "decrease": "🔹 **Giảm Glucose Dịch (< 60 mg/dL hoặc Tỷ số Dịch/Máu < 0.5):**\n  🔴 **Các bệnh lý Dịch tiết (Exudate):**\n    ▫️ **Viêm khớp dạng thấp / Tràn dịch màng phổi do thấp:** Glucose dịch giảm cực kỳ sâu (thường < 1.6 mmol/L hay 30 mg/dL).\n    ▫️ **Tràn mủ màng phổi / Viêm mủ màng ngoài tim:** Vi khuẩn tiêu thụ ồ ạt.\n    ▫️ **Lao màng phổi / Lao màng bụng:** Mức giảm vừa phải.\n    ▫️ **Tràn dịch ác tính (Ung thư):** Tế bào ung thư chuyển hóa mạnh tiêu thụ đường."
    },
    "interferingFactors": "❌ **Lỗi lâm sàng:** Không đo đường huyết máu tĩnh mạch đối chiếu. Bệnh nhân có truyền dịch Glucose trước đó.",
    "clinicalNote": "Theo các Hướng dẫn lâm sàng về Hô hấp, đối với tràn dịch màng phổi cận viêm phổi (Parapneumonic effusion), một mức **Glucose dịch màng phổi < 3,3 mmol/L (< 60 mg/dL) hoặc pH < 7.20** là chỉ định bắt buộc phải **đặt ống dẫn lưu màng phổi** ngay lập tức, vì dịch này chắc chắn sẽ diễn tiến thành ổ mủ (empyema) và đóng kén."
  },
  {
    "name": "Định lượng Protein [dịch não tủy]",
    "group": "Nước tiểu & Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Protein trong dịch não tủy (CSF) có nồng độ rất thấp so với trong huyết thanh do \"Hàng rào máu-não\" (Blood-Brain Barrier) ngăn cản các đại phân tử lọt qua. Sự gia tăng protein trong CSF là dấu hiệu chỉ điểm hàng rào này đã bị phá vỡ hoặc có sự chèn ép dòng chảy tủy sống.",
    "physiology": "📌 **Đặc tính:** Chỉ những phân tử protein nhỏ (chủ yếu là Albumin) mới có thể đi qua hàng rào máu não. Globulin miễn dịch (IgG) trong CSF đa số được sản xuất tại chỗ khi có viêm.",
    "indication": "🎯 **Thần kinh học:** Chẩn đoán viêm màng não, viêm não, xuất huyết dưới nhện, các khối u thần kinh trung ương.\n🎯 **Tự miễn:** Chẩn đoán Hội chứng Guillain-Barré, bệnh xơ cứng rải rác (Multiple Sclerosis).",
    "specimenCollection": "💧 **Loại mẫu:** Dịch não tủy (chọc dò thắt lưng).\n⚠️ **Lưu ý:** Lấy vào ống nghiệm vô khuẩn. Nhanh chóng chuyển đến Labo.",
    "testingMethods": "Đo độ đục (Turbidimetry) hoặc So màu.",
    "ref": "📊 **Bình thường:** 15 - 45 mg/dL (< 0,45 g/L).\n*(Trẻ sơ sinh có thể cao hơn sinh lý: lên tới 1,5 g/L do hàng rào máu-não chưa hoàn thiện).*.",
    "alert": "⚠️ Sự kiện \"Chọc chạm mạch\" (Traumatic tap - mũi kim chọc làm chảy máu hòa vào dịch não tủy) sẽ làm tăng giả tạo nồng độ Protein (Cứ mỗi 1000 hồng cầu rớt vào sẽ làm tăng Protein lên 1 mg/dL).\n💡 Hội chứng Guillain-Barré có đặc điểm kinh điển là **\"Phân ly đạm - tế bào\"**: Protein tăng rất cao nhưng số lượng Bạch cầu hoàn toàn bình thường.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Protein Dịch não tủy (> 0,45 g/L):**\n  🔴 **Phá vỡ hàng rào máu não (Viêm/Nhiễm trùng):**\n    ▫️ Viêm màng não mủ do vi khuẩn (Tăng rất cao > 1-2 g/L).\n    ▫️ Viêm màng não do lao, nấm, giang mai thần kinh.\n  🔴 **Bệnh lý tự miễn & thoái hóa myelin:**\n    ▫️ Hội chứng Guillain-Barré (Viêm đa rễ dây thần kinh cấp).\n    ▫️ Xơ cứng rải rác (MS - Tăng ưu thế IgG).\n  🔴 **Tắc nghẽn dòng chảy CSF / Khối u:**\n    ▫️ Khối u tủy sống, chèn ép tủy (Hội chứng Froin: protein cao đến mức làm dịch đông đặc lại).\n    ▫️ Xuất huyết não, xuất huyết dưới nhện.",
      "decrease": "🔹 **Giảm Protein CSF:**\n    ▫️ Rò rỉ dịch não tủy (sau chấn thương sọ não, chọc dò thắt lưng nhiều lần)."
    },
    "interferingFactors": "❌ **Lỗi kỹ thuật:** Chọc chạm mạch (Traumatic tap) đưa huyết tương (chứa rất nhiều protein) vào dịch tủy.",
    "clinicalNote": "Trong chẩn đoán Viêm màng não, nồng độ Protein tăng tương quan với mức độ viêm. Protein < 1 g/L thường hướng về virus, trong khi Protein > 1.5 g/L hướng nhiều về Lao hoặc Vi khuẩn mủ. Ở bệnh nhân nghi xơ cứng rải rác (MS), bác sĩ sẽ chỉ định chạy **Điện di Protein dịch não tủy** để tìm dải Oligoclonal bands (IgG)."
  },
  {
    "name": "Đo hoạt độ LDH [dịch chọc dò]",
    "group": "Nước tiểu & Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Lactate Dehydrogenase (LDH) là enzym giải phóng khi tế bào bị hoại tử hoặc tổn thương. Trong dịch chọc dò, nồng độ LDH phản ánh trực tiếp \"mức độ tàn phá\" và viêm nhiễm của màng thanh mạc. Nó là một trong hai chỉ số cốt lõi cấu thành nên **Tiêu chuẩn Light**.",
    "physiology": "📌 **Cơ chế:** Các tế bào viêm (bạch cầu), vi khuẩn, và tế bào u ác tính trong khoang màng phổi/màng bụng chết đi sẽ giải phóng lượng khổng lồ LDH vào dịch.",
    "indication": "🎯 **Hô hấp / Nội khoa:** Bắt buộc chỉ định cùng Protein dịch để phân định Dịch thấm hay Dịch tiết. Đánh giá mức độ viêm và tiên lượng ổ mủ.",
    "specimenCollection": "💧 **Loại mẫu:** Dịch chọc dò (Màng phổi, màng bụng).\n⏳ **Bắt buộc:** Đo LDH máu tĩnh mạch cùng lúc.",
    "testingMethods": "Đo hoạt độ động học enzym.",
    "ref": "📊 **Dịch thấm (Transudate):** Tỷ lệ LDH Dịch/Máu < 0.6 VÀ LDH dịch < 2/3 Giới hạn trên bình thường của LDH máu.\n📊 **Dịch tiết (Exudate):** Tỷ lệ LDH Dịch/Máu > 0.6 HOẶC LDH dịch > 2/3 Giới hạn trên bình thường của LDH máu.",
    "alert": "⚠️ Chỉ cần 1 trong 3 Tiêu chuẩn Light (Tỷ lệ Protein >0.5, Tỷ lệ LDH >0.6, hoặc LDH dịch >2/3 ULN máu) thỏa mãn, dịch đó được kết luận chắc chắn là **Dịch tiết**.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng hoạt độ LDH (Chỉ điểm Dịch Tiết & Viêm nặng):**\n  🔴 **Hoạt độ LDH dịch > 1000 U/L (Viêm cực kỳ dữ dội):**\n    ▫️ Tràn mủ màng phổi (Empyema) do vi khuẩn.\n    ▫️ Viêm khớp dạng thấp có tràn dịch màng phổi.\n    ▫️ Bệnh lý ác tính (Ung thư di căn) giai đoạn sinh sôi tế bào mạnh.\n    ▫️ Chảy máu màng phổi (Hemothorax) do chấn thương (hồng cầu vỡ giải phóng LDH).\n  🔴 **Hoạt độ LDH tăng vừa phải:**\n    ▫️ Lao màng phổi, nhồi máu phổi, bệnh tự miễn.",
      "decrease": "Không có ý nghĩa bệnh lý độc lập (Chỉ điểm dịch thấm an toàn)."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Mẫu dịch bị lẫn nhiều máu (chọc chạm mạch) hoặc vỡ hồng cầu sẽ làm tăng giả tạo hoạt độ LDH.",
    "clinicalNote": "Theo dõi LDH dịch màng phổi qua các lần chọc tháo là công cụ tiên lượng tuyệt vời. Nếu nồng độ LDH trong dịch giảm dần qua các ngày điều trị, chứng tỏ phản ứng viêm đang được kiểm soát tốt bởi kháng sinh/hóa chất."
  },
  {
    "name": "Đo hoạt độ Amylase [dịch]",
    "group": "Nước tiểu & Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Amylase là enzym tiêu hóa của tuyến tụy và tuyến nước bọt. Việc xuất hiện nồng độ cao Amylase trong các khoang kín như màng phổi hay màng bụng là một tín hiệu báo động cực kỳ đặc hiệu, chỉ ra sự rò rỉ trực tiếp của dịch tiêu hóa vào khoang này.",
    "physiology": "📌 **Động học:** Dịch tụy chứa lượng khổng lồ amylase. Khi tụy viêm hoại tử, dịch rò rỉ dọc theo cơ hoành đi lên màng phổi (đặc biệt bên trái), hoặc chảy tràn vào ổ bụng. Dịch nước bọt chứa amylase sẽ lọt vào màng phổi nếu thực quản bị vỡ.",
    "indication": "🎯 **Tiêu hóa / Hô hấp:** Chỉ định khi có tràn dịch màng phổi, màng bụng ở bệnh nhân có đau bụng dữ dội, nghi ngờ Viêm tụy cấp, rò nang giả tụy hoặc vỡ thực quản.",
    "specimenCollection": "💧 **Loại mẫu:** Dịch chọc dò màng phổi hoặc dịch cổ trướng.\n⏳ **So sánh:** Thường đo kèm Amylase huyết thanh.",
    "testingMethods": "Đo hoạt độ động học enzym.",
    "ref": "📊 **Bình thường:** Nồng độ Amylase dịch < Nồng độ Amylase huyết thanh.",
    "alert": "⚠️ Tràn dịch màng phổi một bên (thường bên trái) có mức Amylase tăng cực kỳ cao (nhiều nghìn U/L) là một dấu hiệu sinh hóa \"biết nói\", đặc hiệu đến 90% cho bệnh lý tại Tụy hoặc Vỡ thực quản.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Amylase Dịch (Cao hơn giới hạn trên bình thường của máu):**\n  🔴 **Nguồn gốc từ Tụy (Pancreatic isoamylase):**\n    ▫️ Viêm tụy cấp (Tràn dịch ổ bụng hoặc màng phổi trái).\n    ▫️ Rò nang giả tụy (Pancreatic pseudocyst) vào màng bụng/màng phổi.\n  🔴 **Nguồn gốc từ Nước bọt (Salivary isoamylase):**\n    ▫️ Vỡ thực quản (Hội chứng Boerhaave - Cấp cứu ngoại khoa tử vong cực cao).\n  🔴 **Nguồn gốc từ biểu mô ác tính (Hiếm gặp):**\n    ▫️ Ung thư biểu mô tuyến (Adenocarcinoma) phổi hoặc buồng trứng tiết amylase ngoại lai.",
      "decrease": "Không mang ý nghĩa lâm sàng."
    },
    "interferingFactors": "❌ Không có nhiễu đáng kể. Nồng độ quá cao khiến enzym bảo toàn rất lâu trong dịch chọc dò.",
    "clinicalNote": "Để phân biệt cực nhanh nguyên nhân tràn dịch màng phổi có Amylase cao: Nếu bệnh nhân nôn mửa dữ dội rồi xuất hiện tràn dịch, kèm **pH dịch rất thấp (< 6.0)**, đó là Vỡ thực quản (dịch dạ dày mang theo amylase nước bọt lọt vào). Nếu bệnh nhân đau thượng vị lan ra sau lưng, **pH dịch quanh 7.30**, đó là Tràn dịch do Viêm tụy cấp."
  },
  {
    "name": "Định lượng Creatinin [dịch chọc dò]",
    "group": "Nước tiểu & Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Định lượng Creatinin trong dịch ổ bụng hoặc dịch sinh dục là xét nghiệm hóa sinh cốt lõi nhằm xác minh xem lượng chất lỏng đọng lại trong khoang cơ thể đó **có phải là nước tiểu rò rỉ ra hay không**.",
    "physiology": "📌 **Đặc tính:** Nước tiểu là nơi cô đặc creatinin của cơ thể, nồng độ creatinin trong nước tiểu cao gấp hàng chục đến hàng trăm lần so với trong máu huyết tương.",
    "indication": "🎯 **Ngoại khoa / Niệu khoa:** Chẩn đoán chấn thương vỡ bàng quang, rách niệu quản sau phẫu thuật vùng tiểu khung (cắt tử cung, mổ nội soi), hoặc rò rỉ miệng nối đường tiết niệu gây báng bụng (Urinoma).",
    "specimenCollection": "💧 **Loại mẫu:** Dịch chọc hút ổ bụng, dịch dẫn lưu màng phổi hoặc âm đạo.\n⏳ **Bắt buộc:** Đo song song Creatinin máu tĩnh mạch.",
    "testingMethods": "Phản ứng Jaffe hoặc Enzym.",
    "ref": "📊 **Bình thường:** Nồng độ Creatinin dịch xấp xỉ bằng nồng độ Creatinin máu.",
    "alert": "⚠️ Nếu tỷ lệ Creatinin Dịch ổ bụng / Creatinin Máu > 1.0 (Thường thực tế là rất lớn, > 5 đến 10 lần), bác sĩ ngoại khoa có thể khẳng định 100% bệnh nhân đã bị **thủng/rách đường tiết niệu** đổ vào ổ bụng.",
    "pathologicalMeaning": {
      "increase": "🔹 **Nồng độ Creatinin dịch cao bất thường (Tràn nước tiểu vào tạng):**\n  🔴 **Cấp cứu Ngoại Niệu:**\n    ▫️ Vỡ bàng quang trong phúc mạc (do chấn thương vùng hạ vị khi bàng quang căng đầy).\n    ▫️ Rách niệu quản do tai biến phẫu thuật sản phụ khoa / mổ lấy sỏi.\n    ▫️ Tắc nghẽn niệu quản làm nước tiểu trào ngược vào hệ bạch huyết gây tràn dịch màng phổi do nước tiểu (Urinothorax).",
      "decrease": "Không có ý nghĩa."
    },
    "interferingFactors": "❌ Thời gian rò rỉ càng lâu, urê và creatinin từ nước tiểu trong ổ bụng sẽ tái hấp thu ngược lại vào máu màng bụng, làm Creatinin máu giả tăng (giống suy thận), tuy nhiên tỷ lệ Dịch/Máu vẫn luôn giữ mức rất cao.",
    "clinicalNote": "Việc gửi nhầm một mẫu \"Nước tiểu\" thành mẫu \"Dịch ổ bụng\" cũng sẽ bị máy báo Creatinin cao bất thường. Trong bệnh cảnh sau mổ vùng chậu xuất hiện dịch dẫn lưu ra nhiều liên tục, chỉ định đo ngay Creatinin dịch dẫn lưu là thao tác rẻ tiền, nhanh nhất và chính xác nhất để kết luận có rò niệu đạo/bàng quang hay không trước khi cần tiêm thuốc cản quang chụp CT."
  },
  {
  "name": "Định lượng Cholesterol [dịch chọc dò]",
  "group": "Nước tiểu & Dịch",
  "time": "120 phút / 45 phút",
  "isFeatured": true,
  "concept": "Đo nồng độ Cholesterol và Triglycerid trong dịch chọc dò có ý nghĩa quan trọng để phân biệt các loại dịch mờ, đục như sữa. Việc định lượng này giúp phân định rõ Tràn dịch Dưỡng chấp (Chylous) do rò rỉ hệ bạch huyết, và Tràn dịch Giả dưỡng chấp (Pseudochylous) do viêm mạn tính dài ngày.",
  "physiology": "📌 **Dưỡng chấp (Chyle):** Chứa đậm đặc Triglycerid do hệ bạch huyết hấp thu chất béo từ ruột.\n📌 **Giả dưỡng chấp:** Dịch chứa nồng độ Cholesterol rất cao sinh ra do các tế bào viêm, hồng cầu chết đi và thoái giáng giải phóng cholesterol tích tụ lâu ngày trong một khoang kín (không rò bạch huyết).",
  "indication": "🎯 **Nội khoa / Hô hấp:** Áp dụng khi chọc hút ra dịch màng phổi/màng bụng có màu đục như sữa, trắng vàng.\n🎯 **Phân loại dịch tiết:** Là một tiêu chuẩn bổ sung độc lập rất có giá trị để phân biệt Dịch thấm - Dịch tiết khi Tiêu chuẩn Light nằm ở mức ranh giới.",
  "specimenCollection": "💧 **Loại mẫu:** Dịch chọc dò thanh mạc đục như sữa.",
  "testingMethods": "Phản ứng Enzym sinh hóa.",
  "ref": "📊 **Cholesterol dịch:** \n▫️ Dịch thấm: < 1,16 mmol/L (< 45 mg/dL).\n▫️ Dịch tiết: > 1,16 mmol/L.\n📊 **Triglycerid dịch:** < 1,24 mmol/L (< 110 mg/dL).",
  "alert": "⚠️ Hình ảnh dịch đục như sữa không đồng nghĩa với rách ống ngực (dưỡng chấp). Bắt buộc phải chạy cả cặp xét nghiệm (Cholesterol + Triglycerid dịch) để ra phác đồ chính xác.",
  "pathologicalMeaning": {
    "increase": "🔹 **Phân tích Dịch đục như Sữa:**\n  🔴 **Tràn dịch Dưỡng chấp thực sự (Chylous Effusion):**\n    ▫️ **Hóa sinh:** Triglycerid Dịch RẤT CAO (> 1.24 mmol/L), Cholesterol dịch THẤP.\n    ▫️ **Nguyên nhân:** Chấn thương vỡ ống ngực, u lympho chèn ép hệ bạch huyết vùng trung thất.\n  🔴 **Tràn dịch Giả Dưỡng chấp (Pseudochylous Effusion):**\n    ▫️ **Hóa sinh:** Cholesterol Dịch RẤT CAO (thường > 5.18 mmol/L), Triglycerid dịch THẤP.\n    ▫️ **Nguyên nhân:** Viêm màng phổi do Lao mạn tính đóng kén, Viêm khớp dạng thấp lâu ngày.",
    "decrease": "Không mang ý nghĩa lâm sàng đặc hiệu."
  },
  "interferingFactors": "❌ Bệnh nhân có rối loạn mỡ máu nặng (Tăng Cholesterol máu gia đình) có thể làm nồng độ cholesterol dịch tăng tương ứng.",
  "clinicalNote": "Cholesterol dịch chọc dò > 1,16 mmol/L (45 mg/dL) được các hướng dẫn Hô hấp hiện đại coi là một công cụ xuất sắc để khẳng định **Dịch Tiết (Exudate)** với độ đặc hiệu ngang ngửa Tiêu chuẩn Light, rất hữu dụng khi bệnh nhân dùng thuốc lợi tiểu làm sai lệch thông số Protein dịch."
},
{
    "name": "Định lượng Urê [dịch chọc dò]",
    "group": "Nước tiểu & Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Urê là sản phẩm thoái hóa của protein, được đào thải chủ yếu qua nước tiểu [1]. Tương tự như Creatinin, việc định lượng Urê trong dịch chọc dò (dịch màng bụng, dịch dẫn lưu vùng chậu) được sử dụng để xác định xem chất dịch này có bị pha trộn với nước tiểu hay không.",
    "physiology": "📌 **Động học:** Phân tử Urê có kích thước rất nhỏ và dễ dàng khuếch tán qua màng bụng nhanh hơn Creatinin. Do đó, nếu nước tiểu rò rỉ vào ổ bụng lâu ngày, Urê trong dịch sẽ nhanh chóng tái hấp thu vào máu, làm mất đi sự chênh lệch nồng độ giữa dịch và máu [1].",
    "indication": "🎯 **Ngoại khoa / Tiết niệu:** Hỗ trợ chẩn đoán chấn thương vỡ bàng quang, đứt rách niệu quản hoặc rò rỉ miệng nối đường tiết niệu sau phẫu thuật vùng chậu.",
    "specimenCollection": "💧 **Loại mẫu:** Dịch chọc hút ổ bụng, dịch dẫn lưu màng phổi hoặc vùng tiểu khung.\n⏳ **Bắt buộc:** Đo song song Urê máu tĩnh mạch cùng lúc để so sánh [1].",
    "testingMethods": "Phản ứng Enzym động học (Urease).",
    "ref": "📊 **Bình thường:** Nồng độ Urê dịch xấp xỉ bằng nồng độ Urê máu (Tỷ lệ Dịch/Máu ≈ 1).",
    "alert": "⚠️ Trong thực hành lâm sàng, để chẩn đoán rò rỉ nước tiểu (Urinoma), định lượng **Creatinin dịch** có giá trị tin cậy và chính xác cao hơn rất nhiều so với Urê, do Creatinin có phân tử lượng lớn hơn, khó bị tái hấp thu ngược vào máu qua màng phúc mạc.",
    "pathologicalMeaning": {
      "increase": "🔹 **Nồng độ Urê dịch cao bất thường (Tỷ lệ Dịch/Máu > 1):**\n  🔴 **Tràn nước tiểu vào tạng (Urinoma):**\n    ▫️ Vỡ bàng quang, đứt niệu quản, rò bàng quang - âm đạo.",
      "decrease": "Không có ý nghĩa chẩn đoán bệnh lý."
    },
    "interferingFactors": "❌ Thời gian rò rỉ nước tiểu vào ổ bụng càng lâu, sự cân bằng nồng độ Urê giữa dịch và máu càng lớn, dễ dẫn đến kết quả âm tính giả nếu chỉ dùng Urê để chẩn đoán.",
    "clinicalNote": "Một bệnh nhân sau mổ vùng chậu có dẫn lưu ra nhiều dịch trong, nếu bác sĩ phân vân đây là dịch tiết hay nước tiểu, việc chỉ định đo cặp Urê + Creatinin dịch là rẻ tiền và cho kết quả nhanh nhất trước khi phải chụp CT cản quang hệ tiết niệu."
  },
  {
    "name": "Định lượng Triglycerid [dịch chọc dò]",
    "group": "Nước tiểu & Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Triglycerid là thành phần chính của các hạt chylomicron được hệ bạch huyết ruột hấp thu sau bữa ăn. Định lượng Triglycerid trong các khoang dịch (màng phổi, màng bụng) là tiêu chuẩn vàng để chẩn đoán **Tràn dịch Dưỡng chấp (Chylous Effusion)** [1].",
    "physiology": "📌 **Đặc tính:** Dịch dưỡng chấp được tạo ra từ hệ bạch huyết, có màu trắng đục như sữa bò, chứa hàm lượng Triglycerid cực kỳ đậm đặc và rất nhiều tế bào lympho.",
    "indication": "🎯 **Hô hấp / Nội khoa:** Chỉ định bắt buộc khi chọc tháo ra loại dịch màng phổi hoặc dịch cổ trướng có màu trắng đục mờ như sữa, nhằm phân biệt Dưỡng chấp thực sự hay Giả dưỡng chấp.",
    "specimenCollection": "💧 **Loại mẫu:** Dịch chọc dò màng phổi, màng bụng hoặc màng ngoài tim.\n⚠️ **Lưu ý:** Nên đo kèm cả Cholesterol dịch để có cái nhìn toàn diện.",
    "testingMethods": "Phản ứng Enzym sinh hóa.",
    "ref": "📊 **Bình thường:** < 1,24 mmol/L (< 110 mg/dL) [1].",
    "alert": "⚠️ Dịch có màu trắng đục chưa chắc đã là dưỡng chấp. Dịch mủ (mủ màng phổi) hoặc dịch giả dưỡng chấp (chứa tinh thể cholesterol lâu ngày) cũng có màu tương tự. Chỉ có xét nghiệm hóa sinh mới kết luận được.",
    "pathologicalMeaning": {
      "increase": "🔹 **Triglycerid Dịch > 1,24 mmol/L (> 110 mg/dL) - Tràn dịch Dưỡng chấp:**\n  🔴 **Tổn thương cơ học ống ngực (Thoracic Duct):**\n    ▫️ Chấn thương lồng ngực, tai biến phẫu thuật tim mạch/lồng ngực.\n  🔴 **Chèn ép / Tắc nghẽn hệ bạch huyết:**\n    ▫️ Khối u trung thất (U lympho - Lymphoma là nguyên nhân nội khoa hàng đầu).\n    ▫️ Lao hạch, nhiễm giun chỉ bạch huyết.",
      "decrease": "🔹 **Triglycerid thấp (< 50 mg/dL) kèm Cholesterol rất cao:**\n  🔴 **Tràn dịch Giả dưỡng chấp (Pseudochylous):** Tràn dịch do viêm mạn tính kéo dài (Lao phổi cũ đóng kén, Viêm khớp dạng thấp) làm tế bào vỡ ra giải phóng cholesterol [1]."
    },
    "interferingFactors": "❌ Bệnh nhân nhịn đói dài ngày hoặc đang nuôi dưỡng tĩnh mạch hoàn toàn (không ăn qua ruột) có thể làm giảm lưu lượng dưỡng chấp, khiến Triglycerid dịch thấp giả tạo dù có rách ống ngực.",
    "clinicalNote": "Tràn dịch dưỡng chấp làm bệnh nhân mất đi một lượng khổng lồ protein, chất béo và tế bào lympho T. Nếu không được can thiệp (chế độ ăn kiêng mỡ chuỗi dài MCT, thắt ống ngực), bệnh nhân sẽ nhanh chóng suy kiệt và suy giảm miễn dịch nặng."
  },
  {
    "name": "Phản ứng Rivalta [dịch chọc dò]",
    "group": "Nước tiểu & Dịch",
    "time": "Cấp cứu / Làm ngay",
    "isFeatured": false,
    "concept": "Phản ứng Rivalta là một xét nghiệm định tính kinh điển, rẻ tiền và nhanh chóng được thực hiện ngay tại giường bệnh hoặc phòng xét nghiệm để phát hiện sự có mặt của các protein có trọng lượng phân tử lớn (chủ yếu là globulin và fibrinogen) trong dịch chọc dò.",
    "physiology": "📌 **Cơ chế:** Khi nhỏ dịch chọc dò vào dung dịch acid acetic loãng, nếu dịch có chứa nhiều protein viêm (dịch tiết), môi trường acid sẽ làm các protein này bị tủa lại, tạo thành một vẩn đục màu trắng giống như khói thuốc lá bay trong nước.",
    "indication": "🎯 **Nội khoa cơ bản:** Sàng lọc bước đầu để phân biệt nhanh **Dịch tiết (Exudate)** và **Dịch thấm (Transudate)** ở các tuyến y tế cơ sở thiếu máy sinh hóa.",
    "specimenCollection": "💧 **Loại mẫu:** Dịch chọc dò màng phổi, màng bụng.\n⏳ **Tiến hành:** Nhỏ 1-2 giọt dịch vào ống nghiệm chứa nước cất pha vài giọt acid acetic.",
    "testingMethods": "Phản ứng kết tủa hóa học (Định tính).",
    "ref": "📊 **Bình thường:** Âm tính (-) (Không có vẩn đục).",
    "alert": "⚠️ Trong nền y học hiện đại, phản ứng Rivalta đã dần bị thay thế bởi việc **định lượng trực tiếp Protein và LDH dịch (Tiêu chuẩn Light)** do Rivalta có độ nhạy và đặc hiệu không cao, dễ bị dương tính giả nếu dịch có máu.",
    "pathologicalMeaning": {
      "increase": "🔹 **Rivalta Dương tính (+) (Tương ứng với Dịch Tiết):**\n  🔴 Tổn thương màng thanh mạc do Viêm, Nhiễm trùng (Lao, Viêm phổi) hoặc Ung thư di căn.",
      "decrease": "🔹 **Rivalta Âm tính (-) (Tương ứng với Dịch Thấm):**\n  🔴 Dịch sinh ra do mất cân bằng áp lực cơ học: Suy tim, Xơ gan, Hội chứng thận hư."
    },
    "interferingFactors": "❌ Dịch có lẫn nhiều máu (do chọc chạm mạch) hoặc dịch có quá nhiều tế bào mủ sẽ che lấp hiện tượng kết tủa, làm phản ứng khó đọc và mất chính xác.",
    "clinicalNote": "Mặc dù là một xét nghiệm \"cổ điển\", Rivalta vẫn có giá trị định hướng tức thì. Nếu bác sĩ chọc ra dịch màng phổi có màu vàng chanh và Rivalta (+), tư duy lâm sàng lập tức hướng tới chẩn đoán Lao màng phổi hoặc Ung thư để cho y lệnh tiếp theo."
  },
  {
    "name": "Đếm số lượng Bạch cầu (WBC) [máu]",
    "group": "Huyết học",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "Bạch cầu (White Blood Cells - WBC) là những \"chiến binh\" của hệ thống miễn dịch, tuần hoàn trong máu để nhận diện, tiêu diệt các tác nhân gây bệnh (vi khuẩn, virus, ký sinh trùng) và dọn dẹp tế bào chết [1]. Đếm WBC là một phần của Tổng phân tích tế bào máu ngoại vi (CBC).",
    "physiology": "📌 **Động học:** Tủy xương liên tục sản xuất bạch cầu. Khi có phản ứng viêm hoặc nhiễm trùng cấp tính, tủy xương sẽ được lệnh giải phóng ồ ạt bạch cầu dự trữ vào máu, làm số lượng WBC tăng vọt chỉ trong vài giờ [1].",
    "indication": "🎯 **Nhiễm trùng & Hồi sức:** Chỉ định bắt buộc đầu tiên đứng trước mọi bệnh nhân có sốt, viêm, hoặc nghi ngờ nhiễm trùng huyết.\n🎯 **Huyết học:** Chẩn đoán các bệnh lý ác tính của tủy xương (Bệnh bạch cầu - Leukemia).",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (ống chống đông EDTA).\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn. Tránh lấy máu ngay sau khi bệnh nhân vừa gắng sức mạnh hoặc đang hoảng loạn (có thể làm bạch cầu tăng sinh lý tạm thời).",
    "testingMethods": "Máy đếm tế bào đếm tự động (Nguyên lý trở kháng hoặc laser phân tán).",
    "ref": "📊 **Người lớn:** 4,0 - 10,0 G/L (hoặc $4.000 - 10.000/mm^3$) [1].\n📊 **Trẻ sơ sinh:** Rất cao, từ $9.0-30.0~G/L$ [1].",
    "alert": "⚠️ Bạch cầu tăng hay giảm chỉ là hiện tượng (triệu chứng xét nghiệm). Để biết chính xác cơ thể đang chống lại tác nhân gì, bắt buộc phải xem xét **Công thức bạch cầu (Tỷ lệ NEU, LYM, EOS)**.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng số lượng Bạch cầu (Leukocytosis):**\n  🔴 **Nhiễm trùng mủ / Viêm cấp tính:** Viêm ruột thừa, viêm phổi, áp xe, viêm màng não [1].\n  🔴 **Stress sinh lý mạnh:** Chấn thương nặng, bỏng, sau phẫu thuật, nhồi máu cơ tim [1].\n  🔴 **Bệnh lý ác tính:** Bệnh bạch cầu cấp / mạn tính (Leukemia - nồng độ có thể tăng > 100 G/L) [1].",
      "decrease": "🔹 **Giảm số lượng Bạch cầu (Leukopenia):**\n  🔴 **Nhiễm Virus nặng:** Sốt xuất huyết Dengue, HIV/AIDS, Cúm, Sởi [1].\n  🔴 **Suy tủy / Độc tính tủy xương:** Suy tủy xương, hậu quả của hóa trị liệu ung thư, ngộ độc thuốc, thiếu hụt B12/Folate [1]."
    },
    "interferingFactors": "❌ Máu lấy khó khăn bị đông dây (clot) sẽ làm máy đếm sót, gây giảm giả tạo.\n💊 **Thuốc làm TĂNG:** Corticosteroid (thường xuyên gây tăng bạch cầu ở người đang điều trị khớp/hen), Adrenalin [1].\n💊 **Thuốc làm GIẢM:** Hóa chất chống ung thư, thuốc ức chế miễn dịch [1].",
    "clinicalNote": "Trong bệnh **Sốt xuất huyết Dengue** (QĐ 1450/QĐ-BYT 2024), Bạch cầu máu của bệnh nhân thường giảm rất sâu (thường < 4.0 G/L) ngay từ những ngày đầu. Đây là một dấu hiệu cận lâm sàng rất điển hình giúp bác sĩ phân biệt sốt Dengue với các loại sốt do vi khuẩn khác [2]."
  },
  {
    "name": "Đếm số lượng Hồng cầu (RBC) [máu]",
    "group": "Huyết học",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "Hồng cầu (Red Blood Cells - RBC) là tế bào chiếm số lượng đông đảo nhất trong máu, chứa Hemoglobin làm nhiệm vụ vận chuyển Oxy từ phổi đến mô và mang CO2 từ mô về phổi. Hồng cầu được sinh ra tại tủy xương và có tuổi thọ khoảng 120 ngày [1].",
    "physiology": "📌 **Động học:** Sự sản sinh hồng cầu chịu sự chỉ huy trực tiếp của hormon Erythropoietin (EPO) tiết ra từ Thận. Thận nhận biết tình trạng thiếu oxy trong máu và sẽ tiết EPO thúc đẩy tủy xương làm việc [1].",
    "indication": "🎯 **Huyết học tổng quát:** Đánh giá tình trạng thiếu máu (Anemia) hoặc đa hồng cầu (Polycythemia).\n🎯 **Khám sức khỏe:** Sàng lọc sức khỏe tổng quát, theo dõi trước và sau truyền máu.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (ống chống đông EDTA).\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn.",
    "testingMethods": "Máy đếm tế bào máu tự động.",
    "ref": "📊 **Nam:** 4,2 - 5,4 T/L (Tera/Lít, tức là $10^{12}$ tế bào/Lít) [1].\n📊 **Nữ:** 4,0 - 4,9 T/L [1].",
    "alert": "⚠️ Đánh giá tình trạng thiếu máu KHÔNG bao giờ chỉ dựa vào số lượng Hồng cầu (RBC), mà phải dựa vào nồng độ **Hemoglobin (HGB)**. Có những bệnh lý hồng cầu tăng vọt về số lượng nhưng bệnh nhân vẫn bị thiếu máu (do hồng cầu quá nhỏ, thiếu chất).",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Hồng cầu (Polycythemia):**\n  🔴 **Đa hồng cầu nguyên phát:** Bệnh Vaquez (u tủy xương sinh hồng cầu vô tội vạ) [1].\n  🔴 **Đa hồng cầu thứ phát (Do thiếu Oxy mạn tính):** Bệnh phổi tắc nghẽn mạn tính (COPD), bệnh tim bẩm sinh tím, người sống ở vùng núi cao [1].\n  🔴 **Cô đặc máu (Giả tăng):** Mất nước nặng, nôn mửa, tiêu chảy, bỏng [1].",
      "decrease": "🔹 **Giảm Hồng cầu (Anemia):**\n  🔴 Mất máu cấp tính (xuất huyết tiêu hóa, chấn thương) [1].\n  🔴 Suy giảm sản xuất (suy tủy, thiếu sắt, thiếu B12/Folate, bệnh thận mạn) [1].\n  🔴 Tăng phá hủy (Thiếu máu tan máu tự miễn, Sốt rét) [1]."
    },
    "interferingFactors": "❌ Lấy máu ở tĩnh mạch đang cắm dây truyền dịch sẽ làm hòa loãng máu, gây giảm giả tạo RBC [1].",
    "clinicalNote": "Ở bệnh nhân mắc hội chứng Thalassemia (Bệnh tan máu bẩm sinh), dù bị thiếu máu nghiêm trọng nhưng máy đếm có thể trả về số lượng Hồng cầu (RBC) tăng rất cao (thường > 5.5 T/L). Đây là phản ứng bù trừ của tủy xương sinh ra hàng loạt hồng cầu \"kém chất lượng\" có kích thước cực nhỏ nhằm cố gắng mang oxy."
  },
  {
    "name": "Định lượng Hemoglobin (HGB) [máu]",
    "group": "Huyết học",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "Hemoglobin (HGB) là một phân tử protein phức tạp chứa sắt (Heme) nằm trong hồng cầu. Nó là thành phần cốt lõi tạo nên màu đỏ của máu và quyết định 100% khả năng chuyên chở Oxy của cơ thể. Định lượng HGB là **\"Tiêu chuẩn vàng\" độc nhất** để chẩn đoán xác định và phân độ tình trạng Thiếu máu [1].",
    "physiology": "📌 **Đặc tính:** Nồng độ HGB tỷ lệ thuận với khả năng cung cấp oxy cho các tạng. Khi HGB giảm sâu, tim phải đập nhanh hơn để bơm lượng máu ít ỏi đi khắp cơ thể bù trừ, dẫn đến mệt mỏi, khó thở và suy tim [1].",
    "indication": "🎯 **Huyết học & Cấp cứu:** Chẩn đoán xác định thiếu máu. Theo dõi sát tình trạng xuất huyết đang tiếp diễn. Quyết định chỉ định truyền khối hồng cầu.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (ống chống đông EDTA).\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn.",
    "testingMethods": "Máy đếm tế bào máu tự động (Nguyên lý đo quang phổ cyanmethemoglobin hoặc không chứa cyanide).",
    "ref": "📊 **Nam:** 13,0 - 18,0 g/dL [1].\n📊 **Nữ:** 12,0 - 16,0 g/dL [1].\n*(Phụ nữ có thai: Nồng độ HGB giảm sinh lý do tình trạng giữ nước làm loãng máu, ngưỡng thiếu máu thường < 11 g/dL).*.",
    "alert": "⚠️ Sau một tai nạn mất máu cấp tính ồ ạt, nồng độ HGB trong những giờ đầu tiên có thể **chưa kịp giảm** (do cơ thể mất đồng đều cả huyết tương và hồng cầu). Phải chờ sau vài giờ khi dịch ngoại bào tràn vào mạch để bù thể tích, sự sụt giảm HGB mới hiển thị rõ.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Hemoglobin:**\n  🔴 Đa hồng cầu nguyên phát (Bệnh Vaquez) hoặc Đa hồng cầu thứ phát (COPD, dị tật tim bẩm sinh) [1].\n  🔴 Mất nước nặng, cô đặc máu [1].",
      "decrease": "🔹 **Giảm Hemoglobin (Thiếu máu):**\n  🔴 **Nguyên nhân dinh dưỡng:** Thiếu Sắt (nguyên nhân hàng đầu toàn cầu), thiếu B12, Folate [1].\n  🔴 **Nguyên nhân mất máu:** Rong kinh kéo dài, xuất huyết tiêu hóa, chấn thương [1].\n  🔴 **Nguyên nhân phá hủy / Suy tủy:** Thalassemia, tan máu tự miễn, suy thận mạn tính, ức chế tủy do hóa trị [1]."
    },
    "interferingFactors": "❌ Tình trạng lipid máu tăng quá cao (đục huyết thanh) hoặc số lượng bạch cầu tăng quá cao (> 50 G/L) có thể làm máy đo quang phổ bị nhiễu, gây tăng giả tạo HGB [1].",
    "clinicalNote": "Quyết định truyền máu hiện đại hoàn toàn dựa trên HGB kết hợp với tình trạng tưới máu mô. Theo các hướng dẫn lâm sàng huyết học, ngưỡng truyền khối hồng cầu thường là **HGB < 7 g/dL** đối với bệnh nhân trẻ, khỏe mạnh. Nếu bệnh nhân có bệnh lý mạch vành hoặc suy tim, ngưỡng bắt buộc truyền sẽ được nâng lên **< 8 g/dL hoặc < 10 g/dL** để bảo vệ cơ tim [1]."
  },
  {
    "name": "Hematocrit (HCT) - Dung tích hồng cầu [máu]",
    "group": "Huyết học",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "Hematocrit (HCT) đo lường tỷ lệ thể tích mà các tế bào hồng cầu chiếm giữ so với tổng thể tích máu toàn phần. Nếu HCT = 45%, nghĩa là trong 100ml máu có chứa 45ml là tế bào hồng cầu dặc, 55ml còn lại là huyết tương [1].",
    "physiology": "📌 **Đặc tính:** HCT là một tỷ lệ phần trăm (%). Do đó, nó bị phụ thuộc vào 2 biến số: Số lượng hồng cầu và Lượng nước (huyết tương) trong lòng mạch. Khi cơ thể mất nước, huyết tương giảm đi, hồng cầu bị cô đặc lại làm HCT tăng vọt [1].",
    "indication": "🎯 **Hồi sức truyền nhiễm:** Chỉ số vô cùng quan trọng để đánh giá mức độ **cô đặc máu** và sốc do thoát huyết tương (đặc biệt trong Sốt xuất huyết Dengue, bỏng nặng, tiêu chảy cấp).\n🎯 **Huyết học:** Đánh giá phối hợp cùng HGB trong chẩn đoán thiếu máu [1].",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (ống chống đông EDTA).\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn.",
    "testingMethods": "Máy phân tích tế bào tự động (tính toán dựa trên RBC và Thể tích trung bình hồng cầu MCV) hoặc Quay ly tâm ống mao quản (Microhematocrit).",
    "ref": "📊 **Nam:** 42% - 52% (0,42 - 0,52 L/L) [1].\n📊 **Nữ:** 37% - 48% (0,37 - 0,48 L/L) [1].",
    "alert": "⚠️ Bệnh nhân có HCT tăng cao khiến độ nhớt của máu tăng lên rất nhiều, dòng máu chảy lờ đờ, dẫn đến nguy cơ cao hình thành huyết khối (cục máu đông) gây tắc mạch máu não, mạch vành [1].",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng HCT (Cô đặc máu hoặc Đa hồng cầu):**\n  🔴 **Mất nước / Thoát dịch mạch máu:** Sốc Sốt xuất huyết Dengue, Sốc do bỏng diện rộng, Nôn mửa, Tiêu chảy ồ ạt [1].\n  🔴 **Sản sinh quá mức:** Bệnh đa hồng cầu Vaquez, bệnh tim phổi mạn tính (COPD) [1].",
      "decrease": "🔹 **Giảm HCT (Thiếu máu hoặc Hòa loãng máu):**\n  🔴 Thiếu máu do mất máu cấp tính hoặc mạn tính [1].\n  🔴 Tình trạng giữ nước (Phụ nữ có thai, xơ gan, suy tim, truyền quá nhiều dịch tĩnh mạch không chứa hồng cầu) [1]."
    },
    "interferingFactors": "❌ Lấy máu vào ống EDTA không đủ thể tích (do máu ít) sẽ làm lượng chất chống đông bị thừa so với máu, khiến tế bào hồng cầu bị teo lại, làm HCT giảm giả tạo [1].",
    "clinicalNote": "Trong quản lý **Sốt xuất huyết Dengue** theo QĐ 1450/QĐ-BYT (2024), Hematocrit là một \"chỉ báo sinh tồn\". Khi vi rút Dengue làm tăng tính thấm thành mạch, nước trong máu thoát ra các khoang màng phổi, ổ bụng, để lại các tế bào hồng cầu cô đặc trong lòng mạch. **HCT tăng > 20% so với giá trị nền** là dấu hiệu báo động đỏ cho thấy bệnh nhân đang rơi vào trạng thái sốc giảm thể tích, bắt buộc bác sĩ phải truyền dịch chống sốc ngay lập tức [2]."
  },
  {
    "name": "Đếm số lượng Tiểu cầu (PLT) [máu]",
    "group": "Huyết học",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "Tiểu cầu (Platelets - PLT) là những mảnh tế bào siêu nhỏ tróc ra từ tế bào khổng lồ trong tủy xương. Chúng có chức năng cốt lõi là **Cầm máu kỳ đầu**. Khi mạch máu bị rách, tiểu cầu lập tức lao tới kết dính với nhau tạo thành \"đinh cầm máu\" bịt kín lỗ thủng [1].",
    "physiology": "📌 **Động học:** Tuổi thọ của tiểu cầu trong máu chỉ khoảng 7 - 10 ngày. Chúng liên tục được sinh ra tại tủy xương và bị tiêu hủy chủ yếu tại Lách [1].",
    "indication": "🎯 **Rối loạn đông cầm máu:** Chỉ định cho mọi bệnh nhân có triệu chứng chảy máu bất thường (chảy máu cam, chảy máu chân răng, bầm tím dưới da, rong kinh).\n🎯 **Phẫu thuật & Sản khoa:** Xét nghiệm bắt buộc để đánh giá an toàn trước khi lên bàn mổ hoặc gây tê tủy sống.\n🎯 **Truyền nhiễm:** Theo dõi bắt buộc hàng ngày trong Sốt xuất huyết Dengue.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (ống chống đông EDTA).\n⏳ **Bảo quản:** Phải chạy máy trong vòng 2-4 giờ để tránh tiểu cầu bị phá hủy.",
    "testingMethods": "Máy đếm tế bào máu tự động.",
    "ref": "📊 **Bình thường:** 150 - 400 G/L (hoặc $150.000 - 400.000/mm^3$) [1].",
    "alert": "⚠️ Khi số lượng tiểu cầu giảm sâu dưới **50 G/L**, bệnh nhân đối mặt với nguy cơ xuất huyết không cầm được khi có chấn thương. Nếu tiểu cầu **< 20 G/L**, nguy cơ xuất huyết tự phát (đặc biệt là xuất huyết não tủy) đe dọa trực tiếp tính mạng [1].",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Tiểu cầu (Thrombocytosis):**\n  🔴 Hội chứng tăng sinh tủy (Tăng tiểu cầu tiên phát), Bệnh bạch cầu dòng tủy [1].\n  🔴 **Tăng phản ứng:** Sau cắt lách, viêm nhiễm mạn tính, tình trạng chảy máu mạn tính hoặc thiếu máu thiếu sắt [1].",
      "decrease": "🔹 **Giảm Tiểu cầu (Thrombocytopenia):**\n  🔴 **Giảm sản xuất (Tủy bị hỏng):** Suy tủy xương, hóa trị liệu ung thư, lạm dụng rượu, bạch cầu cấp, di căn tủy [1].\n  🔴 **Tăng phá hủy / Tiêu thụ:** Ban xuất huyết giảm tiểu cầu miễn dịch (ITP), Sốt xuất huyết Dengue, Hội chứng đông máu nội mạch rải rác (DIC), nhiễm trùng huyết [1].\n  🔴 **Cường lách:** Lách to (trong xơ gan) giữ lại và phá hủy tiểu cầu [1]."
    },
    "interferingFactors": "❌ **Hiện tượng Tiểu cầu vón cục do EDTA (EDTA-induced pseudothrombocytopenia):** Ở một số bệnh nhân, chất chống đông EDTA làm tiểu cầu dính chùm lại với nhau. Máy đếm tự động tưởng nhầm chùm tiểu cầu là 1 bạch cầu nên trả kết quả Tiểu cầu giảm cực sâu (giả tạo). **Xử lý:** Lấy lại máu bằng ống chống đông Citrate (ống đông máu) để đếm lại [1].",
    "clinicalNote": "Theo Phác đồ **Sốt xuất huyết Dengue 2024** (QĐ 1450/QĐ-BYT), Tiểu cầu là thông số bắt buộc phải được theo dõi mỗi ngày. Vi rút Dengue trực tiếp ức chế tủy sinh tiểu cầu và tạo ra kháng thể phá hủy tiểu cầu ở ngoại vi. Tuy nhiên, việc truyền khối tiểu cầu cho bệnh nhân Dengue chỉ được chỉ định rất ngặt nghèo (thường khi PLT < 50 G/L kèm xuất huyết nặng, hoặc PLT < 5 G/L dù chưa xuất huyết) vì truyền tiểu cầu dự phòng không làm thay đổi cục diện bệnh và mang lại nhiều tai biến [2]."
  },
  {
    "name": "Bạch cầu trung tính (NEU#) [máu]",
    "group": "Huyết học",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "Bạch cầu hạt trung tính (Neutrophils - NEU) chiếm quân số đông đảo nhất (50-70%) trong đội quân bạch cầu. Chúng là lực lượng phản ứng nhanh, những kẻ \"ăn vi khuẩn\" (thực bào) đầu tiên lao đến chiến trường khi cơ thể bị **vi khuẩn** tấn công [1].",
    "physiology": "📌 **Động học:** Khi có một ổ viêm mủ cấp tính (như viêm ruột thừa), tủy xương lập tức bơm hàng loạt Neutrophils non (bạch cầu đũa - bands) vào máu để tiếp viện, tạo ra hiện tượng \"công thức bạch cầu chuyển trái\" kinh điển [1].",
    "indication": "🎯 **Nhiễm trùng:** Xác định tình trạng nhiễm khuẩn mủ cấp tính.\n🎯 **Ung bướu:** Theo dõi Tình trạng giảm bạch cầu hạt (Neutropenia) đe dọa tính mạng do tác dụng phụ của hóa chất diệt ung thư.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (ống chống đông EDTA).\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn.",
    "testingMethods": "Máy đếm tế bào máu tự động, kết hợp nhuộm soi tiêu bản máu ngoại vi bằng mắt thường để hình thái tế bào [1].",
    "ref": "📊 **Tỷ lệ phần trăm (%):** 43% - 72% [1].\n📊 **Số lượng tuyệt đối (NEU# / ANC):** 1,6 - 7,5 G/L (hoặc $1.600 - 7.500/mm^3$) [1].",
    "alert": "⚠️ **Sốt giảm bạch cầu hạt (Febrile Neutropenia):** Khi số lượng NEU tuyệt đối (ANC) < 0,5 G/L kèm theo sốt, bệnh nhân hoàn toàn mất khả năng tự bảo vệ trước mọi loại vi khuẩn (thường gặp sau hóa trị). Đây là một cấp cứu ung bướu, bệnh nhân có thể chết vì nhiễm trùng huyết trong vài giờ nếu không được dùng kháng sinh phổ rộng ngay lập tức [1].",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng NEU# (Neutrophilia):**\n  🔴 **Nhiễm khuẩn cấp tính:** Viêm ruột thừa, viêm màng não mủ, áp xe sâu, viêm phổi [1].\n  🔴 **Tổn thương mô / Stress mạnh:** Bỏng, nhồi máu cơ tim, sau phẫu thuật, chuyển dạ đẻ [1].\n  🔴 **Bệnh tủy xương:** Bệnh bạch cầu mạn dòng tủy (CML) [1].",
      "decrease": "🔹 **Giảm NEU# (Neutropenia):**\n  🔴 **Nhiễm siêu vi nặng:** Cúm, Dengue, Sởi, Viêm gan virus (hệ miễn dịch tiêu thụ kiệt quệ NEU hoặc tủy bị ức chế tạm thời) [1].\n  🔴 **Ức chế tủy xương:** Hóa trị liệu ung thư, bệnh bạch cầu cấp lấn át tủy, suy tủy [1].\n  🔴 **Phá hủy ngoại vi:** Bệnh tự miễn (Lupus), Cường lách [1]."
    },
    "interferingFactors": "💊 **Thuốc làm TĂNG:** Dùng Corticosteroid (dập tắt ổ viêm nhưng lại ép bạch cầu trung tính dạt từ thành mạch ra giữa dòng máu, làm số lượng trên giấy xét nghiệm tăng cao nhưng lại mất chức năng) [1].\n💊 **Thuốc làm GIẢM:** Thuốc ức chế miễn dịch, kháng giáp tổng hợp (PTU), hóa trị [1].",
    "clinicalNote": "Bài toán biện luận nhiễm trùng: Bệnh nhân sốt cao, Bạch cầu tổng (WBC) tăng, và tỷ lệ NEU% tăng vượt 80%, đây gần như chắc chắn là **nhiễm khuẩn** (cần kháng sinh). Nếu WBC bình thường hoặc giảm, tỷ lệ NEU% giảm nhưng LYM% tăng cao, đây là **nhiễm virus** (kháng sinh vô tác dụng)."
  },
  {
    "name": "Bạch cầu Lympho (LYM#) [máu]",
    "group": "Huyết học",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "Bạch cầu Lympho (Lymphocytes - LYM) là các nhạc trưởng của hệ thống Miễn dịch Đặc hiệu (Miễn dịch thu được). Gồm tế bào B (sản xuất kháng thể) và tế bào T (tiêu diệt tế bào nhiễm bệnh). Chúng là lực lượng chủ lực để chống lại **Virus**, nấm và tế bào ung thư [1].",
    "physiology": "📌 **Đặc tính:** Tuổi thọ của tế bào Lympho có thể kéo dài hàng năm hoặc cả đời (tế bào Lympho nhớ), giúp cơ thể không bị mắc lại cùng một loại virus (như sởi, thủy đậu) lần thứ hai [1].",
    "indication": "🎯 **Nhiễm trùng học:** Sàng lọc các nhiễm trùng siêu vi (virus), lao, hoặc theo dõi tiến triển của HIV/AIDS (chỉ định đếm riêng dòng Lympho T-CD4).\n🎯 **Huyết học:** Chẩn đoán ung thư hạch (Lymphoma) hoặc Bệnh bạch cầu mạn dòng Lympho (CLL).",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (ống chống đông EDTA).\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn.",
    "testingMethods": "Máy đếm tế bào máu tự động, kết hợp nhuộm soi tiêu bản máu ngoại vi [1].",
    "ref": "📊 **Tỷ lệ phần trăm (%):** 18% - 43% [1].\n📊 **Số lượng tuyệt đối (LYM#):** 0,9 - 3,4 G/L (hoặc $900 - 3.400/mm^3$) [1].\n*(Ở trẻ em dưới 5 tuổi, tỷ lệ Lympho sinh lý luôn cao hơn Bạch cầu trung tính).*.",
    "alert": "⚠️ Ở người lớn, nếu số lượng tuyệt đối LYM# tăng vọt > 5.0 G/L (hoặc cao hơn nữa) kéo dài, kèm theo hạch to ở cổ, nách, bẹn, bác sĩ bắt buộc phải chuyển bệnh nhân đi chọc hút tủy xương hoặc sinh thiết hạch để loại trừ **Bệnh bạch cầu mạn dòng Lympho (CLL)** [1].",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng LYM# (Lymphocytosis):**\n  🔴 **Nhiễm Virus cấp tính:** Tăng bạch cầu đơn nhân nhiễm trùng (Epstein-Barr virus), Quai bị, Viêm gan virus, Sởi, Thủy đậu [1].\n  🔴 **Nhiễm Khuẩn nội bào mạn tính:** Bệnh Lao (Tuberculosis), Giang mai, Ho gà [1].\n  🔴 **Bệnh lý huyết học ác tính:** Bệnh bạch cầu dòng Lympho cấp/mạn, U lympho [1].",
      "decrease": "🔹 **Giảm LYM# (Lymphocytopenia):**\n  🔴 **Suy giảm miễn dịch:** HIV/AIDS (vi rút phá hủy trực tiếp tế bào T-CD4), hội chứng suy giảm miễn dịch bẩm sinh [1].\n  🔴 **Do nội tiết / Thuốc:** Bệnh Cushing, Đang điều trị bằng Corticoid liều cao kéo dài, Hóa xạ trị ung thư [1].\n  🔴 **Bệnh tự miễn:** Lupus ban đỏ hệ thống (các kháng thể tự tấn công Lympho bào) [1]."
    },
    "interferingFactors": "❌ Lấy máu sai kỹ thuật, cục máu đông hoặc chạy máy khi máu để quá lâu (làm tế bào biến dạng) [1].\n💊 **Thuốc làm TĂNG:** Dùng Adrenalin [1].\n💊 **Thuốc làm GIẢM:** Corticosteroid, thuốc ức chế miễn dịch (chống thải ghép) [1].",
    "clinicalNote": "Trái ngược với nhiễm khuẩn mủ (tăng Neutrophil), các bệnh nhân mắc bệnh **Lao phổi** thường có biểu hiện tăng dòng bạch cầu Lympho một cách âm ỉ, đi kèm với hội chứng sốt nhẹ về chiều và sút cân. Nếu chọc hút dịch màng phổi ở những bệnh nhân này, kết quả cũng sẽ trả về lượng tế bào Lympho chiếm ưu thế tuyệt đối."
  },
    {
    "name": "Bạch cầu Mono (MONO#) [máu]",
    "group": "Huyết học",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "Bạch cầu Mono (Monocytes) là những tế bào bạch cầu có kích thước lớn nhất trong máu. Sau khi lưu hành trong máu khoảng 1-3 ngày, chúng sẽ di chuyển vào các mô, lột xác thành các Đại thực bào (Macrophages) làm nhiệm vụ \"dọn rác\" (thực bào) các mảnh vỡ tế bào, vi khuẩn và kháng trình kháng nguyên.",
    "physiology": "📌 **Động học:** Bạch cầu Mono là lực lượng dọn dẹp chiến trường. Sự gia tăng của Mono trong một đợt nhiễm trùng cấp tính thường là tín hiệu cho thấy cơ thể đang bước vào **giai đoạn hồi phục**.",
    "indication": "🎯 **Nhiễm trùng:** Chẩn đoán các bệnh lý nhiễm khuẩn nội bào mạn tính (Lao, Giang mai) hoặc các bệnh do ký sinh trùng/virus.\n🎯 **Huyết học:** Chẩn đoán và theo dõi bệnh Bạch cầu cấp/mạn dòng Mono.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (ống chống đông EDTA).\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn.",
    "testingMethods": "Máy đếm tế bào máu tự động.",
    "ref": "📊 **Tỷ lệ phần trăm (%):** 4% - 12%.\n📊 **Số lượng tuyệt đối (MONO#):** 0,0 - 1,2 G/L (hoặc 0 - 1.200/mm³).",
    "alert": "⚠️ Ở bệnh nhân đang bị nhiễm khuẩn nặng, nếu số lượng bạch cầu trung tính (NEU) giảm nhưng bạch cầu Mono tăng lên, đó là dấu hiệu miễn dịch tốt (cơ thể đang dọn dẹp ổ viêm).",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng MONO# (Monocytosis):**\n  🔴 **Nhiễm trùng mạn tính:**\n    ▫️ Bệnh Lao (Tuberculosis), Giang mai, Viêm nội tâm mạc bán cấp.\n    ▫️ Giai đoạn phục hồi của các nhiễm khuẩn cấp tính.\n  🔴 **Bệnh lý tiêu hóa & Tự miễn:**\n    ▫️ Bệnh viêm ruột (Crohn, viêm loét đại tràng), Viêm khớp dạng thấp.\n  🔴 **Bệnh lý ác tính:**\n    ▫️ Bệnh bạch cầu dòng Mono, U lympho Hodgkin.",
      "decrease": "🔹 **Giảm MONO# (Monocytopenia):**\n    ▫️ Tình trạng stress cấp tính, suy tủy xương, hoặc do dùng Corticoid liều cao kéo dài."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Máu để quá lâu trước khi chạy máy làm tế bào bị biến dạng.\n💊 **Thuốc:** Glucocorticoid làm giảm số lượng Mono lưu hành.",
    "clinicalNote": "Trong bệnh sốt rét hoặc bệnh do Brucella (sốt Malta), sự gia tăng bạch cầu Mono là một dấu hiệu cận lâm sàng rất kinh điển. Đặc biệt, theo dõi Mono giúp bác sĩ đánh giá tiến triển của ổ áp xe đang được điều trị nội khoa."
  },
  {
    "name": "Bạch cầu ưa acid (EOS#) [máu]",
    "group": "Huyết học",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "Bạch cầu ưa acid (Eosinophils) là các tế bào miễn dịch chứa các hạt màu đỏ cam (khi nhuộm eosin). Chúng là vũ khí chuyên biệt của cơ thể để **tiêu diệt ký sinh trùng** (giun, sán) và là tác nhân chính gây ra các **phản ứng dị ứng**.",
    "physiology": "📌 **Cơ chế:** Kích thước của giun sán quá lớn để bị thực bào. Do đó, Eosinophil bám vào bề mặt ký sinh trùng và giải phóng các protein độc (Major Basic Protein) để tiêu diệt chúng. Eosinophil cũng giải phóng histaminaza để điều hòa phản ứng dị ứng.",
    "indication": "🎯 **Miễn dịch & Truyền nhiễm:** Tìm nguyên nhân trong các bệnh cảnh dị ứng (mề đay, hen suyễn), nghi nhiễm giun sán hoặc dị ứng thuốc.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (ống chống đông EDTA).\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn. Cần lấy máu vào cùng một thời điểm nếu theo dõi dài ngày.",
    "testingMethods": "Máy đếm tế bào máu tự động / Nhuộm soi tiêu bản.",
    "ref": "📊 **Tỷ lệ phần trăm (%):** 0% - 8%.\n📊 **Số lượng tuyệt đối (EOS#):** 0,0 - 0,6 G/L (hoặc 0 - 600/mm³).",
    "alert": "⚠️ Sự gia tăng cực cao của EOS (Hội chứng tăng bạch cầu ái toan - Hypereosinophilic syndrome) có thể đe dọa tính mạng do các hạt độc của Eosinophil thấm nhiễm và phá hủy cơ tim (Viêm nội tâm mạc Loeffler).",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng EOS# (Eosinophilia):**\n  🔴 **Ký sinh trùng:**\n    ▫️ Nhiễm giun sán (Giun đũa chó/Toxocara, giun móc, sán lá gan). EOS tăng rất mạnh khi ấu trùng đang di chuyển trong mô.\n  🔴 **Bệnh lý dị ứng:**\n    ▫️ Hen phế quản, viêm mũi dị ứng, chàm, mề đay, dị ứng thuốc trầm trọng.\n  🔴 **Bệnh lý khác:**\n    ▫️ Bệnh Hodgkin, hội chứng Churg-Strauss (viêm mạch), ung thư máu dòng Eos.",
      "decrease": "🔹 **Giảm EOS# (Eosinopenia):**\n    ▫️ Tình trạng stress cấp tính, nhiễm trùng vi khuẩn cấp tính nặng, sốc, hoặc Hội chứng Cushing."
    },
    "interferingFactors": "❌ **Sinh lý:** EOS có nhịp ngày đêm, cao nhất vào ban đêm và thấp nhất vào buổi sáng.\n💊 **Thuốc:** Sử dụng Corticosteroid hoặc Adrenalin sẽ làm giảm số lượng EOS xuống mức gần bằng 0 rất nhanh chóng.",
    "clinicalNote": "Nếu bệnh nhân có ngứa, nổi mẩn và EOS máu tăng cao, tuyệt đối không được tự ý cho dùng ngay Corticoid mà phải rà soát xét nghiệm huyết thanh giun sán (như Toxocara). Việc dùng Corticoid sẽ làm giảm EOS trên giấy xét nghiệm, nhưng lại làm suy giảm miễn dịch khiến giun sán bùng phát mạnh hơn."
  },
  {
    "name": "Bạch cầu ưa bazơ (BASO#) [máu]",
    "group": "Huyết học",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "Bạch cầu ưa bazơ (Basophils) là quần thể bạch cầu có số lượng ít nhất trong máu. Các hạt bào tương của chúng chứa lượng lớn Histamin và Heparin, đóng vai trò then chốt trong khởi phát các phản ứng dị ứng cấp tính và sốc phản vệ.",
    "physiology": "📌 **Đặc tính:** Basophil trong máu có chức năng tương tự như Tế bào Mast (Mast cells) ở trong mô. Khi tiếp xúc với dị nguyên, chúng vỡ ra, giải phóng ồ ạt histamin gây giãn mạch, tụt huyết áp và co thắt phế quản.",
    "indication": "🎯 **Huyết học:** Dấu hiệu chỉ điểm (Tumor marker) quan trọng trong chẩn đoán và theo dõi Bệnh bạch cầu mạn dòng tủy (CML) và các hội chứng tăng sinh tủy.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (ống chống đông EDTA).\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn.",
    "testingMethods": "Máy đếm tế bào máu tự động.",
    "ref": "📊 **Tỷ lệ phần trăm (%):** 0% - 2%.\n📊 **Số lượng tuyệt đối (BASO#):** 0,0 - 0,3 G/L (hoặc 0 - 300/mm³).",
    "alert": "⚠️ Tình trạng tăng Basophil (Basophilia) là một dấu hiệu \"cờ đỏ\" (red flag) trong huyết học. Một lượng Basophil tăng đều đặn, dai dẳng bắt buộc bác sĩ phải tầm soát bệnh bạch cầu tủy mạn (CML).",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng BASO# (Basophilia):**\n  🔴 **Bệnh lý ác tính / Tăng sinh tủy:**\n    ▫️ Bệnh bạch cầu mạn dòng tủy (CML), Bệnh đa hồng cầu nguyên phát (Vaquez).\n  🔴 **Tình trạng khác:**\n    ▫️ Phản ứng dị ứng, viêm xoang mạn tính, thủy đậu, suy giáp (phù niêm).",
      "decrease": "🔹 **Giảm BASO# (Basopenia):**\n    ▫️ Stress cấp tính, cường giáp, hoặc do dùng Corticosteroid kéo dài. (Thường ít có ý nghĩa lâm sàng do số lượng nền đã rất thấp)."
    },
    "interferingFactors": "💊 **Thuốc:** Các thuốc ức chế miễn dịch và Glucocorticoid làm giảm lượng Basophil.",
    "clinicalNote": "Trong theo dõi bệnh Bệnh bạch cầu mạn dòng tủy (CML), sự gia tăng đột ngột của Basophil thường là dấu hiệu cảnh báo bệnh đang chuyển sang giai đoạn cấp tính nguy hiểm (Blastic crisis - cơn bùng phát tế bào non)."
  },
  {
    "name": "Thể tích trung bình hồng cầu (MCV)",
    "group": "Huyết học",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "MCV (Mean Corpuscular Volume) là chỉ số đo lường **thể tích trung bình** của một tế bào hồng cầu. Đây là thông số quan trọng nhất để phân loại các nguyên nhân gây Thiếu máu thành 3 nhóm: Hồng cầu nhỏ, Hồng cầu bình thường, và Hồng cầu to.",
    "physiology": "📌 **Đặc tính:** \n- Hồng cầu sinh ra quá nhỏ (Microcytic) thường do thiếu nguyên liệu tạo Hemoglobin (Thiếu sắt) hoặc lỗi gen (Thalassemia).\n- Hồng cầu sinh ra quá to (Macrocytic) thường do thiếu nguyên liệu phân chia ADN (Thiếu Vitamin B12, Folate), khiến tế bào không thể phân chia nhỏ lại được.",
    "indication": "🎯 **Huyết học:** Chẩn đoán phân biệt bệnh căn của mọi trường hợp Thiếu máu.\n🎯 **Tầm soát:** Sàng lọc người mang gen Thalassemia trước tiền hôn nhân.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (ống chống đông EDTA).\n⏳ **Bảo quản:** Phải chạy máy trong vòng 4-6 giờ. Máu để quá lâu hồng cầu sẽ phình to ra gây tăng MCV giả tạo.",
    "testingMethods": "Máy đếm tế bào máu tự động (Đo trực tiếp).",
    "ref": "📊 **Bình thường:** 86 - 98 fL (femtolit).",
    "alert": "⚠️ MCV bình thường **không loại trừ** được bệnh lý. Nếu bệnh nhân bị thiếu máu hỗn hợp (vừa thiếu sắt làm hồng cầu nhỏ lại, vừa thiếu B12 làm hồng cầu to ra), MCV trung bình có thể hoàn toàn bình thường. Lúc này phải nhìn vào chỉ số **RDW**.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng MCV (Hồng cầu to / Macrocytosis):**\n  🔴 **Nguyên nhân dinh dưỡng / Tiêu hóa:**\n    ▫️ Thiếu hụt Vitamin B12, thiếu Acid Folic.\n    ▫️ Nghiện rượu mạn tính, Xơ gan, Cắt dạ dày.\n  🔴 **Nguyên nhân tủy xương:**\n    ▫️ Rối loạn sinh tủy (MDS), Suy giáp.",
      "decrease": "🔹 **Giảm MCV (Hồng cầu nhỏ / Microcytosis):**\n  🔴 **Nguyên nhân thường gặp nhất:**\n    ▫️ Thiếu máu do thiếu Sắt (Mất máu rỉ rả, ăn uống kém).\n    ▫️ Thalassemia (Bệnh tan máu bẩm sinh do lỗi chuỗi Globin).\n  🔴 **Nguyên nhân hiếm hơn:**\n    ▫️ Ngộ độc Chì, Thiếu máu nguyên bào sắt."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Máu để qua đêm, hoặc tình trạng tăng đường huyết cực cao (đái tháo đường thẩm thấu) làm nước hút vào hồng cầu gây phình to (Tăng MCV giả tạo).",
    "clinicalNote": "Bài toán lâm sàng kinh điển: Đứng trước một xét nghiệm có Thiếu máu (HGB giảm) và MCV < 80 fL (Hồng cầu nhỏ), bác sĩ **bắt buộc** phải chỉ định đo thêm **Ferritin**. Nếu Ferritin giảm sát đáy -> Thiếu sắt. Nếu Ferritin bình thường hoặc tăng cao -> Nghĩ ngay đến Thalassemia và cho làm Điện di Hemoglobin."
  },
  {
    "name": "Hemoglobin trung bình hồng cầu (MCH)",
    "group": "Huyết học",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "MCH (Mean Corpuscular Hemoglobin) đo lường **trọng lượng/lượng trung bình** của Hemoglobin có trong một tế bào hồng cầu. Chỉ số này thường song hành với MCV (tế bào nhỏ thì sức chứa ít, tế bào to thì sức chứa nhiều).",
    "physiology": "📌 **Đặc tính:** Màu đỏ của hồng cầu do Hemoglobin quyết định. Nếu MCH thấp, lượng Hemoglobin ít, hồng cầu khi soi dưới kính hiển vi sẽ có hình ảnh \"nhạt màu\" (Hypochromia) với vùng sáng ở giữa tế bào rất rộng.",
    "indication": "🎯 **Huyết học:** Phân loại thiếu máu (Thiếu máu nhược sắc hay đẳng sắc). Thường luôn được đọc cùng lúc với MCV.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (ống chống đông EDTA).\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn.",
    "testingMethods": "Máy đếm tế bào máu tự động (Tính toán: MCH = HGB / RBC).",
    "ref": "📊 **Bình thường:** 28 - 33 pg/tế bào (picogram).",
    "alert": "⚠️ MCH là giá trị tính toán phụ thuộc vào HGB và RBC. Mọi sai số gây đếm sai hồng cầu hoặc đo sai Hemoglobin đều dẫn đến sai số của MCH.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng MCH (Hồng cầu chứa nhiều Hb):**\n  🔴 **Tương ứng với Hồng cầu to:**\n    ▫️ Thiếu máu do thiếu B12, Folate. Tế bào phình to nên chứa được nhiều Hb hơn (Nhưng tổng thể cơ thể vẫn thiếu máu do số lượng tế bào bị sụt giảm nghiêm trọng).",
      "decrease": "🔹 **Giảm MCH (Thiếu máu nhược sắc):**\n  🔴 **Tương ứng với Hồng cầu nhỏ:**\n    ▫️ Thiếu máu do thiếu Sắt (nhược sắc rất điển hình).\n    ▫️ Thalassemia.\n    ▫️ Thiếu máu trong các bệnh viêm/nhiễm trùng mạn tính kéo dài."
    },
    "interferingFactors": "❌ **Lỗi máy:** Tình trạng mỡ máu quá cao (Lipemia) làm đục huyết tương, khiến máy đo quang phổ đọc nhầm nồng độ HGB cao vọt, dẫn đến MCH tăng giả tạo.",
    "clinicalNote": "MCH hiếm khi được sử dụng đơn độc để ra quyết định lâm sàng. Thuật ngữ \"Thiếu máu hồng cầu nhỏ nhược sắc\" chính là việc MCV giảm và MCH giảm đồng thời. Đây là chỉ điểm mạnh mẽ nhất để bác sĩ điều tra các tình trạng rỉ máu đường tiêu hóa (loét dạ dày, trĩ, ung thư đại tràng) hoặc rong kinh ở phụ nữ."
  },
  {
    "name": "Nồng độ Hemoglobin trung bình hồng cầu (MCHC)",
    "group": "Huyết học",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "MCHC (Mean Corpuscular Hemoglobin Concentration) đánh giá **nồng độ (độ đậm đặc)** của Hemoglobin trên một đơn vị thể tích khối hồng cầu. Nó phản ánh màu sắc thực sự của hồng cầu (đậm hay nhạt).",
    "physiology": "📌 **Đặc tính:** Khác với MCH (đo trọng lượng tuyệt đối), MCHC đo nồng độ. Đây là **chỉ số ổn định nhất** trong toàn bộ công thức máu do nó bị giới hạn bởi tính chất vật lý của tế bào (Hồng cầu không thể chứa nồng độ Hb đậm đặc quá mức sinh lý, nếu không nó sẽ bị vỡ).",
    "indication": "🎯 **Huyết học:** Chẩn đoán phân biệt bệnh Hồng cầu hình cầu di truyền (Hereditary Spherocytosis). Đánh giá tính kiểm soát chất lượng (QC) của máy xét nghiệm.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (ống chống đông EDTA).",
    "testingMethods": "Máy đếm tế bào máu tự động (Tính toán: MCHC = HGB / HCT).",
    "ref": "📊 **Bình thường:** 320 - 360 g/L (hoặc 32 - 36 g/dL).",
    "alert": "⚠️ **Một kết quả MCHC > 360 g/L là cực kỳ bất thường**. Hồng cầu bình thường không thể chứa nồng độ Hb cao hơn mức này. Nếu máy báo MCHC > 360, 99% là lỗi kỹ thuật hoặc máu có kháng thể ngưng kết lạnh, 1% còn lại là bệnh hồng cầu hình cầu.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng MCHC (Ưu sắc):**\n  🔴 **Bệnh lý màng hồng cầu:**\n    ▫️ Bệnh hồng cầu hình cầu di truyền (Hereditary Spherocytosis) - tế bào mất lõm giữa, vo tròn lại nên nồng độ Hb cực kỳ đậm đặc.\n  🔴 **Giả tạo (Rất phổ biến):**\n    ▫️ Bệnh ngưng kết tố lạnh (Cold agglutinins) làm hồng cầu dính chùm lại.\n    ▫️ Mất nước nặng.",
      "decrease": "🔹 **Giảm MCHC (Nhược sắc):**\n  🔴 **Giảm nguyên liệu:**\n    ▫️ Thiếu máu thiếu sắt nặng (độ bão hòa Hb trong tế bào cực kỳ loãng).\n    ▫️ Thalassemia."
    },
    "interferingFactors": "❌ **Lỗi kỹ thuật:** Tăng lipid máu nặng, tan máu trong ống nghiệm, hoặc nồng độ bạch cầu tăng quá cao đều làm máy đo sai HGB, đẩy MCHC tăng vọt. Hiện tượng ngưng kết lạnh bắt buộc kỹ thuật viên phải ủ ấm máu ở $37^0C$ trước khi chạy máy lại.",
    "clinicalNote": "MCHC là \"chiếc mỏ neo\" của kỹ thuật viên xét nghiệm. Bác sĩ lâm sàng khi thấy một bản kết quả có MCHC tăng vọt > 370 g/L thì không nên vội biện luận bệnh, mà cần yêu cầu phòng xét nghiệm kiểm tra lại tình trạng mẫu máu (tan máu, mỡ máu, hoặc cần ủ ấm)."
  },
  {
    "name": "Dải phân bố kích thước hồng cầu (RDW)",
    "group": "Huyết học",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "RDW (Red Cell Distribution Width) đánh giá **mức độ to nhỏ không đều** của quần thể hồng cầu (Anisocytosis). Nếu RDW bình thường, các hồng cầu có kích thước khá đồng đều nhau. Nếu RDW cao, trong máu đang tồn tại các hồng cầu với kích thước lớn bé lẫn lộn.",
    "physiology": "📌 **Động học:** Trong giai đoạn đầu của thiếu máu, khi tủy xương bắt đầu thiếu nguyên liệu (Sắt) hoặc vừa được bù nguyên liệu, nó sẽ sinh ra những lứa hồng cầu mới có kích thước khác biệt hoàn toàn với lứa cũ, làm RDW tăng vọt.",
    "indication": "🎯 **Huyết học (Chỉ điểm sớm):** RDW là chỉ số nhạy nhất, thay đổi **trước cả khi MCV giảm** trong thiếu máu thiếu sắt.\n🎯 **Chẩn đoán phân biệt:** Cực kỳ giá trị để phân biệt Thiếu máu thiếu sắt với bệnh Thalassemia.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (ống chống đông EDTA).",
    "testingMethods": "Máy đếm tế bào máu tự động.",
    "ref": "📊 **Bình thường:** 11,5% - 14,5%.",
    "alert": "⚠️ RDW **không bao giờ giảm có ý nghĩa lâm sàng** (RDW thấp chỉ có nghĩa là hồng cầu của bệnh nhân cực kỳ đều nhau, đây là điều tốt). Do đó, ta chỉ quan tâm khi RDW TĂNG.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng RDW (Hồng cầu to nhỏ không đều):**\n  🔴 **Kèm theo MCV THẤP (Hồng cầu nhỏ):**\n    ▫️ Đặc trưng tuyệt đối của **Thiếu máu thiếu sắt**.\n  🔴 **Kèm theo MCV CAO (Hồng cầu to):**\n    ▫️ Thiếu hụt B12, Acid Folic.\n  🔴 **Kèm theo MCV BÌNH THƯỜNG:**\n    ▫️ Bệnh nhân vừa được truyền máu (máu người cho trộn với máu người nhận tạo ra 2 kích thước khác nhau).\n    ▫️ Giai đoạn cực kỳ sớm của thiếu hụt dinh dưỡng (sắt/B12).",
      "decrease": "Không có ý nghĩa bệnh lý lâm sàng."
    },
    "interferingFactors": "❌ **Lỗi truyền máu:** Bệnh nhân vừa truyền khối hồng cầu sẽ có RDW tăng cao giả tạo do sự hòa trộn của hai quần thể hồng cầu khác nhau.",
    "clinicalNote": "Công thức kinh điển để phân biệt Thiếu máu hồng cầu nhỏ (MCV giảm): \n- **MCV giảm + RDW TĂNG CAO:** 90% là Thiếu máu thiếu sắt (do lứa hồng cầu sinh trước và sinh sau thiếu sắt khác nhau).\n- **MCV giảm + RDW BÌNH THƯỜNG:** 90% là Thalassemia thể nhẹ (Gen lỗi đồng đều từ lúc sinh ra, nên tất cả hồng cầu sinh ra đều nhỏ bằng nhau tăm tắp)."
  },
  {
    "name": "Thể tích trung bình tiểu cầu (MPV)",
    "group": "Huyết học",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "MPV (Mean Platelet Volume) đo lường **kích thước trung bình của tiểu cầu**. Tiểu cầu non vừa được tủy xương phóng thích có kích thước lớn, sau đó chúng nhỏ dần khi già đi trong dòng máu.",
    "physiology": "📌 **Động học:** MPV phản ánh trực tiếp tốc độ sản xuất tiểu cầu của tủy xương. Một MPV cao chứng tỏ tủy xương đang hoạt động hết công suất, đẩy ồ ạt các tiểu cầu non (kích thước lớn) ra ngoại vi để bù đắp sự thiếu hụt.",
    "indication": "🎯 **Rối loạn xuất huyết:** Chẩn đoán phân biệt nguyên nhân gây Giảm tiểu cầu là do Tủy xương bị suy kiệt (sản xuất kém) hay do Tiểu cầu bị phá hủy quá mức ở ngoại vi.\n🎯 **Truyền nhiễm:** Dấu hiệu dự báo hồi phục rất sớm trong **Sốt xuất huyết Dengue**.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (ống chống đông EDTA).\n⏳ **Bảo quản:** Phải chạy mẫu sớm. Nếu để quá lâu trong ống EDTA, tiểu cầu sẽ phình to ra làm tăng MPV giả tạo.",
    "testingMethods": "Máy đếm tế bào máu tự động.",
    "ref": "📊 **Bình thường:** 6,6 - 11,0 fL (femtolit).",
    "alert": "⚠️ Đánh giá MPV **bắt buộc** phải đặt cạnh số lượng Tiểu cầu (PLT). Một số lượng PLT thấp kèm MPV thấp là dấu hiệu báo động tủy xương đang bị liệt/ức chế nghiêm trọng.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng MPV (Tủy xương đang tăng cường sản xuất):**\n  🔴 **Giảm tiểu cầu do phá hủy ngoại vi:**\n    ▫️ Ban xuất huyết giảm tiểu cầu miễn dịch (ITP).\n    ▫️ Mất máu cấp tính ồ ạt, Sepsis, Hội chứng đông máu nội mạch rải rác (DIC).\n  🔴 **Giai đoạn phục hồi:**\n    ▫️ Đang hồi phục tủy sau hóa trị hoặc giai đoạn lui bệnh của Sốt xuất huyết Dengue.",
      "decrease": "🔹 **Giảm MPV (Tủy xương giảm sản xuất):**\n  🔴 **Suy kiệt tủy:**\n    ▫️ Suy tủy xương, hóa trị liệu ung thư độc tính tủy.\n  🔴 **Nguyên nhân khác:**\n    ▫️ Lách to cường chức năng, Wiskott-Aldrich syndrome."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Tế bào tiểu cầu trong ống EDTA có xu hướng trương phồng theo thời gian. Máu lấy buổi sáng mà buổi chiều mới chạy máy sẽ cho MPV tăng rất cao.\n❌ **Nhiễu:** Mảnh vỡ hồng cầu hoặc vi khuẩn lớn có thể bị máy đếm nhầm thành tiểu cầu to.",
    "clinicalNote": "Theo dõi **Sốt xuất huyết Dengue** (QĐ 1450/QĐ-BYT 2024), trong giai đoạn nguy hiểm, PLT giảm sâu. Khi theo dõi công thức máu mỗi ngày, nếu thấy **chỉ số MPV bắt đầu nhích tăng lên**, đó là tín hiệu cực kỳ đáng mừng báo hiệu tủy xương đã thoát ức chế, đang tống tiểu cầu non ra máu và số lượng PLT sẽ tăng vọt trở lại vào 1-2 ngày tới."
  },
  {
    "name": "Dải phân bố kích thước tiểu cầu (PDW)",
    "group": "Huyết học",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "PDW (Platelet Distribution Width) đánh giá mức độ **to nhỏ không đều của tiểu cầu** (Anisocytosis tiểu cầu). Cơ chế và ý nghĩa của nó tương tự như RDW đối với hồng cầu.",
    "physiology": "📌 **Đặc tính:** Một PDW cao có nghĩa là trong dòng máu đang tồn tại lẫn lộn giữa các tiểu cầu già siêu nhỏ và các siêu tiểu cầu non khổng lồ vừa được tủy xương xuất xưởng.",
    "indication": "🎯 **Huyết học:** Đánh giá mức độ kích hoạt của tiểu cầu và rối loạn sinh tủy. Thường luôn được xem xét song hành với MPV.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (ống chống đông EDTA).",
    "testingMethods": "Máy đếm tế bào máu tự động.",
    "ref": "📊 **Bình thường:** 10% - 17% (Tùy thuộc vào phương pháp và hóa chất của từng hệ thống máy).",
    "alert": "⚠️ Tương tự RDW, PDW giảm (các tiểu cầu đều tăm tắp) thường ít có ý nghĩa bệnh lý lâm sàng. PDW chỉ mang ý nghĩa biện luận khi nó tăng cao.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng PDW (Tiểu cầu to nhỏ không đều):**\n  🔴 **Phản ứng tăng sinh của tủy:**\n    ▫️ Ban xuất huyết giảm tiểu cầu miễn dịch (ITP) - Tủy sinh mạnh để bù đắp sự phá hủy.\n    ▫️ Bệnh lý ác tính: Tăng tiểu cầu tiên phát, Bệnh bạch cầu tủy mạn.\n    ▫️ Nhiễm trùng huyết nặng.",
      "decrease": "🔹 **Giảm PDW:**\n    ▫️ Suy tủy, ung thư di căn tủy (tủy bị liệt nên chỉ sinh ra một lứa tiểu cầu duy nhất với kích thước đều nhau, thường kèm số lượng PLT giảm nặng)."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Sự kết cụm tiểu cầu do EDTA hoặc máu để quá lâu làm sai lệch sự phân bố kích thước.",
    "clinicalNote": "Chỉ số PDW tăng cao đi kèm với MPV tăng cao là minh chứng mạnh mẽ cho việc tủy xương đang hoạt động bù trừ rất mãnh liệt. Nếu bệnh nhân có bầm tím ngoài da, PLT giảm nặng, MPV tăng và PDW tăng, chẩn đoán thường hướng về ITP (Tiểu cầu bị hệ miễn dịch tiêu diệt ở ngoại vi) chứ không phải do suy tủy."
  },
  {
    "name": "Khối tiểu cầu (PCT)",
    "group": "Huyết học",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "PCT (Plateletcrit) là chỉ số đo lường **thể tích khối tiểu cầu**. Nó tương tự như khái niệm Hematocrit (HCT) của hồng cầu. PCT cho biết tổng phần trăm thể tích của toàn bộ máu bị chiếm giữ bởi các tế bào tiểu cầu.",
    "physiology": "📌 **Cơ chế tính toán:** Khối tiểu cầu được tính bằng tích của Số lượng tiểu cầu (PLT) nhân với Thể tích trung bình tiểu cầu (MPV). \n📌 **Đặc tính:** PCT phản ánh tổng khối lượng tiểu cầu khả dụng (Platelet mass) để tham gia vào quá trình đông máu, chính xác hơn là chỉ nhìn vào số lượng.",
    "indication": "🎯 **Rối loạn đông máu:** Đánh giá tổng thể sức mạnh của \"bức tường\" tiểu cầu. Tầm soát nguy cơ chảy máu do thiếu hụt khối lượng tiểu cầu.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (ống chống đông EDTA).",
    "testingMethods": "Máy đếm tế bào máu tự động (Tính toán: PCT = PLT x MPV).",
    "ref": "📊 **Bình thường:** 0,1% - 0,28%.",
    "alert": "⚠️ Một PCT cực thấp (< 0,05%) cảnh báo bệnh nhân đối mặt với nguy cơ xuất huyết tự phát đe dọa tính mạng (chảy máu não, chảy máu nội tạng) rất lớn, bất kể kích thước tiểu cầu ra sao.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng PCT:**\n  🔴 **Tương ứng với tăng số lượng PLT:**\n    ▫️ Hội chứng tăng sinh tủy (Tăng tiểu cầu tiên phát).\n    ▫️ Phản ứng viêm cấp/mạn tính.\n    ▫️ Tình trạng sau cắt lách (lách không còn bắt giữ tiểu cầu).",
      "decrease": "🔹 **Giảm PCT:**\n  🔴 **Tương ứng với giảm PLT và/hoặc giảm MPV:**\n    ▫️ Sốt xuất huyết Dengue.\n    ▫️ Suy tủy xương, xơ gan.\n    ▫️ Ban xuất huyết giảm tiểu cầu miễn dịch (ITP)."
    },
    "interferingFactors": "❌ **Lỗi mẫu:** Cục máu đông vi thể (clots) trong ống nghiệm làm mất tiểu cầu, gây sụt giảm PCT giả tạo nặng nề.",
    "clinicalNote": "Mặc dù số lượng Tiểu cầu (PLT) là chỉ số thường được các bác sĩ nhìn vào đầu tiên, nhưng PCT mới thực sự đại diện cho tổng khả năng tạo nút cầm máu sinh lý. Ở một số bệnh nhân có số lượng PLT hơi thấp nhưng MPV (kích thước) rất lớn, thì tổng khối PCT vẫn có thể duy trì ở mức an toàn, do đó bệnh nhân không bị chảy máu trên lâm sàng."
  },
    {
    "name": "Tổng phân tích tế bào máu ngoại vi (Phết máu ngoại biên) [máu]",
    "group": "Huyết học",
    "time": "45 phút / 120 phút",
    "isFeatured": true,
    "concept": "Phết máu ngoại biên (Peripheral Blood Smear) là kỹ thuật dàn mỏng một giọt máu trên lam kính, nhuộm màu (Giemsa) và soi trực tiếp dưới kính hiển vi. Đây là \"tiêu chuẩn vàng\" về hình thái học, cho phép bác sĩ tận mắt quan sát hình dáng, kích thước và màu sắc thực sự của từng tế bào máu mà máy đếm tự động không thể nhận diện chi tiết.",
    "physiology": "📌 **Vai trò:** Máy đếm tự động phân loại tế bào dựa trên kích thước và xung điện (trở kháng/laser). Tuy nhiên, khi các tế bào bị vỡ, dính chùm, hoặc xuất hiện các tế bào non (chưa trưởng thành), máy sẽ báo lỗi (cờ rác - flag). Lúc này, mắt người qua kính hiển vi là bước kiểm chứng cuối cùng.",
    "indication": "🎯 **Huyết học:** Chẩn đoán xác định các bệnh lý bất thường hình thái hồng cầu (Thalassemia, Hồng cầu hình liềm). Phân loại các bệnh lý ác tính của tủy xương (Leukemia - Ung thư máu).\n🎯 **Truyền nhiễm:** Tìm trực tiếp Ký sinh trùng Sốt rét (Plasmodium) nằm trong hồng cầu.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (EDTA). Phải phết lam kính càng sớm càng tốt để tế bào không bị biến dạng do ngâm lâu trong chất chống đông.",
    "testingMethods": "Nhuộm May-Grunwald-Giemsa và soi hiển vi quang học.",
    "ref": "📊 **Bình thường:** Hồng cầu hình đĩa lõm hai mặt, kích thước đều. Bạch cầu trưởng thành tỷ lệ chuẩn. Tiểu cầu đứng rải rác hoặc thành từng cụm nhỏ. Không có tế bào non (Blast).",
    "alert": "⚠️ Việc phát hiện ra các **tế bào non (Blast cells)** hoặc các **tế bào có hạt Auer (Auer rods)** trên tiêu bản máu ngoại vi là một cấp cứu Huyết học, báo động bệnh nhân đang bị Ung thư máu cấp tính (Acute Leukemia).",
    "pathologicalMeaning": {
      "increase": "🔹 **Bất thường được phát hiện (Dương tính):**\n  🔴 **Dòng Hồng cầu:**\n    ▫️ **HC hình bia bắn (Target cells), HC nhỏ nhược sắc:** Rất điển hình của Thalassemia.\n    ▫️ **HC hình giọt nước, mảnh vỡ HC (Schistocytes):** Gặp trong Hội chứng đông máu nội mạch rải rác (DIC), Tan máu vi mạch.\n  🔴 **Dòng Bạch cầu:**\n    ▫️ **Xuất hiện tế bào Blast:** Bệnh bạch cầu cấp (Leukemia).\n    ▫️ **Bạch cầu đoạn trung tính chia nhiều thùy (Hypersegmented):** Thiếu Vitamin B12/Folate.\n    ▫️ **Tế bào Lympho không điển hình:** Tăng bạch cầu đơn nhân nhiễm trùng (do virus EBV).",
      "decrease": "Không áp dụng thuật ngữ Tăng/Giảm (Đây là xét nghiệm mô tả hình thái tế bào)."
    },
    "interferingFactors": "❌ **Lỗi kỹ thuật:** Phết máu quá dày (tế bào chồng lên nhau) hoặc quá mỏng, nhuộm cặn màu sẽ làm bác sĩ đọc sai kết quả.",
    "clinicalNote": "Theo bản cập nhật hướng dẫn **ASH 2026** về quản lý Bệnh bạch cầu cấp dòng Lympho (ALL) ở thanh thiếu niên và người trẻ (AYA), việc phát hiện sớm tế bào Blast qua phết máu ngoại vi ngay tại tuyến cơ sở là bước khởi đầu sống còn, giúp rút ngắn thời gian chuyển tuyến đến các trung tâm Huyết học chuyên sâu để can thiệp phác đồ nhi khoa kịp thời."
  },
  {
    "name": "Số lượng và độ tập trung tiểu cầu (thủ công) [máu]",
    "group": "Huyết học",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "Đếm tiểu cầu thủ công là phương pháp kỹ thuật viên trực tiếp đếm số lượng và quan sát độ tập trung của tiểu cầu (đứng rời rạc hay dính thành chùm) trên buồng đếm (Goryaev) hoặc trên lam kính hiển vi, thay vì phụ thuộc vào máy huyết học tự động.",
    "physiology": "📌 **Đặc tính:** Tiểu cầu rất dễ bị kích hoạt và kết cụm lại với nhau ngay khi rời khỏi mạch máu hoặc khi tiếp xúc với hóa chất ống nghiệm.",
    "indication": "🎯 **Kiểm chứng (QC lâm sàng):** Được chỉ định tuyệt đối khi máy phân tích tự động báo số lượng tiểu cầu giảm rất sâu (< 50 G/L) nhưng trên lâm sàng bệnh nhân lại **không hề có bất kỳ dấu hiệu xuất huyết nào** (không chấm xuất huyết, không chảy máu chân răng).",
    "specimenCollection": "💉 **Loại mẫu:** Máu mao mạch (trích ở đầu ngón tay/dái tai) hoặc máu tĩnh mạch (chống đông bằng Citrate thay vì EDTA nếu nghi ngờ vón cục).",
    "testingMethods": "Đếm buồng đếm thủ công hoặc soi lam kính.",
    "ref": "📊 **Bình thường:** 150 - 400 G/L. Mật độ độ tập trung 3-5 tiểu cầu/cụm trên lam kính.",
    "alert": "⚠️ Hiện tượng **\"Giảm tiểu cầu giả tạo do EDTA\"**: Kháng thể trong máu bệnh nhân phản ứng với chất chống đông EDTA làm tiểu cầu dính chặt thành từng đám khổng lồ. Máy đếm tự động tưởng chùm này là 1 bạch cầu nên báo PLT sát đáy. Nếu bác sĩ không cho đếm thủ công kiểm chứng mà vội vã truyền tiểu cầu thì sẽ là một tai biến y khoa nghiêm trọng.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng tiểu cầu thực sự:**\n  🔴 Hội chứng tăng sinh tủy, viêm nhiễm mạn tính, sau cắt lách.",
      "decrease": "🔹 **Giảm tiểu cầu thực sự:**\n  🔴 Sốt xuất huyết Dengue, Xuất huyết giảm tiểu cầu miễn dịch (ITP), Suy tủy, Hóa trị ung thư."
    },
    "interferingFactors": "❌ Lấy máu mao mạch bóp vuốt quá mạnh làm dịch mô hòa vào máu, kích hoạt tiểu cầu đông vón ngay trên ngón tay.",
    "clinicalNote": "Trong thực hành nhi khoa và cấp cứu Sốt xuất huyết, nếu máy báo tiểu cầu là 10 G/L nhưng kỹ thuật viên soi lam thủ công ghi chú \"Tiểu cầu tập trung từng đám lớn, số lượng thực tế bình thường\", bác sĩ hoàn toàn có thể yên tâm cho bệnh nhân theo dõi ngoại trú thay vì nhập viện truyền máu."
  },
  {
    "name": "Hồng cầu lưới (phương pháp thủ công / tự động) [máu]",
    "group": "Huyết học",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "Hồng cầu lưới (Reticulocytes - RET) là những tế bào \"hồng cầu thanh niên\" vừa mới được tủy xương phóng thích vào máu ngoại vi. Chúng vẫn còn sót lại các tàn tích của mạng lưới ARN/Ribosome bên trong bào tương. Sau 24-48 giờ lưu hành, chúng sẽ lột xác thành hồng cầu trưởng thành.",
    "physiology": "📌 **Gương phản chiếu Tủy xương:** Số lượng hồng cầu lưới trong máu là thước đo trực tiếp, sống động nhất để đánh giá **khả năng sản xuất của nhà máy tủy xương**. Một tủy xương khỏe mạnh, khi thấy cơ thể thiếu máu, sẽ lập tức tăng ca sản xuất và tống hàng loạt hồng cầu lưới ra ngoài bù đắp.",
    "indication": "🎯 **Huyết học:** \n- Chẩn đoán phân biệt nguyên nhân gây Thiếu máu: Do tại nhà máy (Suy tủy) hay do mất mát ở ngoại vi (Chảy máu, Tan máu).\n- Đánh giá đáp ứng sớm với các phác đồ điều trị thiếu máu (bù Sắt, Vitamin B12, hoặc tiêm EPO).",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (EDTA).",
    "testingMethods": "Nhuộm xanh cresyl rực rỡ (brilliant cresyl blue) đếm thủ công, hoặc đo bằng máy huyết học dùng công nghệ laser.",
    "ref": "📊 **Bình thường:** 0,5% - 1,5% (hoặc $25 - 75 \\times 10^9/L$).\n*(Lưu ý: Ở trẻ sơ sinh tỷ lệ này thường cao hơn, khoảng 2-6%).*",
    "alert": "⚠️ Nếu bệnh nhân đang bị thiếu máu rất nặng (HGB < 7 g/dL) mà tỷ lệ Hồng cầu lưới vẫn lẹt đẹt < 0,5%, điều này chứng tỏ \"nhà máy\" tủy xương đã bị suy kiệt, bại liệt hoàn toàn hoặc không có vật liệu để sản xuất.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Hồng cầu lưới (Tủy xương phản ứng tốt bù trừ):**\n  🔴 **Mất máu hoặc Phá hủy ngoại vi:**\n    ▫️ Thiếu máu do tan máu (Hemolytic anemia), sốt rét, Thalassemia.\n    ▫️ Tình trạng chảy máu rỉ rả kéo dài hoặc vừa mất máu cấp tính.\n  🔴 **Đáp ứng với điều trị (Tin vui):**\n    ▫️ Ngày thứ 5-7 sau khi bắt đầu truyền bù Sắt, B12, Folate (chứng tỏ tủy đã nhận được nguyên liệu và sản xuất ồ ạt).",
      "decrease": "🔹 **Giảm Hồng cầu lưới (Tủy xương đình công/Suy kiệt):**\n  🔴 **Nguyên nhân tại tủy / Thiếu nguyên liệu:**\n    ▫️ Suy tủy xương, ung thư di căn tủy, xơ tủy.\n    ▫️ Thiếu máu thiếu Sắt, B12, Folate trầm trọng (chưa được điều trị).\n    ▫️ Suy thận mạn tính (Thận không sản xuất đủ hormon EPO để kích thích tủy)."
    },
    "interferingFactors": "❌ Bệnh nhân vừa được truyền khối hồng cầu sẽ làm giảm tỷ lệ phần trăm hồng cầu lưới giả tạo (do bị pha loãng bởi lượng hồng cầu trưởng thành của người hiến).",
    "clinicalNote": "Công thức hiệu chỉnh: Vì phần trăm RET bị ảnh hưởng bởi số lượng HC toàn phần, bác sĩ lâm sàng bắt buộc phải tính **\"Chỉ số hồng cầu lưới hiệu chỉnh (RPI)\"**. Nếu RPI > 2%, tủy xương hoạt động tốt (nguyên nhân thiếu máu là do tan máu/mất máu). Nếu RPI < 2%, tủy xương đang bị suy hoặc thiếu nguyên liệu trầm trọng."
  },
  {
    "name": "Thời gian máu đông (TC - Temps de Coagulation) [máu]",
    "group": "Đông máu",
    "time": "Cấp cứu / 30 phút",
    "isFeatured": true,
    "concept": "Thời gian máu đông (TC) là khoảng thời gian tính từ lúc máu rời khỏi lòng mạch tiếp xúc với bề mặt lạ (ống nghiệm/lam kính) cho đến khi hình thành được một cục máu đông hoàn chỉnh. Xét nghiệm này đánh giá thô sơ toàn bộ quá trình đông máu nội sinh và con đường chung.",
    "physiology": "📌 **Đặc tính:** Đây là một xét nghiệm kinh điển (phương pháp Lee-White trong ống nghiệm hoặc phương pháp giọt máu trên phiến kính). Hiện nay nó mang ý nghĩa lịch sử nhiều hơn do độ nhạy rất kém.",
    "indication": "🎯 **Sàng lọc thô:** Thường chỉ còn được dùng ở các tuyến cơ sở không có máy đông máu tự động để sàng lọc nhanh nguy cơ chảy máu trước các thủ thuật tiểu phẫu (nhổ răng, cắt amidan).",
    "specimenCollection": "💉 **Loại mẫu:** Máu tĩnh mạch (Lee-White) hoặc máu mao mạch trích ở đầu ngón tay. Không dùng chất chống đông.",
    "testingMethods": "Bấm đồng hồ bấm giây và quan sát sự đông máu bằng mắt thường.",
    "ref": "📊 **Phương pháp ống nghiệm (Lee-White):** 5 - 10 phút.\n📊 **Phương pháp phiến kính:** 2 - 5 phút.",
    "alert": "⚠️ Xét nghiệm TC có độ nhạy cực thấp. Bệnh nhân bị rối loạn đông máu nhẹ (như Hemophilia thể nhẹ) thời gian máu đông vẫn hoàn toàn bình thường. Do đó, ở các bệnh viện tuyến trên, xét nghiệm này đã bị **cấm sử dụng làm bilan trước mổ** và được thay thế bắt buộc bằng **APTT và PT**.",
    "pathologicalMeaning": {
      "increase": "🔹 **Thời gian máu đông kéo dài:**\n  🔴 Thiếu hụt nghiêm trọng các yếu tố đông máu nội sinh (Hemophilia A, B thiếu hụt yếu tố VIII, IX).\n  🔴 Đang điều trị bằng thuốc chống đông Heparin liều cao.\n  🔴 Tình trạng Suy gan nặng, Hội chứng đông máu nội mạch rải rác (DIC) giai đoạn tiêu thụ kiệt quệ.",
      "decrease": "🔹 **Thời gian máu đông rút ngắn:**\n  🔴 Hội chứng tăng đông máu, có nguy cơ tắc mạch (ít có giá trị chẩn đoán lâm sàng)."
    },
    "interferingFactors": "❌ Lấy máu khó khăn, chọc kim nhiều lần làm mô giải phóng Thromboplastin tổ chức, kích hoạt con đường ngoại sinh làm máu đông cực nhanh (sai số rút ngắn thời gian). Nhiệt độ phòng quá lạnh cũng làm máu chậm đông.",
    "clinicalNote": "Nếu bệnh viện của bạn có hệ thống máy sinh hóa và đông máu tự động, không bao giờ dùng xét nghiệm này để loại trừ nguy cơ chảy máu trước các ca phẫu thuật lớn. XN này chỉ mang tính tham khảo sơ bộ cấp cứu tại thực địa."
  },
  {
    "name": "Thời gian máu chảy (TS - Temps de Saignement) phương pháp Duke",
    "group": "Đông máu",
    "time": "Làm tại giường",
    "isFeatured": true,
    "concept": "Thời gian máu chảy (TS) đo khoảng thời gian từ lúc tạo một vết chích rạch tiêu chuẩn trên da (thường là dái tai) cho đến khi vết chích tự động ngừng chảy máu. Nó đánh giá sức mạnh của **Giai đoạn cầm máu ban đầu** (bao gồm sự co thắt của thành mạch và sự kết dính tạo nút nêm của Tiểu cầu).",
    "physiology": "📌 **Cơ chế:** Ngay khi mao mạch bị đứt, phản xạ co thắt sẽ xảy ra, đồng thời tiểu cầu nhận tín hiệu bu tới dính vào thành mạch bị rách để bịt lỗ thủng. Xét nghiệm TS phản ánh sinh lý chính xác hoạt động này trong cơ thể sống (in vivo).",
    "indication": "🎯 **Huyết học:** Khảo sát các bệnh nhân có triệu chứng xuất huyết dưới da, chảy máu cam, rong kinh.\n🎯 **Bilan trước mổ:** Xét nghiệm sàng lọc cổ điển trước các thủ thuật ngoại khoa nhỏ.",
    "specimenCollection": "💧 **Kỹ thuật:** Chích dái tai (phương pháp Duke) hoặc rạch cẳng tay (phương pháp Ivy có băng huyết áp). Cứ mỗi 30 giây dùng giấy thấm giọt máu 1 lần cho đến khi máu ngừng chảy.",
    "testingMethods": "Khảo sát thời gian thực tại giường bệnh.",
    "ref": "📊 **Phương pháp Duke (Chích dái tai):** 2 - 5 phút.\n*(Lưu ý: Phương pháp Ivy rạch cẳng tay thường cho thời gian dài hơn, khoảng 2-9 phút)*.",
    "alert": "⚠️ Việc uống dù chỉ 1 viên Aspirin trước đó 1 tuần cũng sẽ làm tê liệt vĩnh viễn tiểu cầu hiện có, khiến thời gian máu chảy (TS) bị kéo dài bất thường.",
    "pathologicalMeaning": {
      "increase": "🔹 **Thời gian máu chảy kéo dài (Nguy cơ xuất huyết):**\n  🔴 **Do Tiểu cầu:**\n    ▫️ Giảm số lượng tiểu cầu nghiêm trọng (< 50 G/L).\n    ▫️ Suy nhược chất lượng tiểu cầu (Bệnh Glanzmann - có đủ quân số nhưng tiểu cầu bị \"mù\", không dính được vào nhau).\n  🔴 **Do Yếu tố huyết tương / Thành mạch:**\n    ▫️ Bệnh von Willebrand (Thiếu chất keo dán tiểu cầu vào thành mạch - là bệnh chảy máu di truyền phổ biến nhất).\n    ▫️ Viêm mao mạch dị ứng, bệnh Scorbut (thiếu Vitamin C làm thành mạch dòn dễ vỡ).",
      "decrease": "Không có ý nghĩa bệnh lý lâm sàng đặc hiệu."
    },
    "interferingFactors": "❌ **Lỗi kỹ thuật:** Chích quá sâu (chạm tĩnh mạch) hoặc thao tác dùng giấy thấm quệt mạnh làm tróc nút tiểu cầu đang hình thành sẽ làm TS kéo dài giả tạo.\n💊 **Thuốc:** NSAIDs (Ibuprofen, Naproxen), Aspirin, Clopidogrel làm kéo dài TS.",
    "clinicalNote": "Mặc dù phương pháp Duke rất phổ biến tại Việt Nam do rẻ và dễ làm, nhưng nó bị sai số phụ thuộc chủ quan vào độ sâu nhát chích của điều dưỡng rất nhiều. Trong Huyết học hiện đại, để đánh giá rối loạn chức năng tiểu cầu, người ta ưu tiên dùng xét nghiệm **Ngưng tập tiểu cầu với Collagen/ADP** tại máy trung tâm."
  },
  {
    "name": "Tốc độ lắng hồng cầu (Máu lắng - ESR) bằng máy tự động [máu]",
    "group": "Huyết học",
    "time": "60 phút",
    "isFeatured": true,
    "concept": "Tốc độ lắng hồng cầu (Erythrocyte Sedimentation Rate - ESR) đo tốc độ rơi xuống đáy ống nghiệm của các tế bào hồng cầu trong 1 giờ. Khi cơ thể có phản ứng viêm, gan sản xuất ra nhiều fibrinogen và protein viêm. Các protein này bám vào hồng cầu, làm chúng nặng hơn và kết thành chuỗi (như chuỗi tiền xu), khiến chúng chìm xuống đáy nhanh hơn rất nhiều.",
    "physiology": "📌 **Động học:** ESR là một chỉ số \"chậm chạp\". Trong khi CRP tăng vọt chỉ sau vài giờ có viêm, thì ESR phải mất vài ngày mới tăng lên, và cũng mất nhiều tuần mới hạ xuống sau khi tình trạng viêm đã khỏi.",
    "indication": "🎯 **Miễn dịch - Khớp:** Xét nghiệm cốt lõi để chẩn đoán và theo dõi bệnh Viêm khớp dạng thấp, Viêm động mạch thái dương (Bệnh Horton), Viêm đa cơ.\n🎯 **Truyền nhiễm / Ung bướu:** Theo dõi tiến triển các bệnh nhiễm trùng mạn tính (Lao, Viêm tủy xương) hoặc Đa u tủy xương.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (Ống Citrate tỷ lệ 1/4 hoặc EDTA tùy hệ thống máy).",
    "testingMethods": "Máy đo tự động (hoặc ống mao quản Westergren cải tiến đặt thẳng đứng).",
    "ref": "📊 **Dưới 50 tuổi:** Nam < 15 mm/1h; Nữ < 20 mm/1h.\n📊 **Trên 50 tuổi:** Nam < 20 mm/1h; Nữ < 30 mm/1h.",
    "alert": "⚠️ Tốc độ máu lắng > 100 mm/h là một con số \"Báo động đỏ\". Nó không bao giờ là biểu hiện viêm thông thường, mà thường chỉ điểm 3 nhóm bệnh lớn: Đa u tủy xương (Myeloma), Viêm mạch máu (Horton), hoặc Lao phổi/Viêm xương lan rộng.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng tốc độ lắng hồng cầu (Có phản ứng Viêm / Protein bất thường):**\n  🔴 **Tự miễn & Khớp:** Viêm khớp dạng thấp, Lupus ban đỏ hệ thống, Viêm động mạch tế bào khổng lồ.\n  🔴 **Nhiễm trùng:** Viêm màng ngoài tim, nhiễm trùng sâu, Lao.\n  🔴 **Bệnh lý ác tính:** Đa u tủy xương (sản xuất lượng khổng lồ protein bất thường làm tăng trọng lượng hồng cầu).\n  🔴 **Sinh lý:** Thai kỳ (các tháng cuối), giai đoạn hành kinh.",
      "decrease": "🔹 **Giảm tốc độ lắng hồng cầu:**\n  🔴 Tình trạng đa hồng cầu (Vaquez) (quá nhiều tế bào nên chèn ép nhau, không chìm được).\n  🔴 Suy tim sung huyết, bất thường hình thái hồng cầu (HC hình liềm không thể xếp chuỗi tiền xu được)."
    },
    "interferingFactors": "❌ Lỗi kỹ thuật đặt ống nghiệm hơi nghiêng (không thẳng đứng vuông góc) sẽ làm máu lắng nhanh hơn đáng kể. Máu để nhiệt độ phòng quá 2 tiếng mới đo cũng làm sai số.",
    "clinicalNote": "Theo bản cập nhật **EULAR 2025** về quản lý Viêm khớp dạng thấp, việc đo tốc độ máu lắng (ESR) kết hợp với CRP là hai thông số viêm bắt buộc để tính toán chỉ số hoạt động bệnh (DAS28), từ đó quyết định xem bệnh nhân có cần chuyển sang dùng các thuốc sinh học (Biologics) đắt tiền hay không."
  },
  {
    "name": "Xét nghiệm tế bào trong nước dịch chẩn đoán tế bào học [dịch]",
    "group": "Huyết học",
    "time": "120 phút",
    "isFeatured": true,
    "concept": "Xét nghiệm tế bào học dịch chọc dò (dịch màng phổi, màng bụng, dịch não tủy, dịch khớp) là quá trình ly tâm dịch, đếm số lượng tổng các tế bào và nhuộm soi dưới kính hiển vi để phân định các thành phần (Bạch cầu đa nhân, Bạch cầu lympho, hoặc sự xuất hiện của các tế bào ác tính / tế bào K).",
    "physiology": "📌 **Đặc tính:** Dịch sinh lý bình thường trong các khoang cơ thể (dịch thấm) chỉ có rất ít tế bào bạch cầu đơn nhân. Khi có viêm nhiễm hoặc u, thành mạch rò rỉ sẽ đưa quân đội bạch cầu hoặc tế bào u rơi rụng vào trong khoang dịch.",
    "indication": "🎯 **Nội khoa:** Đứng trước bất kỳ một ca tràn dịch màng phổi, màng bụng hay chọc dò dịch não tủy nào, việc đếm tế bào là bắt buộc để hướng tới chẩn đoán Vi khuẩn (viêm mủ), Lao, hay Ung thư.",
    "specimenCollection": "💧 **Loại mẫu:** Dịch chọc dò chứa trong ống có chất chống đông (EDTA/Heparin) để tế bào không bị dính cục.\n⏳ **Bảo quản:** Phải vận chuyển ngay tới phòng Lab và ly tâm soi sớm để tế bào không bị ly giải (đặc biệt là dịch não tủy).",
    "testingMethods": "Máy đếm tự động hoặc đếm bằng buồng đếm thủ công, sau đó nhuộm Giemsa hoặc Papanicolaou để phân loại hình thái tế bào ác tính.",
    "ref": "📊 **Dịch màng phổi/bụng bình thường:** < 1000 tế bào bạch cầu/µL (chủ yếu là đại thực bào và lympho).\n📊 **Dịch não tủy bình thường:** < 5 bạch cầu đơn nhân/µL.",
    "alert": "⚠️ Trong tràn dịch màng phổi, nếu thấy tỷ lệ Bạch cầu ái toan (Eosinophil) > 10%, nguyên nhân thường gặp nhất lại là do... Tràn khí màng phổi hoặc Chọc hút dịch nhiều lần có máu hòa vào, rất hiếm khi do nhiễm ký sinh trùng.",
    "pathologicalMeaning": {
      "increase": "🔹 **Bất thường công thức tế bào Dịch (Dương tính):**\n  🔴 **Tăng ưu thế Bạch cầu Đa nhân trung tính (> 50%):**\n    ▫️ Nhiễm trùng cấp mủ (Viêm màng não mủ, Tràn mủ màng phổi do vi khuẩn, Viêm phúc mạc tự phát).\n  🔴 **Tăng ưu thế Bạch cầu Lympho (> 80%):**\n    ▫️ Nhiễm trùng mạn tính: Lao màng phổi, Lao màng não, Viêm màng não do virus.\n    ▫️ Bệnh lý ác tính: U lympho.\n  🔴 **Xuất hiện Tế bào ác tính (Tế bào K):**\n    ▫️ Khẳng định Ung thư di căn màng thanh mạc (Adenocarcinoma) hoặc U trung biểu mô (Mesothelioma).",
      "decrease": "Không áp dụng thuật ngữ giảm. Sự vắng mặt của tế bào biểu thị tình trạng dịch thấm lành tính (Xơ gan, Suy tim)."
    },
    "interferingFactors": "❌ **Chọc chạm mạch (Traumatic tap):** Mũi kim chọc dò làm rách mạch máu khiến máu chảy òa vào ống dịch. Lúc này công thức bạch cầu trong dịch sẽ phản ánh công thức bạch cầu của máu ngoại vi, làm sai lệch hoàn toàn kết quả chẩn đoán.",
    "clinicalNote": "Một quy tắc vàng trong chẩn đoán Tràn dịch màng phổi cận viêm: Nếu chọc ra dịch có **chứa hàng chục ngàn tế bào bạch cầu đa nhân trung tính đang thoái hóa (mủ)**, dù cấy không mọc vi khuẩn, bệnh nhân vẫn có chỉ định tuyệt đối phải mở màng phổi dẫn lưu ống lớn để tránh đóng kén thành ổ áp xe phổi."
  },
  {
    "name": "Thời gian Prothrombin (PT) / Tỷ lệ Prothrombin / INR [máu]",
    "group": "Đông máu",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "Thời gian Prothrombin (PT - Prothrombin Time) đánh giá tốc độ đông máu của con đường **Đông máu Ngoại sinh** và con đường chung (bao gồm các yếu tố VII, X, V, II và Fibrinogen). Do các máy xét nghiệm dùng hóa chất khác nhau sẽ cho số giây PT khác nhau, Tổ chức Y tế Thế giới (WHO) đã thống nhất sử dụng chỉ số **INR (International Normalized Ratio)** để chuẩn hóa kết quả trên toàn cầu.",
    "physiology": "📌 **Cơ chế:** Các yếu tố đông máu ngoại sinh (đặc biệt yếu tố VII) được tổng hợp tại Gan và **bắt buộc phải có Vitamin K**. Do yếu tố VII có thời gian sống ngắn nhất, PT/INR là xét nghiệm nhạy bén nhất để phản ánh tình trạng suy giảm chức năng gan cấp tính hoặc thiếu hụt Vitamin K.",
    "indication": "🎯 **Nội khoa Tim mạch:** Chỉ định cốt lõi để theo dõi và chỉnh liều thuốc chống đông kháng Vitamin K đường uống (Warfarin, Sintrom, Acenocoumarol).\n🎯 **Tiêu hóa:** Đánh giá mức độ nặng của tổn thương tế bào gan (Xơ gan, Hoại tử gan cấp).\n🎯 **Bilan trước mổ:** Xét nghiệm bắt buộc để tầm soát nguy cơ chảy máu do khiếm khuyết con đường ngoại sinh.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết tương (Ống Citrate 3.2% nắp xanh dương). Tỷ lệ chống đông phải chính xác tuyệt đối: 1 thể tích Citrate / 9 thể tích máu.",
    "testingMethods": "Máy đông máu tự động phân tích quang học hoặc cơ học.",
    "ref": "📊 **Bình thường (Người không dùng thuốc):** PT khoảng 11 - 13 giây; Tỷ lệ PT > 70%; **INR = 0.8 - 1.2**.\n📊 **Ngưỡng điều trị (Dùng kháng Vitamin K):** **INR từ 2.0 - 3.0** (Tùy bệnh lý).",
    "alert": "⚠️ Nếu bệnh nhân đang dùng kháng Vitamin K mà kết quả **INR > 5.0**, bệnh nhân đối mặt với nguy cơ xuất huyết tự phát (đặc biệt xuất huyết não) cực kỳ cao. Bác sĩ phải cho dừng thuốc ngay và xem xét tiêm giải độc bằng Vitamin K hoặc truyền huyết tương tươi đông lạnh.",
    "pathologicalMeaning": {
      "increase": "🔹 **PT kéo dài / INR tăng / Tỷ lệ PT giảm (Nguy cơ xuất huyết):**\n  🔴 **Do Thuốc:** Đang điều trị thuốc kháng Vitamin K quá liều.\n  🔴 **Bệnh lý Gan mật:** Xơ gan mất bù, viêm gan bùng phát, tắc mật kéo dài (gây không hấp thu được mỡ và Vitamin K hòa tan trong mỡ).\n  🔴 **Thiếu hụt:** Thiếu Vitamin K do suy dinh dưỡng nặng, loạn khuẩn ruột do dùng kháng sinh phổ rộng.\n  🔴 **Bệnh lý tiêu thụ:** Hội chứng đông máu nội mạch rải rác (DIC).",
      "decrease": "🔹 **PT rút ngắn / INR giảm (Dưới ngưỡng trị liệu):**\n  🔴 Bệnh nhân dùng thuốc kháng Vitamin K không đủ liều, hoặc dùng kèm thực phẩm chứa quá nhiều Vitamin K (súp lơ xanh, rau bina) làm mất tác dụng của thuốc, đe dọa nguy cơ bị Huyết khối tắc mạch (đột quỵ)."
    },
    "interferingFactors": "❌ Lấy máu không đủ tới vạch quy định của ống Citrate làm thừa chất chống đông, khiến PT bị kéo dài giả tạo. Máu để quá 4 tiếng không ly tâm chạy máy cũng làm hỏng yếu tố đông máu.",
    "clinicalNote": "Theo **Hướng dẫn AHA/ACC 2024-2025**, đối với bệnh nhân Rung nhĩ hoặc mang Van tim nhân tạo cơ học, mục tiêu INR sinh tồn thường là **2.0 - 3.0** (van động mạch chủ) hoặc **2.5 - 3.5** (van hai lá). Bác sĩ gia đình và tuyến cơ sở bắt buộc phải điều chỉnh liều Warfarin dựa vào xét nghiệm INR mỗi tháng 1 lần để giữ bệnh nhân trong \"cửa sổ điều trị hẹp\" này."
  },
  {
    "name": "Thời gian Thromboplastin từng phần hoạt hóa (APTT) [máu]",
    "group": "Đông máu",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "APTT (Activated Partial Thromboplastin Time) đánh giá toàn bộ các yếu tố của con đường **Đông máu Nội sinh** và con đường chung (bao gồm các yếu tố XII, XI, IX, VIII, X, V, II, Fibrinogen). Xét nghiệm này mô phỏng lại quá trình đông máu xảy ra khi máu tiếp xúc với bề mặt lạ bị tổn thương (không cần sự hiện diện của yếu tố mô bên ngoài).",
    "physiology": "📌 **Động học:** APTT đặc biệt nhạy cảm với sự thiếu hụt các yếu tố nội sinh (như yếu tố VIII trong Hemophilia A) và sự hiện diện của thuốc chống đông Heparin tiêu chuẩn (Heparin không phân đoạn).",
    "indication": "🎯 **Huyết học:** Chẩn đoán các bệnh lý ưa chảy máu di truyền (Hemophilia A, B) hoặc bệnh von Willebrand.\n🎯 **Hồi sức Tim mạch:** Bắt buộc để theo dõi và chỉnh liều khi truyền liên tục **Heparin không phân đoạn (UFH)** tĩnh mạch (điều trị nhồi máu cơ tim, thuyên tắc phổi).\n🎯 **Bilan trước mổ:** Xét nghiệm sinh tử cùng với PT để đánh giá toàn diện nguy cơ chảy máu.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết tương (Ống Citrate 3.2%).\n⏳ **Lưu ý cấp cứu:** Nếu bệnh nhân đang truyền Heparin liên tục, tuyệt đối không được chọc lấy máu ở tay đang cắm kim truyền dịch chứa Heparin (sẽ làm APTT dài vô tận giả tạo). Phải lấy ở tay đối diện.",
    "testingMethods": "Máy đông máu tự động.",
    "ref": "📊 **Bình thường:** 25 - 35 giây (hoặc tỷ số bệnh/chứng từ 0.8 - 1.2).\n📊 **Ngưỡng điều trị (Đang truyền Heparin):** APTT kéo dài gấp **1.5 - 2.5 lần** so với giá trị bình thường của phòng xét nghiệm (thường khoảng 50 - 70 giây).",
    "alert": "⚠️ Nếu bệnh nhân có **APTT kéo dài đơn độc** (PT bình thường) mà không hề dùng Heparin và có tiền sử chảy máu khớp, sưng gối từ nhỏ, 99% bệnh nhân mắc bệnh **Hemophilia**. Tuyệt đối không được phẫu thuật nếu chưa truyền bù yếu tố đông máu đặc hiệu.",
    "pathologicalMeaning": {
      "increase": "🔹 **APTT kéo dài (Nguy cơ chảy máu):**\n  🔴 **Sử dụng thuốc:** Đang điều trị bằng Heparin không phân đoạn (UFH).\n  🔴 **Thiếu hụt bẩm sinh:** Bệnh Hemophilia A (thiếu yếu tố VIII), Hemophilia B (thiếu yếu tố IX).\n  🔴 **Kháng thể ức chế lưu hành:** \n    ▫️ Có sự hiện diện của kháng thể kháng Phospholipid (Hội chứng Antiphospholipid - nghịch lý là trên xét nghiệm APTT dài ra, nhưng bệnh nhân lại bị huyết khối tắc mạch).\n    ▫️ Sinh kháng thể tự miễn ức chế yếu tố VIII.\n  🔴 **Tiêu thụ ồ ạt:** Hội chứng DIC.",
      "decrease": "🔹 **APTT rút ngắn:**\n  🔴 Tình trạng tăng đông máu (Huyết khối tĩnh mạch sâu, ung thư di căn). Ít có giá trị ứng dụng đơn độc trên lâm sàng."
    },
    "interferingFactors": "❌ Lấy máu sai tỷ lệ chống đông, vỡ hồng cầu, hoặc lipid máu tăng cao cản trở đầu dò quang học của máy. Nếu bệnh phẩm để ở nhiệt độ phòng quá lâu, yếu tố VIII bị phân hủy tự nhiên làm APTT kéo dài giả tạo.",
    "clinicalNote": "Bài toán biện luận đông máu kinh điển trước mổ: \n- **PT dài, APTT bình thường:** Bệnh gan, uống kháng Vitamin K.\n- **PT bình thường, APTT dài:** Hemophilia, truyền Heparin, Hội chứng kháng Phospholipid.\n- **Cả PT và APTT cùng dài:** Suy gan giai đoạn cuối, DIC, hoặc do lấy mẫu sai (thừa chất chống đông)."
  },
  {
    "name": "Định lượng Fibrinogen (Yếu tố I) [máu]",
    "group": "Đông máu",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "Fibrinogen là yếu tố số I, yếu tố cuối cùng và quan trọng nhất của toàn bộ \"thác đông máu\". Dưới tác động của Thrombin, Fibrinogen dạng hòa tan trong máu sẽ biến thành các sợi lưới Fibrin vững chắc quấn chặt lấy tiểu cầu để tạo thành cục máu đông vĩnh viễn.",
    "physiology": "📌 **Đặc tính kép:** Fibrinogen được tổng hợp tại gan. Ngoài vai trò đông máu, Fibrinogen còn là một **Protein phản ứng pha cấp (Acute-phase reactant)**. Nghĩa là nồng độ của nó sẽ tự động tăng vọt khi cơ thể bị viêm nhiễm, chấn thương, hệt như CRP hay Máu lắng (ESR).",
    "indication": "🎯 **Đông máu:** Khảo sát sự thiếu hụt Fibrinogen trong các trường hợp băng huyết sau sinh, hoặc Hội chứng DIC.\n🎯 **Viêm & Tim mạch:** Cùng với CRP, đánh giá mức độ hội chứng viêm và tiên lượng nguy cơ hình thành huyết khối mạch vành.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết tương (Ống Citrate 3.2%). Lắc kỹ nhẹ nhàng 5-6 lần ngay sau khi lấy.",
    "testingMethods": "Máy đông máu tự động (Phương pháp Clauss).",
    "ref": "📊 **Bình thường:** 2.0 - 4.0 g/L (hoặc 200 - 400 mg/dL).\n*(Lưu ý: Nồng độ tự nhiên tăng dần theo tuổi thọ và ở người hút thuốc lá).*.",
    "alert": "⚠️ Trong các ca sản khoa (nhau bong non, thai lưu, băng huyết), nếu xét nghiệm Fibrinogen **< 1.0 g/L**, bệnh nhân đang rơi vào tình trạng chảy máu tiêu thụ kiệt quệ (DIC). Bác sĩ phải chỉ định truyền Tủa lạnh (Cryoprecipitate) hoặc Fibrinogen cô đặc ngay lập tức để cứu sống người mẹ.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Fibrinogen (Hội chứng Viêm / Nguy cơ Huyết khối):**\n  🔴 **Viêm nhiễm & Tổn thương:**\n    ▫️ Viêm phổi, nhiễm trùng huyết cấp tính, viêm khớp dạng thấp.\n    ▫️ Sau phẫu thuật lớn, chấn thương, bỏng.\n  🔴 **Sinh lý & Yếu tố nguy cơ:**\n    ▫️ Phụ nữ có thai (Tăng sinh lý để dự phòng chảy máu khi sinh).\n    ▫️ Béo phì, đái tháo đường, hút thuốc lá kéo dài đe dọa tắc mạch máu.",
      "decrease": "🔹 **Giảm Fibrinogen (Nguy cơ Chảy máu không đông):**\n  🔴 **Suy giảm sản xuất:** Suy gan cấp/mạn tính nặng.\n  🔴 **Tiêu thụ ồ ạt:** \n    ▫️ Hội chứng đông máu nội mạch rải rác (DIC) (Fibrinogen bị xài hết để tạo cục máu đông rải rác khắp cơ thể, khiến máu ngoại vi loãng ra như nước).\n    ▫️ Đang điều trị bằng thuốc tiêu sợi huyết (Streptokinase, tPA) trong nhồi máu não."
    },
    "interferingFactors": "❌ Lấy máu dính Heparin từ ống truyền dịch sẽ ức chế tác dụng của thuốc thử Thrombin, khiến máy báo Fibrinogen bị giảm thấp giả tạo hoàn toàn.",
    "clinicalNote": "Theo các hướng dẫn quản lý Bệnh gan, ở bệnh nhân Xơ gan mất bù, việc giảm Fibrinogen dưới 1.5 g/L là một dấu hiệu tiên lượng sinh tồn rất xấu. Trước khi tiến hành các thủ thuật như chọc hút dịch ổ bụng hay nhổ răng trên nhóm bệnh nhân này, nếu APTT/PT kéo dài do thiếu Fibrinogen, bắt buộc phải truyền dự phòng Huyết tương tươi đông lạnh."
  },
  {
    "name": "Định lượng D-Dimer [máu]",
    "group": "Đông máu",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "D-dimer là sản phẩm thoái giáng đặc hiệu của mạng lưới Fibrin. Trong cơ thể, quá trình tạo cục máu đông luôn đi kèm với quá trình tiêu sợi huyết (tan cục máu). Sự xuất hiện của D-dimer trong máu chứng tỏ đã có sự hình thành và ly giải cục máu đông trong lòng mạch.",
    "physiology": "📌 **Động học:** Xét nghiệm D-dimer thế hệ mới (siêu nhạy) có khả năng phát hiện những lượng rất nhỏ fibrin bị phân hủy. Nồng độ D-dimer tăng tỷ lệ thuận với cường độ kích hoạt quá mức của hệ thống đông máu và tiêu sợi huyết.",
    "indication": "🎯 **Hồi sức / Cấp cứu:** Chẩn đoán loại trừ Huyết khối tĩnh mạch sâu chi dưới (DVT) và Thuyên tắc động mạch phổi (PE).\n🎯 **Huyết học:** Tiêu chuẩn quan trọng để chẩn đoán Hội chứng đông máu nội mạch rải rác (DIC).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết tương (ống chống đông Citrate 3.2%).\n⏳ **Lưu ý:** Lấy đúng tỷ lệ 1 thể tích chống đông / 9 thể tích máu.",
    "testingMethods": "Đo độ đục miễn dịch siêu nhạy (Ultrasensitive immunoturbidimetric test) hoặc ELISA.",
    "ref": "📊 **Bình thường:** < 500 ng/mL FEU (hay < 0,5 mg/L).",
    "alert": "⚠️ D-dimer là xét nghiệm có **giá trị dự đoán âm tính cực cao (Negative Predictive Value)**. Nghĩa là nếu bệnh nhân có nguy cơ thấp trên lâm sàng (theo thang điểm Wells) mà D-dimer Âm tính, bác sĩ có thể tự tin loại trừ hoàn toàn Thuyên tắc phổi hoặc Huyết khối tĩnh mạch sâu mà không cần chụp CT cản quang.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng D-Dimer (Dương tính):**\n  🔴 **Bệnh lý Huyết khối:**\n    ▫️ Thuyên tắc động mạch phổi (PE), Huyết khối tĩnh mạch sâu chi dưới (DVT).\n    ▫️ Hội chứng DIC (Tăng rất cao, tiêu thụ kiệt quệ cục máu đông).\n  🔴 **Tăng không do huyết khối bệnh lý (Giảm độ đặc hiệu):**\n    ▫️ Giai đoạn sau phẫu thuật lớn, chấn thương, bỏng nặng.\n    ▫️ Bệnh lý ác tính (Ung thư), nhiễm trùng huyết cấp, xơ gan.\n    ▫️ Sinh lý: Phụ nữ mang thai những tháng cuối.",
      "decrease": "Không mang ý nghĩa bệnh lý (Kết quả bình thường là âm tính hoặc rất thấp)."
    },
    "interferingFactors": "❌ **Dương tính giả:** Nồng độ yếu tố dạng thấp (RF) tăng cao trong máu có thể làm nhiễu phản ứng kết tập latex.\n💊 **Giảm nồng độ:** Bệnh nhân đang dùng thuốc tiêu sợi huyết (Streptokinase, Urokinase) hoặc thuốc chống đông.",
    "clinicalNote": "Không nên dùng xét nghiệm D-dimer để \"khẳng định\" huyết khối ở người già, người nằm viện ICU lâu ngày hoặc ngay sau mổ, vì D-dimer của nhóm này vốn dĩ đã tăng cao do stress. Ở những đối tượng này, D-dimer chỉ có ý nghĩa khi kết quả là **âm tính** để loại trừ bệnh."
  },
  {
    "name": "Xét nghiệm Anti-Xa [máu]",
    "group": "Đông máu",
    "time": "120 phút",
    "isFeatured": true,
    "concept": "Xét nghiệm Anti-Xa đo lường hoạt tính ức chế yếu tố đông máu Xa. Đây là \"thước đo\" chuẩn xác và đặc hiệu nhất để giám sát nồng độ của thuốc chống đông **Heparin trọng lượng phân tử thấp (LMWH - Enoxaparin/Lovenox)** trong cơ thể.",
    "physiology": "📌 **Đặc tính:** Khác với Heparin tiêu chuẩn (UFH) được theo dõi dễ dàng bằng xét nghiệm APTT, các loại LMWH tác động chủ yếu bằng cách ức chế Yếu tố Xa và hầu như không làm kéo dài APTT. Do đó, bắt buộc phải đo Anti-Xa để theo dõi nồng độ thuốc.",
    "indication": "🎯 **Tim mạch / Sản khoa:** Theo dõi tối ưu hóa liều lượng LMWH ở các đối tượng đặc biệt (nơi dược động học của thuốc thay đổi khó lường): Bệnh nhân suy thận, béo phì phì đại, trẻ em, và phụ nữ mang thai có van tim cơ học.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết tương (ống Citrate 3.2%).\n⏳ **Thời điểm vàng:** Bắt buộc lấy máu đo nồng độ \"Đỉnh\" vào **chính xác 3 đến 4 giờ** SAU KHI tiêm LMWH dưới da.",
    "testingMethods": "Xét nghiệm so màu động học enzym (Chromogenic assay).",
    "ref": "📊 **Liều dự phòng huyết khối:** 0.2 - 0.5 IU/mL.\n📊 **Liều điều trị huyết khối:** 0.5 - 1.2 IU/mL (Tùy phác đồ tiêm 1 lần hay 2 lần/ngày).",
    "alert": "⚠️ Sai lệch thời điểm lấy mẫu (lấy máu quá sớm hoặc quá muộn so với đỉnh 4 giờ) là nguyên nhân phổ biến nhất gây sai kết quả, khiến bác sĩ điều chỉnh liều sai lầm gây nguy hiểm cho bệnh nhân.",
    "pathologicalMeaning": {
      "increase": "🔹 **Nồng độ Anti-Xa quá cao (Quá liều):**\n  🔴 Bệnh nhân đối mặt với nguy cơ xuất huyết ồ ạt do thuốc tích lũy (thường gặp ở người suy giảm chức năng thận nặng).",
      "decrease": "🔹 **Nồng độ Anti-Xa quá thấp (Không đủ liều):**\n  🔴 Nguy cơ thất bại điều trị, hình thành cục máu đông gây tắc mạch, huyết khối kẹt van tim dù đang tiêm thuốc (thường gặp ở phụ nữ có thai do tăng thanh thải, hoặc người béo phì do liều tính theo cân nặng chưa đủ)."
    },
    "interferingFactors": "❌ Việc lấy máu từ đường truyền tĩnh mạch đang cắm dây có dính Heparin sẽ làm kết quả Anti-Xa tăng vọt giả tạo.",
    "clinicalNote": "Theo các Hướng dẫn Tim mạch (AHA/ACC 2024), việc giám sát Anti-Xa không yêu cầu làm thường quy ở người bình thường dùng LMWH. Nhưng với thai phụ mang van tim cơ học đang tiêm Enoxaparin, đo Anti-Xa định kỳ là vũ khí sống còn để điều chỉnh liều, bảo vệ cả mẹ và thai nhi khỏi thảm họa tắc van tim."
  },
  {
    "name": "Định nhóm máu tại giường bệnh trước truyền máu",
    "group": "Truyền máu",
    "time": "Làm ngay (Tại giường)",
    "isFeatured": false,
    "concept": "Đây là bước kiểm tra an toàn cuối cùng và tối quan trọng do chính bác sĩ lâm sàng hoặc điều dưỡng thực hiện ngay tại giường bệnh nhân trước khi cắm dây truyền máu. Nhằm xác định lại một lần nữa sự tương hợp nhóm máu hệ ABO giữa túi máu chuẩn bị truyền và máu của người bệnh.",
    "physiology": "📌 **Nguyên tắc:** Dựa trên phản ứng ngưng kết kháng nguyên - kháng thể kinh điển. Phản ứng xảy ra rất nhanh ở nhiệt độ phòng.",
    "indication": "🎯 **An toàn truyền máu:** Bắt buộc thực hiện 100% trước bất kỳ ca truyền khối hồng cầu hay máu toàn phần nào, bất kể tính cấp cứu.",
    "specimenCollection": "💧 **Loại mẫu:** 1 giọt máu trích từ đầu ngón tay bệnh nhân và 1 giọt máu nhỏ từ đoạn dây (tube) của túi máu.",
    "testingMethods": "Ngưng kết hồng cầu trên thẻ huyết thanh mẫu (Card) bằng mắt thường tại giường.",
    "ref": "📊 Giọt máu của túi truyền và giọt máu của bệnh nhân phải cho kết quả ngưng kết tương hợp tuyệt đối theo sơ đồ truyền máu ABO.",
    "alert": "⚠️ Nếu kết quả ngưng kết trên thẻ của bệnh nhân và túi máu không giống nhau hoặc không tuân theo quy tắc truyền máu nguyên tắc, tuyệt đối **KHÔNG ĐƯỢC TRUYỀN** và phải trả ngay túi máu về Ngân hàng máu.",
    "pathologicalMeaning": {
      "increase": "Không áp dụng thuật ngữ Tăng/Giảm.",
      "decrease": "Không áp dụng thuật ngữ Tăng/Giảm."
    },
    "interferingFactors": "❌ Lỗi do con người: Đọc sai kết quả ở điều kiện ánh sáng kém bệnh phòng, hoặc dùng nhầm que khuấy chéo giữa các giọt máu gây ngưng kết giả.",
    "clinicalNote": "Sự nhầm lẫn nhóm máu hệ ABO là tai biến y khoa thảm khốc nhất (gây tán huyết cấp, sốc, suy thận và tử vong lập tức). Định nhóm máu tại giường là chốt chặn phòng thủ cuối cùng để bảo vệ mạng sống bệnh nhân nếu có bất kỳ sai sót nhầm lẫn nhãn mác nào ở khâu phát máu."
  },
  {
    "name": "Định nhóm máu hệ ABO, Rh(D) bằng máy tự động",
    "group": "Truyền máu",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "Là xét nghiệm tiêu chuẩn tại khoa Huyết học - Truyền máu để xác định chính xác nhóm máu hệ ABO và hệ Rhesus (RhD) của bệnh nhân bằng cả 2 phương pháp đối chiếu: Phương pháp huyết thanh mẫu (tìm kháng nguyên trên hồng cầu) và Phương pháp hồng cầu mẫu (tìm kháng thể trong huyết tương).",
    "physiology": "📌 **Đặc tính:** Kháng nguyên nhóm máu là đặc điểm di truyền không đổi. Bất kỳ sự không tương hợp nào giữa hai phương pháp thử nghiệm (phương pháp xuôi và phương pháp ngược) đều báo hiệu sự tồn tại của các dưới nhóm máu phụ (như A2) hoặc các kháng thể tự miễn làm nhiễu.",
    "indication": "🎯 **Truyền máu:** Sàng lọc và định nhóm máu gốc cho người hiến máu, người nhận máu, hoặc bệnh nhân chuẩn bị phẫu thuật.\n🎯 **Sản khoa:** Sàng lọc phụ nữ mang thai để dự phòng bất đồng nhóm máu Rh giữa mẹ và thai nhi.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (Ống EDTA) không chống đông và Huyết thanh.\n⚠️ **An toàn:** Ống máu phải được dán mã vạch định danh cực kỳ chính xác tại thời điểm lấy máu.",
    "testingMethods": "Kỹ thuật Gel Card (Cột gel vi lượng) hoặc tự động hoàn toàn bằng máy ly tâm quang học.",
    "ref": "📊 **Hệ ABO:** Phân loại thành nhóm máu O, A, B, AB.\n📊 **Hệ Rh:** Rh(D) Dương tính (+) hoặc Âm tính (-).",
    "alert": "⚠️ Ở người Việt Nam, tỷ lệ người mang nhóm máu Rh(D) âm tính rất hiếm (khoảng 0.1%). Bệnh nhân mang nhóm máu Rh(-) bắt buộc chỉ được truyền máu Rh(-) để tránh cơ thể sinh kháng thể anti-D miễn dịch gây phản ứng chết người ở những lần truyền sau.",
    "pathologicalMeaning": {
      "increase": "Không áp dụng thuật ngữ Tăng/Giảm.",
      "decrease": "Không áp dụng thuật ngữ Tăng/Giảm."
    },
    "interferingFactors": "❌ **Âm tính giả:** Ở trẻ sơ sinh hoặc người già, người suy giảm miễn dịch nghiêm trọng, nồng độ kháng thể tự nhiên (Anti-A, Anti-B) rất thấp, làm phản ứng hồng cầu mẫu khó đọc.\n❌ **Dương tính giả:** Bệnh Đa u tủy xương (Myeloma) làm tăng protein máu, gây hiện tượng chuỗi tiền xu (Rouleaux) khiến máy đọc nhầm thành ngưng kết.",
    "clinicalNote": "Trong Sản khoa, nếu thai phụ có nhóm máu Rh(-), bác sĩ phải theo dõi đặc biệt và có chỉ định tiêm dự phòng Anti-D (IgG) vào tuần 28 của thai kỳ và ngay sau khi sinh nếu em bé sinh ra là Rh(+), nhằm xóa trí nhớ miễn dịch của mẹ."
  },
  {
    "name": "Định nhóm máu hệ ABO bằng giấy định nhóm máu",
    "group": "Truyền máu",
    "time": "Làm ngay / 15 phút",
    "isFeatured": false,
    "concept": "Là phương pháp thủ công định nhóm máu hệ ABO dựa trên nguyên lý ngưng kết hồng cầu, được thực hiện trên giấy định nhóm máu hoặc phiến kính.",
    "physiology": "📌 **Cơ chế:** Kháng nguyên trên bề mặt hồng cầu (A, B) sẽ phản ứng với kháng thể tương ứng (Anti-A, Anti-B) có sẵn trên giấy thử/huyết thanh mẫu, tạo ra hiện tượng ngưng kết có thể nhìn thấy bằng mắt thường.",
    "indication": "🎯 **Sàng lọc & Cấp cứu:** Xác định nhanh nhóm máu hệ ABO cho bệnh nhân cấp cứu, phụ nữ có thai, người hiến máu hoặc trước khi truyền máu tại các cơ sở y tế chưa có hệ thống máy tự động.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (lấy từ tĩnh mạch hoặc trích mao mạch đầu ngón tay).",
    "testingMethods": "Ngưng kết hồng cầu thủ công (Phương pháp huyết thanh mẫu trên phiến kính/giấy).",
    "ref": "📊 **Bình thường:** Xác định thuộc một trong 4 nhóm máu: A, B, AB, hoặc O.",
    "alert": "⚠️ Đây chỉ là phương pháp định nhóm máu hệ ABO cơ bản (phương pháp xuôi). Để truyền máu an toàn tuyệt đối, bắt buộc phòng xét nghiệm phải tiến hành định nhóm máu bằng cả 2 phương pháp (xuôi và ngược) trên máy tự động hoặc ống nghiệm.",
    "pathologicalMeaning": {
      "increase": "Không áp dụng thuật ngữ Tăng/Giảm.",
      "decrease": "Không áp dụng thuật ngữ Tăng/Giảm."
    },
    "interferingFactors": "❌ **Lỗi kỹ thuật:** Đọc kết quả quá muộn khi máu đã khô, hoặc lượng kháng thể trên giấy bị hỏng do bảo quản kém gây kết quả âm tính giả / dương tính giả.",
    "clinicalNote": "Trong truyền máu cấp cứu, dù đã có kết quả định nhóm máu trên giấy, điều dưỡng vẫn bắt buộc phải làm lại test định nhóm máu tại giường một lần nữa trước khi cắm kim truyền túi máu để tránh nhầm lẫn bệnh nhân."
  },
  {
    "name": "Phản ứng hòa hợp trong môi trường nước muối",
    "group": "Truyền máu",
    "time": "30 phút",
    "isFeatured": true,
    "concept": "Thử nghiệm trộn huyết thanh của người nhận với hồng cầu của túi máu hiến trong môi trường nước muối sinh lý ở nhiệt độ phòng (khoảng $22^0C$).",
    "physiology": "📌 **Đặc tính:** Môi trường nước muối sinh lý là môi trường tối ưu để phát hiện các kháng thể tự nhiên (chủ yếu là IgM có kích thước lớn) thuộc hệ ABO, có khả năng gây ngưng kết ngay ở nhiệt độ phòng mà không cần chất xúc tác.",
    "indication": "🎯 **An toàn truyền máu:** Bước đầu tiên trong quy trình phản ứng chéo (Cross-matching) bắt buộc trước khi phát máu, nhằm phát hiện sự bất tương hợp nhóm máu hệ ABO (hoặc các kháng thể tự nhiên khác) giữa người cho và người nhận.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh bệnh nhân (nhận) và hồng cầu (từ đoạn dây của túi máu hiến).",
    "testingMethods": "Ngưng kết hồng cầu trong ống nghiệm (hoặc Gel card) ở môi trường nước muối nhiệt độ phòng.",
    "ref": "📊 **Bình thường:** Âm tính (-) (Hoàn toàn hòa hợp, không có ngưng kết).",
    "alert": "⚠️ Môi trường nước muối CHỈ phát hiện được các kháng thể IgM. Nó sẽ bỏ sót hoàn toàn các kháng thể miễn dịch (IgG) kích thước rất nhỏ. Do đó túi máu hòa hợp ở bước này vẫn chưa được truyền mà phải làm tiếp phản ứng trong môi trường kháng Globulin người.",
    "pathologicalMeaning": {
      "increase": "🔹 **Phản ứng Dương tính (+):** Bất tương hợp hệ ABO (do chọn nhầm túi máu) hoặc do tồn tại các tự kháng thể / dị kháng thể tự nhiên hệ Lewis, M, N, P1.",
      "decrease": "Âm tính là hòa hợp."
    },
    "interferingFactors": "❌ Tình trạng tăng protein máu nặng (như Đa u tủy xương) có thể gây hiện tượng hồng cầu chuỗi tiền xu (Rouleaux) làm người đọc nhầm là ngưng kết dương tính.",
    "clinicalNote": "Một khi phản ứng hòa hợp trong nước muối Dương tính (+), túi máu này bị loại bỏ ngay lập tức và tuyệt đối không được truyền."
  },
  {
    "name": "Phản ứng hòa hợp có sử dụng kháng Globulin người",
    "group": "Truyền máu",
    "time": "45 - 60 phút",
    "isFeatured": true,
    "concept": "Là bước 2 của quy trình phản ứng chéo (sau khi ủ nước muối), thực hiện ở $37^0C$ và thêm thuốc thử kháng Globulin người (thuốc thử Coombs) để phát hiện các kháng thể miễn dịch IgG.",
    "physiology": "📌 **Đặc tính:** Các kháng thể miễn dịch (IgG) như hệ Rh, Kell, Kidd có kích thước rất nhỏ, chúng có thể gắn lên hồng cầu người hiến ở $37^0C$ nhưng không đủ khoảng cách để kéo các hồng cầu lại với nhau tạo thành cục ngưng kết. Thuốc thử Coombs (chứa kháng kháng thể) đóng vai trò như chiếc cầu nối kết dính các IgG này lại, làm xuất hiện ngưng kết rõ ràng.",
    "indication": "🎯 **An toàn truyền máu:** Bước thử nghiệm bắt buộc để phát hiện các kháng thể bất thường sinh ra do bệnh nhân đã bị mẫn cảm từ tiền sử truyền máu nhiều lần hoặc phụ nữ mang thai nhiều lần.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh bệnh nhân, hồng cầu từ túi máu, và thuốc thử Anti-Human Globulin (AHG).",
    "testingMethods": "Ngưng kết ống nghiệm sau ủ $37^0C$ và nhỏ thuốc thử Coombs.",
    "ref": "📊 **Bình thường:** Âm tính (-) (Hoàn toàn hòa hợp an toàn).",
    "alert": "⚠️ Một túi máu có thể vượt qua an toàn phản ứng nước muối nhưng lại sinh ngưng kết dương tính ở phản ứng kháng Globulin. Bắt buộc phải thực hiện đủ cả hai môi trường mới được phép kết luận túi máu an toàn.",
    "pathologicalMeaning": {
      "increase": "🔹 **Phản ứng Dương tính (+):** Bệnh nhân đã bị mẫn cảm và sinh kháng thể miễn dịch chống lại các kháng nguyên phụ có trên hồng cầu của túi máu (bất tương hợp hệ Rh, Kell, Kidd...).",
      "decrease": "Âm tính là hòa hợp."
    },
    "interferingFactors": "❌ Rửa hồng cầu trong ống nghiệm không đủ sạch (còn sót protein tự do trong huyết thanh) sẽ làm trung hòa mất thuốc thử Coombs, gây kết quả Âm tính giả cực kỳ nguy hiểm.",
    "clinicalNote": "Ở những bệnh nhân Thalassemia phải truyền máu định kỳ, phản ứng này rất hay dương tính do cơ thể họ đã sinh ra một 'rừng' kháng thể miễn dịch. Bác sĩ huyết học phải vất vả sàng lọc qua Panel hồng cầu để chọn ra được túi máu dung nạp tốt nhất."
  },
  {
    "name": "Nghiệm pháp Coombs trực tiếp (Direct Antiglobulin Test - DAT)",
    "group": "Truyền máu",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "Test Coombs trực tiếp được sử dụng để phát hiện các kháng thể miễn dịch (chủ yếu là IgG) hoặc thành phần bổ thể (C3d) đã **gắn sẵn trên bề mặt hồng cầu** của bệnh nhân ngay trong cơ thể sống (in vivo). Các kháng thể này như một \"bản án\" đánh dấu hồng cầu để đại thực bào tại lách tiêu diệt.",
    "physiology": "📌 **Cơ chế:** Bình thường hồng cầu không bị gắn kháng thể. Trong các bệnh lý tự miễn hoặc bị mẫn cảm, hệ thống miễn dịch nhầm lẫn sinh ra tự kháng thể bám chặt vào màng hồng cầu, gây ra hiện tượng vỡ hồng cầu (tán huyết) hàng loạt.",
    "indication": "🎯 **Huyết học:** Chẩn đoán Thiếu máu tan máu tự miễn (AIHA), tan máu do thuốc.\n🎯 **Sản khoa / Nhi khoa:** Chẩn đoán tình trạng tan máu ở trẻ sơ sinh do bất đồng nhóm máu mẹ - con (Erythroblastosis fetalis).\n🎯 **Cấp cứu truyền máu:** Đánh giá tai biến tán huyết cấp xảy ra ngay sau khi truyền máu.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần (Ống EDTA).\n⚠️ **Lưu ý:** Lấy máu ở ven không truyền dịch để tránh hồng cầu bị gắn các protein không đặc hiệu.",
    "testingMethods": "Rửa sạch hồng cầu bệnh nhân, sau đó nhỏ Huyết thanh kháng Globulin người (Coombs reagent) để tạo ngưng kết.",
    "ref": "📊 **Bình thường:** Âm tính (-).",
    "alert": "⚠️ Ở một trẻ sơ sinh có biểu hiện vàng da sậm rất nhanh, nếu test Coombs trực tiếp Dương tính, đây là tình trạng cấp cứu cảnh báo nguy cơ vàng da nhân não gan do tan máu ồ ạt, bác sĩ cần cân nhắc chỉ định thay máu sớm.",
    "pathologicalMeaning": {
      "increase": "🔹 **Test Coombs Trực tiếp (+) (Đang có tán huyết):**\n  🔴 **Tự miễn:** Thiếu máu tan máu tự miễn (AIHA), Bệnh Lupus ban đỏ hệ thống (SLE), U lympho Hodgkin, Hội chứng Evans.\n  🔴 **Đồng miễn dịch:** Bất đồng nhóm máu mẹ - con (Rh hoặc ABO).\n  🔴 **Tan máu do thuốc:** Dị ứng thuốc sinh kháng thể (Penicillin, Cephalosporin liều cao, Methyldopa).",
      "decrease": "Âm tính (-)."
    },
    "interferingFactors": "❌ Lấy máu từ đường truyền tĩnh mạch đang truyền Dextran hoặc thuốc cản quang có thể gây hiện tượng ngưng kết giả.",
    "clinicalNote": "Ở một bệnh nhân sau khi được truyền khối hồng cầu xuất hiện sốt, rét run và nước tiểu chuyển màu đỏ sẫm (đái huyết sắc tố), xét nghiệm Coombs trực tiếp chuyển từ Âm tính sang Dương tính là bằng chứng pháp lý và y khoa khẳng định bệnh nhân đang bị tán huyết do tai biến truyền máu."
  },
  {
    "name": "Nghiệm pháp Coombs gián tiếp (Indirect Antiglobulin Test - IAT)",
    "group": "Truyền máu",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "Test Coombs gián tiếp nhằm phát hiện các kháng thể miễn dịch bất thường đang **lưu hành tự do trong huyết thanh** của bệnh nhân. Các kháng thể này như \"quân mai phục\" sẵn sàng tấn công phá hủy bất kỳ tế bào hồng cầu lạ nào mang kháng nguyên tương ứng được truyền vào.",
    "physiology": "📌 **Động học:** Người khỏe mạnh bình thường không có kháng thể miễn dịch bất thường. Chúng chỉ xuất hiện khi cơ thể từng tiếp xúc với máu ngoại lai (qua việc được truyền máu nhiều lần hoặc phụ nữ mang thai nhiều lần) khiến hệ miễn dịch ghi nhớ và sản sinh (Alloimmunization).",
    "indication": "🎯 **Sàng lọc an toàn trước truyền máu:** Chỉ định bắt buộc ở bệnh nhân có tiền sử truyền máu nhiều lần (Thalassemia, suy tủy).\n🎯 **Sản khoa:** Sàng lọc và theo dõi hiệu giá kháng thể anti-D ở phụ nữ mang thai có nhóm máu Rh(D) âm tính để dự phòng bệnh lý tán huyết cho thai nhi.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh của bệnh nhân.",
    "testingMethods": "Ủ huyết thanh bệnh nhân với Panel hồng cầu mẫu (đã biết trước các bộ kháng nguyên) ở $37^0C$, sau đó dùng thuốc thử Coombs để phát hiện ngưng kết in vitro.",
    "ref": "📊 **Bình thường:** Âm tính (-) (Không tồn tại kháng thể bất thường).",
    "alert": "⚠️ Nếu một phụ nữ mang nhóm máu Rh(-) đang mang thai lần thứ hai có Test Coombs gián tiếp chuyển sang Dương tính mạnh, đây là hồi chuông báo động đỏ. Báo hiệu cơ thể mẹ đã sản sinh lượng lớn kháng thể anti-D, thai nhi (nếu là Rh+) đang đối mặt với nguy cơ suy tim, phù thai và tử vong trong tử cung.",
    "pathologicalMeaning": {
      "increase": "🔹 **Test Coombs Gián tiếp (+) (Tồn tại kháng thể miễn dịch):**\n  🔴 Bệnh nhân đã bị mẫn cảm, sinh kháng thể bất thường do tiền sử truyền máu lặp lại (hình thành kháng thể kháng các hệ nhóm máu phụ như Rh, Kell, Duffy, Kidd...).\n  🔴 Phụ nữ mang thai Rh(-) đã mẫn cảm và sinh kháng thể chống lại máu con Rh(+).",
      "decrease": "Âm tính (-)."
    },
    "interferingFactors": "❌ Thuốc thử Coombs hết hạn, hoặc kỹ thuật rửa Panel hồng cầu mẫu không sạch hoàn toàn sẽ làm trung hòa thuốc thử Coombs, gây kết quả âm tính giả cực kỳ nguy hiểm.",
    "clinicalNote": "Khi test Coombs gián tiếp (+) ở một bệnh nhân đang cần mổ cấp cứu, việc tìm ra một túi máu hòa hợp sẽ cực kỳ khó khăn, tốn kém và mất nhiều thời gian. Bác sĩ lâm sàng bắt buộc phải dự trù máu từ rất sớm và yêu cầu Ngân hàng máu tiến hành định danh kháng thể để chọn túi máu đặc chế cho bệnh nhân."
  },
  {
    "name": "Đơn bào đường ruột soi tươi (Amip / Giardia lamblia)",
    "group": "Ký sinh trùng",
    "time": "Làm ngay (Soi ấm)",
    "isFeatured": true,
    "concept": "Xét nghiệm cặn phân trực tiếp dưới kính hiển vi quang học để tìm các hình thái sinh học (thể hoạt động - trophozoite hoặc thể bào nang - cyst) của các loại ký sinh trùng đơn bào chuyên gây bệnh tại niêm mạc ruột non và đại tràng.",
    "physiology": "📌 **Đặc tính bệnh sinh:** *Entamoeba histolytica* (Amip lỵ) phá hủy niêm mạc đại tràng bằng men tiêu protid, gây ra các ổ loét hình tháp, dẫn đến tiêu chảy nhầy máu. *Giardia lamblia* bám sát trên bề mặt niêm mạc ruột non, cản trở cơ học gây hội chứng kém hấp thu và tiêu chảy phân mỡ.",
    "indication": "🎯 **Tiêu hóa / Truyền nhiễm:** Chẩn đoán bệnh nhân nhập viện với hội chứng lỵ (đau quặn bụng dọc khung đại tràng, mót rặn, đi ngoài phân nhầy máu nhiều lần) hoặc tiêu chảy kéo dài phân sủi bọt, hôi khắm.",
    "specimenCollection": "💩 **Loại mẫu:** Phân tươi, đặc biệt dùng que cấy lấy chỗ phân có chứa nhầy và máu.\n⏳ **Thời gian vàng:** Mẫu phân nghi ngờ Amip **bắt buộc phải được gửi tới Labo và soi ngay trong vòng 30 phút** khi phân còn ấm. Để nguội đơn bào sẽ chết, vo tròn lại, không di động và không thể nhận diện được thể hoạt động.",
    "testingMethods": "Soi tươi bằng giọt nước muối sinh lý (tìm thể di động) và nhuộm Lugol (nhuộm màu để quan sát rõ nhân của thể bào nang).",
    "ref": "📊 **Bình thường:** Âm tính (Không tìm thấy đơn bào).",
    "alert": "⚠️ Sự hiện diện của hình ảnh **\"Thể hoạt động Amip đang ăn hồng cầu\"** (E. histolytica trophozoite) dưới kính hiển vi là tiêu chuẩn vàng và duy nhất để khẳng định chắc chắn 100% bệnh nhân đang bị Lỵ Amip cấp tính.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tìm thấy Đơn bào (Dương tính):**\n  🔴 **Lỵ Amip (Entamoeba histolytica):** Viêm loét đại tràng do amip (Trên tiêu bản phân thường đi kèm rất nhiều hồng cầu bị phá hủy và đại thực bào).\n  🔴 **Bệnh Giardiasis (Giardia lamblia):** Viêm ruột non, tiêu chảy kéo dài ở trẻ em tập thể hoặc người lớn suy giảm miễn dịch.\n  🔴 **Các đơn bào cơ hội:** Cryptosporidium (thường gây tiêu chảy dữ dội không cầm được ở bệnh nhân nhiễm HIV/AIDS).",
      "decrease": "Âm tính (-)."
    },
    "interferingFactors": "❌ **Âm tính giả:** Bệnh nhân đã tự uống thuốc điều trị tiêu chảy nhóm Bismuth, Kaolin hoặc thụt tháo bằng Barium trước đó sẽ tạo các tinh thể che lấp, hoặc thuốc kháng sinh vô tình tiêu diệt đơn bào trong phân trước khi lấy mẫu.",
    "clinicalNote": "Việc cấy phân tìm vi khuẩn (như Shigella, Salmonella) thường phải đợi từ 2-3 ngày mới có kết quả, nhưng soi phân tươi tìm Amip chỉ mất 15 phút. Nếu soi thấy Amip ăn hồng cầu, bác sĩ lâm sàng có thể kê ngay đơn thuốc đặc trị (như Metronidazol) để cắt đứt hội chứng lỵ cho bệnh nhân ngay lập tức, tránh nhầm lẫn sang lỵ trực khuẩn."
  },
  {
    "name": "Trứng giun, sán soi tươi [phân]",
    "group": "Ký sinh trùng",
    "time": "45 phút",
    "isFeatured": true,
    "concept": "Xét nghiệm quan sát cặn phân qua kính hiển vi nhằm phát hiện và định danh hình thái cấu trúc vỏ của trứng các loại giun tròn (giun đũa, giun móc, giun tóc, giun kim) và sán (sán lá gan, sán dây) ký sinh trong đường tiêu hóa hay đường mật.",
    "physiology": "📌 **Chu kỳ sinh học:** Các giun sán trưởng thành ký sinh trong cơ thể người sẽ đẻ trứng. Trứng đi theo nhu động ruột và được đào thải ra môi trường qua phân. Mỗi loại giun sán có cấu trúc vỏ, hình dáng (hình bầu dục, hình quả cau có nắp) và kích thước đặc trưng không thể nhầm lẫn.",
    "indication": "🎯 **Khám sức khỏe / Truyền nhiễm:** Sàng lọc bệnh nhân có dấu hiệu suy dinh dưỡng chậm lớn, thiếu máu nhược sắc không rõ nguyên nhân (nghi nhiễm giun móc), đau bụng mạn tính, rối loạn tiêu hóa, hoặc xét nghiệm công thức máu tình cờ thấy tăng vọt Bạch cầu ái toan (Eosinophil).",
    "specimenCollection": "💩 **Loại mẫu:** Phân thu thập ngẫu nhiên vào lọ sạch vô khuẩn.\n⚠️ **Lưu ý đặc biệt:** Đối với Giun kim (Enterobius vermicularis), không dùng mẫu phân. Bắt buộc phải lấy băng keo trong (Scotch tape) dán áp sát vùng nếp nhăn rìa hậu môn vào **sáng sớm lúc trẻ mới thức dậy chưa đi vệ sinh** để tìm trứng.",
    "testingMethods": "Soi tươi cặn phân trực tiếp hoặc sử dụng các phương pháp phong phú hóa (Kato-Katz, tập trung nổi Willis) để tập trung trứng, giúp tăng độ nhạy.",
    "ref": "📊 **Bình thường:** Âm tính (Không thấy trứng giun sán).",
    "alert": "⚠️ Chỉ một xét nghiệm soi phân âm tính chưa đủ bằng chứng để loại trừ hoàn toàn việc nhiễm giun sán (do giun đực ký sinh, giun chưa đến kỳ đẻ trứng, hoặc giun lạc chỗ vào tạng). Nếu nghi ngờ cao lâm sàng, bác sĩ phải chuyển hướng sang xét nghiệm **Huyết thanh học (ELISA)** tìm kháng thể đặc hiệu trong máu.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tìm thấy Trứng (Đang nhiễm Ký sinh trùng):**\n  🔴 **Giun tròn:** Trứng Giun đũa (Ascaris lumbricoides), Giun tóc (Trichuris trichiura), Giun móc (Ancylostoma duodenale - thủ phạm hút máu gây thiếu máu rỉ rả), Giun kim.\n  🔴 **Sán:** Trứng Sán lá gan lớn/nhỏ (Fasciola/Clonorchis), Trứng Sán dây lợn/bò (Taenia solium/saginata).",
      "decrease": "Âm tính (-)."
    },
    "interferingFactors": "❌ Bệnh nhân sử dụng thuốc cản quang Barium, dầu khoáng, hoặc các loại thuốc nhuận tràng vô cơ trong vòng 1 tuần trước khi lấy phân sẽ tạo thành các giọt mỡ hoặc tinh thể rác che lấp hoàn toàn trứng giun sán trên tiêu bản soi.",
    "clinicalNote": "Trong các chiến dịch khám sức khỏe trường học hoặc cộng đồng, kỹ thuật viên soi phân bằng phương pháp Kato-Katz có thể đếm và ước tính được \"số lượng trứng trên một gam phân (EPG)\". Chỉ số EPG giúp bác sĩ phân loại mức độ nhiễm giun của cá thể (nhẹ, vừa, hay nặng) để thiết lập chiến lược tẩy giun diện rộng hợp lý."
  },
  {
    "name": "Hồng cầu, Bạch cầu trong phân soi tươi",
    "group": "Ký sinh trùng",
    "time": "Làm ngay",
    "isFeatured": true,
    "concept": "Đây là một xét nghiệm vô cùng rẻ tiền nhưng lại là \"kim chỉ nam\" cực kỳ sắc bén trong thực hành hồi sức tiêu hóa, nhi khoa và truyền nhiễm. Thông qua việc quan sát cặn phân dưới kính hiển vi, việc đếm số lượng hồng cầu và bạch cầu đa nhân sẽ giúp định hướng bản chất của phản ứng viêm đang diễn ra tại niêm mạc ruột.",
    "physiology": "📌 **Đặc tính viêm ruột:** Khi vi khuẩn có đặc tính xâm nhập sâu (như Shigella, Salmonella) phá hủy lớp niêm mạc ruột, cơ thể sẽ phản ứng bằng cách thu hút ồ ạt Bạch cầu đa nhân trung tính tới để bao vây thực bào vi khuẩn, đồng thời làm mao mạch rỉ máu (Hồng cầu) vào trong phân.",
    "indication": "🎯 **Cấp cứu Tiêu hóa:** Cốt lõi để phân biệt nhanh chóng giữa Tiêu chảy do vi khuẩn xâm lấn (Cần dùng kháng sinh ngay) với Tiêu chảy do ngoại độc tố vi khuẩn hoặc do virus (Tuyệt đối không cần dùng kháng sinh).",
    "specimenCollection": "💩 **Loại mẫu:** Phân tươi, ưu tiên lấy phần phân lỏng có lẫn nhầy và tia máu.",
    "testingMethods": "Soi tươi bằng nước muối sinh lý hoặc nhuộm xanh methylene/nhuộm Gram để làm nổi rõ nhân của tế bào bạch cầu.",
    "ref": "📊 **Bình thường:** Không có Hồng cầu; Không có hoặc rải rác rất ít Bạch cầu (0 - 2 tế bào/vi trường).",
    "alert": "⚠️ Sự hiện diện ồ ạt của Hồng cầu và Bạch cầu đa nhân thoái hóa (mủ) trong phân của một em bé bị tiêu chảy cấp là chỉ định y khoa chắc chắn cho thấy màng ruột đang bị tàn phá, bắt buộc phải sử dụng Kháng sinh diệt khuẩn, thay vì chỉ bù nước Oresol thông thường.",
    "pathologicalMeaning": {
      "increase": "🔹 **Phân có Hồng cầu & Bạch cầu (+++) (Viêm xuất tiết mạnh):**\n  🔴 **Nhiễm trùng xâm lấn:** Lỵ trực khuẩn (Shigella), Salmonella, vi khuẩn Campylobacter, E.coli xâm nhập (EIEC).\n  🔴 **Nhiễm Ký sinh trùng:** Lỵ Amip (Tuy nhiên Lỵ trực khuẩn thường có lượng bạch cầu ồ ạt hơn Lỵ Amip rất nhiều).\n  🔴 **Bệnh lý Tự miễn:** Đợt cấp của Bệnh viêm ruột (IBD) như Viêm đại tràng xuất huyết, Bệnh viêm đoạn ruột Crohn.",
      "decrease": "🔹 **Phân toàn nước, KHÔNG CÓ Hồng cầu / Bạch cầu (Tiêu chảy xuất tiết):**\n    ▫️ Viêm ruột do Virus (Rotavirus, Norovirus).\n    ▫️ Ngộ độc thức ăn do ngoại độc tố sinh ra từ trước (Tụ cầu vàng, Vi khuẩn Tả Vibrio cholerae, ETEC)."
    },
    "interferingFactors": "❌ Lấy mẫu phân để lẫn quá nhiều nước tiểu vào bô sẽ làm ly giải (vỡ) các tế bào hồng cầu và bạch cầu mong manh, gây ra kết quả âm tính giả khiến bác sĩ biện luận sai.",
    "clinicalNote": "Theo phác đồ điều trị tiêu chảy nhi khoa của WHO, một bệnh án có kết quả soi \"Phân toàn nước, không có hồng/bạch cầu\" thường không có chỉ định dùng kháng sinh, chỉ cần bù dịch Oresol và Kẽm. Ngược lại, nếu kết quả trả về có nhiều Hồng cầu/Bạch cầu, bác sĩ phải lấy mẫu gửi đi Cấy phân làm kháng sinh đồ và cho khởi trị kháng sinh kinh nghiệm đường ruột ngay lập tức."
  },
  {
    "name": "Tìm ký sinh trùng sốt rét trong máu (phương pháp thủ công)",
    "group": "Ký sinh trùng",
    "time": "Cấp cứu / 45 phút",
    "isFeatured": true,
    "concept": "Xét nghiệm nhuộm Giemsa trên lam máu (phết giọt đặc và giọt đàn) để quan sát trực tiếp dưới kính hiển vi nhằm tìm kiếm và định danh các hình thái của ký sinh trùng Sốt rét (Plasmodium) đang ký sinh bên trong hồng cầu.",
    "physiology": "📌 **Cơ chế:** Muỗi Anopheles truyền thoa trùng vào máu người. Sau khi qua gan, KST xâm nhập vào hồng cầu, sinh sôi và làm vỡ hồng cầu hàng loạt, giải phóng độc tố gây ra cơn sốt rét run lập cập kinh điển.",
    "indication": "🎯 **Truyền nhiễm:** Chẩn đoán xác định bệnh Sốt rét ở bệnh nhân có sốt kèm yếu tố dịch tễ (vừa đi rừng, làm rẫy, hoặc sống ở vùng sốt rét lưu hành như Tây Nguyên, Bình Phước).",
    "specimenCollection": "💉 **Loại mẫu:** Máu mao mạch (trích đầu ngón tay) hoặc máu tĩnh mạch (EDTA).\n⏳ **Thời điểm vàng:** Tốt nhất là lấy máu **ngay lúc bệnh nhân đang lên cơn sốt** (lúc hồng cầu vỡ giải phóng KST ra máu nhiều nhất).",
    "testingMethods": "Nhuộm Giemsa (Giọt đặc giúp tập trung tìm KST, giọt đàn giúp định danh loài).",
    "ref": "📊 **Bình thường:** Âm tính (Không tìm thấy ký sinh trùng sốt rét).",
    "alert": "⚠️ Nếu kết quả trả về là **Plasmodium falciparum (+) mật độ cao**, bệnh nhân đang đối mặt với nguy cơ Sốt rét ác tính (thể não, đái huyết sắc tố, suy đa tạng) có tỷ lệ tử vong rất cao, cần thuốc đặc trị ACT đường tĩnh mạch ngay lập tức.",
    "pathologicalMeaning": {
      "increase": "🔹 **Dương tính (Đang mắc Sốt rét):**\n  🔴 *Plasmodium falciparum*: Loài nguy hiểm nhất, thường gây sốt rét ác tính.\n  🔴 *Plasmodium vivax*: Thường gây sốt rét cơn cách nhật, có thể ngủ vùi trong gan gây tái phát xa.\n  🔴 Các loài hiếm hơn: *P. malariae, P. ovale, P. knowlesi*.",
      "decrease": "Âm tính (-)."
    },
    "interferingFactors": "❌ Bệnh nhân đã tự ý uống thuốc sốt rét trước khi lấy máu làm mật độ KST giảm thấp dưới ngưỡng phát hiện của kính hiển vi (Âm tính giả).",
    "clinicalNote": "Một lần xét nghiệm lam máu âm tính **không loại trừ** được bệnh sốt rét. Lời khuyên lâm sàng là nếu vẫn nghi ngờ, bác sĩ phải chỉ định chích máu soi lại 2-3 lần trong ngày hoặc dùng kết hợp các Test chẩn đoán nhanh (RDT) tìm kháng nguyên sốt rét."
  },
  {
    "name": "Neisseria gonorrhoeae nhuộm soi (Lậu cầu)",
    "group": "Vi sinh",
    "time": "Làm ngay / 45 phút",
    "isFeatured": true,
    "concept": "Lậu là một bệnh lây truyền qua đường tình dục (STI) nguy hiểm. Xét nghiệm dùng phương pháp nhuộm Gram dịch tiết sinh dục để tìm hình ảnh kinh điển: **Song cầu khuẩn Gram âm hình hạt cà phê nằm gọn bên trong bào tương của Bạch cầu đa nhân**.",
    "physiology": "📌 **Đặc tính:** Vi khuẩn Lậu (*N. gonorrhoeae*) tấn công mạnh vào niêm mạc tiết niệu - sinh dục, kích thích hệ miễn dịch huy động lượng khổng lồ bạch cầu đa nhân trung tính tới thực bào, tạo thành \"Mủ\".",
    "indication": "🎯 **Da liễu / Nam khoa / Sản khoa:** Chẩn đoán viêm niệu đạo cấp mủ ở nam giới, viêm cổ tử cung ở nữ giới, hoặc viêm kết mạc mắt mủ ở trẻ sơ sinh (do lây từ mẹ lúc lọt lòng).",
    "specimenCollection": "💧 **Loại mẫu:** Giọt mủ niệu đạo (nam) lấy vào sáng sớm lúc chưa đi tiểu; dịch cổ tử cung/âm đạo (nữ) hoặc mủ mắt.\n⏳ **Bảo quản:** Vi khuẩn Lậu rất yếu ớt ở môi trường ngoài, nên phết lam kính và nhuộm ngay.",
    "testingMethods": "Nhuộm Gram soi kính hiển vi quang học độ phóng đại x1000.",
    "ref": "📊 **Bình thường:** Âm tính (Không thấy lậu cầu).",
    "alert": "⚠️ Lậu cầu mắt ở trẻ sơ sinh là một cấp cứu nhãn khoa, nếu không được nhuộm soi phát hiện và dùng kháng sinh kịp thời, giác mạc trẻ sẽ bị thủng và dẫn đến mù lòa vĩnh viễn.",
    "pathologicalMeaning": {
      "increase": "🔹 **Dương tính (Đang mắc Lậu cấp tính):**\n  🔴 Mật độ vi khuẩn tỷ lệ thuận với mức độ viêm mủ. Cần điều trị ngay cho cả bệnh nhân và bạn tình.",
      "decrease": "Âm tính (-)."
    },
    "interferingFactors": "❌ Bệnh nhân đã tự ý uống kháng sinh hoặc bơm rửa chất sát khuẩn sinh dục trước khi lấy mẫu. Ở nữ giới, dịch âm đạo có chứa nhiều vi khuẩn hoại sinh có hình thái giống lậu, dễ gây dương tính giả nếu kỹ thuật viên thiếu kinh nghiệm.",
    "clinicalNote": "Ở nam giới có triệu chứng đái mủ rõ rệt, kết quả nhuộm soi có độ nhạy và đặc hiệu lên tới 95%, có thể kê đơn kháng sinh ngay. Tuy nhiên, ở nữ giới hoặc người nhiễm lậu mạn tính, độ nhạy của nhuộm soi rất thấp, bác sĩ cần chỉ định thêm phương pháp Cấy hoặc làm sinh học phân tử (PCR Lậu/Chlamydia) để tránh bỏ sót."
  },
  {
    "name": "Vi nấm nhuộm soi / Vi nấm soi tươi",
    "group": "Vi sinh",
    "time": "Làm ngay / 45 phút",
    "isFeatured": true,
    "concept": "Xét nghiệm sử dụng dung dịch KOH 10% (làm tiêu sừng) hoặc mực Nho (mực Tàu) để làm nổi bật hình thái của tế bào nấm dưới kính hiển vi. XN giúp phát hiện sự xâm nhập của nấm sợi (Dermatophyte), nấm men (Candida) hoặc nấm có nang (Cryptococcus) trên cơ thể.",
    "physiology": "📌 **Bệnh sinh:** Nấm là các sinh vật cơ hội. Chúng sẽ bùng phát gây bệnh khi hàng rào da bị tổn thương (ẩm ướt, trầy xước), hoặc khi hệ miễn dịch suy giảm, hoặc môi trường vi khuẩn tại chỗ bị tiêu diệt do dùng kháng sinh kéo dài (nấm âm đạo, nấm miệng).",
    "indication": "🎯 **Da liễu / Truyền nhiễm:** Chẩn đoán viêm âm đạo do nấm, hắc lào, lang ben, nấm móng, nấm phổi hoặc viêm màng não do nấm.",
    "specimenCollection": "💧 **Loại mẫu:** Vảy da, vảy móng, sợi tóc (cạo ở rìa tổn thương); Dịch âm đạo; Đờm, dịch rửa phế quản hoặc Dịch não tủy.",
    "testingMethods": "Soi tươi bằng KOH 10% - 20% hoặc nhuộm mực Nho.",
    "ref": "📊 **Bình thường:** Âm tính (Không thấy tế bào nấm / bào tử nấm).",
    "alert": "⚠️ Nếu nhuộm mực Nho dịch não tủy phát hiện thấy **\"Tế bào nấm men có nang tròn sáng bao quanh\" (Cryptococcus neoformans)**, đây là một cấp cứu truyền nhiễm tuyệt đối, thường gặp ở bệnh nhân HIV/AIDS giai đoạn cuối.",
    "pathologicalMeaning": {
      "increase": "🔹 **Dương tính (Đang nhiễm Nấm):**\n  🔴 Tế bào nấm men nảy chồi / Sợi tơ nấm giả: Đặc trưng của nhiễm *Candida albicans*.\n  🔴 Sợi tơ nấm có vách ngăn: Nhiễm nấm sợi ngoài da (Dermatophytes).\n  🔴 Sợi tơ nấm phân nhánh hình chữ Y: Nhiễm nấm mốc *Aspergillus* ở phổi.",
      "decrease": "Âm tính (-)."
    },
    "interferingFactors": "❌ Lấy mẫu sai vị trí (lấy ở giữa mảng tổn thương da thay vì ở rìa đang phát triển), hoặc bệnh nhân đã bôi thuốc trị nấm vài ngày trước khi lấy mẫu gây âm tính giả.",
    "clinicalNote": "Theo **Quyết định 3651/QĐ-BYT (2024)** về bệnh nấm Aspergillus phổi mạn tính, việc nhuộm soi dịch rửa phế quản thấy sợi nấm kết hợp với hình ảnh X-quang/CT có hang hoại tử là tiêu chuẩn quan trọng để khởi trị thuốc kháng nấm Itraconazole. Ưu điểm của soi tươi là có kết quả ngay sau 30 phút, trong khi cấy nấm phải đợi từ 1 đến 3 tuần."
  },
  {
    "name": "AFB trực tiếp nhuộm Ziehl-Neelsen (Soi đờm tìm vi khuẩn Lao)",
    "group": "Vi sinh",
    "time": "120 phút",
    "isFeatured": true,
    "concept": "AFB (Acid-Fast Bacilli) là trực khuẩn kháng cồn kháng toan. Nhờ cấu trúc vách tế bào chứa nhiều sáp (acid mycolic), vi khuẩn Lao (*Mycobacterium tuberculosis*) sẽ giữ chặt màu đỏ của thuốc nhuộm Fucsin ngay cả khi bị tẩy bằng dung dịch Cồn-Acid mạnh, nổi bật trên nền xanh của tiêu bản.",
    "physiology": "📌 **Đặc tính:** Vi khuẩn lao sinh sản rất chậm và có khả năng nằm vùng, trốn tránh bên trong đại thực bào. Khi sức đề kháng giảm, chúng sinh sôi, phá hủy nhu mô phổi tạo thành các \"hang lao\" và được khạc ra ngoài theo đờm.",
    "indication": "🎯 **Hô hấp / Truyền nhiễm:** Sàng lọc và chẩn đoán bước đầu mọi bệnh nhân có triệu chứng nghi Lao: Ho khạc đờm kéo dài trên 2 tuần, ho ra máu, sốt nhẹ về chiều, đổ mồ hôi trộm, sút cân.",
    "specimenCollection": "💧 **Loại mẫu:** Đờm sâu (không lấy nước bọt). \n⚠️ **Quy trình:** Theo chương trình chống Lao quốc gia, cần lấy **02 mẫu đờm**: 1 mẫu lấy ngay tại chỗ khi đến khám, 1 mẫu lấy vào sáng sớm lúc mới ngủ dậy.",
    "testingMethods": "Nhuộm Ziehl-Neelsen (Soi kính hiển vi quang học) hoặc Nhuộm huỳnh quang Auramine (độ nhạy cao hơn).",
    "ref": "📊 **Bình thường:** Âm tính (Không tìm thấy AFB trong 100 vi trường).",
    "alert": "⚠️ Bệnh nhân có kết quả soi đờm trực tiếp **AFB Dương tính (+)** là **NGUỒN LÂY NGHIÊM TRỌNG** nhất cho cộng đồng. Bệnh nhân phải được cách ly hô hấp, đeo khẩu trang và khởi trị phác đồ chống Lao DOTS lập tức.",
    "pathologicalMeaning": {
      "increase": "🔹 **Dương tính (+):**\n  🔴 Xác nhận bệnh nhân đang mắc Lao phổi tiến triển. Mật độ vi khuẩn được đánh giá theo cấp độ 1+, 2+, 3+ (càng cao lây càng mạnh).\n  🔴 (Lưu ý: Một số vi khuẩn cơ hội NTM - Nontuberculous Mycobacteria cũng có thể bắt màu AFB, nhưng hiếm gặp hơn Lao rất nhiều).",
      "decrease": "Âm tính (-)."
    },
    "interferingFactors": "❌ Lấy nhầm nước bọt thay vì đờm đục từ phế quản sâu sẽ gây âm tính giả. Mật độ vi khuẩn trong đờm quá ít (< 10.000 vi khuẩn/mL đờm) kính hiển vi sẽ không thể phát hiện được.",
    "clinicalNote": "Theo **Quyết định 162/QĐ-BYT (2024)** về chẩn đoán điều trị Lao, soi AFB đờm trực tiếp là xét nghiệm sàng lọc đầu tay. Tuy nhiên, độ nhạy của nó chỉ khoảng 40-60%. Nếu soi đờm ÂM TÍNH nhưng tổn thương trên X-quang nghi ngờ lao cao, bác sĩ **bắt buộc** phải chỉ định các xét nghiệm sinh học phân tử (GeneXpert MTB/RIF) để khẳng định bệnh và phát hiện luôn gen kháng thuốc Rifampicin."
  },
  {
    "name": "Đo tải lượng HBV hệ thống tự động (HBV DNA PCR)",
    "group": "Sinh học phân tử",
    "time": "1 - 2 ngày",
    "isFeatured": true,
    "concept": "Là xét nghiệm sinh học phân tử kỹ thuật cao (Real-time PCR) dùng để khuếch đại và **đếm chính xác số lượng bản sao ARN/ADN** của vi rút viêm gan B (HBV) lưu hành trong 1 mL máu. Xét nghiệm này là thước đo trực tiếp mức độ sinh sôi nảy nở của vi rút.",
    "physiology": "📌 **Động học:** Trong tế bào gan, HBV sử dụng khuôn cccDNA để nhân lên và giải phóng vi rút mới vào máu. Tải lượng HBV DNA càng cao, tốc độ tàn phá gan và nguy cơ chuyển thành Ung thư biểu mô tế bào gan (HCC) càng lớn.",
    "indication": "🎯 **Tiêu hóa / Gan mật:** \n- Quyết định xem bệnh nhân viêm gan B mạn tính có đủ tiêu chuẩn để khởi trị thuốc kháng vi rút (NA) hay không.\n- Đánh giá đáp ứng điều trị thuốc định kỳ.\n- Quyết định chỉ định dự phòng lây truyền từ mẹ sang con ở thai phụ mang HBsAg (+).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết tương (Ống EDTA) hoặc Huyết thanh.\n⏳ **Bảo quản:** Phải quay ly tâm tách huyết tương/huyết thanh sớm, bảo quản âm sâu để tránh nuclease trong máu phân hủy ADN vi rút.",
    "testingMethods": "Real-time PCR tự động.",
    "ref": "📊 **Bình thường:** Dưới ngưỡng phát hiện của máy (Âm tính).",
    "alert": "⚠️ Theo phác đồ mới của **WHO 2024**, phụ nữ mang thai có HBsAg (+) nếu xét nghiệm thấy tải lượng HBV DNA $\\ge 200.000$ IU/mL, **bắt buộc** phải được uống thuốc Tenofovir (TDF) từ 3 tháng giữa thai kỳ để ngăn chặn vi rút tràn qua nhau thai lây cho em bé.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tải lượng Vi rút cao:**\n  🔴 **Chỉ định điều trị (Theo WHO 2024):** Bất kể men gan (ALT) thế nào, nếu HBV DNA > 2.000 IU/mL kèm theo có xơ hóa gan (APRI > 0.5 hoặc FibroScan > 7kPa) hoặc có tiền sử gia đình ung thư gan, bệnh nhân ĐƯỢC CHỈ ĐỊNH điều trị bằng Tenofovir hoặc Entecavir ngay lập tức.\n  🔴 **Thất bại điều trị:** Bệnh nhân đang uống thuốc kháng vi rút tốt mà HBV DNA tăng vọt trở lại chứng tỏ vi rút đã kháng thuốc.",
      "decrease": "🔹 **Dưới ngưỡng phát hiện (Đáp ứng tốt):**\n    ▫️ Mục tiêu tối thượng của điều trị Viêm gan B mạn tính là ép tải lượng HBV DNA xuống dưới ngưỡng phát hiện, giúp ngăn ngừa hoàn toàn nguy cơ xơ gan và ung thư gan."
    },
    "interferingFactors": "❌ Lỗi bảo quản hoặc vận chuyển mẫu làm ADN vi rút bị ly giải, máy sẽ báo tải lượng thấp hơn thực tế (âm tính giả).",
    "clinicalNote": "Viêm gan B mạn tính hiện tại chưa thể chữa khỏi hoàn toàn (do cccDNA bám rễ sâu trong nhân tế bào gan). Bệnh nhân khi đã có chỉ định uống thuốc (như Tenofovir, Entecavir) thường phải uống suốt đời. Định lượng HBV DNA định kỳ mỗi 6 tháng là vũ khí duy nhất để bác sĩ biết thuốc còn đang phát huy tác dụng hay không."
  },
  {
    "name": "Đo tải lượng HCV hệ thống tự động (HCV RNA PCR)",
    "group": "Sinh học phân tử",
    "time": "1 - 2 ngày",
    "isFeatured": true,
    "concept": "Đo tải lượng ARN của vi rút viêm gan C (HCV) bằng kỹ thuật Real-time PCR. Khác với xét nghiệm Anti-HCV (chỉ là kháng thể - dấu vết của quá khứ), xét nghiệm HCV RNA khẳng định **vi rút viêm gan C đang thực sự tồn tại và sinh sôi** trong cơ thể ở thời điểm hiện tại.",
    "physiology": "📌 **Đặc tính:** HCV là vi rút ARN, không tích hợp vào nhân tế bào gan như HBV. Nhờ vậy, y học hiện đại đã phát minh ra các nhóm thuốc DAA (Direct Acting Antivirals) có khả năng càn quét và **tiêu diệt tận gốc 100% vi rút HCV** ra khỏi cơ thể.",
    "indication": "🎯 **Tiêu hóa / Gan mật:** \n- Khẳng định chẩn đoán Viêm gan C mạn tính ở người có Anti-HCV (+).\n- Xác nhận tiêu chuẩn \"Chữa khỏi hoàn toàn\" (SVR12) sau khi ngưng thuốc điều trị.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết tương (Ống EDTA) hoặc Huyết thanh.\n⏳ **Vận chuyển:** ARN của vi rút C cực kỳ dễ bị phân hủy, mẫu bắt buộc phải được bảo quản lạnh chuẩn xác và chạy máy sớm.",
    "testingMethods": "Real-time PCR tự động.",
    "ref": "📊 **Bình thường:** Dưới ngưỡng phát hiện (Âm tính).",
    "alert": "⚠️ Khoảng 25% người bị nhiễm HCV cấp tính có khả năng tự đào thải vi rút khỏi cơ thể. Ở những người này, xét nghiệm Anti-HCV vẫn dương tính suốt đời, nhưng đo tải lượng HCV RNA sẽ Âm tính. Tuyệt đối không được kê đơn thuốc trị viêm gan C cho những trường hợp này.",
    "pathologicalMeaning": {
      "increase": "🔹 **HCV RNA Dương tính (Trên ngưỡng phát hiện):**\n  🔴 Khẳng định bệnh nhân đang mắc Viêm gan C mạn tính (hoặc cấp tính). Đủ tiêu chuẩn bắt buộc phải sử dụng phác đồ thuốc DAA (Sofosbuvir/Velpatasvir...) trong 12 tuần để diệt vi rút.",
      "decrease": "🔹 **HCV RNA Âm tính:**\n  🔴 Không mắc bệnh hoặc Đã tự khỏi bệnh.\n  🔴 **Đạt SVR12 (Sustained Virological Response):** Tức là xét nghiệm HCV RNA Âm tính vào thời điểm 12 tuần sau khi uống xong viên thuốc cuối cùng. Bệnh nhân được bác sĩ tuyên bố chính thức **CHỮA KHỎI BỆNH VIÊM GAN C**."
    },
    "interferingFactors": "❌ Lỗi bảo quản ARN (kém bền hơn ADN rất nhiều) sẽ lập tức gây ra kết quả âm tính giả, khiến bác sĩ đánh giá sai về sự sạch bóng của vi rút.",
    "clinicalNote": "Theo **Quyết định 2855/QĐ-BYT (2024)** về điều trị Viêm gan vi rút C, hiện nay phác đồ các thuốc DAA pangenotypic (điều trị được mọi kiểu gen) có tỷ lệ chữa khỏi bệnh lên tới >95%. Do đó, mọi bệnh nhân có xét nghiệm HCV RNA Dương tính đều cần được tư vấn khởi trị sớm nhất có thể để ngăn chặn con đường tiến triển thành Xơ gan mất bù."
  },
   {
    "name": "Định lượng PTH [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Hormon cận giáp (PTH - Parathyroid Hormone) là một peptid do tuyến cận giáp sản xuất, đóng vai trò sinh tử trong việc điều hòa hằng định nồng độ Canxi và Phospho trong cơ thể.",
    "physiology": "📌 **Cơ chế:** Khi Canxi máu hạ, tuyến cận giáp tiết PTH. PTH sẽ huy động Canxi từ xương ra máu, kích thích thận tăng tái hấp thu Canxi, đào thải Phospho, và tăng tổng hợp 1,25-dihydroxyvitamin D (giúp ruột hấp thu Canxi).",
    "indication": "🎯 **Nội tiết & Thận học:** Chẩn đoán phân biệt Cường/Suy tuyến cận giáp; Đánh giá bệnh nhân có bất thường Canxi máu; Theo dõi rối loạn chuyển hóa xương ở bệnh nhân Bệnh thận mạn (CKD).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết tương (EDTA) hoặc Huyết thanh.\n⏳ **Chuẩn bị:** Nhịn ăn 8-10h. Do nồng độ PTH biến đổi theo nhịp ngày đêm (cao nhất vào 2h sáng), mẫu nên được lấy vào 8h - 10h sáng.",
    "testingMethods": "Miễn dịch hóa phát quang (CLIA/ECLIA).",
    "ref": "📊 **Bình thường:** 10 - 60 pg/mL (hoặc 10 - 60 ng/L).",
    "alert": "⚠️ **Tuyệt đối không biện luận PTH đơn độc.** Phải luôn đánh giá nồng độ PTH song hành cùng Canxi toàn phần, Canxi ion hóa và Phospho máu. Một mức PTH \"bình thường\" trên một bệnh nhân đang có Canxi máu tăng cao thực chất lại là sự tăng tiết bệnh lý không phù hợp.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng nồng độ PTH:**\n  🔴 Cường cận giáp tiên phát (U tuyến cận giáp) hoặc thứ phát (Suy thận mạn, thiếu hụt Vitamin D).\n  🔴 Sản xuất PTH lạc chỗ (Ung thư biểu mô tế bào vảy của phổi).\n  🔴 Hội chứng Zollinger-Ellison, Còi xương.",
      "decrease": "🔹 **Giảm nồng độ PTH:**\n  🔴 Suy cận giáp tự miễn, Tổn thương tuyến cận giáp sau phẫu thuật cắt bướu cổ.\n  🔴 Tăng Canxi máu không do cận giáp: Ngộ độc Vitamin D, Bệnh Sarcoidosis, Hội chứng nhiễm kiềm do uống sữa (Milk-alkali syndrome)."
    },
    "interferingFactors": "❌ **Nhiễu:** Tan máu, lipemia hoặc dùng chất đồng vị phóng xạ làm sai lệch kết quả.\n💊 **Thuốc làm TĂNG:** Lợi tiểu Furosemid, thuốc chống co giật, Lithium, Rifampin, Isoniazid.\n💊 **Thuốc làm GIẢM:** Cimetidin, Propranolol, Propofol (gây hạ giả tạo).",
    "clinicalNote": "Trong quản lý Bệnh thận mạn (Theo **KDIGO 2024**), bệnh nhân có mức lọc cầu thận eGFR < 60 mL/phút bắt buộc phải được xét nghiệm bộ ba: Canxi, Phospho và PTH để tầm soát cường cận giáp thứ phát và loạn dưỡng xương do thận."
  },
  {
    "name": "Định lượng Cystatin C [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Cystatin C là một protein trọng lượng phân tử thấp, được sản xuất bởi tất cả các tế bào có nhân trong cơ thể với tốc độ hoàn toàn hằng định. Nó được lọc hoàn toàn qua cầu thận và không bị bài tiết thêm ở ống thận như Creatinin.",
    "physiology": "📌 **Đặc tính ưu việt:** Khác với Creatinin, nồng độ Cystatin C trong máu **không bị phụ thuộc vào khối lượng cơ bắp, giới tính hay tuổi tác**. Điều này khiến nó trở thành một dấu ấn (marker) nội sinh nhạy bén và chính xác hơn nhiều để đo mức lọc cầu thận (eGFR).",
    "indication": "🎯 **Thận học:** Đánh giá chính xác chức năng thận, đặc biệt ở \"vùng mù\" của Creatinin (khi chức năng thận mới suy giảm nhẹ). Xác nhận eGFR ở những bệnh nhân có khối lượng cơ bất thường (người teo cơ, cắt cụt chi, béo phì, xơ gan, trẻ em).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh hoặc Huyết tương.\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn khắt khe.",
    "testingMethods": "Đo độ đục miễn dịch (Immunoturbidimetric) hoặc Nephelometry.",
    "ref": "📊 **Bình thường:** Khoảng 0.5 - 1.0 mg/L (Phụ thuộc kit thử, thường cao hơn một chút ở người già).",
    "alert": "⚠️ Dù không bị ảnh hưởng bởi cơ bắp, Cystatin C lại bị thay đổi bởi nồng độ hormon tuyến giáp và Corticosteroid liều cao. Phải thận trọng biện luận khi bệnh nhân có rối loạn các yếu tố này.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Cystatin C (Tương ứng giảm mức lọc cầu thận):**\n  🔴 Suy giảm chức năng lọc của cầu thận (Bệnh thận mạn, Suy thận cấp). Độ nhạy cao hơn Creatinin ở giai đoạn suy thận sớm.\n  🔴 Tăng không do thận: Cường giáp, dùng Corticoid liều cao.",
      "decrease": "🔹 **Giảm Cystatin C:**\n  🔴 Rối loạn chức năng tuyến giáp (Suy giáp)."
    },
    "interferingFactors": "💊 **Thuốc/Bệnh lý:** Corticosteroid liều cao và Cường giáp làm tăng sản xuất Cystatin C (dẫn tới eGFR tính toán bị thấp giả tạo). Suy giáp làm giảm sản xuất Cystatin C (eGFR cao giả tạo).",
    "clinicalNote": "Theo Hướng dẫn **KDIGO 2024**, phương trình **eGFR CKD-EPI Cystatin C** được khuyến cáo mạnh mẽ để khẳng định chẩn đoán Bệnh thận mạn (CKD) khi eGFR tính theo Creatinin nằm ở ranh giới 45-59 mL/phút mà bệnh nhân không có albumin niệu."
  },
  {
    "name": "Định lượng Cyfra 21-1 [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Cyfra 21-1 là mảnh vỡ của Cytokeratin 19 - một protein khung cấu trúc nằm trong bộ xương của tế bào biểu mô. Khi tế bào biểu mô ác tính phát triển nhanh, hoại tử hoặc chết theo chương trình (apoptosis), các mảnh vỡ Cytokeratin 19 này sẽ được giải phóng ồ ạt vào dòng máu.",
    "physiology": "📌 **Động học:** Mặc dù Cytokeratin 19 có mặt ở biểu mô lành, nhưng sự biểu hiện và phóng thích của nó đặc biệt mạnh mẽ trong các khối u ác tính, điển hình nhất là **Ung thư phổi không tế bào nhỏ (NSCLC)**.",
    "indication": "🎯 **Ung bướu / Hô hấp:** Dấu ấn khối u (Tumor marker) hàng đầu để chẩn đoán, theo dõi đáp ứng điều trị và phát hiện tái phát của Ung thư phổi không tế bào nhỏ (đặc biệt là Ung thư biểu mô tế bào vảy).",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn.",
    "testingMethods": "Miễn dịch hóa phát quang (ECLIA / CLIA).",
    "ref": "📊 **Bình thường:** < 3.3 ng/mL (hoặc µg/L).",
    "alert": "⚠️ Giống như mọi chất chỉ điểm khối u khác, Cyfra 21-1 **không dùng để sàng lọc ung thư** trên quần thể người khỏe mạnh không có triệu chứng do có tỷ lệ dương tính giả ở các bệnh phổi lành tính.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng Cyfra 21-1 (> 3.3 ng/mL):**\n  🔴 **Ác tính:** Ung thư phổi không tế bào nhỏ (NSCLC - ưu thế biểu mô vảy), Ung thư bàng quang, Ung thư thực quản, Ung thư cổ tử cung.\n  🔴 **Lành tính (Tăng nhẹ):** Suy thận, Bệnh phổi mô kẽ, Xơ gan, Viêm phế quản mạn tính.",
      "decrease": "🔹 **Giảm Cyfra 21-1:**\n  🔴 Giảm nhanh về mức bình thường sau khi phẫu thuật cắt bỏ u hoặc sau các đợt hóa/xạ trị phản ánh sự đáp ứng tốt với phác đồ điều trị."
    },
    "interferingFactors": "❌ Suy thận làm giảm sự thanh thải của các đoạn Cytokeratin, dẫn đến nồng độ Cyfra 21-1 tăng vọt (dương tính giả) dù bệnh nhân không có ung thư.",
    "clinicalNote": "Nồng độ Cyfra 21-1 trước điều trị có giá trị tiên lượng mạnh mẽ. Nếu một bệnh nhân Ung thư phổi tế bào vảy có Cyfra 21-1 trước phẫu thuật rất cao, tiên lượng thường xấu. Nếu nồng độ tăng vọt trở lại trong giai đoạn theo dõi, cần nghĩ ngay đến di căn hoặc tái phát khối u."
  },
  {
    "name": "Định lượng SCC (Squamous cell carcinoma antigen) [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Kháng nguyên ung thư biểu mô tế bào vảy (SCC Ag) là một tiểu phân của kháng nguyên TA-4, thuộc nhóm chất ức chế serine protease. Nó được biểu hiện phong phú ở lớp biểu mô vảy (squamous epithelium) bình thường và tăng sinh dữ dội trong các tổ chức ung thư biểu mô vảy.",
    "physiology": "📌 **Đặc tính:** Vì SCC có nguồn gốc từ biểu mô vảy tự nhiên (như da, cổ tử cung, thực quản, phổi), các tế bào khối u thuộc các cơ quan này khi nhân lên sẽ bài xuất lượng lớn SCC vào dòng tuần hoàn.",
    "indication": "🎯 **Ung bướu / Sản phụ khoa:** Dấu ấn sinh học cốt lõi để chẩn đoán, đánh giá giai đoạn, tiên lượng và đặc biệt là theo dõi tái phát của **Ung thư cổ tử cung** (thể tế bào vảy), Ung thư thực quản, Ung thư đầu mặt cổ.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh hoặc Huyết tương.\n⚠️ **Đặc biệt lưu ý:** Bệnh phẩm **rất dễ bị nhiễu**. Tránh để da, mồ hôi hoặc nước bọt của người lấy máu/bệnh nhân rơi vào ống nghiệm hoặc nắp đậy.",
    "testingMethods": "Hóa phát quang miễn dịch (CLIA / ECLIA).",
    "ref": "📊 **Bình thường:** < 2.0 ng/mL (có thể dao động từ 1.5 - 2.5 tùy sinh phẩm).",
    "alert": "⚠️ Tế bào biểu bì da của người khỏe mạnh chứa lượng lớn kháng nguyên SCC. Nếu kỹ thuật viên không đeo găng tay, hoặc ho, hắt hơi làm văng giọt bắn vào ống máu, kết quả SCC sẽ tăng vọt giả tạo (lên hàng chục ng/mL) gây hoang mang lớn cho bệnh nhân.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng nồng độ SCC:**\n  🔴 **Ung thư biểu mô vảy (Squamous Cell Carcinoma):** Ung thư cổ tử cung (SCC đặc biệt nhạy với loại này), Ung thư phổi tế bào vảy, Ung thư thực quản, âm đạo, vùng đầu mặt cổ.\n  🔴 **Bệnh lành tính:** Bệnh ngoài da (Vảy nến, Eczema), Suy thận, Bệnh gan, Viêm phổi.",
      "decrease": "🔹 **Giảm nồng độ SCC:**\n  🔴 Sau khi cắt bỏ tử cung triệt căn hoặc xạ trị, SCC sẽ giảm sâu. Đây là thước đo thành công của quá trình điều trị."
    },
    "interferingFactors": "❌ **Dương tính giả:** Nhiễm bẩn từ biểu bì/mồ hôi/nước bọt. Bệnh nhân có các bệnh da liễu toàn thân (vảy nến nặng) SCC cũng sẽ tăng sinh lý.\n❌ Suy thận làm giảm thải trừ SCC gây tăng giả tạo.",
    "clinicalNote": "Trong quản lý Ung thư cổ tử cung, nếu sau điều trị ổn định nồng độ SCC duy trì < 2.0 ng/mL, bệnh nhân an toàn. Nếu theo dõi định kỳ thấy SCC tăng liên tục trong 2 tháng (dù chưa có triệu chứng), đó là dấu hiệu cảnh báo bệnh tái phát sớm từ 2 đến 6 tháng trước khi phát hiện được trên chẩn đoán hình ảnh (CT/MRI)."
  },
  {
    "name": "Định lượng CA 19-9 (Carbohydrate Antigen 19-9) [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Kháng nguyên ung thư 19-9 (CA 19-9) là một kháng nguyên cấu trúc đường (carbohydrat) có liên quan chặt chẽ với kháng nguyên nhóm máu Lewis. Bình thường, nó được tổng hợp bởi tế bào biểu mô ống tụy và đường mật. Sự phá hủy mô và tăng sinh khối u tại hệ thống tiêu hóa làm tăng nồng độ chất này trong máu.",
    "physiology": "📌 **Động học:** Trong điều kiện bình thường, CA 19-9 được bài tiết qua dịch mật. Khi đường mật bị tắc nghẽn hoặc khi có tế bào ung thư tăng sinh ồ ạt, CA 19-9 sẽ trào ngược và tích tụ vào dòng máu với nồng độ khổng lồ.",
    "indication": "🎯 **Tiêu hóa / Gan mật tụy:** Dấu ấn sinh học số 1 dùng để chẩn đoán, đánh giá khả năng phẫu thuật và theo dõi đáp ứng điều trị của **Ung thư Tụy** và **Ung thư đường mật**.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Không bắt buộc nhịn ăn.",
    "testingMethods": "Miễn dịch hóa phát quang (CLIA/ECLIA) hoặc ELISA.",
    "ref": "📊 **Bình thường:** < 35 U/mL (hoặc < 27 U/mL tùy hệ thống máy, ví dụ tại BV Bạch Mai thường lấy ngưỡng < 27 U/mL).",
    "alert": "⚠️ **Yếu tố nhóm máu Lewis:** Khoảng 5 - 10% dân số mang nhóm máu Lewis âm tính ($Le^{a-b-}$). Những người này thiếu gen mã hóa enzym tổng hợp CA 19-9. Ở đối tượng này, dù có bị ung thư Tụy giai đoạn cuối, kết quả CA 19-9 vẫn luôn bằng 0 (Âm tính giả tuyệt đối).",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng CA 19-9 (> 35 U/mL):**\n  🔴 **Ác tính:** Ung thư tụy (chiếm 80% độ nhạy, nếu > 1000 U/mL gần như chắc chắn u đã quá chỉ định phẫu thuật), Ung thư đường mật, Ung thư dạ dày, Ung thư đại trực tràng.\n  🔴 **Lành tính (Cần cảnh giác):** Viêm túi mật, Sỏi ống mật chủ gây tắc mật, Viêm gan, Xơ gan, Viêm tụy cấp/mạn.",
      "decrease": "🔹 **Giảm CA 19-9:**\n  🔴 Bằng chứng của việc điều trị phẫu thuật lấy bỏ hoàn toàn khối u tụy hoặc hóa trị có đáp ứng tốt."
    },
    "interferingFactors": "❌ **Dương tính giả cực mạnh:** Bất kỳ nguyên nhân nào gây **tắc mật** (Sỏi mật, viêm đường mật) đều làm CA 19-9 tăng vọt lên hàng nghìn U/mL dù không có ung thư. Sau khi giải quyết thông tắc mật, CA 19-9 sẽ tự động giảm về bình thường.",
    "clinicalNote": "Không bao giờ dùng CA 19-9 để tầm soát ung thư tụy cho người khỏe mạnh (theo USPSTF) do tỷ lệ dương tính giả quá cao. Khi biện luận CA 19-9, bác sĩ bắt buộc phải nhìn vào chỉ số Bilirubin. Nếu Bilirubin đang tăng rất cao (vàng da tắc mật), việc CA 19-9 tăng theo là điều tất yếu và chưa thể khẳng định là ung thư tụy."
  },
  {
    "name": "Định lượng Kháng thể kháng CCP (Anti-CCP) [máu]",
    "group": "Miễn Dịch",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Anti-CCP (Cyclic Citrullinated Peptide Antibodies - ACPA) là tự kháng thể do hệ miễn dịch sinh ra để tấn công các protein đã bị biến đổi cấu trúc (quá trình Citrulline hóa) nằm trong màng hoạt dịch của khớp.",
    "physiology": "📌 **Cơ chế:** Trong Bệnh viêm khớp dạng thấp (RA), hệ miễn dịch bị mất dung nạp và nhận diện nhầm các peptide citrulline là vật thể lạ. Quá trình sản xuất Anti-CCP bắt đầu từ rất sớm, âm thầm phá hủy sụn khớp từ nhiều năm trước khi bệnh nhân xuất hiện triệu chứng sưng đau khớp trên lâm sàng.",
    "indication": "🎯 **Cơ Xương Khớp / Miễn dịch:** Tiêu chuẩn vàng để chẩn đoán sớm, chẩn đoán phân biệt và đánh giá tiên lượng phá hủy khớp đối với bệnh **Viêm khớp dạng thấp (Rheumatoid Arthritis - RA)**.",
    "specimenCollection": "💉 **Loại mẫu:** Huyết thanh.\n⏳ **Chuẩn bị:** Không yêu cầu nhịn ăn.",
    "testingMethods": "Miễn dịch tự động (ECLIA/ELISA).",
    "ref": "📊 **Bình thường:** Âm tính (Thường < 5 U/mL hoặc < 20 U/mL tùy hóa chất của phòng Lab).",
    "alert": "⚠️ Mặc dù Yếu tố dạng thấp (RF) là xét nghiệm kinh điển, nhưng RF có độ đặc hiệu kém (tăng trong viêm gan, lao, người già). Anti-CCP khắc phục hoàn toàn nhược điểm này với **độ đặc hiệu lên tới > 95%** chuyên biệt cho Viêm khớp dạng thấp.",
    "pathologicalMeaning": {
      "increase": "🔹 **Dương tính (Anti-CCP tăng cao):**\n  🔴 **Viêm khớp dạng thấp (RA):** Đặc biệt là các thể bệnh có tiên lượng nặng, phá hủy bào mòn sụn khớp nhanh, và nguy cơ biến dạng khớp cao.\n  🔴 Rất hiếm khi dương tính ở các bệnh tự miễn khác (Lupus, Sjogren) hoặc người bình thường.",
      "decrease": "🔹 **Âm tính:**\n  🔴 Không loại trừ hoàn toàn viêm khớp dạng thấp (vẫn có khoảng 20-30% bệnh nhân RA có huyết thanh âm tính), nhưng tiên lượng phá hủy xương thường nhẹ hơn."
    },
    "interferingFactors": "❌ Rất ít bị nhiễu. Tình trạng tăng Gamma-globulin máu hoặc RF dương tính quá cao có thể gây nhiễu nhẹ nhưng không làm sai lệch ý nghĩa biện luận lâm sàng cốt lõi.",
    "clinicalNote": "Theo Hướng dẫn cập nhật **EULAR 2025** về quản lý Viêm khớp dạng thấp, nếu một bệnh nhân bị đau cứng khớp buổi sáng và xét nghiệm có Anti-CCP (+), bác sĩ được khuyến cáo mạnh mẽ phải khởi trị ngay lập tức bằng thuốc chống thấp khớp tác dụng cải thiện bệnh (DMARDs, tiêu biểu là Methotrexate) để chặn đứng tổn thương bào mòn khớp không hồi phục."
  },
  {
    "name": "Đo hoạt độ ADA (Adenosine Deaminase) [dịch chọc dò]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "Adenosine Deaminase (ADA) là một enzym xúc tác quá trình chuyển hóa purine, cần thiết cho sự biệt hóa và phân chia của các tế bào lympho T. Nồng độ ADA tăng vọt trong các khoang dịch cơ thể (màng phổi, màng bụng, dịch não tủy) phản ánh sự kích hoạt miễn dịch qua trung gian tế bào mạnh mẽ.",
    "physiology": "📌 **Đặc tính:** Khi bị tấn công bởi các vi sinh vật nội bào (điển hình nhất là Vi khuẩn Lao - *Mycobacterium tuberculosis*), hệ miễn dịch huy động đại thực bào và lympho T tới chiến trường. Dòng lympho T này sản xuất và giải phóng ồ ạt enzym ADA vào trong dịch tiết.",
    "indication": "🎯 **Hô hấp / Truyền nhiễm:** Chẩn đoán phân biệt cực kỳ nhanh chóng và chính xác các nguyên nhân gây tràn dịch màng phổi, tràn dịch ổ bụng hoặc viêm màng não. Xét nghiệm có giá trị sống còn trong chẩn đoán **Lao màng thanh mạc (Lao màng phổi, màng bụng, màng não)**.",
    "specimenCollection": "💧 **Loại mẫu:** Dịch chọc dò màng phổi, màng bụng, hoặc màng ngoài tim, Dịch não tủy.\n⚠️ **Xử lý:** Ly tâm nhanh để loại bỏ hồng cầu trước khi đo.",
    "testingMethods": "Phản ứng Enzym so màu (Colorimetric).",
    "ref": "📊 **Dịch màng phổi / ổ bụng:** Thường < 40 U/L (Ngưỡng chẩn đoán Lao thường là > 40 U/L).\n📊 **Dịch não tủy:** < 10 U/L.",
    "alert": "⚠️ Trong tràn dịch màng phổi dịch tiết ưu thế tế bào Lympho, một kết quả ADA > 40 U/L ở những quốc gia lưu hành bệnh Lao cao (như Việt Nam) có độ nhạy và độ đặc hiệu > 90% chẩn đoán Lao màng phổi, cho phép khởi trị ngay mà không cần đợi kết quả sinh thiết màng phổi.",
    "pathologicalMeaning": {
      "increase": "🔹 **Tăng ADA Dịch chọc dò (> 40 U/L):**\n  🔴 **Nhiễm trùng nội bào:** Lao màng phổi, Lao màng bụng, Viêm màng não do Lao (Tăng rất đặc hiệu và ổn định).\n  🔴 **Viêm nhiễm khác (Ít gặp hơn):** Tràn mủ màng phổi do vi khuẩn (Empyema), Tràn dịch màng phổi do Viêm khớp dạng thấp.\n  🔴 **Ung thư máu:** Lymphoma (U lympho) di căn màng thanh mạc.",
      "decrease": "🔹 **ADA Thấp (< 40 U/L):**\n  🔴 Hầu như loại trừ được chẩn đoán Lao màng phổi.\n  🔴 Các nguyên nhân khác gây tràn dịch: Ung thư di căn (Carcinoma), Tràn dịch màng phổi do Suy tim, Xơ gan (Dịch thấm có ADA rất thấp)."
    },
    "interferingFactors": "❌ **Dương tính giả:** Dịch chọc dò có dính máu (chọc chạm mạch) sẽ làm ADA tăng cao do trong hồng cầu của bệnh nhân cũng chứa rất nhiều enzym ADA.",
    "clinicalNote": "Theo Hướng dẫn chẩn đoán và điều trị bệnh Lao (QĐ 162/QĐ-BYT 2024), việc tìm vi khuẩn Lao trong dịch màng phổi cực kỳ khó (tỷ lệ soi đờm AFB dương tính hoặc nuôi cấy trong dịch chỉ < 5-10%). Vì vậy, hoạt độ ADA dịch màng phổi tăng cao kết hợp với dịch tiết ưu thế Lympho được coi là tiêu chuẩn vàng trên thực hành lâm sàng để quyết định điều trị Lao ngoài phổi."
  },
  {
    "name": "Mycobacterium tuberculosis định danh và kháng RMP (Xpert MTB/RIF)",
    "group": "Sinh học phân tử",
    "time": "120 phút",
    "isFeatured": true,
    "concept": "Xpert MTB/RIF là xét nghiệm sinh học phân tử tự động (Real-time PCR) mang tính đột phá, cho phép đồng thời xác định sự hiện diện của phức hợp vi khuẩn Lao (Mycobacterium tuberculosis complex) và phát hiện đột biến gen rpoB kháng thuốc Rifampicin chỉ trong vòng 2 giờ.",
    "physiology": "📌 **Đặc tính:** Vi khuẩn Lao có thời gian nhân lên rất chậm (chu kỳ 20-24 giờ). Nuôi cấy kinh điển mất 2-6 tuần để mọc. Xpert MTB/RIF giải quyết rào cản này bằng cách nhân bản trực tiếp đoạn gen đặc hiệu của vi khuẩn ngay từ bệnh phẩm chưa qua nuôi cấy.",
    "indication": "🎯 **Truyền nhiễm / Hô hấp:** Chỉ định bắt buộc ở bệnh nhân nghi ngờ mắc Lao nhưng soi đờm AFB âm tính; Sàng lọc lao kháng đa thuốc (MDR-TB); Chẩn đoán lao ở người nhiễm HIV hoặc trẻ em.",
    "specimenCollection": "💧 **Loại mẫu:** Đờm, dịch rửa phế quản phế nang, dịch não tủy, dịch màng phổi, hoặc bệnh phẩm sinh thiết hạch.",
    "testingMethods": "Hệ thống PCR tự động hoàn toàn (GeneXpert).",
    "ref": "📊 **Bình thường:** Âm tính (Không phát hiện thấy vi khuẩn Lao).",
    "alert": "⚠️ Nếu kết quả Xpert trả về 'MTB Detected, Rifampicin Resistance Detected' (Phát hiện Lao và Kháng Rifampicin), bệnh nhân được chẩn đoán mắc Lao đa kháng thuốc (MDR-TB) và cần phác đồ điều trị chuyên biệt ngay lập tức.",
    "pathologicalMeaning": {
      "increase": "🔹 **Dương tính (Phát hiện MTB):**\n  🔴 Khẳng định bệnh nhân đang hoặc đã từng mắc bệnh Lao.\n  🔴 **Đánh giá kháng thuốc:** Nếu phát hiện kháng Rifampicin (RMP), bệnh nhân có nguy cơ cao kháng cả Isoniazid, đòi hỏi phác đồ Lao kháng thuốc.",
      "decrease": "🔹 **Âm tính:** Không phát hiện DNA của vi khuẩn Lao trong mẫu bệnh phẩm (tuy nhiên không loại trừ hoàn toàn 100% nếu tải lượng vi khuẩn quá thấp)."
    },
    "interferingFactors": "❌ Xét nghiệm Xpert phát hiện DNA của vi khuẩn, do đó nó không thể phân biệt được vi khuẩn Lao đang sống hay đã chết. Bệnh nhân đã điều trị khỏi Lao vài tháng trước vẫn có thể cho kết quả Xpert dương tính giả (do xác vi khuẩn vẫn còn tồn dư).",
    "clinicalNote": "Theo Hướng dẫn chẩn đoán bệnh Lao của Bộ Y tế (QĐ 162/QĐ-BYT 2024), Xpert MTB/RIF là xét nghiệm then chốt. Nếu soi đờm AFB âm tính mà hình ảnh X-quang nghi ngờ cao, bác sĩ bắt buộc phải chỉ định GeneXpert để khẳng định bệnh và phát hiện gen kháng thuốc Rifampicin, tránh bỏ sót các ca lao tiềm ẩn hoặc lao kháng thuốc."
  },
  {
    "name": "Định lượng QuantiFERON-TB Gold (IGRA) [máu]",
    "group": "Sinh học phân tử",
    "time": "1 - 2 ngày",
    "isFeatured": true,
    "concept": "QuantiFERON (QFT) là xét nghiệm đo mức độ giải phóng cytokine Interferon-gamma (IGRA) của tế bào bạch cầu Lympho T trong máu khi chúng được tiếp xúc lại với các kháng nguyên đặc hiệu của vi khuẩn Lao (ESAT-6, CFP-10).",
    "physiology": "📌 **Cơ chế:** Khi cơ thể từng nhiễm vi khuẩn Lao, các tế bào Lympho T ghi nhớ (Memory T-cells) sẽ lưu lại thông tin. Khi lấy máu bệnh nhân và ủ với kháng nguyên Lao nhân tạo, các tế bào T ghi nhớ này sẽ bị kích hoạt và giải phóng ồ ạt Interferon-gamma (IFN-γ).",
    "indication": "🎯 **Truyền nhiễm / Cơ xương khớp:** Chẩn đoán nhiễm Lao tiềm ẩn (Latent Tuberculosis Infection - LTBI); Tầm soát bắt buộc trước khi sử dụng các thuốc ức chế miễn dịch sinh học (như bDMARDs, JAKi) hoặc trước ghép tạng.",
    "specimenCollection": "💉 **Loại mẫu:** Máu toàn phần. Lấy vào 3-4 ống chuyên dụng của bộ Kit QuantiFERON. Lắc đều và ủ ấm 37 độ C theo đúng quy chuẩn.",
    "testingMethods": "Đo nồng độ Interferon-gamma bằng kỹ thuật miễn dịch gắn men (ELISA) sau khi ủ.",
    "ref": "📊 **Bình thường:** Âm tính.",
    "alert": "⚠️ QuantiFERON **không thể** phân biệt được giữa Nhiễm lao tiềm ẩn (vi khuẩn đang ngủ đông) và Bệnh lao hoạt động (vi khuẩn đang sinh sôi phá hủy mô). Phải kết hợp triệu chứng lâm sàng và X-quang phổi để chẩn đoán phân biệt.",
    "pathologicalMeaning": {
      "increase": "🔹 **Dương tính (IFN-γ tăng cao):**\n  🔴 Khẳng định bệnh nhân đã từng nhiễm vi khuẩn Lao (Nhiễm lao tiềm ẩn hoặc Lao hoạt động).\n  🔴 Nguy cơ cao bùng phát thành Lao thể hoạt động nếu bệnh nhân bị suy giảm miễn dịch (như nhiễm HIV, hóa trị ung thư, dùng thuốc sinh học).",
      "decrease": "🔹 **Âm tính:** Không nhiễm vi khuẩn Lao. (Hoặc Âm tính giả do hệ miễn dịch của bệnh nhân quá suy kiệt không thể sản xuất nổi IFN-γ, thường trả về kết quả Không xác định - Indeterminate)."
    },
    "interferingFactors": "❌ **Ưu điểm vượt trội:** Khác với test lẩy da Tuberculin (Mantoux), QuantiFERON không bị dương tính giả bởi việc tiêm vắc xin phòng Lao (BCG) trước đó, do kháng nguyên sử dụng hoàn toàn vắng mặt trong chủng BCG.",
    "clinicalNote": "Theo Hướng dẫn EULAR 2024-2025 về quản lý Viêm khớp dạng thấp, trước khi bắt đầu bất kỳ liệu pháp sinh học hoặc thuốc ức chế JAK nào, bệnh nhân có nguy cơ cao tái hoạt động nhiễm trùng tiềm tàng bắt buộc phải được tầm soát Lao. Nếu xét nghiệm QuantiFERON dương tính, bệnh nhân phải được điều trị dự phòng Lao trước khi dùng thuốc ức chế miễn dịch để tránh vi khuẩn Lao bùng phát."
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
