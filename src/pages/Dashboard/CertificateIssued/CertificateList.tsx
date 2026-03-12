import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton, CustomInput, Pagination } from '../../../components';
import '../Dashboard.css';

interface Certificate {
  id: number;
  applicationNo: string;
  certificateNo: string;
  instrument: string;
  receiptNo: string;
  receiptDate: string;
  fee: string;
  status: string;
  belongTo: string;
  address: string;
  state: string;
  district: string;
  pincode: string;
  mobile: string;
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
  verificationFee: string;
}

const CertificateList: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 5;

  const certificates: Certificate[] = [
    {
      id: 1,
      applicationNo: 'GATC/2025/01',
      certificateNo: 'IND/GATC/PB/25/01/26/05',
      instrument: 'Tape Measures',
      receiptNo: '3243',
      receiptDate: '20-Sep-1987',
      fee: '3243',
      status: 'uploaded',
      belongTo: 'Test Company Pvt Ltd',
      address: 'C-39, Tech Hub, Near Park, Business District',
      state: 'Punjab',
      district: 'Ludhiana',
      pincode: '141001',
      mobile: '9876543210',
      analyzerType: 'Portable',
      manufacturer: 'ABC Instruments Ltd',
      serialNumber: 'BR-2025-001',
      yearOfManufacture: '2024',
      measuringRange: '0-500 mg/L',
      scaleInterval: '0.1 mg/L',
      visualExamination: 'Pass',
      accuracyTest: 'Pass',
      zeroCheck: 'Pass',
      temperature: '22°C',
      humidity: '45%',
      verificationFee: '5000'
    },
    {
      id: 2,
      applicationNo: 'GATC/2025/07',
      certificateNo: 'IND/GATC/TN/25/02/26/03',
      instrument: 'Non-automatic weighing instruments (upto 150kg)',
      receiptNo: '3213212',
      receiptDate: '07-Jun-1977',
      fee: '3213212',
      status: 'pending',
      belongTo: 'Sample Industries',
      address: 'Industrial Area, Phase 2',
      state: 'Tamil Nadu',
      district: 'Chennai',
      pincode: '600001',
      mobile: '9988776655',
      analyzerType: 'Stationary',
      manufacturer: 'XYZ Manufacturing',
      serialNumber: 'WI-2025-002',
      yearOfManufacture: '2023',
      measuringRange: '0-150 kg',
      scaleInterval: '0.01 kg',
      visualExamination: 'Pass',
      accuracyTest: 'Pass',
      zeroCheck: 'Pass',
      temperature: '21°C',
      humidity: '50%',
      verificationFee: '8000'
    }
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const handleReset = () => {
    setSearchTerm('');
    setCurrentPage(1);
  };

  const handleAddCertificate = () => {
    navigate('/dashboard/add-certificate');
  };

  const handleViewDetails = (certificate: Certificate) => {
    navigate('/dashboard/certificate-view', { state: certificate });
  };

  const handleUploadCertificate = (certificate: Certificate) => {
    console.log('Upload certificate:', certificate);
  };

  return (
    <>
      <div className="page-header d-flex justify-content-between align-items-center mb-3">
        <h1 className="title-fm mb-0 tile-m-less">Instrument Certificate of verification List</h1>
        <div className="breadcrumb-text">
          Home &gt; Instrument Certificate of verification List
        </div>
      </div>

      <div className="box mt-3 table-box">
        <div className="row mb-3 align-items-end">
          <div className="col-md-4">
            <CustomInput
              label="Instrument Certificate of verification List"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="col-md-3">
            <div className='d-flex gap-3'>
              <CustomButton 
                variant="primary" 
                onClick={handleSearch}
                className='m-0 w-auto'
              >
                Search
              </CustomButton>
              <CustomButton 
                variant="secondary" 
                onClick={handleReset}
              >
                Reset
              </CustomButton>
            </div>
          </div>
          <div className="col-md-5 text-end">
            <CustomButton 
              variant="primary"
              onClick={handleAddCertificate}
              className='w-auto m-0'
            >
              <i className="bi bi-file-earmark-plus me-2"></i> Add Certificate
            </CustomButton>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-hover custom-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Application No</th>
                <th>Certificate No</th>
                <th style={{ width: '15%' }}>Instrument</th>
                <th>Receipt No</th>
                <th>Receipt Date</th>
                <th>Fee</th>
                <th className="text-center">View</th>
              </tr>
            </thead>
            <tbody>
              {certificates.map((cert, index) => (
                <tr key={cert.id}>
                  <td>{index + 1}</td>
                  <td>{cert.applicationNo}</td>
                  <td>{cert.certificateNo}</td>
                  <td>{cert.instrument}</td>
                  <td>{cert.receiptNo}</td>
                  <td>{cert.receiptDate}</td>
                  <td>{cert.fee}</td>
                  <td className="text-center">
                    <div className="d-flex gap-2 justify-content-center">
                      <CustomButton 
                        variant="primary-outline"
                        onClick={() => handleViewDetails(cert)}
                        className="btn-sm"
                      >
                        Details
                      </CustomButton>
                      {cert.status === 'uploaded' ? (
                        <CustomButton 
                          variant="primary-outline"
                          className="btn-sm"
                          disabled
                        >
                          Certificate Uploaded
                        </CustomButton>
                      ) : (
                        <CustomButton 
                          variant="secondary-outline"
                          onClick={() => handleUploadCertificate(cert)}
                          className="btn-sm"
                        >
                          Upload Certificate
                        </CustomButton>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default CertificateList;
