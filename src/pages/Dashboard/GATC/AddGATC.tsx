import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomInput, CustomSelect, CustomTextarea, CustomButton } from '../../../components';
import '../Dashboard.css';

interface GATCFormData {
  applicantName: string;
  applicantEmail: string;
  applicantPhone: string;
  address: string;
  state: string;
  district: string;
  pinCode: string;
  weightMeasureName: string;
  experienceDetail: string;
  experienceFile: File | null;
  organizationalStructure: string;
  organizationalFile: File | null;
  principalOfficerDetail: string;
  principalOfficerFile: File | null;
  technicalStaffDetail: string;
  technicalStaffFile: File | null;
  standardAvailableDetail: string;
  standardAvailableFile: File | null;
  qualityManagementSystem: string;
  qualityManagementFile: File | null;
  jurisdictionDistrict: string;
  consumerComplaintNumber: string;
  pan: string;
  panFile: File | null;
}

interface SelectOption {
  value: string;
  label: string;
}

const AddGATC: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<GATCFormData>({
    applicantName: '',
    applicantEmail: '',
    applicantPhone: '',
    address: '',
    state: '',
    district: '',
    pinCode: '',
    weightMeasureName: '',
    experienceDetail: '',
    experienceFile: null,
    organizationalStructure: '',
    organizationalFile: null,
    principalOfficerDetail: '',
    principalOfficerFile: null,
    technicalStaffDetail: '',
    technicalStaffFile: null,
    standardAvailableDetail: '',
    standardAvailableFile: null,
    qualityManagementSystem: '',
    qualityManagementFile: null,
    jurisdictionDistrict: '',
    consumerComplaintNumber: '',
    pan: '',
    panFile: null
  });

  const stateOptions: SelectOption[] = [
    { value: '', label: 'Select' },
    { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
    { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
    { value: 'Assam', label: 'Assam' },
    { value: 'Bihar', label: 'Bihar' },
    { value: 'Chhattisgarh', label: 'Chhattisgarh' },
    { value: 'Goa', label: 'Goa' },
    { value: 'Gujarat', label: 'Gujarat' },
    { value: 'Haryana', label: 'Haryana' },
    { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
    { value: 'Jharkhand', label: 'Jharkhand' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Kerala', label: 'Kerala' },
    { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
    { value: 'Maharashtra', label: 'Maharashtra' },
    { value: 'Manipur', label: 'Manipur' },
    { value: 'Meghalaya', label: 'Meghalaya' },
    { value: 'Mizoram', label: 'Mizoram' },
    { value: 'Nagaland', label: 'Nagaland' },
    { value: 'Odisha', label: 'Odisha' },
    { value: 'Punjab', label: 'Punjab' },
    { value: 'Rajasthan', label: 'Rajasthan' },
    { value: 'Sikkim', label: 'Sikkim' },
    { value: 'Tamil Nadu', label: 'Tamil Nadu' },
    { value: 'Telangana', label: 'Telangana' },
    { value: 'Tripura', label: 'Tripura' },
    { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
    { value: 'Uttarakhand', label: 'Uttarakhand' },
    { value: 'West Bengal', label: 'West Bengal' }
  ];

  const districtOptions: SelectOption[] = [
    { value: '', label: 'Select' }
  ];

  const weightMeasureOptions: SelectOption[] = [
    { value: '', label: 'Select' },
    { value: 'Non-Automatic Weighing Instrument', label: 'Non-Automatic Weighing Instrument' },
    { value: 'Weights', label: 'Weights' },
    { value: 'Capacity Measures', label: 'Capacity Measures' },
    { value: 'Length Measuring Instruments', label: 'Length Measuring Instruments' },
    { value: 'Other Instruments', label: 'Other Instruments' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, files } = target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? (files ? files[0] : null) : value
    }));
  };

  const handleSaveAsDraft = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Saved as draft:', formData);
    // Add API call here to save draft
    navigate('/dashboard/gatc-list');
  };

  const handleProceedForPayment = () => {
    console.log('Proceeding for payment:', formData);
    // Add validation and payment logic here
    // navigate('/dashboard/payment');
  };

  return (
    <>
      <div className="page-header d-flex justify-content-between align-items-center mb-3">
        <h1 className="title-fm mb-0 tile-m-less">Application for Approval of GATC</h1>
        <div className="breadcrumb-text">
          Home &gt; GATC Application &gt; Add New
        </div>
      </div>

      <form onSubmit={handleSaveAsDraft}>
        {/* Basic Information Card */}
        <div className="card cretificate-card">
          <div className="card-body mb-0">
            <div className="row">
              <div className="col-md-4">
                <CustomInput
                  label="Name of Applicant /Person"
                  name="applicantName"
                  value={formData.applicantName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Applicant /Person Email Id"
                  type="email"
                  name="applicantEmail"
                  value={formData.applicantEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Applicant /Person Phone Number"
                  type="tel"
                  name="applicantPhone"
                  value={formData.applicantPhone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <CustomInput
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
                  options={stateOptions}
                />
              </div>
              <div className="col-md-4">
                <CustomSelect
                  label="District"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  options={districtOptions}
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Pin Code"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <CustomSelect
                  label="Name of Weight /Measure"
                  name="weightMeasureName"
                  value={formData.weightMeasureName}
                  onChange={handleChange}
                  required
                  options={weightMeasureOptions}
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Experience detail in relevant field of the Applicant"
                  name="experienceDetail"
                  value={formData.experienceDetail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Upload Experience Document"
                  type="file"
                  name="experienceFile"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Details of the Organizational Structure"
                  name="organizationalStructure"
                  value={formData.organizationalStructure}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Upload Organizational Structure Document"
                  type="file"
                  name="organizationalFile"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Principal Officer Detail(Name, Qualification etc)"
                  name="principalOfficerDetail"
                  value={formData.principalOfficerDetail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Upload Principal Officer Document"
                  type="file"
                  name="principalOfficerFile"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Technical Staff Detail(Name, Qualification etc)"
                  name="technicalStaffDetail"
                  value={formData.technicalStaffDetail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Upload Technical Staff Document"
                  type="file"
                  name="technicalStaffFile"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Details of Standard & Other Testing Facilities with Applicant / Centre"
                  name="standardAvailableDetail"
                  value={formData.standardAvailableDetail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Upload Testing Facilities Document"
                  type="file"
                  name="standardAvailableFile"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Copy of Quality Management System of the Laboratory, if availabel"
                  name="qualityManagementSystem"
                  value={formData.qualityManagementSystem}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Upload Quality Management Document"
                  type="file"
                  name="qualityManagementFile"
                  onChange={handleChange}
                  accept=".pdf,.doc,.docx"
                />
              </div>
              <div className="col-md-4">
                <CustomSelect
                  label="Jurisdiction District"
                  name="jurisdictionDistrict"
                  value={formData.jurisdictionDistrict}
                  onChange={handleChange}
                  required
                  options={districtOptions}
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Consumer Complaint Number"
                  name="consumerComplaintNumber"
                  value={formData.consumerComplaintNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="PAN"
                  name="pan"
                  value={formData.pan}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <CustomInput
                  label="Upload PAN Document"
                  type="file"
                  name="panFile"
                  onChange={handleChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="mt-3 text-center mb-4">
          <div className="d-flex gap-3 justify-content-center">
            <CustomButton 
              type="submit" 
              variant="secondary" 
              className='w-auto px-5 py-2 text-capitalize'
            >
              Save as Draft
            </CustomButton>
            <CustomButton 
              type="button" 
              variant="primary" 
              className='w-auto px-5 m-0 text-capitalize'
              onClick={handleProceedForPayment}
            >
              Proceed for Payment
            </CustomButton>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddGATC;
