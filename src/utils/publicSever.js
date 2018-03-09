import store from '@/store'
let access_token = store.getters.access_token;
/**
 *** 导入excel
 **/
export let fileImport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/fin/finTransactionFlowingPos/import?access_token=';//POS刷卡流水导入
export let thirdFileImport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/fin/finTransactionFlowingThirdparty/import?access_token=';//第三方交易流水导入
export let bankFileImport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/fin/finTransactionFlowingBank/import?access_token=';//银行转账流水导入
export let paperyBillFileImport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/fin/finReceipts/import?access_token=';//纸质票据导入
export let sysFileImport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/marketing/orderTradeRecord/importInvoice?access_token=';//系统交易流水导入
export let importTeachingGroup = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/teaching/eduTeachingGroup/importTeachingGroup?access_token=';//系统交易流水导入
export let importRefund = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/finRefundRecheck/importStatus?access_token=';//系统交易流水导入

export let finExpenseRecheckImportStatus = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/fin/finExpenseRecheck/importStatus?access_token=';//支出复核导入接口
/**
 *** 财务导出excel
 **/
export let exportPrintInvoice = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/marketing/orderTradeRecord/exportPrintInvoice?access_token=';//系统交易流水导入
export let exportStoreIncomeStatistic = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/fin/finReceiptRecheck/exportStoreIncomeStatistic?access_token=';//门店收入统计
export let exportGoodsSalesStatistic = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/fin/finReceiptRecheck/exportGoodsSalesStatistic?access_token=';//商品销售统计
export let exportPaymentChannelIncomeStatistic = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/fin/finReceiptRecheck/exportPaymentChannelIncomeStatistic?access_token=';//商品销售统计

export let exportFinPosExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/fin/finPos/export?access_token=';  // POS 终端机管理
export let exportFinTransactionFlowingPos = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/fin/finTransactionFlowingPos/export?access_token=';  // POS 机刷卡流水
export let exportFinTransactionFlowingBank = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/fin/finTransactionFlowingBank/export?access_token=';  // 银行转账流水管理
export let exportFinTransactionFlowingThirdparty = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/fin/finTransactionFlowingThirdparty/export?access_token=';  // 第三方交易流水管理
export let exportFinReceipts = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/fin/finReceipts/export?access_token=';  // 纸质票据管理导出
export let exportReceiptRecheck = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/fin/finReceiptRecheck/exportReceiptRecheck?access_token=';  // 收款复核 导出
export let exportFinRefundRecheck = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/finRefundRecheck/export?access_token=';  // 退费复核 导出
export let exportfinExpenseRecheck = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/finExpenseRecheck/export?access_token=';  // 支出复核
export let exportFinTransactionFlowingCash = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/marketing/orderTradeRecord/export?access_token=';  // 系统交易流水管理 导出


/**
 * 下载导入模板
 */
export let downSysImportTemplate='http://o7d94lzvx.bkt.clouddn.com//FpmAnlh5HsUvbcyE1_UOKREfZaxu%2F%E5%8F%91%E7%A5%A8%E4%BF%A1%E6%81%AF%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xlsx';//系统交易流水导入模板
export let downPosImportTemplate='http://o7d94lzvx.bkt.clouddn.com//FmKHXpfISrJsLxFmK7hvq18SPHkD%2FPOS%E6%B5%81%E6%B0%B4%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xlsx';//POS流水导入模板
export let downExamReplyImportTemplate='http://o7d94lzvx.bkt.clouddn.com//Fj9VnGIQS3cw6CqL6M9SyDBS58Ja%2F%E8%80%83%E8%AF%95%E9%A2%84%E6%89%B9%E5%A4%8D%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xls';//考试预批复导入模板
export let downExamApprovalImportTemplate='http://o7d94lzvx.bkt.clouddn.com//FhZkifqwQ74I0cV4eCIlrcwoI0pp%2F%E6%8A%A5%E8%80%83%E6%89%B9%E5%A4%8D%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xlsx';//考试批复导入模板
export let downExamResultImportTemplate='http://o7d94lzvx.bkt.clouddn.com//Fj3OYO61-i1Wgwg_8v3S3_Hj_f6R%2F%E8%80%83%E8%AF%95%E6%88%90%E7%BB%A9%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xlsx';//考试成绩导入模板
export let downBankImportTemplate='http://o7d94lzvx.bkt.clouddn.com//FoMLoFnkWyHbKg713teDIpWolTdo%2F%E9%93%B6%E8%A1%8C%E8%BD%AC%E8%B4%A6%E6%B5%81%E6%B0%B4%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xlsx';//银行转账流水导入模板
export let downThirdImportTemplate='http://o7d94lzvx.bkt.clouddn.com//FnGnvDJi2FBLt_Fo1pJQOrjJBGzJ%2F%E7%AC%AC%E4%B8%89%E6%96%B9%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xlsx';//第三方导入模板
export let downPaperyBillImportTemplate='http://o7d94lzvx.bkt.clouddn.com//FgWEW1biJLJOe-o8epaZaNegGr29%2F%E7%BA%B8%E8%B4%A8%E7%A5%A8%E6%8D%AE%E6%A8%A1%E6%9D%BF.xlsx';//纸质票据模板
export let downInvoiceImportTemplate='http://o7d94lzvx.bkt.clouddn.com//FpmAnlh5HsUvbcyE1_UOKREfZaxu%2F%E5%8F%91%E7%A5%A8%E4%BF%A1%E6%81%AF%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xlsx';//发票信息导入模板
export let downICImportTemplate='http://o7d94lzvx.bkt.clouddn.com//Fi-pV8vCTr6s2-rp48WQbwO_rodb%2FIC%E5%8D%A1%E5%8F%91%E5%8D%A1%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xlsx';//IC卡导入模板
export let downAcceptNumImportTemplate='http://o7d94lzvx.bkt.clouddn.com//Fv5511kQ1glt0IDt2-Sc_6LzSOyH%2F%E8%80%83%E5%9C%BA%E5%8F%97%E7%90%86%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xls';//考场受理号导入模板
export let downRefundImportTemplate='http://o7d94lzvx.bkt.clouddn.com//FmrfCtmOEKiSqXugem6doezeG8BU%2F%E9%80%80%E8%B4%B9%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xlsx';//退费导入模板
export let downDisbursementImportTemplate='http://o7d94lzvx.bkt.clouddn.com//FjpiU9vo_a3NfMy7soSmTwhkDkAJ%2F%E6%94%AF%E5%87%BA%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF.xlsx';//支出导入模板

