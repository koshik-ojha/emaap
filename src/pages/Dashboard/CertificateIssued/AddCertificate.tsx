import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { CustomInput, CustomSelect, CustomTextarea, CustomButton, CustomDatePicker } from '../../../components';
import BreathAnalyzerForm from './InstrumentType/BreathAnalyzerForm';
import EnergyMeterForm from './InstrumentType/EnergyMeterForm';
import GasMeterForm from './InstrumentType/GasMeterForm';
import WeighingInstrumentForm from './InstrumentType/WeighingInstrumentForm';
import TapeMeasureForm from './InstrumentType/TapeMeasureForm';
import '../Dashboard.css';

interface CertificateUploadFormData {
  instrumentName: string;
  gatcCertificateNo: string;
  generatedCertificate: string;
  belongsTo: string;
  uploadAddress: string;
  mobileNo: string;
  validityDate: string;
  upload: File | null;
  remark: string;
}

interface AddCertificateFormData {
  instrumentType: string;
  belongTo: string;
  address: string;
  state: string;
  district: string;
  pincode: string;
  mobile: string;
  // Breath Analyzer fields
  analyzerType: string;
  manufacturer: string;
  serialNumber: string;
  yearOfManufacture: string;
  measuringRange: string;
  scaleInterval: string;
  visualExamination: string;
  accuracyTest: string;
  zeroCheck: string;
  // Energy Meter fields
  meterType: string;
  meterManufacturer: string;
  meterSerialNumber: string;
  meterYearOfManufacture: string;
  ratedVoltage: string;
  ratedCurrent: string;
  frequency: string;
  meterConstant: string;
  numberOfPhases: string;
  meterAccuracyClass: string;
  maximumPermissibleError: string;
  noLoadTest: string;
  startingCurrentTest: string;
  accuracyTestResult: string;
  functionalChecks: string;
  supplyVoltageDuringTest: string;
  sealingProvided: string;
  softwareIdentification: string;
  instrumentConforms: string;
  verifiedAndStamped: string;
  validUpTo: string;
  
  // Gas Meter fields
  gasMeterType: string;
  gasMeterManufacturer: string;
  gasMeterSerialNumber: string;
  gasMeterYearOfManufacture: string;
  maxFlowRate: string;
  minFlowRate: string;
  transitionFlowRate: string;
  gasMeterAccuracyClass: string;
  sizeDN: string;
  gValue: string;
  gasType: string;
  indicatingDeviceResolution: string;
  accuracyTestQmin: string;
  accuracyTestQt: string;
  accuracyTestQmax: string;
  overallPerformanceResult: string;
  ambientTemperature: string;
  gasTemperature: string;
  operatingPressure: string;
  relativeHumidity: string;
  moneyReceiptNo: string;
  // Non-Automatic Weighing Instrument fields
  weighingType: string;
  weighingManufacturer: string;
  weighingSerialNumber: string;
  weighingYearOfManufacture: string;
  maxCapacity: string;
  minCapacity: string;
  verificationScaleInterval: string;
  weighingAccuracyClass: string;
  unitOfMeasurement: string;
  actualScaleInterval: string;
  numberOfVerificationIntervals: string;
  maxPermissibleError: string;
  visualExaminationWeighing: string;
  zeroSettingTest: string;
  eccentricityTest: string;
  repeatabilityTest: string;
  accuracyTestWeighing: string;
  tareDeviceTest: string;
  overallVerificationResult: string;
  supplyVoltage: string;
  verificationSealAffixed: string;
  sealIdentificationNo: string;
  softwareVersion: string;
  oimlConformity: string;
  verifiedStamped: string;
  remarks: string;
  // Tape Measure fields
  tapeType: string;
  tapeManufacturer: string;
  tapeSerialNumber: string;
  tapeYearOfManufacture: string;
  tapeLength: string;
  graduation: string;
  tapeMaterial: string;
  tapeWidth: string;
  tapeAccuracyClass: string;
  referenceTemperature: string;
  visualExaminationTape: string;
  nominalLengthAccuracyTest: string;
  scaleIntervalAccuracyTest: string;
  endHookZeroErrorCheck: string;
  overallAccuracyResult: string;
  verificationMarkAffixed: string;
  sealIdentificationNoTape: string;
  instrumentConformsTape: string;
  verifiedStampedTape: string;
  remarksTape: string;
  // Common fields
  temperature: string;
  humidity: string;
  receiptNo: string;
  receiptDate: string;
  verificationFee: string;
  carriageCharges: string;
  totalDeposited: string;
  modelApprovalNo: string;
  verificationLocation: string;
  machinePhoto: File | null;
}

