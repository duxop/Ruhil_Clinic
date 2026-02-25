import { motion } from 'motion/react';
import { Calendar, Users, Shield, Clock, ChevronRight, MapPin, Mail, Phone, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col"
    >
      {/* Hero Section */}
      <section className="relative py-12 md:py-24 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#137fec]/10 text-[#137fec] text-xs font-bold uppercase tracking-wider w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#137fec] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#137fec]"></span>
                </span>
                Top Rated Clinic in Rohtak
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-slate-900">
                  Your Smile, Our Priority at <span className="text-[#137fec]">Ruhil Dental Clinic</span>
                </h1>
                <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                  Experience world-class dental care in Rohtak with modern technology, pain-free procedures, and a compassionate team dedicated to your oral health.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-[#137fec] text-white font-bold rounded-xl shadow-xl shadow-[#137fec]/30 hover:bg-[#137fec]/90 transition-all flex items-center gap-2"
                >
                  Book Your Visit Today
                  <Calendar className="size-5" />
                </Link>
                <div className="flex items-center gap-4 px-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                        <img 
                          className="w-full h-full object-cover" 
                          src={`https://picsum.photos/seed/patient${i}/100/100`} 
                          alt="Patient"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-medium">
                    <span className="block text-slate-900 font-bold">500+ Happy Smiles</span>
                    <span className="text-slate-500">4.9/5 Rating in Rohtak</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#137fec]/20 rounded-full blur-3xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1ZynW0aGWW0YrTlkG8IsIsEfUSOUr_l4gTgkVo9-NKJYuOoj-VobC32UJo12Md7k3uc0Wbmw5hm4d6DZ_OP0S7OFtog8xmb2k_qB0B57aGNA9WAs7NppGUKIj3_0oeJKNRB3DGdLjL8N-uxQw_5cpTjkcj9OlTj3UipYedmGynRBNeCJFx8waQ1fbWg8KGNmVGRF6TW40AP9lXbehhFo37NjPdKdoJm12a2kwjDuBF31D5NTspYbHHJQPripH7jnnifSLYvyT" 
                  alt="Clinic Interior" 
                  className="aspect-[4/3] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor's Welcome Section */}
      <section className="py-16 bg-white" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-full">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZfclt2yb8BMpNdX_d-BGydeh_Wnby9BydaatcP-EKe2QDEMR5QeivfuWDoUUnRgrhqACBeunx1CnfW_7Bv3NExBpLeM63NU0ntqB15YVxUg5YNSAYSPBgiVxn7AlNYqby-7b6k9oRPzotxoyWyO2VDkKSCvz5M3IqIHvoa3W1kjwYDS9a3DPb9TtCCCCCK9uR2ooRdo8a-sDybRTDTqNQbzWr-Ylyx_cbAdCIfjLbi6xAiQ7j00Lmgd9M4es_1IC-VkeqCA7Q" 
                  alt="Dr. Ruhil"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#137fec] p-6 rounded-xl text-white shadow-xl max-w-[240px]">
                <p className="text-lg font-bold">Dr. Ruhil</p>
                <p className="text-sm opacity-90 italic">"Treating every patient like family with the best care possible."</p>
              </div>
            </div>
            <div className="order-1 md:order-2 flex flex-col gap-6">
              <h2 className="text-3xl font-bold tracking-tight">A Message from our Lead Dentist</h2>
              <div className="w-20 h-1.5 bg-[#137fec] rounded-full"></div>
              <p className="text-slate-600 leading-relaxed text-lg">
                Welcome to Ruhil Dental Clinic. We believe that a healthy smile is a beautiful smile. With over 10 years of experience serving the Rohtak community, our team combines clinical excellence with a warm, patient-first approach.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Whether you need a routine checkup or complex restorative work, we use the latest digital dentistry to ensure your comfort and the best possible results.
              </p>
              <div className="pt-4">
                <img 
                  className="h-12 opacity-80" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNDNGiQBehc2-c9gCTrdjlA3Po5tZINTNo98yeLjAfv0tSgEW-JvkeyjLUiICvDd8LJEHVJZdwAH2_etJXNNQDpaSRgdTaz9cCwZbntWGsfzNli9ULc_Lt_5Kk07PYWBZQJZoDz4wuq7vFtCIdlvAuRksl3oDhqSAJf_GHvybTLmREId-OildgB7dhBHcYz5HRfDuQkUG0uiHiDSAyWx1HaFBocz_tPrq9D-G_EyO1htHSURuf-jxwD52Wf3J_5x5O8fYnE5eX" 
                  alt="Signature"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50" id="why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Why Families Choose Us</h2>
            <p className="text-slate-600">We set the gold standard for dental care in the region with our commitment to excellence.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: 'Expert Doctors', desc: 'Our clinical team consists of highly qualified specialists with years of experience.' },
              { icon: Shield, title: 'Modern Tech', desc: 'State-of-the-art diagnostic tools and digital imaging for precise treatment planning.' },
              { icon: Clock, title: 'Pain-Free Clinic', desc: 'We use the latest techniques and gentle sedation options to ensure a stress-free experience.' },
              { icon: Calendar, title: 'Affordable Care', desc: 'Transparent pricing and flexible payment options because high-quality care shouldn\'t break the bank.' },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 bg-[#137fec]/10 text-[#137fec] rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="size-8" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Services Overview */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-4">Our Premium Services</h2>
              <p className="text-slate-600">Comprehensive dental solutions for all age groups under one roof.</p>
            </div>
            <Link to="/services" className="text-[#137fec] font-bold flex items-center gap-1 hover:gap-2 transition-all">
              View All Services <ChevronRight className="size-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Root Canal Treatment', 
                desc: 'Advanced microscopic RCT to save your natural teeth with zero pain.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeGKXS9yr-2xyN9QrJaa0CSLyR-LqCahwbZ9_Hx4IOMkYEJIM-ZnNvXQV8QdCcVDtapaZx-yTJ4c9WgJyYaciuoqp8yy2b-wFJeiFd7jeKf0U59yN_ONao8xuzCR_VZvGBmPyNTc7vfVX4Cytg5dM5m6W-m68yA3xoYr6-846jaUqx4yFjIezVjmogtNPUSwjyMW3uY0XKCrv55TQxaWRWRB2DZmAPp_KFYuyeTdkFnO2uJ5pSUfI5iWOXSe6UuLtvcGC3yMSV'
              },
              { 
                title: 'Dental Implants', 
                desc: 'Permanent, natural-looking tooth replacement that lasts a lifetime.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiQCjekgOkGtlLuQEbV_2d4cogdMPb7jEdGLBoDoujQJU2G38VNfkf-PUx9Wpp3vwR505Ch-RPimJrwXb2ETQFIPw-u8Zx8qEypnf_xSRbmdrM8_lrxbLKkY_I2xf19QYdlajBU-QKa9Cjw6LkGgM4SvOGMXaJgnIYm5hNCdRhgZiTBzLFUgjON4tlL2cW1zGd2elu6DqIXLYHxnfAm-NMYnSTrYLqowwHgiDwlSPH1YKZWJZY_N--8i2OgiGybrjJbS6dGIKv'
              },
              { 
                title: 'Teeth Whitening', 
                desc: 'Transform your smile with our safe and effective professional whitening.',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCIXq49UViTIMExUW4P_DHZqlI89yPiEOlJmZYBX7JfAWjyW_61VlA--QCp4YU2PdQqh1YhpXaHxwWH9ik0avLjCdszSQUx7EFqkAijGOAOQgunbTV8qOToEOJMoj9za-QQYy3mpmxiFNj9JBUSRcWgAX3EreFI7Q_EgBAIJA08UWK6pTh4puwMslV02ENwFaclV0aw_4_-OC00rNchmutQJJfDMUNqNSyuiFdzGl3wRUZdinI9lEv_ZvBaQe21kkUUm3s10-d'
              }
            ].map((service, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    src={service.img} 
                    alt={service.title}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{service.desc}</p>
                  <Link 
                    to="/services" 
                    className="block w-full py-2 text-center border-2 border-[#137fec]/20 text-[#137fec] font-bold rounded-lg group-hover:bg-[#137fec] group-hover:text-white transition-all"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#137fec]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { label: 'Years Exp.', value: '10+' },
              { label: 'Smiles Fixed', value: '5000+' },
              { label: 'Emergency', value: '24/7' },
              { label: 'Specialists', value: '15+' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl font-black mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm uppercase tracking-widest font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col md:flex-row">
            <div className="flex-1 p-8 md:p-12 flex flex-col gap-6">
              <h2 className="text-3xl font-bold">Find Us in Rohtak</h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#137fec] size-6 shrink-0" />
                  <div>
                    <p className="font-bold">Address</p>
                    <p className="text-slate-500">Main Market Road, Near City Center, Rohtak, Haryana 124001</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="text-[#137fec] size-6 shrink-0" />
                  <div>
                    <p className="font-bold">Opening Hours</p>
                    <p className="text-slate-500">Mon - Sat: 9:00 AM - 8:00 PM<br />Sun: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="text-[#137fec] size-6 shrink-0" />
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-slate-500">contact@ruhildental.com</p>
                  </div>
                </div>
              </div>
              <button className="mt-4 px-6 py-3 bg-slate-900 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
                <MapPin className="size-5" />
                Get Directions
              </button>
            </div>
            <div className="flex-1 min-h-[300px] bg-slate-200">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNZBfyrYKB_YdiVZNX2gYO6xMgDE5ZhH0gzho_SlqN4JmIF8vKojdAGKZVOIvh38-2VRtix7d-sS8ASqBanbn_82iAPLhla7uXkA-cXaYkRQSWeEzhKXPS9--brPiFnFkCRTCQU5zVnbhg_wqOWRoMZ9giq59MtzxzxiKEcHDYkSNiMoqLyBLC-hzehWSz05cRo3y-y0ntOcx_iUy1sJlgibl4Sj9CJhH_Jqqq43AxCXQsceFxHNfzNGcIz8N0IwAfurR9tEn-" 
                alt="Map"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
