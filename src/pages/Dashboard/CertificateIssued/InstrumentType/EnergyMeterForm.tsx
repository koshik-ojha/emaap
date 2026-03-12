import React from 'react';
import { CustomInput, CustomSelect, CustomDatePicker } from '../../../../components';

interface EnergyMeterFormProps {
    formData: {
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
        visualExamination: string;
        noLoadTest: string;
        startingCurrentTest: string;
        accuracyTestResult: string;
        functionalChecks: string;
        temperature: string;
        humidity: string;
        supplyVoltageDuringTest: string;
        sealingProvided: string;
        sealIdentificationNo: string;
        softwareIdentification: string;
        instrumentConforms: string;
        verifiedAndStamped: string;
        remarks: string;
        validUpTo: string;
        receiptNo: string;
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

const EnergyMeterForm: React.FC<EnergyMeterFormProps> = ({ formData, onChange }) => {
    const meterTypeOptions = [
        { value: '', label: 'Select' },
        { value: 'Single phase', label: 'Single phase' },
        { value: 'Three phase', label: 'Three phase' },
        { value: 'CT-PT operated', label: 'CT-PT operated' }
    ];

    const phaseOptions = [
        { value: '', label: 'Select' },
        { value: '1', label: '1-Phase' },
        { value: '3', label: '3-Phase' }
    ];

    const accuracyClassOptions = [
        { value: '', label: 'Select' },
        { value: 'Class 0.2', label: 'Class 0.2' },
        { value: 'Class 0.5', label: 'Class 0.5' },
        { value: 'Class 1.0', label: 'Class 1.0' },
        { value: 'Class 2.0', label: 'Class 2.0' }
    ];

    return (
        <>
            {/* Energy Meter Details Card */}
            <div className="card cretificate-card">
                <div className="card-body mb-2">
                    <h2>Energy Meter Details</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <CustomSelect
                                label="Type of Energy Meter"
                                name="meterType"
                                value={formData.meterType}
                                onChange={onChange}
                                options={meterTypeOptions}
                            />
                        </div>
                        <div className="col-md-4">
                            <CustomInput
                                label="Manufacturer & Model/Type/Brand/Series Designation"
                                name="meterManufacturer"
                                value={formData.meterManufacturer}
                                onChange={onChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <CustomInput
                                label="Serial Number"
                                name="meterSerialNumber"
                                value={formData.meterSerialNumber}
                                onChange={onChange}
                            />
                        </div>

                        <div className="col-md-4">
                            <CustomSelect
                                label="Year of Manufacture"
                                name="meterYearOfManufacture"
                                value={formData.meterYearOfManufacture}
                                onChange={onChange}
                                options={[{ value: '', label: 'Select Year' }]}
                            />
                        </div>
                        <div className="col-md-4">
                            <CustomInput
                                label="Rated Voltage (V)"
                                name="ratedVoltage"
                                value={formData.ratedVoltage}
                                onChange={onChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <CustomInput
                                label="Rated Current (A)"
                                name="ratedCurrent"
                                value={formData.ratedCurrent}
                                onChange={onChange}
                            />
                        </div>

                        <div className="col-md-4">
                            <CustomInput
                                label="Frequency (Hz)"
                                name="frequency"
                                value={formData.frequency}
                                onChange={onChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <CustomInput
                                label="Accuracy Class"
                                name="meterAccuracyClass"
                                value={formData.meterAccuracyClass}
                                onChange={onChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <CustomInput
                                label="Meter Constant (imp/kWh)"
                                name="meterConstant"
                                value={formData.meterConstant}
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
                <div className="card-body mb-2">
                    <h2>Verification & Performance Checks</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <CustomSelect
                                label="Visual Examination"
                                name="visualExamination"
                                value={formData.visualExamination}
                                onChange={onChange}
                                options={[
                                    { value: 'Select', label: 'Select' },
                                    { value: 'Pass', label: 'Pass' },
                                    { value: 'Fail', label: 'Fail' }
                                ]}
                            />
                        </div>

                        <div className="col-md-4">
                            <CustomSelect
                                label="No-load Test"
                                name="noLoadTest"
                                value={formData.noLoadTest}
                                onChange={onChange}
                                options={[
                                    { value: 'Select', label: 'Select' },
                                    { value: 'Pass', label: 'Pass' },
                                    { value: 'Fail', label: 'Fail' }
                                ]}
                            />
                        </div>

                        <div className="col-md-4">
                            <CustomSelect
                                label="Starting Current Test"
                                name="startingCurrentTest"
                                value={formData.startingCurrentTest}
                                onChange={onChange}
                                options={[
                                    { value: 'Select', label: 'Select' },
                                    { value: 'Pass', label: 'Pass' },
                                    { value: 'Fail', label: 'Fail' }
                                ]}
                            />
                        </div>

                        <div className="col-md-4">
                            <CustomSelect
                                label="Accuracy Test Result"
                                name="accuracyTestResult"
                                value={formData.accuracyTestResult}
                                onChange={onChange}
                                options={[
                                    { value: 'Select', label: 'Select' },
                                    { value: 'Pass', label: 'Pass' },
                                    { value: 'Fail', label: 'Fail' }
                                ]}
                            />
                        </div>

                        <div className="col-md-4">
                            <CustomSelect
                                label="Functional Checks"
                                name="functionalChecks"
                                value={formData.functionalChecks}
                                onChange={onChange}
                                options={[
                                    { value: 'Select', label: 'Select' },
                                    { value: 'Pass', label: 'Pass' },
                                    { value: 'Fail', label: 'Fail' }
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Operating & Environmental Conditions */}
            <div className="card cretificate-card">
                <div className="card-body mb-2">
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
                                label="Supply Voltage During Test"
                                name="supplyVoltageDuringTest"
                                value={formData.supplyVoltageDuringTest}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Sealing & Security */}
            <div className="card cretificate-card">
                <div className="card-body mb-2">
                    <h2>Sealing & Security</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <CustomSelect
                                label="Sealing Provided"
                                name="sealingProvided"
                                value={formData.sealingProvided}
                                onChange={onChange}
                                options={[
                                    { value: 'Select', label: 'Select' },
                                    { value: 'Yes', label: 'Yes' },
                                    { value: 'No', label: 'No' }
                                ]}
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
                                label="Software Identification / Version"
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
                <div className="card-body mb-2">
                    <h2>Verification Decision</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <CustomSelect
                                label="Instrument conforms to OIML Recommendation/LM(Gen)Rules,2011(Yes/No)"
                                name="instrumentConforms"
                                value={formData.instrumentConforms}
                                onChange={onChange}
                                options={[
                                    { value: 'Select', label: 'Select' },
                                    { value: 'Yes', label: 'Yes' },
                                    { value: 'No', label: 'No' }
                                ]}
                            />
                        </div>

                        <div className="col-md-4">
                            <CustomSelect
                                label="Verified and stamped for use in transaction(Yes/No)"
                                name="verifiedAndStamped"
                                value={formData.verifiedAndStamped}
                                onChange={onChange}
                                options={[
                                    { value: 'Select', label: 'Select' },
                                    { value: 'Yes', label: 'Yes' },
                                    { value: 'No', label: 'No' }
                                ]}
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
                <div className="card-body mb-2">
                    <h2>Verification &amp; Charges</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <CustomInput
                                label="Money Receipt No and Dated"
                                name="receiptNo"
                                value={formData.receiptNo}
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

export default EnergyMeterForm;
