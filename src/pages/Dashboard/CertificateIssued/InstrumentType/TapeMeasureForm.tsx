import React from 'react';
import { CustomInput, CustomSelect, CustomDatePicker } from '../../../../components';

interface TapeMeasureFormProps {
  formData: {
    tapeType: string;
    tapeManufacturer: string;
    tapeSerialNumber: string;
    tapeYearOfManufacture: string;
    tapeLength: string;
    graduation: string;
    tapeMaterial: string;
    tapeWidth: string;
    tapeAccuracyClass: string;
    unitOfMeasurement: string;
    scaleInterval: string;
    referenceTemperature: string;
    maxPermissibleError: string;
    visualExaminationTape: string;
    nominalLengthAccuracyTest: string;
    scaleIntervalAccuracyTest: string;
    endHookZeroErrorCheck: string;
    overallAccuracyResult: string;
    temperature: string;
    humidity: string;
    verificationMarkAffixed: string;
    sealIdentificationNoTape: string;
    instrumentConformsTape: string;
    verifiedStampedTape: string;
    remarksTape: string;
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

const TapeMeasureForm: React.FC<TapeMeasureFormProps> = ({ formData, onChange }) => {
  const tapeTypeOptions = [
    { value: '', label: 'Select' },
    { value: 'Steel Tape', label: 'Steel Tape' },
    { value: 'Fiber Tape', label: 'Fiber Tape' },
    { value: 'Measuring Tape', label: 'Measuring Tape' }
  ];

  const tapeMaterialOptions = [
    { value: '', label: 'Select' },
    { value: 'Steel', label: 'Steel' },
    { value: 'Fiber Glass', label: 'Fiber Glass' },
    { value: 'Cloth', label: 'Cloth' },
    { value: 'Plastic', label: 'Plastic' },
    { value: 'Other', label: 'Other' }
  ];

  const yesNoOptions = [
    { value: '', label: 'Select' },
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];

  const passFailOptions = [
    { value: '', label: 'Select' },
    { value: 'Pass', label: 'Pass' },
    { value: 'Fail', label: 'Fail' }
  ];

  return (
    <>
      {/* Tape Measure Details Card */}
      <div className="card cretificate-card">
        <div className="card-body">
          <h2>Tape Measure Details</h2>
          <div className="row">
            <div className="col-md-4">
              <CustomSelect
                label="Type of Instrument"
                name="tapeType"
                value={formData.tapeType}
                onChange={onChange}
                options={tapeTypeOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Manufacturer & Model / Brand / Series"
                name="tapeManufacturer"
                value={formData.tapeManufacturer}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Serial Number"
                name="tapeSerialNumber"
                value={formData.tapeSerialNumber}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Nominal Length"
                name="tapeLength"
                value={formData.tapeLength}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Width"
                name="tapeWidth"
                value={formData.tapeWidth}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Accuracy Class(I/II/III)"
                name="tapeAccuracyClass"
                value={formData.tapeAccuracyClass}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="Year of Manufacturer"
                name="tapeYearOfManufacture"
                value={formData.tapeYearOfManufacture}
                onChange={onChange}
                options={yesNoOptions}
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
                label="Unit of Measurement: metre(m)"
                name="unitOfMeasurement"
                value={formData.unitOfMeasurement}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Scale Interval"
                name="scaleInterval"
                value={formData.scaleInterval}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="Refrence Temperature:20±5°C"
                name="referenceTemperature"
                value={formData.referenceTemperature}
                onChange={onChange}
                options={yesNoOptions}
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
                name="visualExaminationTape"
                value={formData.visualExaminationTape}
                onChange={onChange}
                options={passFailOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="Nominal Length Accuracy Test (Pass / Fail)"
                name="nominalLengthAccuracyTest"
                value={formData.nominalLengthAccuracyTest}
                onChange={onChange}
                options={passFailOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="Scale Interval Accuracy Test (Pass / Fail)"
                name="scaleIntervalAccuracyTest"
                value={formData.scaleIntervalAccuracyTest}
                onChange={onChange}
                options={passFailOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="End Hook/Zero Error Check(Pass/Fail)"
                name="endHookZeroErrorCheck"
                value={formData.endHookZeroErrorCheck}
                onChange={onChange}
                options={passFailOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="Overall Accuracy Result (Pass / Fail)"
                name="overallAccuracyResult"
                value={formData.overallAccuracyResult}
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
              <CustomSelect
                label="Ambient Temperature (°C)"
                name="temperature"
                value={formData.temperature}
                onChange={onChange}
                options={yesNoOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="Relative Humidity (%)"
                name="humidity"
                value={formData.humidity}
                onChange={onChange}
                options={yesNoOptions}
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
                label="Verification Mark/Stamp  Affixed (Yes/No)"
                name="verificationMarkAffixed"
                value={formData.verificationMarkAffixed}
                onChange={onChange}
                options={yesNoOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Seal Identification No(s)"
                name="sealIdentificationNoTape"
                value={formData.sealIdentificationNoTape}
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
                name="instrumentConformsTape"
                value={formData.instrumentConformsTape}
                onChange={onChange}
                options={yesNoOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="Verified and stamped  (Yes / No)"
                name="verifiedStampedTape"
                value={formData.verifiedStampedTape}
                onChange={onChange}
                options={yesNoOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Remarks (if any)"
                name="remarksTape"
                value={formData.remarksTape}
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
            <div className="col-md-4">
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

export default TapeMeasureForm;
