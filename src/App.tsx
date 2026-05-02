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
  ShieldAlert,
  Bug,
  Flame,
  HeartHandshake,
  Cpu,
  Glasses,
  Sparkles,
  Camera,
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
  advanced_knowledge?: string;
  deep_knowledge?: string;
  patient_advice?: string;
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
    "ref": "📊 **Bình thường:** 0,5% - 1,5%.\n*(Lưu ý: Ở trẻ sơ sinh tỷ lệ này thường cao hơn, khoảng 2% - 6%).*",
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
    "concept": "Xét nghiệm quan sát cặn phân qua kính hiển vi quang học để tìm các hình thái sinh học (thể hoạt động - trophozoite hoặc thể bào nang - cyst) của các loại ký sinh trùng đơn bào chuyên gây bệnh tại niêm mạc ruột non và đại tràng.",
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
    name: "Vi khuẩn nuôi cấy và định danh hệ thống tự động", 
    group: "Vi sinh", 
    time: "3 - 5 ngày", 
    ref: "VI KHUẨN KHÔNG MỌC", 
    alert: "Tiêu chuẩn vàng trong chẩn đoán bệnh lý nhiễm khuẩn.",
    concept: "Phương pháp nuôi cấy mẫu bệnh phẩm (máu, đờm, nước tiểu, dịch cơ thể) trên môi trường nhân tạo, sau đó định danh tự động dựa trên đặc tính sinh hóa, chuyển hóa và hình thái học.",
    indication: "Phát hiện, xác định chính xác nguyên nhân vi khuẩn gây nhiễm trùng để có căn cứ làm kháng sinh đồ, định hướng điều trị đặc hiệu.",
    pathologicalMeaning: {
      increase: `• DƯƠNG TÍNH: Đã xác định được vi khuẩn gây bệnh. Chi tiết phân loại và hướng dẫn lâm sàng:

<details style="margin-top:12px; background:linear-gradient(135deg, #f0f7ff 0%, #e0efff 100%); padding:20px; border-radius:24px; border:2px solid #3b82f6; box-shadow:0 10px 25px -5px rgba(59,130,246,0.1);">
<summary style="font-weight:900; color:#1e40af; cursor:pointer; font-size:1.25em; outline:none; font-family:'Inter', sans-serif; list-style:none; display:flex; align-items:center; gap:12px; transition:all 0.3s;">
  <div style="background:#3b82f6; color:white; width:32px; height:32px; border-radius:10px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(59,130,246,0.3);">Â</div>
  <span>VI KHUẨN GRAM ÂM (Nhấp để xem)</span>
</summary>
<div style="margin-top:20px; font-size:0.95em; line-height:1.6; color:#1e293b;">

<div style="background: linear-gradient(135deg, #f0f7ff 0%, #ffffff 100%); padding: 18px; border-radius: 18px; border: 1px solid #d1e9ff; margin-bottom: 12px; position:relative;">
<div style="position:absolute; top:-10px; left:20px; background:#2196f3; color:white; font-family:'Oswald', sans-serif; font-size:0.9em; padding:2px 10px; border-radius:20px; font-weight:900;">01</div>
<b style="font-size:1.1em; color:#0d47a1; font-family:'Montserrat', sans-serif; display:block; margin-bottom:8px;">Trực khuẩn ruột lên men Lactose (E. coli, Klebsiella, Enterobacter...)</b>
<span style="color:#2196f3; font-weight:900; font-family:'JetBrains Mono', monospace; font-size:0.9em; text-transform:uppercase;">[Hình thể]:</span> <span style="font-family:'Inter', sans-serif; font-weight:500; color:#475569;">Gram (-), mọc tốt trên MacConkey (khuẩn lạc hồng).</span><br>
<span style="color:#2196f3; font-weight:900; font-family:'JetBrains Mono', monospace; font-size:0.9em; text-transform:uppercase;">[Lâm sàng]:</span> <span style="font-family:'Inter', sans-serif; font-weight:500; color:#475569;">Gây nhiễm khuẩn tiết niệu, đường ruột, viêm phổi, nhiễm khuẩn huyết.</span>
</div>

<div style="background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%); padding: 18px; border-radius: 18px; border: 1px solid #dcfce7; margin-bottom: 12px; position:relative;">
<div style="position:absolute; top:-10px; left:20px; background:#4caf50; color:white; font-family:'Oswald', sans-serif; font-size:0.9em; padding:2px 10px; border-radius:20px; font-weight:900;">02</div>
<b style="font-size:1.1em; color:#1b5e20; font-family:'Montserrat', sans-serif; display:block; margin-bottom:8px;">Trực khuẩn ruột KHÔNG lên men Lactose (Proteus, Serratia...)</b>
<span style="color:#10b981; font-weight:900; font-family:'JetBrains Mono', monospace; font-size:0.9em; text-transform:uppercase;">[Hình thể]:</span> <span style="font-family:'Inter', sans-serif; font-weight:500; color:#475569;">Gram (-), MacConkey không màu. Proteus sinh H2S, Urease (+).</span><br>
<span style="color:#10b981; font-weight:900; font-family:'JetBrains Mono', monospace; font-size:0.9em; text-transform:uppercase;">[Lâm sàng]:</span> <span style="font-family:'Inter', sans-serif; font-weight:500; color:#475569;">Proteus gây sỏi tiết niệu (kiềm hóa nước tiểu). Serratia gây nhiễm khuẩn cơ hội.</span>
</div>

<div style="background: linear-gradient(135deg, #fff7ed 0%, #ffffff 100%); padding: 18px; border-radius: 18px; border: 1px solid #ffedd5; margin-bottom: 12px; position:relative;">
<div style="position:absolute; top:-10px; left:20px; background:#ff9800; color:white; font-family:'Oswald', sans-serif; font-size:0.9em; padding:2px 10px; border-radius:20px; font-weight:900;">03</div>
<b style="font-size:1.1em; color:#e65100; font-family:'Montserrat', sans-serif; display:block; margin-bottom:8px;">Trực khuẩn Gây bệnh chuyên biệt (Salmonella, Shigella)</b>
<span style="color:#f59e0b; font-weight:900; font-family:'JetBrains Mono', monospace; font-size:0.9em; text-transform:uppercase;">[Hình thể]:</span> <span style="font-family:'Inter', sans-serif; font-weight:500; color:#475569;">Gram (-). Salmonella sinh H2S (tâm đen), Shigella không.</span><br>
<span style="color:#f59e0b; font-weight:900; font-family:'JetBrains Mono', monospace; font-size:0.9em; text-transform:uppercase;">[Lâm sàng]:</span> <span style="font-family:'Inter', sans-serif; font-weight:500; color:#475569;">Gây thương hàn, lỵ trực khuẩn, nhiễm độc thức ăn.</span>
</div>

<div style="background: linear-gradient(135deg, #f0fdfa 0%, #ffffff 100%); padding: 18px; border-radius: 18px; border: 1px solid #ccfbf1; margin-bottom: 12px; position:relative;">
<div style="position:absolute; top:-10px; left:20px; background:#009688; color:white; font-family:'Oswald', sans-serif; font-size:0.9em; padding:2px 10px; border-radius:20px; font-weight:900;">04</div>
<b style="font-size:1.1em; color:#004d40; font-family:'Montserrat', sans-serif; display:block; margin-bottom:8px;">Nhóm Pseudomonas (Trực khuẩn mủ xanh)</b>
<span style="color:#0d9488; font-weight:900; font-family:'JetBrains Mono', monospace; font-size:0.9em; text-transform:uppercase;">[Hình thể]:</span> <span style="font-family:'Inter', sans-serif; font-weight:500; color:#475569;">Gram (-), hiếu khí, tiết Pyocyanin (xanh mủ đặc trưng).</span><br>
<span style="color:#0d9488; font-weight:900; font-family:'JetBrains Mono', monospace; font-size:0.9em; text-transform:uppercase;">[Lâm sàng]:</span> <span style="font-family:'Inter', sans-serif; font-weight:500; color:#475569;">Nhiễm khuẩn vết bỏng, viêm phổi thở máy, đề kháng rất cao.</span>
</div>

<div style="background: linear-gradient(135deg, #f5f3ff 0%, #ffffff 100%); padding: 18px; border-radius: 18px; border: 1px solid #ddd6fe; margin-bottom: 12px; position:relative;">
<div style="position:absolute; top:-10px; left:20px; background:#673ab7; color:white; font-family:'Oswald', sans-serif; font-size:0.9em; padding:2px 10px; border-radius:20px; font-weight:900;">05</div>
<b style="font-size:1.1em; color:#311b92; font-family:'Montserrat', sans-serif; display:block; margin-bottom:8px;">Nhóm Acinetobacter & Burkholderia</b>
<span style="color:#8b5cf6; font-weight:900; font-family:'JetBrains Mono', monospace; font-size:0.9em; text-transform:uppercase;">[Hình thể]:</span> <span style="font-family:'Inter', sans-serif; font-weight:500; color:#475569;">Cầu trực khuẩn Gram (-). A.baumannii (MDR) rất nguy hiểm.</span><br>
<span style="color:#8b5cf6; font-weight:900; font-family:'JetBrains Mono', monospace; font-size:0.9em; text-transform:uppercase;">[Lâm sàng]:</span> <span style="font-family:'Inter', sans-serif; font-weight:500; color:#475569;">Viêm phổi bệnh viện, Whitmore (do B.pseudomallei).</span>
</div>

<div style="background: linear-gradient(135deg, #fff1f2 0%, #ffffff 100%); padding: 18px; border-radius: 18px; border: 1px solid #fecdd3; margin-bottom: 0; position:relative;">
<div style="position:absolute; top:-10px; left:20px; background:#e11d48; color:white; font-family:'Oswald', sans-serif; font-size:0.9em; padding:2px 10px; border-radius:20px; font-weight:900;">06</div>
<b style="font-size:1.1em; color:#881337; font-family:'Montserrat', sans-serif; display:block; margin-bottom:8px;">Cầu khuẩn Gram Âm (Neisseria & Moraxella)</b>
<span style="color:#e11d48; font-weight:900; font-family:'JetBrains Mono', monospace; font-size:0.9em; text-transform:uppercase;">[Hình thể]:</span> <span style="font-family:'Inter', sans-serif; font-weight:500; color:#475569;">Song cầu hình hạt cà phê. N.gonorrhoeae: lậu cầu.</span><br>
<span style="color:#e11d48; font-weight:900; font-family:'JetBrains Mono', monospace; font-size:0.9em; text-transform:uppercase;">[Lâm sàng]:</span> <span style="font-family:'Inter', sans-serif; font-weight:500; color:#475569;">Bệnh lậu, viêm màng não do não mô cầu (cấp cứu).</span>
</div>

</div>
</details>

<details style="margin-top:12px; background:linear-gradient(135deg, #fff5f5 0%, #ffe0e0 100%); padding:20px; border-radius:24px; border:2px solid #ef4444; box-shadow:0 10px 25px -5px rgba(239,68,68,0.1);">
<summary style="font-weight:900; color:#991b1b; cursor:pointer; font-size:1.25em; outline:none; font-family:'Inter', sans-serif; list-style:none; display:flex; align-items:center; gap:12px; transition:all 0.3s;">
  <div style="background:#ef4444; color:white; width:32px; height:32px; border-radius:10px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(239,68,68,0.3);">D</div>
  <span>VI KHUẨN GRAM DƯƠNG (Nhấp để xem)</span>
</summary>
<div style="margin-top:20px; font-size:0.95em; line-height:1.6; color:#450a0a;">

<div style="background: linear-gradient(135deg, #fff1f2 0%, #ffffff 100%); padding: 18px; border-radius: 18px; border: 1px solid #fecdd3; margin-bottom: 12px; position:relative;">
<div style="position:absolute; top:-10px; left:20px; background:#d32f2f; color:white; font-family:'Oswald', sans-serif; font-size:0.9em; padding:2px 10px; border-radius:20px; font-weight:900;">01</div>
<b style="font-size:1.1em; color:#b71c1c; font-family:'Montserrat', sans-serif; display:block; margin-bottom:8px;">Tụ cầu (Staphylococcus aureus, CoNS)</b>
<span style="color:#f43f5e; font-weight:900; font-family:'JetBrains Mono', monospace; font-size:0.9em; text-transform:uppercase;">[Hình thể]:</span> <span style="font-family:'Inter', sans-serif; font-weight:500; color:#475569;">Cầu khuẩn xếp đám (chùm nho). Coagulase (+): Tụ cầu vàng.</span><br>
<span style="color:#f43f5e; font-weight:900; font-family:'JetBrains Mono', monospace; font-size:0.9em; text-transform:uppercase;">[Lâm sàng]:</span> <span style="font-family:'Inter', sans-serif; font-weight:500; color:#475569;">Mụn nhọt, áp xe, cốt tủy viêm, nhiễm trùng thiết bị y tế (biofilm).</span>
</div>

<div style="background: linear-gradient(135deg, #fdf4ff 0%, #ffffff 100%); padding: 18px; border-radius: 18px; border: 1px solid #f5d0fe; margin-bottom: 12px; position:relative;">
<div style="position:absolute; top:-10px; left:20px; background:#9c27b0; color:white; font-family:'Oswald', sans-serif; font-size:0.9em; padding:2px 10px; border-radius:20px; font-weight:900;">02</div>
<b style="font-size:1.1em; color:#4a148c; font-family:'Montserrat', sans-serif; display:block; margin-bottom:8px;">Liên cầu & Tràng cầu (Strepto, Enterococcus)</b>
<span style="color:#a855f7; font-weight:900; font-family:'JetBrains Mono', monospace; font-size:0.9em; text-transform:uppercase;">[Hình thể]:</span> <span style="font-family:'Inter', sans-serif; font-weight:500; color:#475569;">Cầu khuẩn xếp chuỗi. Tan huyết Beta: Nhóm A (pyogenes), B (agalactiae).</span><br>
<span style="color:#a855f7; font-weight:900; font-family:'JetBrains Mono', monospace; font-size:0.9em; text-transform:uppercase;">[Lâm sàng]:</span> <span style="font-family:'Inter', sans-serif; font-weight:500; color:#475569;">Viêm họng, sốt thấp khớp, viêm màng não sơ sinh (nhóm B).</span>
</div>

<div style="background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%); padding: 18px; border-radius: 18px; border: 1px solid #dcfce7; margin-bottom: 0; position:relative;">
<div style="position:absolute; top:-10px; left:20px; background:#16a34a; color:white; font-family:'Oswald', sans-serif; font-size:0.9em; padding:2px 10px; border-radius:20px; font-weight:900;">03</div>
<b style="font-size:1.1em; color:#14532d; font-family:'Montserrat', sans-serif; display:block; margin-bottom:8px;">Trực khuẩn Gram Dương (Bacillus, Clostridium...)</b>
<span style="color:#22c55e; font-weight:900; font-family:'JetBrains Mono', monospace; font-size:0.9em; text-transform:uppercase;">[Hình thể]:</span> <span style="font-family:'Inter', sans-serif; font-weight:500; color:#475569;">Gram (+), sinh nha bào. Clostridium: yếm khí tuyệt đối.</span><br>
<span style="color:#22c55e; font-weight:900; font-family:'JetBrains Mono', monospace; font-size:0.9em; text-transform:uppercase;">[Lâm sàng]:</span> <span style="font-family:'Inter', sans-serif; font-weight:500; color:#475569;">Bạch hầu, uốn ván, than, viêm đại tràng giả mạc.</span>
</div>

</div>
</details>`,
      decrease: "• VI KHUẨN KHÔNG MỌC: Không phát hiện vi khuẩn mọc sau thời gian ủ bệnh tiêu chuẩn. (Lưu ý: Có thể do lấy mẫu sai quy trình, bệnh nhân đang dùng kháng sinh, hoặc tác nhân là loại khó mọc/kỵ khí/virus cần phương pháp Sinh học phân tử)."
    }
  },
  {
    name: "Vi khuẩn kháng thuốc hệ thống tự động (Kháng sinh đồ MIC)", 
    group: "Vi sinh", 
    time: "3 - 5 ngày", 
    ref: "Không áp dụng", 
    alert: "Vũ khí tối thượng giúp giảm thiểu đề kháng kháng sinh (AMR).",
    concept: "Thử nghiệm Kháng sinh đồ (AST) tự động hoặc MIC để xác định Nồng độ ức chế tối thiểu, qua đó đánh giá mức độ Nhạy cảm (S), Trung gian (I) hoặc Đề kháng (R) của vi khuẩn theo chuẩn CLSI/EUCAST.",
    indication: "Cung cấp bằng chứng cho bác sĩ lâm sàng lựa chọn kháng sinh đúng loại, đúng liều lượng, giúp điều trị thành công và hạn chế kháng thuốc.",
    pathologicalMeaning: {
      increase: `• DƯƠNG TÍNH: Có vi khuẩn. Chi tiết biện luận Kháng sinh đồ từ dữ liệu mới nhất:

<details style="margin-top:12px; background:linear-gradient(135deg, #f0f7ff 0%, #e0efff 100%); padding:20px; border-radius:24px; border:2px solid #3b82f6; box-shadow:0 10px 25px -5px rgba(59,130,246,0.1);">
<summary style="font-weight:900; color:#1e40af; cursor:pointer; font-size:1.25em; outline:none; font-family:'Inter', sans-serif; list-style:none; display:flex; align-items:center; gap:12px; transition:all 0.3s;">
  <div style="background:#3b82f6; color:white; width:32px; height:32px; border-radius:10px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(59,130,246,0.3);">Â</div>
  <span>VI KHUẨN GRAM ÂM (Nhấp để xem)</span>
</summary>
<div style="margin-top:20px; font-size:0.95em; line-height:1.6; color:#1e293b;">

<div style="background: linear-gradient(90deg, #e3f2fd 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #2196f3; margin-bottom: 8px;">
<span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#1976d2; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(33,150,243,0.5); text-transform:uppercase; margin-right:10px;">1.</span>
<b style="font-size:1.15em; color:#0d47a1; font-family:'Montserrat', sans-serif;">Trực khuẩn ruột lên men Lactose (E. coli, Klebsiella spp., Enterobacter, Citrobacter)</b><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">💊 Ampicillin, Cefotaxime, Ceftazidime, Ciprofloxacin, Ertapenem, Imipenem, Meropenem, Pip/Tazo, TMP/SMX.</span><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý lâm sàng]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">⚠️ Tỷ lệ tiết men Beta-lactamase phổ rộng (ESBL) tại VN rất cao. Nếu sinh ESBL, các thuốc Penicillin và Cephalosporin đều mất hiệu lực. Cần theo dõi sát các chủng kháng nhóm Carbapenem (CRE). Klebsiella kháng tự nhiên với Ampicillin.</span>
</div>

<div style="background: linear-gradient(90deg, #f1f8e9 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #4caf50; margin-bottom: 8px;">
<span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#388e3c; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(76,175,80,0.5); text-transform:uppercase; margin-right:10px;">2.</span>
<b style="font-size:1.15em; color:#1b5e20; font-family:'Montserrat', sans-serif;">Trực khuẩn ruột KHÔNG lên men Lactose (Proteus spp., Morganella, Providencia, Serratia)</b><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">💊 Tương tự nhóm trên: Cefotaxime, Ciprofloxacin, Ertapenem, Meropenem, Aminoglycoside.</span><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý lâm sàng]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">⚠️ P. vulgaris kháng tự nhiên với Ampicillin, Cefuroxime. Serratia kháng tự nhiên với Ampicillin, Macrolide, và Cephalosporin thế hệ 1, 2.</span>
</div>

<div style="background: linear-gradient(90deg, #fff3e0 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #ff9800; margin-bottom: 8px;">
<span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#f57c00; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(255,152,0,0.5); text-transform:uppercase; margin-right:10px;">3.</span>
<b style="font-size:1.15em; color:#e65100; font-family:'Montserrat', sans-serif;">Trực khuẩn ruột Gây bệnh chuyên biệt (Salmonella, Shigella)</b><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">💊 Cefotaxime, Ceftriaxone, Ciprofloxacin, Meropenem, TMP/SMX.</span><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý lâm sàng]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">⚠️ Nhóm Aminoglycoside (như Gentamicin) có thể cho kết quả "Nhạy cảm" (S) in vitro trên máy nhưng KHÔNG có tác dụng in vivo. Tuyệt đối không dùng lâm sàng.</span>
</div>

<div style="background: linear-gradient(90deg, #e0f2f1 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #009688; margin-bottom: 8px;">
<span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#00796b; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(0,150,136,0.5); text-transform:uppercase; margin-right:10px;">4.</span>
<b style="font-size:1.15em; color:#004d40; font-family:'Montserrat', sans-serif;">Nhóm Pseudomonas (P. aeruginosa - Trực khuẩn mủ xanh)</b><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">💊 Ceftazidime, Cefepime, Ciprofloxacin, Gentamicin, Imipenem, Meropenem, Pip/Tazo, Colistin.</span><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý lâm sàng]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">⚠️ Đa kháng thuốc tự nhiên rất cao. KHÔNG dùng Ertapenem, Ampicillin, Cefotaxime, Tigecycline vì vi khuẩn này có gen kháng bẩm sinh.</span>
</div>

<div style="background: linear-gradient(90deg, #ede7f6 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #673ab7; margin-bottom: 8px;">
<span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#512da8; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(103,58,183,0.5); text-transform:uppercase; margin-right:10px;">5.</span>
<b style="font-size:1.15em; color:#311b92; font-family:'Montserrat', sans-serif;">Nhóm Acinetobacter (A. baumannii, A. lwoffii)</b><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">💊 Cefotaxime, Ciprofloxacin, Imipenem, Meropenem, Pip/Tazo, Colistin.</span><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý lâm sàng]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">⚠️ Đa kháng thuốc (MDR) cực kỳ nghiêm trọng, thách thức lớn cho hồi sức tích cực. Không có chỉ định thử nghiệm Ertapenem.</span>
</div>

<div style="background: linear-gradient(90deg, #fbe9e7 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #ff5722; margin-bottom: 8px;">
<span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#e64a19; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(255,87,34,0.5); text-transform:uppercase; margin-right:10px;">6.</span>
<b style="font-size:1.15em; color:#bf360c; font-family:'Montserrat', sans-serif;">Burkholderia & Stenotrophomonas</b><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">💊 Ceftazidime, TMP/SMX (Bactrim), Levofloxacin.</span><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý lâm sàng]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">⚠️ S. maltophilia kháng tự nhiên với nhóm Carbapenem. B. cepacia kháng tự nhiên với Aminoglycoside.</span>
</div>

<div style="background: linear-gradient(90deg, #fffde7 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #fbc02d; margin-bottom: 8px;">
<span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#f9a825; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(251,192,45,0.5); text-transform:uppercase; margin-right:10px;">7.</span>
<b style="font-size:1.15em; color:#f57f17; font-family:'Montserrat', sans-serif;">Phẩy khuẩn & Ưa ẩm (Vibrio cholerae, Aeromonas, Campylobacter)</b><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">💊 Ciprofloxacin, Meropenem, Tetracycline, Macrolide (tuỳ loài).</span><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý lâm sàng]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">⚠️ Tiêu chảy do Campylobacter ưu tiên dùng Macrolide. Aeromonas thường kháng tự nhiên Ampicillin.</span>
</div>

<div style="background: linear-gradient(90deg, #e8f5e9 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #43a047; margin-bottom: 0px;">
<span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#2e7d32; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(67,160,71,0.5); text-transform:uppercase; margin-right:10px;">8.</span>
<b style="font-size:1.15em; color:#1b5e20; font-family:'Montserrat', sans-serif;">Neisseria & Moraxella (Cầu khuẩn Gram Âm)</b><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">💊 Thường không dùng thẻ tự động chuẩn, ưu tiên xác định MIC bằng dải giấy (E-test). Thuốc: Ceftriaxone, Ciprofloxacin.</span><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý lâm sàng]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">⚠️ Lậu cầu (N. gonorrhoeae) đề kháng cao với Penicillin và Tetracycline do thay đổi protein gắn Penicillin (PBP) và đột biến gen kháng thuốc.</span>
</div>
</div>
</details>

<details style="margin-top:12px; background:linear-gradient(135deg, #fff5f5 0%, #ffe0e0 100%); padding:20px; border-radius:24px; border:2px solid #ef4444; box-shadow:0 10px 25px -5px rgba(239,68,68,0.1);">
<summary style="font-weight:900; color:#991b1b; cursor:pointer; font-size:1.25em; outline:none; font-family:'Inter', sans-serif; list-style:none; display:flex; align-items:center; gap:12px; transition:all 0.3s;">
  <div style="background:#ef4444; color:white; width:32px; height:32px; border-radius:10px; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(239,68,68,0.3);">D</div>
  <span>VI KHUẨN GRAM DƯƠNG (Nhấp để xem)</span>
</summary>
<div style="margin-top:20px; font-size:0.95em; line-height:1.6; color:#450a0a;">

<div style="background: linear-gradient(90deg, #ffebee 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #f44336; margin-bottom: 8px;">
<span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#d32f2f; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(244,67,54,0.5); text-transform:uppercase; margin-right:10px;">1.</span>
<b style="font-size:1.15em; color:#b71c1c; font-family:'Montserrat', sans-serif;">Tụ cầu vàng (Staphylococcus aureus)</b><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">💊 Penicillin, Oxacillin, Ciprofloxacin, Clindamycin, Linezolid, Vancomycin, TMP/SMX.</span><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý lâm sàng]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">⚠️ Chủng MRSA (Tụ cầu vàng kháng Methicillin) cực kì nguy hiểm do đột biến gen mecA (sinh PBP2a). Kháng lại toàn bộ họ Beta-lactam. Cứu cánh là Vancomycin, Linezolid hoặc Daptomycin. Hiện đã xuất hiện báo cáo VRSA (kháng cả Vancomycin).</span>
</div>

<div style="background: linear-gradient(90deg, #f3e5f5 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #9c27b0; margin-bottom: 8px;">
<span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#7b1fa2; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(156,39,176,0.5); text-transform:uppercase; margin-right:10px;">2.</span>
<b style="font-size:1.15em; color:#4a148c; font-family:'Montserrat', sans-serif;">Nhóm Tụ cầu Coagulase âm tính (CoNS)</b><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">💊 Tương tự S. aureus: Ciprofloxacin, Clindamycin, Linezolid, Oxacillin, Vancomycin.</span><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý lâm sàng]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">⚠️ Lớp màng sinh học (biofilm) làm giảm nghiêm trọng khả năng khuếch tán của kháng sinh in vivo. Phổ biến tình trạng kháng Methicillin (MRSE).</span>
</div>

<div style="background: linear-gradient(90deg, #e1f5fe 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #03a9f4; margin-bottom: 8px;">
<span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#0288d1; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(3,169,244,0.5); text-transform:uppercase; margin-right:10px;">3.</span>
<b style="font-size:1.15em; color:#01579b; font-family:'Montserrat', sans-serif;">Tràng cầu khuẩn (Enterococcus spp.)</b><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">💊 Ampicillin, Linezolid, Nitrofurantoin, Vancomycin. Thử nghiệm Gentamicin nồng độ cao (HLG).</span><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý lâm sàng]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">⚠️ Kháng tự nhiên với Cephalosporin. Chủng VRE (kháng Vancomycin do thay thế nhóm D-ala-D-ala thành D-ala-D-lac) đang gia tăng. Buộc phải đổi sang Linezolid, Daptomycin.</span>
</div>

<div style="background: linear-gradient(90deg, #f1f8e9 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #8bc34a; margin-bottom: 8px;">
<span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#689f38; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(139,195,74,0.5); text-transform:uppercase; margin-right:10px;">4.</span>
<b style="font-size:1.15em; color:#33691e; font-family:'Montserrat', sans-serif;">Liên cầu khuẩn (Strep Nhóm A & B)</b><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">💊 Ampicillin, Penicillin, Vancomycin, Ceftriaxone.</span><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý lâm sàng]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">⚠️ Vẫn giữ được độ nhạy cảm tự nhiên rất tốt với Penicillin G. Cần cảnh giác với hiện tượng kháng Macrolide.</span>
</div>

<div style="background: linear-gradient(90deg, #fffde7 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #fdd835; margin-bottom: 8px;">
<span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#fbc02d; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(253,216,53,0.5); text-transform:uppercase; margin-right:10px;">5.</span>
<b style="font-size:1.15em; color:#f57f17; font-family:'Montserrat', sans-serif;">Phế cầu & Liên cầu Viridans (S. pneumoniae)</b><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">💊 Ceftriaxone, Erythromycin, Levofloxacin, Vancomycin, Penicillin (ưu tiên xác định MIC bằng E-test).</span><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý lâm sàng]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">⚠️ Đang gia tăng đề kháng với Penicillin (thay đổi PBP) và Macrolide (Erythromycin/Azithromycin). Bác sĩ phải dựa vào MIC cụ thể để điều chỉnh liều cao.</span>
</div>

<div style="background: linear-gradient(90deg, #e0f2f1 0%, #ffffff 100%); padding: 12px; border-radius: 10px; border-left: 6px solid #00897b; margin-bottom: 0px;">
<span style="font-family:'Oswald', sans-serif; font-size:1.2em; font-weight:900; color:#fff; background:#009688; padding:3px 12px; border-radius:6px; box-shadow: 0 0 10px rgba(0,150,136,0.5); text-transform:uppercase; margin-right:10px;">6.</span>
<b style="font-size:1.15em; color:#00695c; font-family:'Montserrat', sans-serif;">Trực khuẩn Gram dương (Listeria, Bacillus, Clostridium)</b><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Kháng sinh chỉ định]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">💊 Ampicillin, Metronidazole, Vancomycin, Fidaxomicin, Ciprofloxacin.</span><br>
<span style="color:#000; background:#ccff00; font-weight:900; font-family:'Courier New', Courier, monospace; font-size:1.1em; padding:1px 5px; border-radius:3px; box-shadow: 0 0 5px #ccff00;">[Lưu ý lâm sàng]:</span> <span style="font-family:'Plus Jakarta Sans', sans-serif; font-weight:600; font-size:1.05em; color:#2c3e50;">⚠️ L. monocytogenes kháng tự nhiên với Cephalosporin, nên viêm màng não phải phối hợp Ampicillin. Viêm đại tràng do C. difficile chỉ được dùng Vancomycin (uống) hoặc Fidaxomicin, Metronidazole.</span>
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
    "purpose": "Đánh giá và chẩn đoán mức độ suy tim, kiểm tra xem cơ tim có bị suy yếu hay phải làm việc quá sức không.",
    "when_to_do": "Khi bạn thấy khó thở, mệt mỏi nhiều, sưng phù chân hoặc nghi ngờ mắc bệnh tim cấp tính/mạn tính.",
    "how_it_works": "Đo một loại chất đạm do tâm thất của tim tiết ra khi cơ tim bị căng giãn, giúp phản ánh trung thực áp lực mà tim đang phải chịu đựng.",
    "result_meaning": "Bình thường: Tim khỏe, loại trừ được nguyên nhân khó thở do tim. Cao: Tim đang bị suy hoặc chịu áp lực rất lớn, mức độ tăng tỷ lệ thuận với độ nặng của bệnh.",
    "real_life_example": "Một bác lớn tuổi hay bị hụt hơi khi leo cầu thang, đi khám thử máu thấy chỉ số này cao, bác sĩ kết luận bị suy tim thay vì các bệnh lý về phổi.",
    "note": "Rất quan trọng trong phòng cấp cứu để phân biệt nhanh người bệnh khó thở do tim hay do phổi.",
    "advanced_knowledge": "Được tích hợp trên thiết bị xét nghiệm tại chỗ (POCT) cầm tay, cho phép phân tích máu và trả kết quả chỉ sau 12 phút ngay tại giường bệnh [1]. Dữ liệu sau đó được hệ thống LAB AI Agent tự động phân tích để cảnh báo sớm [2].",
    "deep_knowledge": "So với BNP thông thường, NT-ProBNP là đoạn protein không có hoạt tính sinh học nhưng có thời gian bán hủy dài hơn, giúp việc đo lường nồng độ trong máu ổn định và phản ánh chính xác tình trạng căng trướng cơ tim trong khoảng thời gian dài hơn.",
    "patient_advice": "Nếu bạn đang điều trị suy tim, hãy theo dõi biểu đồ NT-ProBNP qua các lần tái khám. Sự sụt giảm của chỉ số này là minh chứng rõ ràng nhất cho thấy thuốc điều trị đang phát huy tác dụng."
  },
  "Troponin I": {
    "name": "Troponin I (hoặc hs-Troponin I)",
    "purpose": "Dấu ấn sinh học đặc hiệu và nhạy bén nhất để phát hiện nhanh tình trạng nhồi máu cơ tim (hoại tử cơ tim).",
    "when_to_do": "Khi có cơn đột ngột đau thắt ngực dữ dội, cơn đau lan ra cánh tay trái, lên hàm hoặc sau lưng kèm vã mồ hôi, khó thở.",
    "how_it_works": "Tìm kiếm phức hợp protein Troponin đặc hiệu. Bình thường chúng nằm bên trong tế bào cơ tim, chỉ khi tế bào cơ tim thiếu máu nuôi và chết đi, chúng mới phá vỡ màng tế bào để tràn vào dòng máu.",
    "result_meaning": "Bình thường: Không có tổn thương cơ tim cấp. Cao: Đang bị nhồi máu cơ tim, cơ tim đang hoại tử, vô cùng nguy hiểm.",
    "real_life_example": "Một người đang ngồi bỗng ôm ngực ngã gục, vào viện thử Troponin I tăng vọt, hệ thống báo động đỏ được kích hoạt lập tức để đưa đi can thiệp mạch vành.",
    "note": "Rất quan trọng: Bệnh nhân dùng thực phẩm chức năng chứa Biotin (Vitamin B7) liều lượng cao có thể làm kết quả Troponin bị thấp giả tạo, làm bỏ sót chẩn đoán nhồi máu cơ tim [3].",
    "advanced_knowledge": "Công nghệ xét nghiệm Troponin siêu nhạy (hs-cTn) kết hợp thuật toán AI hiện nay cho phép loại trừ hoặc khẳng định nhồi máu cơ tim ngay trong phác đồ 1 giờ đầu tiên, thay vì phải chờ đợi 3-6 giờ như các thập kỷ trước.",
    "deep_knowledge": "Cơ quan Quản lý Dược phẩm và Thực phẩm Hoa Kỳ (FDA) đã cảnh báo nồng độ Biotin bổ sung > 0.03mg/ngày sẽ can thiệp vào cầu nối streptavidin trong công nghệ xét nghiệm miễn dịch, gây âm tính giả đối với xét nghiệm Troponin [3, 9, 10].",
    "patient_advice": "Bạn cần ngưng uống các viên bổ sung làm đẹp da, tóc, móng chứa Biotin liều cao ít nhất 72 giờ trước khi đi khám sức khỏe. Trong trường hợp cấp cứu, hãy chủ động báo cho bác sĩ nếu bạn đang dùng Biotin [9]."
  },
  "CK-MB": {
    "name": "CK-MB",
    "purpose": "Đánh giá mức độ tổn thương của cơ tim, đặc biệt hữu ích trong việc phát hiện nhồi máu cơ tim tái phát.",
    "when_to_do": "Khi có dấu hiệu đau ngực, nghi ngờ viêm cơ tim, hoặc khi bệnh nhân vừa trải qua một đợt nhồi máu cơ tim nay lại xuất hiện cơn đau ngực mới.",
    "how_it_works": "Đo nồng độ isoenzyme CK-MB tập trung chủ yếu ở cơ tim. Khi cơ tim tổn thương, men này giải phóng ồ ạt vào máu nhưng cũng biến mất rất nhanh.",
    "result_meaning": "Bình thường: Khối cơ tim ổn định. Cao: Cơ tim đang bị viêm hoặc hoại tử trong khoảng thời gian rất gần.",
    "real_life_example": "Một bệnh nhân vừa được đặt stent mạch vành 3 ngày trước lại kêu tức ngực. Bác sĩ đo CK-MB thấy tăng vọt trở lại, xác định ngay bệnh nhân bị nhồi máu cơ tim tái phát.",
    "note": "Do Troponin I tồn tại trong máu rất lâu (lên đến 14 ngày), CK-MB (chỉ tồn tại 48-72 giờ) trở thành thước đo hoàn hảo để bác sĩ nhận biết người bệnh có đang bị nhồi máu cơ tim lần thứ 2 hay không.",
    "advanced_knowledge": "Hệ thống tự động duyệt kết quả (autoverification) tại các phòng xét nghiệm hiện đại tự động so sánh động học giữa CK-MB và Troponin, hỗ trợ phân loại tổn thương cơ tim cấp cực kỳ nhanh chóng và chính xác [2].",
    "deep_knowledge": "Hoạt động thể chất gắng sức hoặc các bài tập cường độ cao ngay trước khi lấy máu có thể làm thay đổi tạm thời men cơ (CK toàn phần) [7]. Do đó, tỷ lệ phần trăm giữa CK-MB và CK toàn phần thường được dùng để phân biệt tổn thương này đến từ tim hay từ cơ bắp thông thường.",
    "patient_advice": "Hãy tránh vận động thể lực cường độ cực cao (như chạy marathon, nâng tạ nặng) ít nhất 24 giờ trước khi thực hiện xét nghiệm này để tránh kết quả bị dương tính giả [7]."
  },
  "Bộ mỡ máu": {
    "name": "Bộ mỡ máu chuyên sâu (Cholesterol, Triglyceride, LDL-C, HDL-C và Lipoprotein(a))",
    "purpose": "Tầm soát toàn diện tình trạng rối loạn lipid máu, đánh giá rủi ro tạo mảng xơ vữa để phòng ngừa nhồi máu cơ tim và đột quỵ [11].",
    "when_to_do": "Khám sức khỏe tổng quát định kỳ (từ 20 tuổi nên làm 5 năm/lần), hoặc ở người béo phì, cao huyết áp, hút thuốc lá, đái tháo đường [11, 12].",
    "how_it_works": "Đo 4 chỉ số cơ bản: mỡ toàn phần, mỡ xấu LDL, mỡ tốt HDL, chất béo trung tính Triglyceride. Hiện nay y học kết hợp thêm chỉ số đặc biệt Lipoprotein (a) - ký hiệu là Lp(a) [5].",
    "result_meaning": "Bình thường: Mạch máu thông thoáng. Cao: Mỡ đóng cặn gây xơ vữa, hẹp mạch máu, nguy cơ thuyên tắc tĩnh mạch và động mạch vành rất lớn [13].",
    "real_life_example": "Một người đàn ông gầy gò, ăn kiêng tốt nhưng vẫn bị nhồi máu cơ tim. Khi làm bộ mỡ máu chuyên sâu phát hiện chỉ số Lipoprotein (a) cao đột biến do di truyền, giải mã nguyên nhân gây bệnh.",
    "note": "Với xét nghiệm mỡ máu, nồng độ Triglyceride rất dễ bị ảnh hưởng bởi bữa ăn gần nhất. Do đó, nhịn ăn đúng cách là nguyên tắc vàng để kết quả chính xác.",
    "advanced_knowledge": "Áp dụng trí tuệ nhân tạo (AI) để tổng hợp các dữ liệu từ bộ mỡ máu, từ đó tính toán và mô phỏng tỷ lệ % nguy cơ đột quỵ hoặc nhồi máu cơ tim của người bệnh trong 10 năm tới [2].",
    "deep_knowledge": "Lipoprotein (a) có cấu trúc đặc biệt vừa dễ tạo mảng xơ vữa, vừa dễ làm hình thành cục máu đông [5]. Ở những bệnh nhân đái tháo đường type 2, nguy cơ biến cố tim mạch luôn ở mức cao, vì thế các khuyến cáo y khoa luôn yêu cầu sử dụng thuốc nhóm Statin như một nền tảng bắt buộc để kiểm soát mỡ máu lâu dài [14].",
    "patient_advice": "Bạn bắt buộc phải nhịn ăn từ 9 đến 12 tiếng, không hút thuốc và tránh sử dụng rượu bia ít nhất 24 giờ trước khi xét nghiệm để đảm bảo độ chính xác tuyệt đối [8]. Nếu gia đình có tiền sử bệnh tim mạch sớm, hãy chủ động đề nghị bác sĩ kiểm tra thêm chỉ số Lipoprotein (a) [15, 16]."
  },
  "PT": {
    "name": "PT / INR (Thời gian Prothrombin)",
    "purpose": "Đánh giá toàn diện khả năng đông máu theo con đường ngoại sinh và là chỉ số sống còn để theo dõi bệnh nhân dùng thuốc chống đông máu kháng Vitamin K.",
    "when_to_do": "Kiểm tra trước khi phẫu thuật, nhổ răng, người có biểu hiện chảy máu cam/chân răng liên tục, hoặc lịch khám định kỳ hàng tháng của người uống thuốc loãng máu.",
    "how_it_works": "Bác sĩ thêm hóa chất (thromboplastin) vào mẫu huyết tương và đo xem mất bao nhiêu giây để hình thành cục máu đông, từ đó quy đổi ra chỉ số quốc tế INR nhằm tạo sự chuẩn hóa.",
    "result_meaning": "Bình thường (INR ~1.0): Khả năng cầm máu tốt. Kéo dài (INR > 3.0): Máu bị loãng quá mức, rủi ro xuất huyết không cầm được (như chảy máu não, xuất huyết tiêu hóa) rất cao.",
    "real_life_example": "Một bệnh nhân rung nhĩ đang dùng thuốc chống đông đi tái khám đo INR lên đến 4.5. Bác sĩ lập tức phải giảm liều thuốc loãng máu để cứu bệnh nhân khỏi rủi ro chảy máu não.",
    "note": "Đặc biệt quan trọng với người thay van tim cơ học hoặc từng bị huyết khối tĩnh mạch sâu.",
    "advanced_knowledge": "Công nghệ xét nghiệm tại chỗ (POCT) hiện nay cung cấp các thiết bị cầm tay nhỏ gọn, cho phép bệnh nhân chích máu ngón tay tự đo INR tại nhà y hệt như đo đường huyết [17], hỗ trợ kiểm soát bệnh tình cực kỳ hiệu quả mà không cần đến bệnh viện.",
    "deep_knowledge": "Vì gan là nhà máy sản xuất ra phần lớn các yếu tố đông máu tham gia vào chu trình PT (yếu tố II, VII, IX, X), sự kéo dài bất thường của xét nghiệm PT cũng là một dấu hiệu cảnh báo tình trạng suy giảm chức năng gan cấp tính hoặc xơ gan nặng.",
    "patient_advice": "Mẫu máu cho xét nghiệm PT/INR bắt buộc phải được thu thập vào ống nghiệm có nắp màu xanh da trời (chứa chất chống đông Natri Citrate) và nhân viên y tế cần đảo ngược ống 3-4 lần [6]. Nếu bạn uống thuốc kháng Vitamin K, hãy giữ thói quen ăn rau xanh (như súp lơ, rau bina) ổn định, không ăn thay đổi lượng ồ ạt để tránh làm chỉ số INR nhảy vọt."
  },
  "APTT": {
    "name": "APTT (Thời gian Thromboplastin một phần hoạt hóa)",
    "purpose": "Đánh giá toàn diện hệ thống đông máu bên trong cơ thể (con đường nội sinh) và theo dõi bệnh nhân dùng thuốc chống đông.",
    "when_to_do": "Khám tiền phẫu thuật, hay bị bầm tím trên da mà không rõ lý do đụng dập, chảy máu khó cầm, hoặc đang điều trị bằng thuốc chống đông Heparin.",
    "how_it_works": "Đo thời gian đông máu theo con đường nội sinh để tìm xem cơ thể có bị thiếu hụt hoặc bất thường các yếu tố đông máu (như yếu tố VIII, IX, XI, XII) hay không.",
    "result_meaning": "Bình thường: Hệ thống đông máu hoạt động ổn định. Kéo dài: Cảnh báo bệnh ưa chảy máu (Hemophilia), bệnh gan nặng, hoặc cơ thể đang có kháng thể ức chế đông máu.",
    "real_life_example": "Một cậu bé chỉ sờ nhẹ vào tay cũng bị bầm tím mảng lớn, đi xét nghiệm APTT dài bất thường, bác sĩ phát hiện bệnh máu khó đông di truyền (Hemophilia).",
    "note": "Luôn được bác sĩ chỉ định đi kèm một cặp với xét nghiệm PT để có bức tranh toàn cảnh về hệ thống đông máu.",
    "advanced_knowledge": "Các hệ thống phân tích đông máu tự động hiện nay sử dụng công nghệ quang học đa bước sóng kết hợp AI giúp theo dõi sự thay đổi độ đục của cục máu đông theo thời gian thực (real-time clot waveform analysis), phát hiện sớm các rối loạn đông máu vi mô nhất.",
    "deep_knowledge": "Mẫu máu cho xét nghiệm APTT bắt buộc phải được lấy vào ống nghiệm nắp màu xanh da trời chứa chất chống đông Natri Citrate và nhân viên y tế phải đảo ngược ống đúng 3-4 lần ngay sau khi lấy [1]. Nếu APTT kéo dài bất thường, các phòng lab sẽ tự động thực hiện thử nghiệm trộn (Mixing Study) để phân biệt do thiếu yếu tố đông máu di truyền hay do cơ thể sinh kháng thể kháng đông tự miễn.",
    "patient_advice": "Hãy thông báo cho bác sĩ nếu bạn đang sử dụng các loại thực phẩm chức năng như dầu cá (Omega-3), bạch quả (Ginkgo Biloba) hoặc liều cao Vitamin E, vì chúng có thể ảnh hưởng đến quá trình cầm máu thực tế của cơ thể dù chỉ số APTT có thể không thay đổi nhiều."
  },
  "D-Dimer": {
    "name": "D-Dimer",
    "purpose": "Phát hiện nhanh sự hiện diện của cục máu đông đang hình thành và tan rã bất thường trong lòng mạch máu, giúp loại trừ các bệnh lý huyết khối.",
    "when_to_do": "Khi tự nhiên sưng to và đau nhức một bên bắp chân (nghi huyết khối tĩnh mạch sâu), hoặc đau thắt ngực, khó thở dữ dội (nghi tắc mạch phổi).",
    "how_it_works": "Tìm kiếm các mảnh vỡ protein đặc trưng (D-Dimer) được sinh ra khi cơ thể kích hoạt hệ thống tiêu sợi huyết để dọn dẹp và làm tan một cục máu đông.",
    "result_meaning": "Bình thường (Âm tính): Gần như loại trừ 100% khả năng bị huyết khối cấp tính. Tăng cao: Có sự hiện diện của cục máu đông, hoặc đang có phản ứng viêm nhiễm, chấn thương mạnh, phụ nữ có thai.",
    "real_life_example": "Người phụ nữ ngồi máy bay 10 tiếng thấy bắp chân sưng đỏ đau nhức, vào viện thử D-Dimer cao giúp bác sĩ có cơ sở chẩn đoán tắc tĩnh mạch chân và cho siêu âm Doppler xác định.",
    "note": "D-Dimer có độ nhạy cực cao nhưng độ đặc hiệu thấp (tức là có thể tăng trong nhiều bệnh lý khác ngoài huyết khối). Do đó, giá trị lớn nhất của xét nghiệm này là dùng để 'loại trừ' bệnh chứ không phải để 'khẳng định' bệnh.",
    "advanced_knowledge": "Xét nghiệm D-Dimer nay đã được tích hợp vào các thiết bị xét nghiệm tại chỗ (POCT) cầm tay chuyên dụng về tim mạch (như hệ thống cobas h 232). Thiết bị này cho phép bác sĩ cấp cứu thực hiện phân tích và nhận kết quả loại trừ huyết khối tĩnh mạch sâu hoặc tắc mạch phổi chỉ trong vòng 8 phút ngay tại giường bệnh của bệnh nhân [2-4].",
    "deep_knowledge": "Tuổi tác làm D-Dimer tăng một cách tự nhiên. Hiện nay, các phần mềm trí tuệ nhân tạo (như LAB AI Agent [5, 6]) đã tự động thiết lập và áp dụng 'ngưỡng D-Dimer hiệu chỉnh theo tuổi' (Age-adjusted cutoff = Tuổi x 10 µg/L cho người trên 50 tuổi). Điều này giúp giảm đáng kể tỷ lệ báo động giả và các chỉ định chụp CT/siêu âm không cần thiết cho người cao tuổi.",
    "patient_advice": "Nếu bạn có kết quả D-Dimer tăng nhẹ sau khi vừa phẫu thuật, bị chấn thương, mắc bệnh lý viêm nhiễm hoặc đang mang thai, đừng quá hốt hoảng vì đây là phản ứng sinh lý bình thường của cơ thể. Hãy cung cấp đầy đủ thông tin y tế để bác sĩ kết hợp với thang điểm đánh giá lâm sàng nhằm đưa ra kết luận chính xác nhất."
  },
   "AST": {
      "name": "AST (SGOT)",
      "purpose": "Đánh giá tình trạng tổn thương của tế bào gan và một số cơ quan khác như cơ tim, cơ xương.",
      "when_to_do": "Khi khám sức khỏe định kỳ, hoặc có biểu hiện vàng da, mệt mỏi, chán ăn, hoặc đang dùng thuốc có nguy cơ gây độc cho gan.",
      "how_it_works": "Đo lượng men gan AST rò rỉ vào dòng máu khi tế bào gan hoặc tế bào cơ bị phá hủy.",
      "result_meaning": "Bình thường: Gan khỏe. Cao: Gan đang bị tổn thương do viêm, xơ gan, nhồi máu cơ tim hoặc uống nhiều rượu bia [1, 2].",
      "real_life_example": "Một chú hay nhậu nhẹt đi khám thấy men gan AST tăng gấp 3 lần bình thường, báo hiệu gan đang bị tàn phá do cồn.",
      "note": "Vì AST cũng có ở cơ bắp, nên bác sĩ thường cho làm thêm xét nghiệm ALT để biết chính xác là do gan.",
      "advanced_knowledge": "Tích hợp trên các hệ thống sinh hóa tự động thế hệ mới có sử dụng phần mềm LAB AI Agent, giúp tự động cảnh báo mức độ suy gan hoặc tổn thương cơ tim chéo dựa trên tỷ lệ AST/ALT (De Ritis ratio) ngay khi có kết quả [1, 3].",
      "deep_knowledge": "AST không chỉ đặc hiệu cho gan mà còn phân bố nhiều ở cơ tim và cơ vân. Tỷ lệ AST cao hơn ALT thường gợi ý tổn thương gan do rượu, xơ gan, hoặc thậm chí là nhồi máu cơ tim. Ngược lại, ALT cao hơn AST lại đặc trưng hơn cho viêm gan virus hoặc gan nhiễm mỡ [2].",
      "patient_advice": "Tuyệt đối không lạm dụng các thuốc giảm đau chứa Paracetamol, vì ngộ độc Paracetamol là nguyên nhân hàng đầu gây hoại tử tế bào gan cấp tính làm AST/ALT tăng vọt [2]. Hãy báo cho bác sĩ nếu bạn vừa tập thể dục cường độ cao vì có thể làm tăng AST giả tạo do tổn thương cơ bắp."
    },
    "ALT": {
      "name": "ALT (SGPT)",
      "purpose": "Chỉ số nhạy nhất và đặc hiệu nhất để phát hiện tổn thương và viêm tại gan [1].",
      "when_to_do": "Khi có dấu hiệu mệt mỏi, chán ăn sợ mỡ, da dẻ vàng vọt, mắt vàng, hoặc để theo dõi bệnh nhân viêm gan virus B, C.",
      "how_it_works": "Đo nồng độ enzyme ALT chỉ nằm độc quyền bên trong bào tương của tế bào gan, khi tế bào gan vỡ nó sẽ tràn ồ ạt ra máu.",
      "result_meaning": "Bình thường: Lá gan khỏe. Tăng cao: Viêm gan cấp do virus, do ngộ độc thuốc tây hoặc gan nhiễm mỡ.",
      "real_life_example": "Thanh niên tự ý uống liền 10 viên Paracetamol trị sốt, hôm sau thử máu ALT tăng vọt nghìn lần do gan bị ngộ độc phá hủy cấp tính.",
      "note": "Chỉ số ALT càng cao, tế bào gan đang bị chết đi càng nhiều.",
      "advanced_knowledge": "Các thiết bị POCT hiện đại cho phép đo ALT chỉ từ một giọt máu mao mạch, trả kết quả trong vài phút, kết hợp với AI để dự báo rủi ro tiến triển thành xơ gan trong tương lai [3, 4].",
      "deep_knowledge": "ALT đặc hiệu cho tế bào gan hơn AST. Khi tế bào gan bị tổn thương màng, ALT sẽ lập tức rò rỉ ra ngoài. Sự gia tăng ALT đột biến (có thể >1000 U/L) thường do viêm gan virus cấp, thiếu máu cục bộ tại gan hoặc ngộ độc thuốc nghiêm trọng [1, 2].",
      "patient_advice": "Bạn nên thực hiện xét nghiệm vào buổi sáng. Hãy hạn chế sử dụng rượu bia và tuyệt đối không tự ý uống các loại thuốc nam, thuốc bắc không rõ nguồn gốc vì chúng chính là 'sát thủ thầm lặng' gây viêm gan nhiễm độc, tàn phá tế bào gan của bạn."
    },
    "GGT": {
      "name": "GGT (Gamma-Glutamyl Transferase)",
      "purpose": "Đánh giá tình trạng ứ mật và tổn thương gan do lạm dụng bia rượu hoặc độc chất [1].",
      "when_to_do": "Khi cần kiểm tra mức độ tổn thương gan của người nghiện nhậu, hoặc người đau mạn sườn phải nghi sỏi tắc đường mật.",
      "how_it_works": "Đo men GGT, loại men nhạy cảm cực kỳ với cồn và các loại thuốc, thường nằm ở màng tế bào biểu mô ống mật trong gan.",
      "result_meaning": "Bình thường: Đường mật thông thoáng. Cao: Gan đang kiệt quệ vì rượu, hoặc có sỏi/khối u làm kẹt tắc đường mật [5].",
      "real_life_example": "Một bác tài xế nhậu nhẹt liên miên đi khám, các men gan AST/ALT bình thường nhưng GGT tăng vọt, bác sĩ khuyên phải cai rượu ngay lập tức.",
      "note": "GGT tăng rất sớm trước cả khi bệnh nhân cảm thấy có triệu chứng đau ốm do rượu.",
      "advanced_knowledge": "Dữ liệu GGT hiện được AI phân tích chéo cùng với MCV (thể tích hồng cầu) để xác định chính xác người bệnh có đang khai báo trung thực về thói quen uống rượu của mình hay không, từ đó hỗ trợ cai nghiện rượu hiệu quả [1, 3].",
      "deep_knowledge": "GGT là một enzyme màng tế bào tham gia vào chuyển hóa glutathione. Nó cực kỳ nhạy cảm với sự cảm ứng enzyme do rượu và một số loại thuốc (như thuốc chống động kinh). GGT tăng cao kết hợp với ALP (Alkaline Phosphatase) tăng là dấu hiệu kinh điển đặc trưng của tắc mật [1, 5].",
      "patient_advice": "GGT mất khoảng 2-6 tuần để trở về mức bình thường sau khi ngừng uống rượu hoàn toàn. Do đó, cai rượu tuyệt đối là cách duy nhất và hữu hiệu nhất để đưa chỉ số này về ngưỡng an toàn và cứu lấy lá gan."
    },
    "Bilirubin": {
      "name": "Bilirubin (Toàn phần, Trực tiếp, Gián tiếp)",
      "purpose": "Tìm nguyên nhân gây ra chứng vàng da, vàng mắt và phân biệt giữa tắc mật, tổn thương gan hay vỡ hồng cầu (tan máu) [1].",
      "when_to_do": "Khi người lớn tự nhiên vàng da, tiểu sậm màu như nước trà, phân bạc màu, hoặc trẻ sơ sinh bị vàng da nhiều ngày không bớt.",
      "how_it_works": "Đo lượng sắc tố mật màu vàng sinh ra từ xác của hồng cầu bị chết. Gan có nhiệm vụ xử lý (liên hợp) chất này để thải ra ngoài qua đường phân và nước tiểu.",
      "result_meaning": "Bình thường: Gan dọn dẹp rác tốt. Cao: Viêm gan nặng, tắc ống mật (tăng Bilirubin trực tiếp) hoặc bệnh vỡ hồng cầu hàng loạt (tăng Bilirubin gián tiếp) [6].",
      "real_life_example": "Em bé mới sinh 3 ngày người vàng ươm, thử máu Bilirubin gián tiếp quá cao có nguy cơ thấm vào não nên phải đưa đi chiếu đèn ngay.",
      "note": "Bác sĩ sẽ chia Bilirubin ra làm 2 loại (trực tiếp và gián tiếp) để biết chính xác bệnh nằm tại gan (viêm gan), trước gan (tan máu) hay sau gan (tắc mật).",
      "advanced_knowledge": "Các máy phân tích sinh hóa tích hợp công nghệ đo quang phổ đa bước sóng tự động loại trừ nhiễu do tán huyết hoặc mỡ máu cao. Hệ thống cảnh báo LAB AI tự động báo động đỏ khi Bilirubin của trẻ sơ sinh chạm ngưỡng đe dọa tổn thương não [1, 3].",
      "deep_knowledge": "Bilirubin gián tiếp (chưa liên hợp) không tan trong nước và rất độc cho thần kinh, đặc biệt ở trẻ sơ sinh do hàng rào máu não chưa hoàn thiện. Trong khi đó, Bilirubin trực tiếp (đã liên hợp) tan được trong nước; khi ống mật bị tắc, nó sẽ tràn ngược vào máu và bị lọc qua thận, làm nước tiểu có màu vàng sậm [1, 6].",
      "patient_advice": "Mẫu máu đo Bilirubin rất nhạy cảm với ánh sáng. Mẫu sau khi rút bắt buộc phải được nhân viên y tế bọc giấy bạc hoặc dùng ống tối màu để tránh tia UV phá hủy sắc tố làm kết quả bị thấp giả tạo [7]. Bạn nên nhịn ăn từ 4-8 giờ trước khi lấy máu."
    },
    "Albumin": {
      "name": "Albumin",
      "purpose": "Kiểm tra tình trạng suy dinh dưỡng và khả năng 'nhà máy' gan tổng hợp ra các protein quan trọng [1].",
      "when_to_do": "Khi người bệnh bị phù nề tay chân, trướng bụng đầy nước, tiểu ít nhiều bọt, hoặc để đánh giá người bị xơ gan giai đoạn cuối.",
      "how_it_works": "Đo lượng protein Albumin trong máu, chất này giúp tạo áp suất thẩm thấu keo, giữ nước lại trong lòng mạch máu không cho tràn ra ngoài tổ chức.",
      "result_meaning": "Bình thường: Đủ chất đạm, gan khỏe. Thấp: Gan hỏng không tổng hợp được đạm, hoặc thận bị suy/viêm làm đạm lọt ra nước tiểu (hội chứng thận hư) [8].",
      "real_life_example": "Bệnh nhân xơ gan bụng to như cái trống, thử máu thấy Albumin tụt thê thảm làm nước thoát ra ổ bụng, phải truyền chai đạm Albumin đắt tiền để rút nước lại.",
      "note": "Albumin thấp làm nước thoát khỏi mạch máu gây phù toàn thân, chứng tỏ gan đã suy kiệt nặng hoặc màng lọc thận đang bị rò rỉ lớn.",
      "advanced_knowledge": "Phần mềm AI hiện nay theo dõi động học của Albumin kết hợp với chỉ số đông máu (PT/INR) để tự động tính toán điểm số Child-Pugh hoặc MELD, giúp bác sĩ tiên lượng chính xác tỷ lệ sống còn của bệnh nhân xơ gan hoặc chỉ định ghép gan [3, 9].",
      "deep_knowledge": "Gan là cơ quan duy nhất trong cơ thể sản xuất Albumin. Vì thời gian bán hủy của Albumin trong máu khá dài (khoảng 20 ngày), nên sự sụt giảm của nó thường phản ánh một tổn thương mạn tính (như xơ gan hoặc suy dinh dưỡng trường kỳ) chứ ít khi thay đổi ngay lập tức trong viêm gan cấp tính [1, 8].",
      "patient_advice": "Nếu chỉ số Albumin của bạn thấp, đừng chỉ lo truyền đạm tạm thời. Bạn cần phối hợp với bác sĩ để tìm nguyên nhân gốc rễ (do gan không sản xuất được, do thận để lọt mất qua nước tiểu, hay do đường tiêu hóa kém hấp thu) để điều trị tận gốc căn bệnh."
    },
    "Amylase": {
      "name": "Amylase",
      "purpose": "Chẩn đoán nhanh căn bệnh viêm tụy cấp nguy hiểm đe dọa tính mạng.",
      "when_to_do": "Khi tự nhiên đau quặn thắt dữ dội vùng bụng trên rốn, đau lan ra sau lưng, đau gập người lăn lộn sau một bữa nhậu no say hoặc ăn nhiều mỡ.",
      "how_it_works": "Đo enzyme tiêu hóa tinh bột do tuyến tụy (và tuyến nước bọt) tiết ra. Khi tụy bị viêm tấy hoặc tắc nghẽn, men này sẽ ộc vào máu với lượng rất lớn.",
      "result_meaning": "Bình thường: Tuyến tụy an toàn. Tăng rất cao (gấp 3 lần bình thường trở lên): Viêm tụy cấp, cần nhập viện điều trị cấp cứu và nhịn ăn ngay [10].",
      "real_life_example": "Buổi tối đi ăn đồ nướng uống nhiều bia, nửa đêm anh thanh niên ôm bụng rên la, thử máu Amylase tăng gấp 5 lần giúp bác sĩ cấp cứu chẩn đoán ngay viêm tụy cấp.",
      "note": "Amylase cũng có thể tăng khi bị bệnh quai bị (sưng tuyến nước bọt mang tai), thủng dạ dày, hoặc tắc ruột cấp tính [10].",
      "advanced_knowledge": "Công nghệ POCT tiên tiến cho phép đo ngay Amylase và các men tiêu hóa tại phòng cấp cứu, trả kết quả chỉ trong vài phút, giúp bác sĩ có quyết định can thiệp sớm, tránh để viêm tụy cấp tiến triển thành hoại tử tụy [4].",
      "deep_knowledge": "Amylase máu bắt đầu tăng sau 2 đến 12 giờ kể từ khi xuất hiện cơn đau viêm tụy cấp và thường nhanh chóng đào thải qua nước tiểu, trở về bình thường sau 3 đến 5 ngày [10]. Do đó, nếu bệnh nhân đến viện muộn, Amylase có thể đã hạ, lúc này bác sĩ bắt buộc phải dựa vào xét nghiệm Lipase máu.",
      "patient_advice": "Hãy hạn chế rượu bia và tránh các bữa ăn nạp vào quá nhiều dầu mỡ (thịt mỡ, nội tạng động vật) cùng lúc, vì đây là 'mồi lửa' thường gặp nhất kích hoạt các đợt viêm tụy cấp. Tuyệt đối không tự mua thuốc giảm đau uống ở nhà khi bị đau bụng dữ dội mà chưa rõ nguyên nhân."
    },
    "Lipase": {
      "name": "Lipase",
      "purpose": "Chẩn đoán bệnh viêm tụy cấp một cách chính xác, chuyên sâu và đặc hiệu hơn rất nhiều so với Amylase.",
      "when_to_do": "Làm song song với Amylase khi bệnh nhân có cơn đau bụng cấp cứu, đặc biệt có giá trị cao khi bệnh nhân đến viện muộn sau vài ngày đau.",
      "how_it_works": "Đo enzyme tiêu hóa chất béo của tuyến tụy. Khác với Amylase có ở tuyến nước bọt và ruột, Lipase hầu như chỉ được sản xuất độc quyền tại tụy nên độ đặc hiệu chẩn đoán cực kỳ cao.",
      "result_meaning": "Bình thường: Tuyến tụy không viêm. Tăng cao: Khẳng định gần như chắc chắn bệnh nhân bị viêm tụy cấp.",
      "real_life_example": "Người bệnh đau bụng 3 ngày nay mới đi khám, Amylase đã hạ chỉ hơi tăng nhẹ khó kết luận, bác sĩ cho làm thêm xét nghiệm Lipase thấy vẫn tăng cao chót vót, khóa sổ chẩn đoán viêm tụy.",
      "note": "Lipase tồn tại trong dòng máu lâu hơn Amylase (kéo dài tới 8-14 ngày) nên rất hữu ích trong trường hợp bệnh nhân chẩn đoán muộn.",
      "advanced_knowledge": "Hệ thống tự động xác nhận (autoverification) tại các phòng lab trang bị AI sẽ tự động đối chiếu chéo chỉ số Lipase và Triglyceride. Nếu phát hiện Lipase tăng cùng Triglyceride > 1000 mg/dL, AI sẽ gửi cảnh báo khẩn nguyên nhân viêm tụy là do rối loạn mỡ máu cực kỳ nguy hiểm [11, 12].",
      "deep_knowledge": "Hoạt độ Lipase thường tăng gấp 5 đến 10 lần giá trị tham chiếu trong bệnh cảnh viêm tụy cấp. Nhờ tính đặc hiệu cao, Lipase hiện được các hướng dẫn lâm sàng quốc tế (Guidelines) ưu tiên hàng đầu để thay thế hoặc kết hợp với Amylase trong chẩn đoán và theo dõi bệnh viêm tụy [9].",
      "patient_advice": "Nếu bạn từng có tiền sử viêm tụy cấp, hãy nghiêm ngặt tuân thủ chế độ ăn ít chất béo và kiểm tra mỡ máu định kỳ. Khi có chỉ định làm xét nghiệm Lipase, thông thường bác sĩ sẽ yêu cầu bạn nhịn ăn từ 8-12 tiếng trước khi lấy máu."
    },
    "Amoniac": {
      "name": "Amoniac (NH3)",
      "purpose": "Đo nồng độ khí độc ngấm lên não do lá gan đã suy kiệt không còn khả năng thanh lọc.",
      "when_to_do": "Khi người bệnh xơ gan giai đoạn cuối bắt đầu có dấu hiệu lơ mơ, mất phương hướng, ngủ gà ngủ gật, lảm nhảm, tay chân run rẩy vỗ cánh.",
      "how_it_works": "Đo nồng độ NH3 trong máu. Amoniac là khí độc sinh ra từ ruột do vi khuẩn phân hủy protein. Gan khỏe sẽ biến NH3 thành Ure vô hại đào thải qua thận. Khi gan hỏng, NH3 trôi nổi trong máu và ngấm trực tiếp vào não.",
      "result_meaning": "Bình thường: Gan giải độc tốt. Cao: Khí độc bay lên não gây ngộ độc hệ thần kinh trung ương (Hôn mê gan hay Bệnh lý não gan).",
      "real_life_example": "Bác trai bị xơ gan tự nhiên sáng ngủ dậy không nhận ra người nhà, quậy phá, xét nghiệm NH3 cao chót vót, bác sĩ chẩn đoán tiền hôn mê gan, lập tức cho dùng thuốc thụt tháo ruột để tống khí độc.",
      "note": "Mẫu máu rút ra phải được ướp ngay trong đá lạnh và đem đi chạy máy trong vòng 15-20 phút thì chỉ số NH3 mới không bị sai lệch do tăng giả tạo.",
      "advanced_knowledge": "Với sự phát triển của y học chính xác, việc xét nghiệm NH3 được kết hợp với các bài test nhận thức thần kinh bằng AI trên máy tính bảng giúp phát hiện tình trạng bệnh lý não gan tiềm ẩn (minimal hepatic encephalopathy) ngay cả khi người bệnh chưa biểu hiện lú lẫn rõ rệt [3, 13].",
      "deep_knowledge": "Amoniac cực kỳ độc cho các tế bào sao (astrocytes) trong não bộ, khiến chúng bị sưng phồng và gây phù não [13]. Bệnh nhân xơ gan nếu bị chảy máu dạ dày hoặc ăn quá nhiều thịt đỏ sẽ cung cấp nguồn protein khổng lồ cho vi khuẩn ruột lên men, sinh ra lượng lớn NH3 và kích hoạt ngay cơn hôn mê gan cấp tính.",
      "patient_advice": "Đối với bệnh nhân xơ gan nặng, việc đi đại tiện được mỗi ngày (để tống chất thải và vi khuẩn ra ngoài) là mang tính sống còn. Hãy hạn chế ăn đạm động vật nguyên miếng nhiều mỡ, chuyển sang dùng đạm thực vật hoặc các gói đạm chuyên dụng để tránh tạo ra quá nhiều NH3. Tuyệt đối tránh để bị táo bón."
    },
     "Ure": {
      "name": "Ure (Blood Urea Nitrogen - BUN)",
      "purpose": "Đánh giá bước đầu xem thận có đang làm tốt công việc lọc chất thải không và theo dõi mức độ ure huyết.",
      "when_to_do": "Khám sức khỏe tổng quát, sưng phù mí mắt chân tay, đi tiểu rắt tiểu ít, hoặc bệnh nhân đang lọc máu (chạy thận).",
      "how_it_works": "Đo nồng độ Ure, một loại rác thải sinh ra sau khi cơ thể chuyển hóa protein ở gan và được đưa đến đào thải qua màng lọc thận.",
      "result_meaning": "Bình thường: Thận lọc tốt. Cao: Chức năng thận suy giảm, cơ thể bị mất nước, hoặc do chế độ ăn dung nạp quá nhiều đạm.",
      "real_life_example": "Một người ăn chế độ giàu thịt (Keto/Carnivore) tập gym đi khám thấy Ure tăng nhẹ, bác sĩ khuyên uống nhiều nước và đối chiếu thêm Creatinin để loại trừ nguyên nhân bệnh thận.",
      "note": "Vì Ure rất dễ bị ảnh hưởng bởi thức ăn (thịt đỏ) và tình trạng mất nước, nên bác sĩ không bao giờ dùng chỉ số Ure đứng độc lập để kết luận bạn bị suy thận.",
      "advanced_knowledge": "Hệ thống AI phân tích động học Ure kết hợp với điện giải đồ để tự động phân biệt chẩn đoán giữa suy thận cấp trước thận (do thiếu hụt thể tích tuần hoàn) và tổn thương tại thận, trả cảnh báo trực tiếp về máy tính của bác sĩ lâm sàng.",
      "deep_knowledge": "Tỷ lệ BUN/Creatinin (BUN/Creatinine Ratio) thường được các thuật toán y khoa hiện đại tự động tính toán. Nếu tỷ lệ này > 20:1, nguyên nhân Ure tăng thường do giảm dòng máu tưới đến thận (như sốc, mất nước, suy tim) chứ không phải do thận đã bị hỏng.",
      "patient_advice": "Trước khi làm xét nghiệm, hãy duy trì chế độ ăn uống bình thường. Đừng ăn một bữa quá no chứa toàn thịt bò, hải sản hay uống bột Whey protein liều cao vào tối hôm trước vì có thể làm Ure tăng vọt gây báo động giả."
    },
    "Creatinin": {
      "name": "Creatinin (Độ lọc cầu thận eGFR)",
      "purpose": "Chỉ số vàng, quan trọng và phổ biến nhất để chẩn đoán mức độ suy thận, tính toán độ lọc cầu thận (eGFR) để chỉnh liều thuốc.",
      "when_to_do": "Khám định kỳ, trước khi chụp cắt lớp (CT) có tiêm thuốc cản quang, bệnh nhân đang dùng thuốc có độc tính trên thận, hoặc tầm soát biến chứng tiểu đường/cao huyết áp.",
      "how_it_works": "Đo lượng chất thải sinh ra từ sự thoái hóa creatine tự nhiên trong cơ bắp. Chất này hòa vào máu và chỉ được lọc ra ngoài một cách cực kỳ ổn định thông qua cầu thận.",
      "result_meaning": "Bình thường: Quả thận hoàn toàn khỏe mạnh. Cao: Chức năng màng lọc thận suy giảm, cầu thận đang bị tổn thương.",
      "real_life_example": "Cụ ông bị cao huyết áp 10 năm nay không uống thuốc đều, đi xét nghiệm thấy Creatinin tăng gấp đôi, bác sĩ chẩn đoán cụ đã bước sang suy thận mạn giai đoạn 3.",
      "note": "Creatinin máu không đứng một mình mà sẽ được phần mềm xét nghiệm tự động đưa vào công thức toán học để tính ra chỉ số eGFR (thận của bạn mỗi phút lọc được bao nhiêu ml máu).",
      "advanced_knowledge": "Các hệ thống quản lý phòng Lab hiện nay sử dụng công thức tính eGFR thế hệ mới không bị phụ thuộc vào chủng tộc (CKD-EPI 2021). Đồng thời, AI học máy sẽ vẽ biểu đồ dự báo sự suy giảm chức năng thận trong 5 năm tới của bệnh nhân dựa trên lịch sử dữ liệu.",
      "deep_knowledge": "Khoảng 50% chức năng mô thận thực sự có thể đã bị phá hủy trước khi nồng độ Creatinin trong máu bắt đầu tăng lên vượt ngưỡng bình thường (nguyên lý dự trữ thận). Do đó, ngày nay Creatinin không còn được coi là chỉ số phát hiện suy thận 'sớm' nữa.",
      "patient_advice": "Hãy tránh tập thể hình với cường độ cực cao hoặc nâng tạ nặng trong vòng 48 giờ trước khi xét nghiệm. Nếu bạn có lượng cơ bắp cuồn cuộn hoặc ngược lại, bị teo cơ do lớn tuổi, hãy đề nghị bác sĩ kiểm tra thêm chỉ số Cystatin C để đánh giá thận chính xác hơn."
    },
    "Cystatin C": {
      "name": "Cystatin C",
      "purpose": "Dấu ấn sinh học siêu nhạy giúp phát hiện tổn thương chức năng thận ở giai đoạn sớm nhất, khắc phục được mọi nhược điểm của Creatinin.",
      "when_to_do": "Khi nghi ngờ suy thận ở giai đoạn sớm, bệnh nhân có khối lượng cơ bắp bất thường (vận động viên, người suy kiệt, teo cơ), thai phụ nghi tiền sản giật.",
      "how_it_works": "Đo nồng độ protein Cystatin C được sản xuất bởi hầu hết các tế bào có nhân trong cơ thể với một tốc độ hoàn toàn hằng định, và chỉ được đào thải duy nhất qua thận.",
      "result_meaning": "Bình thường: Màng lọc thận hoạt động hoàn hảo. Cao: Chức năng thận đang bắt đầu suy giảm từ những dấu hiệu vi mô nhất.",
      "real_life_example": "Người tập thể hình có Creatinin hơi cao do cơ bắp quá to, bác sĩ cho thử Cystatin C ra kết quả bình thường để khẳng định quả thận anh ta vẫn hoàn toàn khỏe mạnh, không hề bị suy.",
      "note": "Kết quả Cystatin C phản ánh đúng chất lượng quả thận mà không hề bị nhiễu bởi việc bạn ăn nhiều thịt hay cơ bắp bạn to hay nhỏ.",
      "advanced_knowledge": "Cystatin C đã được Hiệp hội Thận học Quốc tế đưa vào xét nghiệm thường quy tuyến đầu nhờ công nghệ phân tích miễn dịch quang học tốc độ cao ra đời, giúp hạ giá thành và thay thế dần Creatinin ở các nhóm đối tượng đặc biệt.",
      "deep_knowledge": "Cystatin C là 'người soi đường' tuyệt vời ở vùng mù của thận (blind area). Khi độ lọc cầu thận eGFR giảm từ 90 xuống 60 ml/phút (chớm suy thận), Creatinin máu thường vẫn nằm trong mức bình thường, nhưng Cystatin C thì đã tăng rõ rệt, giúp bác sĩ can thiệp cứu thận kịp thời.",
      "patient_advice": "Đây là xét nghiệm có độ chính xác và ổn định cực cao. Bạn có thể đến cơ sở y tế thực hiện xét nghiệm này vào bất kỳ lúc nào trong ngày mà không cần thiết phải nhịn ăn nghiêm ngặt."
    },
    "MAU niệu": {
      "name": "MAU niệu (Microalbumin niệu)",
      "purpose": "Bắt mạch và phát hiện sự tổn thương vi mạch máu ở màng lọc thận từ giai đoạn cực kỳ sớm.",
      "when_to_do": "Khám sức khỏe bắt buộc mỗi 6 tháng/lần cho bệnh nhân đái tháo đường, cao huyết áp lâu năm, hoặc phụ nữ mang thai tầm soát tiền sản giật.",
      "how_it_works": "Truy tìm một lượng đạm Albumin vô cùng nhỏ (Micro) rò rỉ qua các lỗ hổng siêu nhỏ ở màng lọc thận rơi vào trong nước tiểu, ở mức độ mà que thử nước tiểu thông thường không thể nhận ra.",
      "result_meaning": "Bình thường (Âm tính): Màng lọc thận khép kín tốt. Dương tính: Thận chớm bị rách màng lọc, cần dùng thuốc bảo vệ thận lập tức.",
      "real_life_example": "Cô bệnh nhân tiểu đường thử máu Ure Creatinin vẫn rất tốt, nhưng thử MAU niệu ra dương tính. Bác sĩ cho dùng ngay thuốc ức chế SGLT2i kịp thời trám lấp màng lọc, cứu cô khỏi án chạy thận trong tương lai.",
      "note": "Đây là xét nghiệm quan trọng bậc nhất, là cơ hội cuối cùng để ngăn chặn bệnh nhân tiểu đường trượt dài vào suy thận giai đoạn cuối.",
      "advanced_knowledge": "Ứng dụng AI phân tích quang phổ vi chất lỏng ngay trên điện thoại thông minh (Smartphone-based urinalysis). Người bệnh tiểu đường có thể tự test MAU niệu tại nhà bằng bộ kit kết nối Bluetooth, dữ liệu được đẩy thẳng lên hồ sơ bệnh án điện tử để bác sĩ từ xa giám sát.",
      "deep_knowledge": "MAU niệu dương tính không chỉ đơn thuần là dấu hiệu thận đang hỏng. Trong y khoa, nó còn được xem là chiếc 'loa báo động' chứng tỏ toàn bộ hệ thống biểu mô vi mạch máu trên toàn cơ thể (bao gồm cả mạch vành ở tim và mạch máu não) đang bị tổn thương, gia tăng rủi ro đột quỵ.",
      "patient_advice": "Không nên thực hiện xét nghiệm này khi bạn đang bị sốt cao, có viêm nhiễm đường tiểu, phụ nữ đang hành kinh hoặc vừa tập thể dục thể thao quá sức. Những yếu tố này có thể gây rò rỉ đạm sinh lý tạm thời, dẫn đến kết quả dương tính giả."
    },
    "Protein niệu 24h": {
      "name": "Tỷ số Protein/Creatinin niệu (Thay thế Protein niệu 24h)",
      "purpose": "Đo đếm chính xác tổng khối lượng đạm bị thất thoát qua thận để chẩn đoán Hội chứng thận hư hoặc Viêm cầu thận mạn.",
      "when_to_do": "Khi bệnh nhân bị sưng phù toàn thân, tiểu ra bọt trắng xóa như xà phòng và lâu tan, hoặc thai phụ bị cao huyết áp thai kỳ.",
      "how_it_works": "Truyền thống: Phải đi tiểu và gom toàn bộ nước tiểu trong đúng 24 tiếng. Hiện đại (2026): Chỉ cần lấy 1 mẫu nước tiểu bất kỳ, máy sẽ đo tỷ lệ Protein/Creatinin (UPCR) để ước tính khối lượng đạm thất thoát.",
      "result_meaning": "Bình thường: Gần như không có đạm. Cao: Màng lọc thận bị tổn thương nặng, đạm bị vứt ra ngoài quá nhiều làm cơ thể suy kiệt đạm và tích nước gây phù nề.",
      "real_life_example": "Mẹ bầu tháng thứ 8 bị sưng phù chân ấn lõm, đo huyết áp cao vọt, xét nghiệm đạm niệu tăng cấp số nhân. Bác sĩ chẩn đoán tiền sản giật nặng, phải nhập viện theo dõi mổ lấy thai khẩn cấp.",
      "note": "Ngày nay, phương pháp gom nước tiểu 24h phiền phức đang dần bị loại bỏ, thay bằng xét nghiệm đo tỷ số đạm/creatinin niệu (UPCR) cực kỳ tiện lợi và chính xác tương đương.",
      "advanced_knowledge": "Chấm dứt cảnh ôm bình gom nước tiểu 24 giờ dễ sai sót. Các hệ thống phần mềm phòng Lab hiện nay dùng thuật toán nội suy đo tỷ số UPCR trên một mẫu nước tiểu duy nhất lúc sáng sớm, AI sẽ ước tính chính xác lượng đạm thất thoát trong 24 giờ với sai số cực thấp.",
      "deep_knowledge": "Khi Protein niệu rò rỉ ở mức ngưỡng thận hư (> 3.5g/ngày), cơ thể không chỉ mất đi nguồn đạm dinh dưỡng Albumin, mà còn đánh mất luôn cả các protein miễn dịch và protein chống đông máu (Antithrombin III), khiến người bệnh có rủi ro cực cao bị nhiễm trùng nặng hoặc cục máu đông làm tắc tĩnh mạch.",
      "patient_advice": "Mẫu nước tiểu buổi sáng sớm ngay khi vừa thức dậy là mẫu mang lại kết quả chính xác nhất. Hãy bỏ đi phần nước tiểu đầu tiên, chỉ hứng lấy phần 'nước tiểu giữa bãi' vào lọ vô khuẩn để tránh mẫu bị lẫn cặn bẩn và vi khuẩn sinh dục bên ngoài."
    },
    "Tế bào cặn nước tiểu": {
      "name": "Tế bào cặn nước tiểu (Soi cặn lắng tự động)",
      "purpose": "Truy tìm sự xuất hiện của tế bào máu, mủ, trụ niệu hay các tinh thể sỏi rơi rớt trong đường tiết niệu để định vị tổn thương.",
      "when_to_do": "Khi đi tiểu rát buốt, tiểu lắt nhắt, nước tiểu đổi màu hồng/đỏ đục, đau thắt lưng nghi sỏi thận rớt xuống niệu quản.",
      "how_it_works": "Đưa mẫu nước tiểu vào hệ thống máy phân tích quang học để tự động chụp ảnh, nhận diện và phân loại các thành phần cặn lơ lửng trong nước tiểu.",
      "result_meaning": "Bình thường: Nước tiểu trong vắt không có tế bào lạ. Bất thường: Thấy hồng cầu (chảy máu), bạch cầu (nhiễm trùng có mủ), hoặc các trụ niệu/tinh thể (cảnh báo sỏi hoặc viêm cầu thận).",
      "real_life_example": "Chị nhân viên văn phòng có thói quen nhịn tiểu, nay đi tiểu gắt buốt ớn lạnh, máy soi cặn báo có hàng nghìn bạch cầu dày đặc. Bác sĩ chẩn đoán ngay viêm bàng quang cấp do nhiễm khuẩn.",
      "note": "Nước tiểu mang đi xét nghiệm phải được phân tích sớm trong vòng 1-2 giờ sau khi lấy, nếu để quá lâu ở nhiệt độ phòng, vi khuẩn sẽ sinh sôi và tế bào cặn sẽ bị biến dạng hoặc phân hủy.",
      "advanced_knowledge": "Đã qua rồi thời kỹ thuật viên soi kính hiển vi thủ công bằng mắt người. Hệ thống máy phân tích dòng chảy tế bào (Flow cytometry) kết hợp AI nhận diện hình thái (ví dụ dòng Sysmex UF) tự động chụp và đếm hàng nghìn tế bào/giây với độ chuẩn xác tuyệt đối.",
      "deep_knowledge": "AI phân tích hình thái có khả năng phân biệt rõ ràng hồng cầu nguyên vẹn (chảy máu do sỏi hoặc u bàng quang) và hồng cầu biến dạng/méo mó (do bị ép vắt qua màng lọc cầu thận bị viêm). Đây là chìa khóa vàng không xâm lấn giúp bác sĩ nội khoa chẩn đoán nhanh bệnh viêm cầu thận cấp.",
      "patient_advice": "Bắt buộc phải vệ sinh sạch sẽ bộ phận sinh dục bằng nước sạch (không dùng xà phòng hay dung dịch sát khuẩn) và lau khô trước khi lấy tiểu. Chỉ hứng khúc nước tiểu giữa dòng để đảm bảo mẫu không bị dính tế bào sừng và hệ vi sinh vật trên da thịt."
    },
    "Cấy vi khuẩn nước tiểu": {
      "name": "Nuôi cấy, định danh và Kháng sinh đồ",
      "purpose": "Bắt tận tay thủ phạm vi khuẩn gây viêm đường tiết niệu và lập danh sách chi tiết các loại kháng sinh có thể tiêu diệt được chúng.",
      "when_to_do": "Khi uống thuốc kháng sinh thông thường vài ngày mà vẫn không hết tiểu buốt, hoặc tình trạng viêm nhiễm đường tiểu tái đi tái lại nhiều lần.",
      "how_it_works": "Mẫu nước tiểu vô khuẩn được đưa vào nuôi cấy hoặc phân tích quang phổ để định danh vi khuẩn, sau đó vi khuẩn được thử nghiệm mức độ nhạy cảm hoặc đề kháng với hàng loạt các loại thuốc kháng sinh.",
      "result_meaning": "Âm tính: Nước tiểu vô khuẩn. Dương tính: Định danh được chủng vi khuẩn (ví dụ E.coli kháng thuốc) và in ra bảng kết quả kháng sinh đồ để bác sĩ đổi thuốc.",
      "real_life_example": "Bà cụ bị viêm đường tiểu rỉ rả, uống kháng sinh cũ bác sĩ tuyến dưới kê không hết. Khi cấy nước tiểu phát hiện ra con E.coli sinh men kháng thuốc (ESBL), bác sĩ phải đổi sang kháng sinh dạng tiêm truyền mới chữa khỏi.",
      "note": "Bắt buộc phải lấy nước tiểu cho vào lọ vô khuẩn TRƯỚC KHI bạn uống hoặc tiêm liều thuốc kháng sinh đầu tiên của đợt bệnh mới, nếu không vi khuẩn sẽ bị ức chế không mọc được.",
      "advanced_knowledge": "Sự kết hợp giữa kỹ thuật khối phổ MALDI-TOF và công nghệ giải trình tự gen NGS được ứng dụng rộng rãi giúp định danh vi khuẩn và phát hiện gen kháng thuốc trực tiếp từ nước tiểu chỉ trong 3 đến 4 giờ, xóa bỏ hoàn toàn thời gian chờ đợi 48-72 giờ nuôi cấy truyền thống.",
      "deep_knowledge": "Rất nhiều trường hợp người già có xét nghiệm cấy dương tính ra vi khuẩn nhưng lại không hề có triệu chứng tiểu buốt (gọi là vi khuẩn niệu không triệu chứng). Khuyến cáo y khoa quốc tế cấm dùng kháng sinh cho nhóm này trừ khi đó là thai phụ hoặc người chuẩn bị phẫu thuật nội soi niệu quản, việc lạm dụng kháng sinh ở đây sẽ sinh ra siêu vi khuẩn kháng thuốc.",
      "patient_advice": "Khi mở nắp lọ đựng nước tiểu vô trùng do y tá cấp, hãy để nắp ngửa lên trên để tránh nhiễm bẩn mép nắp. Hứng chính xác dòng nước tiểu giữa bãi vào lọ, tuyệt đối không để ngón tay hay vùng kín chạm vào vành miệng của lọ."
    },
    "Điện giải": {
      "name": "Điện giải đồ máu (Na+, K+, Cl-, Ca2+)",
      "purpose": "Kiểm tra mức độ cân bằng nước, lượng muối khoáng thiết yếu và chức năng điều hòa môi trường nội môi của hai quả thận.",
      "when_to_do": "Khi bệnh nhân bị tiêu chảy cấp, nôn mửa nhiều, tụt huyết áp, yếu cơ liệt 2 chi dưới, cấp cứu hôn mê hoặc bệnh nhân suy thận mạn tính.",
      "how_it_works": "Đo lường nồng độ các ion khoáng chất mang điện tích lưu thông trong huyết thanh. Những ion này nắm giữ vai trò sống còn trong việc giữ nước, duy trì nhịp đập của tim và co bóp cơ bắp.",
      "result_meaning": "Bình thường: Đủ nước và khoáng chất. Bất thường: Rối loạn toan kiềm, cơ thể mất nước nặng, hoặc thận đã hỏng không bài tiết được Kali ra ngoài.",
      "real_life_example": "Người suy thận giai đoạn cuối mất chức năng tiểu tiện nên thường bị ứ đọng Kali. Khi thử máu thấy Kali vọt lên trên 6.5 mmol/L, màng cơ tim sẽ bị ức chế, nhịp tim có thể rối loạn và ngừng đập bất cứ lúc nào, phải chuyển đi lọc máu cấp cứu ngay lập tức.",
      "note": "Rối loạn nồng độ Kali (dù cực cao hay cực thấp) luôn được đánh dấu sao đỏ vì đây là tình trạng cấp cứu y khoa đe dọa sinh mạng.",
      "advanced_knowledge": "Hệ thống thiết bị xét nghiệm khí máu và điện giải tại giường (POCT Blood Gas Analyzers) cung cấp kết quả sinh tồn chỉ trong 30 giây từ một giọt máu. Thuật toán AI liên kết với monitor theo dõi bệnh nhân sẽ tiên đoán rủi ro loạn nhịp tim trước 30 phút dựa trên xu hướng dao động điện giải.",
      "deep_knowledge": "Quá trình lấy máu nếu garo (buộc dây thun) quá chặt, quá lâu, hoặc kim tiêm làm vỡ hồng cầu (tán huyết) sẽ khiến lượng lớn Kali từ bên trong tế bào hồng cầu vỡ tràn ra ngoài huyết thanh, gây hiện tượng 'tăng Kali máu giả tạo' cực kỳ phổ biến. Các phòng Lab hiện nay có phần mềm AI nhận diện chỉ số HIL sẽ đánh dấu mẫu tán huyết và tự động hủy kết quả, yêu cầu rút máu lại.",
      "patient_advice": "Khi điều dưỡng tiến hành lấy máu cho bạn, hãy thả lỏng cánh tay tự nhiên. Tuyệt đối không gồng siết cơ bắp hay cử động bóp nhả nắm tay liên tục, vì các thao tác co cơ cơ học này sẽ giải phóng một lượng lớn Kali cục bộ vào mạch máu, làm sai lệch hoàn toàn kết quả chẩn đoán."
    },
    "Glucose": {
      "name": "Glucose (Đường huyết lúc đói / ngẫu nhiên)",
      "purpose": "Đánh giá lượng đường lưu thông trong máu, là nền tảng trong việc tầm soát và theo dõi bệnh đái tháo đường [1, 2].",
      "when_to_do": "Trong khám sức khỏe tổng quát, có triệu chứng mệt mỏi, tiểu nhiều, khát nước, hoặc phụ nữ mang thai cần tầm soát đái tháo đường thai kỳ [1-3].",
      "how_it_works": "Đo nồng độ đường glucose tự do lưu thông trong máu tại thời điểm lấy mẫu [1, 2].",
      "result_meaning": "Bình thường (Đường đói < 5.6 mmol/L): Khỏe mạnh [3]. Cao: Cảnh báo rối loạn dung nạp đường hoặc mắc bệnh tiểu đường [2, 3].",
      "real_life_example": "Một bệnh nhân hay khát nước, tiểu đêm, đi xét nghiệm Glucose đói ra 8.0 mmol/L, phần mềm LAB AI Agent lập tức cảnh báo nguy cơ đái tháo đường [4, 5].",
      "note": "Chỉ số Glucose máu lúc đói yêu cầu người bệnh phải nhịn ăn ít nhất 8 tiếng trước khi lấy mẫu để kết quả chính xác nhất [1, 2].",
      "advanced_knowledge": "Ứng dụng thiết bị xét nghiệm tại chỗ (POCT) cầm tay cho phép thực hiện xét nghiệm đường huyết ngay tại giường bệnh hoặc tự theo dõi liên tục tại nhà để kịp thời điều chỉnh chế độ ăn uống và thuốc men [6, 7].",
      "deep_knowledge": "Nồng độ glucose phản ánh trực tiếp sự cân bằng giữa các hormone tuyến tụy. Sự dư thừa glucose kéo dài sẽ kích hoạt quá trình oxy hóa, gây tổn thương hệ thống vi mạch toàn thân.",
      "patient_advice": "Bạn bắt buộc phải nhịn ăn qua đêm ít nhất 8 tiếng, chỉ được uống nước lọc trước khi đo đường huyết lúc đói [1, 2]. Đừng nhịn quá lâu vì có thể gây rối loạn chuyển hóa làm sai lệch kết quả."
    },
    "HbA1C": {
      "name": "HbA1C (Glycated Hemoglobin)",
      "purpose": "Đánh giá mức độ kiểm soát đường huyết trung bình trong vòng 2-3 tháng qua, là tiêu chuẩn vàng để tiên lượng và đánh giá nguy cơ biến chứng tiểu đường [1, 2].",
      "when_to_do": "Dùng để chẩn đoán xác định đái tháo đường, hoặc kiểm tra định kỳ xem bệnh nhân có tuân thủ chế độ ăn kiêng và điều trị tốt không [1, 2].",
      "how_it_works": "Phản ánh lượng đường liên kết bền vững với phân tử hemoglobin của hồng cầu [1, 2].",
      "result_meaning": "Bình thường (< 5.7%): An toàn [3]. Cao: Lượng đường trong máu đã ở mức cao trong một thời gian dài, làm tăng nguy cơ tổn thương thần kinh và tim mạch [2, 3].",
      "real_life_example": "Một bệnh nhân tiểu đường đo Glucose đói sáng nay bình thường, nhưng HbA1C cao vọt, vạch trần việc 3 tháng qua người này thường xuyên không kiểm soát tốt đường huyết.",
      "note": "Vì hồng cầu sống khoảng 120 ngày nên xét nghiệm này phản ánh đúng 'lịch sử' đường huyết của bạn trong suốt một quý [1, 2].",
      "advanced_knowledge": "Các giải pháp POCT hàng đầu (như hệ thống cobas b 101) cung cấp khả năng xét nghiệm HbA1C nhanh chóng ngay tại điểm chăm sóc thay vì gửi mẫu về phòng thí nghiệm trung tâm [8, 9].",
      "deep_knowledge": "Vì xét nghiệm đo lượng đường gắn trên hồng cầu, nên ở những bệnh nhân bị thiếu máu tán huyết, mang thai, hoặc truyền máu nhiều lần, chỉ số HbA1C có thể bị sai lệch.",
      "patient_advice": "Không giống như xét nghiệm Glucose máu lúc đói, bạn có thể lấy mẫu máu để đo HbA1C vào bất cứ thời điểm nào trong ngày mà không cần thiết phải nhịn ăn."
    },
    "Insulin": {
      "name": "Insulin (Định lượng Insulin máu)",
      "purpose": "Đánh giá khả năng sản xuất hormone của tuyến tụy, xác định tình trạng kháng insulin và hỗ trợ phân biệt đái tháo đường type 1 hay type 2.",
      "when_to_do": "Khi có triệu chứng hạ đường huyết không rõ nguyên nhân, hoặc đánh giá tình trạng lờn insulin ở người béo phì, hội chứng buồng trứng đa nang.",
      "how_it_works": "Đo nồng độ hormone insulin trực tiếp trong huyết thanh, loại hormone đóng vai trò như 'chìa khóa' mở cửa tế bào để đưa glucose vào trong tạo năng lượng.",
      "result_meaning": "Thấp: Tuyến tụy bị tổn thương không sản xuất đủ insulin (Đái tháo đường type 1). Cao: Cơ thể bị kháng insulin, ép tuyến tụy phải hoạt động quá sức tiết ra nhiều hơn (Tiền đái tháo đường, Đái tháo đường type 2).",
      "real_life_example": "Bệnh nhân bị thừa cân phát hiện đường huyết cao, định lượng Insulin cũng rất cao. Bác sĩ giải thích các mô đang 'kháng' insulin, yêu cầu giảm cân khẩn cấp để bảo vệ tuyến tụy.",
      "note": "Thường được chỉ định cùng lúc với xét nghiệm Glucose đói để bác sĩ tính toán chỉ số đánh giá kháng Insulin (HOMA-IR).",
      "advanced_knowledge": "Áp dụng trí tuệ nhân tạo (AI) trong phân tích tự động, hệ thống sẽ tự thiết lập bản đồ nhạy cảm Insulin cho từng cá nhân, dự báo thời điểm tuyến tụy suy kiệt nếu không can thiệp thay đổi lối sống [5, 10].",
      "deep_knowledge": "Insulin có thời gian bán hủy trong máu cực ngắn và bị gan lọc sạch đáng kể trong vòng tuần hoàn đầu tiên. Do đó, insulin máu ngoại vi không phản ánh tuyệt đối lượng insulin thực sự mà tụy vừa tổng hợp.",
      "patient_advice": "Nếu bạn đang sử dụng các loại thuốc điều trị tiểu đường dạng tiêm (Insulin nhân tạo) hoặc thuốc viên kích thích tuyến tụy, bạn phải nói với bác sĩ vì chúng sẽ làm sai lệch hoàn toàn kết quả nội sinh."
    },
    "C-peptid": {
      "name": "C-peptid",
      "purpose": "Thước đo trung thực và chính xác nhất để đánh giá khả năng sản xuất insulin nội sinh (tự nhiên) của lá lách (tuyến tụy).",
      "when_to_do": "Khi bệnh nhân đang tiêm insulin nhân tạo từ ngoài vào và bác sĩ muốn biết tuyến tụy của người bệnh còn tự làm việc được không, từ đó điều chỉnh phác đồ.",
      "how_it_works": "Khi tuyến tụy tổng hợp phân tử Insulin, nó đồng thời cắt và giải phóng một đoạn phân tử C-peptid vào máu. Đo C-peptid giúp bác sĩ không bị nhầm lẫn với insulin được tiêm từ ngoài vào.",
      "result_meaning": "Thấp: Tuyến tụy đã suy kiệt, không thể tự sinh insulin (gặp ở tiểu đường type 1). Cao: Tuyến tụy vẫn hoạt động mạnh nhưng cơ thể đang kháng insulin.",
      "real_life_example": "Bác sĩ đo C-peptid cho một bệnh nhân tiểu đường lâu năm đang dùng thuốc tiêm. Thấy C-peptid vẫn còn khá tốt, bác sĩ quyết định cho bệnh nhân chuyển dần sang thuốc viên uống.",
      "note": "C-peptid có thời gian tồn tại trong máu dài hơn Insulin rất nhiều nên đo nó cho kết quả ổn định và đáng tin cậy hơn.",
      "advanced_knowledge": "Hệ thống AI chuyên gia như LAB AI Agent có khả năng tổng hợp chỉ số C-peptid cùng các dấu ấn sinh học khác để hỗ trợ phân biệt các thể đái tháo đường phức tạp [4, 5].",
      "deep_knowledge": "Khác với Insulin bị gan dọn dẹp rất nhanh, C-peptid phần lớn được đào thải qua thận. Do vậy, ở những bệnh nhân có chức năng thận suy giảm, C-peptid trong máu có thể bị tích tụ và tăng cao giả tạo.",
      "patient_advice": "Hãy uống đủ nước lọc. Bạn không cần phải ngưng các mũi tiêm insulin nhân tạo hằng ngày của mình vì xét nghiệm này chỉ đo lường sản phẩm do chính cơ thể bạn tự tạo ra."
    },
    "Ceton": {
      "name": "Ketone niệu / Ceton máu",
      "purpose": "Phát hiện tình trạng nhiễm toan ceton (DKA) - một biến chứng cấp tính cực kỳ nguy hiểm đe dọa tính mạng ở người bệnh tiểu đường [11].",
      "when_to_do": "Khi người bệnh đái tháo đường có mức đường huyết quá cao, nôn mửa, lú lẫn, hơi thở có mùi trái cây lên men, hoặc khi nhịn đói kéo dài [11].",
      "how_it_works": "Đo lường nồng độ ketone, sản phẩm sinh ra phản ánh quá trình đốt cháy chất béo ồ ạt để tạo năng lượng khi tế bào bị thiếu hụt đường glucose trầm trọng [11].",
      "result_meaning": "Bình thường (Âm tính): Cơ thể an toàn. Dương tính/Cao: Máu đang bị axit hóa nặng do bệnh tiểu đường không được kiểm soát, cần cấp cứu y tế lập tức [11].",
      "real_life_example": "Một bệnh nhân tiểu đường type 1 bỏ tiêm insulin vài ngày rồi ngất xỉu. Vào cấp cứu thử Ketone niệu dương tính cực mạnh, bác sĩ chẩn đoán nhiễm toan ceton và lập tức cho hồi sức tích cực [11].",
      "note": "Người khỏe mạnh đang ăn kiêng theo chế độ nhịn ăn gián đoạn hoặc Keto gắt gao (cắt giảm hoàn toàn tinh bột) cũng có thể làm chỉ số Ketone niệu tăng [11].",
      "advanced_knowledge": "Sự phát triển của công nghệ xét nghiệm tại chỗ (POCT) cho phép kiểm tra ketone ngay tại giường bệnh hoặc bằng các thiết bị cầm tay tự theo dõi liên tục tại nhà, giúp can thiệp xử trí ngay trước khi rơi vào hôn mê [6, 7].",
      "deep_knowledge": "Beta-hydroxybutyrate là dạng ketone chính lưu thông trong máu khi bị nhiễm toan DKA. Các xét nghiệm máu hiện đại thường nhắm trực tiếp vào phân tử này để cho độ nhạy và độ đặc hiệu chẩn đoán cao hơn so với que thử nước tiểu thông thường.",
      "patient_advice": "Nếu bạn bị đái tháo đường type 1, hãy tự trang bị sẵn que thử ketone tại nhà. Ngay khi đường huyết lên quá cao kèm theo mệt mỏi nôn ói, hãy tự kiểm tra ngay lập tức. Tuyệt đối không tập thể dục khi đường huyết đang cao kèm ketone dương tính."
    },
     "FT3": {
      "name": "FT3 (Triiodothyronine tự do)",
      "purpose": "Đánh giá mức độ hoạt động thực tế của tuyến giáp, giúp chẩn đoán và theo dõi điều trị bệnh cường giáp hoặc suy giáp.",
      "when_to_do": "Khi hay bị trống ngực hồi hộp, sụt cân nhanh dù ăn rất nhiều, tay run rẩy bần bật, lồi mắt (Cường giáp) hoặc khi TSH bất thường.",
      "how_it_works": "Đo nồng độ hormone T3 ở dạng 'tự do' (không bị gắn kết với protein). Đây là loại hormone có hoạt tính sinh học mạnh nhất, trực tiếp tạo ra sức công phá và kích thích chuyển hóa tế bào.",
      "result_meaning": "Cao: Tuyến giáp hoạt động quá mức (Cường giáp). Thấp: Tuyến giáp lười biếng, làm cơ thể mập ú, ù lì, sợ lạnh (Suy giáp).",
      "real_life_example": "Cô gái trẻ hay cáu gắt, lồi mắt, tim đập thình thịch 120 nhịp/phút, thử FT3 tăng rất cao xác định mắc chứng Basedow (Cường giáp tự miễn).",
      "note": "Dù lượng FT3 trong máu rất nhỏ so với FT4 (chỉ chiếm khoảng 20%), nhưng nó lại là kẻ quyết định tốc độ tiêu hao năng lượng chính của cơ thể.",
      "advanced_knowledge": "Hệ thống AI phân tích dữ liệu tuyến giáp hiện đại tự động tính toán tỷ lệ FT3/FT4. Nếu tỷ lệ này thay đổi, AI sẽ cảnh báo bác sĩ về tình trạng cơ thể người bệnh đang bị rối loạn quá trình chuyển hóa từ T4 sang T3 ở gan và mô ngoại vi.",
      "deep_knowledge": "Xét nghiệm FT3 sử dụng cơ chế miễn dịch cạnh tranh cho phân tử nhỏ. Theo Cảnh giác dược, việc bệnh nhân sử dụng Biotin (Vitamin B7) ngoại sinh liều cao sẽ tương tác với cầu nối streptavidin trong thuốc thử, gây ra kết quả FT3 tăng giả tạo, khiến bác sĩ dễ chẩn đoán nhầm là cường giáp [1].",
      "patient_advice": "Nếu bạn đang uống các viên uống làm đẹp da, móng, tóc có chứa Biotin, bạn bắt buộc phải ngưng uống ít nhất 3 ngày (72 giờ) trước khi đi rút máu xét nghiệm tuyến giáp để tránh kết quả bị sai lệch hoàn toàn [1]."
    },
    "FT4": {
      "name": "FT4 (Thyroxine tự do)",
      "purpose": "Công cụ chính xác và ổn định nhất để chẩn đoán bệnh lý bướu cổ tuyến giáp, thường làm thành bộ xét nghiệm chuẩn cùng TSH.",
      "when_to_do": "Khám sức khỏe định kỳ tuyến giáp, phụ nữ mang thai 3 tháng đầu (để đảm bảo đủ hormone cho não thai nhi phát triển), người đang uống thuốc trị tuyến giáp.",
      "how_it_works": "Đo nồng độ hormone T4 tự do trong máu. T4 giống như một kho dự trữ lưu động, khi đến các mô cơ quan, nó sẽ tự động lột xác biến thành FT3 để cơ thể sử dụng.",
      "result_meaning": "Bình thường: Tuyến giáp hiền hòa. Cao: Bệnh cường giáp, viêm tuyến giáp cấp. Thấp: Tuyến giáp bị suy yếu không sinh đủ hormone.",
      "real_life_example": "Bà mẹ sau sinh người mệt mỏi phù nề, ăn ít vẫn mập, đo FT4 thấp tè, bác sĩ cho uống viên bù hormone tuyến giáp liền khỏe lại ngay.",
      "note": "Bác sĩ luôn ưu tiên đo FT4 (tự do) thay vì T4 (toàn phần) vì FT4 phản ánh đúng lượng hormone thực tế đang làm việc, không bị nhiễu bởi các protein vận chuyển trong máu.",
      "advanced_knowledge": "Công nghệ phân tích quang hóa phát quang siêu nhạy thế hệ mới giúp định lượng FT4 chính xác ở mức độ picomol/L. Đồng thời, phần mềm quản lý (LAB AI Agent) tự động đối chiếu chéo FT4 và TSH để loại trừ ngay lập tức các trường hợp lỗi máy hoặc nhiễu mẫu.",
      "deep_knowledge": "Ở phụ nữ mang thai hoặc người dùng thuốc tránh thai, lượng protein gắn kết thyroxine (TBG) tăng vọt làm T4 toàn phần tăng rất cao. Nếu chỉ đo T4 toàn phần sẽ bị chẩn đoán nhầm là cường giáp. Đo FT4 giúp loại bỏ hoàn toàn sự nhiễu loạn này. Tuy nhiên, FT4 cũng bị ảnh hưởng sai lệch (tăng giả) bởi viên uống làm đẹp chứa Biotin [1].",
      "patient_advice": "Nếu bạn đang trong quá trình uống thuốc điều trị suy giáp (như Levothyroxine), sáng ngày đi khám bạn không được uống thuốc. Hãy để y tá rút máu xong rồi mới uống liều của ngày hôm đó, nếu uống trước khi lấy máu, FT4 sẽ tăng vọt giả tạo."
    },
    "TSH": {
      "name": "TSH (Hormone kích thích tuyến giáp)",
      "purpose": "Chỉ số trinh sát nhạy bén nhất, là xét nghiệm đầu tay (First-line) để tầm soát và phát hiện sớm mọi vấn đề về tuyến giáp.",
      "when_to_do": "Là xét nghiệm đầu tiên được bác sĩ chỉ định khi bạn có bướu to ở cổ, nghi ngờ bệnh tuyến giáp, hoặc tầm soát suy giáp bẩm sinh ở trẻ sơ sinh.",
      "how_it_works": "Đo hormone TSH do tuyến yên trên não bộ tiết ra. Bộ não đóng vai trò như 'tổng chỉ huy', dùng TSH làm tín hiệu để ra lệnh và thúc ép tuyến giáp ở cổ sản xuất hormone.",
      "result_meaning": "Thấp: Tuyến giáp đang sản xuất quá mức khiến não phải ngắt lệnh (Cường giáp). Cao: Tuyến giáp bị yếu, lười biếng nên não phải tiết ra nhiều TSH để thúc ép liên tục (Suy giáp).",
      "real_life_example": "Kết quả xét nghiệm FT3 FT4 bình thường nhưng TSH tăng cao, bác sĩ kết luận đây là 'suy giáp cận lâm sàng' (giai đoạn bệnh còn đang tiềm ẩn), đưa vào diện theo dõi chuẩn bị uống thuốc.",
      "note": "TSH luôn chạy ngược chiều với FT3 và FT4. TSH là một chỉ số cực kỳ nhạy cảm, nó sẽ thay đổi đầu tiên, rất lâu trước khi tuyến giáp thực sự có biểu hiện hỏng hóc.",
      "advanced_knowledge": "Máy miễn dịch thế hệ thứ 4 có thể đo TSH ở nồng độ cực thấp (lên tới 0.001 mIU/L), giúp bác sĩ phân biệt rõ ràng giữa cường giáp thực sự và tình trạng ức chế TSH do các bệnh lý ngoài tuyến giáp.",
      "deep_knowledge": "Khác với FT3/FT4, TSH là phân tử có kích thước lớn nên sử dụng cơ chế xét nghiệm miễn dịch kiểu 'bánh sandwich' (không cạnh tranh). Vì vậy, nếu bệnh nhân đang dùng Biotin làm đẹp, Biotin sẽ cản trở kháng thể gắn kết, làm cho tín hiệu bị rửa trôi, dẫn đến kết quả TSH bị giảm giả tạo. Điều này tạo ra một bức tranh giả: TSH thấp, FT4 cao y hệt như bệnh Cường giáp [1].",
      "patient_advice": "Tuyệt đối ngưng các thực phẩm chức năng mọc tóc, chống rụng tóc, làm đẹp da chứa Biotin (Vitamin B7/Vitamin H) trước khi làm xét nghiệm [1]. TSH tuân theo nhịp sinh học, tăng cao nhất vào ban đêm và thấp nhất vào buổi chiều, do đó bạn nên đi lấy máu cố định vào buổi sáng (7h - 9h)."
    },
    "Testosteron": {
      "name": "Testosteron (Định lượng Testosteron toàn phần)",
      "purpose": "Đánh giá phong độ sinh lý, ham muốn, chức năng sinh sản ở nam giới và kiểm tra tình trạng nam hóa bất thường ở nữ giới.",
      "when_to_do": "Nam giới rụng tóc hói đầu, mệt mỏi, rối loạn cương dương, vô sinh [2]. Nữ giới mọc ria mép, rậm lông, nổi mụn đầy mặt, kinh nguyệt thưa thớt.",
      "how_it_works": "Đo lượng hormone nam tính lưu thông trong dòng máu, phần lớn do tinh hoàn (ở nam) và buồng trứng/tuyến thượng thận (ở nữ) tiết ra.",
      "result_meaning": "Thấp ở nam: Mãn dục nam, suy sinh dục, liệt dương, vô sinh [2]. Cao ở nữ: Cảnh báo bệnh buồng trứng đa nang (PCOS) hoặc u tuyến thượng thận.",
      "real_life_example": "Chú 50 tuổi than vãn không còn hứng thú chuyện vợ chồng, đo Testosteron sụt thê thảm chỉ còn 150 ng/dL, được bác sĩ cho liệu pháp bổ sung hormone lấy lại phong độ [2].",
      "note": "Ở nam giới trưởng thành bình thường, nồng độ dao động từ 300 - 1.000 ng/dL. Chỉ số này suy giảm tự nhiên theo độ tuổi (khoảng 1% mỗi năm sau tuổi 30) [2].",
      "advanced_knowledge": "Công nghệ đo khối phổ sắc ký lỏng siêu nhạy (LC-MS/MS) kết hợp thuật toán AI hiện được coi là 'tiêu chuẩn vàng' để đo Testosteron ở nữ giới và trẻ em, vượt qua điểm yếu đo sai số của các máy miễn dịch thông thường khi nồng độ hormone ở mức quá thấp.",
      "deep_knowledge": "Testosteron trong máu đa phần (khoảng 98%) bị 'trói chặt' bởi protein SHBG và Albumin nên không hoạt động. Chỉ có 2% là Testosteron tự do có khả năng tạo ra sinh lý nam. Ở người béo phì hoặc tiểu đường, SHBG giảm làm Testosteron toàn phần giảm theo, nhưng Testosteron tự do vẫn có thể bình thường. Lúc này, bác sĩ sẽ phải dùng AI để tính toán chỉ số Testosteron tự do ước tính (cFT).",
      "patient_advice": "Testosteron tuân theo nhịp điệu ngày đêm, đạt đỉnh cao nhất vào buổi sáng và tụt dốc vào buổi chiều. Bắt buộc bạn phải lấy máu vào lúc 7:00 đến 10:00 sáng và phải nhịn ăn, ngủ đủ giấc đêm hôm trước để có kết quả phản ánh đúng sinh lý nhất [2]."
    },
    "Cortisol": {
      "name": "Cortisol (Hormone chống Stress)",
      "purpose": "Đo lường mức độ phản ứng với stress căng thẳng của cơ thể và đánh giá chức năng của tuyến thượng thận.",
      "when_to_do": "Người hay tự mua thuốc khớp đông y uống, dạo này mặt sưng tròn béo phị như mặt trăng, tay chân teo tóp, rạn da bụng màu tím đỏ, huyết áp tăng.",
      "how_it_works": "Đo hormone Cortisol do tuyến thượng thận tiết ra. Đây là hormone sinh tồn, giúp cơ thể chống lại áp lực, chống viêm và duy trì đường huyết khi bị đói, sợ hãi.",
      "result_meaning": "Cao: Mắc bệnh u tuyến thượng thận, u tuyến yên (Hội chứng Cushing) hoặc do ngộ độc thuốc corticoid. Thấp: Suy tuyến thượng thận (Bệnh Addison), cơ thể kiệt quệ, tụt huyết áp.",
      "real_life_example": "Cô bán hàng uống 'thuốc tễ' trị nhức mỏi xương khớp nửa năm nay, giờ mặt béo phị mọc lông, thử Cortisol sáng ra mức 0 do tuyến thượng thận đã bị teo liệt vì ngộ độc corticoid trộn lén trong thuốc tễ.",
      "note": "Được mệnh danh là 'Hormone thức giấc', Cortisol tăng cao vọt lúc sáng sớm khi mới mở mắt và thấp dần, cạn kiệt về nửa đêm.",
      "advanced_knowledge": "Thay vì chỉ lấy máu, công nghệ y học hiện nay bắt đầu áp dụng cảm biến vi mô (biosensors) dán trên da phân tích Cortisol qua mồ hôi theo thời gian thực (Real-time). AI sẽ gửi dữ liệu về điện thoại để cảnh báo khi cơ thể đang ở trạng thái 'stress mạn tính' báo động đỏ.",
      "deep_knowledge": "Việc sử dụng các thuốc chứa Corticoid (như Dexamethason, Prednisolone) dùng đường uống, tiêm khớp, hay thậm chí là thuốc xịt hen suyễn, kem bôi da liều cao dài ngày đều sẽ đánh lừa não bộ, khiến não ngắt lệnh tuyến thượng thận làm tuyến này teo lại và mất khả năng tự sản sinh Cortisol nội sinh.",
      "patient_advice": "Vì nhịp sinh học của Cortisol thay đổi theo giờ, y tá sẽ dặn bạn bắt buộc phải lấy máu đúng 8 giờ sáng (giờ đỉnh điểm). Trước khi rút máu, bạn cần ngồi nghỉ ngơi thả lỏng hoàn toàn 30 phút. Nếu bạn đi cầu thang bộ mệt nhọc hoặc đang cãi nhau, giận dữ, Cortisol sẽ tăng vọt giả tạo do stress cấp tính."
    },
    "PTH": {
      "name": "PTH (Hormone tuyến cận giáp - Parathyroid Hormone)",
      "purpose": "Đánh giá chức năng của 4 hạt tuyến cận giáp nằm ẩn ở cổ, tìm nguyên nhân sâu xa của các rối loạn Canxi máu và bệnh loãng xương.",
      "when_to_do": "Khi xét nghiệm máu thấy Canxi quá cao hoặc quá thấp, người bệnh bị sỏi thận tái phát liên tục, đau nhức xương khớp mạn tính, loãng xương nặng dù ăn uống đủ chất.",
      "how_it_works": "Đo lượng hormone PTH do tuyến cận giáp tiết ra. PTH có nhiệm vụ giống như 'kẻ trộm', khi máu thiếu Canxi, nó sẽ rút Canxi từ trong xương tống ra máu để cứu nguy nhịp tim.",
      "result_meaning": "Bình thường: Cân bằng Canxi tốt. Cao: Cường cận giáp (do u tuyến cận giáp hoặc do suy thận làm rút hết Canxi khỏi xương). Thấp: Suy tuyến cận giáp (thường do biến chứng cắt trúng tuyến này khi mổ bướu cổ).",
      "real_life_example": "Một bệnh nhân liên tục bị sỏi thận 2 bên và chụp X-quang thấy xương rỗ như tổ ong, thử máu Canxi cao, PTH cao vọt giúp bác sĩ siêu âm phát hiện ra ngay khối u tuyến cận giáp.",
      "note": "Luôn luôn phải được bác sĩ chỉ định làm cùng một lúc với xét nghiệm Canxi máu (Ion hóa) và Vitamin D3 thì mới chẩn đoán ra bệnh.",
      "advanced_knowledge": "Công nghệ xét nghiệm nhanh tại chỗ (Intraoperative POCT PTH) được đưa thẳng vào phòng phẫu thuật. Trong lúc mổ cắt u tuyến cận giáp, bác sĩ sẽ rút máu đo PTH, máy trả kết quả chỉ sau 10 phút. Nếu PTH tụt giảm mạnh (>50%), bác sĩ biết chắc chắn đã cắt sạch khối u và yên tâm đóng vết mổ.",
      "deep_knowledge": "Hormone PTH nguyên vẹn (Intact PTH) có thời gian bán hủy trong máu cực kỳ ngắn, chỉ khoảng 3 đến 5 phút. Khi thận bị suy, thận không thể kích hoạt Vitamin D, dẫn đến ruột không hấp thu được Canxi. Máu thiếu Canxi kích thích tuyến cận giáp phì đại và tiết PTH điên cuồng, gọi là Cường cận giáp thứ phát do bệnh thận mạn.",
      "patient_advice": "Bạn cần nhịn ăn từ 8-10 tiếng trước khi lấy máu để chỉ số Canxi đi kèm không bị ảnh hưởng bởi bữa ăn. Mẫu máu đo PTH rất dễ bị hỏng ở nhiệt độ phòng, y tá sẽ phải ướp ống máu vào đá lạnh ngay lập tức sau khi rút khỏi tay bạn để gửi xuống phòng lab."
    },
    "Acid Uric": {
      "name": "Acid Uric",
      "purpose": "Chẩn đoán các bệnh lý gây biến đổi nồng độ acid uric như bệnh Gout, sỏi thận và theo dõi hóa trị liệu ung thư [4].",
      "when_to_do": "Khi có cơn đau quặn thận, sưng đỏ và đau nhức dữ dội ở khớp (đặc biệt là ngón chân cái), thận ứ nước hoặc theo dõi suy thận [5].",
      "how_it_works": "Đo lượng chất thải sinh ra sau quá trình thoái giáng nhân purin từ thực phẩm (như thịt đỏ, hải sản) hoặc sự phân hủy tế bào trong cơ thể [4, 5].",
      "result_meaning": "Bình thường ở nam khoảng 180-420 mmol/l và nữ là 150-360 mmol/l [6]. Nồng độ tăng cao phản ánh bệnh Gout, suy thận, vảy nến, đa hồng cầu hoặc hội chứng ly giải khối u [5, 6].",
      "real_life_example": "Một anh hay đi nhậu hải sản sáng ngủ dậy ngón chân đau điếng, xét nghiệm Acid Uric cao vọt kết luận bị Gout cấp tính do tinh thể urat đọng lại tại khớp [4].",
      "note": "Một số thuốc có thể làm tăng acid uric máu (như thuốc lợi tiểu thiazid, aspirin liều thấp, thuốc hóa trị) hoặc làm giảm acid uric (như allopurinol, corticosteroid) [5].",
      "advanced_knowledge": "Máy đo acid uric cầm tay tại nhà (POCT) tích hợp AI hiện nay có thể dự đoán được rủi ro bùng phát cơn đau Gout cấp trong 48 giờ tới dựa trên nồng độ đo được và lịch sử ăn uống của người bệnh.",
      "deep_knowledge": "Tình trạng thoái giáng nhanh acid uric thường xảy ra ở bệnh nhân có khối u đang điều trị bằng hóa trị (hội chứng ly giải khối u), khi đó mẫu máu cần được đặt ngay vào túi đá lạnh để bảo quản [4, 5]. Mức acid uric giảm có thể gặp trong hội chứng Fanconi hoặc bệnh Wilson [6].",
      "patient_advice": "Bệnh nhân thường được yêu cầu nhịn ăn từ 4 đến 8 giờ trước khi lấy mẫu máu tĩnh mạch hoặc làm xét nghiệm nước tiểu 24h [4]."
    },
    "Calci": {
      "name": "Calci (Toàn phần và Ion hóa)",
      "purpose": "Kiểm tra cơ thể có đủ canxi để giúp xương chắc khỏe, phát hiện rối loạn tuyến cận giáp và các bệnh lý về xương [7].",
      "when_to_do": "Khi hay bị chuột rút, tê rần tay chân, phụ nữ tiền mãn kinh nghi loãng xương, hoặc bệnh nhân có biểu hiện sỏi thận.",
      "how_it_works": "Đo nồng độ canxi hòa tan gắn với protein (toàn phần) và lượng canxi tự do hoạt động (ion hóa) lưu thông trong máu.",
      "result_meaning": "Canxi toàn phần bình thường khoảng 2.2 - 2.7 mmol/l [7]. Tăng trong đa u tủy, loãng xương, cường tuyến cận giáp [7]. Giảm trong còi xương, thiểu năng tuyến giáp, hội chứng thận hư [7].",
      "real_life_example": "Bà bầu hay bị chuột rút bắp chân ban đêm, thử Calci ion hóa thấp, bác sĩ cho uống viên canxi bổ sung liền hết triệu chứng co cơ.",
      "note": "Canxi ion hóa (Ca++) là dạng hoạt động sinh lý, phản ánh tình trạng thực sự của canxi trong cơ thể chính xác hơn canxi toàn phần [8].",
      "advanced_knowledge": "Các hệ thống phân tích khí máu và điện giải tại giường bệnh (POCT) hiện đại cho kết quả Canxi ion hóa (Ca++) sinh tồn chỉ trong 30 giây từ một giọt máu [9].",
      "deep_knowledge": "Khoảng 50% canxi trong máu gắn với protein, chủ yếu là albumin [7, 10]. Do đó, bệnh lý làm giảm albumin (như xơ gan, thận hư) sẽ làm giảm canxi toàn phần nhưng canxi ion hóa tự do có thể vẫn bình thường.",
      "patient_advice": "Khi đi lấy máu xét nghiệm điện giải, bạn nên thả lỏng cánh tay tự nhiên, tuyệt đối không gồng siết cơ bắp hay cử động bóp nhả nắm tay liên tục vì sẽ làm sai lệch kết quả ion trong máu [9]."
    },
    "Phospho": {
      "name": "Phospho",
      "purpose": "Đánh giá khoáng chất giúp tạo xương, thường đi cặp với canxi và liên quan mật thiết đến chức năng thận [11].",
      "when_to_do": "Người bị bệnh suy thận mạn tính, rối loạn tuyến cận giáp, hoặc các bệnh liên quan đến loãng xương.",
      "how_it_works": "Đo lượng khoáng Phospho trong máu, chất này thường có mối quan hệ nghịch đảo với Canxi dưới sự điều hòa của hormone tuyến cận giáp (PTH).",
      "result_meaning": "Bình thường: Đủ chất. Cao: Ở bệnh nhân suy thận, thận không đào thải được Phospho ra ngoài gây tích tụ làm ngứa ngáy toàn thân và vôi hóa mạch máu.",
      "real_life_example": "Người bệnh suy thận mạn đang lọc máu da dẻ hay bị ngứa gãi sứt sẹo, xét nghiệm Phospho tăng vọt do không lọc được ra ngoài.",
      "note": "Thường luôn được bác sĩ chỉ định xét nghiệm thành bộ cùng với Canxi toàn phần, Canxi ion hóa và Vitamin D3 [11].",
      "advanced_knowledge": "Hệ thống AI phòng lab tự động phân tích tỷ lệ Canxi/Phospho để cảnh báo sớm nguy cơ vôi hóa mô mềm ở bệnh nhân suy thận mạn tính.",
      "deep_knowledge": "Sự tích tụ Phospho ở bệnh nhân bệnh thận mạn (CKD) là nguyên nhân chính kích hoạt cường tuyến cận giáp thứ phát, dẫn đến việc rút canxi ồ ạt từ xương ra máu gây gãy xương bệnh lý.",
      "patient_advice": "Nếu bạn bị suy thận mạn tính, bạn cần kiêng khem nghiêm ngặt các thực phẩm chứa nhiều phospho công nghiệp như nước ngọt có ga, thịt chế biến sẵn và đồ hộp."
    },
    "Vitamin D3": {
      "name": "25-OH Vitamin D",
      "purpose": "Kiểm tra tình trạng xương, hệ miễn dịch và khả năng cơ thể hấp thu canxi [12].",
      "when_to_do": "Trẻ em bị còi xương, người lớn nhức mỏi xương khớp mạn tính, bệnh nhân bệnh tự miễn hoặc nghi ngờ suy giảm miễn dịch.",
      "how_it_works": "Đo nồng độ 25-hydroxyvitamin D trong máu, đây là dạng dự trữ chính của vitamin D phản ánh nguồn cung cấp từ cả ánh nắng mặt trời và thực phẩm [13].",
      "result_meaning": "Chỉ số bình thường nằm trong khoảng 30 - 150 ng/mL [13]. Thấp: Nguy cơ loãng xương cao, hệ miễn dịch suy yếu dễ mắc các bệnh nhiễm trùng.",
      "real_life_example": "Chị nhân viên văn phòng 35 tuổi che nắng kín mít, hay đau mỏi lưng, đo Vitamin D3 rất thấp nên uống canxi mãi không ngấm được vào xương.",
      "note": "Vitamin D có vai trò sống còn như một cỗ xe vận chuyển, nếu thiếu nó thì cơ thể không thể hấp thu được canxi từ ruột vào máu [12].",
      "advanced_knowledge": "Sử dụng công nghệ khối phổ LC-MS/MS độ nhạy cực cao để phân biệt rõ ràng giữa Vitamin D2 (từ thực vật) và Vitamin D3 (từ động vật/da tổng hợp), hỗ trợ bác sĩ kê đơn bổ sung chính xác.",
      "deep_knowledge": "Bản chất Vitamin D hoạt động như một hormone nội tiết hơn là một vitamin đơn thuần. Nó kiểm soát hơn 200 gen trong cơ thể và sự thiếu hụt trầm trọng có liên quan đến rủi ro mắc các bệnh ung thư và rối loạn chuyển hóa.",
      "patient_advice": "Bạn không cần nhịn ăn trước khi xét nghiệm Vitamin D. Nếu kết quả cho thấy bạn thiếu hụt nặng, hãy tăng cường phơi nắng buổi sáng sớm và tuân thủ liều lượng vitamin D bổ sung do bác sĩ kê đơn."
    },
    "Yếu tố dạng thấp": {
      "name": "Yếu tố dạng thấp (RF)",
      "purpose": "Truy tìm và hỗ trợ chẩn đoán bệnh viêm khớp dạng thấp cùng các hội chứng tự miễn dịch khác.",
      "when_to_do": "Khi sáng ngủ dậy tay chân cứng đơ khó cử động kéo dài trên 1 giờ, các khớp ngón tay sưng đỏ đối xứng hai bên.",
      "how_it_works": "Tìm một loại kháng thể tự sinh (thường là IgM) do cơ thể tự tạo ra do lỗi hệ miễn dịch, kháng thể này quay lại tấn công phần Fc của kháng thể IgG của chính người bệnh.",
      "result_meaning": "Âm tính: Khó mắc bệnh. Dương tính: Tăng nguy cơ bị viêm khớp dạng thấp, lâu dài có thể gây biến dạng khớp tàn phế.",
      "real_life_example": "Bà cụ các đốt ngón tay sưng to đau nhức bóp méo, đi xét nghiệm RF dương tính, bác sĩ cho dùng thuốc ức chế miễn dịch làm chậm quá trình hư khớp.",
      "note": "Xét nghiệm RF không hoàn toàn đặc hiệu, ở một số người già khỏe mạnh hoặc người mắc bệnh nhiễm trùng mạn tính (như viêm gan C, lao), chỉ số này cũng có thể dương tính giả.",
      "advanced_knowledge": "Được chạy trên hệ thống miễn dịch tự động công suất lớn, phần mềm LAB AI Agent tự động kết hợp kết quả RF, Anti-CCP và CRP để đưa ra kết luận mức độ viêm khớp hiện tại [14].",
      "deep_knowledge": "Mặc dù là tiêu chuẩn kinh điển, nhưng khoảng 20-30% bệnh nhân thực sự mắc viêm khớp dạng thấp lại có kết quả RF âm tính (viêm khớp dạng thấp huyết thanh âm tính). Do đó, bác sĩ luôn phải đánh giá kết hợp với lâm sàng.",
      "patient_advice": "Nếu xét nghiệm RF của bạn dương tính nhẹ nhưng bạn không hề đau khớp, đừng quá hốt hoảng. Hãy đến khám trực tiếp với bác sĩ chuyên khoa Cơ xương khớp để được đánh giá toàn diện."
    },
    "Anti-CCP": {
      "name": "Anti-CCP",
      "purpose": "Chẩn đoán bệnh viêm khớp dạng thấp ở giai đoạn rất sớm với độ chính xác và đặc hiệu cao hơn nhiều so với RF.",
      "when_to_do": "Khi bị đau cứng các khớp nhỏ (ngón tay, cổ tay) vào buổi sáng, sưng đau kéo dài mà xét nghiệm RF âm tính.",
      "how_it_works": "Tìm kiếm các tự kháng thể kháng lại chuỗi peptide chứa citrulline vòng, loại kháng thể này tấn công trực tiếp vào màng hoạt dịch của khớp.",
      "result_meaning": "Âm tính: Khả năng cao không mắc bệnh. Dương tính: Gần như chắc chắn bị viêm khớp dạng thấp và bệnh có nguy cơ tiến triển phá hủy sụn khớp rất nặng.",
      "real_life_example": "Một phụ nữ trẻ đau khớp cổ tay, test yếu tố dạng thấp (RF) âm tính nhưng Anti-CCP dương tính mạnh, giúp phát hiện bệnh từ rất sớm trước khi khớp bị phá hủy.",
      "note": "Anti-CCP có thể xuất hiện trong máu nhiều năm trước khi bệnh nhân có biểu hiện đau khớp đầu tiên trên lâm sàng.",
      "advanced_knowledge": "Công nghệ xét nghiệm vi dịch (microfluidics) cho phép định lượng chính xác Anti-CCP từ một giọt máu mao mạch, đồng thời thuật toán học máy (Machine Learning) dự đoán xác suất khớp sẽ bị biến dạng trong 5 năm tới.",
      "deep_knowledge": "Khác với RF có thể dương tính trong nhiều bệnh khác, Anti-CCP có độ đặc hiệu cho viêm khớp dạng thấp lên đến 95%. Kháng thể này có mối liên hệ mật thiết với thói quen hút thuốc lá ở những người mang gen nhạy cảm HLA-DRB1.",
      "patient_advice": "Nếu bạn có tiền sử gia đình bị viêm khớp dạng thấp và kết quả Anti-CCP dương tính, bạn tuyệt đối phải tránh hút thuốc lá vì khói thuốc là chất xúc tác mạnh nhất kích hoạt căn bệnh tự miễn này bùng phát."
    },
    "ASO": {
      "name": "ASO (Anti-streptolysin O)",
      "purpose": "Phát hiện dấu vết nhiễm liên cầu khuẩn tan huyết nhóm A (vi khuẩn ăn thịt người) có thể gây biến chứng hỏng van tim và sụn khớp.",
      "when_to_do": "Trẻ em sau một đợt viêm họng mủ sưng to, nay tự nhiên sưng đau đầu gối tấy đỏ, mệt tim, hồi hộp, nghi ngờ sốt thấp khớp.",
      "how_it_works": "Đo nồng độ kháng thể mà cơ thể sinh ra để đánh lại độc tố Streptolysin O của con vi khuẩn liên cầu nhóm A.",
      "result_meaning": "Bình thường: Không nhiễm. Tăng cao: Vi khuẩn đã từng vào cơ thể, nguy cơ xảy ra phản ứng chéo cắn đứt sụn khớp, màng lọc thận và van tim (thấp tim).",
      "real_life_example": "Bé trai 8 tuổi bị viêm họng 2 tuần trước uống thuốc không đủ liều, nay kêu đau cổ chân, thử ASO tăng vọt. Bác sĩ cho tiêm phòng thấp tim ngay lập tức để cứu lấy van tim của bé.",
      "note": "Vi khuẩn này có biệt danh 'liếm khớp đớp tim'. ASO chỉ cho biết bạn đã từng nhiễm vi khuẩn này trong vòng vài tuần đến vài tháng qua, chứ không phản ánh tình trạng nhiễm trùng đang diễn ra ngay hiện tại.",
      "advanced_knowledge": "Hệ thống tự động theo dõi động học ASO, biểu đồ AI sẽ xác định đỉnh kháng thể để phân biệt giữa một nhiễm trùng liên cầu trong quá khứ đã an toàn và một nhiễm trùng mới bùng phát đe dọa biến chứng.",
      "deep_knowledge": "Sự nguy hiểm của liên cầu A nằm ở chỗ vỏ của vi khuẩn này có cấu trúc protein (protein M) gần giống hệt với cấu trúc cơ tim và sụn khớp của người. Do đó, kháng thể sinh ra diệt vi khuẩn sẽ tiêu diệt nhầm luôn cả màng tim và sụn khớp (cơ chế tự miễn).",
      "patient_advice": "Nếu con bạn bị viêm họng do liên cầu khuẩn (xác định qua phết họng), bắt buộc phải cho trẻ uống kháng sinh đủ liều đúng 10 ngày dù trẻ đã hết sốt, để diệt vi khuẩn tận gốc và ngăn ngừa biến chứng thấp tim tàn phế suốt đời."
    },
    "AFP": {
      "name": "AFP (Alpha-Fetoprotein)",
      "purpose": "Tầm soát và theo dõi điều trị ung thư gan nguyên phát, ung thư tế bào mầm ở tinh hoàn hoặc buồng trứng [15, 16].",
      "when_to_do": "Người có rủi ro cao như viêm gan B, C, xơ gan đi khám định kỳ mỗi 6 tháng, hoặc để theo dõi bệnh nhân ung thư gan sau điều trị [15].",
      "how_it_works": "Đo nồng độ protein AFP trong máu. Chất này bình thường chỉ có nhiều ở thai nhi, nhưng tế bào gan bị ung thư sẽ sản xuất và giải phóng chúng ồ ạt [15, 16].",
      "result_meaning": "Mức bình thường ≤ 8.78 ng/mL [17]. Tăng cao báo động nguy cơ có khối u ác tính ở gan, hoặc bệnh đang tái phát [15, 16]. AFP cũng tăng nhẹ trong viêm gan, xơ gan [15, 16].",
      "real_life_example": "Nam giới 50 tuổi bị viêm gan B mạn tính đi xét nghiệm thấy AFP tăng vọt, siêu âm phát hiện ngay một khối u nhỏ ở gan và được phẫu thuật sớm [15].",
      "note": "Xét nghiệm dấu ấn ung thư không thể khẳng định 100% bệnh, vì AFP có thể dương tính giả trong các bệnh gan lành tính, hoặc phụ nữ mang thai bình thường [15, 18]. Cần kết hợp chẩn đoán hình ảnh [19].",
      "advanced_knowledge": "Việc tầm soát ung thư hiện nay được kết hợp mạnh mẽ với công nghệ giải trình tự gen thế hệ mới (NGS) và AI (như xét nghiệm SPOT-MAS 10) để phân tích DNA tự do của khối u (cfDNA), giúp phát hiện ung thư từ khi khối u còn vi mô [2, 20].",
      "deep_knowledge": "AFP-L3 là một tiểu phân đoạn đặc hiệu của AFP. Việc tính toán tỷ lệ %AFP-L3/AFP tổng số thông qua hệ thống miễn dịch hóa phát quang giúp phân biệt cực kỳ rõ ràng giữa viêm gan mạn tính lành tính và ung thư biểu mô tế bào gan (HCC).",
      "patient_advice": "Nếu bạn bị viêm gan B hoặc xơ gan, bạn thuộc nhóm nguy cơ cực cao. Việc xét nghiệm máu đo AFP và siêu âm gan mỗi 6 tháng là bắt buộc để giữ lấy mạng sống."
    },
    "CEA": {
      "name": "CEA (Carcinoembryonic Antigen)",
      "purpose": "Tầm soát, đánh giá hiệu quả điều trị và theo dõi tái phát của ung thư đường tiêu hóa (đại trực tràng, dạ dày, tụy), ung thư vú và ung thư phổi [15, 16, 21].",
      "when_to_do": "Khi đi ngoài ra máu, sụt cân nhanh, hoặc định kỳ theo dõi ở bệnh nhân đã mổ cắt khối u ruột/phổi [15, 21].",
      "how_it_works": "Đo lượng kháng nguyên phôi CEA trong máu, một loại protein sinh ra nhiều khi có sự tăng sinh của tế bào ung thư biểu mô tuyến [15].",
      "result_meaning": "Bình thường ≤ 5 ng/mL [17]. Tăng cao có thể do ung thư dạ dày, ruột già, tuyến tụy, vú hoặc phổi [15, 16]. CEA cũng tăng không nhiều trong polyp đại tràng, viêm tụy, viêm ruột non [15].",
      "real_life_example": "Bác trai đã mổ ung thư đại tràng 1 năm trước, nay đi xét nghiệm lại thấy CEA duy trì mức thấp nghĩa là bệnh đang được kiểm soát, chưa tái phát [15].",
      "note": "Người hút thuốc lá lâu năm xét nghiệm này cũng có thể tăng nhẹ gây dương tính giả, CEA không dùng để chẩn đoán xác định mà dùng để theo dõi tiến triển bệnh [15, 22].",
      "advanced_knowledge": "Hệ thống LAB AI Agent tự động vẽ biểu đồ xu hướng (trend analysis) nồng độ CEA sau phẫu thuật của bệnh nhân, báo động khẩn cấp cho bác sĩ điều trị ngay khi có sự nhích lên vi mô cảnh báo ung thư di căn sớm [14].",
      "deep_knowledge": "Vì CEA chuyển hóa chủ yếu qua gan, ở những bệnh nhân bị xơ gan hoặc viêm gan, nồng độ CEA trong máu có thể tăng lên do gan không dọn dẹp kịp, dễ gây nhầm lẫn với ung thư di căn [15].",
      "patient_advice": "Hãy ngừng hút thuốc lá vì khói thuốc làm tăng chỉ số CEA của bạn một cách vô cớ, khiến bác sĩ khó khăn trong việc đánh giá nguy cơ ung thư thực sự."
    },
    "PSA": {
      "name": "PSA (Prostate-Specific Antigen)",
      "purpose": "Tầm soát sớm và phát hiện bệnh ung thư tuyến tiền liệt ở nam giới [16, 21, 23].",
      "when_to_do": "Nam giới trên 50 tuổi khám định kỳ hoặc có dấu hiệu tiểu buốt, tiểu khó, tiểu đêm nhiều lần [23].",
      "how_it_works": "Đo nồng độ chất PSA do tế bào biểu mô của tuyến tiền liệt tiết ra vào dòng máu [23].",
      "result_meaning": "Bình thường ≤ 4 ng/mL [17]. Cao: Cảnh báo có thể bị viêm, phì đại lành tính tuyến tiền liệt hoặc ung thư tuyến tiền liệt [16, 23].",
      "real_life_example": "Ông cụ 65 tuổi dạo này tiểu khó phải rặn, thử PSA tăng cao giúp bác sĩ có cơ sở cho đi sinh thiết tìm thấy tế bào ung thư tiền liệt tuyến ở giai đoạn sớm [23].",
      "note": "PSA có thể tăng trong các trường hợp lành tính, do đó bác sĩ thường chỉ định làm thêm PSA tự do (Free PSA) để tính tỷ lệ Free PSA/Total PSA giúp chẩn đoán phân biệt khối u ác tính [24].",
      "advanced_knowledge": "Thuật toán AI thế hệ mới kết hợp chỉ số PSA máu, độ tuổi, thể tích tuyến tiền liệt trên siêu âm và MRI đa thông số để tính toán chính xác xác suất ung thư, giúp nam giới tránh bị sinh thiết mù không cần thiết.",
      "deep_knowledge": "Mọi tác động cơ học lên vùng chậu đều làm nồng độ PSA trong máu tăng vọt giả tạo. Các hành động này bao gồm đạp xe đạp, quan hệ tình dục, hoặc việc bác sĩ thăm khám trực tràng bằng tay.",
      "patient_advice": "Để kết quả PSA hoàn toàn chính xác, nam giới tuyệt đối kiêng quan hệ tình dục (không xuất tinh) và không đạp xe đạp đường dài ít nhất 48 giờ trước ngày đi lấy máu xét nghiệm."
    },
    "CA 15-3": {
      "name": "CA 15-3",
      "purpose": "Theo dõi tiến trình bệnh và đánh giá hiệu quả điều trị ở bệnh nhân ung thư vú, phát hiện ung thư di căn [16, 25].",
      "when_to_do": "Người đã hoặc đang điều trị ung thư vú cần kiểm tra xem khối u có đáp ứng với hóa trị hoặc có di căn xương/gan không [25].",
      "how_it_works": "Đo nồng độ kháng nguyên carbohydrate CA 15-3 do các tế bào biểu mô u vú tiết ra [25].",
      "result_meaning": "Bình thường từ 0-32 U/ml [25]. Tăng dần: Khối u đang phát triển, không đáp ứng thuốc hoặc đã lan sang cơ quan khác [25].",
      "real_life_example": "Một bệnh nhân nữ đang hóa trị ung thư vú, hàng tháng đo CA 15-3 thấy chỉ số giảm dần chứng tỏ phác đồ hóa chất đang phát huy tác dụng tiêu diệt tế bào ung thư tốt [25].",
      "note": "Xét nghiệm này có độ nhạy thấp khi ung thư vú ở giai đoạn đầu chưa di căn, nên không dùng để khám tầm soát ban đầu cho phụ nữ khỏe mạnh [25]. Nó cũng có thể tăng trong viêm gan, viêm tụy, u vú lành tính [25].",
      "advanced_knowledge": "Tích hợp công nghệ điện hóa phát quang tự động đa kênh, máy phân tích thế hệ mới phát hiện CA 15-3 đồng thời với chụp nhũ ảnh AI (AI Mammography) để lập bản đồ theo dõi khối u vú toàn diện 3D.",
      "deep_knowledge": "Kháng nguyên CA 15-3 thực chất là một dạng glycoprotein MUC1. Sự gia tăng liên tục của CA 15-3 sau phẫu thuật hoặc xạ trị có thể xuất hiện trước khi di căn được phát hiện trên phim chụp cắt lớp (CT) từ 3 đến 6 tháng.",
      "patient_advice": "Bạn không nên dùng xét nghiệm máu CA 15-3 để tự tầm soát ung thư vú tại nhà vì rất dễ bị âm tính giả. Thay vào đó, siêu âm vú và chụp nhũ ảnh (Mammography) định kỳ mới là phương pháp tầm soát ung thư vú chuẩn mực."
    },
    "Tg": {
      "name": "Tg (Thyroglobulin)",
      "purpose": "Theo dõi và phát hiện sự tái phát của bệnh ung thư tuyến giáp sau khi đã phẫu thuật cắt bỏ tuyến giáp [26].",
      "when_to_do": "Kiểm tra định kỳ ở người đã bị phẫu thuật cắt toàn bộ tuyến giáp và điều trị I-ốt phóng xạ do ung thư biểu mô tuyến giáp [26].",
      "how_it_works": "Đo protein Thyroglobulin do tế bào biểu mô tuyến giáp tiết ra. Khi tuyến giáp đã bị cắt sạch, lượng Tg trong máu phải bằng 0 [26].",
      "result_meaning": "Bình thường (khi đã cắt giáp): Bằng 0, tức là đã sạch tế bào ung thư [26]. Tăng cao trở lại: Cảnh báo tế bào ung thư tuyến giáp đang mọc lại ở cổ hoặc đã di căn [26].",
      "real_life_example": "Chị gái mổ cắt toàn bộ tuyến giáp 2 năm trước, nay đi thử máu định kỳ thấy Tg tăng lại, báo hiệu tế bào ung thư tái phát, bác sĩ cho chụp xạ hình để lên phác đồ uống I-ốt tiêu diệt tiếp.",
      "note": "Nếu bạn chưa cắt tuyến giáp, chất này có thể tăng trong u lành tuyến giáp [26]. Tg luôn phải được làm cùng với xét nghiệm kháng thể Anti-Tg để tránh kết quả bị sai lệch.",
      "advanced_knowledge": "Ứng dụng phương pháp khối phổ LC-MS/MS giúp định lượng Tg chính xác ở nồng độ cực nhỏ mà không bị can nhiễu bởi các tự kháng thể Anti-Tg trong máu người bệnh, giải quyết triệt để nỗi ám ảnh âm tính giả ở các xét nghiệm miễn dịch cũ.",
      "deep_knowledge": "Rất nhiều bệnh nhân ung thư tuyến giáp có hệ miễn dịch sinh ra kháng thể Anti-Tg chống lại chính Thyroglobulin. Các kháng thể này sẽ 'nuốt chửng' Tg, làm cho các máy miễn dịch thông thường không đo được Tg, dẫn đến kết quả Tg bằng 0 (âm tính giả) dù ung thư đang tái phát bùng nổ.",
      "patient_advice": "Nếu bác sĩ yêu cầu bạn ngừng thuốc hormone tuyến giáp (Levothyroxine) trước khi xét nghiệm Tg, bạn sẽ cảm thấy rất mệt mỏi, phù nề, sợ lạnh (triệu chứng suy giáp). Hãy thông báo ngay cho bác sĩ để được dùng mũi tiêm TSH tái tổ hợp thay thế, giúp bạn không phải chịu đựng cơn suy giáp hành hạ."
    },
    "CA 19-9": {
      "name": "CA 19-9",
      "purpose": "Hỗ trợ chẩn đoán, phát hiện sớm tái phát và theo dõi hiệu quả điều trị bệnh ung thư tuyến tụy, đường mật và đường tiêu hóa [16, 27].",
      "when_to_do": "Khi bệnh nhân có dấu hiệu vàng da tắc mật, đau tức vùng bụng trên, sụt cân nhanh không rõ nguyên nhân [27].",
      "how_it_works": "Đo nồng độ kháng nguyên CA 19-9 sinh ra nhiều khi có sự phát triển khối u ở đường tiêu hóa, đặc biệt là sự ác tính hóa ở tuyến tụy [27].",
      "result_meaning": "Bình thường từ 0-33 U/ml [27]. Tăng cao chót vót: Nguy cơ rất lớn bị ung thư tuyến tụy hoặc ung thư đường mật [27].",
      "real_life_example": "Bác trai đau bụng sụt cân, siêu âm nghi u tụy, xét nghiệm CA 19-9 tăng vọt lên hàng nghìn đơn vị giúp bác sĩ củng cố chẩn đoán ung thư tụy và chỉ định chụp CT [27].",
      "note": "CA 19-9 cũng có thể tăng trong các bệnh lành tính như viêm gan, xơ gan, viêm tụy, đái tháo đường hoặc tắc nghẽn ống mật do sỏi [27].",
      "advanced_knowledge": "AI chẩn đoán hình ảnh (Radiomics) được kết hợp đồng bộ với biểu đồ biến thiên nồng độ CA 19-9 trong máu để cá thể hóa phác đồ hóa trị nhắm đích cho bệnh nhân ung thư tụy, tăng tỷ lệ sống còn đáng kể.",
      "deep_knowledge": "Kháng nguyên CA 19-9 liên quan chặt chẽ đến nhóm máu Lewis. Khoảng 5-10% dân số mang nhóm máu Lewis âm tính (Le a- b-) không có khả năng sinh tổng hợp kháng nguyên CA 19-9 về mặt di truyền. Do đó, dù họ có bị ung thư tụy giai đoạn cuối thì chỉ số CA 19-9 vẫn luôn bằng 0.",
      "patient_advice": "Nếu bạn được chẩn đoán tắc mật do sỏi, nồng độ CA 19-9 có thể tăng rất cao do ứ đọng mật chứ không phải do ung thư. Sau khi lấy sỏi và thông ống mật, chỉ số này sẽ tự động sụt giảm về bình thường."
    },
    "Cyfra 21-1": {
      "name": "Cyfra 21-1",
      "purpose": "Hỗ trợ chẩn đoán, đánh giá đáp ứng điều trị và theo dõi ung thư phổi, đặc biệt là ung thư phổi không tế bào nhỏ và ung thư bàng quang [28, 29].",
      "when_to_do": "Khi chụp X-quang hoặc CT thấy có khối u ở phổi, ho ra máu kéo dài, hoặc để theo dõi bệnh nhân đang điều trị ung thư phổi [28].",
      "how_it_works": "Đo nồng độ một mảnh vỡ protein cấu trúc (cytokeratin 19) bị giải phóng ồ ạt vào dòng máu khi các tế bào ung thư biểu mô phổi phát triển và hoại tử [28].",
      "result_meaning": "Mức bình thường từ 0 - 3.3 U/L [28]. Tăng cao: Cảnh báo bệnh ung thư phổi tế bào không nhỏ đang tiến triển ác tính [28, 29].",
      "real_life_example": "Bệnh nhân nam hút thuốc lá 30 năm bị u phổi, xét nghiệm Cyfra 21-1 tăng cao liên tục giúp đánh giá khối u đang lan rộng, không đáp ứng thuốc [28].",
      "note": "Thường được làm thành bộ kết hợp với CEA, SCC và Pro GRP để tăng tối đa độ chính xác trong việc truy tìm các loại ung thư phổi khác nhau [24]. Nó cũng có thể tăng nhẹ trong bệnh thận hoặc bệnh phổi lành tính [28].",
      "advanced_knowledge": "Máy xét nghiệm miễn dịch tự động công suất lớn tích hợp phần mềm LAB AI Agent [14, 30], đưa ra cảnh báo sớm di căn màng phổi thông qua sự thay đổi cực nhỏ của Cyfra 21-1 so với giá trị nền (baseline) ban đầu của người bệnh.",
      "deep_knowledge": "Sự bài tiết của Cyfra 21-1 tỷ lệ thuận trực tiếp với khối lượng hoại tử của khối u phổi. Khi bệnh nhân được hóa trị hoặc xạ trị thành công, tế bào u bị tiêu diệt hàng loạt khiến Cyfra 21-1 có thể tăng vọt tạm thời (hiện tượng bùng phát - flare up) trước khi giảm sâu xuống mức an toàn.",
      "patient_advice": "Xét nghiệm Cyfra 21-1 không chịu ảnh hưởng bởi việc bạn ăn uống. Tuy nhiên, nếu bạn đang bị suy thận mạn, chỉ số này sẽ bị tích tụ và tăng cao giả tạo, bạn phải báo cho bác sĩ ung bướu biết về bệnh nền thận của mình."
    },
    "SCC": {
      "name": "SCC (Squamous Cell Carcinoma Antigen)",
      "purpose": "Theo dõi tiến trình bệnh, đánh giá mức độ lan rộng và phát hiện tái phát của ung thư biểu mô tế bào vảy (ung thư cổ tử cung, thực quản, phổi, vòm họng) [24, 31].",
      "when_to_do": "Người có rủi ro cao hoặc bệnh nhân sau khi đã phẫu thuật, hóa xạ trị ung thư cổ tử cung, ung thư thực quản cần tái khám định kỳ [31].",
      "how_it_works": "Đo lượng kháng nguyên SCC, một loại protein glycoprotein đặc trưng được tế bào biểu mô vảy ở màng nhầy tiết ra vào máu [31].",
      "result_meaning": "Giới hạn bình thường từ 0 - 3 µg/L [31]. Tăng cao: Bệnh ung thư tế bào vảy đang phát triển mạnh hoặc khối u ác tính tái phát [31].",
      "real_life_example": "Bệnh nhân nữ sau phẫu thuật ung thư cổ tử cung đi tái khám định kỳ, đo SCC thấy giảm mạnh về mức an toàn chứng tỏ ca phẫu thuật đã gọt sạch tế bào ác tính [31].",
      "note": "Độ nhạy không cao để dùng tầm soát bệnh ở cộng đồng. SCC cũng có thể tăng trong các bệnh lành tính gây viêm da bong vảy như tắc nghẽn phổi, hen phế quản, vảy nến, chàm [31].",
      "advanced_knowledge": "Phương pháp khối phổ chuyên sâu cho phép phân lập vi mô thành phần kháng nguyên SCC trực tiếp từ mẫu dịch phết cổ tử cung (chứ không chỉ rút máu) cùng với kỹ thuật AI nhận diện tế bào bất thường [32], giúp chẩn đoán ung thư cổ tử cung với độ chính xác đạt tới 99.8%.",
      "deep_knowledge": "Kháng nguyên SCC được tìm thấy với nồng độ cao trong nước bọt, mồ hôi và các biểu mô niêm mạc. Việc y tá hoặc kỹ thuật viên lấy máu không mang găng tay, để rơi vãi nước bọt hoặc tế bào da bong tróc vào ống xét nghiệm sẽ gây ra kết quả SCC máu tăng giả tạo trầm trọng do mẫu bị ngoại nhiễm.",
      "patient_advice": "Do SCC rất nhạy cảm với các bệnh lý da liễu, nếu bạn đang bị viêm da cơ địa dị ứng, nổi mề đay diện rộng hoặc hen suyễn bùng phát, hãy thông báo cho bác sĩ vì các bệnh này sẽ làm tăng chỉ số SCC một cách vô tình [31]."
    },
    "HBsAg": {
      "name": "HBsAg (Kháng nguyên bề mặt virus Viêm gan B)",
      "purpose": "Xét nghiệm đầu tay (First-line) để khẳng định cơ thể có đang nhiễm virus Viêm gan B (HBV) hay không [14, 33].",
      "when_to_do": "Khám sức khỏe đi làm định kỳ, tầm soát trước khi mang thai, khám tiền hôn nhân, hoặc khi có dấu hiệu vàng da, mệt mỏi, chán ăn [33, 34].",
      "how_it_works": "Tìm kiếm trực tiếp sự hiện diện của các protein lớp vỏ bao bọc bên ngoài con virus Viêm gan B đang trôi nổi lưu thông trong dòng máu bệnh nhân [33].",
      "result_meaning": "Âm tính (Negative): Không nhiễm virus. Có phản ứng/Dương tính (Positive): Đang bị nhiễm Viêm gan B cấp tính hoặc mạn tính, virus đang có trong cơ thể [33].",
      "real_life_example": "Một bạn trẻ tham gia hiến máu nhân đạo nhận được thư báo viện huyết học từ chối do mẫu máu có kết quả HBsAg dương tính, lúc này mới biết bản thân mắc bệnh viêm gan B lây từ mẹ sang con.",
      "note": "HBsAg dương tính chỉ xác nhận bạn mắc bệnh, bác sĩ sẽ phải cho làm thêm xét nghiệm tải lượng virus (HBV-DNA) để biết virus đang ngủ yên hay đang sinh sôi tàn phá gan.",
      "advanced_knowledge": "Sử dụng thiết bị xét nghiệm nhanh đa mồi (POCT) tích hợp AI tự động hóa kết hợp với cơ sở dữ liệu dịch tễ. Ngay khi có mẫu HBsAg dương tính, phần mềm LAB AI Agent tự động lên phác đồ tầm soát cho các thành viên trong cùng gia đình bệnh nhân [14, 30].",
      "deep_knowledge": "Việc HBsAg dương tính tồn tại liên tục vượt quá 6 tháng được định nghĩa là nhiễm viêm gan B mạn tính. Một khi virus đã chèn đoạn mã di truyền (cccDNA) của nó vào nhân tế bào gan người, bệnh nhân sẽ mang virus suốt đời và có nguy cơ tiến triển thành xơ gan, ung thư gan cao gấp 100 lần người bình thường [33].",
      "patient_advice": "Nếu kết quả HBsAg của bạn là Âm tính, bạn nên thực hiện tiếp xét nghiệm kháng thể Anti-HBs. Nếu chưa có kháng thể bảo vệ, bạn cần đi tiêm phòng vắc-xin viêm gan B đủ 3 mũi ngay lập tức để tạo lá chắn an toàn suốt đời."
    },
    "HCV Ab": {
      "name": "HCV Ab (Kháng thể kháng virus Viêm gan C)",
      "purpose": "Tầm soát và sàng lọc xem cơ thể đã từng tiếp xúc hoặc đang mắc căn bệnh 'sát thủ thầm lặng' Viêm gan C hay không [33].",
      "when_to_do": "Khám sức khỏe tổng quát, người có tiền sử xăm hình, tiêm chích ma túy, chạy thận nhân tạo hoặc có men gan tăng cao không rõ nguyên nhân [33].",
      "how_it_works": "Tìm dấu vết kháng thể đặc hiệu do hệ miễn dịch của cơ thể sinh ra để chống lại sự tấn công của virus Viêm gan C [33].",
      "result_meaning": "Âm tính: Chưa từng nhiễm virus. Dương tính: Đang bị viêm gan C, hoặc đã từng bị nhiễm và tự khỏi bệnh trong quá khứ nhưng sẹo kháng thể vẫn còn.",
      "real_life_example": "Cô gái đi xăm chân mày mười năm trước ở tiệm không vô trùng, nay đi khám sức khỏe bàng hoàng khi biết mình bị viêm gan C qua kết quả HCV Ab dương tính dù không có triệu chứng gì.",
      "note": "Khác với viêm gan B, viêm gan C hiện chưa có vắc-xin phòng ngừa. Nếu test HCV Ab dương tính, bạn bắt buộc phải làm tiếp xét nghiệm đo tải lượng virus HCV-RNA [33].",
      "advanced_knowledge": "Xét nghiệm HCV Ab miễn dịch tự động (ECLIA) cho độ nhạy cực cao [33]. Hệ thống y tế liên thông hồ sơ điện tử tự động chuyển bệnh nhân có kết quả dương tính thẳng đến phòng khám chuyên khoa gan mật ảo (Telemedicine) để theo dõi.",
      "deep_knowledge": "Khoảng 15-25% bệnh nhân nhiễm viêm gan C cấp tính hệ miễn dịch có khả năng tự đánh bật và dọn dẹp sạch virus khỏi cơ thể mà không cần điều trị. Tuy nhiên, kháng thể HCV Ab của họ sẽ vẫn tồn tại vĩnh viễn và cho kết quả dương tính trong suốt phần đời còn lại.",
      "patient_advice": "Nếu bạn nhận kết quả HCV Ab dương tính, đừng tuyệt vọng. Viêm gan C hiện nay không còn là 'bản án tử hình'. Y học đã có các loại thuốc kháng virus tác dụng trực tiếp (DAAs) giúp chữa khỏi dứt điểm 100% căn bệnh này chỉ trong 12 tuần uống thuốc."
    },
    "Tải lượng HBV": {
      "name": "HBV-DNA (Tải lượng virus Viêm gan B)",
      "purpose": "Đếm chính xác số lượng vi hạt virus Viêm gan B đang nhân lên trong máu, quyết định việc dùng thuốc kháng virus và theo dõi sự kháng thuốc.",
      "when_to_do": "Sau khi đã chẩn đoán mắc viêm gan B (HBsAg dương tính) và men gan AST/ALT tăng [33, 35]. Được xét nghiệm định kỳ 3-6 tháng/lần với người đang uống thuốc trị bệnh.",
      "how_it_works": "Dùng công nghệ sinh học phân tử hiện đại (Real-time PCR) khuếch đại gen để tìm và đếm số lượng đoạn DNA của virus trên 1 mililit máu.",
      "result_meaning": "Tải lượng thấp (hoặc dưới ngưỡng phát hiện): Virus đang bị ức chế, ngủ yên, bệnh ổn định. Tải lượng cao (lên tới hàng triệu/tỷ copies): Virus đang nhân lên điên cuồng, phá hủy tế bào gan ồ ạt, bắt buộc phải dùng thuốc ngay.",
      "real_life_example": "Bệnh nhân viêm gan B đi tái khám đo HBV-DNA lên đến hàng tỷ copies, men gan tăng vọt, bác sĩ lập tức kê toa thuốc kháng virus đặc trị ức chế men sao chép ngược để cứu gan khỏi xơ hóa.",
      "note": "Đây là tiêu chuẩn vàng để bác sĩ chẩn đoán viêm gan B thể hoạt động, đánh giá hiệu quả của viên thuốc kháng virus bạn đang uống mỗi ngày [36, 37].",
      "advanced_knowledge": "Máy PCR siêu nhạy tự động hoàn toàn chiết xuất DNA và chạy chu kỳ nhiệt, kết hợp AI phát hiện tự động sớm các biến chủng gen đột biến kháng thuốc của virus (drug-resistance mutation), hỗ trợ đổi phác đồ ngay lập tức [38, 39].",
      "deep_knowledge": "Mục tiêu tối thượng của việc điều trị viêm gan B mạn tính không phải là loại bỏ hoàn toàn virus (vì cccDNA nằm sâu trong nhân tế bào gan), mà là ép tải lượng virus HBV-DNA xuống dưới ngưỡng đo được (undetectable) liên tục, nhằm chặn đứng quá trình dẫn tới ung thư biểu mô tế bào gan (HCC).",
      "patient_advice": "Tuyệt đối không bao giờ được tự ý bỏ uống thuốc kháng virus (như Tenofovir, Entecavir) dù chỉ 1 ngày, ngay cả khi kết quả HBV-DNA của bạn đã về mức 0. Việc tự ý ngưng thuốc sẽ làm virus bùng phát trở lại dữ dội và gây đợt viêm gan kịch phát tử vong."
    },
    "Tải lượng HCV": {
      "name": "HCV-RNA (Tải lượng virus Viêm gan C)",
      "purpose": "Đếm số lượng lõi RNA của virus Viêm gan C để bắt đầu phác đồ điều trị dứt điểm và xác nhận bệnh đã khỏi hoàn toàn [36, 37].",
      "when_to_do": "Làm ngay sau khi test tầm soát HCV Ab dương tính, và làm định kỳ trong và sau 12 tuần điều trị thuốc kháng virus [33].",
      "how_it_works": "Sử dụng công nghệ sinh học phân tử PCR để truy tìm và đếm trực tiếp các chuỗi gen RNA của virus Viêm gan C trong huyết thanh [36, 37].",
      "result_meaning": "Dưới ngưỡng phát hiện (Âm tính): Cơ thể hoàn toàn không có virus. Số lượng cao: Virus đang sống và phá hủy gan, cần uống thuốc đặc trị thế hệ mới.",
      "real_life_example": "Sau 3 tháng uống thuốc kháng virus trực tiếp DAAs, bệnh nhân xét nghiệm lại HCV-RNA thấy âm tính, bác sĩ tuyên bố bệnh nhân đã khỏi bệnh hoàn toàn (đạt SVR12).",
      "note": "Không giống như viêm gan B chỉ ức chế được virus, viêm gan C hoàn toàn có thể được quét sạch khỏi cơ thể nhờ dựa vào việc theo dõi chỉ số HCV-RNA bằng PCR [37].",
      "advanced_knowledge": "Các hệ thống giải trình tự gen thế hệ mới (NGS) cho phép không chỉ đếm HCV-RNA mà còn định typ chính xác (Genotype 1 đến 6) trong cùng một chu trình test, tiết kiệm thời gian chọn thuốc trị liệu tối ưu [38].",
      "deep_knowledge": "Đạt được SVR12 (Sustained Virologic Response) - nghĩa là tải lượng HCV-RNA dưới ngưỡng phát hiện sau 12 tuần ngưng thuốc - đồng nghĩa với việc chữa khỏi bệnh viêm gan C về mặt vi sinh học, giảm triệt để tỷ lệ ung thư gan.",
      "patient_advice": "Rất nhiều bệnh nhân tưởng nhầm mình vẫn còn mang bệnh do xét nghiệm HCV Ab còn dương tính suốt đời. Chỉ có kết quả đo tải lượng HCV-RNA âm tính mới là giấy chứng nhận 'đã sạch mầm bệnh' cho bạn."
    },
    "Dengue virus": {
      "name": "Sốt xuất huyết Dengue (NS1 Ag, IgM, IgG)",
      "purpose": "Phát hiện nhanh bạn có đang bị nhiễm virus sốt xuất huyết Dengue do muỗi vằn chích truyền mầm bệnh không.",
      "when_to_do": "Khi tự nhiên sốt hầm hập liên tục 39-40 độ C, đau nhức hốc mắt dữ dội, vã mồ hôi, đau mình mẩy, phát ban đỏ trong mùa dịch.",
      "how_it_works": "Tìm kháng nguyên vỏ virus Dengue (kháng nguyên NS1) rụng vào máu trong 3 ngày đầu sốt, hoặc tìm kháng thể IgM/IgG cơ thể sản xuất ra để chống dịch ở những ngày sau.",
      "result_meaning": "Dương tính: Đang mắc bệnh sốt xuất huyết, cần nghỉ ngơi, chườm mát, truyền dịch và theo dõi sát sao biểu đồ tiểu cầu phòng nguy cơ chảy máu ồ ạt do vỡ mạch [40].",
      "real_life_example": "Con trai sốt cao 2 ngày uống thuốc hạ sốt paracetamol không hạ, cha đưa đi test NS1 sốt xuất huyết lên 2 vạch dương tính, bác sĩ căn dặn cho uống nhiều oresol và theo dõi xuất huyết dưới da [35, 41].",
      "note": "Thời điểm làm xét nghiệm quyết định loại test. Test NS1 chỉ dương tính trong 1-4 ngày đầu. Từ ngày thứ 5 trở đi phải thử kháng thể IgM/IgG mới ra bệnh.",
      "advanced_knowledge": "Các test nhanh (Rapid test) POCT thế hệ mới sử dụng hạt nano huỳnh quang, kết hợp trí tuệ nhân tạo đọc kết quả bằng app điện thoại để báo cáo dữ liệu dịch tễ thẳng lên Cục Y tế dự phòng [42].",
      "deep_knowledge": "Virus Dengue có 4 type huyết thanh (D1-D4). Kháng thể IgG dương tính ở đợt nhiễm thứ hai có vai trò tồi tệ là làm tăng cường sự xâm nhập của virus vào đại thực bào (hiện tượng ADE), gây ra thể sốt xuất huyết sốc, tràn dịch và xuất huyết nội tạng nặng nề hơn lần nhiễm đầu rất nhiều.",
      "patient_advice": "Nếu bạn đang nghi ngờ bị sốt xuất huyết, tuyệt đối KHÔNG ĐƯỢC uống thuốc hạ sốt, giảm đau có chứa Aspirin hoặc Ibuprofen vì chúng ức chế kết tập tiểu cầu, gây chảy máu dạ dày ồ ạt dẫn đến tử vong [43, 44]. Hãy chỉ dùng Paracetamol với liều lượng an toàn [35, 41]."
    },
    "HIV": {
      "name": "HIV Ag/Ab (Kháng nguyên/Kháng thể HIV)",
      "purpose": "Khẳng định xem cơ thể có bị lây nhiễm virus suy giảm miễn dịch HIV (gây bệnh AIDS) hay không [14, 30].",
      "when_to_do": "Tầm soát trước kết hôn, phụ nữ mang thai [45, 46], khám sức khỏe đi nước ngoài, hoặc lo sợ sau khi có hành vi nguy cơ cao (quan hệ không an toàn, dẫm kim tiêm).",
      "how_it_works": "Dùng test nhanh miễn dịch hoặc máy sinh hóa tự động (phương pháp Combo bậc 4) tìm đồng thời kháng nguyên p24 của lõi virus và kháng thể kháng HIV sinh ra trong máu [14, 45].",
      "result_meaning": "Âm tính: Không mắc bệnh tại thời điểm hiện tại. Có phản ứng: Nghi ngờ nhiễm virus, bắt buộc phải gửi mẫu lên tuyến trung ương làm xét nghiệm khẳng định (3 phương pháp sinh học phân tử) mới được quyền kết luận [45].",
      "real_life_example": "Thanh niên có quan hệ không an toàn đi test HIV sau 1 tuần ra âm tính, bác sĩ giải thích đây là giai đoạn cửa sổ, khuyên 3 tháng sau quay lại test lại để có kết quả chính xác.",
      "note": "Virus HIV có 'thời kỳ cửa sổ' tàng hình. Nếu làm xét nghiệm kháng thể thông thường trong 1-3 tháng đầu từ khi phơi nhiễm, kết quả vẫn có thể ra âm tính giả dù mầm bệnh đã ẩn trong máu.",
      "advanced_knowledge": "Phần mềm LAB AI Agent tự động giải thích kết quả xét nghiệm test nhanh HIV với sự bảo mật thông tin tuyệt đối bằng blockchain, hỗ trợ liên kết giấu tên bệnh nhân tới các chương trình tư vấn điều trị ARV dự phòng trước/sau phơi nhiễm (PrEP/PEP) [14].",
      "deep_knowledge": "Xét nghiệm Combo HIV Ag/Ab thế hệ thứ 4 có khả năng phát hiện kháng nguyên p24 của lõi virus rất sớm, rút ngắn thời kỳ cửa sổ xuống chỉ còn từ 14 đến 21 ngày sau hành vi nguy cơ, thay vì phải chờ ròng rã 3 tháng như các thế hệ test cũ.",
      "patient_advice": "HIV hiện nay được xem là một bệnh mạn tính có thể kiểm soát hoàn toàn bằng thuốc kháng virus ARV. Phát hiện bệnh càng sớm, uống thuốc ức chế tải lượng virus về mức 0, bạn hoàn toàn có thể sống khỏe mạnh, kết hôn và sinh con khỏe mạnh mà không lây bệnh cho ai (Nguyên tắc Không phát hiện = Không lây truyền K=K)."
    },
    "Sốt rét": {
      "name": "Ký sinh trùng Sốt rét (Malaria smear/RDTs)",
      "purpose": "Truy tìm mầm bệnh con ký sinh trùng sốt rét Plasmodium lây qua muỗi Anophen cắn nấp trong các tế bào hồng cầu [36, 47].",
      "when_to_do": "Khi đi làm rẫy, công tác vùng rừng núi về bị sốt rét run lập cập, đắp chăn không ấm, vã mồ hôi ướt đẫm theo cơn chu kỳ [36, 47].",
      "how_it_works": "Lấy một giọt máu chích từ ngón tay phết dày lên lam kính thủy tinh, nhuộm màu Giemsa rồi soi trực tiếp dưới kính hiển vi quang học tìm hình thái con vi trùng nằm trong hồng cầu [48].",
      "result_meaning": "Dương tính: Đang bị sốt rét, vi trùng đang đục khoét phá vỡ hồng cầu gây thiếu máu tán huyết, bắt buộc phải dùng thuốc đặc trị sốt rét gấp [49].",
      "real_life_example": "Anh kỹ sư cầu đường làm việc ở rừng sâu về bị sốt rét run đùng đùng, lấy máu ngoại vi phết lam kính soi thấy con Plasmodium falciparum ác tính, được vào viện cấp cứu ngay [48].",
      "note": "Cơ hội bắt được vi trùng cao nhất, độ nhạy cao nhất là khi nhân viên y tế lấy máu ngay tại thời điểm bệnh nhân đang lên cơn sốt rét run.",
      "advanced_knowledge": "Máy đếm tế bào dòng chảy kết hợp với hệ thống kính hiển vi điện tử tự động (Digital Morphology) tích hợp trí tuệ nhân tạo (AI) quét toàn bộ lam kính, tự động nhận diện và đếm chính xác ký sinh trùng sốt rét ác tính trong vòng 3 phút [48].",
      "deep_knowledge": "Plasmodium falciparum là chủng nguy hiểm nhất vì nó làm các tế bào hồng cầu dính chùm vào nhau và bám vào thành mạch, gây tắc nghẽn vi mạch máu ở não (sốt rét não ác tính) dẫn tới hôn mê và tử vong nhanh chóng.",
      "patient_advice": "Bạn không cần nhịn ăn trước khi thử máu sốt rét [45]. Tuy nhiên, nếu bạn từng uống các loại thuốc tự mua như chloroquin hoặc thuốc hạ sốt trước đó, hình thái vi khuẩn có thể bị biến dạng làm bác sĩ khó soi ra, bạn cần khai báo trung thực các thuốc đã uống."
    },
    "Treponema pallidum": {
      "name": "Treponema pallidum (Giang mai - RPR, TPHA, Syphilis test)",
      "purpose": "Chẩn đoán sớm căn bệnh xã hội lây truyền qua đường tình dục nguy hiểm - bệnh Giang mai, để ngừa tàn phế thần kinh [45].",
      "when_to_do": "Phát hiện có vết loét hình tròn không ngứa không đau (Săng giang mai) ở vùng kín, ban đỏ lòng bàn tay chân, hoặc mẹ bầu làm xét nghiệm sàng lọc để không lây mù lòa/điếc cho thai nhi [45, 46].",
      "how_it_works": "Kiểm tra xem trong huyết thanh có kháng thể không đặc hiệu (test RPR/VDRL) và kháng thể đặc hiệu (TPHA/Syphilis) sinh ra để đánh lại xoắn khuẩn giang mai hay không [50].",
      "result_meaning": "Âm tính: Không mắc bệnh [50]. Dương tính: Đang mắc giang mai hoặc đã từng bị bệnh và chữa khỏi trong quá khứ nhưng hệ miễn dịch vẫn lưu lại vết sẹo kháng thể TPHA suốt đời.",
      "real_life_example": "Cô gái sắp cưới đi khám tiền hôn nhân làm xét nghiệm giang mai test nhanh âm tính, vui vẻ yên tâm tiến tới tổ chức đám cưới.",
      "note": "Bộ Y tế cấm dùng 1 xét nghiệm duy nhất để kết luận bệnh. Phải kết hợp một test sàng lọc độ nhạy cao (Syphilis test nhanh/TPHA) và một test định lượng (RPR) để xác định bệnh đang diễn tiến mạnh hay yếu [45].",
      "advanced_knowledge": "Phương pháp miễn dịch hóa phát quang tự động (CLIA) độ nhạy cao được sử dụng thường quy. AI trên hệ thống LIS/HIS sẽ tự động phân tích tỷ giá hiệu giá kháng thể RPR giữa các lần tái khám để báo cho bác sĩ biết bệnh nhân có đáp ứng với mũi tiêm kháng sinh hay không [51].",
      "deep_knowledge": "Hiện tượng Prozone (dương tính giả âm) có thể xảy ra ở bệnh nhân giang mai giai đoạn 2 có nồng độ kháng thể cao khủng khiếp, làm lấp kín tất cả kháng nguyên thử nghiệm, dẫn đến máy chạy ra kết quả RPR âm tính một cách sai lệch. Các phòng lab tiên tiến khắc phục bằng cách pha loãng mẫu tự động.",
      "patient_advice": "Bệnh giang mai hoàn toàn chữa khỏi dễ dàng bằng kháng sinh Penicillin nếu phát hiện ở giai đoạn 1 và 2. Bạn nên rủ bạn tình/vợ chồng đi làm xét nghiệm chung để cắt đứt chuỗi lây nhiễm 'ping-pong' qua lại."
    },
    "Salmonella": {
      "name": "Salmonella (Phản ứng Widal / Cấy phân)",
      "purpose": "Chẩn đoán bệnh thương hàn, phó thương hàn và nhiễm độc thức ăn do vi khuẩn đường ruột nguy hiểm [52, 53].",
      "when_to_do": "Khi đi ngoài phân lỏng như nước, đau bụng dữ dội, sốt cao liên miên lừ đừ, mạch đập chậm nhiều ngày sau khi ăn vỉa hè không đảm bảo vệ sinh.",
      "how_it_works": "Lấy máu tìm xem có kháng thể ngưng kết với các kháng nguyên O và H của vi khuẩn thương hàn không (Phản ứng Widal), hoặc lấy phân đem cấy trên đĩa thạch để bắt tận tay vi khuẩn [52, 53].",
      "result_meaning": "Dương tính (Hiệu giá kháng thể tăng cao): Đang bị nhiễm khuẩn thương hàn từ thực phẩm ôi thiu, xâm nhập vào máu. Cần điều trị kháng sinh đường ruột dài ngày.",
      "real_life_example": "Bác xe ôm ăn hủ tiếu gõ ngoài đường về tiêu chảy sốt cao 4 ngày, thử máu Widal dương tính mạnh, cấy phân ra vi khuẩn Salmonella, bác sĩ cho truyền dịch bù nước và tiêm thuốc kháng sinh.",
      "note": "Xét nghiệm Widal máu có thể dương tính chéo giả mạo nếu bạn từng tiêm vắc-xin thương hàn hoặc bị sốt rét [52]. Nuôi cấy phân tìm vi khuẩn là phương pháp tiêu chuẩn vàng [53].",
      "advanced_knowledge": "Công nghệ khối phổ MALDI-TOF MS (Matrix-Assisted Laser Desorption/Ionization Time-of-Flight) kết hợp với giải trình tự gen NGS định danh chính xác vi khuẩn Salmonella trong mẫu phân chỉ trong vòng 3-4 giờ, thay vì chờ đợi 48-72 giờ nuôi cấy truyền thống [54, 55].",
      "deep_knowledge": "Vi khuẩn Salmonella typhi có khả năng tàng hình trốn vào sống ký sinh dai dẳng bên trong túi mật của người bệnh. Những 'người mang trùng lành mạnh' này không có triệu chứng nhưng thải vi khuẩn ra phân liên tục, lây lan dịch bệnh ra cộng đồng qua đường ăn uống.",
      "patient_advice": "Nếu bạn được bác sĩ cho lọ để tự lấy mẫu phân tại nhà, hãy dùng muỗng nhựa nhỏ lấy một phần phân có nhầy, mủ hoặc máu, cho vào lọ và đậy kín. Bệnh phẩm phân phải được mang ngay tới phòng xét nghiệm trong vòng 2 giờ để vi khuẩn không bị chết hoặc biến đổi [56, 57]."
    },
    "Toxocara": {
      "name": "Toxocara canis/cati (Giun đũa chó mèo)",
      "purpose": "Tìm dấu vết ấu trùng giun sán từ chó mèo đi lạc vào máu và các nội tạng của cơ thể người [58].",
      "when_to_do": "Khi nuôi chó mèo sờ vuốt nhiều, bỗng hay nổi mề đay, mẩn ngứa da mạn tính uống thuốc dị ứng không bớt, hoặc trẻ em hay nghịch đất cát phình bụng, đau mắt [58].",
      "how_it_works": "Lấy máu huyết thanh tìm xem hệ thống miễn dịch có sinh ra các kháng thể (IgG) để phản ứng chống lại kháng nguyên ngoại tiết của ấu trùng giun đũa chó mèo không [58].",
      "result_meaning": "Dương tính: Bạn đã vô tình nuốt trứng giun chó mèo vào bụng, ấu trùng đang bò dưới da, gan, mắt hoặc não gây phản ứng dị ứng ngứa ngáy [58].",
      "real_life_example": "Chị gái ôm hôn mèo cưng suốt ngày, dạo này gãi xước cả da tay do nổi mẩn ngứa, xét nghiệm Toxocara dương tính, uống đủ một đợt thuốc tẩy giun sán đặc trị là dứt ngay cơn ngứa [58].",
      "note": "Kể cả khi bạn đã uống thuốc diệt sạch ấu trùng giun, lượng kháng thể IgG trong máu vẫn có thể tồn tại và cho kết quả dương tính thêm vài năm nữa, đó là vết sẹo miễn dịch chứ không phải bạn vẫn đang mắc bệnh [58].",
      "advanced_knowledge": "Kỹ thuật miễn dịch Enzyme đa mồi kết hợp AI (LAB AI Agent) tự động đối chiếu chéo chỉ số Toxocara dương tính với chỉ số bạch cầu ái toan (Eosinophil) trong công thức máu [59]. Nếu cả hai cùng tăng cao, hệ thống sẽ chẩn đoán xác định nhiễm ký sinh trùng hoạt động, tránh lạm dụng thuốc tẩy giun [60, 61].",
      "deep_knowledge": "Khi con người nuốt phải trứng Toxocara từ phân chó mèo lẫn trong rau sống hoặc đất, ấu trùng nở ra ở ruột nhưng không thể phát triển thành giun trưởng thành (vì người không phải là vật chủ tự nhiên). Chúng sẽ trở thành các ấu trùng di chuyển nội tạng (VLM) lang thang khắp gan, phổi, não, kích hoạt phản ứng viêm và bạch cầu ái toan.",
      "patient_advice": "Bạn không cần nhịn ăn trước khi lấy máu làm xét nghiệm tìm ký sinh trùng giun đũa chó mèo [45]. Để phòng bệnh, hãy xổ giun định kỳ cho thú cưng và rửa tay xà phòng kỹ trước khi ăn, đặc biệt sau khi dọn khay cát cho mèo."
    },
    "CRP": {
      "name": "CRP & hs-CRP (C-Reactive Protein)",
      "purpose": "Phát hiện tình trạng viêm nhiễm cấp tính trong cơ thể và đánh giá rủi ro mảng xơ vữa động mạch gây nhồi máu cơ tim [9, 62].",
      "when_to_do": "Khi bị sốt, sưng đau tấy đỏ, nghi ngờ viêm phổi, nhiễm trùng xương khớp hoặc khám sức khỏe tầm soát rủi ro đột quỵ ở người mỡ máu cao [62].",
      "how_it_works": "Đo nồng độ protein C-phản ứng do gan sản xuất và tống ồ ạt vào máu mỗi khi có phản ứng viêm, chấn thương mô hay nhiễm khuẩn [62].",
      "result_meaning": "Bình thường: Thường dưới 5 mg/L [9]. Tăng cao vọt: Đang bị nhiễm khuẩn cấp tính (tăng cao hơn rất nhiều so với nhiễm virus). hs-CRP tăng: Cơ thể có phản ứng viêm vi mô ẩn trong mạch máu, nguy cơ tim mạch rất cao [9, 62].",
      "real_life_example": "Em bé sốt cao lừ đừ, bạch cầu tăng nhẹ nhưng CRP tăng vọt lên 80 mg/L, bác sĩ chẩn đoán bé bị nhiễm vi khuẩn chứ không phải siêu vi thông thường, chỉ định dùng kháng sinh ngay [49, 62].",
      "note": "CRP thay đổi cực kỳ nhanh, tăng vọt sau 6 giờ viêm nhiễm và cũng tụt xuống nhanh chóng ngay khi mầm bệnh bị tiêu diệt, là công cụ hoàn hảo để theo dõi đáp ứng thuốc kháng sinh [62].",
      "advanced_knowledge": "Máy sinh hóa miễn dịch tự động (như dòng Cobas thế hệ mới) cho phép đo hs-CRP siêu nhạy đồng thời cùng bộ mỡ máu, AI lập tức tính toán thang điểm ASCVD rủi ro nhồi máu cơ tim trong 10 năm của bệnh nhân [50, 62].",
      "deep_knowledge": "Nhiều nghiên cứu y khoa chứng minh rằng mảng xơ vữa mạch vành không chỉ do mỡ máu bám vào, mà bản chất là một quá trình viêm mạn tính ở nội mạc mạch máu. hs-CRP siêu nhạy sẽ bắt được tín hiệu viêm này, giúp bác sĩ phòng ngừa đột quỵ ngay cả khi nồng độ cholesterol của bệnh nhân chưa ở mức báo động đỏ [62].",
      "patient_advice": "Khi đi kiểm tra sức khỏe tim mạch với chỉ số hs-CRP, bạn cần đảm bảo cơ thể mình đang khỏe mạnh hoàn toàn. Nếu bạn đang bị cảm cúm, nhổ răng, hay viêm họng rát cổ, CRP sẽ tăng cao do viêm cục bộ làm sai lệch việc đánh giá tim mạch."
    },
    "Pro-calcitonin": {
      "name": "Pro-calcitonin (PCT)",
      "purpose": "Chỉ dấu sinh học sắc bén nhất để nhận diện nhanh chóng tình trạng nhiễm trùng máu nguy hiểm tính mạng do vi khuẩn (Sepsis) [63].",
      "when_to_do": "Khi bệnh nhân cấp cứu sốt rét run lẩy bẩy, tụt huyết áp, nhịp tim nhanh, lơ mơ nghi ngờ bị sốc nhiễm khuẩn toàn thân [63].",
      "how_it_works": "Đo nồng độ Procalcitonin - tiền chất của hormone calcitonin. Bình thường nó chỉ tiết ra ở tuyến giáp với lượng vô cùng nhỏ, nhưng khi độc tố vi khuẩn tràn vào máu, tất cả tế bào trong cơ thể sẽ bị kích hoạt sản xuất PCT ồ ạt [64].",
      "result_meaning": "Bình thường: Ít khả năng nhiễm vi khuẩn huyết. Tăng cao dựng đứng: Cảnh báo đỏ nhiễm khuẩn máu nặng, sốc nhiễm trùng, tính mạng ngàn cân treo sợi tóc, phải dùng kháng sinh liều cực mạnh phổ rộng ngay tắp lự.",
      "real_life_example": "Bệnh nhân cao tuổi sốt viêm phổi, test CRP tăng nhẹ nhưng Pro-calcitonin máu nhảy vọt lên 10 ng/mL, bác sĩ khoa ICU nhận định ngay bệnh nhân bị nhiễm trùng máu lan tỏa, lập tức chuyển thở máy và cấy máu [42].",
      "note": "Pro-calcitonin đặc hiệu tuyệt vời để phân biệt giữa nhiễm vi khuẩn (làm PCT tăng vọt) và nhiễm virus (chỉ làm PCT tăng nhẹ hoặc không tăng). Hữu ích vô cùng để bác sĩ ra quyết định 'Có kê đơn kháng sinh hay không?'",
      "advanced_knowledge": "Được đưa vào các dòng máy xét nghiệm tại giường (POCT) dùng trong xe cứu thương hoặc khoa hồi sức cấp cứu (ICU). Chỉ với một giọt máu chích từ tay, máy trả kết quả rủi ro sốc nhiễm trùng trong vòng 15 phút, giúp rút ngắn thời gian cứu mạng vàng (Golden Hour) [42, 63].",
      "deep_knowledge": "Kể từ ngày thứ 2 đến thứ 3 trở đi sau khi dùng đúng loại thuốc kháng sinh tiêu diệt được vi khuẩn, nồng độ PCT sẽ tụt dốc thê thảm theo chu kỳ bán hủy 24h của nó. Nhờ theo dõi biểu đồ PCT hạ nhiệt, bác sĩ có thể quyết định cho bệnh nhân ngừng kháng sinh sớm một cách tự tin, giảm thiểu tình trạng kháng thuốc.",
      "patient_advice": "Nếu bạn bị sốt xuất huyết hoặc sốt siêu vi, con số này thường sẽ âm tính. Việc không kê kháng sinh cho bạn lúc này là một quyết định y khoa chính xác của bác sĩ, bạn không nên đòi hỏi phải truyền kháng sinh."
    },
    "Interleukin 6": {
      "name": "Interleukin 6 (IL-6)",
      "purpose": "Đo lường mức độ bùng phát khủng khiếp của phản ứng viêm toàn thân và 'cơn bão cytokine' [64, 65].",
      "when_to_do": "Khi bị viêm phổi cấp tính nặng (như nhiễm COVID-19, cúm ác tính), bệnh tự miễn bùng phát, hoặc bệnh nhân hồi sức cấp cứu bị suy hô hấp cấp (ARDS) [65].",
      "how_it_works": "Đo nồng độ chất trung gian hóa học IL-6 do đại thực bào và tế bào lympho tiết ra. IL-6 có nhiệm vụ truyền tin gọi hàng triệu tế bào miễn dịch khác tụ tập lại ổ viêm để tiêu diệt mầm bệnh [65].",
      "result_meaning": "Bình thường: Hệ miễn dịch êm dịu. Tăng rất cao: Hệ miễn dịch đang hoảng loạn, phản ứng phòng vệ quá mức (Cơn bão cytokine) và đang quay ra tự phá hủy cấu trúc phổi, mạch máu nội tạng của chính cơ thể [65].",
      "real_life_example": "Bệnh nhân nhiễm cúm A biến chứng viêm phổi nặng, khó thở tím tái, đo IL-6 cao vọt. Bác sĩ cảnh báo phổi đang bị viêm tấy do chính hệ miễn dịch đánh quá tay, phải lọc máu và tiêm thuốc ức chế miễn dịch (như Tocilizumab) để cứu mạng.",
      "note": "IL-6 là kẻ châm ngòi nổ cho việc gan sản xuất ra CRP [65]. Do đó IL-6 tăng sớm hơn CRP rất nhiều, đưa ra tín hiệu báo cháy sớm nhất cho các bác sĩ hồi sức.",
      "advanced_knowledge": "Kỹ thuật miễn dịch điện hóa phát quang (ECLIA) vi mô kết hợp với thuật toán AI dự báo diễn tiến ARDS. Phần mềm LAB AI tự động kích hoạt giao thức hội chẩn từ xa (Tele-ICU) khi phát hiện đường cong IL-6 của bệnh nhân vào mức báo động đỏ [14].",
      "deep_knowledge": "Interleukin-6 là một 'con dao hai lưỡi'. Ở lượng nhỏ, nó giúp cơ thể chống lại vi khuẩn và sửa chữa mô tổn thương. Ở lượng lớn, nó gây rò rỉ dịch từ mao mạch (tràn dịch màng phổi, sốc trụy mạch) và khởi động quá trình đông máu lan tỏa trong lòng mạch (DIC) tàn phá đa tạng.",
      "patient_advice": "IL-6 là một xét nghiệm chuyên sâu kỹ thuật cao dành cho bệnh nhân nặng nằm viện. Tuy nhiên, tình trạng căng thẳng mạn tính, thiếu ngủ triền miên và béo phì cũng làm nồng độ IL-6 nền trong máu bạn luôn ở mức râm ran, đẩy nhanh sự già nua của cơ thể."
    },
    "Bạch cầu": {
      "name": "Bạch cầu (White Blood Cells - WBC)",
      "purpose": "Đánh giá chức năng của đội quân bảo vệ miễn dịch của cơ thể, phát hiện viêm nhiễm, dị ứng hoặc bệnh máu ác tính [64, 66].",
      "when_to_do": "Trong các lần khám sức khỏe thông thường định kỳ, khám cấp cứu khi có sốt, viêm họng, đau quặn bụng tấy đỏ ở bất kỳ đâu [64, 67].",
      "how_it_works": "Máy huyết học sẽ hút mẫu máu, dùng tia laser và dòng chảy (Flow cytometry) tự động đếm số lượng các chiến binh bạch cầu trong 1 thể tích máu, chia ra 5 loại binh chủng khác nhau (NEU, LYM, MONO, EOS, BASO) [59, 66, 68-70].",
      "result_meaning": "Bình thường từ 4 - 10 G/L (tỷ tế bào/lít) [70]. Tăng cao trên 10 G/L: Đang có nhiễm khuẩn cấp, viêm ruột thừa, áp xe tấy mủ hoặc ung thư máu ác tính (leukemia) [64, 68]. Giảm thấp: Suy giảm miễn dịch (như HIV), nhiễm trùng do virus nặng, hóa trị ung thư hoặc suy tủy [64, 69, 71].",
      "real_life_example": "Anh thanh niên đau quặn quanh rốn rồi lan sang bụng phải, buồn nôn, thử máu công thức thấy bạch cầu (WBC) vọt lên 18.000 (18 G/L) và bạch cầu trung tính (NEU) chiếm 85% [68]. Bác sĩ chẩn đoán viêm ruột thừa cấp, đưa đi mổ cắt ruột thừa ngay lập tức.",
      "note": "Bạch cầu là một phần không thể tách rời trong xét nghiệm tổng phân tích tế bào máu ngoại vi (CBC), một xét nghiệm rẻ tiền, làm nhanh trong vài phút nhưng đem lại thông tin sống còn [64, 72, 73]. Việc nhịn ăn là không bắt buộc với chỉ số bạch cầu [45].",
      "advanced_knowledge": "Công nghệ phân tích hình thái tế bào kỹ thuật số tự động (Digital Cell Morphology) sử dụng AI quét và phân loại hàng triệu tế bào máu. Trí tuệ nhân tạo (như LAB AI Agent) có khả năng tự động phát hiện và cảnh báo các tế bào bạch cầu non bất thường (Blast cells) cảnh báo ung thư tủy sống mà không cần soi kính hiển vi bằng mắt người mỏi mệt [48, 74].",
      "deep_knowledge": "Mỗi binh chủng bạch cầu có chuyên môn khác nhau: Neutrophil (NEU) như lính thủy đánh bộ xông pha ăn vi khuẩn sinh ra mủ xanh mủ vàng [68, 71]. Lymphocyte (LYM) như sĩ quan tình báo sản xuất kháng thể diệt virus và ung thư [69, 71]. Eosinophil (EOS) như đội chống hóa học chuyên xịt độc chất diệt ký sinh trùng giun sán [59, 75].",
      "patient_advice": "Tình trạng lo âu quá mức, la khóc nhiều ở trẻ em khi lấy máu, hoặc việc bạn vừa tập thể dục thể thao gắng sức có thể làm bạch cầu vọt ra từ mép mạch máu, làm kết quả tăng lên giả tạo. Hãy nghỉ ngơi, hít thở sâu tĩnh tâm 15 phút trước khi rút máu [76]."
    },
    "Máu lắng": {
      "name": "Máu lắng (Erythrocyte Sedimentation Rate - ESR / VS)",
      "purpose": "Báo động tình trạng viêm nhiễm mạn tính đang âm ỉ cháy trong cơ thể, hỗ trợ chẩn đoán lao, bệnh tự miễn như viêm khớp dạng thấp [77, 78].",
      "when_to_do": "Khi hay bị đau nhức xương khớp sưng đỏ kéo dài, cơ thể sốt nhẹ mệt mỏi giảm cân không rõ lý do âm ỉ từ tháng này qua tháng khác [78].",
      "how_it_works": "Cho máu chưa đông vào một ống nghiệm dựng dọc hẹp và dài, sau đó canh đồng hồ đo xem quãng đường các tế bào hồng cầu rơi lắng xuống đáy ống là bao nhiêu milimet trong 1 giờ [77].",
      "result_meaning": "Bình thường: Hồng cầu rơi lắng rất chậm. Lắng nhanh (Chỉ số cao mm/giờ): Trong máu đang chứa rất nhiều các protein viêm kết dính (như fibrinogen), khiến hồng cầu bị bết dính vào nhau thành chuỗi như chồng tiền xu, làm chúng nặng hơn và rơi xuống đáy nhanh hơn [77].",
      "real_life_example": "Bà cụ đau cứng các khớp ngón tay mỗi sáng ngủ dậy kéo dài hàng tháng, làm xét nghiệm đo máu lắng (ESR) cao lên tới 80 mm/h. Kết hợp với Anti-CCP dương tính, bác sĩ chẩn đoán bệnh viêm khớp dạng thấp đang hoạt động mạnh.",
      "note": "Xét nghiệm máu lắng rất kém đặc hiệu, nó không chỉ điểm chính xác tình trạng viêm nằm ở gan, thận hay khớp nào, nó chỉ như một chiếc đèn báo cháy cho toàn cơ thể [77]. Thường được làm song song với CRP.",
      "advanced_knowledge": "Công nghệ phân tích quang học tự động (như dòng Alifax) thay thế cho ống thủy tinh Westergren truyền thống cổ lỗ sĩ. Máy có khả năng đo động lực học ngưng kết hồng cầu và trả kết quả máu lắng cực kỳ chuẩn xác trong thời gian chưa đầy 20 giây (thay vì phải ngồi chờ 1 giờ đồng hồ như y học thế kỷ 20).",
      "deep_knowledge": "Máu lắng (ESR) không bao giờ tăng nhanh ngay lập tức trong nhiễm khuẩn cấp như CRP. Nó thường phản ứng chậm chạp và ở lại lâu trong máu (có thể mất cả tháng để về bình thường). Sự tăng vọt bất thường của máu lắng (trên 100 mm/h) thường là tín hiệu kinh điển của bệnh đau tủy xương (đa u tủy) hoặc lao tiến triển.",
      "patient_advice": "Chỉ số máu lắng ở phụ nữ mang thai bình thường hoặc người già cũng thường cao hơn một chút so với người trẻ do sinh lý tự nhiên. Bạn không cần phải quá hoang mang nếu nó chỉ tăng nhẹ vài milimet."
    },
    "Lactat": {
      "name": "Lactate (Axit Lactic)",
      "purpose": "Đo mức độ 'ngạt thở' thiếu oxy cục bộ của tế bào, chẩn đoán nguy cơ nhiễm toan máu và rủi ro tử vong do các trạng thái sốc (Sốc nhiễm khuẩn, sốc mất máu) [54].",
      "when_to_do": "Khi bệnh nhân được chuyển vào khoa cấp cứu trong tình trạng tụt huyết áp tay chân lạnh ngắt, mất máu ồ ạt, thở ngáp cá, lơ mơ khó thở (Suy hô hấp) [54, 63].",
      "how_it_works": "Đo nồng độ Axit lactic trong máu - một chất cặn bã độc hại sinh ra khi các tế bào cơ thể bị đói oxy nhưng vẫn phải vùng vẫy chuyển hóa yếm khí (chuyển hóa kỵ khí) để cố tạo ra chút năng lượng sinh tồn [54, 63].",
      "result_meaning": "Bình thường: Máu lưu thông bơm oxy tốt cho toàn bộ tế bào. Tăng cao (>2 mmol/L): Tế bào các nội tạng (gan, thận, não) đang thiếu máu tưới, sắp hoại tử hoại tử vì cạn kiệt oxy. Nguy hiểm chết người, tiên lượng rất tồi tệ.",
      "real_life_example": "Bệnh nhân bị tai nạn giao thông chấn thương gãy xương đùi chảy máu ồ ạt 2 lít, vào viện đo Lactate máu cao vọt lên 5 mmol/L. Bác sĩ khoa hồi sức cấp cứu lập tức mở hai đường truyền máu đỏ xối xả và truyền dịch để tăng tưới máu não cứu bệnh nhân khỏi chết não.",
      "note": "Thường được lấy cùng lúc với mẫu máu làm xét nghiệm Khí máu động mạch (ABG) tại phòng ICU bằng cách chọc kim sâu vào động mạch quay ở cổ tay [79].",
      "advanced_knowledge": "Thiết bị xét nghiệm tại chỗ (POCT) cầm tay sử dụng chip vi lỏng (microfluidic chip) được trang bị ngay trên các xe cứu thương, giúp điều dưỡng đo Lactate tại hiện trường tai nạn chỉ trong 10 giây. AI gửi tín hiệu từ xa để bệnh viện chuẩn bị sẵn máu nhóm O truyền ngay khi xe tới cổng [42, 63].",
      "deep_knowledge": "Sự thanh thải Lactate (Lactate clearance) là một chỉ số sinh tồn. Gan và thận là nhà máy dọn dẹp Lactate chính. Khi hồi sức truyền dịch mà thấy nồng độ Lactate giảm được trên 10% sau 2 giờ, đó là dấu hiệu vàng chứng tỏ cơ thể đã thoát án tử hình, máu đã bơm tới các tạng trở lại.",
      "patient_advice": "Với người bình thường, nếu bạn vận động tập gym nâng tạ cực nặng hoặc chạy kiệt sức, Lactate trong cơ bắp cũng sẽ tăng ồ ạt gây cảm giác rã rời, đau nhức cơ vắt kiệt. Y tá sẽ dặn bạn lấy máu xét nghiệm Lactate phải tuyệt đối thả lỏng, không được gồng siết tay thắt garo lâu, nếu không nồng độ này sẽ bị cao giả tạo do co cơ [54]."
    },
    "Nhuộm AFB tìm Lao": {
      "name": "Nhuộm AFB (Kháng cồn kháng toan) tìm vi khuẩn Lao",
      "purpose": "Xác định sự hiện diện của vi khuẩn lao (Mycobacterium tuberculosis) trong đờm hoặc dịch tiết, đánh giá mức độ lây nhiễm.",
      "when_to_do": "Khi ho khạc đờm kéo dài trên 2 tuần, ho ra máu, sốt nhẹ về chiều, sụt cân, đổ mồ hôi trộm ban đêm.",
      "how_it_works": "Lấy mẫu đờm bôi lên lam kính, nhuộm bằng hóa chất đặc biệt (Ziehl-Neelsen). Vi khuẩn lao có lớp vỏ sáp lipid dày nên sẽ giữ lại màu đỏ hồng (kháng cồn toan) nổi bật trên nền xanh khi soi dưới kính hiển vi.",
      "result_meaning": "Âm tính: Không thấy vi khuẩn (nhưng chưa loại trừ hoàn toàn). Dương tính: Chắc chắn mắc lao phổi thể hoạt động, nguy cơ lây lan cho cộng đồng rất cao.",
      "real_life_example": "Bác xe ôm ho sụ sụ cả tháng, sụt 5kg, đi khạc đờm xét nghiệm AFB dương tính mức độ 3+, lập tức được đưa vào chương trình uống thuốc lao miễn phí và cách ly tại nhà.",
      "note": "Xét nghiệm này có nhược điểm là độ nhạy không cao, cần mật độ vi khuẩn khá lớn (khoảng 10.000 con/ml đờm) mới có thể soi thấy bằng mắt thường.",
      "advanced_knowledge": "Các phòng lab tiên tiến hiện sử dụng Kính hiển vi huỳnh quang LED quét tự động kết hợp thuật toán AI nhận diện hình ảnh, giúp phát hiện vi khuẩn lao nhanh gấp 4 lần và tăng độ nhạy lên 20% so với soi kính quang học bằng mắt người.",
      "deep_knowledge": "Lớp vỏ Mycolic acid của vi khuẩn lao khiến chúng không bắt màu nhuộm Gram thông thường. Nhuộm AFB dương tính không chỉ là vi khuẩn lao (M. tuberculosis) mà còn có thể là nhóm NTM (Lao không điển hình), cần nuôi cấy hoặc chạy PCR để phân biệt chính xác.",
      "patient_advice": "Bắt buộc phải khạc đờm sâu từ tận đáy phổi vào buổi sáng sớm khi mới thức dậy. Tuyệt đối không lấy nước bọt trong miệng vì nước bọt không chứa vi khuẩn lao, làm kết quả bị âm tính giả."
    },
    "Xpert MTB/RIF": {
      "name": "Xpert MTB/RIF (GeneXpert)",
      "purpose": "Phát hiện cực nhanh vi khuẩn lao và đồng thời xác định ngay vi khuẩn có mang gen kháng thuốc Rifampicin hay không.",
      "when_to_do": "Người nghi ngờ mắc lao phổi, lao ngoài phổi (lao màng não, hạch), bệnh nhân HIV nghi nhiễm lao, hoặc người tiếp xúc với nguồn lây lao kháng thuốc.",
      "how_it_works": "Sử dụng công nghệ sinh học phân tử Real-time PCR trong một hệ thống đóng kín tự động hóa hoàn toàn. Máy sẽ phá vỡ tế bào vi khuẩn, khuếch đại và nhận diện đoạn gen rpoB đặc trưng của vi khuẩn lao.",
      "result_meaning": "Âm tính: Không có DNA vi khuẩn lao. Dương tính: Đang mắc bệnh lao. Máy sẽ báo thêm chữ 'Kháng Rifampicin' nếu vi khuẩn đã đột biến không còn sợ thuốc này.",
      "real_life_example": "Bệnh nhân ho ra máu nhưng soi đờm AFB 3 lần đều âm tính. Bác sĩ cho chạy Xpert MTB/RIF thì bắt được ngay DNA vi khuẩn lao ẩn nấp và may mắn là vi khuẩn chưa kháng thuốc.",
      "note": "Đây là xét nghiệm mang tính cách mạng do WHO khuyến cáo, cho kết quả chỉ sau 2 giờ thay vì phải đợi cấy đờm hàng tháng trời.",
      "advanced_knowledge": "Thế hệ Xpert MTB/RIF Ultra ra đời với độ nhạy được đẩy lên mức tối đa, có thể phát hiện vi khuẩn lao ngay cả khi mật độ chỉ có vỏn vẹn 16 con/ml đờm, đặc biệt xuất sắc trong việc tìm lao ở trẻ em và người nhiễm HIV.",
      "deep_knowledge": "Xpert phát hiện DNA (vật liệu di truyền) của vi khuẩn, do đó nó có thể phát hiện cả vi khuẩn lao đã chết. Vì vậy, xét nghiệm này không được dùng để theo dõi xem người bệnh đã khỏi bệnh hay chưa sau khi đã uống thuốc lao.",
      "patient_advice": "Dù chi phí xét nghiệm này khá cao, nhưng nó là 'tiêu chuẩn vàng' hiện đại. Nếu bạn bị chẩn đoán lao, hãy yêu cầu được làm xét nghiệm này để đảm bảo phác đồ thuốc bạn sắp uống trong 6 tháng tới thực sự có hiệu quả."
    },
    "QuantiFERON-TB": {
      "name": "QuantiFERON-TB Gold Plus (IGRA)",
      "purpose": "Phát hiện tình trạng nhiễm vi khuẩn lao tiềm ẩn trong cơ thể (Lao ngủ đông) thông qua phản ứng miễn dịch đặc hiệu.",
      "when_to_do": "Người khỏe mạnh nhưng có tiếp xúc gần với bệnh nhân lao, nhân viên y tế, khám sức khỏe đi định cư nước ngoài, hoặc bệnh nhân chuẩn bị dùng thuốc ức chế miễn dịch/sinh học.",
      "how_it_works": "Lấy máu tĩnh mạch và ủ với các kháng nguyên peptide đặc hiệu của vi khuẩn lao. Nếu cơ thể đã từng tiếp xúc với lao, các tế bào lympho T (T-cells) sẽ tiết ra chất Interferon-gamma (IFN-g) và máy sẽ đo nồng độ chất này.",
      "result_meaning": "Âm tính: Không nhiễm vi khuẩn lao. Dương tính: Chắc chắn đang mang vi khuẩn lao trong người dù chưa ốm đau (Lao tiềm ẩn) hoặc đang bị lao hoạt động.",
      "real_life_example": "Một bác sĩ xương khớp chuẩn bị tiêm thuốc sinh học cho bệnh nhân viêm khớp dạng thấp. Kết quả QuantiFERON dương tính, bệnh nhân phải uống thuốc dự phòng lao 3 tháng trước khi tiêm để tránh vi khuẩn lao bùng phát tàn phá phổi.",
      "note": "Xét nghiệm này không bị dương tính giả (nhiễu) bởi mũi tiêm phòng vắc-xin lao (BCG) lúc nhỏ như phương pháp test da Mantoux (TST).",
      "advanced_knowledge": "Công nghệ phân tích miễn dịch tự động công suất lớn (CLIA) nay được áp dụng cho IGRA, giúp xử lý hàng trăm mẫu máu cùng lúc với độ nhạy 98%, hỗ trợ tầm soát lao cộng đồng quy mô lớn.",
      "deep_knowledge": "Chỉ số QuantiFERON chỉ trả lời câu hỏi 'Có nhiễm hay không?', chứ không thể phân biệt được bạn đang bị lao tiềm ẩn hay lao đang hoạt động. Phải luôn kết hợp với chụp X-quang phổi và triệu chứng lâm sàng để ra quyết định điều trị.",
      "patient_advice": "Đây là xét nghiệm máu, bạn không cần nhịn ăn. Ống máu sau khi lấy cần được giữ ở nhiệt độ phòng và đưa ngay vào tủ ủ ấm 37 độ C trong vòng 16 giờ, tuyệt đối không được để ống máu vào tủ lạnh."
    },
    "Khí máu": {
      "name": "Khí máu động mạch (ABG - Arterial Blood Gas)",
      "purpose": "Đánh giá chính xác tình trạng trao đổi oxy/CO2 của phổi và độ cân bằng axit-kiềm (pH) sống còn trong máu.",
      "when_to_do": "Khi bệnh nhân khó thở dữ dội, tím tái ngạt thở, suy hô hấp nặng, hen phế quản ác tính, suy thận cấp, hoặc bệnh nhân đang hôn mê, thở máy.",
      "how_it_works": "Đâm kim thẳng vào động mạch (thường ở cổ tay hoặc nếp gấp bẹn) để lấy dòng máu đỏ tươi vừa từ tim bơm ra. Đo lường trực tiếp pH, phân áp Oxy (pO2), phân áp Carbon dioxide (pCO2) và Bicarbonate (HCO3-).",
      "result_meaning": "Bình thường (pH 7.35 - 7.45): Trao đổi khí và chuyển hóa ổn định. Bất thường: Máu bị thiếu oxy trầm trọng (Hypoxemia), nhiễm toan (Axit hóa) hoặc nhiễm kiềm, tính mạng đang bị đe dọa nghiêm trọng.",
      "real_life_example": "Người bệnh phổi tắc nghẽn mạn tính (COPD) lên cơn khó thở kịch phát lơ mơ, đo khí máu thấy pCO2 ứ đọng lên 80 mmHg (gấp đôi bình thường), máu nhiễm toan nặng. Bác sĩ lập tức đặt ống nội khí quản cho thở máy.",
      "note": "Đây là xét nghiệm sinh tử tại phòng cấp cứu. Lấy máu động mạch đâm sâu hơn và sẽ đau tức hơn rất nhiều so với lấy máu tĩnh mạch ở nếp gấp tay thông thường.",
      "advanced_knowledge": "Hệ thống thiết bị xét nghiệm khí máu tại giường (POCT) nay chỉ cần 1 giọt máu (100 µL) và cho ra trọn bộ kết quả sinh tồn cùng với điện giải đồ (Na, K, Ca, Lactate) chỉ trong vòng 30 đến 45 giây [3].",
      "deep_knowledge": "Việc máu lẫn bọt khí từ bên ngoài hoặc mẫu máu để quá 30 phút ở nhiệt độ phòng (không ướp đá) sẽ làm bạch cầu tiêu thụ mất oxy, khiến kết quả pO2 bị tụt giảm giả tạo. Ống tiêm lấy khí máu bắt buộc phải được tráng chất chống đông Heparin chuyên dụng [4].",
      "patient_advice": "Khi chích máu động mạch ở cổ tay sẽ có cảm giác buốt thấu. Sau khi rút kim, bạn hoặc người nhà phải dùng 3 ngón tay đè chặt, miết mạnh vào vị trí chích liên tục trong 5 - 10 phút. Nếu buông ra sớm, áp lực động mạch sẽ bơm máu phụt ra ngoài gây khối máu tụ sưng to."
    },
    "Cấy vi khuẩn": {
      "name": "Nuôi cấy vi khuẩn & Kháng sinh đồ (Culture & Susceptibility)",
      "purpose": "Định danh chính xác mặt mũi chủng loại vi khuẩn đang gây bệnh và thử nghiệm trực tiếp xem chúng bị tiêu diệt bởi loại kháng sinh nào.",
      "when_to_do": "Khi bị nhiễm trùng nặng, nhiễm trùng huyết, vết thương mưng mủ mãi không lành, viêm đường tiết niệu tái phát nhiều lần uống thuốc không bớt.",
      "how_it_works": "Lấy mẫu bệnh phẩm (máu, mủ, nước tiểu, dịch não tủy) cấy lên các đĩa thạch dinh dưỡng chuyên dụng, ủ ấm mô phỏng cơ thể người. Sau khi vi khuẩn mọc thành khóm, chúng sẽ được cho đối đầu với các viên giấy tẩm kháng sinh.",
      "result_meaning": "Âm tính: Không có vi khuẩn mọc. Dương tính: Gọi tên được vi khuẩn (VD: E.coli, Tụ cầu vàng) và in ra bảng Kháng sinh đồ (Nhạy cảm: thuốc có tác dụng; Kháng thuốc: thuốc đã bị vô hiệu hóa).",
      "real_life_example": "Bà cụ bị loét bàn chân tiểu đường nhiễm trùng thối rữa, bác sĩ quệt mủ đi cấy tìm ra con vi khuẩn Pseudomonas aeruginosa đa kháng thuốc, lập tức đổi phác đồ sang dùng kháng sinh dạng truyền tĩnh mạch thế hệ mới để cứu bàn chân khỏi bị cưa cụt.",
      "note": "Để kết quả chính xác 100%, mẫu bệnh phẩm bắt buộc phải được lấy TRƯỚC KHI bệnh nhân uống hoặc tiêm liều thuốc kháng sinh đầu tiên của đợt bệnh.",
      "advanced_knowledge": "Công nghệ khối phổ MALDI-TOF MS kết hợp giải trình tự gen (NGS) hiện đại đã phá vỡ rào cản thời gian. Thay vì chờ đợi 48-72 giờ như trước, vi khuẩn nay được định danh và phát hiện gen kháng thuốc chỉ trong vòng 3 đến 6 giờ.",
      "deep_knowledge": "Kháng sinh đồ sẽ cung cấp giá trị MIC (Nồng độ ức chế tối thiểu). Chỉ số MIC càng thấp nghĩa là kháng sinh đó càng mạnh và càng dễ tiêu diệt vi khuẩn. Bác sĩ dược lâm sàng sẽ dựa vào MIC để tính toán liều lượng thuốc vừa đủ diệt khuẩn mà không làm hại thận của bệnh nhân.",
      "patient_advice": "Nếu bạn được yêu cầu lấy mẫu nước tiểu đi cấy, hãy rửa sạch vùng kín bằng nước, thấm khô, và chỉ hứng lấy đoạn 'nước tiểu giữa dòng' vào lọ vô khuẩn. Tuyệt đối không để ngón tay chạm vào lòng trong của nắp lọ để tránh vi khuẩn từ tay rơi vào làm hỏng mẫu [5]."
    },
    "Dịch não tủy": {
      "name": "Xét nghiệm Dịch não tủy (CSF Analysis)",
      "purpose": "Chọc tìm nguyên nhân gây viêm màng não, viêm não, xuất huyết dưới nhện hoặc các bệnh lý thoái hóa thần kinh trung ương.",
      "when_to_do": "Khi bệnh nhân có hội chứng màng não: Đau đầu dữ dội như búa bổ, cứng gáy (cổ không gập được xuống ngực), nôn vọt, sợ ánh sáng, sốt cao, co giật hoặc lơ mơ.",
      "how_it_works": "Bác sĩ thực hiện thủ thuật chọc dò tủy sống thắt lưng (Lumbar Puncture) để hút ra vài mililit nước dịch não tủy. Mẫu dịch được đem đi đếm tế bào, đo lượng đường (Glucose), Đạm (Protein) và nhuộm cấy tìm vi khuẩn/virus.",
      "result_meaning": "Bình thường: Dịch trong vắt như nước mưa. Bất thường: Dịch đục ngầu như nước vo gạo, đường giảm sâu, đạm tăng vọt là dấu hiệu kinh điển của Viêm màng não mủ do vi khuẩn. Dịch có máu không đông là chảy máu não.",
      "real_life_example": "Em bé 2 tuổi sốt cao cứng cổ li bì, bác sĩ chọc dịch não tủy đục ngầu, xét nghiệm PCR bắt được vi khuẩn Não mô cầu (Neisseria meningitidis), lập tức cho thuốc đặc trị và cách ly chống dịch.",
      "note": "Xét nghiệm này mang tính khẩn cấp sinh tử. Nếu đường (Glucose) trong dịch não tủy sụt giảm xuống dưới 1/2 so với đường trong máu tĩnh mạch, đó là bằng chứng vi khuẩn đang ăn đường trong não.",
      "advanced_knowledge": "Các hệ thống PCR đa mồi tự động (Multiplex PCR Syndromic panels) cho phép quét cùng một lúc 14 loại vi khuẩn, virus và nấm gây viêm màng não trực tiếp từ mẫu dịch não tủy, trả kết quả chẩn đoán chính xác tuyệt đối chỉ sau 1 giờ đồng hồ.",
      "deep_knowledge": "Sự xuất hiện của dải Oligoclonal bands (OCB) trong điện di protein dịch não tủy là một dấu ấn sinh học đặc trưng, giúp các bác sĩ thần kinh chẩn đoán bệnh Xơ cứng rải rác (Multiple Sclerosis) - một căn bệnh tự miễn phá hủy màng bọc dây thần kinh.",
      "patient_advice": "Thủ thuật chọc dò tủy sống rất an toàn, kim chỉ chọc ở vùng thắt lưng thấp nơi tủy sống đã kết thúc nên không gây liệt. Sau khi chọc xong, bạn BẮT BUỘC phải nằm nằm sấp hoặc nằm ngửa đầu bằng tuyệt đối (không kê gối) trong 4-6 tiếng để tránh biến chứng tụt áp lực nội sọ gây đau đầu dữ dội."
    },
    "Sắt huyết thanh": {
      "name": "Sắt huyết thanh (Serum Iron)",
      "purpose": "Đo lường lượng sắt đang lưu thông (trôi nổi) trong máu, bước đầu chẩn đoán bệnh thiếu máu thiếu sắt hoặc hội chứng ứ đọng sắt.",
      "when_to_do": "Khi có biểu hiện xanh xao, nhợt nhạt, móng tay giòn dễ gãy, rụng tóc, hoa mắt chóng mặt khi thay đổi tư thế, hoặc làm bộ xét nghiệm khám sức khỏe tổng quát.",
      "how_it_works": "Đo nồng độ khoáng chất sắt (Fe3+) đang gắn kết với protein vận chuyển Transferrin trong huyết thanh tại thời điểm lấy máu.",
      "result_meaning": "Thấp: Gợi ý bệnh thiếu máu do đói sắt, mất máu rỉ rả (như trĩ, rong kinh), hoặc khả năng hấp thu kém. Cao: Truyền máu quá nhiều, ngộ độc sắt, hoặc bệnh di truyền ứ sắt Hemochromatosis làm đen da, hỏng gan.",
      "real_life_example": "Cô sinh viên hay bị xây xẩm mặt mày, đi đo sắt huyết thanh thấy thấp chạm đáy, MCV hồng cầu nhỏ xíu. Bác sĩ kê ngay viên sắt và dặn ăn nhiều thịt bò, rau chân vịt.",
      "note": "Lượng sắt lưu thông trong máu dao động rất dữ dội trong ngày, không ổn định, nên không bao giờ được dùng đơn độc để kết luận bệnh mà phải kết hợp với Ferritin.",
      "advanced_knowledge": "Hệ thống AI tự động cảnh báo tương tác chéo (Cross-check): Nếu bệnh nhân đang bị viêm nhiễm nặng (CRP tăng cao), máy sẽ tự động ghi chú kết quả Sắt huyết thanh có thể bị sụt giảm giả tạo do phản ứng viêm cấp tính phong tỏa sắt trong đại thực bào.",
      "deep_knowledge": "Hầu hết lượng sắt trong cơ thể đều nằm an toàn trong hồng cầu (Hemoglobin) hoặc cất trong kho (Ferritin). Lượng sắt huyết thanh đo được thực chất chỉ chiếm chưa tới 1% tổng lượng sắt toàn cơ thể. Thuốc tránh thai đường uống có thể làm tăng lượng Transferrin, kéo theo sự gia tăng giả tạo của sắt huyết thanh.",
      "patient_advice": "Sắt trong máu tuân theo nhịp sinh học, tăng cao nhất vào buổi sáng và giảm sâu vào buổi chiều tối. Bạn BẮT BUỘC phải đi lấy máu xét nghiệm vào buổi sáng sớm, lúc đói. Tuyệt đối ngừng uống viên bổ sung sắt ít nhất 24 đến 48 giờ trước khi chích máu để kết quả không bị sai lệch."
    },
    "Ferritin": {
      "name": "Ferritin (Dự trữ sắt)",
      "purpose": "Đo xem kho dự trữ sắt cất giấu sâu trong tủy xương, gan và lá lách còn đầy hay đã cạn kiệt.",
      "when_to_do": "Làm cùng xét nghiệm Sắt huyết thanh để khẳng định 100% người bệnh có đang bị cạn kiệt sắt hay không, hoặc để theo dõi bệnh nhân viêm gan, xơ gan ứ sắt.",
      "how_it_works": "Đo một loại cấu trúc protein đặc biệt mang tên Ferritin. Nó giống như một 'chiếc két sắt' có khả năng nhốt giữ hàng nghìn phân tử sắt bên trong để cơ thể xài dần, ngăn sắt tự do gây độc cho mô.",
      "result_meaning": "Thấp: Kho dự trữ đã cạn sạch, đây là bằng chứng thép khẳng định thiếu máu thiếu sắt. Cao: Đang có viêm nhiễm cấp tính, bệnh lý gan hoặc mắc chứng rối loạn ứ sắt (Hemochromatosis).",
      "real_life_example": "Một bệnh nhân nam xét nghiệm sắt huyết thanh bình thường nhưng Ferritin lại cực thấp. Bác sĩ cảnh báo kho sắt đã cạn kiệt, vài tuần nữa sẽ chuyển thành thiếu máu nặng nếu không nội soi dạ dày tìm ổ chảy máu ẩn.",
      "note": "Ferritin là bộ xét nghiệm trung thực và chính xác nhất. Nếu Ferritin thấp, 100% bạn đang thiếu sắt. Nhưng nếu Ferritin bình thường hoặc cao, bạn vẫn có thể thiếu sắt nếu cơ thể đang bị viêm.",
      "advanced_knowledge": "Việc định lượng Ferritin bằng công nghệ miễn dịch điện hóa phát quang (ECLIA) nay được AI tích hợp vào bộ theo dõi hội chứng chuyển hóa và gan nhiễm mỡ không do rượu (NAFLD), vì Ferritin tăng cao liên quan mật thiết đến sự kháng insulin.",
      "deep_knowledge": "Ferritin là một 'protein phản ứng pha cấp' (Acute Phase Reactant). Điều này có nghĩa là khi bạn bị cảm cúm, sốt, mắc COVID-19, viêm khớp, hoặc ung thư, nồng độ Ferritin sẽ tự động tăng vọt lên để phản ứng với bệnh tật, làm che lấp đi tình trạng thiếu máu thiếu sắt thực sự. Bác sĩ giỏi sẽ luôn cho thử kèm CRP để loại trừ nhiễu viêm.",
      "patient_advice": "Xét nghiệm Ferritin không yêu cầu nhịn ăn khắt khe, nhưng nếu bạn đang bị ốm, sốt, hay viêm họng, hãy nói với bác sĩ, vì kết quả Ferritin lúc này sẽ cao giả tạo, không phản ánh đúng lượng sắt thực tế trong kho của bạn."
    },
    "Vitamin B12": {
      "name": "Vitamin B12 (Cobalamin)",
      "purpose": "Đánh giá tình trạng thiếu hụt vitamin tạo máu, chẩn đoán nguyên nhân bệnh thiếu máu hồng cầu to và các tổn thương thoái hóa thần kinh.",
      "when_to_do": "Người già hay bị tê rần châm chích bàn chân tay, suy giảm trí nhớ, đi đứng loạng choạng, người ăn chay trường kỳ, hoặc bệnh nhân cắt dạ dày.",
      "how_it_works": "Đo lượng vitamin B12 trong huyết thanh. Đây là vi chất tối quan trọng để sản xuất vỏ bọc myelin bảo vệ dây thần kinh và tham gia vào quá trình phân chia nhân tế bào hồng cầu.",
      "result_meaning": "Bình thường: Đủ chất. Thấp: Gây bệnh thiếu máu ác tính (Pernicious anemia), mệt mỏi, suy nhược thần kinh, trầm cảm, tê liệt tay chân.",
      "real_life_example": "Cụ ông bị viêm teo niêm mạc dạ dày lâu năm hay bị tê buốt ngón chân, đo B12 thấp thê thảm. Bác sĩ cho tiêm B12 trực tiếp vào bắp cơ, triệu chứng thần kinh cải thiện rõ rệt.",
      "note": "Vitamin B12 chỉ tồn tại duy nhất trong thực phẩm có nguồn gốc động vật (thịt, cá, trứng, sữa), hoàn toàn không có trong thực vật.",
      "advanced_knowledge": "Thay vì chỉ đo lượng B12 toàn phần (trong đó 80% là ở dạng không hoạt động), các labo sinh hóa hiện đại sử dụng xét nghiệm đo Holotranscobalamin (Active B12 - B12 hoạt động). Đây là thước đo siêu nhạy, phát hiện cạn kiệt B12 ngay từ khi cơ thể chưa có triệu chứng.",
      "deep_knowledge": "Dạ dày con người phải tiết ra một chất gọi là 'Yếu tố nội tại' (Intrinsic Factor) thì ruột non mới có thể hút được Vitamin B12 từ thức ăn vào máu. Do đó, người bị viêm loét dạ dày, uống thuốc kháng acid (Omeprazole) lâu ngày, hoặc đã phẫu thuật cắt dạ dày sẽ bị thiếu B12 trầm trọng dù họ có ăn rất nhiều thịt.",
      "patient_advice": "Nếu bạn là người ăn chay trường (Vegan), bạn thuộc nhóm rủi ro cực cao. Bắt buộc phải uống viên bổ sung B12 hoặc đi chích B12 định kỳ để bảo vệ bộ não và tủy sống khỏi các tổn thương vĩnh viễn, không thể đảo ngược."
    },
    "Phết máu ngoại biên": {
      "name": "Phết máu ngoại biên (Peripheral Blood Smear)",
      "purpose": "Quan sát tận mắt hình thái, kích thước, màu sắc và cấu trúc bên trong của các tế bào máu để chẩn đoán các bệnh lý huyết học phức tạp.",
      "when_to_do": "Khi máy đếm công thức máu tự động báo lỗi hoặc có bất thường (thiếu máu nặng, bạch cầu tăng quá cao, tiểu cầu giảm sâu), nghi ngờ ung thư máu, hoặc tìm ký sinh trùng sốt rét.",
      "how_it_works": "Nhỏ một giọt máu lên phiến kính, dàn mỏng thành một lớp tế bào duy nhất, nhuộm màu Giemsa rồi đưa lên kính hiển vi để chuyên gia huyết học soi trực tiếp.",
      "result_meaning": "Cho biết chi tiết tình trạng bệnh lý: Thấy hồng cầu hình bia bắn (bệnh Thalassemia), hồng cầu vỡ nát mảnh vụn (tán huyết do cục máu đông nhỏ), hoặc thấy tràn ngập bạch cầu non/ác tính (ung thư tủy).",
      "real_life_example": "Em bé xanh xao, sốt dai dẳng, máy đếm bạch cầu cao bất thường. Bác sĩ soi phết máu ngoại biên thấy vô số tế bào 'Blast' (bạch cầu non bất thường chưa trưởng thành), lập tức chẩn đoán bạch cầu cấp (ung thư máu) và chuyển qua khoa huyết học.",
      "note": "Đây là tiêu chuẩn vàng. Không một cỗ máy đếm tự động đắt tiền nào có thể thay thế hoàn toàn được cặp mắt tinh tường của bác sĩ huyết học khi nhìn vào hình thái tế bào máu [1].",
      "advanced_knowledge": "Công nghệ Kính hiển vi kỹ thuật số (Digital Cell Morphology) ứng dụng Trí tuệ nhân tạo (AI) đã tạo ra cuộc cách mạng [1]. Hệ thống tự động quét lam kính, chụp ảnh hàng nghìn tế bào sắc nét, AI sẽ phân loại trước các tế bào lạ (như Blast cells, Schistocytes) để bác sĩ duyệt lại trên màn hình máy tính, loại bỏ sự mỏi mắt và yếu tố chủ quan [1].",
      "deep_knowledge": "Sự xuất hiện của các tế bào hồng cầu bị cắt xén, vỡ vụn (Schistocytes) trên lam kính là dấu hiệu cấp cứu y khoa (Red Flag), chỉ điểm hội chứng đông máu rải rác nội mạch (DIC) hoặc ban xuất huyết giảm tiểu cầu huyết khối (TTP), đe dọa sinh mạng từng giờ.",
      "patient_advice": "Xét nghiệm này dùng chính mẫu máu ở ống xét nghiệm Công thức máu (ống nắp màu tím có chất chống đông EDTA) của bạn [4]. Việc để ống máu quá lâu ngoài nhiệt độ phòng trước khi phết lam sẽ làm bạch cầu bị thoái hóa, biến dạng hình thái thùy, gây khó khăn lớn cho bác sĩ khi soi kính."
    },
    "Hồng cầu lưới": {
      "name": "Hồng cầu lưới (Reticulocyte Count)",
      "purpose": "Đánh giá khả năng và tốc độ sản xuất máu mới của 'nhà máy' tủy xương để đáp ứng với tình trạng thiếu máu.",
      "when_to_do": "Khi bị thiếu máu chưa rõ nguyên nhân, sau các đợt chảy máu cấp tính, hoặc để theo dõi xem tủy xương có phục hồi tốt không sau khi bệnh nhân uống thuốc bổ sung sắt/B12 hoặc sau hóa trị ung thư.",
      "how_it_works": "Dùng hóa chất nhuộm đặc biệt hoặc máy phân tích dòng chảy (Flow cytometry) để đếm tỷ lệ những tế bào hồng cầu non trẻ mới ra lò (vẫn còn tàn dư mạng lưới ARN bên trong) so với hồng cầu trưởng thành.",
      "result_meaning": "Tăng cao: Tủy xương đang sống khỏe, hoạt động hết công suất đẩy máu mới ra ngoại vi để bù đắp sự thiếu hụt do chảy máu hoặc tan máu. Giảm thấp: Tủy xương bị hỏng, suy tủy, thiếu nguyên liệu (sắt, B12), tủy không đẻ được máu.",
      "real_life_example": "Bệnh nhân bị loét dạ dày chảy máu rỉ rả, được truyền máu và uống sắt 1 tuần. Đi xét nghiệm thấy tỷ lệ hồng cầu lưới tăng vọt từ 1% lên 8%, chứng tỏ thuốc sắt đã ngấm và tủy xương đang nỗ lực đẻ máu tuyệt vời.",
      "note": "Chỉ số này là chiếc gương phản chiếu trung thực nhất sức sống của tủy xương bạn.",
      "advanced_knowledge": "Máy huyết học tự động hiện đại sử dụng tia laser phân tích huỳnh quang RNA, không chỉ đếm số lượng hồng cầu lưới mà còn đo lượng Hemoglobin bên trong hồng cầu lưới (RET-He). RET-He là chỉ số cực nhạy để phát hiện sớm tình trạng thiếu sắt ngay cả khi sắt huyết thanh chưa có biến đổi rõ rệt.",
      "deep_knowledge": "Hồng cầu bình thường sống được 120 ngày. Hồng cầu lưới là những tế bào vừa mới thoát ra khỏi tủy xương và sẽ trưởng thành hoàn toàn chỉ sau 1-2 ngày trôi nổi trong máu ngoại vi. Tỷ lệ hồng cầu lưới phải được hiệu chỉnh theo chỉ số HCT của bệnh nhân (Chỉ số hồng cầu lưới hiệu chỉnh - CRC) mới đánh giá đúng được phản ứng của tủy xương.",
      "patient_advice": "Bạn không cần chuẩn bị gì đặc biệt hay nhịn ăn cho xét nghiệm này. Nếu bạn đang điều trị thiếu máu bằng thuốc, bác sĩ sẽ luôn dùng chỉ số hồng cầu lưới để quyết định xem có nên tiếp tục dùng loại thuốc đó hay phải đổi phác đồ khác."
    },
    "Nhóm máu ABO/Rh": {
      "name": "Nhóm máu ABO và Rh (Blood Typing)",
      "purpose": "Xác định chính xác nhãn dán định danh nhóm máu của bạn là A, B, AB hay O, và yếu tố Rhesus là Dương (+) hay Âm (-), phục vụ cho truyền máu an toàn.",
      "when_to_do": "Khi đi hiến máu nhân đạo, phụ nữ mang thai, chuẩn bị mổ phẫu thuật, cấp cứu mất máu, hoặc làm hồ sơ sức khỏe cá nhân.",
      "how_it_works": "Trộn hồng cầu của bạn với các kháng thể chuẩn (Anti-A, Anti-B, Anti-D) trong ống nghiệm hoặc khuyếch đại gel. Nếu máu bị ngưng kết (vón cục chìm xuống) ở loại kháng thể nào thì sẽ xác định được nhóm máu tương ứng.",
      "result_meaning": "Kết quả sẽ cho ra một trong 4 nhóm máu chính (O, A, B, AB) kèm theo Rh. Nếu kết quả là Rh(-), bạn thuộc nhóm máu hiếm, chỉ có thể nhận máu từ người Rh(-).",
      "real_life_example": "Chị gái sinh con lần đầu thử máu ra nhóm O âm (O-). Bác sĩ viện sản lập tức ghi chú hồ sơ nguy cơ cao, báo kho máu dự trữ sẵn máu O âm phòng hờ lúc sinh bị băng huyết, đồng thời lên kế hoạch tiêm Anti-D bảo vệ thai nhi.",
      "note": "Nhóm máu là thông tin cấu trúc di truyền không bao giờ thay đổi từ lúc sinh ra đến khi chết đi. Truyền nhầm nhóm máu (đặc biệt là hệ ABO) là tai biến y khoa thảm khốc gây vỡ hồng cầu hàng loạt, suy thận cấp và tử vong.",
      "advanced_knowledge": "Công nghệ xác định nhóm máu bằng sinh học phân tử (Genotyping) giải mã toàn bộ bản đồ gen của các kháng nguyên trên màng hồng cầu, tự động phát hiện các biến thể nhóm máu phụ cực kỳ hiếm gặp (như Bombay, Rh-null) mà phương pháp ngưng kết truyền thống có thể bỏ sót.",
      "deep_knowledge": "Bất đồng nhóm máu Rh giữa mẹ và thai nhi: Nếu mẹ mang nhóm máu Rh(-) mang thai con Rh(+) (nhận gen từ bố), cơ thể mẹ sẽ sinh ra kháng thể xuyên qua nhau thai bắn phá và tiêu diệt tan nát hồng cầu của thai nhi ở lần mang thai thứ hai, gây phù thai, chết lưu. Việc tiêm dự phòng globulin miễn dịch (Anti-D) cho mẹ là bắt buộc.",
      "patient_advice": "Bạn hãy ghi nhớ nhóm máu của mình, dán trên mặt sau điện thoại hoặc thẻ căn cước. Nếu bạn thuộc nhóm máu hiếm Rh(-), hãy chủ động tham gia vào Câu lạc bộ máu hiếm địa phương để có người hỗ trợ hiến máu ngay khi bạn gặp tai nạn cấp cứu."
    },
    "Phản ứng hòa hợp": {
      "name": "Phản ứng hòa hợp chéo (Cross-matching)",
      "purpose": "Bước chốt chặn an toàn cuối cùng và quan trọng nhất trước khi cắm bịch máu vào người bệnh nhân để đảm bảo cơ thể người nhận không đào thải máu người cho.",
      "when_to_do": "Thực hiện ngay tại phòng xét nghiệm huyết học và làm lại một lần nữa tại giường bệnh trước khi y tá mở van truyền máu.",
      "how_it_works": "Trộn huyết thanh của người bệnh với hồng cầu lấy từ bịch máu dự định truyền (Major crossmatch) và ủ ở nhiệt độ cơ thể. Quan sát hiện tượng ngưng kết (vón cục) hoặc tán huyết (vỡ hồng cầu).",
      "result_meaning": "Tương thích (Âm tính): Máu hòa quyện êm ái, an toàn để truyền. Bất tương thích (Dương tính): Máu vón cục đánh nhau, không được truyền, nếu truyền vào sẽ gây sốc phản vệ, tử vong tức khắc.",
      "real_life_example": "Bệnh nhân tai nạn cần truyền máu gấp, dù bịch máu lấy từ kho cùng là nhóm A+, nhưng phòng lab báo phản ứng chéo dương tính do trong máu bệnh nhân có kháng thể bất thường từ lần truyền máu năm ngoái. Lab lập tức đổi bịch máu khác an toàn hơn.",
      "note": "Dù bệnh nhân đã biết chắc chắn nhóm máu và bịch máu cũng ghi cùng nhóm máu, thì quy định của Bộ Y tế BẮT BUỘC vẫn phải làm phản ứng hòa hợp này rồi mới được truyền.",
      "advanced_knowledge": "Hệ thống điện toán hóa truyền máu (Electronic Crossmatching - EXM) sử dụng mã vạch barcode, RFID và AI tự động đối chiếu cơ sở dữ liệu ngầm. Máy tính sẽ khóa lệnh xuất kho máu nếu phát hiện bất kỳ sự bất đồng kháng nguyên vi mô nào, loại bỏ hoàn toàn sai sót do con người.",
      "deep_knowledge": "Phản ứng chéo ống nghiệm có thể bị nhiễu (dương tính giả) nếu người bệnh đang bị bệnh tự miễn (tự sinh kháng thể chống lại máu mình) hoặc máu có quá nhiều protein viêm làm hồng cầu dính dạng chuỗi tiền (Rouleaux formation). Máy ly tâm gel-card hiện hành giúp tách biệt rõ ràng các hiện tượng này.",
      "patient_advice": "Khi y tá mang bịch máu đỏ tươi đến giường bệnh của bạn, hãy phối hợp cùng y tá đọc thật to, rõ ràng Họ tên, Năm sinh và Nhóm máu của bạn để đối chiếu với thông tin in trên bịch máu. Đây là quyền lợi sống còn của bạn."
    },
    "LDH": {
      "name": "LDH (Lactate Dehydrogenase)",
      "purpose": "Kiểm tra và đánh giá mức độ tổn thương, hoại tử chung của các mô tế bào trong cơ thể, hoặc hỗ trợ theo dõi diễn tiến của một số loại ung thư.",
      "when_to_do": "Nghi ngờ mắc bệnh thiếu máu tán huyết (hồng cầu bị vỡ), tổn thương cơ bắp lan rộng, nhồi máu phổi, hoặc theo dõi bệnh nhân ung thư lympho, ung thư tinh hoàn.",
      "how_it_works": "Đo lượng enzyme LDH lưu thông trong máu. Đây là men chuyển hóa năng lượng nằm sâu bên trong bào tương của tất cả các tế bào sống. Khi bất kỳ tế bào nào bị vỡ hoặc hoại tử chết đi, LDH sẽ ộc ra dòng máu.",
      "result_meaning": "Bình thường: Không có tổn thương mô diện rộng. Tăng cao: Các tế bào đang bị phá hủy ồ ạt do thiếu máu cục bộ, nhồi máu cơ tim, vỡ hồng cầu, tổn thương gan, hoặc tế bào ung thư đang phân chia nhanh.",
      "real_life_example": "Bệnh nhân mệt mỏi xanh xao, mắt vàng, thử máu thấy LDH cao vọt lên hàng nghìn đơn vị. Bác sĩ huyết học xác định bệnh nhân đang bị hội chứng tan máu tự miễn (hồng cầu vỡ nát liên tục trong mạch máu).",
      "note": "LDH là một chỉ số không đặc hiệu (Nó tăng trong cả bệnh tim, gan, cơ, ung thư). Nó chỉ báo động có sự phá hủy tế bào đang xảy ra, bác sĩ sẽ phải làm thêm xét nghiệm isoenzyme (tách 5 phân nhóm LDH) để xác định chính xác cơ quan nào đang bị bệnh.",
      "advanced_knowledge": "Máy hóa sinh ứng dụng AI sẽ tự động lập tỷ số LDH/AST và LDH/Procalcitonin để giúp bác sĩ hồi sức (ICU) phân biệt nhanh tổn thương gan cấp tính do hoại tử thiếu oxy với viêm gan nhiễm trùng máu ngay tại giường bệnh.",
      "deep_knowledge": "Bên trong tế bào hồng cầu chứa lượng LDH cao gấp 150 lần so với trong huyết thanh. Nếu quá trình lấy máu bằng kim quá nhỏ, bơm rút máu quá mạnh, hoặc hệ thống vận chuyển bằng ống khí (pneumatic tube) làm rung lắc vỡ hồng cầu (Tán huyết cơ học), LDH sẽ rò rỉ ra ngoài gây kết quả tăng cao giả tạo cực kỳ nghiêm trọng [2].",
      "patient_advice": "Nếu kết quả LDH của bạn cao mà bác sĩ yêu cầu lấy máu lại, đừng phàn nàn. Có thể do lúc rút máu tay bạn vận động mạnh làm vỡ hồng cầu trong ống nghiệm. Lần chích máu sau, hãy buông lỏng tay hoàn toàn, không nắm chặt nắm đấm [6]."
    },
    "Soi phân": {
      "name": "Soi phân và Máu ẩn trong phân (FOBT / FIT)",
      "purpose": "Tìm kiếm trứng giun sán, vi khuẩn, nấm gây tiêu chảy, và đặc biệt là công cụ vàng để tầm soát ung thư đại trực tràng thông qua dấu vết máu ẩn tàng hình.",
      "when_to_do": "Khi bị đau quặn bụng, tiêu chảy mạn tính, đi tiêu có nhầy máu, hoặc khám tầm soát ung thư ruột định kỳ hàng năm cho người trên 40 tuổi.",
      "how_it_works": "Bệnh phẩm phân được soi dưới kính hiển vi điện tử tìm cấu trúc trứng giun, amip. Đồng thời dùng test sinh hóa (FOBT) hoặc miễn dịch (FIT) để dò tìm các phân tử Hemoglobin (hồng cầu) li ti trộn lẫn trong phân mà mắt thường không thấy.",
      "result_meaning": "Âm tính: Phân sạch, ruột khỏe. Dương tính với máu ẩn: Báo động có tổn thương chảy máu rỉ rả trong lòng ruột do polyp, viêm loét hoặc khối u ung thư ác tính cọ xát vào phân.",
      "real_life_example": "Ông chú 50 tuổi hoàn toàn khỏe mạnh, đi khám sức khỏe làm test FIT phân thấy dương tính. Nội soi đại tràng phát hiện ra ngay 2 polyp tuyến có nguy cơ ung thư cao và cắt bỏ ngay lập tức.",
      "note": "Đây là xét nghiệm không xâm lấn, cực kỳ rẻ tiền nhưng lại là phao cứu sinh ngăn chặn sớm án tử ung thư đại tràng.",
      "advanced_knowledge": "Công nghệ xét nghiệm Cologuard thế hệ mới kết hợp xét nghiệm miễn dịch máu ẩn (FIT) với xét nghiệm DNA khối u (cfDNA) tách chiết trực tiếp từ mẫu phân, nâng độ nhạy tầm soát ung thư ruột lên tới 95%, giảm tỷ lệ dương tính giả.",
      "deep_knowledge": "Test FOBT hóa học cũ (Guaiac test) bị phản ứng chéo với máu động vật, khiến bệnh nhân ăn thịt bò, tiết canh cũng bị dương tính giả ung thư ruột. Test FIT miễn dịch (Fecal Immunochemical Test) tiên tiến sử dụng kháng thể chỉ phản ứng đặc hiệu với Hemoglobin người (Human globin), loại bỏ hoàn toàn nhược điểm phải ăn kiêng thịt trước khi xét nghiệm.",
      "patient_advice": "Tuyệt đối không lấy mẫu phân đi xét nghiệm nếu bạn đang trong kỳ kinh nguyệt, đang bị chảy máu búi trĩ, hoặc chảy máu cam (vì máu mũi nuốt xuống dạ dày sẽ làm dương tính giả). Dùng thìa nhựa xúc phần phân có nhầy nhớt hoặc màu đen bất thường cho vào lọ và gửi đến phòng khám trong vòng 2 giờ [5]."
    },
    "Ethanol": {
      "name": "Ethanol máu (Đo Nồng độ Cồn)",
      "purpose": "Đo lường chính xác, mang tính pháp lý về hàm lượng cồn (rượu, bia) đang lưu thông trong máu, hoặc cấp cứu bệnh nhân ngộ độc cấp.",
      "when_to_do": "Giám định pháp y cho người bị tai nạn giao thông, thanh niên hôn mê sùi bọt mép co giật sau chầu nhậu nghi ngộ độc rượu giả (Methanol/Ethanol).",
      "how_it_works": "Sử dụng công nghệ sắc ký khí (Gas Chromatography) hoặc phản ứng enzyme (Alcohol Dehydrogenase) để tách và đo nồng độ phân tử Ethanol (C2H5OH) trong huyết thanh.",
      "result_meaning": "Âm tính (0 mg/dL): Sạch cồn. Cao: Bệnh nhân say xỉn, suy giảm phản xạ, mất kiểm soát thần kinh. Cực cao (>300 mg/dL): Nguy cơ ức chế trung tâm hô hấp trên não, ngừng thở, tử vong.",
      "real_life_example": "Một tài xế gây tai nạn bất tỉnh, công an yêu cầu lấy máu đo cồn. Kết quả Ethanol máu lên tới 150 mg/dL, bằng chứng thép vi phạm nồng độ cồn kịch khung.",
      "note": "Mức độ say xỉn không chỉ phụ thuộc vào nồng độ cồn mà còn tùy thuộc vào 'tửu lượng' (khả năng sinh men chuyển hóa ở gan) của từng người. Gan khỏe chuyển hóa cồn với tốc độ khoảng 15-20 mg/dL mỗi giờ.",
      "advanced_knowledge": "Máy quang phổ hồng ngoại POCT tại phòng cấp cứu phân biệt ngay lập tức trong 2 phút giữa ngộ độc cồn sinh học (Ethanol) và cồn công nghiệp chết người (Methanol), giúp bác sĩ ra quyết định cho chạy lọc máu cấp cứu bảo vệ não bệnh nhân.",
      "deep_knowledge": "Khi lấy máu đo Ethanol mang tính giám định pháp y pháp luật, mọi quy trình phải được niêm phong kỹ lưỡng (Chain of Custody). Ống máu phải được đóng nắp chặt ngay sau khi rút để tránh cồn bốc hơi làm giảm nồng độ [2].",
      "patient_advice": "Nguyên tắc sinh tử của y tá: Khi sát trùng vùng da cánh tay để đâm kim lấy máu đo cồn, tuyệt đối KHÔNG ĐƯỢC dùng cồn y tế (Alcohol 70 độ) để lau da, vì cồn sát trùng sẽ hòa lẫn vào mũi kim gây ra kết quả oan sai cho người bệnh. Y tá bắt buộc phải dùng thuốc đỏ Povidine-Iodine hoặc xà phòng để sát trùng."
    },
    "Test ma túy": {
      "name": "Test Ma túy & Độc chất (Drugs of Abuse Screen)",
      "purpose": "Phát hiện sự có mặt của các chất kích thích, chất gây nghiện bất hợp pháp hoặc thuốc an thần gây ngủ trong cơ thể.",
      "when_to_do": "Khám sức khỏe làm bằng lái xe, tuyển dụng việc làm, kiểm tra đột xuất đối tượng cai nghiện, hoặc bệnh nhân cấp cứu trong tình trạng ảo giác, hoang tưởng, ngáo đá, suy hô hấp.",
      "how_it_works": "Dùng panel que thử miễn dịch nhanh (nhúng vào nước tiểu) hoặc hệ thống phân tích sinh hóa máu để dò tìm hàng loạt gốc hóa học của Morphine, Heroin, Cần sa (THC), Ma túy đá (Methamphetamine), Thuốc lắc (MDMA), và Barbiturate.",
      "result_meaning": "Âm tính: Không có chất cấm. Dương tính: Trong vòng vài ngày qua (hoặc vài tuần đối với cần sa), cơ thể đã tiếp nhận và đào thải chất gây nghiện.",
      "real_life_example": "Thanh niên lảm nhảm leo lên nóc nhà nghi ngáo đá được công an đưa vào viện. Test nhanh 4 chân nước tiểu lên 2 vạch ở ô MET (Methamphetamine dương tính), xác nhận sử dụng ma túy đá gây loạn thần.",
      "note": "Nước tiểu là mẫu bệnh phẩm tốt nhất để test ma túy vì chất độc tồn lưu ở đây lâu hơn và cô đặc hơn trong máu rất nhiều.",
      "advanced_knowledge": "Các máy phân tích sắc ký khối phổ (LC-MS/MS) hiện nay có khả năng phân tách và bắt được các hợp chất ma túy tổng hợp thế hệ mới (cỏ Mỹ, muối tắm) được giới tội phạm liên tục biến đổi cấu trúc hóa học để lách luật, thứ mà que test thông thường bị mù.",
      "deep_knowledge": "Test ma túy có ngưỡng cắt (Cut-off level). Nồng độ dưới ngưỡng được coi là âm tính. Rất nhiều thuốc tây y thông thường (như thuốc chống ngạt mũi Pseudoephedrine, thuốc giảm cân, thuốc ho) có cấu trúc gốc amphetamine, sẽ gây ra phản ứng chéo làm que test ma túy lên 2 vạch (dương tính giả). Cần xét nghiệm khẳng định (Confirmatory test) bằng sắc ký khí để kết luận pháp lý.",
      "patient_advice": "Nếu bạn bị yêu cầu test ma túy nhưng bạn đang phải uống thuốc tây chữa cảm cúm sổ mũi hay thuốc viêm khớp, hãy mang theo vỉ thuốc và khai báo rõ với bác sĩ, nhân viên y tế. Điều này sẽ cứu bạn khỏi những rắc rối hành chính nếu que test vô tình bị dương tính giả."
    },
};

const diseaseGroups = [
  {
    title: 'Tim mạch & Đông máu',
    img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80',
    icon: <Heart className="text-red-500" />,
    tests: ['NT-ProBNP', 'Troponin I', 'CK-MB', 'Bộ mỡ máu', 'PT', 'APTT', 'D-Dimer'],
    description: 'Hỗ trợ chẩn đoán cấp cứu nhồi máu cơ tim, suy tim và kiểm tra hệ thống đông máu.',
    meaning: 'Giúp phát hiện sớm các cơn nhồi máu cơ tim cấp, đánh giá chức năng bơm máu của tim. Đồng thời tầm soát rối loạn mỡ máu để ngăn ngừa tắc nghẽn mạch máu, đột quỵ và kiểm tra tình trạng huyết khối (cục máu đông) trước phẫu thuật.'
  },
   {
    title: 'Gan mật & Tuyến tụy',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
    icon: <Activity className="text-orange-500" />,
    tests: ['AST', 'ALT', 'GGT', 'Bilirubin', 'Albumin', 'Amylase', 'Lipase', 'Amoniac'],
    description: 'Đánh giá chức năng gan, mật và phát hiện sớm các tổn thương ở tuyến tụy.',
    meaning: 'Kiểm tra tình trạng viêm gan do virus, ngộ độc thuốc hay rượu bia; chẩn đoán nguyên nhân gây vàng da, sỏi mật, xơ gan. Nhóm này cũng mang tính sinh tử trong việc cấp cứu và chẩn đoán bệnh viêm tụy cấp nguy hiểm.'
  },
  {
    title: 'Thận & Tiết niệu',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
    icon: <Droplet className="text-blue-500" />,
    tests: ['Ure', 'Creatinin', 'Cystatin C', 'MAU niệu', 'Protein niệu 24h', 'Tế bào cặn nước tiểu', 'Cấy vi khuẩn nước tiểu', 'Điện giải'],
    description: 'Đánh giá khả năng lọc chất thải của thận và phát hiện viêm nhiễm đường tiết niệu.',
    meaning: 'Phát hiện sớm tình trạng suy thận ngay từ giai đoạn chưa có triệu chứng lâm sàng (đặc biệt ở người tiểu đường, huyết áp cao). Giúp tìm ra vi khuẩn gây tiểu buốt, tiểu rắt để bác sĩ kê đúng loại kháng sinh cần thiết.'
  },
  {
    title: 'Đái tháo đường & Chuyển hóa',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
    icon: <Flame className="text-yellow-500" />,
    tests: ['Glucose', 'HbA1C', 'Insulin', 'C-peptid', 'Ceton'],
    description: 'Tầm soát, chẩn đoán bệnh tiểu đường và đánh giá mức độ kiểm soát đường huyết.',
    meaning: 'Chẩn đoán chính xác bạn mắc tiểu đường type 1 hay type 2'
  },
  {
    title: 'Tuyến giáp & Nội tiết',
    img: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&q=80',
    icon: <Activity className="text-blue-500" />,
    tests: ['FT3', 'FT4', 'TSH', 'Testosteron', 'Cortisol', 'PTH'],
    description: 'Đánh giá chức năng hoạt động của tuyến giáp, tuyến thượng thận và các hormone sinh dục.',
    meaning: 'Phát hiện sớm các rối loạn nội tiết như cường/suy giáp, mãn dục nam, hoặc u tuyến thượng thận.'
  },
  {
    title: 'Xương khớp & Tự miễn',
    img: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&q=80',
    icon: <Bone className="text-gray-500" />,
    tests: ['Acid Uric', 'Calci', 'Phospho', 'Vitamin D3', 'Yếu tố dạng thấp', 'Anti-CCP', 'ASO'],
    description: 'Kiểm tra tình trạng xương khớp, mức độ thiếu hụt khoáng chất và các bệnh lý tự miễn dịch.',
    meaning: 'Chẩn đoán chính xác bệnh Gout, loãng xương và tình trạng viêm khớp dạng thấp.'
  },
    {
    title: 'Tầm soát Ung thư',
    img: 'https://images.unsplash.com/photo-1576086476234-1103be98f096?w=400&q=70',
    icon: <ShieldAlert className="text-purple-500" />,
    tests: ['AFP', 'CEA', 'PSA', 'CA 15-3', 'Tg', 'CA 19-9', 'Cyfra 21-1', 'SCC'],
    description: 'Đo lường các dấu ấn ung thư trong máu để phát hiện sớm các khối u ác tính trong cơ thể.',
    meaning: 'Giúp tầm soát, phát hiện từ giai đoạn sớm và theo dõi mức độ đáp ứng điều trị ung thư.'
  },
  {
    title: 'Truyền nhiễm & Ký sinh trùng',
    img: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?w=400&q=70',
    icon: <Bug className="text-green-500" />,
    tests: ['HBsAg', 'HCV Ab', 'Tải lượng HBV', 'Tải lượng HCV', 'Dengue virus', 'HIV', 'Sốt rét', 'Treponema pallidum', 'Salmonella', 'Toxocara'],
    description: 'Tìm kiếm sự hiện diện của virus, vi khuẩn hoặc ký sinh trùng gây ra các bệnh lây nhiễm.',
    meaning: 'Khẳng định tình trạng nhiễm bệnh (Viêm gan, HIV, Giang mai, Sốt xuất huyết...) để điều trị kịp thời.'
  },
  {
    title: 'Viêm & Nhiễm trùng máu',
    img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
    icon: <Thermometer className="text-red-500" />,
    tests: ['CRP', 'Pro-calcitonin', 'Interleukin 6', 'Bạch cầu', 'Máu lắng', 'Lactat'],
    description: 'Đánh giá mức độ viêm nhiễm, phản ứng của hệ miễn dịch và tình trạng nhiễm trùng toàn thân.',
    meaning: 'Cảnh báo nhanh tình trạng nhiễm trùng máu nguy hiểm và sốc bệnh lý để cấp cứu tức khắc.'
  },
  {
    title: 'Hô hấp, Lao & Vi sinh',
    img: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=400&q=70',
    icon: <Wind className="text-teal-500" />,
    tests: ['Nhuộm AFB tìm Lao', 'Xpert MTB/RIF', 'QuantiFERON-TB', 'Đo hoạt độ ADA', 'Khí máu', 'Cấy vi khuẩn', 'Tế bào học dịch', 'Dịch não tủy'],
    description: 'Xét nghiệm chuyên sâu chẩn đoán các bệnh đường hô hấp, bệnh Lao và phân tích các loại dịch tiết.',
    meaning: 'Xác định chính xác vi khuẩn gây bệnh và mức độ kháng thuốc để đưa ra phác đồ kháng sinh hiệu quả.'
  },
  {
    title: 'Huyết học & Tạo máu',
    img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
    icon: <Droplet className="text-red-600" />,
    tests: ['Sắt huyết thanh', 'Ferritin', 'Folate', 'Vitamin B12', 'UIBC', 'Phết máu ngoại biên', 'Hồng cầu lưới', 'Nhóm máu ABO/Rh', 'Phản ứng hòa hợp'],
    description: 'Đánh giá chất lượng tế bào máu, dự trữ sắt, vitamin tạo máu và xét nghiệm truyền máu.',
    meaning: 'Chẩn đoán các loại bệnh thiếu máu, ung thư máu và bảo đảm an toàn tuyệt đối khi truyền máu.'
  },
{
    title: 'Xét nghiệm Khác & Độc chất',
    img: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80',
    icon: <FlaskConical className="text-orange-500" />,
    tests: ['LDH', 'Soi phân', 'Ethanol', 'Test ma túy'],
    description: 'Nhóm xét nghiệm phân tích độc chất, kiểm tra tổn thương mô chung và các mẫu bệnh phẩm phân.',
    meaning: 'Phát hiện nhanh tình trạng ngộ độc cồn, sử dụng chất cấm hoặc các tổn thương tế bào lan tỏa.'
  },
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
          <p className="text-[10px] sm:text-xs uppercase font-semibold text-blue-600 tracking-[0.1em] sm:tracking-widest mt-0.5 sm:mt-1">BVĐK CÀ MAU</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 sm:gap-6 md:gap-12 text-sm sm:text-lg md:text-xl font-black uppercase tracking-tight text-slate-500">
        <button 
          onClick={() => setActiveTab('patients')}
          className={`transition-all pb-1 sm:pb-2 border-b-2 sm:border-b-4 ${activeTab === 'patients' ? 'text-blue-700 border-blue-700 scale-105 md:scale-110' : 'border-transparent hover:text-blue-600 cursor-pointer'}`}
        >
          Bệnh nhân
        </button>
        <button 
          onClick={() => setActiveTab('staff')}
          className={`transition-all pb-1 sm:pb-2 border-b-2 sm:border-b-4 ${activeTab === 'staff' ? 'text-blue-700 border-blue-700 scale-105 md:scale-110' : 'border-transparent hover:text-blue-600 cursor-pointer'}`}
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
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[30px] sm:rounded-[45px] shadow-[0_32px_64px_-16px_rgba(245,158,11,0.25)] overflow-hidden border-[6px] border-white dark:border-slate-800 mx-auto"
      >
        {/* Header - Amber Gradient (Umbre Style) */}
        <div className="bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 p-6 sm:p-8 md:p-12 text-white relative">
            <motion.button 
                whileHover={{ rotate: 90 }}
                whileActive={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-6 right-6 sm:top-8 sm:right-8 p-3 bg-white/20 hover:bg-white/40 rounded-2xl transition-all"
            >
                <X className="w-6 h-6" />
            </motion.button>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 sm:p-5 rounded-2xl sm:rounded-[28px] backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(31,38,135,0.2)]">
                        <div className="relative">
                          <Microscope className="w-8 h-8 sm:w-10 h-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] text-white" />
                          <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300 animate-bounce" />
                        </div>
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-black tracking-normal uppercase leading-[1.1] mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">{knowledge.name}</h2>
                      <div className="flex items-center gap-2 text-white font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] bg-black/20 w-fit px-4 py-1.5 rounded-full backdrop-blur-md border border-white/20">
                        <Sparkles className="w-3.5 h-3.5 text-yellow-300" /> Kiến thức xét nghiệm
                      </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="p-4 sm:p-10 md:p-12 space-y-6 sm:space-y-10 md:space-y-12 overflow-y-auto max-h-[60vh] sm:max-h-[70vh] custom-scrollbar">
            {/* 1. Purpose */}
            <section>
                <h3 className="flex items-center gap-2 text-orange-600 font-extrabold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2 sm:mb-4">
                    <Activity className="w-4 h-4" /> Mục tiêu & Chỉ định
                </h3>
                <p className="text-slate-900 dark:text-white text-lg sm:text-2xl font-black leading-[1.3]">{knowledge.purpose}</p>
            </section>

            {/* 2. When to do & How it works - Two Column Grid on Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="bg-amber-50 dark:bg-amber-950/20 p-6 rounded-[28px] border border-amber-100 dark:border-amber-900/30">
                    <h3 className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-black text-[10px] sm:text-xs uppercase tracking-widest mb-3">
                        <Clock className="w-4 h-4" /> Khi nào cần làm?
                    </h3>
                    <p className="text-slate-800 dark:text-slate-200 font-bold leading-relaxed text-sm sm:text-base italic">{knowledge.when_to_do}</p>
                </section>

                <section className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-[28px] border border-blue-100 dark:border-blue-900/30">
                    <h3 className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-black text-[10px] sm:text-xs uppercase tracking-widest mb-3">
                        <Zap className="w-4 h-4" /> Cơ chế sinh học
                    </h3>
                    <p className="text-slate-700 dark:text-slate-300 font-semibold leading-relaxed text-sm sm:text-base">{knowledge.how_it_works}</p>
                </section>
            </div>

            {/* 3. Result Meaning */}
            <section className="bg-emerald-50 dark:bg-emerald-950/20 p-6 sm:p-8 rounded-[32px] border-2 border-dashed border-emerald-200 dark:border-emerald-800/40">
                <h3 className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-black text-[10px] sm:text-xs uppercase tracking-widest mb-4">
                    <TrendingUp className="w-4 h-4" /> Giải mã kết quả
                </h3>
                <p className="text-emerald-900 dark:text-emerald-200 font-black leading-relaxed text-sm sm:text-lg">{knowledge.result_meaning}</p>
            </section>

            {/* 4. Real Life Example */}
            <section className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-[32px] border border-slate-100 dark:border-slate-700/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Glasses className="w-16 h-16" />
                </div>
                <h3 className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-black text-[10px] sm:text-xs uppercase tracking-widest mb-4">
                    <BookOpen className="w-4 h-4" /> Câu chuyện lâm sàng
                </h3>
                <p className="text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base leading-relaxed italic">"{knowledge.real_life_example}"</p>
            </section>

            {/* 5. Advanced Knowledge */}
            {knowledge.advanced_knowledge && (
                <section className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 p-8 rounded-[32px] border border-blue-100 dark:border-blue-900/30">
                    <h3 className="flex items-center gap-2 text-indigo-700 dark:text-indigo-400 font-black text-[10px] sm:text-xs uppercase tracking-widest mb-4">
                        <Cpu className="w-4 h-4" /> Công nghệ Y tế thông minh
                    </h3>
                    <p className="text-slate-800 dark:text-slate-200 font-bold leading-relaxed text-sm sm:text-base">{knowledge.advanced_knowledge}</p>
                </section>
            )}

            {/* 6. Deep Knowledge */}
            {knowledge.deep_knowledge && (
                <section className="bg-orange-50 dark:bg-orange-950/20 p-8 rounded-[32px] border border-orange-100 dark:border-orange-900/30">
                    <h3 className="flex items-center gap-2 text-orange-700 dark:text-orange-400 font-black text-[10px] sm:text-xs uppercase tracking-widest mb-4">
                        <Glasses className="w-4 h-4" /> Góc chuyên sâu
                    </h3>
                    <p className="text-slate-800 dark:text-slate-200 font-medium leading-relaxed text-sm sm:text-base">{knowledge.deep_knowledge}</p>
                </section>
            )}

            {/* 7. Patient Advice */}
            {knowledge.patient_advice && (
                <section className="bg-rose-50 dark:bg-rose-950/20 p-8 rounded-[32px] border-2 border-rose-200 dark:border-rose-800/40">
                    <h3 className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-black text-[10px] sm:text-xs uppercase tracking-widest mb-4">
                        <HeartHandshake className="w-4 h-4" /> Lời khuyên cho bạn
                    </h3>
                    <p className="text-rose-900 dark:text-rose-200 font-extrabold leading-relaxed text-base sm:text-lg">{knowledge.patient_advice}</p>
                </section>
            )}

            {/* 8. Note */}
            {knowledge.note && (
                <div className="bg-amber-500/10 dark:bg-amber-500/5 p-6 rounded-[28px] border-l-[8px] border-amber-500">
                    <p className="text-amber-900 dark:text-amber-200 font-black text-base sm:text-lg leading-tight">
                      <span className="bg-amber-500 text-white px-2 py-0.5 rounded-md text-xs uppercase mr-2">Cảnh báo</span>
                      {knowledge.note}
                    </p>
                </div>
            )}
        </div>

        <div className="p-8 sm:p-10 bg-slate-50 dark:bg-slate-950/50 flex justify-center border-t border-slate-100 dark:border-slate-800">
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileActive={{ scale: 0.95 }}
                onClick={onClose}
                className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-2xl sm:rounded-3xl font-black text-lg hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.5)] transition-all"
            >
                TÔI ĐÃ HIỂU
            </motion.button>
        </div>
      </motion.div>
    </div>
  );
};


// --- APP ---


const STAFF_PASSWORD = "Xetnghiem2026"; // <--- BẠN CÓ THỂ THAY ĐỔI PASSWORD TẠI ĐÂY

const getGeminiKey = () => {
  return localStorage.getItem('gemini_api_key');
};

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('patients'); // 'patients' | 'staff'
  const [isStaffAuthenticated, setIsStaffAuthenticated] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [patientSubTab, setPatientSubTab] = useState('instructions'); // 'instructions' | 'tests'
  const [staffSubTab, setStaffSubTab] = useState<'order' | 'collect' | 'policy' | 'dictionary' | 'ai-assistant'>('order');
  const [selectedGroup, setSelectedGroup] = useState<null | typeof diseaseGroups[0]>(null);
  const [selectedTest, setSelectedTest] = useState<null | LabTest>(null);
  const [selectedKnowledge, setSelectedKnowledge] = useState<null | TestKnowledge>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showGroupFilter, setShowGroupFilter] = useState(false);
  const [boxChanDoan, setBoxChanDoan] = useState('');
  const [boxChiDinh, setBoxChiDinh] = useState('');
  const [aiResult, setAiResult] = useState<string | null>(null);
  const [isLoadingExtract, setIsLoadingExtract] = useState(false);
  const [isLoadingAnalyze, setIsLoadingAnalyze] = useState(false);

  const handleExtract = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const apiKey = getGeminiKey();
    if (!apiKey) {
      alert("⚠️ Bạn chưa cài đặt API Key. Vui lòng nhấn nút '⚙️ Cài đặt API Key'.");
      return;
    }

    setIsLoadingExtract(true);
    setAiResult(null);

    try {
      const base64Data = await new Promise<string>((resolve, reject) => {
        const r = new FileReader();
        r.onloadend = () => resolve((r.result as string).split(',')[1]);
        r.onerror = () => reject(new Error("Lỗi đọc file ảnh."));
        r.readAsDataURL(file);
      });

      const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [
              { text: "Bạn là một thư ký y khoa chuyên nghiệp. Hãy đọc hình ảnh phiếu chỉ định này và trích xuất dữ liệu. Trả về đúng định dạng JSON có 2 trường: 'chan_doan' (text) và 'chi_dinh' (text, liệt kê các xét nghiệm). Nếu không thấy dữ liệu, hãy để trống. Không trả về gì ngoài JSON." },
              { inline_data: { mime_type: file.type, data: base64Data } }
            ]
          }],
          generationConfig: {
            responseMimeType: "application/json"
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `Lỗi API (${response.status})`);
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (text) {
        const parsed = JSON.parse(text);
        setBoxChanDoan(parsed.chan_doan || '');
        setBoxChiDinh(parsed.chi_dinh || '');
      }
    } catch (error: any) {
      console.error("Extract Error:", error);
      alert(`[AI ERROR] ${error.message || "Lỗi khi trích xuất dữ liệu."}`);
    } finally {
      setIsLoadingExtract(false);
      e.target.value = '';
    }
  };

  const handleAnalyze = async () => {
    const apiKey = getGeminiKey();
    if (!apiKey) {
      alert("⚠️ Bạn chưa cài đặt API Key.");
      return;
    }

    if (!boxChanDoan && !boxChiDinh) {
      alert("⚠️ Vui lòng nhập dữ liệu hoặc Quét ảnh trước.");
      return;
    }

    setIsLoadingAnalyze(true);
    setAiResult(null);

    try {
      const simplifiedData = labTests.slice(0, 150).map(t => ({
        n: t.name,
        i: t.indication,
        p: t.pathologicalMeaning,
        c: t.clinicalNote
      }));

      const prompt = `Bạn đóng vai là một chuyên gia xét nghiệm y khoa lâu năm. Dưới đây là thông tin bệnh nhân:
      - Chẩn đoán: ${boxChanDoan}
      - Các xét nghiệm chỉ định: ${boxChiDinh}

      Dựa trên 150 mục xét nghiệm tham khảo sau:
      ${JSON.stringify(simplifiedData)}

      Hãy thực hiện phân tích sinh lý bệnh chuyên sâu. Dự đoán xu hướng Tăng/Giảm của các chỉ số xét nghiệm dựa trên chẩn đoán lâm sàng. 
      YÊU CẦU:
      1. Trình bày bằng mã HTML đẹp mắt (sử dụng div, p, b, ul, li, span, các class Tailwind cơ bản).
      2. Tông màu: Hiện đại, chuyên nghiệp. Sử dụng class 'text-blue-600' cho xu hướng tăng, 'text-red-600' cho báo động hoặc giảm nghiêm trọng.
      3. Sử dụng các icon y tế (emoji).
      4. Tuyệt đối KHÔNG sử dụng Markdown (không được có \`\`\`html, không #, không *).
      5. Phân tích phải cực kỳ chuyên sâu, biện luận sắc bén như một chuyên gia đầu ngành.`;

      const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }]
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || `Lỗi API (${response.status})`);
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (text) {
        const cleanedText = text.replace(/```html|```/g, '').trim();
        setAiResult(cleanedText);
        setTimeout(() => {
          document.getElementById('ai-result-display')?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } catch (error: any) {
      console.error("Analyze Error:", error);
      alert(`[AI ERROR] ${error.message || "Lỗi khi phân tích chuyên sâu."}`);
    } finally {
      setIsLoadingAnalyze(false);
    }
  };

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
                    className={`px-4 sm:px-6 md:px-10 py-3 sm:py-4 rounded-[20px] sm:rounded-[25px] text-sm sm:text-lg md:text-xl font-black transition-all ${patientSubTab === 'instructions' ? 'bg-blue-600 text-white shadow-xl scale-105' : 'text-slate-500 hover:text-blue-600'}`}
                  >
                    <FlaskConical className="w-4 h-4 sm:w-5 h-5 inline-block mr-2 sm:mr-3" /> Hướng dẫn lấy Mẫu
                  </button>
                  <button 
                    onClick={() => setPatientSubTab('tests')}
                    className={`px-4 sm:px-6 md:px-10 py-3 sm:py-4 rounded-[20px] sm:rounded-[25px] text-sm sm:text-lg md:text-xl font-black transition-all ${patientSubTab === 'tests' ? 'bg-blue-600 text-white shadow-xl scale-105' : 'text-slate-500 hover:text-blue-600'}`}
                  >
                    <Search className="w-4 h-4 sm:w-5 h-5 inline-block mr-2 sm:mr-3" /> Tham khảo Xét nghiệm
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {patientSubTab === 'instructions' && (
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
                                <h4 className="font-black text-blue-700 dark:text-blue-400 text-base sm:text-lg mb-1 sm:mb-2 uppercase tracking-wide">{step.title}</h4>
                                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-bold" dangerouslySetInnerHTML={{ __html: step.desc }} />
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {patientSubTab === 'tests' && (
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
                            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 line-clamp-4 italic font-medium leading-relaxed">
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
                                <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none shadow-sm">{selectedGroup.title}</h3>
                              </div>
                            </div>
                            
                            <div className="p-6 sm:p-12 space-y-8 sm:space-y-12">
                              <div>
                                <h4 className="text-blue-600 dark:text-blue-400 text-[10px] sm:text-sm md:text-base font-black uppercase tracking-widest mb-4 sm:mb-6 border-b-4 border-blue-100 w-fit pb-1">Vai trò & Ý nghĩa lâm sàng</h4>
                                <p className="text-base sm:text-xl md:text-2xl leading-relaxed font-serif italic font-medium bg-blue-50/50 p-6 sm:p-8 rounded-[25px] sm:rounded-[35px] border-2 border-blue-50">
                                  "{selectedGroup.meaning}"
                                </p>
                              </div>
                              
                              <div>
                                <h4 className="text-blue-600 dark:text-blue-400 text-[10px] sm:text-sm md:text-base font-black uppercase tracking-widest mb-4 sm:mb-8 border-b-4 border-blue-100 w-fit pb-1">Các xét nghiệm tiêu biểu</h4>
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
                                      className="bg-slate-50 hover:bg-blue-600 hover:text-white border-2 border-slate-100 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-[25px] text-sm sm:text-base md:text-lg font-black text-slate-800 flex items-center gap-2 sm:gap-3 transition-all shadow-sm active:scale-95 group/btn"
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
                                className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-blue-600 text-white rounded-xl sm:rounded-[25px] text-lg sm:text-xl font-black hover:bg-blue-700 transition-all shadow-2xl active:scale-95"
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
                    <button 
                      onClick={() => setStaffSubTab('ai-assistant')}
                      className={`px-4 sm:px-5 py-3 rounded-xl text-sm sm:text-base font-black transition-all border-2 ${staffSubTab === 'ai-assistant' ? 'bg-indigo-700 border-indigo-700 text-white shadow-xl scale-105' : 'bg-white/0 text-slate-500 border-transparent hover:text-indigo-700'}`}
                    >
                      <Sparkles className="w-4 h-4 sm:w-5 h-5 inline-block mr-1 sm:mr-2" /> Thư ký xét nghiệm
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
                              <td className="px-4 sm:px-8 py-4 sm:py-8 text-lg sm:text-2xl font-black">{row.num}</td>
                              <td className="px-4 sm:px-8 py-4 sm:py-8">
                                <div className="text-base sm:text-xl font-black leading-tight mb-2">{row.type}</div>
                                <div className="flex items-center gap-2 sm:gap-4">
                                  <div className={`w-12 sm:w-20 h-4 sm:h-6 rounded-lg border-2 border-slate-300 shadow-sm ${row.colorClass}`} />
                                  <span className="text-[10px] sm:text-sm uppercase font-black tracking-widest opacity-80">{row.color}</span>
                                </div>
                              </td>
                              <td className="px-4 sm:px-8 py-4 sm:py-8 text-sm sm:text-lg font-bold">{row.tests}</td>
                              <td className="px-4 sm:px-8 py-4 sm:py-8 text-base sm:text-xl font-black text-indigo-700 dark:text-indigo-400">{row.vol}</td>
                              <td className="px-4 sm:px-8 py-4 sm:py-8 text-sm sm:text-lg font-bold">{row.mix}</td>
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
                              <h3 className="text-lg font-black text-slate-800 dark:text-slate-100">{row.type}</h3>
                              <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400">{row.color}</p>
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
                              <td className="px-4 sm:px-6 py-6 sm:py-8 text-base sm:text-xl font-black text-slate-900 dark:text-slate-100 leading-tight">{row.type}</td>
                              <td className="px-4 sm:px-6 py-6 sm:py-8 text-sm sm:text-lg font-bold text-indigo-700 dark:text-indigo-400">{row.container}</td>
                              <td className="px-4 sm:px-6 py-6 sm:py-8 text-xs sm:text-base font-medium text-slate-600 dark:text-slate-400 italic leading-relaxed">{row.notes}</td>
                              <td className="px-4 sm:px-6 py-6 sm:py-8 text-sm sm:text-lg font-black text-slate-800 dark:text-slate-200">{row.vol}</td>
                              <td className="px-4 sm:px-6 py-6 sm:py-8 text-sm sm:text-lg font-black text-blue-700 dark:text-blue-400">{row.time}</td>
                              <td className="px-4 sm:px-6 py-6 sm:py-8 text-xs sm:text-base font-black text-red-600 dark:text-red-400">{row.reject}</td>
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
                            <h3 className="text-lg font-black text-blue-900 dark:text-blue-400 uppercase leading-none">{row.type}</h3>
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
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-green-800 dark:text-green-400 font-black text-lg sm:text-xl uppercase tracking-tighter">
                          <CheckCircle2 className="w-6 h-6 sm:w-8 h-8" /> 1. Chấp nhận chung
                        </div>
                        <ul className="space-y-3 sm:space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-lg font-bold leading-relaxed">
                          <li>• Phiếu chỉ định đầy đủ thông tin (Họ tên, năm sinh, địa chỉ, chẩn đoán, mã code).</li>
                          <li>• Thông tin SID, tên, năm sinh trên phiếu và ống mẫu <strong className="text-green-600">khớp nhau tuyệt đối</strong>.</li>
                          <li>• Đúng loại mẫu, đủ lượng, đúng dụng cụ, không vi phạm bảo quản.</li>
                        </ul>
                      </div>

                      <div className="glass dark:bg-slate-800 p-6 sm:p-10 rounded-[30px] sm:rounded-[40px] border-l-[12px] sm:border-l-[16px] border-red-500 shadow-2xl hover:scale-[1.02] transition-transform">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-red-800 dark:text-red-400 font-black text-lg sm:text-xl uppercase tracking-tighter">
                          <XCircle className="w-6 h-6 sm:w-8 h-8" /> 2. Mẫu <span className="text-white bg-red-600 px-2 rounded-lg mx-1">KHÔNG</span> Đạt
                        </div>
                        <ul className="space-y-3 sm:space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-lg font-bold leading-relaxed">
                          <li>• Khoa Xét Nghiệm <strong className="text-red-600">từ chối nhận mẫu</strong>.</li>
                          <li>• Thông báo lý do từ chối và hướng xử lý (lấy lại, bổ sung lại tin).</li>
                          <li>• Ghi nhận sự việc vào công cụ theo dõi <span className="underline decoration-4 decoration-red-400">"Sổ từ chối mẫu"</span>.</li>
                        </ul>
                      </div>

                      <div className="glass dark:bg-slate-800 p-6 sm:p-10 rounded-[30px] sm:rounded-[40px] border-l-[12px] sm:border-l-[16px] border-orange-500 shadow-2xl hover:scale-[1.02] transition-transform">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-orange-800 dark:text-orange-400 font-black text-lg sm:text-xl uppercase tracking-tighter">
                          <AlertCircle className="w-6 h-6 sm:w-8 h-8" /> 3. KHÔNG đạt (Khó lấy lại)
                        </div>
                        <p className="mb-4 sm:mb-6 text-orange-600 dark:text-orange-400 font-black text-base sm:text-xl italic">Dịch não tủy, Dịch khớp...</p>
                        <ul className="space-y-3 sm:space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-lg font-bold leading-relaxed">
                          <li>• Bác sĩ phải <strong className="text-orange-600 uppercase">ghi rõ lý do và ký xác nhận</strong> vào phiếu.</li>
                          <li>• KXN xử lý và ghi chú tình trạng mẫu lên phiếu KQ.</li>
                          <li>• Kết quả chỉ trả khi nhận đủ phiếu chỉ định đúng chuẩn.</li>
                        </ul>
                      </div>

                      <div className="glass dark:bg-slate-800 p-6 sm:p-10 rounded-[30px] sm:rounded-[40px] border-l-[12px] sm:border-l-[16px] border-blue-500 shadow-2xl hover:scale-[1.02] transition-transform">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-blue-800 dark:text-blue-400 font-black text-lg sm:text-xl uppercase tracking-tighter">
                          <Zap className="w-6 h-6 sm:w-8 h-8" /> 4. Cấp cứu / Khẩn
                        </div>
                        <ul className="space-y-3 sm:space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-lg font-bold leading-relaxed">
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
                                <td className="px-3 sm:px-6 py-4 sm:py-6 font-black text-indigo-900 dark:text-indigo-200 text-[10px] sm:text-sm md:text-base lg:text-lg leading-tight break-words">
                                  {test.name}
                                </td>
                                <td className="px-2 sm:px-6 py-4 sm:py-6 text-center">
                                  <div className="flex justify-center">
                                    <span className={`text-[8px] sm:text-xs font-black px-2 sm:px-4 py-1 sm:py-2.5 rounded-lg sm:rounded-xl uppercase tracking-tighter shadow-sm border inline-flex flex-col items-center justify-center text-center leading-[1.1] min-w-[80px] sm:min-w-[110px] ${
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
                                          <span className="hidden sm:inline">NƯỚC TIỂU & DỊCH</span>
                                          <span className="sm:hidden text-[7px]">N.TIỂU&DỊCH</span>
                                        </>
                                      ) : test.group.toLowerCase() === 'sinh học phân tử' ? (
                                        <>
                                          <span className="hidden sm:inline">SINH HỌC PHÂN TỬ</span>
                                          <span className="sm:hidden text-[7px]">SH PHÂN TỬ</span>
                                        </>
                                      ) : test.group}
                                    </span>
                                  </div>
                                </td>
                                <td className="px-2 sm:px-6 py-4 sm:py-6 text-center">
                                  <div className="flex flex-col items-center justify-center">
                                    <span className="text-[10px] sm:text-base font-black text-slate-800 dark:text-slate-200">{test.time.split(' / ')[0]}</span>
                                    {test.time.includes(' / ') && (
                                       <span className="text-[7px] sm:text-[10px] font-black text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-1.5 sm:px-2 py-0.5 rounded-full mt-1">Khẩn: {test.time.split(' / ')[1]}</span>
                                    )}
                                  </div>
                                </td>
                                <td className="px-3 sm:px-6 py-4 sm:py-6 text-[9px] sm:text-xs md:text-sm font-mono font-bold text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-tight tracking-tight">
                                  {test.ref}
                                </td>
                                <td className="px-3 sm:px-6 py-4 sm:py-6 bg-rose-50/20 dark:bg-rose-950/10">
                                  <p className="text-[9px] sm:text-xs font-bold text-rose-700 dark:text-rose-300 whitespace-pre-wrap leading-tight">
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
                            <h3 className="text-lg font-black text-indigo-900 dark:text-indigo-200 leading-tight">{test.name}</h3>
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
                            <div className={`${selectedTest.isFeatured ? 'bg-gradient-to-tr from-[#a18cd1] 0% via-[#fbc2eb] 100% shadow-inner' : 'bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600'} p-6 sm:p-10 text-white relative overflow-hidden`}>
                              {/* Soft decorative blur circles for Korean style or warm glow */}
                              <div className="absolute top-[-20%] left-[-10%] w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse" />
                              <div className="absolute bottom-[-10%] right-[-5%] w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl" />
                              
                              <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className="bg-white/20 p-3 sm:p-5 rounded-2xl sm:rounded-3xl backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(31,38,135,0.2)]">
                                  <div className="relative">
                                    <Microscope className="w-8 h-8 sm:w-10 h-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] text-white" />
                                    <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300 animate-bounce" />
                                  </div>
                                </div>
                                <button 
                                  onClick={() => setSelectedTest(null)}
                                  className="p-2 sm:p-3 bg-white/10 hover:bg-white/30 rounded-2xl transition-all duration-300 backdrop-blur-md active:scale-90 border border-white/20"
                                >
                                  <X className="w-6 h-6 sm:w-7 h-7" />
                                </button>
                              </div>
                              <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-4 tracking-normal leading-[1.1] uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)] relative z-10">{selectedTest.name}</h3>
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
                                <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[2.5rem] border-2 border-white shadow-xl relative overflow-hidden group mb-6">
                                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:rotate-12 transition-transform duration-700">
                                    <FlaskConical className="w-20 h-20 text-blue-600" />
                                  </div>
                                  <h4 className="text-blue-700 text-xs font-black uppercase tracking-widest mb-6 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    Phương pháp & Kỹ thuật xét nghiệm
                                  </h4>
                                  <div className="text-slate-800 text-base sm:text-lg leading-relaxed font-sans font-bold space-y-4 relative z-10">
                                    {selectedTest.testingMethods.split('\n').filter(line => line.trim()).map((line, i) => (
                                      <div key={i} className="flex items-start gap-3">
                                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                                        <p dangerouslySetInnerHTML={{ __html: line }} />
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
                                        <p className="font-black text-red-600 mb-2 text-xl uppercase tracking-tighter decoration-red-200 decoration-4 underline-offset-4 underline">
                                          {selectedTest.group === 'Vi sinh' ? 'DƯƠNG TÍNH / VI KHUẨN MỌC' : 'Tăng nồng độ'}
                                        </p>
                                        <div 
                                          className={`text-base sm:text-lg text-slate-800 leading-relaxed text-justify ${selectedTest.pathologicalMeaning.increase.includes('<details') ? '' : 'whitespace-pre-wrap'} font-sans font-medium space-y-3`}
                                        >
                                          {selectedTest.pathologicalMeaning.increase.includes('<details') ? (
                                            <div 
                                              dangerouslySetInnerHTML={{ __html: selectedTest.pathologicalMeaning.increase }} 
                                              className="mt-2"
                                            />
                                          ) : (
                                            <div className="space-y-2 mt-2">
                                              {(() => {
                                                let counter = 0;
                                                const lines = selectedTest.pathologicalMeaning.increase.split('\n').filter(line => line.trim());
                                                const parentCount = lines.filter(line => line.trim().startsWith('🔹')).length;
                                                return lines.map((line, i) => {
                                                  const trimmedLine = line.trim();
                                                  const isParent = trimmedLine.startsWith('🔹');
                                                  const isChild = trimmedLine.startsWith('🔴');
                                                  const isGrandChild = trimmedLine.startsWith('▫️');
                                                  
                                                  if (isParent) counter++;
                                                  
                                                  let containerClass = 'pr-4 py-1';
                                                  if (isParent) containerClass = 'p-4 bg-red-50/50 dark:bg-red-900/10 rounded-2xl border border-red-100/50 dark:border-red-800/10 hover:bg-red-100/50';
                                                  if (isChild) containerClass = 'pl-10 pr-4 py-1.5 opacity-90';
                                                  if (isGrandChild) containerClass = 'pl-16 pr-4 py-1 opacity-80 text-sm italic';

                                                  return (
                                                    <div key={i} className={`flex items-start gap-4 ${containerClass} transition-colors group/item`}>
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
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="group flex flex-col sm:flex-row gap-4 p-6 bg-white rounded-3xl border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-500">
                                      <div className="bg-gradient-to-br from-blue-100 to-indigo-200 p-4 rounded-2xl h-fit w-fit shadow-inner">
                                        <TrendingDown className="w-6 h-6 text-blue-600" />
                                      </div>
                                      <div className="flex-1">
                                        <p className="font-black text-blue-600 mb-2 text-xl uppercase tracking-tighter decoration-blue-200 decoration-4 underline-offset-4 underline">
                                          {selectedTest.group === 'Vi sinh' ? 'ÂM TÍNH / VI KHUẨN KHÔNG MỌC' : 'Giảm nồng độ'}
                                        </p>
                                        <div 
                                          className={`text-base sm:text-lg text-slate-800 leading-relaxed text-justify ${selectedTest.pathologicalMeaning.decrease.includes('<details') ? '' : 'whitespace-pre-wrap'} font-sans font-medium space-y-3`}
                                        >
                                          {selectedTest.pathologicalMeaning.decrease.includes('<details') ? (
                                            <div 
                                              dangerouslySetInnerHTML={{ __html: selectedTest.pathologicalMeaning.decrease }} 
                                              className="mt-2"
                                            />
                                          ) : (
                                            <div className="space-y-2 mt-2">
                                              {(() => {
                                                let counter = 0;
                                                const lines = selectedTest.pathologicalMeaning.decrease.split('\n').filter(line => line.trim());
                                                const parentCount = lines.filter(line => line.trim().startsWith('🔹')).length;
                                                return lines.map((line, i) => {
                                                  const trimmedLine = line.trim();
                                                  const isParent = trimmedLine.startsWith('🔹');
                                                  const isChild = trimmedLine.startsWith('🔴');
                                                  const isGrandChild = trimmedLine.startsWith('▫️');

                                                  if (isParent) counter++;
                                                  
                                                  let containerClass = 'pr-4 py-1';
                                                  if (isParent) containerClass = 'p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100/50 dark:border-blue-800/10 hover:bg-blue-100/50';
                                                  if (isChild) containerClass = 'pl-10 pr-4 py-1.5 opacity-90';
                                                  if (isGrandChild) containerClass = 'pl-16 pr-4 py-1 opacity-80 text-sm italic';

                                                  return (
                                                    <div key={i} className={`flex items-start gap-4 ${containerClass} transition-colors group/item`}>
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
                                          )}
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

                {staffSubTab === 'ai-assistant' && (
                  <motion.div
                    key="s-ai"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="max-w-5xl mx-auto px-4 pb-20"
                  >
                    <div className="bg-white rounded-[40px] p-8 sm:p-12 shadow-2xl border border-slate-100">
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-12">
                        <div>
                          <h2 className="text-3xl sm:text-4xl font-black text-slate-800 flex items-center gap-4">
                            <Brain className="w-10 h-10 text-indigo-600" />
                            Thư ký Xét nghiệm
                          </h2>
                          <p className="text-slate-500 font-medium mt-2">Trợ lý AI chuyên nghiệp phân tích phiếu chỉ định</p>
                        </div>
                        <button 
                          onClick={() => {
                            const newKey = prompt("⚙️ Nhập Google Gemini API Key của bạn:");
                            if (newKey) {
                              localStorage.setItem('gemini_api_key', newKey);
                              alert("✅ Đã lưu API Key thành công!");
                            }
                          }}
                          className="flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-2xl transition-all active:scale-95"
                        >
                          ⚙️ Cài đặt API Key
                        </button>
                      </div>

                      <div className="grid grid-cols-1 gap-8 mb-12">
                        <div className="space-y-3">
                          <label className="text-lg font-black text-slate-700 flex items-center gap-2">
                            <Stethoscope className="w-6 h-6 text-indigo-500" />
                            1. Chẩn đoán lâm sàng
                          </label>
                          <textarea 
                            value={boxChanDoan}
                            onChange={(e) => setBoxChanDoan(e.target.value)}
                            placeholder="Nhập chẩn đoán hoặc dùng nút '📷 Quét ảnh'..." 
                            className="w-full h-32 p-6 bg-slate-50 rounded-[25px] border-2 border-transparent focus:border-indigo-500 focus:bg-white transition-all text-lg font-medium text-slate-800 outline-none resize-none shadow-inner"
                          />
                        </div>

                        <div className="space-y-3">
                          <label className="text-lg font-black text-slate-700 flex items-center gap-2">
                            <ClipboardList className="w-6 h-6 text-purple-500" />
                            2. Danh sách xét nghiệm
                          </label>
                          <textarea 
                            value={boxChiDinh}
                            onChange={(e) => setBoxChiDinh(e.target.value)}
                            placeholder="Nhập tên các xét nghiệm chỉ định..." 
                            className="w-full h-40 p-6 bg-slate-50 rounded-[25px] border-2 border-transparent focus:border-purple-500 focus:bg-white transition-all text-lg font-medium text-slate-800 outline-none resize-none shadow-inner"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <label className="relative group cursor-pointer">
                          <div className={`h-20 flex items-center justify-center gap-4 rounded-3xl font-black text-xl transition-all active:scale-95 shadow-lg ${isLoadingExtract ? 'bg-slate-200 text-slate-400' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'}`}>
                            {isLoadingExtract ? (
                              <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
                            ) : (
                              <Camera className="w-8 h-8 transform group-hover:rotate-12 transition-transform" />
                            )}
                            {isLoadingExtract ? 'Đang quét...' : '📷 Quét ảnh'}
                          </div>
                          <input 
                            type="file" 
                            accept="image/*" 
                            className="hidden" 
                            onChange={handleExtract}
                            disabled={isLoadingExtract}
                          />
                        </label>

                        <button 
                          onClick={handleAnalyze}
                          disabled={isLoadingAnalyze || isLoadingExtract || (!boxChanDoan && !boxChiDinh)}
                          className="h-20 bg-indigo-600 text-white rounded-3xl font-black text-xl flex items-center justify-center gap-4 transition-all hover:bg-indigo-700 shadow-lg shadow-indigo-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isLoadingAnalyze ? (
                            <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <Sparkles className="w-8 h-8" />
                          )}
                          {isLoadingAnalyze ? 'Đang phân tích...' : '🧠 Phân tích'}
                        </button>
                      </div>

                      <AnimatePresence>
                        {aiResult && !isLoadingAnalyze && (
                          <motion.div
                            id="ai-result-display"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-16 rounded-[40px] overflow-hidden shadow-2xl relative"
                          >
                            <div 
                              className="p-10 sm:p-14 text-left relative z-10" 
                              style={{ background: 'linear-gradient(135deg, #0f172a 0%, #312e81 50%, #4c1d95 100%)' }}
                            >
                              <div className="flex items-center gap-5 mb-10 border-b border-white/10 pb-8">
                                <div className="p-4 bg-white/10 rounded-3xl backdrop-blur-md">
                                  <Activity className="w-10 h-10 text-cyan-400" />
                                </div>
                                <div>
                                  <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">KẾT QUẢ BIỆN LUẬN</h3>
                                  <p className="text-indigo-200 font-bold opacity-80 uppercase text-sm tracking-widest mt-1">Medical AI Analysis • Pro Version</p>
                                </div>
                              </div>

                              <div 
                                className="prose prose-invert max-w-none text-blue-50/90 text-lg sm:text-xl leading-relaxed"
                                style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
                                dangerouslySetInnerHTML={{ __html: aiResult }} 
                              />

                              <div className="mt-12 p-8 bg-black/30 backdrop-blur-xl rounded-3xl border border-white/5 flex items-start gap-4">
                                <div className="text-3xl">⚠️</div>
                                <p className="text-red-200 font-medium text-base leading-relaxed italic">
                                  Lưu ý: Đây là phân tích hỗ trợ dựa trên mô hình AI Gemini 2.0 Flash của Google. Kết quả này mang tính chất tham khảo học thuật, bác sĩ cần đối chiếu thực tế lâm sàng trước khi ra quyết định.
                                </p>
                              </div>
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] -mr-32 -mt-32"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[100px] -ml-32 -mb-32"></div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
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
