import { motion } from 'motion/react';
import { Award, GraduationCap, Heart, Users, Star } from 'lucide-react';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Doctor Profile Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZfclt2yb8BMpNdX_d-BGydeh_Wnby9BydaatcP-EKe2QDEMR5QeivfuWDoUUnRgrhqACBeunx1CnfW_7Bv3NExBpLeM63NU0ntqB15YVxUg5YNSAYSPBgiVxn7AlNYqby-7b6k9oRPzotxoyWyO2VDkKSCvz5M3IqIHvoa3W1kjwYDS9a3DPb9TtCCCCCK9uR2ooRdo8a-sDybRTDTqNQbzWr-Ylyx_cbAdCIfjLbi6xAiQ7j00Lmgd9M4es_1IC-VkeqCA7Q"
                alt="Dr. Ruhil"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl hidden lg:block border border-slate-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#137fec]/10 rounded-full flex items-center justify-center">
                  <Star className="text-[#137fec] fill-[#137fec]" />
                </div>
                <div>
                  <p className="font-black text-2xl">10+</p>
                  <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">Years Experience</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
                  <Users className="text-emerald-600" />
                </div>
                <div>
                  <p className="font-black text-2xl">5k+</p>
                  <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">Happy Patients</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#137fec]/10 text-[#137fec] text-xs font-bold uppercase tracking-wider w-fit">
              Meet Our Founder
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">Dr. Ruhil</h1>
            <p className="text-xl font-bold text-[#137fec]">BDS, MDS (Prosthodontics & Implantology)</p>
            <div className="w-20 h-1.5 bg-[#137fec] rounded-full"></div>
            <p className="text-slate-600 leading-relaxed text-lg">
              Dr. Ruhil is a highly skilled and compassionate dental surgeon with a passion for creating beautiful, healthy smiles. With extensive training in Prosthodontics and Implantology, he brings a wealth of expertise to Ruhil Dental Clinic.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              His philosophy is simple: treat every patient with the same care and attention as family. He is known for his gentle touch and his ability to make even the most anxious patients feel at ease.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <GraduationCap className="text-[#137fec] size-6" />
                <span className="font-bold text-slate-700">MDS Specialist</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <Award className="text-[#137fec] size-6" />
                <span className="font-bold text-slate-700">Gold Medalist</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-400">The principles that guide our practice every single day.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Heart, title: 'Patient Centric', desc: 'Your comfort and well-being are at the heart of everything we do.' },
              { icon: Shield, title: 'Integrity', desc: 'We believe in honest communication and transparent treatment planning.' },
              { icon: Award, title: 'Excellence', desc: 'We strive for the highest standards in clinical care and patient service.' },
            ].map((value, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-2">
                  <value.icon className="size-8 text-[#137fec]" />
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Clinic Gallery Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Modern Facility</h2>
            <p className="text-slate-600">Take a look at our state-of-the-art clinic designed for your comfort.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://lh3.googleusercontent.com/aida-public/AB6AXuC1ZynW0aGWW0YrTlkG8IsIsEfUSOUr_l4gTgkVo9-NKJYuOoj-VobC32UJo12Md7k3uc0Wbmw5hm4d6DZ_OP0S7OFtog8xmb2k_qB0B57aGNA9WAs7NppGUKIj3_0oeJKNRB3DGdLjL8N-uxQw_5cpTjkcj9OlTj3UipYedmGynRBNeCJFx8waQ1fbWg8KGNmVGRF6TW40AP9lXbehhFo37NjPdKdoJm12a2kwjDuBF31D5NTspYbHHJQPripH7jnnifSLYvyT',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuDeGKXS9yr-2xyN9QrJaa0CSLyR-LqCahwbZ9_Hx4IOMkYEJIM-ZnNvXQV8QdCcVDtapaZx-yTJ4c9WgJyYaciuoqp8yy2b-wFJeiFd7jeKf0U59yN_ONao8xuzCR_VZvGBmPyNTc7vfVX4Cytg5dM5m6W-m68yA3xoYr6-846jaUqx4yFjIezVjmogtNPUSwjyMW3uY0XKCrv55TQxaWRWRB2DZmAPp_KFYuyeTdkFnO2uJ5pSUfI5iWOXSe6UuLtvcGC3yMSV',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuAiQCjekgOkGtlLuQEbV_2d4cogdMPb7jEdGLBoDoujQJU2G38VNfkf-PUx9Wpp3vwR505Ch-RPimJrwXb2ETQFIPw-u8Zx8qEypnf_xSRbmdrM8_lrxbLKkY_I2xf19QYdlajBU-QKa9Cjw6LkGgM4SvOGMXaJgnIYm5hNCdRhgZiTBzLFUgjON4tlL2cW1zGd2elu6DqIXLYHxnfAm-NMYnSTrYLqowwHgiDwlSPH1YKZWJZY_N--8i2OgiGybrjJbS6dGIKv',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuBCIXq49UViTIMExUW4P_DHZqlI89yPiEOlJmZYBX7JfAWjyW_61VlA--QCp4YU2PdQqh1YhpXaHxwWH9ik0avLjCdszSQUx7EFqkAijGOAOQgunbTV8qOToEOJMoj9za-QQYy3mpmxiFNj9JBUSRcWgAX3EreFI7Q_EgBAIJA08UWK6pTh4puwMslV02ENwFaclV0aw_4_-OC00rNchmutQJJfDMUNqNSyuiFdzGl3wRUZdinI9lEv_ZvBaQe21kkUUm3s10-d'
            ].map((img, i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
                <img src={img} alt="Clinic" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import { Shield } from 'lucide-react';
