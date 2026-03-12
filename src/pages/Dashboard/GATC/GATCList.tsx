import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomButton, CustomInput, Pagination } from '../../../components';
import '../Dashboard.css';

interface GATCApplication {
  id: number;
  applicationNo: string;
  applicantName: string;
  state: string;
  district: string;
  status: string;
  createdDate: string;
}

const GATCList: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 5;

  const applications: GATCApplication[] = [
    {
      id: 1,
      applicationNo: 'Test',
      applicantName: 'Test',
      state: 'Test',
      district: 'Test',
      status: 'Test',
      createdDate: ''
    },
    {
      id: 2,
      applicationNo: 'Test',
      applicantName: 'Test',
      state: 'Test',
      district: 'Test',
      status: 'Test',
      createdDate: ''
    }
  ];

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const handleReset = () => {
    setSearchTerm('');
    setCurrentPage(1);
  };

  const handleAddNew = () => {
    navigate('/dashboard/add-gatc');
  };

  const handleView = (application: GATCApplication) => {
    navigate('/dashboard/gatc-view', { state: application });
  };

  return (
    <>
      <div className="page-header d-flex justify-content-between align-items-center mb-3">
        <h1 className="title-fm mb-0 tile-m-less">GATC Application List</h1>
        <div className="breadcrumb-text">
          Home &gt; GATC Application List
        </div>
      </div>

      <div className="box mt-3 table-box">
        <div className="row mb-3 align-items-end">
          <div className="col-md-4">
            <CustomInput
              label="Search"
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
              onClick={handleAddNew}
              className='w-auto m-0'
            >
              ADD NEW
            </CustomButton>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-hover custom-table">
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Application No</th>
                <th>Applicant Name</th>
                <th>State</th>
                <th>District</th>
                <th>Status</th>
                <th>Created Date</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr key={app.id}>
                  <td>{index + 1}</td>
                  <td>{app.applicationNo}</td>
                  <td>{app.applicantName}</td>
                  <td>{app.state}</td>
                  <td>{app.district}</td>
                  <td>{app.status}</td>
                  <td>{app.createdDate}</td>
                  <td className="text-center">
                    <CustomButton 
                      variant="primary-outline"
                      onClick={() => handleView(app)}
                      className="btn-sm"
                    >
                      VIEW
                    </CustomButton>
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

export default GATCList;
