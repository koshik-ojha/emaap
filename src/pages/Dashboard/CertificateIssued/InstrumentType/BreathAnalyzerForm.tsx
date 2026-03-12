import React from 'react';
import { CustomInput, CustomSelect, CustomDatePicker } from '../../../../components';

interface BreathAnalyzerFormProps {
    formData: {
        analyzerType: string;
        manufacturer: string;
        serialNumber: string;
        yearOfManufacture: string;
        measuringRange: string;
        scaleInterval: string;
        visualExamination: string;
        accuracyTest: string;
        zeroCheck: string;
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
    };
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
}


const BreathAnalyzerForm: React.FC<BreathAnalyzerFormProps> = ({ formData, onChange }) => {
    const analyzerTypes = [
        { value: '', label: 'Select' },
        { value: 'Stationary', label: 'Stationary' },
        { value: 'Transportable', label: 'Transportable' },
        { value: 'Portable', label: 'Portable' }
    ];

    const passFailOptions = [    
        { value: '', label: 'Select' },
        { value: 'Pass', label: 'Pass' },
        { value: 'Fail', label: 'Fail' }
    ];

    return (
        <>
            {/* Breath Analyzer Details Card */}
            <div className="card cretificate-card">
                <div className="card-body">
                    <h2>Breath Analyzer Details</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <CustomSelect
                                label="Instrument Type"
                                name="analyzerType"
                                value={formData.analyzerType}
                                onChange={onChange}
                                options={analyzerTypes}
                            />
                        </div>
                        <div className="col-md-4">
                            <CustomInput
                                label="Manufacturer"
                                name="manufacturer"
                                value={formData.manufacturer}
                                onChange={onChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <CustomInput
                                label="Serial Number"
                                name="serialNumber"
                                value={formData.serialNumber}
                                onChange={onChange}
                            />
                        </div>

                        <div className="col-md-4">
                            <CustomSelect
                                label="Year of Manufacture"
                                name="yearOfManufacture"
                                value={formData.yearOfManufacture}
                                onChange={onChange}
                                options={[{ value: '', label: 'Select Year' }]}
                            />
                        </div>
                        <div className="col-md-4">
                            <CustomInput
                                label="Measuring Range"
                                name="measuringRange"
                                value={formData.measuringRange}
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
                                label="Visual Examination"
                                name="visualExamination"
                                value={formData.visualExamination}
                                onChange={onChange}
                                options={passFailOptions}
                            />
                        </div>
                        <div className="col-md-4">
                            <CustomSelect
                                label="Accuracy Test"
                                name="accuracyTest"
                                value={formData.accuracyTest}
                                onChange={onChange}
                                options={passFailOptions}
                            />
                        </div>
                        <div className="col-md-4">
                            <CustomInput
                                label="Zero Check"
                                name="zeroCheck"
                                value={formData.zeroCheck}
                                onChange={onChange}
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
                                label="Temperature (°C)"
                                name="temperature"
                                value={formData.temperature}
                                onChange={onChange}
                            />
                        </div>
                        <div className="col-md-4">
                            <CustomInput
                                label="Humidity (%)"
                                name="humidity"
                                value={formData.humidity}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="card cretificate-card">
                <div className="card-body">
                    <h2>Verification & Charges</h2>
                    <div className="row">
                        <div className="col-md-4">
                            <CustomInput
                                label="Money Receipt No"
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
                                label="Machine Photo with Serial No"
                                type="file"
                                name="machinePhoto"
                                onChange={onChange}
                                accept="image/*"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BreathAnalyzerForm;