interface SelectOption {
  value: string;
  label: string;
}

const AddCertificate: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const preselectedType = (location.state as { instrumentType?: string })?.instrumentType || '';
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<AddCertificateFormData>({
    instrumentType: preselectedType,
    belongTo: '',
    address: '',
    state: '',
    district: '',
    pincode: '',
    mobile: '',
    // Breath Analyzer fields
    analyzerType: '',
    manufacturer: '',
    serialNumber: '',
    yearOfManufacture: '',
    measuringRange: '',
    scaleInterval: '',
    visualExamination: '',
    accuracyTest: '',
    zeroCheck: '',
    // Energy Meter fields
    meterType: '',
    meterManufacturer: '',
    meterSerialNumber: '',
    meterYearOfManufacture: '',
    ratedVoltage: '',
    ratedCurrent: '',
    frequency: '',
    meterConstant: '',
    numberOfPhases: '',
    meterAccuracyClass: '',
    maximumPermissibleError: '',
    noLoadTest: '',
    startingCurrentTest: '',
    accuracyTestResult: '',
    functionalChecks: '',
    supplyVoltageDuringTest: '',
    sealingProvided: '',
    softwareIdentification: '',
    instrumentConforms: '',
    verifiedAndStamped: '',
    validUpTo: '',
    // Gas Meter fields
    gasMeterType: '',
    gasMeterManufacturer: '',
    gasMeterSerialNumber: '',
    gasMeterYearOfManufacture: '',
    maxFlowRate: '',
    minFlowRate: '',
    transitionFlowRate: '',
    gasMeterAccuracyClass: '',
    sizeDN: '',
    gValue: '',
    gasType: '',
    indicatingDeviceResolution: '',
    accuracyTestQmin: '',
    accuracyTestQt: '',
    accuracyTestQmax: '',
    overallPerformanceResult: '',
    ambientTemperature: '',
    gasTemperature: '',
    operatingPressure: '',
    relativeHumidity: '',
    moneyReceiptNo: '',
    // Non-Automatic Weighing Instrument fields
    weighingType: '',
    weighingManufacturer: '',
    weighingSerialNumber: '',
    weighingYearOfManufacture: '',
    maxCapacity: '',
    minCapacity: '',
    verificationScaleInterval: '',
    weighingAccuracyClass: '',
    unitOfMeasurement: '',
    actualScaleInterval: '',
    numberOfVerificationIntervals: '',
    maxPermissibleError: '',
    visualExaminationWeighing: '',
    zeroSettingTest: '',
    eccentricityTest: '',
    repeatabilityTest: '',
    accuracyTestWeighing: '',
    tareDeviceTest: '',
    overallVerificationResult: '',
    supplyVoltage: '',
    verificationSealAffixed: '',
    sealIdentificationNo: '',
    softwareVersion: '',
    oimlConformity: '',
    verifiedStamped: '',
    remarks: '',
    // Tape Measure fields
    tapeType: '',
    tapeManufacturer: '',
    tapeSerialNumber: '',
    tapeYearOfManufacture: '',
    tapeLength: '',
    graduation: '',
    tapeMaterial: '',
    tapeWidth: '',
    tapeAccuracyClass: '',
    referenceTemperature: '',
    visualExaminationTape: '',
    nominalLengthAccuracyTest: '',
    scaleIntervalAccuracyTest: '',
    endHookZeroErrorCheck: '',
    overallAccuracyResult: '',
    verificationMarkAffixed: '',
    sealIdentificationNoTape: '',
    instrumentConformsTape: '',
    verifiedStampedTape: '',
    remarksTape: '',
    // Common fields
    temperature: '',
    humidity: '',
    receiptNo: '',
    receiptDate: '',
    verificationFee: '',
    carriageCharges: '',
    totalDeposited: '',
    modelApprovalNo: '',
    verificationLocation: '',
    machinePhoto: null
  });

  const [certificateData, setCertificateData] = useState<CertificateUploadFormData>({
    instrumentName: '',
    gatcCertificateNo: '',
    generatedCertificate: '',
    belongsTo: '',
    uploadAddress: '',
    mobileNo: '',
    validityDate: '',
    upload: null,
    remark: ''
  });

  const instrumentTypes: SelectOption[] = [
    { value: '', label: 'Select' },
    { value: 'Breath Analyzer', label: 'Breath Analyzer' },
    { value: 'Energy Meter', label: 'Energy Meter' },
    { value: 'Gas Meter', label: 'Gas Meter' },
    { value: 'Non-Automatic Weighing Instrument of Accuracy Class', label: 'Non-Automatic Weighing Instrument of Accuracy Class' },
    { value: 'Tape Measure', label: 'Tape Measure' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, files } = target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? (files ? files[0] : null) : value
    }));
    if (name === 'instrumentType') {
      navigate('/dashboard/add-certificate', { state: { instrumentType: value }, replace: true });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Show the modal instead of navigating directly
    setShowModal(true);
  };

  const handleCertificateChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, files } = target;
    setCertificateData(prev => ({
      ...prev,
      [name]: type === 'file' ? (files ? files[0] : null) : value
    }));
  };

  const handleGenerateCertificate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Certificate Data:', certificateData);
    console.log('Form Data:', formData);
    // Navigate to certificate view with both form data and certificate data
    navigate('/dashboard/certificate-view', { state: { ...formData, ...certificateData } });
  };

  return (
    <>
      <h1 className="mb-0 title-fm">Instrument Generate Certificate</h1>

      <form onSubmit={handleSubmit}>
        {/* Basic Information Card */}
        <div className="card cretificate-card">
          <div className="card-body mb-0">
            <div className="row">
              <div className="col-md-4">
                <CustomSelect
                  label="Instrument Type"
                  name="instrumentType"
                  value={formData.instrumentType}
                  onChange={handleChange}
                  required
                  options={instrumentTypes}
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Belong To"
                  name="belongTo"
                  value={formData.belongTo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Mobile No"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-12">
                <CustomTextarea
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <CustomSelect
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  options={[{ value: '', label: 'Select' }]}
                />
              </div>
              <div className="col-md-4">
                <CustomSelect
                  label="District"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  options={[{ value: '', label: 'Select' }]}
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
              </div>              
            </div>
          </div>
        </div>

        {/* Breath Analyzer Form */}
        {formData.instrumentType === 'Breath Analyzer' && (
          <BreathAnalyzerForm formData={formData} onChange={handleChange} />
        )}

        {/* Energy Meter Form */}
        {formData.instrumentType === 'Energy Meter' && (
          <EnergyMeterForm formData={formData} onChange={handleChange} />
        )}

        {/* Gas Meter Form */}
        {formData.instrumentType === 'Gas Meter' && (
          <GasMeterForm formData={formData} onChange={handleChange} />
        )}

        {/* Weighing Instrument Form */}
        {formData.instrumentType === 'Non-Automatic Weighing Instrument of Accuracy Class' && (
          <WeighingInstrumentForm formData={formData} onChange={handleChange} />
        )}

        {/* Tape Measure Form */}
        {formData.instrumentType === 'Tape Measure' && (
          <TapeMeasureForm formData={formData} onChange={handleChange} />
        )}


        {/* Submit Button */}
        {formData.instrumentType && (
          <div className="mt-3 text-center">
            <CustomButton type="submit" variant="primary" className='w-auto px-5 text-capitalize'>
              Submit Certificate Details
            </CustomButton>
          </div>
        )}
      </form>

      {/* Certificate Upload Modal */}
      {showModal && (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Instrument Certificate Upload</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <form onSubmit={handleGenerateCertificate}>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6">
                      <CustomInput
                        label="Instrument Name"
                        name="instrumentName"
                        value={certificateData.instrumentName}
                        onChange={handleCertificateChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <CustomInput
                        label="Gatc CertificateNo"
                        name="gatcCertificateNo"
                        value={certificateData.gatcCertificateNo}
                        onChange={handleCertificateChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <CustomInput
                        label="Generate Certificate"
                        name="generatedCertificate"
                        value={certificateData.generatedCertificate}
                        onChange={handleCertificateChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <CustomInput
                        label="Belongs To"
                        name="belongsTo"
                        value={certificateData.belongsTo}
                        onChange={handleCertificateChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <CustomTextarea
                        label="Address"
                        name="uploadAddress"
                        value={certificateData.uploadAddress}
                        onChange={handleCertificateChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <CustomInput
                        label="Mobile No"
                        name="mobileNo"
                        value={certificateData.mobileNo}
                        onChange={handleCertificateChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <CustomDatePicker
                        label="Validity Date"
                        name="validityDate"
                        value={certificateData.validityDate}
                        onChange={handleCertificateChange}
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <CustomInput
                        label="Upload"
                        type="file"
                        name="upload"
                        onChange={handleCertificateChange}
                        accept=".pdf,.doc,.docx,image/*"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <CustomTextarea
                        label="Remark"
                        name="remark"
                        value={certificateData.remark}
                        onChange={handleCertificateChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center mb-4">
                  <CustomButton type="submit" variant="primary" className='text-capitalize w-auto px-5'>
                    Generate Certificate
                  </CustomButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddCertificate;
