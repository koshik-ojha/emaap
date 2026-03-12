import React from 'react';
import { CustomInput, CustomSelect, CustomDatePicker } from '../../../../components';

interface GasMeterFormProps {
  formData: {
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
    // Metrological Characteristics
    unitOfMeasurement: string;
    indicatingDeviceResolution: string;
    maximumPermissibleError: string;
    // Verification & Performance Checks
    visualExamination: string;
    accuracyTestQmin: string;
    accuracyTestQt: string;
    accuracyTestQmax: string;
    overallPerformanceResult: string;
    // Operating & Environmental Conditions
    ambientTemperature: string;
    gasTemperature: string;
    operatingPressure: string;
    relativeHumidity: string;
    // Sealing & Security
    verificationSealAffixed: string;
    sealIdentificationNo: string;
    softwareIdentification: string;
    // Verification Decision
    instrumentConforms: string;
    verifiedAndStamped: string;
    remarks: string;
    validUpTo: string;
    // Verification & Charges
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

const GasMeterForm: React.FC<GasMeterFormProps> = ({ formData, onChange }) => {
  const gasMeterTypeOptions = [
    { value: '', label: 'Select' },
    { value: 'Diaphragm', label: 'Diaphragm' },
    { value: 'Rotary', label: 'Rotary' },
    { value: 'Turbine', label: 'Turbine' },
    { value: 'Ultrasonic', label: 'Ultrasonic' },
    { value: 'Other', label: 'Other' }
  ];

  const gasMeterAccuracyOptions = [
    { value: '', label: 'Select' },
    { value: '0.5', label: '0.5' },
    { value: '1', label: '1' },
    { value: '1.5', label: '1.5' }
  ];

  const gasTypeOptions = [
    { value: '', label: 'Select' },
    { value: 'Natural Gas', label: 'Natural Gas' },
    { value: 'LPG', label: 'LPG' },
    { value: 'Other', label: 'Other' }
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
      {/* Gas Meter Details Card */}
      <div className="card cretificate-card">
        <div className="card-body">
          <h2>Gas Meter Details</h2>
          <div className="row">
            <div className="col-md-4">
              <CustomSelect
                label="Type of Gas Meter"
                name="gasMeterType"
                value={formData.gasMeterType}
                onChange={onChange}
                options={gasMeterTypeOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Manufacturer / Model / Brand /Series"
                name="gasMeterManufacturer"
                value={formData.gasMeterManufacturer}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Serial Number"
                name="gasMeterSerialNumber"
                value={formData.gasMeterSerialNumber}
                onChange={onChange}
              />
            </div>

            <div className="col-md-4">
              <CustomSelect
                label="Year of Manufacture"
                name="gasMeterYearOfManufacture"
                value={formData.gasMeterYearOfManufacture}
                onChange={onChange}
                options={[{ value: '', label: 'Select Year' }]}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="Accuracy Class"
                name="gasMeterAccuracyClass"
                value={formData.gasMeterAccuracyClass}
                onChange={onChange}
                options={gasMeterAccuracyOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="Gas Type"
                name="gasType"
                value={formData.gasType}
                onChange={onChange}
                options={gasTypeOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Maximum FlowRate (Qmax)"
                name="maxFlowRate"
                value={formData.maxFlowRate}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Minimum Flow Rate (Qmin)"
                name="minFlowRate"
                value={formData.minFlowRate}
                onChange={onChange}
              />
            </div>

            <div className="col-md-4">
              <CustomInput
                label="Transition Flow Rate (Qt)"
                name="transitionFlowRate"
                value={formData.transitionFlowRate}
                onChange={onChange}
              />
            </div>            
            <div className="col-md-4">
              <CustomInput
                label="Size(DN)"
                name="sizeDN"
                value={formData.sizeDN}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="G-Value"
                name="gValue"
                value={formData.gValue}
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
                label="Unit of Measurement: m³kg"
                name="unitOfMeasurement"
                value={formData.unitOfMeasurement}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Indicating Device Resolution"
                name="indicatingDeviceResolution"
                value={formData.indicatingDeviceResolution}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Maximum Permissible Error (MPE)"
                name="maximumPermissibleError"
                value={formData.maximumPermissibleError}
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
                name="visualExamination"
                value={formData.visualExamination}
                onChange={onChange}
                options={passFailOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="Accuracy Test at Qmin (Pass / Fail)"
                name="accuracyTestQmin"
                value={formData.accuracyTestQmin}
                onChange={onChange}
                options={passFailOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="Accuracy Test at Qt (Pass / Fail)"
                name="accuracyTestQt"
                value={formData.accuracyTestQt}
                onChange={onChange}
                options={passFailOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="Accuracy Test at Qmax (Pass / Fail)"
                name="accuracyTestQmax"
                value={formData.accuracyTestQmax}
                onChange={onChange}
                options={passFailOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="Overall Performance Result"
                name="overallPerformanceResult"
                value={formData.overallPerformanceResult}
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
                name="ambientTemperature"
                value={formData.ambientTemperature}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Gas Temperature (°C)"
                name="gasTemperature"
                value={formData.gasTemperature}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Operating Pressure"
                name="operatingPressure"
                value={formData.operatingPressure}
                onChange={onChange}
              />
            </div>
            <div className="col-md-4">
              <CustomInput
                label="Relative Humidity (%)"
                name="relativeHumidity"
                value={formData.relativeHumidity}
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
                name="softwareIdentification"
                value={formData.softwareIdentification}
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
                name="instrumentConforms"
                value={formData.instrumentConforms}
                onChange={onChange}
                options={yesNoOptions}
              />
            </div>
            <div className="col-md-4">
              <CustomSelect
                label="Verified and stamped for use in commercial transactions (Yes / No)"
                name="verifiedAndStamped"
                value={formData.verifiedAndStamped}
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
                type="textarea"
              />
            </div>
            <div className="col-md-4">
              <CustomDatePicker
                label="Valid up to / Next Verification Due on or before"
                name="validUpTo"
                value={formData.validUpTo}
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
                name="machinePhoto"
                onChange={onChange}
                type="file"
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
              <CustomSelect
                label="Verification Location"
                name="verificationLocation"
                value={formData.verificationLocation}
                onChange={onChange}
                options={[
                  { value: '', label: 'Select' },
                  { value: 'In the premises of GATC', label: 'In the premises of GATC' },
                  { value: 'In situ / at the place of user', label: 'In situ / at the place of user' }
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GasMeterForm;
