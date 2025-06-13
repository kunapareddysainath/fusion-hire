import React from "react";
import {
  Shield,
  Lock,
  Eye,
  Server,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

const DataSecurity = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Data Security Policy
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Protecting your personal and professional information with
              industry-leading security measures.
            </p>
          </div>
        </div>
      </section>

      {/* Security Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-neutral-600 mb-6">
                <strong>Effective Date:</strong> January 1, 2024
                <br />
                <strong>Last Updated:</strong> January 1, 2024
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                At Fusion Hire Tech, we understand that protecting your personal
                and professional information is paramount. This Data Security
                Policy outlines our comprehensive approach to safeguarding your
                data through technical, administrative, and physical security
                measures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">
                  Data Protection
                </h3>
              </div>
              <div className="text-center">
                <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Encryption</h3>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">
                  Access Control
                </h3>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">
                  Secure Infrastructure
                </h3>
              </div>
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">
                  Incident Response
                </h3>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Compliance</h3>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Our Security Framework
                </h2>
                <p className="text-neutral-700 mb-4">
                  Our comprehensive security framework is built on industry best
                  practices and regulatory requirements, ensuring multi-layered
                  protection for all data we handle. We employ a
                  defense-in-depth strategy that includes:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Technical safeguards and encryption protocols</li>
                  <li>Administrative controls and access management</li>
                  <li>Physical security measures</li>
                  <li>Regular security assessments and audits</li>
                  <li>Employee training and awareness programs</li>
                  <li>Incident response and recovery procedures</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Technical Security Measures
                </h2>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Data Encryption
                </h3>
                <p className="text-neutral-700 mb-4">
                  All sensitive data is protected using industry-standard
                  encryption:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>
                    <strong>Data in Transit:</strong> TLS 1.3 encryption for all
                    data transmission
                  </li>
                  <li>
                    <strong>Data at Rest:</strong> AES-256 encryption for stored
                    data
                  </li>
                  <li>
                    <strong>Database Encryption:</strong> Encrypted databases
                    with secure key management
                  </li>
                  <li>
                    <strong>File Encryption:</strong> Individual file encryption
                    for sensitive documents
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Network Security
                </h3>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Firewalls and intrusion detection systems</li>
                  <li>Virtual private networks (VPNs) for remote access</li>
                  <li>Network segmentation and access controls</li>
                  <li>
                    Regular vulnerability scanning and penetration testing
                  </li>
                  <li>DDoS protection and traffic monitoring</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Application Security
                </h3>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Secure coding practices and code reviews</li>
                  <li>
                    Regular security testing and vulnerability assessments
                  </li>
                  <li>Web application firewalls (WAF)</li>
                  <li>Input validation and sanitization</li>
                  <li>Session management and timeout controls</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Access Control and Authentication
                </h2>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Multi-Factor Authentication
                </h3>
                <p className="text-neutral-700 mb-4">
                  All system access requires multi-factor authentication (MFA)
                  including:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Strong password requirements</li>
                  <li>Time-based one-time passwords (TOTP)</li>
                  <li>Biometric authentication where available</li>
                  <li>Hardware security keys for privileged accounts</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Role-Based Access Control
                </h3>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Principle of least privilege access</li>
                  <li>Regular access reviews and updates</li>
                  <li>Automated provisioning and deprovisioning</li>
                  <li>Segregation of duties for sensitive operations</li>
                  <li>Audit trails for all access activities</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Data Handling and Storage
                </h2>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Data Classification
                </h3>
                <p className="text-neutral-700 mb-4">
                  We classify data based on sensitivity levels:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>
                    <strong>Public:</strong> Information intended for public
                    disclosure
                  </li>
                  <li>
                    <strong>Internal:</strong> Information for internal business
                    use
                  </li>
                  <li>
                    <strong>Confidential:</strong> Sensitive business and client
                    information
                  </li>
                  <li>
                    <strong>Restricted:</strong> Highly sensitive personal and
                    financial data
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Secure Storage
                </h3>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Encrypted cloud storage with reputable providers</li>
                  <li>Regular backups with encryption and integrity checks</li>
                  <li>Geographic data replication for disaster recovery</li>
                  <li>Secure deletion and data destruction procedures</li>
                  <li>
                    Data retention policies aligned with legal requirements
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Employee Security Training
                </h2>
                <p className="text-neutral-700 mb-4">
                  All employees receive comprehensive security training
                  including:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Data protection and privacy awareness</li>
                  <li>Phishing and social engineering prevention</li>
                  <li>Secure handling of sensitive information</li>
                  <li>Incident reporting procedures</li>
                  <li>Regular security updates and refresher training</li>
                  <li>Role-specific security requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Third-Party Security
                </h2>
                <p className="text-neutral-700 mb-4">
                  We carefully vet and monitor all third-party service
                  providers:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Security assessments and due diligence</li>
                  <li>Contractual security requirements and SLAs</li>
                  <li>Regular security reviews and audits</li>
                  <li>Data processing agreements (DPAs)</li>
                  <li>Incident notification requirements</li>
                  <li>Right to audit and inspect security controls</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Incident Response
                </h2>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Response Team
                </h3>
                <p className="text-neutral-700 mb-4">
                  Our incident response team includes:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Security incident coordinator</li>
                  <li>IT and technical specialists</li>
                  <li>Legal and compliance representatives</li>
                  <li>Communications and public relations</li>
                  <li>External security consultants as needed</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  Response Procedures
                </h3>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Immediate containment and assessment</li>
                  <li>Evidence preservation and forensic analysis</li>
                  <li>Impact assessment and risk evaluation</li>
                  <li>Notification of affected parties and authorities</li>
                  <li>Remediation and recovery actions</li>
                  <li>Post-incident review and improvement</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Data Breach Notification
                </h2>
                <p className="text-neutral-700 mb-4">
                  In the event of a data breach, we will:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>
                    Notify affected individuals within 72 hours when required
                  </li>
                  <li>Report to relevant regulatory authorities as mandated</li>
                  <li>
                    Provide clear information about the breach and its impact
                  </li>
                  <li>Offer guidance on protective measures</li>
                  <li>Provide ongoing updates as the situation develops</li>
                  <li>
                    Offer credit monitoring or identity protection services when
                    appropriate
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Compliance and Certifications
                </h2>
                <p className="text-neutral-700 mb-4">
                  Our security practices comply with relevant standards and
                  regulations:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>GDPR (General Data Protection Regulation)</li>
                  <li>CCPA (California Consumer Privacy Act)</li>
                  <li>SOC 2 Type II compliance</li>
                  <li>ISO 27001 security management standards</li>
                  <li>NIST Cybersecurity Framework</li>
                  <li>Industry-specific regulations as applicable</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Regular Security Assessments
                </h2>
                <p className="text-neutral-700 mb-4">
                  We conduct regular security assessments including:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Annual third-party security audits</li>
                  <li>Quarterly vulnerability assessments</li>
                  <li>Penetration testing by certified professionals</li>
                  <li>Security control effectiveness reviews</li>
                  <li>Risk assessments and threat modeling</li>
                  <li>Business continuity and disaster recovery testing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Your Role in Data Security
                </h2>
                <p className="text-neutral-700 mb-4">
                  You can help protect your information by:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Using strong, unique passwords</li>
                  <li>Enabling multi-factor authentication when available</li>
                  <li>Keeping your contact information updated</li>
                  <li>Reporting suspicious activities immediately</li>
                  <li>Being cautious about sharing personal information</li>
                  <li>Reviewing privacy settings and permissions regularly</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-neutral-700">
                  If you have questions about this Privacy Policy or our data
                  practices, please contact us:
                </p>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <p className="text-neutral-700">
                    <strong>Fusion Hire Tech Security Team</strong>
                    <br />
                    Email: Info@fusionhiretech.com
                    <br />
                    Emergency Hotline: +91 8977719721
                    <br />
                    Address: RAM SVR, Plot No 4/2, Sector 1, Madhapur, HUDA
                    Techno Enclave, Hi-tech City, Hyderabad, Telangana - 500081
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataSecurity;
