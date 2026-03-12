import React from 'react';
import { CustomInput, CustomSelect, CustomTextarea, CustomDatePicker } from '../../../../components';

interface WeighingInstrumentFormProps {
  formData: {
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
    temperature: string;
    humidity: string;
    moneyReceiptNo: string;
    receiptDate: string;
    verificationFee: string;
    carriageCharges: string;
    totalDeposited: string;
    machinePhoto: File | null;
    modelApprovalNo: string;
    verificationLocation: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}

const WeighingInstrumentForm: React.FC<WeighingInstrumentFormProps> = ({ formData, onChange }) => {
  const weighingTypeOptions = [
    { value: '', label: 'Select' },
    { value: 'Counter Scale', label: 'Counter Scale' },
    { value: 'Platform Scale', label: 'Platform Scale' },
    { value: 'Weighbridge', label: 'Weighbridge' },
    { value: 'Crane Scale', label: 'Crane Scale' }
  ];

  const passFailOptions = [
    { value: '', label: 'Select' },
    { value: 'Pass', label: 'Pass' },
    { value: 'Fail', label: 'Fail' }
  ];

  const yesNoOptions = [
    { value: '', label: 'Select' },
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];

  return (
    <>
      {/* Non-Automatic Weighing Instrument Details Card */}
      <div className="card cretificate-card">
        <div className="card-body">
          <h2>Non-Automatic Weighing Instrument Details</h2>
          <div className="row">
            <div className="col-md-4">
              <CustomSelect
                label="Type of Instrument"
                name="weighingType"
                value={formData.weighingType}
                onChange={onChange}
                options={weighingTypeOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Manufacturer / Model / Brand"
                name="weighingManufacturer"
                value={formData.weighingManufacturer}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Serial Number"
                name="weighingSerialNumber"
                value={formData.weighingSerialNumber}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Year of Manufacture"
                name="weighingYearOfManufacture"
                value={formData.weighingYearOfManufacture}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Accuracy Class (III)"
                name="weighingAccuracyClass"
                value={formData.weighingAccuracyClass}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Maximum Capacity (Max upto 150 kg)"
                name="maxCapacity"
                value={formData.maxCapacity}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Minimum Capacity (Min)"
                name="minCapacity"
                value={formData.minCapacity}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Verification Scale Interval (e)"
                name="verificationScaleInterval"
                value={formData.verificationScaleInterval}
                onChange={onChange}
              />
            </div>            
          </div>
        </div>
      </div>

      {/* Metrological Characteristics */}
      <div className="card cretificate-card">
        <div className="card-body">
          <h2>Metrological Characteristics</h2>
          <div className="row">
            <div className="col-md-4">
              <CustomInput
                label="Unit of Measurement: kg"
                name="unitOfMeasurement"
                value={formData.unitOfMeasurement}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Actual Scale Interval (d)"
                name="actualScaleInterval"
                value={formData.actualScaleInterval}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="No. of Verification Intervals (n = Max / e)"
                name="numberOfVerificationIntervals"
                value={formData.numberOfVerificationIntervals}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Maximum Permissible Error (MPE)"
                name="maxPermissibleError"
                value={formData.maxPermissibleError}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Verification & Performance Checks */}
      <div className="card cretificate-card">
        <div className="card-body">
          <h2>Verification & Performance Checks</h2>
          <div className="row">
            <div className="col-md-4">
              <CustomSelect
                label="Visual Examination (Pass / Fail)"
                name="visualExaminationWeighing"
                value={formData.visualExaminationWeighing}
                onChange={onChange}
                options={passFailOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="Zero Setting / Zero Tracking Test (Pass / Fail)"
                name="zeroSettingTest"
                value={formData.zeroSettingTest}
                onChange={onChange}
                options={passFailOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="Eccentricity Test (Pass / Fail)"
                name="eccentricityTest"
                value={formData.eccentricityTest}
                onChange={onChange}
                options={passFailOptions}
              />
            </div>

            <div className="col-md-4">
              <CustomSelect
                label="Repeatability Test (Pass / Fail)"
                name="repeatabilityTest"
                value={formData.repeatabilityTest}
                onChange={onChange}
                options={passFailOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="Accuracy / Weighing Performance Test (Pass / Fail)"
                name="accuracyTestWeighing"
                value={formData.accuracyTestWeighing}
                onChange={onChange}
                options={passFailOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="Tare Device Test (Pass / Fail)"
                name="tareDeviceTest"
                value={formData.tareDeviceTest}
                onChange={onChange}
                options={passFailOptions}
              />
            </div>

            <div className="col-md-4">
              <CustomSelect
                label="Overall Verification Result (Pass / Fail)"
                name="overallVerificationResult"
                value={formData.overallVerificationResult}
                onChange={onChange}
                options={passFailOptions}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Operating & Environmental Conditions */}
      <div className="card cretificate-card">
        <div className="card-body">
          <h2>Operating & Environmental Conditions</h2>
          <div className="row">
            <div className="col-md-4">
              <CustomInput
                label="Ambient Temperature (°C)"
                name="temperature"
                value={formData.temperature}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Relative Humidity (%)"
                name="humidity"
                value={formData.humidity}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Supply Voltage (if electronic)"
                name="supplyVoltage"
                value={formData.supplyVoltage}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sealing & Security */}
      <div className="card cretificate-card">
        <div className="card-body">
          <h2>Sealing & Security</h2>
          <div className="row">
            <div className="col-md-4">
              <CustomSelect
                label="Verification Seal Affixed"
                name="verificationSealAffixed"
                value={formData.verificationSealAffixed}
                onChange={onChange}
                options={yesNoOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Seal Identification No(s)"
                name="sealIdentificationNo"
                value={formData.sealIdentificationNo}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Software Identification / Version / Checksum (if applicable)"
                name="softwareVersion"
                value={formData.softwareVersion}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Verification Decision */}
      <div className="card cretificate-card">
        <div className="card-body">
          <h2>Verification Decision</h2>
          <div className="row">
            <div className="col-md-4">
              <CustomSelect
                label="Instrument conforms to OIML Recommendation / LM (Gen) Rules, 2011"
                name="oimlConformity"
                value={formData.oimlConformity}
                onChange={onChange}
                options={yesNoOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="Verified and stamped for use in commercial transactions (Yes / No)"
                name="verifiedStamped"
                value={formData.verifiedStamped}
                onChange={onChange}
                options={yesNoOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Remarks (if any)"
                name="remarks"
                value={formData.remarks}
                onChange={onChange}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Verification & Charges */}
      <div className="card cretificate-card">
        <div className="card-body">
          <h2>Verification & Charges</h2>
          <div className="row">
            <div className="col-md-4">
              <CustomInput
                label="Money Receipt No and Dated"
                name="moneyReceiptNo"
                value={formData.moneyReceiptNo}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomDatePicker
                label="Date"
                name="receiptDate"
                value={formData.receiptDate}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Verification Fee (Rs + GST)"
                name="verificationFee"
                value={formData.verificationFee}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Carriage/Conveyance,adjusting Charges,etc.(+ GST)"
                name="carriageCharges"
                value={formData.carriageCharges}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Total deposited vide money"
                name="totalDeposited"
                value={formData.totalDeposited}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Machine Photo with Serial No"
                type="file"
                name="machinePhoto"
                onChange={onChange}
                accept="image/*"
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Model Approval No"
                name="modelApprovalNo"
                value={formData.modelApprovalNo}
                onChange={onChange}
              />
            </div>
            <div className="col-md-6">
              <label>Machine Photo with Serial No</label>
              <div>
                <div className="form-check-inline input-radio-box mt-2">
                  <input className="form-check-input" type="checkbox" value="In the premises of GATC" id="flexCheckDefault" name="verificationLocation" onChange={onChange} />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    In the premises of GATC
                  </label>
                </div>
                <div className="form-check-inline input-radio-box">
                  <input className="form-check-input" type="checkbox" value="In situ / at the place of user" id="flexCheckChecked" name="verificationLocation" onChange={onChange} />
                  <label className="form-check-label" htmlFor="flexCheckChecked">
                    In situ / at the place of user
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeighingInstrumentForm;