/**
 *** 车务导出excel
 **/
export let exportBasicInfo = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/car/carInfo/export?access_token=';//导出车辆基础信息excel
export let exportFuelDiary = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/car/refuelingRecord/export?access_token=' ;//导出加油记录excel
export let exportAnnualRecord = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/car/annualRecord/export?access_token=';//导出年审记录excel
export let exportInsurance = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/car/insuranceRecord/export?access_token=';//导出保险记录excel
export let exportAccidentClaims = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/car/accidentClaimSettlement/export?access_token=';//导出事故理赔记录excel
export let exportCarStatistics = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/car/carInfo/exportCarStatistics?access_token=';//导出车务统计excel
export let manufacturerBrandExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/car/manufacturerBrand/export?access_token=';
export let oilCardInfoExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/car/oilCardInfo/export?access_token=';
export let parkingInfoExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/car/parkingInfo/export?access_token=' ;
export let usePropertiesExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/car/useProperties/export?access_token=';
export let insuranceRecordImport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/car/insuranceRecord/import?access_token=';
export let refuelingRecordImport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/car/refuelingRecord/import?access_token=';
export let parkingChangeExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/car/parkingChange/export?access_token='; // 停车点变更申请导出









export let exportScrapedExpires = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/car/carScrapReminder/export?access_token=';//导出报废到期提醒excel
export let exportYearExpires = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/car/yearLimited/export?access_token=';//导出年审到期提醒excel
export let exportInsuranceExpires = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/car/insuranceReminder/export?access_token=';//导出保险到期提醒excel

export let exportCarDispatch = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/car/carTransfer/export?access_token=';//导出车辆调动申请excel
export let exportCarParkChange = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/car/carParkingChange/export?access_token=';//导出车辆停车点变更excel

/**
 *** 牌证导出excel
 **/
export let certStudentChangeSchoolDataExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certStudentChangeSchoolData/export?access_token=' ;
export let certAcceptSudentDataTransferExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certAcceptSudentDataTransfer/export?access_token=';
export let certExamPlaceProjectBatchExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certExamPlaceProjectBatch/export?access_token=' ;
export let certFirstProjectBatchExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certFirstProjectBatch/export?access_token=';
export let certSecondProjectBatchExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certSecondProjectBatch/export?access_token=';
export let certThirdProjectBatchExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certThirdProjectBatch/export?access_token=';
export let certFourthProjectBatchExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certFourthProjectBatch/export?access_token=';
export let certGraduateProjectBatchExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certGraduateProjectBatch/export?access_token=';
export let certPayCostExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certPayCost/export?access_token=';
export let certExamProjectBatchExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certExamProjectBatch/export?access_token=' ;
export let certTheoryCourseExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certTheoryCourse/export?access_token=';
export let certArchTransferExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certStudentArchiveTransfer/export?access_token=';
export let certArchTransferDetailExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certStudentArchiveTransferDetail/export?access_token=';
export let certStudentInfoChangeExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certStudentInfoChangeApply/export?access_token=' ;
export let certClassroomExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certClassroom/export?access_token=';
export let certServiceInfoExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certServiceInfo/export?access_token=';
export let certStudentStoreChangeApplyExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certStudentStoreChangeApply/export?access_token=';  // 转店申请
export let certStudentTheoryCourseChangeApplyExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certStudentTheoryCourseChangeApply/export?access_token=';  // 上课情况变更
export let certStudentExamApprovalChangeApplyExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certStudentExamApprovalChangeApply/export?access_token=';  // 考试批复
export let certStudentExamScoreChangeApplyExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certStudentExamScoreChangeApply/export?access_token=';  // 考试成绩
export let certTradeCancellationApplyExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/marketing/certTradeCancellationApply/export?access_token=';  // 交易作废申请
export let certStudentDiscountApplyExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certStudentDiscountApply/export?access_token=' ;  // 减免申请
export let certStudentExpenditureApplyExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certStudentExpenditureApply/export?access_token=';  // 支出申请
export let certStudentRefundApplyExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certStudentRefundApply/export?access_token=';  // 退费申请
export let certStudentCoachChangeApplyExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certStudentCoachChangeApply/export?access_token=';  // 变更教练管理
export let certStudentProjectRevokeApplyExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certStudentProjectRevokeApply/export?access_token=';  // 办证撤销管理
export let CertStudentLogoutApplyExport = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/CertStudentLogoutApply/export?access_token=';  // 学员注销管理
export let exportDetail = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certExamProjectBatch/exportDetail?access_token=';



/**
 *** 牌证导入excel
 **/
export let importAcceptNum = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certExamPlaceProjectBatch/importAcceptNum?access_token=' ;

export let importExamApprovel = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certExamProjectBatch/importExamApprovel?access_token=';
export let importGradeApprovel = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certExamProjectBatch/importGradeApprovel?access_token=';
export let importPreExamApprovel = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certExamProjectBatch/importPreExamApprovel?access_token=';


/**
 * 教务教练列表导出
 */

export let exportLoadStudentDetail = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/teaching/eduLoadStudent/exportLoadStudentDetail?access_token=';//导出教练负荷-学员详情
export let exportExamInfo = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certExamGradeInfo/exportExamGradeInfo?access_token=';//导出教练负荷学员-考试详情
export let exportLoadStudentApprovalInfo = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/cert/certExamApprovalInfo/exportGoodsUnitList?access_token=';//导出教练负荷学员-报考详情

/**
 * 营销导出
 */

export let exportComodity =  window._Host.BASE_API + window._Host.BASE_CONTEXT + '/marketing/marketGoodsUnit/exportGoodsUnitList?access_token=';//导出商品单元管理
export let exportGoods =  window._Host.BASE_API + window._Host.BASE_CONTEXT + '/marketing/marketGoods/exportGoodsList?access_token=';//导出商品管理|商品核销管理
export let exportSetMeal = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/marketing/marketCombo/exportSetMeal?access_token=';//导出商品套餐
export let exportClass = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/marketing/marketClass/exportClassList?access_token=';//导出班别
export let exportAgencySell = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/marketing/marketAgencySell/exportAgencySellList?access_token=';//导出代销商家
export let exportMarketOrder = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/marketing/marketOrder/exportMarketOrderList?access_token=';//导出订单管理
export let exportStore = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/marketing/marketStore/exportMStoreList?access_token=';//导出门店
export let exportMarketActivity = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/marketing/marketActivity/exportMarketOrderList?access_token=';//导出营销活动
export let exportRegionEnroll = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/marketing/marketEnrollQuotaArea/exportRegionEnrollList?access_token=';//导出片区招生指标
export let exportActivity = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/marketing/marketOutreachActivity/exportActivityList?access_token=';//导出外展活动
/**
 *** 教务导出excel
 **/
export let teachingEduCoach = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/teaching/eduCoach/export?access_token=';  // 教练列表
export let eduTeachingGroup = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/teaching/eduTeachingGroup/export?access_token=';  // 导出教学组管理
export let exportEduCoachCopy = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/teaching/eduCopy/exportEduCoachCopy?access_token=';  // 导出教练列表备份
export let exportEduGroupCopy = window._Host.BASE_API + window._Host.BASE_CONTEXT + '/teaching/eduCopy/exportEduGroupCopy?access_token=';  // 导出教学组备份
export let exportStudentAssign = window._Host.BASE_API+ window._Host.BASE_CONTEXT + '/teaching/eduLoadStudent/exportStudentAssign?access_token=';  // 导出学员分配记录
export let eduStudentAssignExport = window._Host.BASE_API + window._Host.BASE_CONTEXT+ '/teaching/eduStudentAssign/export?access_token=';  // 导出什么鬼...













