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
    name: "Định lượng Glucose [máu]", 
    group: "Sinh Hóa", 
    time: "120 phút / 45 phút", 
    isFeatured: true,
    ref: "Huyết tương: 60 - 110 mg/dL hay 3,36 - 6,16 mmol/L.\nMáu toàn phần: 60 - 105 mg/dL hay 3,36 - 5,58 mmol/L.\nTrẻ sơ sinh: 20 - 80 mg/dL hay 1,12 - 4,48 mmol/L.", 
    alert: "0 - 4 tháng và 4 tháng - 1 tuổi: < 1,94 mmol/L (< 35 mg/dL) hoặc > 18,2 mmol/L (> 325 mg/dL).\n> 1 tuổi: < 2,5 mmol/L (45 mg/dL) hoặc > 28 mmol/L (> 500mg/dL).",
    concept: "Bình thường glucose máu xuất xứ từ 2 nguồn hoàn toàn khác biệt: Nguồn gốc ngoại sinh (chuyển hóa các carbohydrat do thức ăn cung cấp) và nguồn gốc nội sinh (chuyển đổi glycogen thành glucose).",
    physiology: "Điều hoà nồng độ glucose máu chịu tác động của 2 hệ thống hormon đối lập nhau:\n\nInsulin có tác dụng làm hạ glucose máu.\n\nGlucagon, adrenalin, cortisol và GH có tác dụng làm tăng nồng độ glucose máu.",
    indication: "Để chẩn đoán các bất thường chuyển hóa glucid.",
    specimenCollection: "Máu được lấy vào ống nghiệm chứa natri fluorat. Ống nghiệm phải được bảo quản ở 4°C. BN phải được nhịn ăn tuyệt đối trong vòng ít nhất 8 giờ trước khi lấy máu XN.\n\nNếu có thể được, yêu cầu BN tạm ngừng dùng insulin và thuốc viên hạ đường huyết tới khi lấy hết các mẫu máu XN. Hiện nay việc sử dụng các giấy thử có tẩm enzym glucose oxydase và máy đo đường huyết cho phép đo gần như ngay tức thì.",
    testingMethods: "Enzym Glucose Oxydase / Hexokinase.",
    pathologicalMeaning: {
      increase: "1. Di truyền/Dinh dưỡng: Đái tháo đường (ĐTĐ) typ I & II, lấy bệnh phẩm khi BN không nhịn ăn.\n2. Bệnh lý nội tiết: Hội chứng Cushing, quá thừa Adrenalin (stress, sốc, u tế bào ưa crom, bỏng), các nguyên nhân hormon khác.\n3. Bệnh lý tụy: Viêm tụy cấp/mạn, khối u tụy.\n4. Khác: Nhiễm thiết huyết tố (Hemochromatosis), tổn thương thần kinh trung ương.",
      decrease: "1. Điều trị: Quá liều thuốc hạ đường huyết/insulin, dùng insulin không đúng chỉ định.\n2. Bệnh lý tụy/Nội tiết: Tiết insulin quá mức, u tế bào đảo tụy, u ngoài tụy, thiếu hụt hormon đối kháng insulin.\n3. Chức năng/Chuyển hóa: Hội chứng Dumping, rối loạn hệ thần kinh tự động, bệnh lý gan nặng và lan tỏa, rối loạn kho chứa glycogen.\n4. Khác: Sốt rét, suy dinh dưỡng, rối loạn bẩm sinh hiếm gặp ở nhi khoa."
    },
    interferingFactors: "Lưu ý bệnh phẩm: Mẫu bị vỡ hồng cầu, tách huyết thanh không tốt hoặc lấy không đủ bệnh phẩm.\nBiến số sinh lý: Hematocrit > 55% (giảm kết quả), < 35% (tăng kết quả). Oxy thấp gây tăng giả tạo. Gắng sức mạnh, xúc cảm, sốc, bỏng, nhiễm trùng làm tăng nồng độ sinh lý.\nẢnh hưởng thuốc: Thuốc tâm thần, chẹn bêta, corticoid, adrenalin, estrogen, lợi tiểu, insulin, thuốc viên hạ đường huyết.",
    clinicalNote: "Đường huyết đói >= 7.0 mmol/L trong ít nhất 2 lần xét nghiệm riêng biệt thường là tiêu chuẩn chẩn đoán ĐTĐ. Cần phối hợp với HbA1c để đánh giá kiểm soát đường huyết trong 3 tháng."
  },
  {
    name: "Định lượng Ure [máu]", 
    group: "Sinh Hóa", 
    time: "120 phút / 45 phút", 
    isFeatured: true,
    ref: "Urê: 13 - 40 mg/dL hay 2,1 - 6,6 mmol/L.\nBUN: 5 - 17 mg/dL.", 
    alert: "Tất cả các rối loạn nặng chức năng thận đều dẫn tới tăng nồng độ urê huyết thanh và nồng độ này trở nên độc khi > 33 mmol/L (> 200 mg/dL).",
    concept: "Urê là con đường thoái hóa chính của các protein trong cơ thể và là sản phẩm quan trọng nhất của chuyển hoá nitơ. Ure nitrogen (BUN) là phần nitrogen của urê.",
    physiology: "Urê có TLPT 60 dalton và quá trình tổng hợp urê xẩy ra ở gan theo Chu trình Krebs - Henseleit. Nguồn NH3 và Urê có xuất xứ chủ yếu từ quá trình thoái hoá các protein (ngoại sinh và nội sinh).\n\nCác con đường đào thải urê bao gồm đường tiêu hoá và đường thận.",
    indication: "Giúp chẩn đoán tình trạng suy thận nhất là khi phân tích kết hợp với tỷ lệ nồng độ urê niệu/nồng độ urê máu.\n\nĐể đánh giá mức cung cấp protein của một chế độ ăn.",
    specimenCollection: "Máu: xét nghiệm được tiến hành trên huyết thanh. Không nhất thiết cần nhịn ăn trước khi lấy máu XN.\n\nHướng dẫn BN không nên ăn chế độ có quá nhiều protein trước khi lấy máu xét nghiệm.",
    pathologicalMeaning: {
        increase: "1. Chế độ ăn giàu protein.\n2. Tăng dị hoá protein: Sốt, Bỏng, Suy dinh dưỡng, Nhịn đói, Bệnh lý u tân sinh, Xuất huyết đường tiêu hoá.\n3. Suy thận nguồn gốc trước thận: Mất nước, Giảm thể tích máu, Suy tim.\n4. Suy thận nguồn gốc tại thận: Tổn thương cầu thận, Tổn thương ống thận.\n5. Suy thận nguồn gốc sau thận: Sỏi, Xơ hoá sau phúc mạc, U bàng quang hay tử cung, U biểu mô tuyến hay ung thư tuyến tiền liệt.\n6. Các nguyên nhân khác: Ngộ độc thủy ngân, Nhiễm trùng nặng.",
        decrease: "1. Đang tuổi phát triển.\n2. Có thai.\n3. Hoà loãng máu: Lọc máu, Có thai những tháng cuối, Hội chứng thận hư, Tăng gánh thể tích.\n4. Hội chứng tiết ADH không thích hợp.\n5. Suy gan: Viêm gan nặng cấp hay mạn tính, Xâm nhiễm di căn lớn, Xơ gan.\n6. Bệnh Celiac.\n7. Chế độ ăn không cung cấp đủ protein.\n8. Hội chứng giảm hấp thu."
    },
    interferingFactors: "Tăng giả tạo nồng độ urê máu có thể xẩy ra khi để bệnh phẩm xẩy ra vỡ hồng cầu.\n\nCác thuốc có thể làm tăng nồng độ urê máu: Thuốc ức chế men chuyển angiotensin, acetaminophen, acyclovir, allopurinol, amantadin, aminoglycosid, amiodaron, amphotericin B, v.v.\n\nCác thuốc có thể làm giảm nồng độ urê máu: Chloramphenicol, streptomycin.",
    clinicalNote: "Nồng độ urê máu phụ thuộc đáng kể vào chế độ ăn. Để đánh giá chính xác chức năng thận, nên nhịn ăn và phối hợp với kết quả Creatinin."
  },
  {
    name: "Định lượng Creatinin [máu]", 
    group: "Sinh Hóa", 
    time: "120 phút / 45 phút", 
    isFeatured: true,
    ref: "Nam: 0,7 - 1,3 mg/dL hay 62 - 115 µmol/L.\nNữ: 0,5 - 1,0 mg/dL hay 44 - 88 µmol/L.\nTrẻ em: 0,3 - 1,0 mg/dL hay 26 - 88 µmol/L.", 
    alert: "Creatinin máu > 1.5 mg/dL (133 µmol/L) thường gợi ý suy giảm chức năng thận.",
    concept: "Creatinin là một chất chuyển hóa nitơ, sản phẩm của sự thoái giáng của creatin cơ. Creatin trong cơ thể có nguồn gốc hỗn hợp: nguồn gốc ngoại sinh do thức ăn cung cấp và nguồn gốc nội sinh chủ yếu từ gan, ngoài ra có thể ở thận và tụy.",
    physiology: "Creatin bị thoái biến trong các cơ thành creatinin, chất này được đưa trở lại tuần hoàn, rồi được thải trừ qua thận. Ở thận, creatinin được lọc qua các cầu thận và được coi là không được ống thận tái hấp thu. Vì vậy, nồng độ creatinin máu chủ yếu phản ánh chức năng thận của BN.",
    indication: "Để chẩn đoán và đánh giá mức độ suy thận.\n\nĐịnh lượng nồng độ creatinin niệu kết hợp với định lượng nồng độ creatinin máu được sử dụng để tính toán độ thanh thải creatinin nhằm để đánh giá chức năng thận.",
    specimenCollection: "XN được thực hiện trên huyết thanh. Không nhất thiết yêu cầu BN cần phải nhịn ăn trước khi lấy máu làm XN.",
    pathologicalMeaning: {
        increase: "1. Suy thận nguồn gốc trước thận: Suy tim mất bù, Mất nước, giảm khối lượng tuần hoàn, Dùng thuốc lợi tiểu hay thuốc hạ áp, Xuất huyết, Hẹp động mạch thận.\n2. Suy thận nguồn gốc thận: Tổn thương cầu thận (Tăng huyết áp, Đái tháo đường, Bệnh nhiễm amyloid, Viêm cầu thận, Bệnh lupus ban đỏ hệ thống...), Tổn thương ống thận, Do chất độc.\n3. Suy thận nguồn gốc sau thận: Sỏi thận, U biểu mô tuyến hay ung thư tuyến tiền liệt, Các khối u bàng quang, Khối u tử cung, Xơ hoá sau phúc mạc.",
        decrease: "1. Hoà loãng máu.\n2. Hội chứng tiết hormon chống bài niệu (ADH) không thích hợp.\n3. Tình trạng suy dinh dưỡng nặng.\n4. Một số bệnh cơ gây teo mô cơ.\n5. Có thai."
    },
    interferingFactors: "Mẫu bệnh phẩm bị vỡ hồng cầu có thể làm thay đổi kết quả XN.\n\nNồng độ creatinin máu vào cuối buổi chiều sẽ tăng cao hơn 20 - 40% so với buổi sáng. Chế độ ăn chứa quá nhiều thịt cũng có thể làm thay đổi kết quả XN.\n\nCác thuốc làm biến đổi kết quả: Amphotericin B, androgen, arginin, acid ascorbic, barbiturat, cefoxitin, cimetidin, chlorpromazin, thuốc lợi tiểu nhóm thiazid, vancomycin, v.v.",
    clinicalNote: "Mức lọc cầu thận (eGFR) được tính từ Creatinin máu là chỉ số quan trọng nhất để phân độ suy thận mạn."
  },
  {
    name: "Xét nghiệm Khí máu [máu] (pH, pO2, pCO2, HCO3-)", 
    group: "Sinh Hóa", 
    time: "120 phút / 45 phút", 
    isFeatured: true,
    ref: "pH: 7,35 - 7,45.\nPaCO2: 35 - 45 mmHg (torr).\nHCO3-: 22 - 26 mEq/L (mmol/L).\nPaO2: 75 - 100 mmHg.", 
    alert: "pH < 7,35: Nhiễm acid máu (acidosis).\npH > 7,45: Nhiễm kiềm máu (alkalosis).",
    concept: "Khí máu động mạch giúp đánh giá tình trạng thăng bằng toan kiềm của cơ thể thông qua 3 hệ thống: Hệ đệm, Hệ hô hấp và Hệ thận.",
    physiology: "Hệ thống đệm: Tham gia thăng bằng thông qua việc giữ lại hoặc thải ion H+.\n\nHệ hô hấp: Tác động qua hệ đệm acid carbonic - bicarbonat. Phổi kiểm soát CO2 và đáp ứng nhanh với thay đổi toan kiềm bằng cách điều chỉnh nhịp thở.\n\nPaO2: Áp lực riêng phần oxy động mạch phản ánh hiệu quả oxy hóa máu của phổi.",
    indication: "Xác định pH, áp lực O2, CO2 và nồng độ bicarbonat. Hữu ích trong chẩn đoán suy hô hấp, nhiễm toan/kiềm chuyển hóa hoặc hô hấp.",
    specimenCollection: "Không cần nhịn ăn. Lấy 3-5 mL máu động mạch bằng bơm tiêm tráng heparin 0,2 mL.\nLưu ý: Phải đẩy hết bóng khí, đậy kín nắp, bảo quản trong đá lạnh và phân tích ngay lập tức.",
    testingMethods: "Phân tích máy khí máu (Blood Gas Analyzer).",
    pathologicalMeaning: {
        increase: "1. Toan hô hấp (Tăng PCO2): Hen phế quản, ngừng tim, viêm phế quản mạn, COPD, suy tim, chấn thương sọ não, béo phì (Pickwick).\n2. Kiềm chuyển hóa (Tăng HCO3-): Dùng lợi tiểu, nôn nhiều, mất clo/kali, truyền natri bicarbonat, dùng thuốc trung hòa acid dạ dày.",
        decrease: "1. Kiềm hô hấp (Giảm pCO2): Lo lắng, đau đớn, sốt, nhiễm trùng huyết, suy hô hấp cấp, suy gan, ngộ độc salicylat giai đoạn đầu.\n2. Toan chuyển hóa (Giảm HCO3-): Nhiễm toan lactic (sau ngừng tim), toan ceton đái tháo đường, tiêu chảy nặng, suy thận, đói ăn kéo dài."
    },
    interferingFactors: "Sai sót lấy mẫu: Không đẩy hết bọt khí làm biến đổi PaCO2/PaO2.\nThuốc ảnh hưởng: Aldosteron, hydrocortison, lợi tiểu thiazid, tetracyclin, aspirin, muối kiềm.",
    clinicalNote: "Xét nghiệm khí máu là tiêu chuẩn vàng để quản lý bệnh nhân hồi sức và cấp cứu. Cần đối chiếu với tình trạng lâm sàng (nhịp thở, tri giác) để có hướng xử trí bù kiềm/toan chính xác."
  },
  {
    name: "Đo hoạt độ AST (GOT) [máu]", 
    group: "Sinh Hóa", 
    time: "120 phút / 45 phút", 
    isFeatured: true,
    ref: "Nam: < 25 U/L.\nNữ: < 21 U/L.\nNgười già: Tăng nhẹ.\nTrẻ sơ sinh: Tăng 2 - 3 lần.\n(BV Bạch Mai: Nam: < 37 U/L-37°C; Nữ: < 31 U/L-37°C).", 
    alert: "AST > 10 lần giới hạn bình thường thường chỉ ra hoại tử tế bào gan cấp tính.",
    concept: "Transaminase là các enzym có vai trò cơ bản là chuyển nhóm NH2 của một acid amin tới một acid cetonic. AST (ASAT) xúc tác phản ứng Aspartat + Oxoglutamat <=> Oxaloacetat + Glutamat.",
    physiology: "Hiện diện trong tim, gan, cơ xương, thận, tụy, hồng cầu. AST được giải phóng vào tuần hoàn sau khi xẩy ra tình trạng tổn thương hay chết của các tế bào chứa enzym này.\n\nCác AST có thời gian bán huỷ trong máu là 17h.",
    indication: "Xác định tình trạng phân hủy tế bào (cytolyse). Đánh giá tổn thương gan, theo dõi độc tính thuốc, đánh giá tổn thương cơ tim trong NMCT.",
    specimenCollection: "Tiến hành trên huyết thanh. Thường không cần nhịn ăn. Tách hồng cầu nhanh do vỡ hồng cầu làm XN không chính xác.",
    pathologicalMeaning: {
        increase: "1. Bệnh lý tim (AST/ALT > 1): Nhồi máu cơ tim, Viêm cơ tim, Phẫu thuật tim, Suy tim mất bù (gan xung huyết).\n2. Căn nguyên gan: Viêm gan virus, Viêm gan do thuốc/nhiễm độc, Tắc mật, Hoại tử gan, Xơ gan, Viêm gan do rượu, Xâm nhiễm gan.\n3. Bệnh lý tụy: Viêm tụy cấp do mật, Viêm tụy cấp do rượu.\n4. Bệnh lý cơ: Hội chứng vùi lấp, Viêm đa cơ, Viêm da và cơ, Tăng thân nhiệt ác tính, Bệnh loạn dưỡng cơ Duchenne.\n5. Suy giáp với phù niêm.\n6. Các nguyên nhân khác: Chấn thương não, Di căn xương, Ung thư tuyến tiền liệt, Nhiễm độc thai nghén, Nhồi máu phổi, Hội chứng Reye, Bỏng nặng.",
        decrease: "1. Bệnh Beriberi (thiếu vitamin B1).\n2. Thiếu hụt pyridoxal phosphat (suy dinh dưỡng, bệnh gan do rượu).\n3. Nhiễm toan cetôn do ĐTĐ.\n4. Lọc máu mạn.\n5. Có thai.\n6. Hội chứng urê máu cao."
    },
    interferingFactors: "Mẫu bị vỡ hồng cầu làm tăng giả hoạt độ.\n\nThuốc làm tăng: Acetaminophen, allopurinol, kháng sinh, acid ascorbic, chlpropamid, clofibrat, statin, hydralazin, isoniazid, meperidin, methyldopa, morphin, thuốc ngừa thai, phenothiazin, procainamid, pyridoxin, salicylat, sufonamid, verapamil, vitamin A.\n\nThuốc làm giảm: Metronidazol, trifluoperazin.",
    clinicalNote: "Tỷ lệ AST/ALT (Chỉ số de Ritis) giúp phân biệt tổn thương gan do rượu (>2) hay do virus (<1)."
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
    "concept": "GAMMA-GLUTAMYL-TRANSFERASE (GAMMA GT hay GGT)\n(Gamma-Glutamyl Transpeptidase / Gamma-Glutamyl Transferase, Gamma-Glutamyl Transpeptidase)",
    "physiology": "Gamma-Glutamyl-Transferase (gamma GT) là một enzym gắn với màng tế bào (membrane-bound enzyme) tham gia vào quá trình xúc tác chuyển các nhóm gamma-glutamyl giữa các acid amin qua màng tế bào.\n\nEnzym này được thấy với hoạt độ lớn ở gan, thận, tuỵ, đường mật và với hoạt độ thấp hơn ở tim, lách và ruột non. Tuy vậy, enzym lưu hành trong huyết tương có nguồn gốc chủ yếu từ gan.\n\nGamma GT chịu trách nhiệm trong quá trình chuyển hóa glutathion ngoài tế bào (một chất chống oxi hóa chính trong tế bào). Enzym này có thể được coi là enzym đầu tiên chịu tác động một khi xẩy ra các bệnh lý của gan và đường mật, chính độ nhạy rất cao đó khiến gamma GT rất hữu ích trong loại trừ một bệnh lý gan mật. Tuy nhiên do tính đặc hiệu thấp nên không giúp ích gì cho việc xác định nguyên nhân gây bệnh.\n\nỞ người nghiện rượu, gamma GT thường bị gia tăng đơn độc. Giá trị của enzym tương ứng với lượng rượu hấp thụ và nghiên cứu đường tiến triển của enzym theo thời gian giúp người thầy thuốc đánh giá thói quen dùng rượu của bệnh nhân.\n\nTrong trường hợp tăng phosphatase kiềm, xác định gamma GT cho phép phân biệt nguồn gốc xương (gamma GT bình thường) với nguồn gốc gan mật của tình trạng tăng phosphatse kiềm (gamma GT tăng).",
    "indication": "1. Để chẩn đoán và theo dõi một bệnh lý gan mật. Đây là một chỉ dấu enzym rất nhạy đối với các bệnh gan.\n2. Để phân biệt tình trạng tăng phosphatase kiềm do nguyên nhân bệnh cơ hay do bệnh gan mật.\n3. Để sàng lọc các tình trạng nghiện rượu mạn tính nhưng bệnh nhân không chịu khai báo.",
    "specimenCollection": "XN được tiến hành trên huyết thanh.\nYêu cầu BN nhịn ăn 8h trước khi lấy máu XN. BN không được uống rượu trong vòng 24h trước khi lấy máu XN.\n\nGhi chú:\nCó thể bảo quản bệnh phẩm trong vòng 24h ở 4°C. Tuy vậy, phải tiến hành tương đối nhanh quá trình tách hồng cầu để tránh bệnh phẩm bị vỡ hồng cầu.",
    "testingMethods": "",
    "ref": "0-3 tháng: 4 - 120 U/L hay IU/L.\n3 tháng - 1 năm: 3 - 30 U/L hay 3 - 30 IU/L.\n1 - 16 tuổi: 2 - 25 U/L hay 2 - 25 IU/L.\nNam: 5 - 38 U/L hay 5 - 38 IU/L.\nNữ: 5 - 29 U/L hay 5 - 29 IU/L.",
    "alert": "Trong chẩn đoán tình trạng nghiện rượu mạn:\n- Kết quả đo hoạt độ gamma GT huyết thanh bình thường không cho phép loại bỏ chẩn đoán có ngộ độc rượu. Kết hợp giữa đo hoạt độ gamma GT và XN công thức máu thấy có tăng thể tích hồng cầu chỉ giúp phát hiện được khoảng 70% các BN bị nghiện rượu mạn.\n- Trái lại, kết quả XN bất thường song không có biểu hiện bệnh lý gan trên lâm sàng cũng không cho phép khẳng định chẩn đoán có tình trạng nghiện rượu mạn do có nhiều nguyên nhân khác cũng gây tăng hoạt độ gamma GT (Vd: đái tháo đường, cường giáp, bệnh cầu thận).\nĐối với các bệnh lý gan mật, mặc dù gamma GT cho thấy là một XN rất nhạy song nó hoàn toàn không giúp ích gì trong xác định nguyên nhân gây bệnh đặc hiệu. Các tình trạng gây tăng gamma GT mạnh nhất là ứ mật và viêm gan do rượu.\nNửa đời sống của gamma-GT vào khoảng 7 - 10 ngày, song ở các bệnh nhân bị tổn thương gan liên quan với rượu cồn, nửa đời sống của gamma-GT có thể bị tăng lên tới 28 ngày do suy giảm khả năng thanh thải của gan.",
    "pathologicalMeaning": {
      "increase": "Các nguyên nhân chính thường gặp là:\n1. Các bệnh lý gan mật\nRượu:\n- Viêm gan do rượu: Gamma-GT tăng trung bình > 3,5 lần giới hạn bình thường cao.\n- Thoái hoá mỡ, thoái hoá mỡ xơ hoá: tăng gamma-GT song song với tăng hoạt độ AST và ALT song ở mức nhiều hơn.\nThuốc: Phenobarbital, phenytoin, warfarin, thuốc ngừa thai uống, rifampicin, INH, carbamazepin, methotrexat, acid valproic.\nViêm gan nhiễm trùng: Viêm gan A, B, không A - không B, tăng bạch cầu đơn nhân nhiễm trùng, bệnh do toxoplasma, nhiễm trùng do cytomegalovirus.\nViêm gan cấp: Tăng hoạt độ gamma-GT thường kém rõ rệt hơn so với tình trạng các enzym gan khác, song đây là enzym trở về mức bình thường muộn nhất, vì vậy rất hữu ích để chỉ dẫn tình trạng hồi phục.\nViêm gan mạn hoạt động (chronic active hepatitis): Tăng cao hơn so với trong viêm gan cấp (trung bình la > 7 lần mức giới hạn bình thường cao) và tăng nhiêu hơn so với mức tăng AST và ALT. Trong giai đoạn viêm gan mạn không hoạt động, có thể thấy đây là enzym duy nhất tiếp tục tăng hoạt tính trong khi các enzym khác trở về giá trị bình thường.\nXơ gan: Trong các trường hợp không tiến triển, giá trị gamma-GT trung bình tăng ít hơn so với mức tăng gặp trong viêm gan mạn (< 4 lần giới hạn bình thường cao). Khi mức tăng > 10-20 lần bình thường xẩy ra ở bệnh nhân xơ gan sẽ gợi ý có carcinoma tế bào gan nguyên phát chồng thêm vào (mức tăng trung bình la > 21 lần giới hạn bình thường cao).\nSuy tim mất bù (gan ứ huyết).\n\n2. Các xâm nhiễm gan\nTăng lipid máu.\nDi căn gan. Tăng gamma GT xẩy ra song song với tăng phosphatase kiềm (ALP) và đi trước khi chụp scan gan dương tính. Mức tăng trung bình > 14 lần giới hạn bình thường cao.\nU lympho.\nÁp xe.\nKén sán lá gan.\nBệnh sarcoidose (sarcoidosis).\nLao.\n\n3. Bệnh lý gây ứ mật: Nói chung hoạt độ gamma-GT biến đổi song hành với nồng độ phosphatase kiềm (ALP), leucin amino peptidase (LAP) và 5'-Nucleotidase (5'-NT) huyết thanh song gamma-GT nhạy hơn.\nVàng da tắc mật: Tăng gamma GT xẩy ra nhanh hơn và ở mức mạnh hơn so với mức tăng ALP và LAP. Mức tăng trung bình là > 5 lần giới hạn bình thường cao.\nXơ gan do mật tiên phát: Tăng gamma GT rõ rệt với mức tăng trung bình la > 13 lần giới hạn bình thường cao.\nViêm đường mật xơ hoá.\nỨ mật (cholestasis): Trong ứ mật cơ giới (Vd: do sỏi mật) và do viêm gan virus tăng gamma-GT và LAP tương đương nhau, song trong ứ mật do thuốc (drug-induced cholestasis), mức tăng gamma-GT nhiều hơn so với mức tăng LAP. Mức tăng trung bình được gặp > 6 lần giới hạn bình thường cao.\nUng thư biểu mô đường mật.\nTắc mật ở trẻ nhỏ: Gamma-GT tăng cao hơn nhiều trong thiểu sản đường mật gây chít hẹp (biliary atresia) so với trong viêm gan sơ sinh (điểm cắt 300 IU/L là ngưỡng phân biệt hữu ích). Các trẻ có tình trạng thiếu hụt a1-antitrypsin có hoạt độ gamma-GT cao hơn so với các bệnh nhân bị thiểu sản đường mật gây trít hẹp đường mật.\n\n4. Các tổn thương tụy tạng:\nViêm tụy: Hoạt độ gamma-GT luôn tăng cao trong viêm tụy cấp. Trong viêm tụy mạn chỉ gặp tăng gamma-GT khi có tổn thương tới đường mật hoặc viêm hoạt động.\nUng thư tụy.\nU bóng Vater (Ampullome de Vater).\n\n5. Các tổn thương thận\nHội chứng thận hư.\nUng thư biểu mô thận (hypernephroma) (hiếm gặp).\n\n6. Các nguyên nhân khác:\nĐái tháo đường, cường giáp, bệnh phổi tắc nghẽn mạn tính (COPD) và viêm khớp dạng thấp.\nNhồi máu cơ tim: tăng gamma-GT ở 50% các bệnh nhân. Tình trạng tăng này bắt đầu xảy ra vào ngày thứ 4 đến ngày thứ 5, đạt tới giá trị tối đa vào ngày thứ 8-12. Khi có tình trạng sốc tim hoặc suy tim phải cấp, có thể xuất hiện một đỉnh nồng độ sớm trong vòng 48h sau đó giảm nhanh và được tiếp theo bằng tình trạng tăng gamma-GT xây ra muộn hơn.\nMột số trường hợp ung thư biểu mô tuyến tiền liệt.\nCác khối u tân sinh, ngay cả khi không có di căn gan: U tế bào hắc tố ác tính, ung thư vú và phổi.\nCác tình trạng khác: Béo phì quá mức, bệnh tim, tình trạng sau mổ.",
      "decrease": "Nguyên nhân chính thường gặp là: Suy giáp"
    },
    "interferingFactors": "Mẫu bệnh phẩm bị vỡ hồng cầu có thể làm thay đổi kết quả XN.\nHoạt độ gamma-GT cho thấy có các thay đổi giữa các ngày xét nghiệm ở mức 10 - 15%.\nHoạt độ gamma-GT có thể tăng 25 - 50% khi BN có BMI cao; Gamma-GT bị giảm thấp hơn 25% trong những tháng đầu thai kỳ.\nCác thuốc có thể làm tăng hoạt độ gamma-GT là: Rượu, aminoglycosid, barbiturat (Vd: phenobarbital), thuốc kháng H2, thuốc chống viêm không phải là steroid, phenytoin, thuốc ngừa thai uống, thuốc chống trầm cảm, carbamzepin, cimetidin, furosemid.\nCác thuốc có thể làm giảm hoạt độ gamma-GT là: Clofibrat, thuốc chông đông.",
    "benefits": "Lợi ích của XN đo hoạt độ gamma-GT huyết thanh\n1. XN cho phép phát hiện các BN nghiện rượu nhưng không chịu nhận mình nghiện rượu (tăng gamma GT thường đi kèm với thiếu máu hồng cầu to và tăng acid uric máu). Tỷ lệ gamma-GT/ phosphatase kiềm > 2,5 là bằng chứng rất gợi ý cho tình trạng lạm dụng rượu.\n2. XN hữu ích để theo dõi các BN nghiện rượu: Đo hoạt độ gamma GT giúp chẩn đoán sớm các vấn đề gan mật ở BN nghiện rượu nhất là xơ gan do rượu và u gan. Trong thời gian cai rượu, gamma GT giảm xuống khoảng 50% trong vòng 8 ngày.\n3. XN cho phép phân biệt tăng phosphatase kiềm nguồn gốc xương với tăng phosphatase kiềm nguồn gốc gan mật khi tiến hành đo hoạt độ gamma GT huyết thanh cùng với đo hoạt độ phosphatase kiềm (do gamma GT đặc hiệu hơn đối với các bệnh lý gan mật).\n4. XN hữu ích để theo dõi các tình trạng ứ mật: Giảm rõ rệt hoạt độ gamma GT ở BN sỏi mật gợi ý đã loại bỏ được sỏi mật. XN đo hoạt độ gamma GT nhạy hơn XN đo hoạt độ phosphatase kiềm và transaminase (ALT, AST) trong phát hiện tình trạng vàng da tắc mật.\n5. XN giúp hỗ trợ cho chẩn đoán bị bệnh gan ở trẻ nhỏ > 3 tháng tuổi, phụ nữ có thai hoặc khi có bệnh lý xương do các đối tượng này có tình trạng tăng phosphatase kiềm và leucine aminopeptidase huyết thanh song không tăng gamma GT.\n6. Do hoạt độ gamma-GT bình thường ở các đối tượng bị bệnh xương hoặc đang tuổi tăng trưởng xương vì vậy đây là một XN hữu ích giúp chẩn đoán phân biệt giữa bệnh xương với bệnh gan như nguyên nhân gây tăng hoạt độ phosphatase kiềm huyết thanh.",
    "ebmGuidelines": "",
    "clinicalNote": ""
  },
  {
    "name": "Định lượng Triglyceride [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "TRIGLYCERID\n(Triglycéridémie / Triglycerides)",
    "physiology": "Triglycerid (triacylglycerol [TGA]) là một ester do glycerol kết hợp với ba acid béo tạo nên. Phân tử glycerol có ba nhóm hydroxyl OH. Mỗi acid béo có một nhóm carboxyl (COOH). Trong phân tử triglycerid, các nhóm hydroxyl của glycerol kết hợp với các nhóm carboxyl của acid béo tạo nên các cầu nối ester.\n\nTriglycerid là một dạng mỡ và là nguồn cung cấp năng lượng chính cho cơ thể, nó được tổng hợp ở gan từ acid béo, protein và glucose. Hầu hết triglycerid được trữ trong mô mỡ dưới dạng glycerol, monoglycerid và acid béo và được cơ thể mang ra tái sử dụng như một nguồn cung cấp năng lượng khi cần (phân hủy một phân tử triglycerid cung cấp một năng lượng gấp đôi so với phân tử protein hay carbohydrat: 9 kcal/g hay 38 kJ/g so với 4,5 kcal/g). Triglycerid di chuyển qua máu từ lòng ruột tới mô mỡ và được tích trữ ở đó. Hầu hết triglycerid được lipoprotein vận chuyển trong máu. Trong tình trạng nhịn ăn và ở người bình thường, phần lớn lượng triglycerid huyết tương tập trung trong VLDL (80%) và chỉ có 15% tập trung trong LDL cholesterol. Tăng triglycerid máu có thể phản ánh tình trạng quá tải VLDL song cũng có thể là hậu quả của một tích tụ bất thường khi đói của các chylomicron.",
    "indication": "Triglycerid thường được định lượng để giúp đánh giá tình trạng cân bằng giữa lượng lipid đưa vào và chuyển hóa lipid trong cơ thể. Tăng nồng độ triglycerid trong máu thường được kết hợp với tăng nguy cơ xuất hiện bệnh tim mạch và vữa xơ động mạch.",
    "specimenCollection": "XN được tiến hành trên huyết thanh. Yêu cầu BN phải nhịn ăn 12h trước khi lấy máu XN. BN không được uống rượu hay các chất có cồn trong vòng 24h trước khi XN.",
    "testingMethods": "",
    "ref": "Bình thường: < 150 mg/dL hay < 1,70 mmol/L.\nGiới hạn cao: 150 - 199 mmg/dL hay 1,70 - 2,25 mmol/L\nCao: 200 - 499 mg/dL hay 2,26 - 5,64 mmol/L.\nRất cao: ≥ 500 mg/dL hay ≥ 5,65 mmol/L.",
    "alert": "Một nồng độ triglycerid máu ≥ 150 mg/dL là một trong các yếu tố nguy cơ của hội chứng chuyển hóa. Cho bệnh nhân ăn một khẩu phần chứa mỡ toàn phần cao hơn (chủ yếu dưới dạng mỡ không bão hòa) có thể giúp làm giảm triglycerid và làm tăng HDL cholesterol ở các đối tượng bị hội chứng chuyển hóa.\n\nCác BN bị ĐTĐ song không được kiểm soát nồng độ glucose máu thường sẽ có nồng độ triglycerid rất cao. Tiến hành kiểm soát chặt nồng độ glucose máu sẽ có tác động kết hợp làm hạ thấp nồng độ triglycerid. Một khi đã đưa được nồng độ glucose máu về giới hạn bình thường, cần đánh giá lại nồng độ triglycerid máu để quyết định có cần điều trị hay không tình trạng này.",
    "pathologicalMeaning": {
      "increase": "Tăng triglycerid máu\nCác nguyên nhân chính thường gặp là:\n- Tăng lipid máu tiên phát: Tăng lipoprotein máu có tính gia đình, tăng triglycerid máu có tính gia đình, thiếu hụt lipase lipoprotein có tính gia đình (bệnh Buerger-Grutz), thiếu hụt apoprotein CII.\n- Tăng lipid máu thứ phát: Béo phì, rối loạn dung nạp glucose, bệnh ĐTĐ, viêm tụy cấp.\n- Bệnh về gan (xơ gan, viêm gan, ứ mật), nghiện rượu.\n- Bệnh thận: Hội chứng thận hư, suy thận mạn.\n- Chế độ ăn: Chế độ ăn chứa quá nhiều mỡ, carbonhydrat hoặc calo.\n- Phụ nữ có thai.\n- Tình trạng stress, nhồi máu cơ tim cấp.\n- Bệnh gout, bệnh lý kho chứa glycogen (bệnh von Gierke), chứng porphyria cấp từng lúc (acute intermittent porphyria).\n- Do dùng thuốc: Corticosteroid, estrogen, thuốc ngừa thai uống, thuốc lợi tiểu thiazid, thuốc chẹn bêta giao cảm.",
      "decrease": "Giảm triglycerid máu\nCác nguyên nhân chính thường gặp là:\nKhông có bêta lipoprotein máu bẩm sinh (Abeta-lipoproteinemia).\nCường cận giáp.\nHội chứng giảm hấp thu.\nSuy dinh dưỡng.\nBệnh phổi tắc nghẽn mạn tính.\nDo chế độ ăn: Tỷ lệ mỡ thấp.\nCường giáp."
    },
    "interferingFactors": "Có thai và lấy mẫu máu khi BN không nhịn ăn sẽ làm tăng nồng độ triglycerid máu (cần yêu cầu bệnh nhân nhịn ăn 12 giờ trước khi lấy máu XN và không được uống rượu trong vòng 24 giờ trước đó).\nTình trạng thay đổi nồng độ theo nhịp ngày đêm khiến nồng độ triglycerid trở nên thấp nhất vào buổi sáng và cao nhất quanh buổi trưa.\nCác thuốc có thể làm tăng nồng độ triglycerid máu là: Rượu, thuốc chẹn bêta - giao cảm, cholestyramin, corticosteroid, estrogen, thuốc ngừa thai uống, thuốc lợi tiểu thiazid, thuốc ức chế protease để điều trị HIV.\nCác thuốc có thể làm giảm nồng độ triglycerid máu là: Acid ascorbic, asparaginase, colestipol, clofibrat, dextrothyroxin, metformin, niacin.",
    "benefits": "Lợi ích của xét nghiệm định lượng triglycerid máu\n1. XN cơ bản để đánh giá bilan lipid máu. Định lượng nồng độ triglycerid máu luôn được làm cùng với XN định lượng choleterol máu để giúp xác định các biến đổi bệnh lý của lipoprotein máu.\n2. Nồng độ triglycerid luôn được coi như một thành phần của bảng phân tích lipid máu (bao gồm cholesterol toàn phần, lipoprotein tỷ trọng thấp [LDL Cholesterol], lipoprotein tỷ trọng cao [HDL Cholesterol] và triglycerid). Triglycerid cũng được sử dụng để tính toán nồng độ LDL Cholesterol: LDL Cholesterol (mmol/L) = Cholesterol toàn phần - HDL Cholesterol - (triglycerid/5).\n3. Nồng độ triglycerid máu là một thông số để đánh giá các nguy cơ bị bệnh động mạch vành. Nồng độ triglycerid cao sẽ kết hợp với nguy cơ bị bệnh lý tim mạch và đột quỵ cao hơn. Tình trạng tăng triglycerid máu thường được gặp đồng thời với tình trạng ĐTĐ và béo phì và các tình trạng này cũng là các yếu tố nguy cơ tim mạch đối với BN.\n4. Nồng độ triglycerid máu có liên quan với một số rối loạn:\n- Nồng độ < 1,7 mmol/L (150 mg/dL) không kết hợp với bất kỳ tình trạng bệnh lý nào.\n- Nồng độ 2,82 - 5.64 mmol/L (250 - 500 mg/dL) được kết hợp với bệnh mạch ngoại biên. Đây có thể là một chỉ dấu đối với BN thuộc dạng di truyền bị tăng lipoprotein máu cần được điều trị đặc hiệu.\n- Nồng độ > 5,64 mmol/L (500 mg/dL) được kết hợp với nguy cơ cao bị viêm tụy.\n- Nồng độ > 11,29 mmol/L (1.000 mg/dL) được kết hợp với tăng lipid máu. nhất là typ I hoặc typ V; Nguy cơ viêm tụy rõ.\n- Nồng độ > 56,45 mmol/L (5.000 mg/dL) được kết hợp với vỡ u vàng (xanthoma), xâm nhiễm lipid vùng ngoại biên đồng tử mắt (corneal arcus), các tĩnh mạch và động mạch võng mạc có biểu hiện lăng đọng lipid có mầu trắng như sữa (lipemia retinalis), gan và lách to.",
    "ebmGuidelines": "Các hướng dẫn thực hành lâm sàng dựa trên y học bằng chứng\nBáo cáo lần thứ ba của Chương trình Giáo dục Quốc gia (Mỹ) về cholesterol (NCEP) theo ý kiến đồng thuận của các chuyên gia để phát hiện, đánh giá và điều trị tình trạng cholesterol máu cao ở người lớn (ATP III) khuyến cáo:\nỞ tất cả các đối tượng người lớn từ 20 tuổi trở lên, cần tiến hành XN bilan mỡ máu lúc đói (cholesterol toàn phần, HDL cholesterol và triglycerid) × 5 năm một lần.\nChiến lược điều trị đối với BN bị tăng triglycerid phụ thuộc vào nguyên nhân gây tăng triglycerid máu và mức độ nặng của tình trạng này.\n- Đối với các đối tượng bị tăng triglycerid máu, đích điều trị cấp một là phải đạt được ngưỡng đích đối với nồng độ LDL cholesterol.\n- Khi triglycerid ở mức giới hạn cao (150-199 mg/dL), cần chú trọng tới khuyến cáo BN giảm cân và tăng cường hoạt động thể lực.\n- Đối với triglycerid ở mức cao (200-499 mg/dL), thông số cholesterol không phải là HDL (non - HDL cholesterol) trở thành đích điều trị cấp hai cần đạt. Bên cạnh việc khuyến cáo BN giảm cân và tăng cường hoạt động thể lực, có thể xem xét điều trị bằng thuốc cho các đối tượng có nguy cơ cao để đạt được đích điều trị đối với cholesterol không phải là HDL. Nếu một đối tượng thuộc nguy cơ cao có nồng độ triglycerid máu cao hay HDL cholesterol thấp, xem xét điều trị kết hợp giữa một fibrat hay acid nicotinic với một thuốc làm giảm LDL cholesterol.\n- Trong một số trường hợp hãn hữu, khi bệnh nhân có nồng độ triglycerid rất cao (≥ 500 mg/dL) đích điều trị khởi đầu là dự phòng viêm tụy cấp bằng cách làm giảm nhanh nồng độ triglycerid máu. Phác đồ điều trị này đòi hỏi một chế độ ăn chứa rất ít mỡ (< 15% khẩu phần cấp calo), giảm cân, tăng cường hoạt động thể lực và thường kết hợp với dùng thuốc làm giảm tryglycerid máu (fibrat hay acid nicotinic). Chỉ sau khi nồng độ triglycerid đã được hạ thấp xuống < 500 mg/dL, khi đó người thầy thuốc điều trị mới nên chuyển sự quan tâm điều trị sang mục tiêu làm giảm LDL cholesterol để làm giảm nguy cơ bị bệnh mạch vành.",
    "clinicalNote": ""
  },
  {
    "name": "Định lượng Cholesterol toàn phần [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "CHOLESTEROL\n(Cholestérolémie / Cholesterol, Total, High-density Lipoprotein [HDL], Low-density Lipoprotein [LDL], Serum)",
    "physiology": "Các lipid chính trong hệ tuần hoàn (cholesterol, triglycerid, phospholipid) có bản chất là các chất không tan trong máu. Để có thể lưu hành trong dòng tuần hoàn, các chất này phải được gắn với với các protein có thể tan trong nước gọi là apolipoprotein (A1, A2, B, C, E...)\nToàn bộ lipid + Apolipoprotein hình thành các nhóm lipoprotein.\nCó 4 loại lipoprotein chính với các thành phần lipid và protein được trình bày dưới đây:\n1. Các vi dưỡng chấp (chylomicron).\n2. Các VLDL (lipoprotein có tỷ trọng rất thấp [Very Low Density Lipoproteins]).\n3. LDL (lipoprotein có tỷ trọng thấp [Low Density Lipoproteins]).\n4. HDL (lipoprotein có tỷ trọng cao [High Density Lipoproteins]).\n\nCholesterol là một chất cần thiết cho hoạt động chức năng màng tế bào và như một tiền chất của acid mật, progesteron, vitamin D, estrogen, glucocorticoid và các corticosteroid điều hòa chuyển hóa khoáng chất (mineralocorticoid).\n\nCholesterol lưu hành trong tuần hoàn có xuất xứ từ 2 nguồn:\n1. Nguồn gốc ngoại sinh: Tuỳ theo mức kinh tế của từng vùng, thức ăn cung cấp khoảng 50 mg tới 3g cholesterol mỗi ngày, chủ yếu dưới dạng este hoá. Khi đi qua tá tràng, cholesterol được thủy phân nhờ lipase của tuỵ (cholesterol esterase) thành cholesterol + acid béo tự do rồi được các TB ruột hấp thu nhờ tác động của các acid mật. Trong các TB của ống tiêu hoá, cholesterol được nhập vào chylomicron và các VLDL ruột. Nhờ các lipoprotein, cholesterol được vận chuyển trong ống ngực rồi tới dòng tuần hoàn.\n2. Nguồn gốc nội sinh: Tổng hợp ở gan chủ yếu từ acetyl CoA. Gan cũng có khả năng chuyển hóa cholesterol ngoại sinh. Hầu hết lượng cholesterol trong cơ thể được tổng hợp ở gan.\n\nTrái lại, cholesterol được tích hợp vào HDL lipoprotein (thường được gọi HDL-cholesterol) sẽ được vận chuyển từ các mô ngoại biên tới gan để được dị hoá tại đó (vận chuyển ngược chiều cholesterol [reverse cholesterol transport]). Vì vậy, HDL cholesterol còn được gọi dưới tên \"cholesterol tốt\" (good cholesterol) với nồng độ trong máu tương quan nghịch với nguy cơ bị bệnh động mạch vành của bệnh nhân do nó có liên quan với quá trình dị hoá cholesterol.\n\nCó rất nhiều nghiên cứu tập trung tìm hiểu vai trò của cholesterol trong bệnh tim mạch. Một nồng độ cholesterol máu tăng cao, nhất là khi kết hợp với nồng độ HDL cholesterol thấp được cho thấy là đi kèm với tăng nguy cơ bị vữa xơ động mạch và bệnh tim do vữa xơ động mạch.\n\nĐánh giá về chuyển hóa lipid máu trong cơ thể (lipid profile) thường được chỉ định kết hợp đánh giá nồng độ cholesterol toàn phần, LDL cholesterol, HDL cholesterol và triglycerid máu.",
    "indication": "Để nghiên cứu các tình trạng rối loạn lipoprotein máu.\nĐể đánh giá nguy cơ hình thành mảng vữa xơ động mạch.\nĐể nghiên cứu chức năng của gan.\nĐể hỗ trợ cho chẩn đoán các tình trạng rối loạn chức năng tuyến giáp.",
    "specimenCollection": "Xét nghiệm được tiến hành trên huyết thanh.\nCần yêu cầu BN nhịn ăn 12h trước khi lấy máu làm XN. BN không được uống rượu trong vòng 24h trước khi lấy máu làm XN.",
    "testingMethods": "1. Phương pháp tốt nhất để định lượng cholesterol là phương pháp enzym so màu.\n2. Định lượng cholesterol trong HDL lipoprotein (HDL cholesterol):\nHoặc định lượng trực tiếp bằng phương pháp enzym so màu.\nHoặc định lượng bằng phương pháp đo độ đục sau khi làm kết tủa huyết thanh (nếu nồng độ triglycerit < 400 mg/dL).\nHoặc tính toán (khi nồng độ triglycerid ≤ 4,5 mmol/L), dựa vào công thức của Friedewald, sau khi xác định LDL.cholesterol: LDL cholesterol = Cholesterol - (triglycerit/2,2 + HDL Cholesterol)\n3. Định lượng cholesterol nhập trong LDL lipoprotein (LDL cholesterol):\nHoặc định lượng trực tiếp bằng phương pháp enzym so màu.\nHoặc định lượng sau khi tách trên cột thạch agar.\nHoặc tính toán từ công thức của Friedewald, sau khi xác định HDL cholesterol.",
    "ref": "1. Cholesterol toàn phần\n< 10 tuổi: 100 - 180 mg/dL hay 2,6 - 4,7 mmol/L.\n10 - 20 tuổi: 120 - 180 mg/dL hay 3,1 - 4,7 mmol/L.\n> 20 tuổi: 120 - 200 mg/dL hay 3,1 - 5,2 mmol/L.\n\n2. Giá trị bình thường mong muốn đạt được\n< 200 mg/dL hay (< 5,18 mmol/L).\n\n3. Tỷ lệ cholesterol/HDL cholesterol:\nNam: 3,50 - 4,50.\nNữ: 3,39 - 4,39.\n\n4. Giá trị bất thường:\nCao giới hạn: 200 - 239 mg/dL hay (5,18 - 6,19 mmol/L)\nCao: > 239 mg/dL hay (> 6,20 mmol/L).",
    "alert": "1. Nếu kết quả xét nghiệm nồng độ cholesterol máu > 5,2 mmol/L (> 200 mg/dL), cần tiến hành chương trình giáo dục bệnh tật cho BN:\n- Giảm cung cấp mỡ bão hòa và cholesterol trong chế độ ăn.\n- Tăng hoạt động thể lực.\n- Kiểm soát cân nặng.\n2. Tùy theo nồng độ của các lipoprotein khác và mức độ tăng cholesterol máu, có thể bắt đầu điều trị cho BN bằng các thuốc làm giảm cholesterol máu, phối hợp cùng với các biện pháp thay đổi lối sống của người bệnh.\n3. Bilan đánh giá rối loạn lipid máu thường không tiến hành đo trực tiếp nồng độ LDL mà chỉ ước tính nồng độ này bằng cách sử dụng phương trình Friedewald: LDL chol = chol toàn phần (mg/dL) - HDL chol - (0,20 x triglycerid)\nLưu ý:\nCông thức tính toán này chỉ có giá trị chính xác khi tiến hành xét nghiệm trên mẫu bệnh phẩm bệnh nhân nhịn ăn và nồng độ triglycerid máu phải < 4,5 mmol/L (< 400 mg/dL).\nCần tiến hành định lượng trực tiếp LDL cholesterol khi có tăng nồng độ triglycerid máu.",
    "pathologicalMeaning": {
      "increase": "Tăng nồng độ cholesterol\nCác nguyên nhân chính thường gặp là:\nKhẩu phần dinh dưỡng giàu cholesterol và acid béo bão hoà.\nBệnh vữa xơ động mạch (atherosclerosis).\nBệnh tim mạch.\nBệnh ĐTĐ không được kiểm soát tốt.\nBệnh có nhiều khối u vàng (Xanthomatosis).\nTăng cholesterol máu có tính gia đình (familial hypercholesterolemia).\nTăng lipoprotein máu có tính chất gia đình (typ IIa, IIb, III).\nTăng triglycerid máu.\nBệnh lý kho chứa glycogen (glycogen storage disease) (Vd: bệnh von Gierke và bệnh Werner).\nSuy giáp.\nSuy thận.\nHội chứng thận hư.\nTắc mật.\nXơ gan do mật (biliary cirrhosis), bệnh lý tế bào gan.\nBéo phì.\nRối loạn chức năng tụy.\nTiền sản giật.\nCó thai.\nNghiện thuốc lá.\nU tân sinh tuyến tiền liệt và tụy.\n\nTăng nồng độ HDL cholesterol\nCác nguyên nhân chính thường gặp là:\nTăng alphalipoprotein máu.\nHoạt động thê lực và tập thể dục đều đặn.\nLàm mất cân.\nBệnh gan mạn tính.\n\nTăng nồng độ LDL cholesterol\nCác nguyên nhân chính thường gặp là:\nTăng cholesterol máu có tính gia đình (familial hypercholesterolemia).\nHội chứng thận hư.\nBệnh lý gan.\nTắc mật.\nSuy thận mạn.\nTăng lipid máu typ II và III.\nĐái tháo đường.",
      "decrease": "Giảm nồng độ cholesterol\nCác nguyên nhân chính thường gặp là:\nHội chứng suy giảm miễn dịch mắc phải (AIDS).\nSuy dinh dưỡng.\nHội chứng giảm hấp thu (Vd: cắt đoạn ruột, viêm tuỵ mạn, bệnh Crohn).\nKhẩu phần dinh dưỡng nghèo cholesterol và acid béo bão hoà song lại giàu acid béo, không bão hoà.\nCường giáp.\nBệnh gan nặng gây suy tế bào gan.\nĐiều trị bằng các thuốc làm giảm lipid máu.\nKhông có beta lipoprotein máu mang tính chất gia đình.\nTăng alpha lipoprotein máu có tính gia đình (bệnh Tangier).\nThiếu máu mạn, thiếu máu ác tính Biermer.\nThiếu máu do tan máu.\nNhiễm trùng nặng và sepsis.\nTình trạng stress.\nBệnh lý tăng sinh tủy (myeloproliferative diseases).\n\nGiảm nồng độ HDL cholesterol\nCác nguyên nhân chính thường gặp là:\nBệnh ĐTĐ không được kiểm soát tốt.\nBệnh lý tế bào gan.\nSuy thận mạn, hội chứng thận hư, hội chứng urê máu cao.\nTắc mật.\nKhông có betaliprotetin máu (abetalipoproteinemia).\nTăng alpha lipoprotein máu có tính gia đình (bệnh Tangier).\nThiếu hụt Apo A-I và Apo C-III.\n\nGiảm nồng độ LDL cholesterol\nCác nguyên nhân chính thường gặp là:\nKhông có bêtalipoprotein máu (abetalipoproteinemia).\nCường giáp.\nBệnh Tangier.\nGiảm lipoprotein máu.\nThiếu máu mạn tính.\nBệnh lý tế bào gan.\nThiếu hụt lecithin cholesterol acyltransferase.\nThiếu hụt Apo C-II.\nTăng lipid máu typ I."
    },
    "interferingFactors": "Các biến đổi nồng độ cholesterol máu liên quan với từng cá thể có thể tới 10%.\nCác biến đôi theo mùa gây giao động trong nồng độ cholesterol máu (tăng hơn 8% vào mùa đông so với mùa hè).\nCác biến đổi theo tư thế có thể gây giao động trong nồng độ cholesterol máu (giảm hơn 5% khi ở tư thế ngồi lấy máu và giảm hơn 10 - 15% khi ở tư thế nằm so với khi lấy máu ở tư thế đứng).\nChỉ được tiến hành xét nghiệm trên mẫu bệnh phẩm bệnh nhân được yêu cầu nhịn ăn trước khi xét nghiệm.\nCác yếu tố khác có thể làm tăng nồng độ cholesterol máu bao gồm: hút thuốc lá, tuổi tác (nam > 45 tuổi; nữ > 55 tuổi), tăng HA (HA > 140/90 mmHg hoặc BN đang dùng thuốc điều trị tăng HA), tiền sử gia đình bị mắc bệnh tim sớm (premature heart disease), bệnh tim bị trước đó và đái tháo đường.\nCác thuốc có thể làm tăng nồng độ cholesterol máu là: Thuốc an thần kinh, thuốc chẹn bêta giao cảm, steroid gây tăng chuyển hóa (anabolic steroid), disulfiram, lanzoprazol, levodopa, lithium, thuốc ngừa thai uống, pergolid, phenobarbital, phenytoin, sulfonamid, testosteron, thuốc lợi tiểu nhóm thiazid, ticlopidin, venlafaxin, vitamin D và adrenalin.\nCác thuốc có thể làm giảm nồng độ cholesterol máu là: Thuốc ức chế men chuyển angiotensin, allopurinol, androgen, thuốc làm giảm cholesterol máu, erythromycin, estrogen, filgrastim, levothyroxin, metformin, phenytoin, prazosin, tomoxifen, terazosin.\nNồng độ HDL cholesterol sẽ tăng lên khi sử dụng vừa phải rượu ethanol, estrogen và insulin.\nNồng độ LDL cholesterol có thể tăng cao do sử dụng chế độ ăn chứa nhiều mỡ bão hòa và cholesterol, khi có thai hoặc dùng steroid.\nNồng độ HDL cholesterol sẽ giảm đi ở người bị bỏ đói, bị stress hoặc gần đây bị bệnh lý cấp tính, hút thuốc lá, béo phì và lười hoạt động thể lực, dùng một số loại thuốc (Vd: steroid, lợi tiểu thiazid, thuốc chẹn bêta giao cảm), tăng triglycerid máu (> 19,2 mmol/L [> 1700 mg/dL]) và tăng nồng độ globulin miễn dịch huyết thanh.\nNồng độ LDL cholesterol có thể bị giảm đi khi bệnh nhân có tình trạng stress cấp, bị bệnh lý cấp tính gần đây và dùng estrogen.",
    "benefits": "Lợi ích của xét nghiệm định lượng cholesterol\n1. Phát hiện và đánh giá các BN có nguy cơ bị vữa xơ động mạch, giúp quyết định các lựa chọn điều trị và để theo dõi hiệu quả của điều trị.\n2. Đánh giá mức độ nặng của một bệnh lý gan.\n3. Điều chỉnh hội chứng giảm hấp thu.\n4. Chẩn đoán, phân loại và theo dõi BN tăng lipid máu: Gia tăng mạnh nồng độ cholesterol máu > 8,25 mmol/L (3,2 g/L) khẳng định có tình trạng tăng lipoprotein máu và cho phép phân loại khi phối hợp với định lượng nồng độ triglyerid máu. Khi nồng độ triglycerid bình thường, có nghĩa là BN bị tăng cholesterol máu đơn thuần do tăng gánh LDL - cholesterol; Khi nồng độ triglycerid tăng vừa, có nghĩa là BN bị tăng lipid máu hỗn hợp; Khi nồng độ triglycerid tăng gấp 2-3 lần hơn cholesterol, có nghĩa là BN bị tăng triglycerid máu nội sinh do tăng lipoprotein tỷ trọng rất thấp (VLDL).",
    "ebmGuidelines": "Các hướng dẫn thực hành lâm sàng dựa trên y học bằng chứng\nTheo báo cáo lần thứ III của Chương trình Giáo dục cholesterol Quốc gia (National Cholesterol Educational Program [NCEP] của các chuyên gia Mỹ về phát hiện, đánh giá và điều trị tình trạng tăng cholesterol máu ở người lớn.\n- Đối với tất cả người ≥ 20 tuổi, cần tiến hành làm XN các thành phần lipoprotein máu lúc đói (bao gồm cholesterol toàn phần, LDL cholesterol, HDL cholesterol và triglycerid) định kỳ 5 năm/lần.\n- Nếu tiến hành làm xét nghiệm các thành phần lipoprotein thì chỉ sử dụng các giá trị của cholesterol toàn phần và HDL cholesterol để đánh giá. Trong trường hợp này, nếu nồng độ cholesterol toàn phần ≥ 200 mg/dL (≥ 5,2 mmol/L) hay HDL cholesterol < 40 mg/dL (< 1 mmol/L) cần tiến hành theo dõi định kỳ các thành phần lipoprotein máu để xử trí thích hợp.\n(Ngoài ra tài liệu còn cung cấp các Bảng phân loại chi tiết nồng độ LDL cholesterol, HDL cholesterol và điểm cut-off theo khuyến cáo của ATP III).",
    "clinicalNote": ""
  },
  {
    "name": "Định lượng HDL-C [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "CHOLESTEROL\n(Cholestérolémie / Cholesterol, Total, High-density Lipoprotein [HDL], Low-density Lipoprotein [LDL], Serum)",
    "physiology": "Các lipid chính trong hệ tuần hoàn (cholesterol, triglycerid, phospholipid) có bản chất là các chất không tan trong máu. Để có thể lưu hành trong dòng tuần hoàn, các chất này phải được gắn với với các protein có thể tan trong nước gọi là apolipoprotein (A1, A2, B, C, E...)\nToàn bộ lipid + Apolipoprotein hình thành các nhóm lipoprotein.\nCó 4 loại lipoprotein chính với các thành phần lipid và protein được trình bày dưới đây:\n1. Các vi dưỡng chấp (chylomicron).\n2. Các VLDL (lipoprotein có tỷ trọng rất thấp [Very Low Density Lipoproteins]).\n3. LDL (lipoprotein có tỷ trọng thấp [Low Density Lipoproteins]).\n4. HDL (lipoprotein có tỷ trọng cao [High Density Lipoproteins]).\n\nCholesterol là một chất cần thiết cho hoạt động chức năng màng tế bào và như một tiền chất của acid mật, progesteron, vitamin D, estrogen, glucocorticoid và các corticosteroid điều hòa chuyển hóa khoáng chất (mineralocorticoid).\n\nCholesterol lưu hành trong tuần hoàn có xuất xứ từ 2 nguồn:\n1. Nguồn gốc ngoại sinh: Tuỳ theo mức kinh tế của từng vùng, thức ăn cung cấp khoảng 50 mg tới 3g cholesterol mỗi ngày, chủ yếu dưới dạng este hoá. Khi đi qua tá tràng, cholesterol được thủy phân nhờ lipase của tuỵ (cholesterol esterase) thành cholesterol + acid béo tự do rồi được các TB ruột hấp thu nhờ tác động của các acid mật. Trong các TB của ống tiêu hoá, cholesterol được nhập vào chylomicron và các VLDL ruột. Nhờ các lipoprotein, cholesterol được vận chuyển trong ống ngực rồi tới dòng tuần hoàn.\n2. Nguồn gốc nội sinh: Tổng hợp ở gan chủ yếu từ acetyl CoA. Gan cũng có khả năng chuyển hóa cholesterol ngoại sinh. Hầu hết lượng cholesterol trong cơ thể được tổng hợp ở gan.\n\nTrái lại, cholesterol được tích hợp vào HDL lipoprotein (thường được gọi HDL-cholesterol) sẽ được vận chuyển từ các mô ngoại biên tới gan để được dị hoá tại đó (vận chuyển ngược chiều cholesterol [reverse cholesterol transport]). Vì vậy, HDL cholesterol còn được gọi dưới tên \"cholesterol tốt\" (good cholesterol) với nồng độ trong máu tương quan nghịch với nguy cơ bị bệnh động mạch vành của bệnh nhân do nó có liên quan với quá trình dị hoá cholesterol.\n\nCó rất nhiều nghiên cứu tập trung tìm hiểu vai trò của cholesterol trong bệnh tim mạch. Một nồng độ cholesterol máu tăng cao, nhất là khi kết hợp với nồng độ HDL cholesterol thấp được cho thấy là đi kèm với tăng nguy cơ bị vữa xơ động mạch và bệnh tim do vữa xơ động mạch.\n\nĐánh giá về chuyển hóa lipid máu trong cơ thể (lipid profile) thường được chỉ định kết hợp đánh giá nồng độ cholesterol toàn phần, LDL cholesterol, HDL cholesterol và triglycerid máu.",
    "indication": "Để nghiên cứu các tình trạng rối loạn lipoprotein máu.\nĐể đánh giá nguy cơ hình thành mảng vữa xơ động mạch.\nĐể nghiên cứu chức năng của gan.\nĐể hỗ trợ cho chẩn đoán các tình trạng rối loạn chức năng tuyến giáp.",
    "specimenCollection": "Xét nghiệm được tiến hành trên huyết thanh.\nCần yêu cầu BN nhịn ăn 12h trước khi lấy máu làm XN. BN không được uống rượu trong vòng 24h trước khi lấy máu làm XN.",
    "testingMethods": "1. Phương pháp tốt nhất để định lượng cholesterol là phương pháp enzym so màu.\n2. Định lượng cholesterol trong HDL lipoprotein (HDL cholesterol):\nHoặc định lượng trực tiếp bằng phương pháp enzym so màu.\nHoặc định lượng bằng phương pháp đo độ đục sau khi làm kết tủa huyết thanh (nếu nồng độ triglycerit < 400 mg/dL).\nHoặc tính toán (khi nồng độ triglycerid ≤ 4,5 mmol/L), dựa vào công thức của Friedewald, sau khi xác định LDL.cholesterol: LDL cholesterol = Cholesterol - (triglycerit/2,2 + HDL Cholesterol)\n3. Định lượng cholesterol nhập trong LDL lipoprotein (LDL cholesterol):\nHoặc định lượng trực tiếp bằng phương pháp enzym so màu.\nHoặc định lượng sau khi tách trên cột thạch agar.\nHoặc tính toán từ công thức của Friedewald, sau khi xác định HDL cholesterol.",
    "ref": "1. HDL cholesterol\nNam: 35 - 54 mg/dL hay 0,9 - 1,4 mmol/L.\nNữ: 45 - 64 mg/dL hay 1,1 - 1,7 mmol/L.\n\n2. Tỷ lệ cholesterol/HDL cholesterol:\nNam: 3,50 - 4,50.\nNữ: 3,39 - 4,39.",
    "alert": "1. Nếu kết quả xét nghiệm nồng độ cholesterol máu > 5,2 mmol/L (> 200 mg/dL), cần tiến hành chương trình giáo dục bệnh tật cho BN:\n- Giảm cung cấp mỡ bão hòa và cholesterol trong chế độ ăn.\n- Tăng hoạt động thể lực.\n- Kiểm soát cân nặng.\n2. Tùy theo nồng độ của các lipoprotein khác và mức độ tăng cholesterol máu, có thể bắt đầu điều trị cho BN bằng các thuốc làm giảm cholesterol máu, phối hợp cùng với các biện pháp thay đổi lối sống của người bệnh.\n3. Bilan đánh giá rối loạn lipid máu thường không tiến hành đo trực tiếp nồng độ LDL mà chỉ ước tính nồng độ này bằng cách sử dụng phương trình Friedewald: LDL chol = chol toàn phần (mg/dL) - HDL chol - (0,20 x triglycerid)\nLưu ý:\nCông thức tính toán này chỉ có giá trị chính xác khi tiến hành xét nghiệm trên mẫu bệnh phẩm bệnh nhân nhịn ăn và nồng độ triglycerid máu phải < 4,5 mmol/L (< 400 mg/dL).\nCần tiến hành định lượng trực tiếp LDL cholesterol khi có tăng nồng độ triglycerid máu.",
    "pathologicalMeaning": {
      "increase": "Tăng nồng độ cholesterol\nCác nguyên nhân chính thường gặp là:\nKhẩu phần dinh dưỡng giàu cholesterol và acid béo bão hoà.\nBệnh vữa xơ động mạch (atherosclerosis).\nBệnh tim mạch.\nBệnh ĐTĐ không được kiểm soát tốt.\nBệnh có nhiều khối u vàng (Xanthomatosis).\nTăng cholesterol máu có tính gia đình (familial hypercholesterolemia).\nTăng lipoprotein máu có tính chất gia đình (typ IIa, IIb, III).\nTăng triglycerid máu.\nBệnh lý kho chứa glycogen (glycogen storage disease) (Vd: bệnh von Gierke và bệnh Werner).\nSuy giáp.\nSuy thận.\nHội chứng thận hư.\nTắc mật.\nXơ gan do mật (biliary cirrhosis), bệnh lý tế bào gan.\nBéo phì.\nRối loạn chức năng tụy.\nTiền sản giật.\nCó thai.\nNghiện thuốc lá.\nU tân sinh tuyến tiền liệt và tụy.\n\nTăng nồng độ HDL cholesterol\nCác nguyên nhân chính thường gặp là:\nTăng alphalipoprotein máu.\nHoạt động thê lực và tập thể dục đều đặn.\nLàm mất cân.\nBệnh gan mạn tính.\n\nTăng nồng độ LDL cholesterol\nCác nguyên nhân chính thường gặp là:\nTăng cholesterol máu có tính gia đình (familial hypercholesterolemia).\nHội chứng thận hư.\nBệnh lý gan.\nTắc mật.\nSuy thận mạn.\nTăng lipid máu typ II và III.\nĐái tháo đường.",
      "decrease": "Giảm nồng độ cholesterol\nCác nguyên nhân chính thường gặp là:\nHội chứng suy giảm miễn dịch mắc phải (AIDS).\nSuy dinh dưỡng.\nHội chứng giảm hấp thu (Vd: cắt đoạn ruột, viêm tuỵ mạn, bệnh Crohn).\nKhẩu phần dinh dưỡng nghèo cholesterol và acid béo bão hoà song lại giàu acid béo, không bão hoà.\nCường giáp.\nBệnh gan nặng gây suy tế bào gan.\nĐiều trị bằng các thuốc làm giảm lipid máu.\nKhông có beta lipoprotein máu mang tính chất gia đình.\nTăng alpha lipoprotein máu có tính gia đình (bệnh Tangier).\nThiếu máu mạn, thiếu máu ác tính Biermer.\nThiếu máu do tan máu.\nNhiễm trùng nặng và sepsis.\nTình trạng stress.\nBệnh lý tăng sinh tủy (myeloproliferative diseases).\n\nGiảm nồng độ HDL cholesterol\nCác nguyên nhân chính thường gặp là:\nBệnh ĐTĐ không được kiểm soát tốt.\nBệnh lý tế bào gan.\nSuy thận mạn, hội chứng thận hư, hội chứng urê máu cao.\nTắc mật.\nKhông có betaliprotetin máu (abetalipoproteinemia).\nTăng alpha lipoprotein máu có tính gia đình (bệnh Tangier).\nThiếu hụt Apo A-I và Apo C-III.\n\nGiảm nồng độ LDL cholesterol\nCác nguyên nhân chính thường gặp là:\nKhông có bêtalipoprotein máu (abetalipoproteinemia).\nCường giáp.\nBệnh Tangier.\nGiảm lipoprotein máu.\nThiếu máu mạn tính.\nBệnh lý tế bào gan.\nThiếu hụt lecithin cholesterol acyltransferase.\nThiếu hụt Apo C-II.\nTăng lipid máu typ I."
    },
    "interferingFactors": "Các biến đổi nồng độ cholesterol máu liên quan với từng cá thể có thể tới 10%.\nCác biến đôi theo mùa gây giao động trong nồng độ cholesterol máu (tăng hơn 8% vào mùa đông so với mùa hè).\nCác biến đổi theo tư thế có thể gây giao động trong nồng độ cholesterol máu (giảm hơn 5% khi ở tư thế ngồi lấy máu và giảm hơn 10 - 15% khi ở tư thế nằm so với khi lấy máu ở tư thế đứng).\nChỉ được tiến hành xét nghiệm trên mẫu bệnh phẩm bệnh nhân được yêu cầu nhịn ăn trước khi xét nghiệm.\nCác yếu tố khác có thể làm tăng nồng độ cholesterol máu bao gồm: hút thuốc lá, tuổi tác (nam > 45 tuổi; nữ > 55 tuổi), tăng HA (HA > 140/90 mmHg hoặc BN đang dùng thuốc điều trị tăng HA), tiền sử gia đình bị mắc bệnh tim sớm (premature heart disease), bệnh tim bị trước đó và đái tháo đường.\nCác thuốc có thể làm tăng nồng độ cholesterol máu là: Thuốc an thần kinh, thuốc chẹn bêta giao cảm, steroid gây tăng chuyển hóa (anabolic steroid), disulfiram, lanzoprazol, levodopa, lithium, thuốc ngừa thai uống, pergolid, phenobarbital, phenytoin, sulfonamid, testosteron, thuốc lợi tiểu nhóm thiazid, ticlopidin, venlafaxin, vitamin D và adrenalin.\nCác thuốc có thể làm giảm nồng độ cholesterol máu là: Thuốc ức chế men chuyển angiotensin, allopurinol, androgen, thuốc làm giảm cholesterol máu, erythromycin, estrogen, filgrastim, levothyroxin, metformin, phenytoin, prazosin, tomoxifen, terazosin.\nNồng độ HDL cholesterol sẽ tăng lên khi sử dụng vừa phải rượu ethanol, estrogen và insulin.\nNồng độ LDL cholesterol có thể tăng cao do sử dụng chế độ ăn chứa nhiều mỡ bão hòa và cholesterol, khi có thai hoặc dùng steroid.\nNồng độ HDL cholesterol sẽ giảm đi ở người bị bỏ đói, bị stress hoặc gần đây bị bệnh lý cấp tính, hút thuốc lá, béo phì và lười hoạt động thể lực, dùng một số loại thuốc (Vd: steroid, lợi tiểu thiazid, thuốc chẹn bêta giao cảm), tăng triglycerid máu (> 19,2 mmol/L [> 1700 mg/dL]) và tăng nồng độ globulin miễn dịch huyết thanh.\nNồng độ LDL cholesterol có thể bị giảm đi khi bệnh nhân có tình trạng stress cấp, bị bệnh lý cấp tính gần đây và dùng estrogen.",
    "benefits": "Lợi ích của xét nghiệm định lượng cholesterol\n1. Phát hiện và đánh giá các BN có nguy cơ bị vữa xơ động mạch, giúp quyết định các lựa chọn điều trị và để theo dõi hiệu quả của điều trị.\n2. Đánh giá mức độ nặng của một bệnh lý gan.\n3. Điều chỉnh hội chứng giảm hấp thu.\n4. Chẩn đoán, phân loại và theo dõi BN tăng lipid máu: Gia tăng mạnh nồng độ cholesterol máu > 8,25 mmol/L (3,2 g/L) khẳng định có tình trạng tăng lipoprotein máu và cho phép phân loại khi phối hợp với định lượng nồng độ triglyerid máu. Khi nồng độ triglycerid bình thường, có nghĩa là BN bị tăng cholesterol máu đơn thuần do tăng gánh LDL - cholesterol; Khi nồng độ triglycerid tăng vừa, có nghĩa là BN bị tăng lipid máu hỗn hợp; Khi nồng độ triglycerid tăng gấp 2-3 lần hơn cholesterol, có nghĩa là BN bị tăng triglycerid máu nội sinh do tăng lipoprotein tỷ trọng rất thấp (VLDL).",
    "ebmGuidelines": "Các hướng dẫn thực hành lâm sàng dựa trên y học bằng chứng\nTheo báo cáo lần thứ III của Chương trình Giáo dục cholesterol Quốc gia (National Cholesterol Educational Program [NCEP] của các chuyên gia Mỹ về phát hiện, đánh giá và điều trị tình trạng tăng cholesterol máu ở người lớn.\n- Đối với tất cả người ≥ 20 tuổi, cần tiến hành làm XN các thành phần lipoprotein máu lúc đói (bao gồm cholesterol toàn phần, LDL cholesterol, HDL cholesterol và triglycerid) định kỳ 5 năm/lần.\n- Nếu tiến hành làm xét nghiệm các thành phần lipoprotein thì chỉ sử dụng các giá trị của cholesterol toàn phần và HDL cholesterol để đánh giá. Trong trường hợp này, nếu nồng độ cholesterol toàn phần ≥ 200 mg/dL (≥ 5,2 mmol/L) hay HDL cholesterol < 40 mg/dL (< 1 mmol/L) cần tiến hành theo dõi định kỳ các thành phần lipoprotein máu để xử trí thích hợp.\n(Ngoài ra tài liệu còn cung cấp các Bảng phân loại chi tiết nồng độ LDL cholesterol, HDL cholesterol và điểm cut-off theo khuyến cáo của ATP III).",
    "clinicalNote": "Nội dung xét nghiệm này được trình bày gộp chung trong bài CHOLESTEROL của tài liệu gốc (bao gồm Cholesterol toàn phần, HDL-C và LDL-C). Dưới đây là toàn bộ nội dung của phần này để đảm bảo không lược bỏ thông tin."
  },
    {
    "name": "Định lượng LDL-C [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "CHOLESTEROL\n(Cholestérolémie / Cholesterol, Total, High-density Lipoprotein [HDL], Low-density Lipoprotein [LDL], Serum)",
    "physiology": "Các lipid chính trong hệ tuần hoàn (cholesterol, triglycerid, phospholipid) có bản chất là các chất không tan trong máu. Để có thể lưu hành trong dòng tuần hoàn, các chất này phải được gắn với với các protein có thể tan trong nước gọi là apolipoprotein (A1, A2, B, C, E...)\nToàn bộ lipid + Apolipoprotein hình thành các nhóm lipoprotein.\nCó 4 loại lipoprotein chính với các thành phần lipid và protein được trình bày dưới đây:\n1. Các vi dưỡng chấp (chylomicron).\n2. Các VLDL (lipoprotein có tỷ trọng rất thấp [Very Low Density Lipoproteins]).\n3. LDL (lipoprotein có tỷ trọng thấp [Low Density Lipoproteins]).\n4. HDL (lipoprotein có tỷ trọng cao [High Density Lipoproteins]).\n\nCholesterol là một chất cần thiết cho hoạt động chức năng màng tế bào và như một tiền chất của acid mật, progesteron, vitamin D, estrogen, glucocorticoid và các corticosteroid điều hòa chuyển hóa khoáng chất (mineralocorticoid).\n\nCholesterol lưu hành trong tuần hoàn có xuất xứ từ 2 nguồn:\n1. Nguồn gốc ngoại sinh: Tuỳ theo mức kinh tế của từng vùng, thức ăn cung cấp khoảng 50 mg tới 3g cholesterol mỗi ngày, chủ yếu dưới dạng este hoá. Khi đi qua tá tràng, cholesterol được thủy phân nhờ lipase của tuỵ (cholesterol esterase) thành cholesterol + acid béo tự do rồi được các TB ruột hấp thu nhờ tác động của các acid mật. Trong các TB của ống tiêu hoá, cholesterol được nhập vào chylomicron và các VLDL ruột. Nhờ các lipoprotein, cholesterol được vận chuyển trong ống ngực rồi tới dòng tuần hoàn.\n2. Nguồn gốc nội sinh: Tổng hợp ở gan chủ yếu từ acetyl CoA. Gan cũng có khả năng chuyển hóa cholesterol ngoại sinh. Hầu hết lượng cholesterol trong cơ thể được tổng hợp ở gan.\n\nTrái lại, cholesterol được tích hợp vào HDL lipoprotein (thường được gọi HDL-cholesterol) sẽ được vận chuyển từ các mô ngoại biên tới gan để được dị hoá tại đó (vận chuyển ngược chiều cholesterol [reverse cholesterol transport]). Vì vậy, HDL cholesterol còn được gọi dưới tên \"cholesterol tốt\" (good cholesterol) với nồng độ trong máu tương quan nghịch với nguy cơ bị bệnh động mạch vành của bệnh nhân do nó có liên quan với quá trình dị hoá cholesterol.\n\nCó rất nhiều nghiên cứu tập trung tìm hiểu vai trò của cholesterol trong bệnh tim mạch. Một nồng độ cholesterol máu tăng cao, nhất là khi kết hợp với nồng độ HDL cholesterol thấp được cho thấy là đi kèm với tăng nguy cơ bị vữa xơ động mạch và bệnh tim do vữa xơ động mạch.\n\nĐánh giá về chuyển hóa lipid máu trong cơ thể (lipid profile) thường được chỉ định kết hợp đánh giá nồng độ cholesterol toàn phần, LDL cholesterol, HDL cholesterol và triglycerid máu.",
    "indication": "Để nghiên cứu các tình trạng rối loạn lipoprotein máu.\nĐể đánh giá nguy cơ hình thành mảng vữa xơ động mạch.\nĐể nghiên cứu chức năng của gan.\nĐể hỗ trợ cho chẩn đoán các tình trạng rối loạn chức năng tuyến giáp.",
    "specimenCollection": "Xét nghiệm được tiến hành trên huyết thanh.\nCần yêu cầu BN nhịn ăn 12h trước khi lấy máu làm XN. BN không được uống rượu trong vòng 24h trước khi lấy máu làm XN.",
    "testingMethods": "1. Phương pháp tốt nhất để định lượng cholesterol là phương pháp enzym so màu.\n2. Định lượng cholesterol trong HDL lipoprotein (HDL cholesterol):\nHoặc định lượng trực tiếp bằng phương pháp enzym so màu.\nHoặc định lượng bằng phương pháp đo độ đục sau khi làm kết tủa huyết thanh (nếu nồng độ triglycerit < 400 mg/dL).\nHoặc tính toán (khi nồng độ triglycerid ≤ 4,5 mmol/L), dựa vào công thức của Friedewald, sau khi xác định LDL.cholesterol: LDL cholesterol = Cholesterol - (triglycerit/2,2 + HDL Cholesterol)\n3. Định lượng cholesterol nhập trong LDL lipoprotein (LDL cholesterol):\nHoặc định lượng trực tiếp bằng phương pháp enzym so màu.\nHoặc định lượng sau khi tách trên cột thạch agar.\nHoặc tính toán từ công thức của Friedewald, sau khi xác định HDL cholesterol.",
    "ref": "80 - 150 mg/dL.\n hay 2,1 - 3,9 mmol/L.",
    "alert": "1. Nếu kết quả xét nghiệm nồng độ cholesterol máu > 5,2 mmol/L (> 200 mg/dL), cần tiến hành chương trình giáo dục bệnh tật cho BN:\n- Giảm cung cấp mỡ bão hòa và cholesterol trong chế độ ăn.\n- Tăng hoạt động thể lực.\n- Kiểm soát cân nặng.\n2. Tùy theo nồng độ của các lipoprotein khác và mức độ tăng cholesterol máu, có thể bắt đầu điều trị cho BN bằng các thuốc làm giảm cholesterol máu, phối hợp cùng với các biện pháp thay đổi lối sống của người bệnh.\n3. Bilan đánh giá rối loạn lipid máu thường không tiến hành đo trực tiếp nồng độ LDL mà chỉ ước tính nồng độ này bằng cách sử dụng phương trình Friedewald: LDL chol = chol toàn phần (mg/dL) - HDL chol - (0,20 x triglycerid)\nLưu ý:\nCông thức tính toán này chỉ có giá trị chính xác khi tiến hành xét nghiệm trên mẫu bệnh phẩm bệnh nhân nhịn ăn và nồng độ triglycerid máu phải < 4,5 mmol/L (< 400 mg/dL).\nCần tiến hành định lượng trực tiếp LDL cholesterol khi có tăng nồng độ triglycerid máu.",
    "pathologicalMeaning": {
      "increase": "Tăng nồng độ cholesterol\nCác nguyên nhân chính thường gặp là:\nKhẩu phần dinh dưỡng giàu cholesterol và acid béo bão hoà.\nBệnh vữa xơ động mạch (atherosclerosis).\nBệnh tim mạch.\nBệnh ĐTĐ không được kiểm soát tốt.\nBệnh có nhiều khối u vàng (Xanthomatosis).\nTăng cholesterol máu có tính gia đình (familial hypercholesterolemia).\nTăng lipoprotein máu có tính chất gia đình (typ IIa, IIb, III).\nTăng triglycerid máu.\nBệnh lý kho chứa glycogen (glycogen storage disease) (Vd: bệnh von Gierke và bệnh Werner).\nSuy giáp.\nSuy thận.\nHội chứng thận hư.\nTắc mật.\nXơ gan do mật (biliary cirrhosis), bệnh lý tế bào gan.\nBéo phì.\nRối loạn chức năng tụy.\nTiền sản giật.\nCó thai.\nNghiện thuốc lá.\nU tân sinh tuyến tiền liệt và tụy.\n\nTăng nồng độ HDL cholesterol\nCác nguyên nhân chính thường gặp là:\nTăng alphalipoprotein máu.\nHoạt động thê lực và tập thể dục đều đặn.\nLàm mất cân.\nBệnh gan mạn tính.\n\nTăng nồng độ LDL cholesterol\nCác nguyên nhân chính thường gặp là:\nTăng cholesterol máu có tính gia đình (familial hypercholesterolemia).\nHội chứng thận hư.\nBệnh lý gan.\nTắc mật.\nSuy thận mạn.\nTăng lipid máu typ II và III.\nĐái tháo đường.",
      "decrease": "Giảm nồng độ cholesterol\nCác nguyên nhân chính thường gặp là:\nHội chứng suy giảm miễn dịch mắc phải (AIDS).\nSuy dinh dưỡng.\nHội chứng giảm hấp thu (Vd: cắt đoạn ruột, viêm tuỵ mạn, bệnh Crohn).\nKhẩu phần dinh dưỡng nghèo cholesterol và acid béo bão hoà song lại giàu acid béo, không bão hoà.\nCường giáp.\nBệnh gan nặng gây suy tế bào gan.\nĐiều trị bằng các thuốc làm giảm lipid máu.\nKhông có beta lipoprotein máu mang tính chất gia đình.\nTăng alpha lipoprotein máu có tính gia đình (bệnh Tangier).\nThiếu máu mạn, thiếu máu ác tính Biermer.\nThiếu máu do tan máu.\nNhiễm trùng nặng và sepsis.\nTình trạng stress.\nBệnh lý tăng sinh tủy (myeloproliferative diseases).\n\nGiảm nồng độ HDL cholesterol\nCác nguyên nhân chính thường gặp là:\nBệnh ĐTĐ không được kiểm soát tốt.\nBệnh lý tế bào gan.\nSuy thận mạn, hội chứng thận hư, hội chứng urê máu cao.\nTắc mật.\nKhông có betaliprotetin máu (abetalipoproteinemia).\nTăng alpha lipoprotein máu có tính gia đình (bệnh Tangier).\nThiếu hụt Apo A-I và Apo C-III.\n\nGiảm nồng độ LDL cholesterol\nCác nguyên nhân chính thường gặp là:\nKhông có bêtalipoprotein máu (abetalipoproteinemia).\nCường giáp.\nBệnh Tangier.\nGiảm lipoprotein máu.\nThiếu máu mạn tính.\nBệnh lý tế bào gan.\nThiếu hụt lecithin cholesterol acyltransferase.\nThiếu hụt Apo C-II.\nTăng lipid máu typ I."
    },
    "interferingFactors": "Các biến đổi nồng độ cholesterol máu liên quan với từng cá thể có thể tới 10%.\nCác biến đôi theo mùa gây giao động trong nồng độ cholesterol máu (tăng hơn 8% vào mùa đông so với mùa hè).\nCác biến đổi theo tư thế có thể gây giao động trong nồng độ cholesterol máu (giảm hơn 5% khi ở tư thế ngồi lấy máu và giảm hơn 10 - 15% khi ở tư thế nằm so với khi lấy máu ở tư thế đứng).\nChỉ được tiến hành xét nghiệm trên mẫu bệnh phẩm bệnh nhân được yêu cầu nhịn ăn trước khi xét nghiệm.\nCác yếu tố khác có thể làm tăng nồng độ cholesterol máu bao gồm: hút thuốc lá, tuổi tác (nam > 45 tuổi; nữ > 55 tuổi), tăng HA (HA > 140/90 mmHg hoặc BN đang dùng thuốc điều trị tăng HA), tiền sử gia đình bị mắc bệnh tim sớm (premature heart disease), bệnh tim bị trước đó và đái tháo đường.\nCác thuốc có thể làm tăng nồng độ cholesterol máu là: Thuốc an thần kinh, thuốc chẹn bêta giao cảm, steroid gây tăng chuyển hóa (anabolic steroid), disulfiram, lanzoprazol, levodopa, lithium, thuốc ngừa thai uống, pergolid, phenobarbital, phenytoin, sulfonamid, testosteron, thuốc lợi tiểu nhóm thiazid, ticlopidin, venlafaxin, vitamin D và adrenalin.\nCác thuốc có thể làm giảm nồng độ cholesterol máu là: Thuốc ức chế men chuyển angiotensin, allopurinol, androgen, thuốc làm giảm cholesterol máu, erythromycin, estrogen, filgrastim, levothyroxin, metformin, phenytoin, prazosin, tomoxifen, terazosin.\nNồng độ HDL cholesterol sẽ tăng lên khi sử dụng vừa phải rượu ethanol, estrogen và insulin.\nNồng độ LDL cholesterol có thể tăng cao do sử dụng chế độ ăn chứa nhiều mỡ bão hòa và cholesterol, khi có thai hoặc dùng steroid.\nNồng độ HDL cholesterol sẽ giảm đi ở người bị bỏ đói, bị stress hoặc gần đây bị bệnh lý cấp tính, hút thuốc lá, béo phì và lười hoạt động thể lực, dùng một số loại thuốc (Vd: steroid, lợi tiểu thiazid, thuốc chẹn bêta giao cảm), tăng triglycerid máu (> 19,2 mmol/L [> 1700 mg/dL]) và tăng nồng độ globulin miễn dịch huyết thanh.\nNồng độ LDL cholesterol có thể bị giảm đi khi bệnh nhân có tình trạng stress cấp, bị bệnh lý cấp tính gần đây và dùng estrogen.",
    "benefits": "Lợi ích của xét nghiệm định lượng cholesterol\n1. Phát hiện và đánh giá các BN có nguy cơ bị vữa xơ động mạch, giúp quyết định các lựa chọn điều trị và để theo dõi hiệu quả của điều trị.\n2. Đánh giá mức độ nặng của một bệnh lý gan.\n3. Điều chỉnh hội chứng giảm hấp thu.\n4. Chẩn đoán, phân loại và theo dõi BN tăng lipid máu: Gia tăng mạnh nồng độ cholesterol máu > 8,25 mmol/L (3,2 g/L) khẳng định có tình trạng tăng lipoprotein máu và cho phép phân loại khi phối hợp với định lượng nồng độ triglyerid máu. Khi nồng độ triglycerid bình thường, có nghĩa là BN bị tăng cholesterol máu đơn thuần do tăng gánh LDL - cholesterol; Khi nồng độ triglycerid tăng vừa, có nghĩa là BN bị tăng lipid máu hỗn hợp; Khi nồng độ triglycerid tăng gấp 2-3 lần hơn cholesterol, có nghĩa là BN bị tăng triglycerid máu nội sinh do tăng lipoprotein tỷ trọng rất thấp (VLDL).",
    "ebmGuidelines": "Các hướng dẫn thực hành lâm sàng dựa trên y học bằng chứng\nTheo báo cáo lần thứ III của Chương trình Giáo dục cholesterol Quốc gia (National Cholesterol Educational Program [NCEP] của các chuyên gia Mỹ về phát hiện, đánh giá và điều trị tình trạng tăng cholesterol máu ở người lớn.\n- Đối với tất cả người ≥ 20 tuổi, cần tiến hành làm XN các thành phần lipoprotein máu lúc đói (bao gồm cholesterol toàn phần, LDL cholesterol, HDL cholesterol và triglycerid) định kỳ 5 năm/lần.\n- Nếu tiến hành làm xét nghiệm các thành phần lipoprotein thì chỉ sử dụng các giá trị của cholesterol toàn phần và HDL cholesterol để đánh giá. Trong trường hợp này, nếu nồng độ cholesterol toàn phần ≥ 200 mg/dL (≥ 5,2 mmol/L) hay HDL cholesterol < 40 mg/dL (< 1 mmol/L) cần tiến hành theo dõi định kỳ các thành phần lipoprotein máu để xử trí thích hợp.\n(Ngoài ra tài liệu còn cung cấp các Bảng phân loại chi tiết nồng độ LDL cholesterol, HDL cholesterol và điểm cut-off theo khuyến cáo của ATP III).",
    "clinicalNote": "Nội dung xét nghiệm này được trình bày gộp chung trong bài CHOLESTEROL của tài liệu gốc (bao gồm Cholesterol toàn phần, HDL-C và LDL-C). Nội dung được giữ nguyên vẹn để đảm bảo không lược bỏ thông tin."
  },
  {
    "name": "Định lượng Acid Uric [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "ACID URIC",
    "physiology": "Cần nhắc lại là acid uric kết tủa khi nước tiểu có pH acid và các tinh thể acid uric thấu tia X (không cản quang). Khi nghi ngờ có sỏi thận loại acid uric, do chụp film X quang bụng không thấy sỏi cản quang, chẩn đoán cần dựa trên siêu âm hay chụp hệ tiết niệu có tiêm thuốc cản quang (UIV).\n\nTrong trường hợp viêm khớp, định lượng acid uric trong dịch khớp hữu ích trong chẩn đoán phân biệt giữa viêm khớp do tăng acid uric trong máu (bệnh gout) với viêm khớp do các căn nguyên khác (chấn thương, thoái khớp, viêm khớp nhiễm khuẩn, viêm khớp do pyrophosphat hay do viêm).\n\nCần ghi nhận là nguy cơ bị viêm khớp trong bệnh gout có mối tương quan với nồng độ acid uric trong máu và nguy cơ này trở nên quan trọng khi nồng độ acid uric trong máu > 530 µmol/L (9 mg/dL). Tuy vậy, có từ 20 đến 30% các trường hợp viêm khớp do gout có nồng độ acid uric huyết thanh bình thường.\n\nCông thức tính hệ số thanh thải acid uric như sau:\nNồng độ acid uric nước tiểu (mmol/ngày) x Thể tích nước tiểu 24 giờ (L) / Nồng độ acid uric huyết thanh (mmol/L)\n\nHệ số thanh thải này cho phép đánh giá khả năng thải trừ acid uric của từng cá thể.\n\nHệ số thanh thải acid uric phụ thuộc vào:\nMức lọc cầu thận.\nKhả năng tái hấp thu của các ống thận gần.\nKhả năng bài xuất của các ống thận xa.",
    "indication": "Mục đích và chỉ định xét nghiệm\nĐể chẩn đoán các bệnh lý gây biến đổi nồng độ acid uric (ví dụ: sỏi thận).\nĐể theo dõi điều trị bệnh gout.\nĐể theo dõi điều trị hóa chất chống ung thư nhằm hạn chế tình trạng lắng đọng cấp urat tại thận với nguy cơ gây suy thận cấp (hội chứng ly giải khối u).",
    "specimenCollection": "Cách lấy bệnh phẩm\nMáu: XN được tiến hành trên huyết tương. Thường cần yêu cầu BN phải nhịn ăn 4 - 8h trước khi lấy máu XN tùy theo kỹ thuật xét nghiệm được sử dụng.\nNước tiểu: Thu bệnh phẩm nước tiểu 24h.",
    "testingMethods": "Phương pháp định lượng\nĐịnh lượng nồng độ acid uric huyết thanh có thể được thực hiện theo các phương pháp:\nDùng enzym.\nĐo màu.\nTuy vậy, kết quả của phương pháp định lượng nồng độ acid uric bằng cách đo màu có thể bị biến đổi khi trong huyết thanh có một số chất như:\nCystin.\nGlucose.\nPhenol.\nVitamin C (Acid ascorbic).\nTryptophan.\nTyrosin.",
    "ref": "1. Nồng độ acid uric trong máu\nNam: 3,6 - 8,5 mg/dL hay 214 - 506 µmol/L.\nNữ: 2,3 - 6,6 mg/dL hay 137 - 393 µmol/L.\n2. Nồng độ acid uric trong nước tiểu\n250-1000 mg/24h hay 1,5 - 5,9 mmol/24h\nTrên mẫu nước tiểu lấy ngẫu nhiên:\nNam: 105-595 mg/g creatinin.\nNữ: 95-740 mg/g creatinin.\n3. Nồng độ acid uric trong dịch khớp\n2- 6 mg/dL hay 0,1 - 0,3 mmol/L.",
    "alert": "Nếu phát hiện thấy BN có tình trạng tăng acid uric máu, cần hướng dẫn BN tăng khẩu phần nước uống hàng ngày để dự phòng nguy cơ bị sỏi thận. Khuyên BN tránh uống rượu (do đồ uống có cồn gây ức chế bài tiết tinh thể urat qua nước tiểu).\n\nNếu phát hiện BN có tăng nồng độ acid uric bài tiết qua nước tiểu, cần hướng dẫn BN sử dụng các thức ăn chứa ít purin. Các nguồn thực phẩm có hàm lượng purin cao bao gồm: măng tây, các đồ uống có chứa caffein, nấm, rau bina (spinach), men rượu bia và các phủ tạng động vật (Vd: gan và thận).\n\nCòn chưa có được ý kiến đồng thuận trong đánh giá lợi ích điều trị đối với các bệnh nhân tăng nồng độ acid uric máu không có biểu hiện triệu chứng, do chưa đủ bằng chứng để xác nhận điều trị này có thực sự giúp dự phòng các đợt viêm khớp do cơn gout cấp, hình thành sỏi thận urat và nguy cơ tim mạch.",
    "pathologicalMeaning": {
      "increase": "Tăng nồng độ acid uric trong máu\nCác nguyên nhân chính thường gặp là:\n1. Tăng sản xuất acid uric\nTăng acid uric máu tiên phát (30% BN gout thuộc loại vô căn).\nPhá huỷ tổ chức (Vd: sau hoá trị liệu, xạ trị).\nGia tăng chuyển hóa tế bào (Vd: bệnh lơxêmi cấp, u lympho, đa u tủy xương, bệnh đa hồng cầu).\nThiếu máu do tan máu (Vd: sốt rét, bệnh hồng cầu hình liềm, thiếu G6PD).\nThức ăn chứa nhiều purin.\nBéo phì.\nNhịn đói hay dùng chế độ ăn giảm cân chứa nhiều protein.\n\n2. Giảm đào thải acid uric qua thận\nSuy thận (không tương quan với mức độ nặng của tổn thương thận).\nNghiện rượu cấp.\nDùng thuốc lợi tiểu (Vd: thiazid, furosemid, acid ethacrynic...).\nTổn thương các ống thận xa.\nNhiễm toan lactic.\nSuy tim ứ huyết.\nCác thuốc gây giảm thải acid uric qua nước tiểu:\nAspirin (liều thấp < 4 g/ngày).\nThuốc lợi tiểu (ngoại trừ spironolacton và ticrynafen).\nProbenecid (với liều thấp).\nPhenylbutazon (với liều thấp).\n\n3. Các nguyên nhân khác\nBệnh nhân bị vữa xơ động mạch và tăng HA vô căn (tăng nồng độ acid uric máu được gặp ở 80% các BN bị tăng trigycerid máu).\nTăng bạch cầu đơn nhân nhiễm trùng cấp (hay bệnh nhiễm virus Epstein-Barr).\nNhiễm độc thai nghén và tiền sản giật (xét nghiệm nồng độ acid uric máu theo seri giúp theo dõi đáp ứng điều trị và đánh giá tiên lượng bệnh).\nSuy cận giáp trạng.\nCường cận giáp tiên phát.\nSuy giáp.\nNgộ độc chì mạn tính.\nChấn thương.\nThận đa nang.\nBệnh sarcoidose.\nNhiễm độc mạn berylium (chronic berylliosis).\nMột số bệnh lý hiếm gặp: Bệnh von Gierke, hội chứng Lesch-Nyhan (Lesch-Nyhan syndrome), hội chứng Down, bệnh đái nước tiểu mùi ngọt hương tùng (maple syrup urine disease).",
      "decrease": "Giảm nồng độ acid uric trong máu\nCác nguyên nhân chính thường gặp là:\n1. Hoà loãng máu.\n2. Hội chứng tiết hormon chống bài niệu (ADH) không thích hợp (SIADH).\n3. Tổn thương các ống thận gần (Vd: tình trạng được gặp ở người lớn hoàn toàn khỏe mạnh song có khiếm khuyết đơn thuần tái hấp thu hay vận chuyển acid uric ống thận).\n4. Hội chứng Fanconi.\n5. Các thuốc gây tăng thải acid uric qua nước tiểu:\nACTH.\nBenzbromaron.\nAllopurinol.\nProbenecid (với liều cao).\nCortison.\nPhenylbutazon (với liều cao).\nSulfinpyrazon.\nSalicylat (với liều cao).\nAcid ascorbic.\nThuốc kháng vitamin K coumarin.\nCác thuốc gây độc cho tế bào để điều trị bệnh ung thư (cytotoxic drugs).\nThuốc cản quang.\nCác thuốc khác: glyceryl guaiacolat, estrogen, phenothiazin, indomethacin...\n6. Bệnh Wilson.\n7. Thiếu enzym xanthin oxydase (Vd: chứng đái xanthin trong nước tiểu [xanthinuria]).\n8. To đầu chi (ở một số bệnh nhân).\n9. Bệnh Celiac (tăng nhẹ nồng độ acid uric máu).\n10. Một số trường hợp bệnh lý u tân sinh (Vd: Bệnh Hodgkin, ung thư biểu mô)."
    },
    "interferingFactors": "Các yếu tố góp phần làm thay đổi kết quả xét nghiệm\nCác thuốc có thể làm tăng nồng độ acid uric máu là: Adrenalin, acetaminophen, ampicillin, acid ascorbic, thuốc chẹn bêta giao cảm, caffein, các hóa chất điều trị ung thư, cyclosporin, diltiazem, thuốc lợi tiểu nhóm thiazid, G-CSF, isoniazid, levodopa, lisinopril, methyldopa, niacin, thuốc kháng viêm không phải steroid, phenothiazin, rifampin, salicylat, sildenafil, theophyllin, warfarin.\nCác thuốc có thể làm giảm nồng độ acid uric máu là: Acetazolamid, allopurinol, aspirin (liều cao), chlorpromazin, corticosteroid, enalapril, estrogen, griseofulvin, lisinopril, lithium, mannitol, marijuana, probenecid, salicylat, verapamil, vinblastin.\nTình trạng thóa giáng nhanh acid uric có trong huyết tương xẩy ra trong điều kiện nhiệt độ phòng ở các bệnh nhân có hội chứng ly giải khối u đang được điều trị bằng rasburicase. Ở các đối tượng này cần lấy máu vào ống nghiệm đã được chuẩn bị để lạnh trước chứa heparin, sau khi thu bệnh phẩm ống nghiệm được đặt ngay vào túi đá lạnh ly tâm trong điều kiện giữ lạnh. Huyết tương sau khi được tách sẽ được duy trì trong túi đá lạnh và phải được xét nghiệm trong vòng 4 giờ sau khi thu mẫu.",
    "benefits": "Lợi ích của xét nghiệm định lượng acid uric\n1. Xét nghiệm không thể thiếu trong xác định\nCơn đau quặn thận.\nThận ứ nước.\nSuy thận không xác định được nguồn gốc.\nViêm khớp.\nĐau khớp.\n2. Xét nghiệm hữu ích để theo dõi\nCác suy thận.\nCác bệnh máu.\nCác thiếu máu do tan máu (sốt rét, bệnh hồng cầu hình liềm).\nBệnh nhân được điều trị bằng hoá trị liệu hoặc xạ trị.\nBệnh nhân thực hiện liệu trình nhịn đói hoàn toàn hay chế độ ăn < 800 calo/ngày.\nBN nghiện rượu.\n3. XN hữu ích trong theo dõi mức độ nặng và tiên lượng các BN nhiễm độc thai nghén nặng với nguy cơ sản giật và tiền sản giật.\n\nLợi ích của xét nghiệm xác định hệ số thanh thải acid uric\n1. Xét nghiệm cho phép chẩn đoán phân biệt\nTăng acid uric máu liên quan với tình trạng tăng sản xuất (hệ số thanh thải acid uric bình thường hay tăng).\nTăng acid uric máu thứ phát do giảm thải trừ (hệ số thanh thải acid uric giảm).\n2. Xét nghiệm cho phép tách biệt\nTổn thương các ống thận gần (hệ số thanh thải acid uric tăng).\nTổn thương các ống thận xa (hệ số thanh thải acid uric giảm).",
    "clinicalNote": ""
    },
     {
    "name": "Định lượng Albumin [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "ALBUMIN\n(Albumine / Albumin, Serum)",
    "physiology": "Albumin là một thành phần protein quan trọng nhất, chiếm tới 58 - 74% lượng protein toàn phần. Albumin đóng vai trò thiết yếu trong duy trì áp lực keo và tham gia vận chuyển nhiều chất trong cơ thể (Vd: bilirubin, acid béo, thuốc và hormon). Khoảng 300 - 500g albumin được phân bố trong các dịch cơ thể, gan của một người lớn bình thường sản xuất khoảng 15 g albumin mỗi ngày. Nửa đời sống của albumin vào khoảng 20 ngày, với khoảng 4% tổng lượng albumin chứa trong cơ thể được thoái giáng hàng ngày.\n\nNồng độ albumin trong huyết thanh sẽ phản ánh tốc độ tổng hợp, thoái hóa và thể tích phân bố. Quá trình tổng hợp albumin chịu tác động điều hòa của một loạt yếu tố, như tình trạng dinh dưỡng, áp lực keo huyết thanh, các cytokin và hormon.",
    "indication": "Mục đích và chỉ định xét nghiệm\nĐể đánh giá tình trạng dinh dưỡng của bệnh nhân.\nĐể thăm dò và đánh giá các tình trạng bệnh lý mạn tính.\nĐể thăm dò và đánh giá bệnh lý gan.",
    "specimenCollection": "Cách lấy bệnh phẩm\nXét nghiệm được tiến hành trên huyết thanh. Bệnh phẩm được chứa trong ống nghiệm khô. Không nhất thiết cần yêu cầu BN phải nhịn ăn trước khi lấy máu XN.",
    "testingMethods": "",
    "ref": "0 - 4 tháng tuổi: 2,0 - 4,5 g/dL.\n4 tháng - 16 tuổi: 3,2 - 5,2 g/dL.\nNgười lớn (> 16 tuổi): 3,5 - 4,8 g/dL hay (35 - 48 g/L)",
    "alert": "Trong thực hành lâm sàng, một trong số hai thử nghiệm gắn thuốc nhuộm (dye-binding assay) - bromcresol xanh (brom-cresol green [BCG]) và bromcresol tím (bromcresol purple [BCP]) được sử dụng để định lượng nồng độ albumin máu và sự khác biệt giữa hai phương pháp này đã được ghi nhận từ lâu. Kỹ thuật sử dụng phương pháp BCG có thể bị tương tác không đặc hiệu do tình trạng gắn với các protein không phải là albumin, trái lại phương pháp BCP đặc hiệu hơn. Tuy vậy, phương pháp BCP đã được cho thấy là ước tính thấp hơn thực tế nồng độ albumin máu ở các bệnh nhân nhi đang được lọc máu và các bệnh nhân bị suy thận mạn.\nCác kháng thể kháng albumin thường được thấy ở bệnh nhân bị rối loạn chức năng gan và rất thường gặp typ IgA.",
    "pathologicalMeaning": {
      "increase": "Tăng nồng độ albumin máu\nCác nguyên nhân chính thường gặp là:\nTình trạng mất nước.\nViêm tụy cấp.",
      "decrease": "Giảm nồng độ albumin máu\nNguyên nhân chính thường gặp là:\nDo gan giảm tổng hợp albumin:\nBệnh gan cấp và mạn (Vd: nghiện rượu, xơ gan, viêm gan).\nGiảm hấp thu và suy dinh dưỡng.\nĐói ăn, suy dinh dưỡng thể thiếu calo-protein.\nBệnh amyloidosis.\nCác bệnh lý mạn tính.\nBệnh ĐTĐ.\nGiảm nồng độ hormon tăng trưởng.\nSuy chức năng tuyến giáp.\nSuy thượng thận.\nTình trạng không có albumin trong máu do di truyền.\n\nPhản ứng pha cấp, tình trạng viêm và các bệnh lý mạn tính:\nCác nhiễm trùng vi khuẩn (Vd: viêm túi mật cấp).\nBệnh lý gammaglobulin đơn dòng clon và các bệnh lý u tân sinh khác.\nCác nhiễm ký sinh trùng.\nBệnh lý ở loét dạ dày-tá tràng.\nTình trạng bất động dài ngày.\nBệnh thấp.\nBệnh da nặng.\nBệnh lý ung thư (Vd: bệnh Hodgkin, bệnh lơxêmi).\n\nTăng mất albumin qua bề mặt cơ thể:\nBỏng.\nBệnh ruột liên quan với tình trạng tăng mẫn cảm với các chất được ăn vào (Vd: tăng mẫn cảm với gluten, bệnh Crohn, viêm đại tràng loét).\nDò (đường tiêu hóa hoặc bạch mạch).\nChảy máu.\nBệnh thận gây mất protein qua cầu thận.\nMất protein qua đường tiêu hóa.\nBồi phụ tình trạng mất nước quá nhanh hoặc tăng gánh dịch.\nChọc hút dịch màng phổi hoặc dịch cổ chướng nhiều lần.\nChấn thương và vết thương dập nát.\n\nTăng dị hóa protein:\nSốt cao.\nBệnh Cushing.\nTiền sản giật.\nRối loạn chức năng tuyến giáp.\n\nTăng gánh thể tích huyết tương:\nSuy tim ứ huyết.\nDùng thuốc viên ngừa thai.\nCó thai."
    },
    "interferingFactors": "Các yếu tố góp phần làm thay đổi kết quả xét nghiệm\nTình trạng thiếu máu cục bộ gây biến đổi kết quả xét nghiệm albumin máu do trong tình trạng này khả năng gắn với kim loại của albumin bị giảm đi.\nTrong khi có thai, nồng độ albumin máu giảm đi đôi chút, trái lại nồng độ các globulin tăng lên bù trừ.\nKhi có tình trạng hòa loãng máu hoặc cô đặc máu sẽ gây biến đổi số lượng tuyệt đối các thành phần protein máu (kể cả albumin) song tỷ lệ phần trăm không thay đổi và sự biến đổi này xẩy ra song song với các biến đổi giá trị hematocrit.\nCác thuốc có thể làm biến đối kết quả xét nghiệm bao gồm: aspirin, corticosteroid, estrogen, penicillin, phenytoin, procainamid, thuốc viên ngừa thai, progestin.",
    "benefits": "Lợi ích của xét nghiệm định lượng albumin máu\nXét nghiệm hữu ích trong định hướng chẩn đoán rất nhiều bệnh lý:\n1. Giảm nồng độ albumin máu xuống mức < 45% so với protein toàn phần luôn có ý nghĩa bệnh lý và có thể định hướng chẩn đoán rất nhiều nguyên nhân khác nhau song thường gặp nhất là tình trạng giảm hấp thu (hoặc ỉa chảy mạn) và xơ gan.\n2. Tăng nồng độ albumin máu thường ít gợi ý cho một nguyên nhân cụ thể.",
    "clinicalNote": ""
  },
  {
    "name": "Định lượng Protein toàn phần [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "PROTEIN TOÀN PHẦN TRONG MÁU\n(Proteines Totales, Electrophorèse des Protides / Protein Electrophoresis, Serum Protein Electrophoresis, Immunofixation Electrophoresis, Total Protein)",
    "physiology": "Protein toàn phần trong máu bao gồm albumin và các globulin.\n\nAlbumin được tổng hợp ở gan và đảm bảo các chức năng sống sau đây của cơ thể:\nTham gia duy trì áp lực keo trong huyết tương.\nĐảm bảo sự vận chuyển nhiều loại chất (Vd: bilirubin, acid béo, các hormon) và thuốc. Các chất này được gắn với albumin khi chúng lưu hành trong dòng tuần hoàn.\n\nCó 3 loại globulin chính trong cơ thể: alpha, beta và gamma globulin.\nCác alpha globulin được tổng hợp ở gan và bao gồm:\nAlpha1 globulin như: alpha1 antitrypsin, alpha fetoprotein và globulin gần với thyroxin (thyroxin - bingding globulin).\nAlpha2 globulin: naptoglobin, ceruloplasmin, HDL và alpha2 macroglobulin.\nCác beta globulin cũng được tổng hợp ở gan và bao gồm: transferrin, plasminogen. LDL và các bổ thể.\nCác gamma globulin còn được gọi là globulin miễn dịch, được các bạch cầu lympho B sản xuất khi đáp ứng với kích thích của các kháng nguyên. Các globulin miễn dịch bao gồm kháng thể IgA, IgD, IgE, IgG và IgM.\n\nCác globulin đảm bảo các chức năng sống sau đây của cơ thể:\nTham gia duy trì cân bằng toan - kiềm.\nTham gia vào đáp ứng viêm của cơ thể.\nĐóng vai trò chủ đạo trong cơ chế phòng vệ miễn dịch và sản xuất các kháng thể.\nTham gia và điều hoà quá trình đông máu và tiêu fibrin.\n\nCần ghi nhận là xét nghiệm định lượng protein toàn phần của cơ thể tương đối thô sơ. Thực vậy, XN này chỉ giúp phát hiện tình trạng giảm hay tăng tổng lượng protein lưu hành trong máu. Trong số các kỹ thuật cho phép nghiên cứu sâu hơn các protein lưu hành trong tuần hoàn, có thể kể tới:\n1. Điện di các Protein trong huyết thanh (serum protein electrophoresis): Đây là phương pháp thường được sử dụng để xác định albumin và từng loại globulin. Kỹ thuật này sử dụng đặc tính của phân tử protein là mỗi phân tử protein được coi như một anion trong môi trường kiềm và sẽ di chuyển trong điện trường tới cực dương, theo một tốc độ riêng của phân tử protein. Điện di protein huyết thanh được tiến hành trên acetat cellulose hay trên thạch agarose và cho phép tách protein trong huyết thanh thành 5 phần: albumin, alpha 1, alpha 2, bêta và gamma globulin.\n2. Điện di miễn dịch các protein huyết thanh: Kỹ thuật này kết hợp giữa tách các protein huyết thanh trong một điện trường (điện di) với kết tủa từng loại protein bằng các huyết thanh miễn dịch đặc hiệu. Như vậy, sự xuất hiện trên gel thạch agarose các cung kết tủa cho phép định tính các globulin miễn dịch và chứng minh đặc điểm đơn dòng (monoclon) hay đa dòng (polyclon) của các globulin miễn dịch. Các bệnh lý globulin miễn dịch đơn dòng clon (monoclonal gammopathies) là một nhóm các rối loạn được đặc trưng bằng tình trạng tăng sinh của một clon duy nhất các tế bào huyết tương và tình trạng này tạo ra một protein đồng nhất về phương diện miễn dịch thường được gọi dưới tên parprotein hay protein đơn dòng (monoclonal protein [M-protein]). Bệnh lý globulin miễn dịch đơn dòng thường đi kèm với các bệnh lý ung thư hay bệnh lý tiềm ẩn nguy cơ ác tính như đa u tủy xương, bệnh tăng macroglobulin máu Waldenstrom, bệnh lơxêmi, bệnh chuỗi nặng và nhiễm amyloid. Các bệnh lý globulin miễn dịch đa dòng (polyclonal gammopathies) có thể là hậu quả của phản ứng viêm.\n3. Định lượng các globulin miễn dịch: XN này còn được gọi là điện di globulin miễn dịch đã được cố định (immunofixation electro-phoresis). Kỹ thuật sử dụng các huyết thanh miễn dịch đặc hiệu cho phép định lượng các IgG, IgM, IgA. XN này thường được chỉ định sau khi tiến hành điện di miễn dịch các protein huyết thanh phát hiện có tình trạng bệnh lý globulin miễn dịch đơn dòng nhằm để xác nhận hay loại trừ chẩn đoán đa u tủy xương.\n\nGhi chú:\nTất cả các bất thường của protein huyết thanh (tăng hay giảm nồng độ) hay các thay đổi chất lượng của các protein cần được tiến hành làm thêm các XN bổ sung để tìm kiếm nguyên nhân.",
    "indication": "Mục đích và chỉ định xét nghiệm\nĐể có được theo một cách đơn giản các thành phần protein có trong huyết thanh: Albumin và globulin. Vì vậy, XN thường được chỉ định để:\nTheo dõi các BN bị bệnh lý gamma globulin miễn dịch đơn dòng.\nChẩn đoán các bệnh lý gamma globulin miễn dịch đơn dòng clon, khi được sử dụng kết hợp với test cố định miễn dịch.\nHỗ trợ trong chẩn đoán bệnh gan, tình trạng giảm gammaglobulin máu, tăng gamma globulin máu, các tình trạng viêm, bệnh ly u tân sinh, bệnh thận và bệnh lý đường tiêu hóa.\nXét nghiệm cũng được xem xét chỉ định cho các bệnh nhân có tăng nồng độ protein toàn phần trong huyết thanh hoặc khi có các dấu hiệu và triệu chứng gợi ý sự có mặt của tình trạng rối loạn tế bào huyết tương.",
    "specimenCollection": "Cách lấy bệnh phẩm\nProtein máu: XN được tiên hành trên huyết thanh. Không nhất thiết cần yêu cầu BN phải nhịn ăn trước khi lấy máu XN.",
    "testingMethods": "",
    "ref": "Protein toàn phần trong huyết thanh: 6 - 8 g/dL hay 60 - 80 g/L.\nAlbumin: 58-74% 3,3 - 5,5 g/dL hay 33-55 g/L.\nAlpha1 globulin: 2 - 3,5% 0,1 - 0,4 g/dL hay 1 - 4 g/L.\nAlpha2 globulin: 5,4 - 10,6% 0,5 - 1,0 g/dL hay 5 - 10 g/L.\nBeta globulin: 7 - 14% 0,5 - 0,9 g/dL hay 5 - 9 g/L.\nGamma globulin: 8 - 18% 0,6 - 1,4 g/dL hay 6 - 14 g/L.",
    "alert": "",
    "pathologicalMeaning": {
      "increase": "Tăng nồng độ protein toàn phần máu\nCác nguyên nhân chính thường gặp là:\n1. Tình trạng mất nước nặng.\n2. Bệnh đa u tuỷ xương.\n3. Bệnh tăng macroglobulin máu Waldenstrom (Macro-globulinemia).\n4. Các nhiễm khuẩn mạn tính và các bệnh tự miễn gây tăng gamma globulin máu.\n5. Bệnh sarcoidose (sarcoidosis).\n\nTăng nồng độ albumin máu: Viêm tụy cấp, Mất nước.\n\nTăng nồng độ alpha globulin:\nNhiễm trùng cấp. Tình trạng viêm cấp. Ung thư biểu mô tuyến (carcinoma). Viêm cầu thận mạn. Xơ gan. ĐTĐ. Tình trạng rối loạn protein máu (dysproteinemia). Tình trạng mất protein qua cầu thận. Tổn thương gan. Bệnh u lympho Hodgkin. Tình trạng giảm albumin máu. Các bệnh lý viêm. Nhồi máu cơ tim. Viêm tủy xương. Bệnh loét dạ dày tá tràng. Có thai. Bệnh thận. Viêm khớp dạng thấp. Bệnh sarcoidose (sarcoidosis). Tình trạng stress. Bệnh lupus ban đỏ hệ thống. Viêm đại tràng loét.\n\nTăng nồng độ beta globulin máu:\nTình trạng viêm cấp. Không có albumin máu. ĐTĐ. Tình trạng rối loạn protein máu (dysproteinemia). Mất protein qua cầu thận. Tăng cholesterol máu. Thiếu máu do thiếu sắt. Bệnh đa u tủy xương. Hội chứng thận hư. Vàng da do tắc mật. Có thai. Viêm khớp dạng thấp. Bệnh sarcoidose (sarcoidosis). Viêm gan do virus.\n\nTăng nồng độ gamma globulin máu:\nUng thư giai đoạn tiến triển. Viêm gan mạn. Xơ hóa thành nang (cystic fibrosis). Bệnh gan. Bệnh u lympho Hodgkin. Phản ứng tăng mẫn cảm. Bệnh lơxêmi. Bệnh gamma globulin đơn dòng (monoclonal gammapathy) (Vd: bệnh đa u tủy xương). Viêm khớp dạng thấp. Bệnh sarcoidose (sarcoidosis). Nhiễm trùng nặng. Bệnh lupus ban đỏ hệ thống. Các nhiễm trùng do virus. Bệnh tăng macroglobulin máu của Waldenstrom.",
      "decrease": "Giảm nồng độ protein toàn phần máu\nCác nguyên nhân chính thường gặp là:\n1. Hoà loãng máu.\n2. Giảm khẩu phần protein: Suy dinh dưỡng, Nuôi dưỡng bằng dịch truyền tĩnh mạch không có protein.\n3. Khiếm khuyết của quá trình tổng hợp protein: Xơ gan, Viêm gan mạn tính.\n4. Mất protein qua đường tiêu hoá: Hội chứng giảm hấp thu, Cắt ruột non, Rò ruột, Bệnh lý ruột gây mất Protein (\"Protein - loosing\" Enteropathie).\n5. Mất qua nước tiểu: Đái tháo đường, Viêm cầu thận, Bệnh tự miễn (Vd: bệnh lupus ban đỏ hệ thống), Bệnh nhiễm amyloid (amyloidosis), Huyết khối tĩnh mạch thận, Tổn thương ống thận, Sản giật.\n6. Mất qua da (Vd: bỏng).\n7. Mất vào khoang thứ ba (Vd: cổ chướng).\n\nGiảm nồng độ albumin máu:\nViêm túi mật cấp. Không có albumin máu (analbuminemia) bâm sinh. ĐTĐ. Tình trạng mất protein qua đường tiêu hóa. Tình trạng mất protein qua cầu thận. Bệnh gan (Vd: xơ gan). Bệnh u lympho Hodgkin. Tình trạng cường giáp. Tình trạng viêm. Bệnh lơxêmi. Hội chứng giảm hấp thu. Bệnh loét dạ dày tá tràng. Có thai. Hội chứng mất protein (Protein - losing syndromes) hay bệnh ruột do dãn bạch mạch (enteropathy lymphangiectatic). Bệnh thận. Viêm khớp dạng thấp. Bệnh sarcoidose (sarcoidosis). Tình trạng stress. Bệnh lupus ban đỏ hệ thống. Viêm loét đại tràng.\n\nGiảm nồng độ alpha globulin máu:\nThiếu hụt alpha1-antitrypsin. Xơ gan. Thiếu máu do tan máu. Bệnh gan. Các ung thư di căn gan. Tình trạng cường giáp. Hội chứng giảm hấp thu. Xơ cứng bì. Tình trạng đói ăn. Phân mỡ. Viêm gan do virus.\n\nGiảm nồng độ beta globulin máu:\nBệnh tự miễn. Bệnh gan. Bệnh lơxêmi. U lympho. Hội chứng giảm hấp thu. Suy dinh dưỡng. Các ung thư di căn. Xơ cứng bì. Hội chứng thận hư. Tình trạng đói ăn. Bệnh lupus ban đỏ hệ thống. Viêm đại tràng loét.\n\nGiảm nồng độ gamma globulin máu:\nKhông có globulin máu (agammaglobulinemia). Mắt protein qua cầu thận. Giam gamma globulin máu. Bệnh lơxêmi. U lympho. Hội chứng giảm hấp thu. Hội chứng thận hư. Tình trạng đói ăn. Viêm đại tràng loét."
    },
    "interferingFactors": "Tình trạng hòa loãng và cô đặc máu sẽ làm biến đổi giá trị tuyệt đối (song không làm thay đổi tỷ lệ %) theo hướng song hành với các biến đổi giá trị hematocrit.\nTất cả các trường hợp tăng α-lipoprotein máu cũng sẽ làm tăng nồng độ β-globulin máu.\nCác thuốc có thể làm thay đổi kết quả XN là: Aspirin, corticosteroid, estrogen, penicillin, phenytoin, procainamid, thuốc ngừa thai uống, progestin.\nTiêm vaccin gây miễn dịch trong vòng 6 tháng trước đó có thể làm tăng nồng độ các globulin miễn dịch.",
    "benefits": "Lợi ích của định lượng protein máu\n1. XN giúp đánh giá tình trạng dinh dưỡng và thể tích trong lòng mạch của BN.\n2. XN cho phép xác định tình trạng tăng protein máu và phát hiện bệnh đa u tủy xương và các rối loạn protein máu khác, tình trạng viêm, bệnh tự miễn, nhiễm trùng.\n3. XN không thể thiếu trong thăm dò các bệnh lý gây mất protein vì vậy giúp cung cấp các thông tin hữu ích để chẩn đoán phù, tràn dịch màng phổi và cổ chướng.\n\nLợi ích của định lượng từng thành phần protein máu\nĐây là một XN tốt giúp định hướng chẩn đoán rất nhiều bệnh lý gặp trên lâm sàng:\n1. Nồng độ albumin máu: Giảm nồng độ albumin máu xuống dưới 45% luôn mang ý nghĩa bệnh lý và có thể gặp trong rất nhiều nguyên nhân khác nhau, trong đó nguyên nhân thường gặp nhất là tình trạng giảm hấp thu (hay ỉa chảy mạn tính) và xơ gan. Tăng nồng độ albumin máu thường không có ý nghĩa bệnh lý chuyên biệt gì.\n2. Nồng độ globulin máu: Tăng nồng độ globulin máu là một tình trạng rất thường gặp trên lâm sàng và giúp định hướng: Một bệnh lý viêm: Với tăng ưu thế các alpha2 - globulin; Bệnh lý gan: Trong xơ gan (tăng β và γ - globulin); tắc mật (tăng β-globulin); tình trạng viêm mạn thậm chí ung thư gan (tăng α-2-globulin); Đáp ứng với kích thích sinh kháng nguyên của vi khuẩn hay các tác nhân vi sinh vật khác... Bệnh bạch cầu lympho đơn dòng... Giảm globulin máu là một tình huống hiếm gặp: Ngoài tình trạng không có globulin máu bẩm sinh và ở trẻ đẻ non, cũng có thể thấy tình trạng này trong hoại tử gan cấp và một số bệnh lý ác tính của hệ thống võng nội mô. Giảm α-1-globulin là một bằng chứng để chẩn đoán tình trạng thiếu hụt enzym α-1-antitrypsin.",
    "clinicalNote": "Điện di protein máu cần được xem xét chỉ định cho tất cả các bệnh nhân có tình trạng tăng nồng độ protein toàn phần trong máu hoặc có các dấu hiệu và triệu chứng gợi ý sự có mặt của tình trạng rối loạn tế bào plasma. Các tình trạng này có thể bao gồm một hoặc nhiều biểu hiện sau: Tăng tốc độ lắng hồng cầu hoặc độ nhớt máu; Tình trạng thiếu máu không cắt nghĩa được, đau lưng, yếu cơ hoặc mệt mỏi; Nhược xương (osteopenia), có các tổn thương tiêu xương hoặc gãy xương tự nhiên; Suy thận với cặn nước tiểu không có bất thường; Tình trạng protein niệu nặng ở bệnh nhân > 40 tuổi; Tăng nồng độ canxi máu; Tăng gamma globulin máu; Suy giảm globulin miễn dịch; Protein niệu loại protein của Bence Jones; Bệnh lý thần kinh ngoại biên không cắt nghĩa được căn nguyên; Nhiễm trùng tái phát."
  },
  {
    "name": "Định lượng Bilirubin toàn phần [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "BILIRUBIN\n(Bilirubine / Bilirubin)",
    "physiology": "Bilirubin (sắc tố mật) có nguồn gốc chủ yếu từ quá trình phá huỷ các hồng cầu và một mức ít hơn từ các cytochrom và myoglobin.\nQuá trình phá huỷ các HC có thể được tiến hành:\n1. Trong tuỷ xương (quá trình tạo HC không hiệu quả).\n2. Trong máu tuần hoàn (do có các tự kháng thể).\n3. Trong lách (sau một thời gian sống trung bình 120 ngày).\nNhư vậy, Hb được giải phóng từ các HC sẽ tạo ra Hem, sắt và globin:\n\nỞ gan, bilirubin không liên hợp (gián tiếp) chịu một quá trình chuyển hoá gồm 3 giai đoạn:\n1. Được các tế bào gan giữ lại.\n2. Liên hợp với glucuronid nhờ enzym glucuronyltransferase của gan.\n3. Bài xuất vào trong đường mật.\n\nBilirubin liên hợp được tạo thành:\nChiếm 20% bilirubin toàn phần lưu hành trong máu.\nKhông gắn với protein, tan trong nước, vì vậy được lọc qua thận.\nThường được gọi là bilirubin trực tiếp do định lượng loại bilirubin này.\n\nGhi chú:\n1. Bình thường, kết quả XN chỉ trả lời nồng độ bilirubin toàn phần. Nếu có tình trạng tăng bilirubin toàn phần, phòng XN sẽ tiến hành thêm các test để xác định nồng độ bilirubin trực tiếp và gián tiếp.\n2. Trong các bệnh lý của tế bào gan (Vd: xơ gan, viêm gan), quá trình liên hợp bilirubin ít bị tác động. Ngược lại, quá trình bài xuất bilirubin liên hợp rất dễ bị biến đổi, điều đó cắt nghĩa tại sao có tăng lượng bilirubin liên hợp (hay trực tiếp) trong các bệnh lý kể trên.\n3. Khi lượng bilirubin liên hợp tăng cao trong các tế bào gan, sẽ gây trào ngược bilirubin liên hợp vào dòng tuần hoàn và gây vàng da.",
    "indication": "Mục đích và chỉ định xét nghiệm\nĐể chẩn đoán các bệnh lý gan mật và tình trạng tan máu.\nĐể theo dõi hiệu quả của điều trị quang cho trẻ sơ sinh bị vàng da.",
    "specimenCollection": "Cách lấy bệnh phẩm\nXN được thực hiện trên huyết thanh. Yêu cầu BN nhịn ăn từ 4 - 8h trước khi lấy máu làm XN song BN có thể được uống nước bình thường.\nCần phải tách nhanh HC, do tan máu có thể làm sai lệch kết quả XN.\nTránh để bệnh phẩm tiếp xúc với ánh sáng và tiến hành xét nghiệm càng nhanh càng tốt.",
    "testingMethods": "",
    "ref": "1. Nồng độ Bilirubin toàn phần trong máu: \nTrẻ sơ sinh: < 10 mg/dL hay < 171 µmol/L.\n1 tháng: 0,3 - 1,2 mg/dL hay 5,1 - 20,5 µmol/L.\nNgười lớn: 0,2 - 1,0 mg/dL hay 3,4 - 17,1 µmol/L.\n2. Tỷ lệ bilirubin trực tiếp/ bilirubin toàn phần: < 20 %.",
    "alert": "Nồng độ bilirubin toàn phần không phải là một chỉ số nhạy để đánh giá chức năng gan và thông số này có thể không phản ánh chính xác mức độ tôn thương gan:\nNồng độ bilirubin phải > 40 µmol/L (2,5 mg/dL) mới gây được biêu hiện vàng da trên lâm sàng; tăng nồng độ bilirubin > 85 µmol/L (5mg/dL) hiếm khi xẩy ra ở các bệnh nhân bị tan máu không biến chứng trừ khi họ có thêm bệnh lý gan mật.\nChi tăng bilirubin liên hợp song nồng độ bilirubin toàn phần bình thường được gặp ở tới 1/3 các bệnh nhân bị bệnh gan.\nTrong tắc nghẽn đường mật ngoài gan, nồng độ bilirubin máu có thể tăng lên dần tới mức cao nguyên (510 - 680 µmol/L) một phần do cân bằng giữa bài xuất của thận và chuyển đổi bilirubin thành các chất chuyên hóa khác. Song mức cao nguyên này thường không xây ra trong vàng da do nguyên nhân tổn thương tế bào gan và nồng độ bilirubin có thể tăng lên trên mức 855 µmol/L (50 mg/dL).\nDo vai trò bài xuất của thận, nồng độ bilirubin tối đa chỉ ở mức 170 - 598,5 µmol/L (10 - 35 mg/dL); nếu có tình trạng suy thận nồng độ bilirubin máu có thể lên tới mức 1282,5 µmol/L (75 mg/dL).",
    "pathologicalMeaning": {
      "increase": "Tăng nồng độ bilirubin toàn phần\nCác nguyên nhân chính thường gặp là:\n1. Có thai.\n2. Trẻ sơ sinh và trẻ đe non.\n3. Hoạt động thê lực mạnh.\n4. Các nguyên nhân gây tăng bilirubin không liên hợp.\n5. Các nguyên nhân gây tăng bilirubin liên hợp.\n6. Suy giáp.\n\nTăng nồng độ bilirubin không liên hợp (bilirubin gián tiếp)\nCác nguyên nhân chính thường gặp là:\n1. Tăng phá huỷ HC quá mức gây tăng sản xuất bilirubin:\nTan máu (Vd: sốt rét, bệnh do không tương hợp Rh của trẻ sơ sinh, bệnh hemoglobin, thiếu hụt các enzym của hồng cầu, đông máu rải rác trong lòng mạch, tan máu tự miễn).\nTạo HC không hiệu quả (Vd: bệnh thiếu máu Biermer).\nTruyền máu nhiều.\nCường lách.\nKhối máu tụ lớn.\n2. Suy giảm quá trình liên hợp bilirubin tại gan:\nBệnh Gilbert.\nSuy tim mất bù.\nThuốc: Rifampicin,...\n3. Khiếm khuyết quá trình liên hợp bilirubin:\nVàng da ở trẻ sơ sinh và trẻ đẻ non.\nHội chứng Crigler-Najjar (do thiếu hụt enzym glucuronyl transferase).\n\nTăng nồng độ bilirubin liên hợp (bilirubin trực tiếp)...",
      "decrease": ""
    },
    "interferingFactors": "Các yếu tố góp phần làm thay đổi kết quả xét nghiệm\nĐể xẩy ra tình trạng vỡ hồng cầu của mẫu bệnh phẩm có thể làm thay đổi kết quả XN.\nĐể mẫu bệnh phẩm tiếp xúc trực tiếp với ánh sáng mặt trời hay ánh sáng nhân tạo > 1h sẽ làm giảm nồng độ bilirubin của bệnh phẩm (mức độ giảm nồng độ bilirubin toàn phần có thê lên tới 50% mỗi giờ).\nTiếp xúc trong vòng 24h trước đó với thuốc cản quang sẽ làm thay đổi kết quả XN.\nCác thuốc có thể làm tăng nồng độ bilirubin toàn phần: Adrenalin, allopurinol, các steroid làm tăng chuyển hóa, thuốc điều trị sốt rét, vitamin C, azathioprin, chlorpropamid, thuốc cường cholin (cholinergic), codein, dextran, thuốc lợi tiểu, isoproterenol, levodopa, thuốc ức chế MAO, meperidin, methyldopa, methotrexat, morphin, thuốc ngừa thai uống, phenazopyridin, phenothiazin, quinidin, rifampin, streptomycin, theophyllin, tyrosin, vitamin A.\nCác thuốc có thể làm giảm nồng độ bilirubin toàn phần: Barbituric, caffein, citrat, corticosteroid, ethanol, penicillin, protein, salicylat, sulfonamid, urea.\nĐịnh lượng bilirubin niệu có thể cho kết quả dương tính giả ở BN dùng phenothiazin, trái lại XN này có thể cho kết quả âm tính giả khi có nitrit trong nước tiểu hay BN đang dùng vitamin C.",
    "benefits": "Lợi ích của xét nghiệm định lượng bilirubin máu\nXét nghiệm hữu ích:\n1. Trong thăm dò các thiếu máu (khi phối hợp đồng thời với định lượng haptoglobin, các LDH, HC lưới và sắt huyết thanh) để xác định căn nguyên là do tan máu hay do tạo hồng cầu không hiệu quả.\n2. Đánh giá mức độ nặng của một bệnh lý gan.\n3. Trong thăm dò các tắc mật (trong và ngoài gan): Một nồng độ bilirubin toàn phần > 685 µmol/L (40 mg/dL) chỉ dẫn tình trạng tắc nghẽn ở mức tế bào gan nhiều hơn là ở ngoài gan.\n4. Đánh giá mức độ tăng ưu thế thuộc về thành phần bilirubin trực tiếp hay gián tiếp có thể gợi ý các định hướng chẩn đoán:\nKhi có tăng bilirubin trực tiếp và chiếm 20 - 40% bilirubin toàn phần: Gợi ý nhiều cho vàng da do nguyên nhân tại gan hơn là do nguyên nhân sau gan.\nKhi có tăng bilirubin trực tiếp và chiếm 40 - 60% bilirubin toàn phần: gặp ở cả vàng da do nguyên nhân tại gan và nguyên nhân sau gan.\nKhi có tăng bilirubin trực tiếp và chiếm > 50% bilirubin toàn phần: gợi ý nhiều cho vàng da do nguyên nhân sau gan hơn là do nguyên nhân tại gan.\n5. Theo dõi BN được điều trị bằng thuốc kháng lao (INH, rifampicin).\n6. Gia tăng đơn lẻ và từng lúc bilirubin không liên hợp (gián tiếp) song không có bằng chứng tan máu được gặp ở 2 - 5% dân số (bệnh Gilbert).\n\nLợi ích của XN định lượng bilirubin trong nước tiểu\nBilirubin được tìm thấy trong nước tiểu là bilirubin liên hợp (trực tiếp), loại không gắn với protein. Vì vậy, XN cho phép chẩn đoán phân biệt:\n1. Các vàng da do tan máu: Không thấy có bilirubin trong nước tiểu.\n2. Các vàng da do bệnh gan hay do ứ mật: Có bilirubin trong nước tiểu.",
    "ebmGuidelines": "Các hướng dẫn thực hành lâm sàng dựa trên y học bằng chứng\nCác đánh giá ban đầu đối với tình trạng tăng bilirubin máu là cần xác định xem tình trạng tăng bilirubin huyết thanh thuộc loại tăng thành phần trực tiếp (tăng bilirubin liên hợp) hay tăng thành phần gián tiếp (tăng bilirubin không liên hợp).\nCác BN người lớn không có triệu chứng lâm sàng bị tăng đơn độc bilirubin không liên hợp, mức độ nhẹ cần được tìm kiếm các chẩn đoán: hội chứng Gilbert, bị tan máu và tăng bilirubin do thuốc.\nNếu có tăng bilirubin máu loại liên hợp, cần đánh giá có tình trạng tăng phosphatase kiềm đi kèm hay không để loại trừ tình trạng tắc mật.\nTrong viêm gan do virus, nồng độ bilirubin huyết thanh càng cao sẽ gợi ý bệnh nhân bị tôn thương gan nặng nề hơn và tiến triển lâm sàng kéo dài hơn.\nTrong viêm gan cấp do rượu, một nồng độ bilirubin toàn phần > 85 µmol/L (5 mg/dL) gợi ý một kết cục xấu đối với bệnh nhân.\nNồng độ bilirubin liên hợp (trực tiếp) > 17 µmol/L (1,0 mg/dL) ở trẻ nhỏ luôn chỉ dẫn tình trạng bệnh lý.",
    "clinicalNote": ""
  },
     {
    "name": "Định lượng Bilirubin trực tiếp [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "BILIRUBIN\n(Bilirubine / Bilirubin)",
    "physiology": "Bilirubin (sắc tố mật) có nguồn gốc chủ yếu từ quá trình phá huỷ các hồng cầu và một mức ít hơn từ các cytochrom và myoglobin.\nQuá trình phá huỷ các HC có thể được tiến hành:\n1. Trong tuỷ xương (quá trình tạo HC không hiệu quả).\n2. Trong máu tuần hoàn (do có các tự kháng thể).\n3. Trong lách (sau một thời gian sống trung bình 120 ngày).\nNhư vậy, Hb được giải phóng từ các HC sẽ tạo ra Hem, sắt và globin:\n\nỞ gan, bilirubin không liên hợp (gián tiếp) chịu một quá trình chuyển hoá gồm 3 giai đoạn:\n1. Được các tế bào gan giữ lại.\n2. Liên hợp với glucuronid nhờ enzym glucuronyltransferase của gan.\n3. Bài xuất vào trong đường mật.\n\nBilirubin liên hợp được tạo thành:\nChiếm 20% bilirubin toàn phần lưu hành trong máu.\nKhông gắn với protein, tan trong nước, vì vậy được lọc qua thận.\nThường được gọi là bilirubin trực tiếp do định lượng loại bilirubin này.\n\nGhi chú:\n1. Bình thường, kết quả XN chỉ trả lời nồng độ bilirubin toàn phần. Nếu có tình trạng tăng bilirubin toàn phần, phòng XN sẽ tiến hành thêm các test để xác định nồng độ bilirubin trực tiếp và gián tiếp.\n2. Trong các bệnh lý của tế bào gan (Vd: xơ gan, viêm gan), quá trình liên hợp bilirubin ít bị tác động. Ngược lại, quá trình bài xuất bilirubin liên hợp rất dễ bị biến đổi, điều đó cắt nghĩa tại sao có tăng lượng bilirubin liên hợp (hay trực tiếp) trong các bệnh lý kể trên.\n3. Khi lượng bilirubin liên hợp tăng cao trong các tế bào gan, sẽ gây trào ngược bilirubin liên hợp vào dòng tuần hoàn và gây vàng da.",
    "indication": "Mục đích và chỉ định xét nghiệm\nĐể chẩn đoán các bệnh lý gan mật và tình trạng tan máu.\nĐể theo dõi hiệu quả của điều trị quang cho trẻ sơ sinh bị vàng da.",
    "specimenCollection": "Cách lấy bệnh phẩm\nXN được thực hiện trên huyết thanh. Yêu cầu BN nhịn ăn từ 4 - 8h trước khi lấy máu làm XN song BN có thể được uống nước bình thường.\nCần phải tách nhanh HC, do tan máu có thể làm sai lệch kết quả XN.\nTránh để bệnh phẩm tiếp xúc với ánh sáng và tiến hành xét nghiệm càng nhanh càng tốt.",
    "testingMethods": "",
    "ref": "1. Bilirubin trực tiếp: 0,0 - 0,4 mg/dL hay 0 - 7 µmol/L.\n2. Tỷ lệ bilirubin trực tiếp/ bilirubin toàn phần: < 20 %.",
    "alert": "Nồng độ bilirubin toàn phần không phải là một chỉ số nhạy để đánh giá chức năng gan và thông số này có thể không phản ánh chính xác mức độ tôn thương gan:\nNồng độ bilirubin phải > 40 µmol/L (2,5 mg/dL) mới gây được biêu hiện vàng da trên lâm sàng; tăng nồng độ bilirubin > 85 µmol/L (5mg/dL) hiếm khi xẩy ra ở các bệnh nhân bị tan máu không biến chứng trừ khi họ có thêm bệnh lý gan mật.\nChi tăng bilirubin liên hợp song nồng độ bilirubin toàn phần bình thường được gặp ở tới 1/3 các bệnh nhân bị bệnh gan.\nTrong tắc nghẽn đường mật ngoài gan, nồng độ bilirubin máu có thể tăng lên dần tới mức cao nguyên (510 - 680 µmol/L) một phần do cân bằng giữa bài xuất của thận và chuyển đổi bilirubin thành các chất chuyên hóa khác. Song mức cao nguyên này thường không xây ra trong vàng da do nguyên nhân tổn thương tế bào gan và nồng độ bilirubin có thể tăng lên trên mức 855 µmol/L (50 mg/dL).\nDo vai trò bài xuất của thận, nồng độ bilirubin tối đa chỉ ở mức 170 - 598,5 µmol/L (10 - 35 mg/dL); nếu có tình trạng suy thận nồng độ bilirubin máu có thể lên tới mức 1282,5 µmol/L (75 mg/dL).",
    "pathologicalMeaning": {
      "increase": "Tăng nồng độ bilirubin toàn phần\nCác nguyên nhân chính thường gặp là:\n1. Có thai.\n2. Trẻ sơ sinh và trẻ đe non.\n3. Hoạt động thê lực mạnh.\n4. Các nguyên nhân gây tăng bilirubin không liên hợp.\n5. Các nguyên nhân gây tăng bilirubin liên hợp.\n6. Suy giáp.\n\nTăng nồng độ bilirubin không liên hợp (bilirubin gián tiếp)\nCác nguyên nhân chính thường gặp là:\n1. Tăng phá huỷ HC quá mức gây tăng sản xuất bilirubin:\nTan máu (Vd: sốt rét, bệnh do không tương hợp Rh của trẻ sơ sinh, bệnh hemoglobin, thiếu hụt các enzym của hồng cầu, đông máu rải rác trong lòng mạch, tan máu tự miễn).\nTạo HC không hiệu quả (Vd: bệnh thiếu máu Biermer).\nTruyền máu nhiều.\nCường lách.\nKhối máu tụ lớn.\n2. Suy giảm quá trình liên hợp bilirubin tại gan:\nBệnh Gilbert.\nSuy tim mất bù.\nThuốc: Rifampicin,...\n3. Khiếm khuyết quá trình liên hợp bilirubin:\nVàng da ở trẻ sơ sinh và trẻ đẻ non.\nHội chứng Crigler-Najjar (do thiếu hụt enzym glucuronyl transferase).\n\nTăng nồng độ bilirubin liên hợp (bilirubin trực tiếp)...",
      "decrease": ""
    },
    "interferingFactors": "Các yếu tố góp phần làm thay đổi kết quả xét nghiệm\nĐể xẩy ra tình trạng vỡ hồng cầu của mẫu bệnh phẩm có thể làm thay đổi kết quả XN.\nĐể mẫu bệnh phẩm tiếp xúc trực tiếp với ánh sáng mặt trời hay ánh sáng nhân tạo > 1h sẽ làm giảm nồng độ bilirubin của bệnh phẩm (mức độ giảm nồng độ bilirubin toàn phần có thê lên tới 50% mỗi giờ).\nTiếp xúc trong vòng 24h trước đó với thuốc cản quang sẽ làm thay đổi kết quả XN.\nCác thuốc có thể làm tăng nồng độ bilirubin toàn phần: Adrenalin, allopurinol, các steroid làm tăng chuyển hóa, thuốc điều trị sốt rét, vitamin C, azathioprin, chlorpropamid, thuốc cường cholin (cholinergic), codein, dextran, thuốc lợi tiểu, isoproterenol, levodopa, thuốc ức chế MAO, meperidin, methyldopa, methotrexat, morphin, thuốc ngừa thai uống, phenazopyridin, phenothiazin, quinidin, rifampin, streptomycin, theophyllin, tyrosin, vitamin A.\nCác thuốc có thể làm giảm nồng độ bilirubin toàn phần: Barbituric, caffein, citrat, corticosteroid, ethanol, penicillin, protein, salicylat, sulfonamid, urea.\nĐịnh lượng bilirubin niệu có thể cho kết quả dương tính giả ở BN dùng phenothiazin, trái lại XN này có thể cho kết quả âm tính giả khi có nitrit trong nước tiểu hay BN đang dùng vitamin C.",
    "benefits": "Lợi ích của xét nghiệm định lượng bilirubin máu\nXét nghiệm hữu ích:\n1. Trong thăm dò các thiếu máu (khi phối hợp đồng thời với định lượng haptoglobin, các LDH, HC lưới và sắt huyết thanh) để xác định căn nguyên là do tan máu hay do tạo hồng cầu không hiệu quả.\n2. Đánh giá mức độ nặng của một bệnh lý gan.\n3. Trong thăm dò các tắc mật (trong và ngoài gan): Một nồng độ bilirubin toàn phần > 685 µmol/L (40 mg/dL) chỉ dẫn tình trạng tắc nghẽn ở mức tế bào gan nhiều hơn là ở ngoài gan.\n4. Đánh giá mức độ tăng ưu thế thuộc về thành phần bilirubin trực tiếp hay gián tiếp có thể gợi ý các định hướng chẩn đoán:\nKhi có tăng bilirubin trực tiếp và chiếm 20 - 40% bilirubin toàn phần: Gợi ý nhiều cho vàng da do nguyên nhân tại gan hơn là do nguyên nhân sau gan.\nKhi có tăng bilirubin trực tiếp và chiếm 40 - 60% bilirubin toàn phần: gặp ở cả vàng da do nguyên nhân tại gan và nguyên nhân sau gan.\nKhi có tăng bilirubin trực tiếp và chiếm > 50% bilirubin toàn phần: gợi ý nhiều cho vàng da do nguyên nhân sau gan hơn là do nguyên nhân tại gan.\n5. Theo dõi BN được điều trị bằng thuốc kháng lao (INH, rifampicin).\n6. Gia tăng đơn lẻ và từng lúc bilirubin không liên hợp (gián tiếp) song không có bằng chứng tan máu được gặp ở 2 - 5% dân số (bệnh Gilbert).\n\nLợi ích của XN định lượng bilirubin trong nước tiểu\nBilirubin được tìm thấy trong nước tiểu là bilirubin liên hợp (trực tiếp), loại không gắn với protein. Vì vậy, XN cho phép chẩn đoán phân biệt:\n1. Các vàng da do tan máu: Không thấy có bilirubin trong nước tiểu.\n2. Các vàng da do bệnh gan hay do ứ mật: Có bilirubin trong nước tiểu.",
    "ebmGuidelines": "Các hướng dẫn thực hành lâm sàng dựa trên y học bằng chứng\nCác đánh giá ban đầu đối với tình trạng tăng bilirubin máu là cần xác định xem tình trạng tăng bilirubin huyết thanh thuộc loại tăng thành phần trực tiếp (tăng bilirubin liên hợp) hay tăng thành phần gián tiếp (tăng bilirubin không liên hợp).\nCác BN người lớn không có triệu chứng lâm sàng bị tăng đơn độc bilirubin không liên hợp, mức độ nhẹ cần được tìm kiếm các chẩn đoán: hội chứng Gilbert, bị tan máu và tăng bilirubin do thuốc.\nNếu có tăng bilirubin máu loại liên hợp, cần đánh giá có tình trạng tăng phosphatase kiềm đi kèm hay không để loại trừ tình trạng tắc mật.\nTrong viêm gan do virus, nồng độ bilirubin huyết thanh càng cao sẽ gợi ý bệnh nhân bị tôn thương gan nặng nề hơn và tiến triển lâm sàng kéo dài hơn.\nTrong viêm gan cấp do rượu, một nồng độ bilirubin toàn phần > 85 µmol/L (5 mg/dL) gợi ý một kết cục xấu đối với bệnh nhân.\nNồng độ bilirubin liên hợp (trực tiếp) > 17 µmol/L (1,0 mg/dL) ở trẻ nhỏ luôn chỉ dẫn tình trạng bệnh lý.",
    "clinicalNote": "Trong tài liệu gốc, xét nghiệm Bilirubin trực tiếp được gộp chung trong bài BILIRUBIN. Để đảm bảo nguyên vẹn 100% nội dung, bài BILIRUBIN được sao chép đầy đủ như cấu trúc tài liệu."
  },
  {
    "name": "Định lượng CRP",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "PROTEIN PHẢN ỨNG C\n(C-Réactive Protéine / C-Reactive Protein [CRP], High-Sensitivity CRP [hs-CRP], Cardiac CRP)",
    "physiology": "Protein phản ứng C (C-reactive protein [CRP]) là một glycoprotein được gan sản xuất có đặc điểm là kết tủa với polysaccharid C của phế cầu. Bình thường, không thấy protein này trong máu. Tình trạng viêm cấp với phá huỷ mô trong cơ thể gây giải phóng các interleukin 1 và 6 sẽ kích thích sản xuất protein này và gây tăng nhanh nồng độ protein ứng ứng C trong huyết thanh (vì vậy protein này còn được gọi là protein phản ứng pha cấp [acute-phase reactant protein]). Khi tình trạng viêm cấp kết thúc, protein phản ứng C (CRP) nhanh chóng mất đi. Vì vậy, protein C phản ứng được coi như một chỉ dấu phản ánh sự hoạt hóa phản ứng viêm hệ thống. Nồng độ CRP máu được biết là có thể tăng lên rất nhanh từ mức giá trị nền bình thường lên mức cao tới 50 mg/dL như một biểu hiện của đáp ứng viêm không đặc hiệu của cơ thể đối với nhiễm trùng và chấn thương.\n\nCó 2 loại Protein phản ứng C có thể định lượng được trong máu:\n1. Protein phản ứng C chuẩn (standard CRP): Được sử dụng để đánh giá tình trạng viêm tiến triển.\n2. Protein phản ứng C siêu nhạy (high-sensitivity CRP [hs-CRP]): Chất này được coi như một chất chỉ điểm đối với tình trạng viêm mạch tiến triển âm ỉ (low-grade vascular inflammation).\n\nProtein phản ứng C không mang tính chất đặc hiệu và nồng độ protein này gia tăng trong tất cả các tình trạng viêm.",
    "indication": "Mục đích và chỉ định xét nghiệm\nCRP được sử dụng để đánh giá mức độ và tiến triển của một phản ứng viêm.\nhs-CRP được chỉ định để:\nĐánh giá nguy cơ bệnh tim mạch.\nXác định nguy cơ tụt HA.",
    "specimenCollection": "Cách lấy bệnh phẩm\nXN được tiến hành trên huyết thanh.\nCác phòng XN có thể có các yêu cầu khác nhau đối với BN trước khi lấy máu XN (một số phòng XN không yêu cầu BN phải nhịn ăn trong khi một số phòng XN khác lại yêu cầu BN phải nhịn ăn từ 4 - 12h trước khi lấy máu XN).\nSau khi lấy mẫu bệnh phẩm, nhanh chóng gửi mẫu tới phòng XN để định lượng CRP.",
    "testingMethods": "",
    "ref": "CRP: Để đánh giá tình trạng viêm\n0 - 1,0 mg/dL hay < 10 mg/L.\nhs-CRP: Để đánh giá nguy cơ bị bệnh tim mạch\n< 0.3 mg/dL\n\Phân loại nguy cơ tim mạch dựa theo nồng độ protein C phản ứng (CRP)*\n- Mức nguy cơ Thấp: Nồng độ CRP < 1,0 mg/L\n- Mức nguy cơ Vừa: Nồng độ CRP 10 - 30 mg/L\n- Mức nguy cơ Cao: Nồng độ CRP > 3,0 mg/L\n* Các đánh giá nguy cơ bệnh tim mạch dựa trên nồng độ CRP được khuyến cáo dựa trên hướng dẫn điều trị của CDC và Hội tim mạch học Hoa kỳ (CDC/AHA)",
    "alert": "Bệnh nhân có tăng nồng độ hs-CRP cần được khuyến cáo áp dụng các biện pháp làm giảm nguy cơ bị bệnh tim mạch, và có thể cần chỉ định các thăm dò chẩn đoán bổ sung để xác định sự hiện diện của các bệnh lý tim mạch mới mắc.",
    "pathologicalMeaning": {
      "increase": "Tăng nồng độ protein phản ứng C (CRP)\nCác nguyên nhân chính thường gặp là:\n- Viêm tuỵ cấp.\n- Viêm ruột thừa.\n- Nhiễm trùng do vi khuẩn.\n- Bỏng.\n- Tăng nguy cơ bị ung thư đại tràng.\n- Bệnh lý ruột do viêm (Vd: bệnh viêm loét đại tràng).\n- Bệnh lupus ban đỏ hệ thống.\n- U lympho.\n- Nhồi máu cơ tim.\n- Bệnh lý viêm của tiểu khung (Vd: viêm phần phụ, apxe vòi trứng...vv).\n- Viêm động mạch tế bào khổng lồ (polymyalgia rheumatica).\n- Viêm khớp dạng thấp.\n- Tình trạng nhiễm trùng nặng (sepsis).\n- Phẫu thuật (trong vòng 3 ngày đầu sau mổ).\n- Lao tiến triển.\n\nTăng nồng độ hs-CRP\nNguyên nhân chính thường gặp là: Tăng nguy cơ bị bệnh tim mạch.",
      "decrease": ""
    },
    "interferingFactors": "Các yếu tố góp phần làm thay đổi kết quả xét nghiệm\nKết quả âm tính giả: Dùng các thuốc chống viêm không phải steroid, aspirin, corticosteroid, statin, thuốc chẹn bêta giao cảm.\nKết quả dương tính giả: Dùng các thuốc điều trị hormon thay thế, thuốc ngừa thai uống.\nĐặt dụng cụ ngừa thai trong buồng tử cung.\nGắng sức thể lực quá mạnh.\nCó thai.\nBéo phì.",
    "benefits": "Lợi ích của XN định lượng Protein phản ứng C (CRP)\n1. Protein phản ứng C (CRP) điển hình sẽ tăng lên trong vòng 6h kể từ khi bắt đầu có tình trạng viêm, điều này cho phép xác định tình trạng viêm sớm hơn nhiều so với khi sử dụng tốc độ lắng hồng cầu (thường tăng lên sau khi tình trạng viêm xẩy ra khoảng 1 tuần). Thêm vào đó, nồng độ protein phản ứng C không bị thay đổi khi có biến đổi về nồng độ globulin máu và hematocrit, điều này khiến cho XN định lượng protein phản ứng C (CRP) rất có giá trị khi BN có bất thường protein máu hay có bất thường của hồng cầu.\n2. Định lượng các loại protein phản ứng C có thê cung cấp các thông tin hữu ích:\nProtein phản ứng C chuẩn (standard CRP) được sử dụng để:\n- Đánh giá mức độ tiến triển của phản ứng viêm nhất là đối với bệnh lý mạn tính như bệnh lý ruột do viêm, viêm khớp và các bệnh tự miễn.\n- Đánh giá một nhiễm trùng mới như trong viêm ruột thừa và các tình trạng sau mổ.\n- Theo dõi đáp ứng với điều trị của các tình trạng bệnh lý nhiễm trùng (nhất là nhiễm trùng do vi khuẩn) và viêm.\nProtein phản ứng C siêu nhạy (hs-CRP): Là một yếu tố chính gây tình trạng xuất hiện và đứt rách mảng vữa xơ mạch. Tăng nồng độ hs - CRP dự báo BN có tăng nguy cơ bị các sự cố mạch vành, đột quỵ, bệnh động mạch ngoại biên và ĐTĐ typ 2. Vì vậy, XN này được sử dụng để đánh giá nguy cơ bị các sự cố tim mạch khi nó được làm đồng thời với các XN đánh giá nguy cơ mạch vành khác, như định lượng nồng độ cholesterol máu (cholesterol toàn phần và HDL cholesterol). Bệnh tim mạch được quy là hậu quả cuối cùng của quá trình tương tác giữa các thay đổi nhỏ của tế bào nội mạc mạch máu và đáp ứng viêm liên quan với các thay đổi này:\n- hs-CRP là một yếu tố nguy cơ độc lập đối với bệnh tim mạch, đột quỵ, bệnh động mạch ngoại biên và ĐTĐ typ 2.\n- hs-CRP có thể hữu ích như một chỉ dấu độc lập để tiên liệu các sự cố tái phát ở bệnh nhân có bệnh động mạch vành ổn định hoặc hội chứng vành cấp thông số hữu ích.\n- Xác định nguy cơ tụt HA.",
    "ebmGuidelines": "Các hướng dẫn thực hành lâm sàng dựa trên y học bằng chứng\nKhi xử trí một số bệnh lý viêm như viêm khớp dạng thấp, nhiễm trùng da và bệnh lý viêm tiểu khung, các tiến hành làm XN cận lâm sàng để đánh giá các chất gây phản ứng pha cấp (acute phase reactant). Hai XN đánh giá các chất gây phản ứng pha cấp (tốc độ lắng hồng cầu và protein phản ứng C) là các chỉ dẫn tốt để đánh giá mức độ của phản ứng viêm.\nĐo nồng độ CRP huyết thanh là XN hữu ích trong quyết định sử dụng kháng sinh cho các BN có dấu hiệu dịch não tủy phù hợp với chân đoán viêm màng não, song kết quả nhuộm Gram tìm vi khuẩn trong dịch não tủy âm tính. Khuyến cáo này được dựa trên các dữ liệu cho thấy XN nồng độ CRP trong giới hạn bình thường có giá trị dự đoán âm tính cao trong chẩn đoán viêm màng não do vi khuẩn.\nCác nghiên cứu gần đây tiếp tục đánh giá lợi ích của định lượng hs-CRP trong dự báo nguy cơ tim mạch, nhất là ở phụ nữ và ở người có hội chứng chuyển hoá, cũng như để dự báo nguy cơ bị ung thư đại tràng, và như một chất chỉ điểm cho tình trạng tổn thương phổi tiến triển.",
    "clinicalNote": ""
  },
  {
    "name": "Đo hoạt độ LDH [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "LACTAT DEHYDROGENASE (LDH) và CÁC ISOENZYM CỦA LDH\n(Lacticodéhydrogenase [LDH] / Lactate Dehydrogenase and Lactate Dehydrogenase Isoenzymes)",
    "physiology": "Lactat dehydrogenase (LDH) một enzym gồm 4 tiểu đơn vị (tetrameric enzyme) xúc tác phản ứng chuyển đổi pyruvat lactat. LDH có mặt trong bào tương của hết các mô của cơ thể và được giải phóng khi có tình trạng hủy tế bào.\n\nCác cơ quan giàu LDH được liệt kê dưới đây theo mức độ giảm dần: Cơ vân, Gan, Thận, Cơ tim, Hạch bạch huyết, Lách, Não, Dạ dày, Tụy tạng, HC, BC.\n\nĐiện di LDH cho phép tách biệt 5 loại isoenzym khác biệt: LDH₁ (H[1]), LDH₂ (H[2]M), LDH₃ (H[3]M[3]), LDH₄ (HM[2] và LDH₅ (M[1]). Mỗi isoenzym đặc hiệu cho một hay nhiều cơ quan nội tạng. Tính đặc hiệu tổ chức của các isoenzym LDH là do tình trạng tổng hợp đặc hiệu tổ chức (tissue-specific synthesis) các tiểu đơn vị theo một tỷ lệ được xác định rõ (Vd: các tế bào cơ tim tổng hợp ưu tiên tiểu đơn vị H, trái lại các tế bào gan tổng hợp gần như duy nhất tiểu đơn vị M. Cơ vân cũng tổng hợp các tiểu đơn vị M). Như vậy, xác định các isoenzym của LDH cho phép định hướng chẩn đoán, trong đó các dạng LDH-1 và LDH₅ là các isoenzym rất thường được sử dụng để chỉ dẫn tình trạng bệnh lý của tim (LDH-1) và gan (LDH₅). Song không thể sử dụng đơn độc isoenzym LDH khi không kết nối với bệnh sử và lâm sàng để chẩn đoán chính xác bệnh.\n\nCác isoenzym của LDH và nguồn gốc chính của isoenzym này là:\nLDH₁: Cơ tim và hồng cầu.\nLDH₂: Hệ thống lưới nội mô (reticuloendothelial system).\nLDH₃: Phổi.\nLDH₄: Thận, tụy và rau thai.\nLDH₅: Gan và cơ vân.\n\nLDH cùng với aspartat aminotransferase (AST) và creatin kinase (CK) kinh điển đã được đánh giá ở các trường hợp BN nghĩ ngờ bị nhồi máu cơ tim. Hiện tại do sử dụng rộng rãi XN định lượng nồng độ troponin đã làm giảm nhiều chỉ định xét nghiệm LDH để chẩn đoán nhồi máu cơ tim. Trong nhồi máu cơ tim điển hình, LDH tăng vào khoảng giờ thứ 8 đạt tới mức đỉnh vào giờ 48 và trở lại bình thường vào ngày 12 - 15. Giá trị đình có thể lên tới 300 - 800 IU/L. Như vậy, enzym này xuất hiện hơi muộn nơn so với CPK và AST (ASAT), song lại tồn tại trong một thời gian dài hơn các enzym kể trên. Vì vậy, các xét nghiệm này có thể giúp phát hiện một NMCT ở giai đoạn bán cấp (7 ngày sau nhồi máu) khi hoạt độ các enzym AST (ASAT) và CPK đã trở về giá trị bình thường.",
    "indication": "Mục đích và chỉ định xét nghiệm\nGia tăng hoạt độ các LDH chứng tỏ có tình trạng hoại tử tế bào, vì vậy XN thường được chỉ định đê:\nTheo dõi tình trạng hoạt động của khối u liên quan với cơ quan tạo máu và ung thư phôi.\nChẩn đoán và theo dõi bệnh gan và bệnh thận.\nSau nhồi máu cơ tim cấp mặc dù chỉ định này hiện tại gần như được thay thế bằng các marker tim khác như troponin.\nTheo dõi tình trạng tan máu trên invivo (Vd: thiếu máu tan máu) học in vitro (gia tạo liên quan với kỹ thuật xét nghiệm).",
    "specimenCollection": "Cách lấy bệnh phẩm\nXN được tiến hành trên huyết thanh. Không cần yêu cầu BN phải nhịn ăn trước khi lấy máu XN.\nChú ý:\nHoạt độ LDH trong HC cao gấp 100 lần so với hoạt độ enzym này trong huyết thanh vì vậy tất cả các tình trạng vỡ hồng cầu có thể làm XN mất chính xác.",
    "testingMethods": "",
    "ref": "LDH toàn phần: 110 - 210 IU/L hay 1,83 - 3,50 µkat/L.\nCác Isoenzym của LDH:\nLDH₁: 17-27%\nLDH₂: 28-38%\nLDH₃: 17-28%\nLDH₄: 5-15%\nLDH₅: 5-15%",
    "alert": "",
    "pathologicalMeaning": {
      "increase": "Tăng hoạt độ LDH toàn phần\nCác nguyên nhân chính thường gặp là:\n1. Bệnh lý tim\n- NMCT: Hoạt độ LDH tăng lên trong vòng 10 - 12h, đạt mức đỉnh trong vòng 48 - 72h (gấp khoảng × 3 lần bình thường). Trước đây hoạt độ LDH được sử dụng để chẩn đoán các tình trạng NMCT muộn do có tăng kéo dài từ 10 - 14 ngày hoạt độ enzym này. Một kết quả LDH > 2000 IU gợi ý tiên lượng tồi. Một tỷ lệ LDH-1/LDH-2 > 1 (LDH bị đảo hướng [\"flipped LDH\"]) cũng có thể xẩy ra trong nhồi máu thận cấp, tan máu, một số rối loạn cơ, có thai và một số bệnh lý ung thư.\n- Suy tim ứ huyết: Các isoenzym của LDH có thể bình thường hoặc LDH-5 tăng cao do ứ huyết gan.\n- Đặt van tim nhân tạo sẽ gây tan máu mạn và gây tăng LDH toàn phần, LDH-1 và LDH-2.\n- Phẫu thuật tim.\n- Viêm cơ tim cấp và thấp tim cấp.\n2. Bệnh lý cơ vân\n- Tổn thương cơ vân do thiếu oxy cấp (anoxic injury) (Vd: hội chứng vùi lấp).\n- Bỏng và chấn thương do nhiệt hoặc điện.\n- Viêm da cơ, viêm đa cơ, loạn dưỡng cơ Duchene.\n3. Bệnh lý gan\n- Xơ gan, vàng da tắc mật (thường tăng vừa).\n- Viêm gan: Tăng rõ rệt nhất là LDH-5. Các bệnh lý viêm gan bao gồm: Nhiễm khuẩn (A, B, non A-non B, nhiễm trùng đơn nhân, cytomegalovirus, toxoplasma), viêm gan nhiễm độc, viêm gan do rượu, viêm gan do thuốc.\n- Hoại tử gan cấp hoặc bán cấp.\n- Di căn gan từ các carcinoma ở nơi khác.\n- Một số rối loạn chuyển hóa bẩm sinh (nhiễm thiết huyết tố, hội chứng Dubin-Johnson, bệnh Gaucher, bệnh McArdle).\n4. Bệnh lý huyết học\n- Thiếu máu Biermer hay thiếu acid folic.\n- Tan máu ngoài cơ thể.\n- Thiều máu do tan máu.\n- Van tim nhân tạo.\n5. Bệnh lý thận\n- Nhồi máu vùng vỏ thận.\n- Viêm cầu thận.\n- Ghép thận.\n- Hội chứng thận hư.\n6. Bệnh lý phổi\n- Nhồi máu phổi, tắc mạch phổi.\n- Bệnh Sarcoidosis.\n7. Các khối u ác tính\n- Tăng trong khoảng 50% các bệnh nhân bị các loại carcinoma đặc khác nhau.\n- Bệnh lơxêmi (leucemie) dòng hạt.\n8. Các bệnh lý khác: Nhiễm trùng, nhiễm ký sinh trùng, viêm tụy cấp, suy giáp, bệnh mạch collagen, tắc ruột, bệnh lý thần kinh trung ương, do thuốc...",
      "decrease": "Giảm hoạt độ LDH toàn phần\nCác nguyên nhân chính thường gặp là:\n- Sau tia xạ.\n- Thiếu hụt di truyền các tiểu đơn vị."
    },
    "interferingFactors": "Để xẩy ra tình trạng bệnh phẩm bị vỡ hồng cầu và BN có gắng sức thể lực quá mức trước khi lấy máu XN sẽ làm thay đổi kết quả XN. Không bao giờ được xét nghiệm mẫu bệnh phẩm bị vỡ hồng cầu do hồng cầu chứa nhiều LDH hơn huyết thanh.\nBảo quản bệnh phâm quá lâu, hoặc trong tủ lạnh (4°C quá 12h) sẽ làm mất LDH-5.\nCác thuốc có thê làm tăng hoạt độ LDH là: Rượu, các steroid chuyển hóa, thuốc gây mê, kháng sinh, aspirin, thuốc chẹn bêta giao cảm, clofibrat, diltiazem, fluor, itraconazol, levodopa, thuốc giảm đau gây nghiện mocphin và các dẫn chất, thuốc chống viêm không phải steroid, nifedipin, paroxetin, procainamid, propylthiouracil, sulfasalazin, verapamil.\nCác thuốc có thể làm giảm hoạt độ LDH là: Vitamin C, oxalat.",
    "benefits": "Lợi ích của xét nghiệm đo hoạt độ LDH\n1. Khi kết hợp với transaminase và CPK, XN cho phép xác định một bệnh lý tim hay cơ vân.\n2. Khi kết hợp với transaminase, XN cho phép phát hiện các bệnh lý gan.\n3. XN hữu ích trong chẩn đoán tắc mạch phổi (tăng LDH, bilirubin và các sản phẩm thoái biến của fibrin).\n4. XN hữu ích trong phân biệt các thiếu máu (Thiếu máu Biermer, tan máu).\n5. Là XN đôi khi được sử dụng để chẩn đoán NMCT (hiện tại gần như được thay thế bằng Troponin).\n6. XN đôi khi được sử dụng để theo dõi tình trạng tiến triển của khối u liên quan gây thiếu máu và ung thư phổi.\n7. Xét nghiệm của isoenzym của LDH được chỉ định trong quy trình chẩn đoán một loạt các bệnh liên quan với tim, gan, cơ, thận, phổi và máu và để chẩn đoán phân biệt LDH được tổng hợp bởi cơ tim với LDH được tổng hợp từ tế bào gan và các nguồn tổng hợp khác của LDH. XN không thể thiếu trong qua trình chẩn đoán và tìm kiếm nguyên nhân gây tăng hoạt độ LDH.",
    "ebmGuidelines": "",
    "clinicalNote": ""
  },
  {
    "name": "Định lượng sắt huyết thanh",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "SẮT HUYẾT THANH\n(Fer, Fer Sérique / Iron [Fe])",
    "physiology": "Sắt có chức năng vận chuyển oxy tới các mô và tham gia gián tiếp vào quá trình vận chuyển ngược carbon dioxid (CO2) từ các mô về phổi.\n\nToàn bộ kho chứa sắt của cơ thể được ước tính vào khoảng 2 - 6g trong đó:\n- 60 - 70% lượng sắt này tham gia vào tổng hợp hemoglobin của hồng cầu.\n- Một phần nhỏ tham gia vào quá trình tổng hợp myoglobin và các cytochrom.\n- Phần còn lại (khoảng 30%) được tích trữ dưới dạng Ferritin và hemosiderin trong gan, tuỷ xương và lách.\n\nĐánh giá kết hợp Sắt huyết thanh, Transferrin và Độ bão hòa:\n1. Khi cô tình trạng thiếu sắt, nồng độ sắt huyết thanh giảm thấp, nồng độ transferin tăng lên và độ bão hoà này < 15%.\n2. Trong các tình trạng viêm không có kèm nguyên nhân gây thiếu sắt, nồng độ sắt huyết thanh giảm thấp, nồng độ transferin thấp và độ bão hoà này > 15%.\n3. Trong các tình trạng viêm có kèm nguyên nhân gây thiếu sắt, nồng độ sắt huyết thanh giảm rất thấp, nồng độ transferin thấp và độ bão hoà này < 15%.",
    "indication": "Mục đích và chỉ định xét nghiệm\nXN giúp để đánh giá tình trạng chuyển hóa của sắt: khẩu phần, kho dự trữ và sử dụng sắt trong cơ thể. Vì vậy, xét nghiệm này thường được chỉ định với mục đích:\n- Chẩn đoán tình trạng mất máu.\n- Chẩn đoán phân biệt các thiếu máu.\n- Chẩn đoán tình trạng nhiễm thiết huyết tố (hematochromatosis) và tăng lắng đọng sắt trong mô (hemosiderosis).\n- Đánh giá tình trạng thiếu hụt sắt (khi kết hợp với TIBC).\n- Chẩn đoán ngộ độc sắt cấp, nhất là ở trẻ em.\n- Đánh giá tình trạng thiếu máu vùng biển (thalassemia) và thiếu máu tăng nguyên bào sắt (sideroblastic anemia).\n- Theo dõi đáp ứng với điều trị thiếu máu (nhất là điều trị bổ sung sắt).",
    "specimenCollection": "Cách lấy bệnh phẩm\nXét nghiệm được tiến hành trên huyết thanh. Mẫu máu thường được lấy vào buổi sáng (sau 10h sáng). Tránh gây vỡ hồng cầu khi XN.\n\nYêu cầu BN nhịn ăn 12h trước khi lấy máu XN. BN không được dùng các chế phẩm bổ sung sắt trong vòng 24 - 48h trước khi lấy máu XN.",
    "testingMethods": "",
    "ref": "Nam: 70 - 190 µg/dL hay 12,5 - 34,1 µmol/L.\nNữ: 60 - 190 µg/dL hay 10,7 - 34,1 µmol/L.\nNgười già: Nồng độ sắt huyết thanh giảm đi.\nCó những biến đổi theo nhịp ngày đêm với giá trị tối đa vào buổi sáng.",
    "alert": "XN định lượng nồng độ sắt huyết thanh là một test không quá tin cậy trong mục đích tìm kiếm tình trạng thiếu hụt sắt hoặc để sàng lọc tình trạng nhiễm thiết huyết tố (hemochromatosis) và các bệnh gây tăng gánh sắt khác. Đối với các tình trạng này, nồng độ sắt huyết thanh thường được đánh giá cùng với các XN khác như ferritin, khả năng mang sắt toàn thể (total iron binding capacity [TIBC]), transferrin và phần trăm bão hòa transferrin.\nDo sắt huyết thanh có thể bị hạ thấp trong các hội chứng viêm mà không thực sự có tình trạng thiếu hụt sắt rõ rệt, vì vậy, nên kết hợp định lượng sắt với định lượng ferritin huyết thanh để đánh giá dự trữ sắt của cơ thể.\nTrong ngộ độc sắt cấp tính tỷ lệ sắt huyết thanh/TIBC không được coi là một XN hữu ích giúp chẩn đoán tình trạng này.\nKhông khuyến cáo chỉ định xét nghiệm này cho các bệnh nhân đang được điều trị bằng deferoxamin hoặc thuốc gắp bỏ sắt.",
    "pathologicalMeaning": {
      "increase": "Tăng nồng độ sắt huyết thanh\nCác nguyên nhân chính thường gặp là:\n1. Nhiễm thiết huyết tố (hemochromatosis) do di truyền hay vô căn.\n2. Tăng lắng đọng sắt trong mô (Hemosiderosis) do tăng quá mức khẩu phần sắt.\n3. Quá trình tạo hồng cầu bị suy giảm (Vd: thiếu máu bất sản, thalassemia, viêm khớp dạng thấp giai đoạn hoạt động).\n4. Tan huyết (Vd: tan máu miễn dịch, thalassemia).\n5. Hoại tử tế bào gan (Vd: tổn thương gan cấp, mức tăng có thể lên tới > 1000 µg/dL), bệnh gan mạn.\n6. Dùng thuốc viên ngừa thai có progesteron và khi có thai.\n7. Trước giai đoạn hành kinh: Tăng 10-30%.\n8. Ngộ độc chì.\n9. Ngộ độc sắt cấp.\n10. Thiếu máu ác tính Biermer.\n11. Đa hồng cầu.",
      "decrease": "Giảm nồng độ sắt huyết thanh\nCác nguyên nhân chính thường gặp là:\n1. Thiếu máu do thiếu sắt.\n2. Khẩu phần ăn thiếu sắt (suy dinh dưỡng).\n3. Giảm hấp thu (Hội chứng giam hấp thu, Phân mỡ, Ỉa chảy mạn tính).\n4. Mất máu qua: Đường tiêu hoá, Sản phụ khoa, Tiết niệu.\n5. Tăng nhu cầu sắt: Giai đoạn cơ thể sinh trưởng, Có thai, Kinh nguyệt, Tình trạng sau mổ.\n6. Hội chứng viêm (Vd: viêm khớp dạng thấp, bệnh tạo keo giai đoạn hoạt động).\n7. Nhiễm trùng cấp và nhất là nhiễm trùng mạn.\n8. Ung thư và bệnh lý u tân sinh.\n9. Các nguyên nhân khác: Bỏng rộng, Hội chứng tăng urê máu, Suy giáp, Hội chứng thận hư (do gây mất các protein mang sắt qua nước tiểu)."
    },
    "interferingFactors": "Tăng giả tạo nồng độ sắt huyết thanh có thể xẩy ra do BN dùng vitamin B12 trong vòng 48h trước khi XN hay khi bệnh phẩm xẩy ra tình trạng vỡ hồng cầu.\nDùng dextran sắt sẽ gây tăng nồng độ sắt huyết thanh trong vài tuần. BN đang uống thuốc chứa sắt (kể cả vitamin tổng hợp) có thể có tăng tạm thời nồng độ sắt huyết thanh.\nGiao (dao) động nồng độ sắt xẩy ra theo nhịp ngày đêm (cao nhất vào buổi sáng sớm, thấp hơn vào chiều tối và thấp nhất vào gần nửa đêm).\nBệnh nhân đang uống thuốc viên ngừa thai sẽ có tăng nồng độ sắt huyết thanh và/hoặc giá trị khả năng mang sắt toàn thể.\nGiảm giả tạo nồng độ sắt huyết thanh có thể xẩy ra khi mẫu bệnh phẩm bị đục do tăng lipid máu hay khi có các tình trạng viêm.\nCác thuốc có thể làm tăng nồng độ sắt huyết thanh là: Cefotaxim, chloramphenicol, estrogen, sulfat sat, methimazol, methrotrexat.\nCác thuốc có thể làm giảm nồng độ sắt huyết thanh là: Allopurinol, aspirin, cholestyramin, hocmôn hướng thượng thận, metformin, pergolid, progestin, risperidon, testosteron.",
    "benefits": "Lợi ích của xét nghiệm định lượng sắt huyết thanh\nXN hữu ích trong trường hợp:\n1. Thăm dò thiếu máu:\nXN hữu ích trong chẩn đoán thiếu máu: Khi định lượng sắt huyết thanh với mục đích chẩn đoán, cần xác định đồng thời độ bão hòa của transferrin. Khi nồng độ hemoglobin và hematocrit thấp, định lượng sắt huyết thanh giúp xác định nguyên nhân gây thiếu máu.\nXN giúp đánh giá đáp ứng của cá thế đối với điều trị bổ sung sắt trong quá trình điều trị thiếu máu do thiếu sắt. Để theo dõi điều trị thiếu sắt, chỉ cần định lượng định kỳ nồng độ sắt huyết thanh.\n2. Làm bilan tình trạng giảm hấp thu.\n3. Phát hiện bệnh căn của xơ gan (Vd: do nhiễm thiết huyết tố).\n4. Thăm dò các tình trạng suy nhược.\n5. Theo dõi các phụ nữ đang mang thai.",
    "ebmGuidelines": "Các hướng dẫn thực hành lâm sàng dựa trên y học bằng chứng\nHiệp hội USPSTF của Mỹ khuyến cáo sàng lọc thường quy tình trạng thiếu máu do thiếu sắt cho tất cả các phụ nữ có thai không có triệu chứng.",
    "clinicalNote": ""
  },
  {
    "name": "Định lượng Ethanol (cồn) [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "ETHANOL\n(Ethylémie / Bood Alcohol level, ETOH, Ethyl Alcohol)",
    "physiology": "Alcol (Alcohol) là các hợp chất hữu cơ có chứa nhóm -OH bao gồm methanol hay alcol sản xuất từ gỗ (CH3OH), ethanol hay ethyl alcohol (C2H5OH), isopropanol (alcol sát khuẩn hay dung môi hữu cơ). Mặc dù aceton (CH3COCH3) là một xetôn, không phải là một alcol song thường được gộp vào trong nhóm do nó thường được phát hiện bằng cùng một phương pháp XN.\n\nEthanol là một loại alcol được tìm thấy trong các đồ uống chứa cồn. Nó được coi là một chất gây ức chế hệ thần kinh trung ương. Tình trạng ức chế này có thể gây hôn mê và chết khi nồng độ cồn trong máu (alcoolémie) đạt tới mức ≥ 300 mg/dL Xét nghiệm xác định nồng độ cồn trong máu thường được thực hiện như một phần của biên bản điều tra pháp y liên quan với tai nạn giao thông. Mỗi quốc gia phê chuẩn một giới hạn của riêng mình về nồng độ cồn trong máu được coi là ngưỡng gây độc.",
    "indication": "Mục đích và chỉ định xét nghiệm\n1. Chẩn đoán: Giúp chẩn đoán các bệnh lý cấp tính liên quan với ngộ độc rượu cấp.\n2. Bằng chứng pháp lý. Đối với người gây ra tai nạn giao thông khi lái xe.\n3. Đánh giá các tình trạng ngộ độc cấp có tăng khoảng trống áp lực thẩm thấu máu.",
    "specimenCollection": "Cách lấy bệnh phẩm\nKhông nhất thiết yêu cầu BN phải nhịn ăn trước khi lấy máu làm XN. Nếu XN này được sử dụng để cung cấp một bằng chứng pháp lý sau này, khi lấy mẫu bệnh phẩm cần có người chứng kiến.\nSát trùng vị trí chọc tĩnh mạch lấy máu bằng dung dịch sát khuẩn không có ether, cồn và thậm chí cả dẫn xuất iod.\nTuân thủ nghiêm ngặt các quy trình pháp lý tại nước sở tại nếu sau đó kết quả XN này sẽ được sử dụng như một bằng chứng pháp lý đối với người được chỉ định làm test.\nSử dụng kỹ thuật thử nghiệm miễn dịch để XN ethanol trong nước tiểu, huyết thanh/huyết tương, máu toàn phần. Phản ứng chéo: < 1% với isopropanol, methanol, ethylen glycol, acetaldehyd; < 15% với n-propanol.\nSử dụng kỹ thuật sắc ký khí để XN ethanol, isopropanol alcohol, methanol, aceton trong nước tiểu, huyết thanh/huyết tương, máu toàn phần.",
    "testingMethods": "",
    "ref": "0 mg/dL hay 0 mmol/L (< 10 mg/dL).",
    "alert": "1. Các XN khác như công thức máu, nồng độ glucose máu và điện giải đồ thường được chỉ định thực hiện cùng với XN định lượng nồng độ cồn trong máu do một số tình trạng lâm sàng liên quan với các rối loạn nói trên, cũng có thể gây các triệu chứng tương tự như triệu chứng ngộ độc rượu.\n2. Do XN này có vai trò như một bằng chứng pháp lý, mẫu bệnh phẩm phải được bảo quản cẩn thận. Bệnh phẩm được vận chuyển trong túi chất dẻo, được niêm phong và phải được ký nhận mỗi khi chuyển giao tới người có liên quan.",
    "pathologicalMeaning": {
      "increase": "Tăng nồng độ cồn trong máu\nNguyên nhân chính thường gặp là uống rượu và ngộ độc rượu cấp:\n50 mg/dL: Giảm ức chế, mất phối hợp mức độ nhẹ.\n100 mg/dL: Thời gian phản ứng chậm, khả năng cảm giác bị biến đổi.\n150 mg/dL: Quá trình suy nghĩ bị biến đổi, thay đổi nhân cách và hành vi.\n200 mg/dL: Đi đứng loạng choạng, nôn, ý thức lú lẫn.\n300 mg/dL: Nói líu, mất cảm giác, rối loạn thị lực.\n400 mg/dL: Giảm thân nhiệt, hạ đường huyết, kiểm soát cơ kém, co giật.\n700 mg/dL: Mất ý thức, giảm phản xạ, suy hô hấp (tình trạng này cũng có thể xẩy ra ở mức nồng độ alcol máu thấp hơn).",
      "decrease": ""
    },
    "interferingFactors": "Nồng độ cồn trong máu có thể bị tăng lên khi BN dùng đồng thời với các thuốc như: Thuốc kháng histamin, barbiturat, chlordiazepoxid, diazepam, isoniazid, meprobamat, opiat, phenyltoin và thuốc an thần.",
    "benefits": "Lợi ích của xét nghiệm định lượng cồn trong máu\n1. Nồng độ cồn trong máu tiến triển theo thời gian: Tăng rất cao sau 1h và được thải trừ sau 4 - 5h.\n2. Trong trường hợp có suy gan: Đường biểu diễn nồng độ cồn trong máu tăng cao hơn và nồng độ này giảm xuống chậm hơn.\nTrong trường hợp BN đã bị cắt dạ dày: đường biểu diễn nồng độ cồn trong máu tăng cao hơn với nồng độ đỉnh xảy ra sớm hơn (25 phút).\nĐường biểu diễn tình trạng tăng lên của nồng độ cồn trong máu xấy ra chậm hơn và ở mức tăng thấp hơn khi hấp thụ rượu xẩy ra trong và sau bữa ăn, hay khi hấp thu rượu cùng với đường.\nNồng độ cồn tối đa trong máu được phép theo luật định tại Pháp là 0,8 g/L, tuy nhiên, tình trạng say xỉn đã có thể xẩy ra từ mức nồng độ 0,5 g/L.\nHôn mê do ngộ độc rượu có thể được đặt ra khi nồng độ cồn trong máu ≥ 2,5 g/L (tình trạng này có thể đi kèm với hạ đường máu, hay nhiễm toan cetôn do rượu).\nTử vong có thể xẩy ra khi nồng độ cồn trong máu đạt tới ngưỡng 5 g/L.\nTheo tiêu chuẩn của Pháp và đã được luật phê chuẩn, người lái xe được coi là trong tình trạng say xỉn khi họ có nồng độ cồn trong khí thở > 0,4 mg/L (được đo 2 lần liên tiếp qua ống thổi) hay khi nồng độ cồn trong máu > 0,8 g/L.",
    "ebmGuidelines": "",
    "clinicalNote": ""
  },
    {
    "name": "Đo hoạt độ Amylase [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "AMYLASE\n(Amylase)",
    "physiology": "Amylase là một nhóm các enzym hydrolase được sản xuất chủ yếu ở tụy và các tuyến nước bọt và với một lượng không đáng kể ở gan, niêm mạc ruột non, buồng trứng và vòi trứng. Amylase tham gia vào quá trình tiêu hóa các carbohydrat phức tạp (Vd: tinh bột) thành các đoạn carbohydrat ngắn hơn.\n\nHoạt độ amylase toàn phần có thể đo được trong huyết thanh, nước tiểu hay trong các dịch sinh học khác của của cơ thể (Vd: dịch cổ chướng, dịch màng phổi...). Hoạt độ toàn phần này là tổng hoạt độ của 2 isoenzym chính: isoenzym P có nguồn gốc từ tụy và isoenzym S có nguồn gốc từ tuyến nước bọt, phổi, sinh dục hay khối u. Trong huyết thanh của người bình thường, isoenzym typ S chiếm ưu thế hơn một chút. Thông thường, có thể đo được hoạt độ amylase trong huyết thanh và trong nước tiểu.\n\nCó rất nhiều nguyên nhân gây tăng hoạt độ amylase máu và/hoặc amylase nước tiểu. Ngoài viêm tuyến nước bọt, tình trạng gia tăng rõ rệt hoạt độ amylase gợi ý trước tiên tới chẩn đoán viêm tụy cấp hay đợt tiến triển cấp của viêm tụy mạn. Nếu không thấy có tình trạng viêm tụy, cần yêu cầu đo hoạt độ isoenzym P và S.",
    "indication": "1. Để chẩn đoán và theo dõi viêm tụy cấp, đợt cấp của viêm tụy mạn và các bệnh lý tụy khác.\n2. Xét nghiệm được chỉ định trong quy trình thăm dò chẩn đoán đối với tất cả các sự cố viêm trong ổ bụng.",
    "specimenCollection": "Máu: XN được thực hiện trên huyết thanh. Yêu cầu BN nhịn ăn trước khi lấy máu XN.\n\nNước tiểu. Thu bệnh phẩm nước tiểu 24h. Nước tiểu được bảo quản trong tủ mát hay trong đá lạnh.",
    "testingMethods": "",
    "ref": "< 90 U/L",
    "alert": "Điển hình ra, phải đánh giá cả hoạt độ amylase và lipase huyết thanh đối với các trường hợp nghi ngờ viêm tụy cấp.\nỞ một số BN bị viêm tụy cấp song không thấy có tăng bất thường enzym tụy.\nHoạt độ amylase máu thường trong giới hạn bình thường ở bệnh nhân viêm tụy cấp do rượu.\nTăng hoạt độ amylase huyết thanh với hoạt độ amylase niệu thấp có thể được gặp ở BN bị suy thận. Hoạt độ amylase huyết thanh 4 lần giá trị bình thường ở các BN có bệnh thận chỉ khi độ thanh thải creatinin < 50 mL/phút do sự hiện diện của các isoamylase nguồn gốc tụy hoặc nước bọt; song hoạt độ này hiếm khi tăng > 4 lần giá trị bình thường khi không có tình trạng viêm tụy cấp.\nMột số BN bình thường có tình trạng tăng amylase máu được biết dưới tên “macro-amylase”. Tình trạng này được xác định khi BN có tăng hoạt độ amylase máu nhưng amylase niệu bình thường và không có tình trạng suy thận. Tăng cao bất thường hoạt độ amylase máu ở các BN này là do amylase được gắn bất thường với một globulin huyết tương và không được chẩn đoán có viêm tụy cấp. Tính hệ số amylase/độ thanh thải creatinin niệu (amylase/creatinine clearance ratio [ALCR] in urine) giúp làm sáng tỏ tình trạng này.\n\nALCR bình thường: 1-4%.",
    "pathologicalMeaning": {
      "increase": "Tăng hoạt độ amylase máu\nCác nguyên nhân chính thường gặp là:\nViêm tuy cấp: do rượu, tự miễn.\nĐợt cấp của viêm tụy mạn.\nViêm tụy biến chứng (nang giả tụy, cổ chướng, apxe).\nChấn thương tụy.\nCác tổn thương đại thể của tụy (Vd: thủng ổ loét dạ dày-tá tràng, ung thư biểu mô [carcinoma] đầu tụy).\nTắc nghẽn ống mật (Vd: sỏi ống mật chủ).\nSau chụp mật tụy ngược dòng qua nội soi (ERCP).\nBiến chứng của ghép thận.\nViêm túi mật cấp.\nTắc ruột và nhồi máu ruột.\nCác bệnh lý viêm tiến triển của vùng tiểu khung, có thai ngoài tử cung vỡ.\nSuy thận.\nViêm tuyến nước bọt, quai bị, tắc nghẽn ống tuyến nước bọt.\nNhiễm toan cetôn do ĐTĐ.\nTính thấm của đường tiêu hóa bị biến đổi: Bệnh ruột do thiếu máu cục bộ hoặc thủng ruột non. Thủng ổ loét dạ dày tá tràng hay thủng ổ loét vào hậu cung mạc nối. Thủng thực quản.\nNgộ độc rượu cấp.\nBệnh lý tuyến nước bọt: Viêm mưng mủ tuyến nước bọt, quai bị, tắc nghẽn ống dẫn nước bọt do sỏi, sau tia xạ.\nCác khối u ác tính nhất là ung thư tụy, phổi, buồng trứng, thực quản, vú và đại tràng (thường hoạt độ amylase tăng rất cao > 25 lần giới hạn bình thường cao và mức tăng này hiếm khi được gặp trong viêm tụy cấp).\nSuy thận giai đoạn cuối (hoạt độ amylase máu tăng ngay cả khi không có viêm tụy).\nCác nguyên nhân khác: Bệnh gan mạn (Vd: xơ gan với hoạt độ amylase máu thường tăng ≤ 2 lần giá trị bình thường). Nhiễm toan cetôn do ĐTĐ. Tăng lipid máu. Cường chức năng tuyến giáp. Có thai (bao gồm cả chửa ngoài tử cung vỡ). U nang buồng trứng. Bỏng. Phẫu thuật lồng ngực gần đây, phình tách động mạch chủ. Đái myoglobin (myoglobinuria). Vỡ lách. Một số trường hợp chảy máu nội sọ (cơ chế không được biết).",
      "decrease": "Giảm hoạt độ amylase máu\nCác nguyên nhân chính thường gặp là:\nTình trạng phá hủy tụy nặng và lan rộng (Vd: viêm tụy cấp bùng phát, viêm tụy mạn giai đoạn cuối, xơ hóa nang giai đoạn cuối).\nTổn hại gan nặng (Vd: viêm gan, nhiễm độc, nhiễm độc thai nghén, nhiễm độc giáp nặng, bỏng nặng)."
    },
    "interferingFactors": "Mẫu bệnh phẩm bị vỡ hồng cầu có thể làm thay đổi kết quả XN.\nBệnh phẩm bị nhiễm bẩn nước bọt có thể gây tăng giả tạo kết quả XN.\nTăng triglycerid nặng (> 5 lần giá trị bình thường cao) có thể gây tình trạng ức chế hoạt độ enzym. Suy thận cũng có thể gây tăng vừa hoạt độ amylase huyết thanh.\nCác thuốc có thể làm tăng hoạt độ amylase huyết thanh là: Acetaminophen, kháng sinh, aspirin, corticosteroid, estrogen, furosemid, thuốc kháng viêm không phải steroid, prednison, salicylat và các lợi tiểu nhóm thiazid.\nCác thuốc có thể làm tăng hoạt độ amylase niệu là: Rượu, aspirin, bethanechol, codein, indomethacin, meperidin, morphin, pentazocin, thuốc lợi tiểu nhóm thiazid.\nCác thuốc có thể làm giảm hoạt độ amylase huyết thanh là: Citrat, oxalat do gắn với ion canxi.\nCác thuốc có thể làm giảm hoạt độ amylase niệu là: Fluorid, glucose.",
    "benefits": "Lợi ích của XN đo hoạt độ amylase máu và nước tiểu\n1. Xét nghiệm không thể thiếu đối với tất cả các trường hợp đau bụng bị nghi vấn do nguồn gốc tụy và các trường hợp vàng da không rõ nguồn gốc.\n2. Đo hoạt độ amylase huyết thanh thường được thực hiện để chẩn đoán phân biệt tình trạng đau bụng do viêm tụy cấp với đau bụng cần điều trị ngoại khoa do các nguyên nhân khác. Hoạt độ amylase huyết thanh bắt đầu tăng lên từ 3 - 6h sau khi xẩy ra tình trạng viêm tụy cấp và đạt giá trị đỉnh vào khoảng giờ thứ 24. Hoạt độ này trở lại giá trị bình thường sau đó 2 - 3 ngày. Hoạt độ amylase niệu phản ánh các thay đổi trong hoạt độ amylase huyết thanh sau một khoảng thời gian trễ từ 6 - 10h. Hoạt độ amylase niệu tăng cao trong vòng 7 - 10 ngày, vì vậy XN hoạt độ amylase niệu là một XN hữu ích để chứng minh có tình trạng viêm tụy cấp sau khi hoạt độ amylase huyết thanh đã trở về bình thường. Một gợi ý là tăng hoạt độ amylase huyết thanh lên mức > 1000 đơn vị Somogyi thường do các tổn thương có thể sửa chữa được bằng phẫu thuật (thường gặp nhất là sỏi trong đường mật), với mô tụy chỉ bị phù hoặc không bị tổn thương, tuy nhiên mức tăng 200 - 500 đơn vị Somogyi thường được kết hợp với tổn thương tụy và không thể sửa chữa được bằng phẫu thuật (Vd: chảy máu tụy, hoại tử tụy).\n3. Cũng có thể định lượng hoạt độ amylase trong dịch cổ chướng hay dịch màng phổi. Tăng hoạt độ amylase trong các dịch này (> 1000 U/L) gợi ý tràn dịch có nguồn gốc từ tụy.",
    "ebmGuidelines": "Các hướng dẫn thực hành lâm sàng dựa trên y học bằng chứng\nChẩn đoán viêm tụy cấp được nghi vấn ở các BN có biểu hiện đau bụng vùng thượng vị với khởi đầu cấp tính, tăng nhanh trong mức độ nặng và diễn biến không thuyên giảm. Hoạt độ amylase và/hoặc lipase huyết thanh ≥ 3 lần giá trị bình thường được coi là có giá trị chẩn đoán.",
    "clinicalNote": ""
  },
 {
  "name": "Đo hoạt độ CK-MB [máu]",
  "group": "Sinh Hóa",
  "time": "120 phút / 45 phút",
  "isFeatured": true,
  "concept": "ISOENZYM CK-MB CỦA CREATIN KINASE\n(Creatine Kinase-MB / CK-MB)",
  "physiology": "Creatin kinase (CK) là một enzym đóng vai trò chủ chốt trong kiểm soát dòng cung cấp năng lượng cho các mô khác nhau trong cơ thể. CK-MB là một trong ba loại isoenzym của CK, khu trú chủ yếu trong cơ tim. \n\nTrong điều kiện bình thường, CK-MB chiếm khoảng 5% lượng CK toàn phần của cơ thể. Khi có tình trạng tổn thương cơ tim (như nhồi máu cơ tim), CK-MB sẽ được giải phóng vào dòng tuần hoàn.\n\nTrong nhồi máu cơ tim cấp, hoạt độ CK-MB thường bắt đầu tăng 4 - 6 giờ sau khi bắt đầu bị nhồi máu (song không luôn tăng ở tất cả các bệnh nhân tới khoảng 12 giờ sau nhồi máu). Tình trạng tăng này trở về giá trị nền trong vòng 36 - 48 giờ. Điều này ngụ ý là không thể sử dụng CK-MB để chẩn đoán nhồi máu cơ tim cấp ở giai đoạn muộn, song có thể được sử dụng để đánh giá mức độ lan rộng và mức độ nặng của nhồi máu. Hơn nữa, sự tăng lại hoạt độ CK-MB sau khi giá trị enzym này đã giảm đặt nghi vấn bệnh nhân có thể bị nhồi máu cơ tim tái phát.",
  "indication": "1. Là chỉ dấu sinh học với độ đặc hiệu tốt đối với tình trạng tổn thương hoặc bệnh lý của cơ tim.\n2. CK-MB được sử dụng rộng rãi như một chỉ dấu sinh học sớm để đánh giá tình trạng tổn thương cơ tim (ví dụ: nhồi máu cơ tim cấp).",
  "specimenCollection": "Xét nghiệm được tiến hành trên huyết thanh. Không nhất thiết yêu cầu BN cần phải nhịn ăn trước khi lấy máu làm XN.\n\nXét nghiệm thường được chỉ định làm cấp cứu và được làm nhắc lại 3 - 4 lần trong vòng 4 - 24h ở các BN có bệnh cảnh cơn đau ngực kéo dài.\n\nChú ý:\n- Cần tránh gây tan máu do nồng độ cao của hemoglobin có thể làm xét nghiệm định lượng CK-MB không chính xác.\n- Không được tiêm bắp trong vòng 1h trước khi lấy máu XN.",
  "testingMethods": "",
  "ref": "< 24 U/L",
  "alert": "Tình trạng tăng CK-MB ở bệnh nhân có cơn đau thắt ngực, suy vành, sau làm test gắng sức hoặc viêm màng ngoài tim ngụ ý BN bị hoại tử cơ tim ở một mức nào đó, ngay cả khi không thể phát hiện được nhồi máu cơ tim trên lâm sàng.\n\nTăng CK-MB không nhất thiết chứng minh là có tổn thương cơ tim, do tình trạng này có thể gặp ở BN bị loạn dưỡng cơ, viêm đa cơ, nhiễm toan-xêtôn do ĐTĐ và sốc nhiễm khuẩn. Suy thận, tổn thương mô sau phẫu thuật và đụng giập tim cũng có thể gây tăng CK-MB.",
  "pathologicalMeaning": {
    "increase": "Tăng hoạt độ CK-MB\nCác nguyên nhân chính thường gặp là:\n- Tình trạng hoại tử hoặc viêm của cơ tim (Chỉ số CK-MB > 2,5%).\n- Nhồi máu cơ tim cấp.\n- Các chấn thương đối với tim: Sau phẫu thuật tim mở/mở ngực (giá trị trở về mức nền sau 24 - 48h); Hồi sinh tim phổi; Nong và đặt stent động mạch vành; Sau chụp mạch vành; Viêm cơ tim; Sau khử rung tim; Suy tim ứ huyết; Nhịp nhanh trên thất kéo dài; Bệnh cơ tim.\n- Bệnh cơ do hoạt động thể lực quá sức: Tăng từ nhẹ tới đáng kể ở 14 - 100% các bệnh nhân sau khi hoạt động thể lực quá mạnh (ví dụ: chạy marathon).\n- Chấn thương cơ vân gây tiêu cơ vân và/hoặc đái myoglobin.\n- Bệnh cơ vân (Vd: viêm cơ, loạn dưỡng cơ, viêm đa cơ, bệnh mạch collagen).\n- Liệt chu kỳ giảm kali máu có tính gia đình.\n- Bỏng hoặc chấn thương do nhiệt và điện.\n- Các rối loạn nội tiết (Vd: suy cận giáp, to đầu chi, nhiễm toan-xêtôn do ĐTĐ, suy giáp).\n- Một số nhiễm trùng do virus, vi khuẩn, nấm, ký sinh trùng.\n- Ngộ độc carbon monoxid.\n- Thuốc và độc chất (Vd: rượu, cocain, halothan, ipecac).\n- Một số u tân sinh (Vd: tuyến tiền liệt, vú).\n- Các nguyên nhân khác: Tăng thân nhiệt ác tính, hạ thân nhiệt, hội chứng Reye, viêm túi mật cấp, cường giáp và suy thận mạn.",
    "decrease": "Hoạt độ CK-MB có thể không tăng trong các trường hợp:\n- Sau khi chạy tim phổi máy, thông tim, đặt máy tạo nhịp và chụp động mạch vành, trừ khi catheter gây tổn thương cơ tim.\n- Tiêm bắp nhiều lần.\n- Co giật.\n- Nhồi máu hoặc tổn thương não."
  },
  "interferingFactors": "Mẫu bệnh phẩm bị vỡ hồng cầu có thể làm thay đổi kết quả XN.\nCác thuốc có thể làm tăng hoạt độ CK (bao gồm CK-MB) là: Amphotericin B, ampicillin, thuốc chống đông, aspirin, clofibrat, cocain, dexamethason, ethanol, furosemid, lithium, morphin và một số thuốc gây mê và tê.",
  "clinicalNote": "Xác định isoenzym CK-MB có ít lợi ích chẩn đoán nếu CK toàn phần bình thường. Trái lại, trong trường hợp tăng CK toàn phần, xác định CK-MB rất hữu ích do xét nghiệm cho phép phân biệt tăng CK là do nguồn gốc tim với tăng do nguồn gốc cơ hay não.\n\nDo CK-MB nói chung chỉ chiếm một phân số thấp hơn trong cơ vân so với trong cơ tim, tiêu chuẩn phần trăm (4%) đã được đề xuất để phân biệt giữa tình trạng tổn thương cơ vân với tình trạng tổn thương cơ tim."
},
  {
    "name": "Định lượng Lactat [máu]",
    "group": "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "LACTAT hay ACID LACTIC",
    "physiology": "Lactat được chuyển hóa tại gan. Tăng nồng độ acid lactic trong máu phản ánh hoặc có tăng sản xuất quá mức và/hoặc có giảm sử dụng của gan để tân tạo glycogen néoglucogenese).\n\nTích tụ acid lactic quá mức sẽ gây tình trạng nhiễm toan chuyển hóa với tăng khoảng trống anion.",
    "indication": "Để chẩn đoản và theo dõi các tình trạng nhiễm toan chuyển hóa nhất là nhiễm toan lactic.",
    "specimenCollection": "XN được tiến hành trên huyết tương máu động mạch hay tĩnh mạch.\nKhông nhất thiết cần yêu cầu bệnh nhân phải nhịn ăn trước khi lấy máu XN.\nCần tuân thủ nghiêm ngặt các yêu cầu khi lấy mẫu bệnh phẩm:\nBN không được hoạt động thể lực trước khi làm XN vài giờ.\nKhi lấy máu tĩnh mạch XN tránh đặt garot quá lâu.\nMẫu máu sau khi lấy cần được bảo quản lạnh ngay và được chuyển nhanh tới phòng xét nghiệm để tiến hành định lượng nồng độ acid lactic máu.\nThu mẫu bệnh phẩm và xử lý quy trình xét nghiệm đúng là điều có tính quyết định để có được kết quả tin cậy.",
    "testingMethods": "",
    "ref": "10 - 20 mg/dL",
    "alert": "Xét nghiệm định lượng nồng độ lactat máu thường quy không định lượng được D-lactat, một nguyên nhân nhiễm toan lactic hiếm gặp và thường bị bỏ sót.",
    "pathologicalMeaning": {
      "increase": "Tăng nồng độ acid lactic trong máu phản ánh hoặc có tăng sản xuất quá mức và/hoặc có giảm sử dụng của gan để tân tạo glycogen (tích tụ acid lactic quá mức sẽ gây tình trạng nhiễm toan chuyển hóa với tăng khoảng trống anion).",
      "decrease": "Giảm nồng độ acid lactic máu\nNguyên nhân chính thường gặp là: Hạ thân nhiệt."
    },
    "interferingFactors": "Các yếu tố góp phần làm thay đổi kết quả xét nghiệm\nMẫu bệnh phẩm bị vỡ hồng cầu có thê làm thay đôi kết quả XN.\nTrong khi gắng sức, nồng độ lactat máu có thể tăng gấp 10 lần nồng độ bình thường.\nỞ điều kiện nhiệt độ trong phòng (22°C), nồng độ acid lactic máu tăng lên gấp 2 lần sau mỗi 30 phút.\nNồng độ acid lactic có thể bị hạ thấp giả tạo khi có tăng cao nồng độ LDH.\nKhi có trong máu các chất gây tác động tương tác với phương pháp xét nghiệm (Vd: acid ascorbic).\nĐặt garot hay yêu cầu bệnh nhân bóp chặt tay quá lâu có thể làm tăng nồng độ lactat máu.\nCác thuốc có thể làm tăng nồng độ acid lactic máu là: Rượu, adrenalin, glucose. natri bicarbonat.",
    "benefits": "Lợi ích của xét nghiệm định lượng nồng độ lactat máu\n1. XN rất hữu ích để chân đoán xác định tình trạng nhiễm toan chuyển hóa:\n- Được gọi là tăng acid lactic máu (hyperlactatémie) khi có tăng nồng độ acid lactic trong máu nhưng chưa có biến đổi pH máu.\n- Được gọi là nhiễm toan lactic (hyperlactacidémie) khi có tăng nồng độ acid lactic máu (thường > 7 mmol/L) đi kèm với giảm pH máu.\n2. XN có thể hữu ích trong gợi ý nguyên nhân gây tình trạng nhiễm toan chuyển hóa với tăng khoảng trống anion:\n- Nhiễm toan lactic thứ phát do giảm oxy mô (nhiễm toan lactic typ A): Các tình trạng sốc do tim, nhiễm khuẩn, giam thể tích...\n- Nhiễm toan lactic nguyên phát không đi kèm với tình trạng giảm oxy mô (nhiễm toan lactic typ B): Gợi ý các các căn nguyên ĐTĐ, suy thận mạn, suy gan, dùng biguanid, ngộ độc một số chất (Vd: salicylat, ethylen glycol, ethanol) và đôi khi có thể gặp ở các BN có tình trạng thiếu hụt bâm sinh enzym.\n3. XN có thể được sử dụng như một yếu tố tiên lượng đối với BN hồi sức cấp cứu, nhất là khi nồng độ lactat máu > 30 mmol L nguy cơ tử vong gần như không tránh khỏi.",
    "ebmGuidelines": "",
    "clinicalNote": ""
  },
  {
    "name": "Streptococcus Pyogenes ASO",
    "group":  "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "KHÁNG THỂ KHÁNG STREPTOLYSIN-O hay ASLO\n(Anticorps Antistreptococciques Sériques / Antistreptolysin-O Titer [ASO Titer], Streptococcal Antibody Test)",
    "physiology": "Streptolysin-O là một enzym do vi khuẩn liên cầu tan máu bêta nhóm A sản xuất ra. Khi đương đầu với enzym ngoại lai này, cơ thể sẽ sản xuất ra các kháng thể chống lại enzym này. Các kháng thể xuất hiện 7 - 10 ngày sau nhiễm trùng do liên cầu cấp và tiếp tục tăng lên trong vòng 2 đến 4 tuần. Nồng độ kháng thể kháng Streptolysin-O (ASLO) điển hình sẽ giảm xuống tới mức như trước khi bị nhiễm trùng trong vòng 6 đến 12 tháng.",
    "indication": "XN giúp chẩn đoán xác định một nhiễm trùng tiến triển do liên cầu nhóm A gây nên.",
    "specimenCollection": "XN được tiến hành trên huyết thanh. Không nhất thiết cần yêu cầu BN phải nhịn ăn trước khi lấy máu XN.",
    "testingMethods": "",
    "ref": "< 200 IU/mL",
    "alert": "XN này được coi là kém nhạy do định lượng hiểu giả của ASLO đơn độc chỉ giúp phát hiện được 75 - 85% các trường hợp nhiễm trùng do liên cầu.\n\nHiệu giá ASLO thường được làm nhắc lại sau 10 - 14 ngày để so sánh với kết qủa ban đầu nhằm xác nhận nồng độ kháng thể có tăng lên hay không.\n\nXN ASLO không giúp dự kiến có xảy ra các biến chứng sau một nhiễm trùng do liên cầu hay không. cũng như nó không giúp dự kiến mức độ nặng của tình trạng nhiễm trùng do liên cầu.",
    "pathologicalMeaning": {
      "increase": "Tăng hiệu giá kháng thể kháng Streptolysin-O\nCác nguyên nhân chính thường gặp là:\nThấp khớp cấp.\nViêm nội tâm mạc sau nhiễm liên cầu (post-streptococcal endocarditis).\nViêm cầu thận sau nhiễm liên cầu (Post-streptococcal glomerulonephritis).\nBệnh tinh hồng nhiệt (do nhiễm trùng liên cầu).",
      "decrease": ""
    },
    "interferingFactors": "Mẫu bệnh phẩm bị vỡ hồng cầu có thể làm thay đổi kết quả XN\nCác thuốc có thể làm giảm hiệu giá của ASLO Kháng sinh. corticosteroid.\nCác kết quả (+) giả có thể xẩy ra khi mẫu bệnh phẩm có nông độ lipid tăng cao.",
    "benefits": "Lợi ích của xét nghiệm định lượng kháng thể kháng Streptolysin-O\n1. XN được chỉ định để cung cấp các bằng chứng về tình trạng nhiễm trùng do liên cầu nhóm A nhất là khi không phân lập được vì khuẩn. XN thường được áp dụng trong thực hành lâm sảng nhâm phát hiện kháng thể kháng Streptolysin-O. Nếu có các kháng thể này, chứng tỏ đối tượng đã từng bị nhiễm trùng do liên cầu. Trên 80% các BN bị thấp khớp cấp và 95% các BN bị viêm cầu thận cấp do liên cầu (acute streptococcal glomerulonephritis) có tăng nông độ kháng thể kháng Streptolysin-O. Nồng độ ASLO thường sẽ không tăng ở người bị nhiễm trung da do liên cầu.\n2. XN đặc biệt hữu ích để xác định tình trạng đau khớp hay viêm cầu thận có phải là hậu quả của nhiễm trùng liên câu hay không",
    "ebmGuidelines": "",
    "clinicalNote": ""
  },
  {
    "name": "Định lượng RF [máu]",
    "group":  "Sinh Hóa",
    "time": "120 phút / 45 phút",
    "isFeatured": true,
    "concept": "YẾU TỐ DẠNG THẤP\n(Facteurs rhumatoïdes / Rheumatoid factor [RF], Rheumatoid Arthritis Factor)",
    "physiology": "Viêm khớp dạng thấp là một tình trạng viêm tiến triển mạn tính của mô liên kết tác động chủ yếu tới các khớp nhỏ ngoại vi như khớp ngón tay và cổ tay. Đây là một bệnh hệ thống và nó cũng có thể tác động tới các hệ thống khác của cơ thể ngoài biểu hiện viêm khớp.\n\nPhản ứng tự miễn xẩy ra ở mô hoạt dịch, dẫn tới tình trạng sưng đau, nóng, đỏ da và mất chức năng ở vị trí các khớp bị tác động. Trong quá trình viêm, các kháng thể phối hợp cùng với các kháng nguyên tương ứng hình thành các phức hợp miễn dịch. Các phức hợp này lắng đọng tại mô hoạt dịch, kích hoạt phản ứng viêm và dẫn tới tổn thương được thấy tại khớp ở các BN bị viêm khớp dạng thấp.\n\nMột trong các test chẩn đoán đối với viêm khớp dạng thấp là XN tìm yếu tố dạng thấp (rheumatoid factor). Yếu tố dạng thấp (RF) là các globulin miễn dịch (thường gặp nhất là typ IgM) được cơ thể sản xuất ra để chống lại đoạn Fc của các globulin miễn dịch bị biến đổi (dénaturées) thuộc typ IgG. Thường có thể phát hiện được globulin miễn dịch này bằng test latex (gây ngưng kết huyết thanh của BN bằng các hạt latex được phủ IgG người) hay bằng phản ứng Waaler - Rose (gây ngưng kết huyết thanh của BN bằng các hồng cầu cừu được phủ IgG của thỏ). Yếu tố dạng thấp được thấy trong huyết thanh ở 50-95% bệnh nhân người lớn bị viêm khớp dạng thấp. Globulin miễn dịch này xuất hiện trong huyết thanh và dịch khớp chỉ sau khi khởi phát viêm khớp vài tháng và tồn tại nhiều năm sau điều trị.",
    "indication": "XN giúp cho chẩn đoán viêm đa khớp dạng thấp, nhất là đối với các trường hợp khó chẩn đoán lâm sàng.",
    "specimenCollection": "XN được tiến hành trên huyết thanh. Không nhất thiết cần yêu cầu BN phải nhịn ăn trước khi lấy máu XN.",
    "testingMethods": "",
    "ref": "< 14 IU/mL.",
    "alert": "Test tìm yếu tố dạng thấp (+) không đặc hiệu đối với bệnh viêm khớp dạng thấp do cũng có thể gặp test tìm yếu tố dạng thấp (+) ở nhiều bệnh lý khác (Vd: bệnh mô liên kết và các bệnh lý gây viêm như tăng bạch cầu đơn nhân nhiễm trùng, viêm gan mạn hoạt động).\nPhát hiện được yếu tố dạng thấp ở mức hiệu giá thấp không được coi là bằng chứng để chẩn đoán viêm khớp dạng thấp và được thấy ở 4% người bình thường và tới 20% người > 70 tuổi hoàn toàn khỏe mạnh.\nThường thì XN tìm yếu tố dạng thấp được tiến hành đồng thời với XN tìm kháng thể kháng nhân, protein C phản ứng (C - RP), tốc độ lắng hồng cầu và công thức máu.\nBN bị viêm khớp dạng thấp thường có thiếu máu do bệnh mạn tính và tăng tốc độ lắng hồng cầu.\nYếu tố RF có thể được sử dụng cùng với XN tìm kháng thể kháng - SS - A (Ro) và anti - SS - B (La) để chẩn đoán hội chứng Sjogren.",
    "pathologicalMeaning": {
      "increase": "Yếu tố dạng thấp dương tính\nCác nguyên nhân chính thường gặp là:\nViêm khớp dạng thấp.\nMảnh ghép cùng loài (allograft).\nUng thư.\nXơ gan.\nCó ngưng kết tủa lạnh (cryglobulinemia).\nNhiễm cytomegalovirus.\nViêm da cơ (dermatomyosis).\nViêm gan mạn.\nTăng bạch cầu đơn nhân nhiễm trùng.\nBệnh cúm.\nBệnh thận.\nBệnh gan.\nBệnh phổi.\nSốt rét.\nViêm xương khớp.\nBệnh lý quanh cuống răng (periondotal disease).\nBệnh Rubella.\nBệnh sarcoidosis.\nXơ cứng bì.\nHội chứng Sjogren.\nViêm nội tâm mạc bán cấp do vi khuẩn.\nGiang mai.\nLupus ban đỏ hệ thống.\nLao.\nCác nhiễm trùng do virus.\nTăng macroglobulin máu Waldenstrom.",
      "decrease": ""
    },
    "interferingFactors": "Kết quả tìm yếu tố dạng thấp (RF) dương tính giả có thể xẩy ra ở người già và ở các đối tượng vừa mới được tiêm phòng nhiều loại vaccin và/hoặc truyền máu.\nHuyết thanh bệnh nhân có globulin tủa lạnh hoặc tăng nồng độ lipid máu có thể gây kết quả test dương tính giả.\nAspirin và thuốc chống viêm không phải steroid không có tác động giao thoa với XN tìm yếu tố dạng thấp.",
    "benefits": "Lợi ích của xét nghiệm tìm yếu tố dạng thấp (RF)\n1. XN hữu ích để chẩn đoán viêm khớp dạng thấp: Test tìm yếu tố dạng thấp (+) được thấy (với hiệu giá thay đổi) ở 50 - 95% các BN bị viêm đa khớp dạng thấp.\n2. Kháng thể này được sản xuất bởi mô hoạt dịch, có thể xuất hiện trong các bệnh của mô liên kết, bệnh lý tự miễn dịch và trong các nhiễm trùng mạn tính (Vd: viêm nội tâm mạc bán cấp nhiễm khuẩn).",
    "ebmGuidelines": "Các hướng dẫn thực hành lâm sàng dựa trên y học bằng chứng\nTheo tiêu chuẩn của Hội Thấp khớp học Mỹ (American Rheumatism Assocation Criteria) (Arnett, 1988), các tiêu chuẩn để phân loại viêm khớp dạng thấp bao gồm:\n1. Cứng khớp buổi sáng (kéo dài ít nhất 1 giờ trước khi đạt được sự cải thiện tối đa).\n2. Viêm khớp tác động tới ≥ 3 vùng khớp (đồng thời với tình trạng sưng mô mềm hay tràn dịch khớp).\n3. Viêm khớp tác động tới các khớp bàn tay (khớp cổ tay, khớp gian ngón và khớp bàn ngón).\n4. Viêm khớp đối xứng hai bên (tác động đồng thời các khớp ở các hai bên của cơ thể).\n5. Có các hạt dưới da dạng thấp (các hạt dưới da ở vùng củ xương hay mặt duỗi của khớp).\n6. Test tìm yếu tố dạng thấp (+).\n7. Có các thay đổi hình ảnh X quang (các thay đổi này điển hình đối với viêm khớp dạng thấp trên phim chụp cổ tay và bàn tay).\nĐể chẩn đoán viêm khớp dạng thấp, BN phải có ít nhất 4 trong số 7 tiêu chuẩn. Tiêu chuẩn từ 1 đến 4 phải được thể hiện trong vòng ít nhất 6 tuần.",
    "clinicalNote": ""
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
                                          <div className="space-y-3 mt-2">
                                            {selectedTest.pathologicalMeaning.increase.split('\n').filter(line => line.trim()).map((line, i) => (
                                              <div key={i} className="flex items-start gap-4 p-4 bg-red-50/50 dark:bg-red-900/10 rounded-2xl border border-red-100/50 dark:border-red-800/10 hover:bg-red-100/50 transition-colors group/item">
                                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-xs font-black shadow-lg shadow-red-200 group-hover/item:scale-110 transition-transform">
                                                  {i + 1}
                                                </span>
                                                <div dangerouslySetInnerHTML={{ __html: line.replace(/^\d+\.\s*/, '') }} className="flex-1 text-slate-700 dark:text-slate-300 leading-relaxed font-bold italic" />
                                              </div>
                                            ))}
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
                                          <div className="space-y-3 mt-2">
                                            {selectedTest.pathologicalMeaning.decrease.split('\n').filter(line => line.trim()).map((line, i) => (
                                              <div key={i} className="flex items-start gap-4 p-4 bg-blue-50/50 dark:bg-blue-900/10 rounded-2xl border border-blue-100/50 dark:border-blue-800/10 hover:bg-blue-100/50 transition-colors group/item">
                                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-black shadow-lg shadow-blue-200 group-hover/item:scale-110 transition-transform">
                                                  {i + 1}
                                                </span>
                                                <div dangerouslySetInnerHTML={{ __html: line.replace(/^\d+\.\s*/, '') }} className="flex-1 text-slate-700 dark:text-slate-300 leading-relaxed font-bold italic" />
                                              </div>
                                            ))}
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
