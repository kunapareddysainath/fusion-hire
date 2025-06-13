import React from 'react';
import { Users, Heart, Target, Award, Globe, Handshake } from 'lucide-react';

const EqualOpportunity = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Equal Opportunity Employment
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our commitment to creating an inclusive workplace where everyone has equal opportunities to succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <p className="text-neutral-600 mb-6">
                <strong>Effective Date:</strong> January 1, 2024<br />
                <strong>Last Updated:</strong> January 1, 2024
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Fusion Hire Tech is committed to providing equal employment opportunities and fostering an inclusive environment for all individuals, regardless of race, color, religion, sex, sexual orientation, gender identity, national origin, age, disability, veteran status, or any other protected characteristic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="text-center">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Inclusive Hiring</h3>
              </div>
              <div className="text-center">
                <div className="bg-accent-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-accent-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Diversity & Equity</h3>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Fair Practices</h3>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Merit-Based</h3>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Global Inclusion</h3>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="font-semibold text-neutral-900">Respectful Environment</h3>
              </div>
            </div>

            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Our Commitment</h2>
                <p className="text-neutral-700 mb-4">
                  Fusion Hire Tech is an Equal Opportunity Employer committed to workplace diversity and inclusion. We believe that diverse teams drive innovation, creativity, and business success. Our commitment extends to all aspects of employment, including:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Recruitment and hiring practices</li>
                  <li>Compensation and benefits</li>
                  <li>Training and professional development</li>
                  <li>Promotions and career advancement</li>
                  <li>Working conditions and environment</li>
                  <li>Termination and layoff procedures</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Non-Discrimination Policy</h2>
                <p className="text-neutral-700 mb-4">
                  We do not discriminate against any employee, candidate, or client based on:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <ul className="list-disc list-inside text-neutral-700 space-y-1">
                    <li>Race or ethnicity</li>
                    <li>Color</li>
                    <li>Religion or creed</li>
                    <li>Sex or gender</li>
                    <li>Sexual orientation</li>
                    <li>Gender identity or expression</li>
                    <li>National origin</li>
                    <li>Age (40 and older)</li>
                  </ul>
                  <ul className="list-disc list-inside text-neutral-700 space-y-1">
                    <li>Disability status</li>
                    <li>Veteran or military status</li>
                    <li>Marital status</li>
                    <li>Pregnancy or parental status</li>
                    <li>Genetic information</li>
                    <li>Political affiliation</li>
                    <li>Citizenship status</li>
                    <li>Any other protected characteristic</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Diversity & Inclusion Initiatives</h2>
                
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Women in Technology Program</h3>
                <p className="text-neutral-700 mb-4">
                  We have a special focus on empowering women in technology and leadership roles through:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Targeted recruitment from women-focused organizations</li>
                  <li>Mentorship and career development programs</li>
                  <li>Partnerships with women in tech communities</li>
                  <li>Bias-free interview and evaluation processes</li>
                  <li>Flexible work arrangements and family-friendly policies</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Inclusive Sourcing</h3>
                <p className="text-neutral-700 mb-4">
                  Our recruitment strategies actively promote diversity through:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Partnerships with diverse professional organizations</li>
                  <li>Recruitment at historically black colleges and universities (HBCUs)</li>
                  <li>Collaboration with LGBTQ+ professional networks</li>
                  <li>Veteran and military spouse recruitment programs</li>
                  <li>Disability-inclusive hiring practices</li>
                </ul>

                <h3 className="text-xl font-semibold text-neutral-900 mb-3">Bias-Free Processes</h3>
                <p className="text-neutral-700 mb-4">
                  We implement structured processes to minimize unconscious bias:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Standardized interview questions and evaluation criteria</li>
                  <li>Diverse interview panels when possible</li>
                  <li>Skills-based assessments over traditional markers</li>
                  <li>Regular training on unconscious bias for our team</li>
                  <li>Data-driven decision making and tracking</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Reasonable Accommodations</h2>
                <p className="text-neutral-700 mb-4">
                  We are committed to providing reasonable accommodations for qualified individuals with disabilities. This includes:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Accessible interview locations and formats</li>
                  <li>Modified work schedules or arrangements</li>
                  <li>Assistive technology and equipment</li>
                  <li>Workplace modifications as needed</li>
                  <li>Alternative communication methods</li>
                </ul>
                <p className="text-neutral-700 mb-4">
                  Individuals requiring accommodations should contact us to discuss their needs and available options.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Harassment and Retaliation Prevention</h2>
                <p className="text-neutral-700 mb-4">
                  We maintain a zero-tolerance policy for harassment, discrimination, and retaliation. This includes:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Clear policies and procedures for reporting concerns</li>
                  <li>Prompt and thorough investigation of all complaints</li>
                  <li>Protection against retaliation for good faith reporting</li>
                  <li>Appropriate corrective action when violations occur</li>
                  <li>Regular training and awareness programs</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Measuring Our Progress</h2>
                <p className="text-neutral-700 mb-4">
                  We track and measure our diversity and inclusion efforts through:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Regular diversity metrics and reporting</li>
                  <li>Employee and candidate feedback surveys</li>
                  <li>Third-party diversity assessments</li>
                  <li>Goal setting and progress tracking</li>
                  <li>Continuous improvement initiatives</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Community Partnerships</h2>
                <p className="text-neutral-700 mb-4">
                  We actively partner with organizations that promote diversity and inclusion:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Professional associations for underrepresented groups</li>
                  <li>Educational institutions with diverse student bodies</li>
                  <li>Community organizations focused on workforce development</li>
                  <li>Veteran and military support organizations</li>
                  <li>Disability advocacy and support groups</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Reporting Concerns</h2>
                <p className="text-neutral-700 mb-4">
                  If you believe you have experienced or witnessed discrimination, harassment, or other violations of this policy, please report it immediately through any of the following channels:
                </p>
                <div className="bg-neutral-50 p-6 rounded-lg mb-4">
                  <ul className="list-disc list-inside text-neutral-700 space-y-1">
                    <li>Direct supervisor or manager</li>
                    <li>Human Resources department</li>
                    <li>Anonymous reporting hotline: +1 (555) 123-4567</li>
                    <li>Email: ethics@fusionhiretech.com</li>
                    <li>Written complaint to company leadership</li>
                  </ul>
                </div>
                <p className="text-neutral-700 mb-4">
                  All reports will be handled confidentially and investigated promptly. We prohibit retaliation against anyone who reports concerns in good faith.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Legal Compliance</h2>
                <p className="text-neutral-700 mb-4">
                  Our equal opportunity practices comply with all applicable federal, state, and local laws, including:
                </p>
                <ul className="list-disc list-inside text-neutral-700 mb-4 space-y-1">
                  <li>Title VII of the Civil Rights Act of 1964</li>
                  <li>Americans with Disabilities Act (ADA)</li>
                  <li>Age Discrimination in Employment Act (ADEA)</li>
                  <li>Equal Pay Act</li>
                  <li>Pregnancy Discrimination Act</li>
                  <li>Genetic Information Nondiscrimination Act (GINA)</li>
                  <li>State and local fair employment laws</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Contact Information</h2>
                <p className="text-neutral-700 mb-4">
                  For questions about our equal opportunity policies or to report concerns:
                </p>
                <div className="bg-neutral-50 p-6 rounded-lg">
                  <p className="text-neutral-700">
                    <strong>Fusion Hire Tech</strong><br />
                    <strong>Equal Opportunity Officer</strong><br />
                    Email: eeo@fusionhiretech.com<br />
                    Phone: +1 (555) 123-4567<br />
                    Address: New York, NY
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

export default EqualOpportunity;