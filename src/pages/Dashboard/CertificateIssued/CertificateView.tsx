import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CustomButton } from '../../../components';
import './Certificate.css';

interface CertificateData {
  instrumentType?: string;
  certificateNo?: string;
  receiptDate?: string;
  belongTo?: string;
  address?: string;
  district?: string;
  state?: string;
  pincode?: string;
  mobile?: string;
  analyzerType?: string;
  manufacturer?: string;
  serialNumber?: string;
  yearOfManufacture?: string;
  measuringRange?: string;
  scaleInterval?: string;
  visualExamination?: string;
  accuracyTest?: string;
  zeroCheck?: string;
  temperature?: string;
  humidity?: string;
  receiptNo?: string;
  verificationFee?: string;
  [key: string]: any; // For additional properties
}

const CertificateView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const certificateData: CertificateData = location.state || {};

  // Determine instrument type
  const isEnergyMeter = certificateData.instrumentType === 'Energy Meter';
  const isGasMeter = certificateData.instrumentType === 'Gas Meter';
  const isWeighingInstrument = certificateData.instrumentType === 'Non-Automatic Weighing Instrument of Accuracy Class';
  const isBreathAnalyzer = !isEnergyMeter && !isGasMeter && !isWeighingInstrument;

  const handlePrint = () => {
    window.print();
  };

  const handleBack = () => {
    navigate('/dashboard/add-certificate');
  };

  return (
    <>
      <div className="card mb-4 cretificate-card">
        <div className="card-body mb-0">
          <div className="pageprint">
            <h1>Certificate {isEnergyMeter ? 'Energy Meter' : isGasMeter ? 'Gas Meter' : isWeighingInstrument ? 'Non-Automatic Weighing Instrument' : 'Breath Analyzer'}</h1>

            <div className="center">
              <b>GOVERNMENT APPROVED TEST CENTRE</b><br />
              <span className="small">
                {isEnergyMeter ? '(IND/GATC/RJ/25/04)' : isGasMeter ? '(IND/GATC/MH/25/10)' : isWeighingInstrument ? '(IND/GATC/DL/25/02)' : '(IND/GATC/CG/25/07)'}
              </span>
            </div>

            <br />

            <div className="center">
              <b>Certificate of Verification</b>
            </div>

            <div className="center small">
              Government Approved Test Centre<br />
              {isEnergyMeter ? (
                <>Yadav Measurements Private Limited, 373-375, RIICO BHAMA SHAH INDUSTRIAL AREA,<br />
                KALADWAS, UDAIPUR, Udaipur, Rajasthan, 313001-313003, Ph: 6393744885</>
              ) : isGasMeter ? (
                <>Pietro Fiorentini DB India Private Limited, Gat No. 43, Navlakh Umbre, Talegaon MIDC,<br />
                Taluka Maval, Pune - 410507 , Maharashtra India.-410507,<br />
                Ph: 6393744885</>
              ) : isWeighingInstrument ? (
                <>ABC Weighing Solutions Pvt. Ltd., Plot No. 15, Sector 18, Industrial Area,<br />
                Dwarka, New Delhi - 110075, Delhi, India,<br />
                Ph: 9876543210</>
              ) : (
                <>Tayaltech, TAYALTECH , C 39 , TAYAL TECHNOLOGY HUB , NEAR DEENDAYAL PARK ,<br />
                VYAPAR VIHAR , BILASPUR-495001 , Ph: 6393744885</>
              )}
            </div>

            <br />

            <div className="flex small">
              <div>
                <b>Certificate No:</b> {certificateData.gatcCertificateNo || (isEnergyMeter ? 'IND/GATC/RJ/25/04/26/02' : isGasMeter ? 'IND/GATC/MH/25/10/26/08' : isWeighingInstrument ? 'IND/GATC/DL/25/02/26/05' : 'IND/GATC/CG/25/07/26/03')}
              </div>
              <div>
                <b>Date of Verification:</b> {certificateData.receiptDate || '21-01-2026'}
              </div>
            </div>

            <p className="small">
              I hereby certify that I have this day verified and stamped/rejected the under mentioned {isEnergyMeter ? 'Energy meters' : isGasMeter ? 'Gas meters' : isWeighingInstrument ? 'Non-automatic weighing instruments' : 'Breath analyzers'} etc. belonging to M/s-{certificateData.belongTo || certificateData.belongsTo || (isEnergyMeter ? 'Atque similique iure' : isGasMeter ? 'dasdsds' : isWeighingInstrument ? 'Precision Traders Pvt. Ltd.' : 'Inventore ut porro f')}, Address-{certificateData.address || certificateData.uploadAddress || (isEnergyMeter ? 'Vero minima dolore s' : isGasMeter ? 'sdsd' : isWeighingInstrument ? '123, Market Street, Connaught Place' : 'Omnis molestiae mole')}, {certificateData.district || (isEnergyMeter ? 'Ernakulam' : isGasMeter ? 'Nicobars' : isWeighingInstrument ? 'New Delhi' : 'Dadra And Nagar Haveli')}, {certificateData.state || (isEnergyMeter ? 'Kerala' : isGasMeter ? 'Andaman And Nicobar Islands' : isWeighingInstrument ? 'Delhi' : 'The Dadra And Nagar Haveli And Daman And Diu')}, {certificateData.pincode || (isEnergyMeter ? '413123' : isGasMeter ? '432414' : isWeighingInstrument ? '110001' : '2132111')}, Ph{isEnergyMeter || isGasMeter ? ':-' : '-'} {certificateData.mobile || certificateData.mobileNo || (isEnergyMeter ? '7989089645' : isGasMeter ? '3432434341' : isWeighingInstrument ? '9876543211' : '5576464562')}
            </p>

            {/* Instrument Table - Different for each type */}
            {isEnergyMeter ? (
              <table>
                <thead>
                  <tr>
                    <th>Type of Energy Meter</th>
                    <th>Manufacturer & Model / Type / Brand / Series Designation</th>
                    <th>Serial Number</th>
                    <th>Year of Manufacture</th>
                    <th>Rated Voltage (V)</th>
                    <th>Rated Current (A)</th>
                    <th>Frequency (Hz)</th>
                    <th>Accuracy Class</th>
                    <th>Meter Constant (imp/kWh)</th>
                    <th>Maximum Permissible Error (MPE)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{certificateData.meterType || 'Single phase1'}</td>
                    <td>{certificateData.meterManufacturer || certificateData.manufacturer || 'Est non quasi est s1'}</td>
                    <td>{certificateData.meterSerialNumber || certificateData.serialNumber || '700'}</td>
                    <td>{certificateData.meterYearOfManufacture || certificateData.yearOfManufacture || '2024'}</td>
                    <td>{certificateData.ratedVoltage || 'Aute quidem cumque a'}</td>
                    <td>{certificateData.ratedCurrent || 'Voluptatem omnis est'}</td>
                    <td>{certificateData.frequency || 'Exercitation amet e'}</td>
                    <td>{certificateData.meterAccuracyClass || 'Laboris ratione sed'}</td>
                    <td>{certificateData.meterConstant || 'Dolore vel ea vero b'}</td>
                    <td>{certificateData.maxPermissibleError || 'Dignissimos nostrum'}</td>
                  </tr>
                </tbody>
              </table>
            ) : isGasMeter ? (
              <>
                <table>
                  <thead>
                    <tr>
                      <th>Type of Gas Meter</th>
                      <th>Manufacturer / Model / Brand / Series</th>
                      <th>Serial Number</th>
                      <th>Year of Manufacture</th>
                      <th>Accuracy Class</th>
                      <th>Gas Type</th>
                      <th>Maximum Flow Rate (Qmax)</th>
                      <th>Minimum Flow Rate (Qmin)</th>
                      <th>Transitional Flow Rate (Qt)</th>
                      <th>Size (DN)</th>
                      <th>G-Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{certificateData.gasMeterType || 'Diaphragm'}</td>
                      <td>{certificateData.gasMeterManufacturer || certificateData.manufacturer || 'sds'}</td>
                      <td>{certificateData.gasMeterSerialNumber || certificateData.serialNumber || 'sdsa'}</td>
                      <td>{certificateData.gasMeterYearOfManufacture || certificateData.yearOfManufacture || '2011'}</td>
                      <td>{certificateData.gasMeterAccuracyClass || '1'}</td>
                      <td>{certificateData.gasType || 'LPG'}</td>
                      <td>{certificateData.maxFlowRate || 'sdsd'}</td>
                      <td>{certificateData.minFlowRate || 'dsad'}</td>
                      <td>{certificateData.transitionalFlowRate || 'sas'}</td>
                      <td>{certificateData.sizeDN || 'sdds'}</td>
                      <td>{certificateData.gValue || 'sdsa'}</td>
                    </tr>
                  </tbody>
                </table>

                <table>
                  <thead>
                    <tr>
                      <th>Unit of Measurement (m³ / kg)</th>
                      <th>Indicating Device Resolution</th>
                      <th>Maximum Permissible Error (MPE)</th>
                      <th>Visual Examination</th>
                      <th>Accuracy Test at Qmin</th>
                      <th>Accuracy Test at Qt</th>
                      <th>Accuracy Test at Qmax</th>
                      <th>Overall Performance Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{certificateData.unitOfMeasurement || 'sdsd'}</td>
                      <td>{certificateData.indicatingDeviceResolution || 'sds'}</td>
                      <td>{certificateData.maxPermissibleError || 'sd'}</td>
                      <td>{certificateData.visualExamination || 'Pass'}</td>
                      <td>{certificateData.accuracyTestQmin || 'Pass'}</td>
                      <td>{certificateData.accuracyTestQt || 'Pass'}</td>
                      <td>{certificateData.accuracyTestQmax || 'Pass'}</td>
                      <td>{certificateData.overallPerformanceResult || 'Pass'}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            ) : isWeighingInstrument ? (
              <>
                <div className="section small"><b>Non-Automatic Weighing Instrument Details</b></div>
                <table>
                  <thead>
                    <tr>
                      <th>Type of Instrument</th>
                      <th>Manufacturer / Model / Brand</th>
                      <th>Serial Number</th>
                      <th>Year of Manufacture</th>
                      <th>Accuracy Class (III)</th>
                      <th>Maximum Capacity (Max upto 150 kg)</th>
                      <th>Minimum Capacity (Min)</th>
                      <th>Verification Scale Interval (e)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{certificateData.weighingInstrumentType || certificateData.instrumentType || 'Electronic Platform Scale'}</td>
                      <td>{certificateData.weighingManufacturer || certificateData.manufacturer || 'Avery Weigh-Tronix'}</td>
                      <td>{certificateData.weighingSerialNumber || certificateData.serialNumber || 'AWX-2024-1234'}</td>
                      <td>{certificateData.weighingYearOfManufacture || certificateData.yearOfManufacture || '2024'}</td>
                      <td>{certificateData.accuracyClass || 'III'}</td>
                      <td>{certificateData.maxCapacity || '150 kg'}</td>
                      <td>{certificateData.minCapacity || '2 kg'}</td>
                      <td>{certificateData.verificationScaleInterval || '50 g'}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="section small"><b>Metrological Characteristics</b></div>
                <table>
                  <thead>
                    <tr>
                      <th>Unit of Measurement: kg</th>
                      <th>Actual Scale Interval (d)</th>
                      <th>No. of Verification Intervals (n = Max / e)</th>
                      <th>Maximum Permissible Error (MPE)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{certificateData.unitOfMeasurement || 'kg'}</td>
                      <td>{certificateData.actualScaleInterval || '50 g'}</td>
                      <td>{certificateData.verificationIntervals || '3000'}</td>
                      <td>{certificateData.maxPermissibleError || '±75 g (0.5e to 2000e)'}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Instrument Type</th>
                    <th>Manufacturer & Model / Type / Brand / Series Designation</th>
                    <th>Serial Number</th>
                    <th>Year of Manufacture</th>
                    <th>Measuring Range</th>
                    <th>Scale Interval (Resolution)</th>
                    <th>Unit of Measurement</th>
                    <th>Maximum Permissible Error (MPE)</th>
                    <th>Repeatability Conformity (Yes/No)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{certificateData.analyzerType || 'Transportable'}</td>
                    <td>{certificateData.manufacturer || 'Similique used ipsum'}</td>
                    <td>{certificateData.serialNumber || '429'}</td>
                    <td>{certificateData.yearOfManufacture || ''}</td>
                    <td>{certificateData.measuringRange || 'Voluptates nostrum'}</td>
                    <td>{certificateData.scaleInterval || 'Ut repudiandae dolor'}</td>
                    <td>{certificateData.unitOfMeasurement || 'Magnam numquam saepe'}</td>
                    <td>{certificateData.maxPermissibleError || 'Veritatis ipsam'}</td>
                    <td>{certificateData.repeatabilityConformity || 'Yes'}</td>
                  </tr>
                </tbody>
              </table>
            )}

            {/* Verification Checks - Different for each type */}
            {!isGasMeter && (
              <>
                <div className="section small"><b>Verification & Performance Checks</b></div>

                {isEnergyMeter ? (
                  <table>
                    <thead>
                      <tr>
                        <th>Visual Examination (Pass/Fail)</th>
                        <th>No-load Test (Pass/Fail)</th>
                        <th>Starting Current Test (Pass/Fail)</th>
                        <th>Accuracy Test Result (Pass/Fail)</th>
                        <th>Functional Checks (Display / Memory / Communication)</th>
                        <th>Ambient Temperature 20±5°C</th>
                        <th>Relative Humidity 40±5%</th>
                        <th>Supply Voltage during Test</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{certificateData.visualExamination || 'Pass'}</td>
                        <td>{certificateData.noLoadTest || 'Fail'}</td>
                        <td>{certificateData.startingCurrentTest || 'Fail'}</td>
                        <td>{certificateData.accuracyTest || 'Pass'}</td>
                        <td>{certificateData.functionalChecks || 'Printer'}</td>
                        <td>{certificateData.ambientTemp || 'Yes'}</td>
                        <td>{certificateData.relativeHumidity || 'No'}</td>
                        <td>{certificateData.supplyVoltageDuringTest || 'Et aute facilis repe'}</td>
                      </tr>
                    </tbody>
                  </table>
                ) : isWeighingInstrument ? (
                  <table>
                    <thead>
                      <tr>
                        <th>Visual Examination (Pass / Fail)</th>
                        <th>Zero Setting / Zero Tracking Test (Pass / Fail)</th>
                        <th>Eccentricity Test (Pass / Fail)</th>
                        <th>Repeatability Test (Pass / Fail)</th>
                        <th>Accuracy / Weighing Performance Test (Pass / Fail)</th>
                        <th>Tare Device Test (Pass / Fail)</th>
                        <th>Overall Verification Result (Pass / Fail)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{certificateData.visualExamination || 'Pass'}</td>
                        <td>{certificateData.zeroSettingTest || 'Pass'}</td>
                        <td>{certificateData.eccentricityTest || 'Pass'}</td>
                        <td>{certificateData.repeatabilityTest || 'Pass'}</td>
                        <td>{certificateData.accuracyTest || 'Pass'}</td>
                        <td>{certificateData.tareDeviceTest || 'Pass'}</td>
                        <td>{certificateData.overallVerificationResult || 'Pass'}</td>
                      </tr>
                    </tbody>
                  </table>
                ) : (
                  <table>
                    <thead>
                      <tr>
                        <th>Visual Examination (Pass/Fail)</th>
                        <th>Accuracy Test Result (Pass/Fail)</th>
                        <th>Zero Check Result</th>
                        <th>Drift Check Status</th>
                        <th>Memory Effect Check (Pass/Fail)</th>
                        <th>Functional Checks (Display/Printer/Memory/Communication)</th>
                        <th>Ambient Temperature 20±5°C</th>
                        <th>Relative Humidity 24±5%</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{certificateData.visualExamination || 'Fail'}</td>
                        <td>{certificateData.accuracyTest || 'Pass'}</td>
                        <td>{certificateData.zeroCheck || 'Quidem optio dolore'}</td>
                        <td>{certificateData.driftCheckStatus || 'Dolor accusantium'}</td>
                        <td>{certificateData.memoryEffectCheck || 'Fail'}</td>
                        <td>{certificateData.functionalChecks || 'Display'}</td>
                        <td>{certificateData.temperature || 'Aspernatur eligendi'}</td>
                        <td>{certificateData.humidity || 'Adipisci corrupti'}</td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </>
            )}

            {/* Sealing */}
            <div className="section small"><b>Sealing & Security</b></div>

            {isGasMeter ? (
              <table>
                <thead>
                  <tr>
                    <th>Ambient Temperature 20±5°C</th>
                    <th>Gas Temperature 40±5°C</th>
                    <th>Operating Pressure</th>
                    <th>Relative Humidity 40±5%</th>
                    <th>Verification Seal Affixed</th>
                    <th>Seal Identification No(s)</th>
                    <th>Software / Firmware Version & Checksum</th>
                    <th>Instrument conforms to OIML Recommendation / LM (Gen) Rules, 2011</th>
                    <th>Verified and stamped for use in commercial / billing transactions</th>
                    <th>Remarks (if any)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{certificateData.ambientTemp || '2323'}</td>
                    <td>{certificateData.gasTemperature || '232'}</td>
                    <td>{certificateData.operatingPressure || 'dsdd'}</td>
                    <td>{certificateData.relativeHumidity || 'sdd'}</td>
                    <td>{certificateData.verificationSealAffixed || 'No'}</td>
                    <td>{certificateData.sealIdentificationNo || 'asdsad'}</td>
                    <td>{certificateData.softwareVersion || 'sdsd'}</td>
                    <td>{certificateData.oimlConformity || 'Yes'}</td>
                    <td>{certificateData.verifiedStamped || 'Yes'}</td>
                    <td>{certificateData.remark || certificateData.remarks || 'sasas'}</td>
                  </tr>
                </tbody>
              </table>
            ) : isWeighingInstrument ? (
              <>
                <div className="section small"><b>Operating & Environmental Conditions</b></div>
                <table>
                  <thead>
                    <tr>
                      <th>Ambient Temperature (°C)</th>
                      <th>Relative Humidity (%)</th>
                      <th>Supply Voltage (if electronic)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{certificateData.ambientTemp || certificateData.temperature || '22'}</td>
                      <td>{certificateData.relativeHumidity || certificateData.humidity || '45'}</td>
                      <td>{certificateData.supplyVoltage || '230V AC'}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="section small"><b>Sealing & Security</b></div>
                <table>
                  <thead>
                    <tr>
                      <th>Verification Seal Affixed</th>
                      <th>Seal Identification No(s)</th>
                      <th>Software Identification / Version / Checksum (if applicable)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{certificateData.verificationSealAffixed || 'Yes'}</td>
                      <td>{certificateData.sealIdentificationNo || 'SEAL-2024-001'}</td>
                      <td>{certificateData.softwareVersion || 'v2.1.5 / CRC32'}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="section small"><b>Verification Decision</b></div>
                <table>
                  <thead>
                    <tr>
                      <th>Instrument conforms to OIML Recommendation / LM (Gen) Rules, 2011 (Yes/No)</th>
                      <th>Verified and stamped for use in commercial transactions (Yes / No)</th>
                      <th>Remarks (if any)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{certificateData.oimlConformity || 'Yes'}</td>
                      <td>{certificateData.verifiedStamped || 'Yes'}</td>
                      <td>{certificateData.remark || certificateData.remarks || 'Instrument in good condition'}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Sealing Provided (Yes/No)</th>
                    <th>Seal Identification No(s)</th>
                    <th>Software / Firmware Version / Checksum (if applicable)</th>
                    <th>Instrument conforms to OIML Recommendation / LM (Gen) Rules, 2011 (Yes/No)</th>
                    <th>Verified and stamped for use in transaction (Yes/No)</th>
                    <th>Remarks (if any)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{certificateData.sealingProvided || (isEnergyMeter ? 'Yes' : 'No')}</td>
                    <td>{certificateData.sealIdentificationNo || (isEnergyMeter ? 'Libero ad reiciendis' : 'Nisi quos debitis ma')}</td>
                    <td>{certificateData.softwareVersion || (isEnergyMeter ? 'Labore quas in illum' : 'Corrupti esse reru')}</td>
                    <td>{certificateData.oimlConformity || 'Yes'}</td>
                    <td>{certificateData.verifiedStamped || 'Yes'}</td>
                    <td>{certificateData.remark || certificateData.remarks || (isEnergyMeter ? 'Autem omnis quam cum' : 'Aperiam elit provid')}</td>
                  </tr>
                </tbody>
              </table>
            )}

            <p className="small section">
              <b>Model Approval No(s)</b> {isEnergyMeter || isGasMeter || isWeighingInstrument ? '-' : ':'} {certificateData.modelApprovalNo || (isEnergyMeter ? 'Optio cillum quae e' : isGasMeter ? '321323233' : isWeighingInstrument ? 'NAWI-2024-150-III' : 'Sint consequuntur d')}
            </p>

            <p className="small">
              <b>Verification Fee (Rs. + GST)</b> {isEnergyMeter || isGasMeter || isWeighingInstrument ? '-' : ':'} {certificateData.verificationFee || (isEnergyMeter ? '3434324' : isGasMeter ? '23232' : isWeighingInstrument ? '1500' : '432141432')}{isEnergyMeter || isGasMeter || isWeighingInstrument ? '.' : '.'} Carriage / Conveyance adjusting Charges etc. (+ GST) {isEnergyMeter || isGasMeter || isWeighingInstrument ? '-' : ':'} {certificateData.carriageCharges || (isEnergyMeter ? '343432' : isGasMeter ? '23232' : isWeighingInstrument ? '500' : '321321321')}
            </p>

            <p className="small">
              Total Rs.{isEnergyMeter || isGasMeter || isWeighingInstrument ? '' : ' '}{certificateData.totalDeposited || (isEnergyMeter ? '34324' : isGasMeter ? '3213' : isWeighingInstrument ? '2000' : '3213213')} deposited vide money Receipt{isEnergyMeter || isGasMeter || isWeighingInstrument ? '.' : ''} No.{isEnergyMeter || isGasMeter || isWeighingInstrument ? '' : ' '}{certificateData.receiptNo || (isEnergyMeter ? 'Ratione voluptas iru' : isGasMeter ? 'Asas' : isWeighingInstrument ? 'MR/2024/0567' : 'Ipsum eum magna est')} Dated {certificateData.receiptDate || (isEnergyMeter ? '28-Dec-2025' : isGasMeter ? '07-01-2026' : isWeighingInstrument ? '15-Jan-2026' : '07-Mar-1980')}{isEnergyMeter || isGasMeter || isWeighingInstrument ? '  ' : ' '}
              Repaired by / Used by : {isEnergyMeter ? 'Yadav Measurements Private Limited' : isGasMeter ? 'Pietro Fiorentini DB India Private Limited' : isWeighingInstrument ? 'ABC Weighing Solutions Pvt. Ltd.' : 'Tayaltech'}
            </p>

            <p className="small">
              <b>Next verification falls due on or before:</b> {certificateData.validityDate || certificateData.nextVerificationDate || (isGasMeter ? '2026-01-07' : isWeighingInstrument ? '2027-01-15' : '2027-01-20')}
            </p>

            <div className="signature">
              Signature of Principal Officer
            </div>

            {/* Notes */}
            <div className="note">
              <b>Note:</b>
              <ol>
                <li>The above-mentioned weights and measures are verified and stamped.</li>
                <li>In the premises of GATC</li>
                <li>In-situ at the place of User</li>
                <li>In the case of rejected {isEnergyMeter || isGasMeter || isWeighingInstrument ? 'weights, measures, weighing and measuring instruments' : 'instruments'}, the principal officer shall give a separate certificate of rejection mentioning the reasons of such rejection{isEnergyMeter || isGasMeter || isWeighingInstrument ? ' against each item' : ''}.</li>
              </ol>
            </div>

            <div className="qr">
              <table style={{ border: 'none', width: '100%' }}>
                <tbody>
                  <tr>
                    <td style={{ border: 'none', textAlign: 'left' }}>
                      <img src="/images/qrcode_certificate.png" alt="QR" width="100" />
                    </td>
                    <td style={{ border: 'none', textAlign: 'right' }}>
                      <img src="/images/printout.png" alt="Print" width="150" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        <div className="d-flex gap-3 justify-content-center mb-4 hide-on-print mx-auto w-100">
          <CustomButton variant="secondary" onClick={handleBack} className='w-auto text-capitalize fs-6 py-2 px-4 m-0'>
            Back to List
          </CustomButton>
          <CustomButton variant="primary" onClick={handlePrint} className='w-auto text-capitalize fs-6 py-2 px-4 m-0'>
            Print Certificate
          </CustomButton>
        </div>
      </div>
      
    </>
  );
};

export default CertificateView;
