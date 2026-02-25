import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'rct',
    title: 'Root Canal Treatment',
    description: 'Our painless Root Canal Treatment (RCT) uses advanced rotary technology to save your infected or damaged teeth, preventing the need for extraction.',
    features: ['Single sitting RCT', 'Digital X-rays', 'Microscopic precision', 'Pain-free experience'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeGKXS9yr-2xyN9QrJaa0CSLyR-LqCahwbZ9_Hx4IOMkYEJIM-ZnNvXQV8QdCcVDtapaZx-yTJ4c9WgJyYaciuoqp8yy2b-wFJeiFd7jeKf0U59yN_ONao8xuzCR_VZvGBmPyNTc7vfVX4Cytg5dM5m6W-m68yA3xoYr6-846jaUqx4yFjIezVjmogtNPUSwjyMW3uY0XKCrv55TQxaWRWRB2DZmAPp_KFYuyeTdkFnO2uJ5pSUfI5iWOXSe6UuLtvcGC3yMSV'
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Restore your smile and chewing function with high-quality dental implants. We provide permanent solutions for missing teeth that look and feel natural.',
    features: ['Titanium implants', 'Computer-guided surgery', 'Immediate loading', 'Lifetime warranty'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiQCjekgOkGtlLuQEbV_2d4cogdMPb7jEdGLBoDoujQJU2G38VNfkf-PUx9Wpp3vwR505Ch-RPimJrwXb2ETQFIPw-u8Zx8qEypnf_xSRbmdrM8_lrxbLKkY_I2xf19QYdlajBU-QKa9Cjw6LkGgM4SvOGMXaJgnIYm5hNCdRhgZiTBzLFUgjON4tlL2cW1zGd2elu6DqIXLYHxnfAm-NMYnSTrYLqowwHgiDwlSPH1YKZWJZY_N--8i2OgiGybrjJbS6dGIKv'
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics & Braces',
    description: 'Straighten your teeth and correct your bite with our orthodontic treatments, including traditional braces and modern clear aligners.',
    features: ['Metal braces', 'Ceramic braces', 'Invisalign / Clear aligners', 'Teen & Adult ortho'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCIXq49UViTIMExUW4P_DHZqlI89yPiEOlJmZYBX7JfAWjyW_61VlA--QCp4YU2PdQqh1YhpXaHxwWH9ik0avLjCdszSQUx7EFqkAijGOAOQgunbTV8qOToEOJMoj9za-QQYy3mpmxiFNj9JBUSRcWgAX3EreFI7Q_EgBAIJA08UWK6pTh4puwMslV02ENwFaclV0aw_4_-OC00rNchmutQJJfDMUNqNSyuiFdzGl3wRUZdinI9lEv_ZvBaQe21kkUUm3s10-d'
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Enhance the appearance of your smile with our cosmetic procedures, from professional whitening to porcelain veneers and smile makeovers.',
    features: ['Teeth whitening', 'Veneers & Laminates', 'Smile designing', 'Gum contouring'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNDNGiQBehc2-c9gCTrdjlA3Po5tZINTNo98yeLjAfv0tSgEW-JvkeyjLUiICvDd8LJEHVJZdwAH2_etJXNNQDpaSRgdTaz9cCwZbntWGsfzNli9ULc_Lt_5Kk07PYWBZQJZoDz4wuq7vFtCIdlvAuRksl3oDhqSAJf_GHvybTLmREId-OildgB7dhBHcYz5HRfDuQkUG0uiHiDSAyWx1HaFBocz_tPrq9D-G_EyO1htHSURuf-jxwD52Wf3J_5x5O8fYnE5eX'
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    description: 'Specialized dental care for children in a friendly, non-threatening environment. We focus on preventive care and building healthy habits.',
    features: ['Kid-friendly clinic', 'Fluoride treatment', 'Sealants', 'Habit breaking appliances'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZfclt2yb8BMpNdX_d-BGydeh_Wnby9BydaatcP-EKe2QDEMR5QeivfuWDoUUnRgrhqACBeunx1CnfW_7Bv3NExBpLeM63NU0ntqB15YVxUg5YNSAYSPBgiVxn7AlNYqby-7b6k9oRPzotxoyWyO2VDkKSCvz5M3IqIHvoa3W1kjwYDS9a3DPb9TtCCCCCK9uR2ooRdo8a-sDybRTDTqNQbzWr-Ylyx_cbAdCIfjLbi6xAiQ7j00Lmgd9M4es_1IC-VkeqCA7Q'
  },
  {
    id: 'general',
    title: 'General Dentistry',
    description: 'Routine checkups, cleanings, and fillings to maintain your oral health and catch potential issues early before they become serious.',
    features: ['Scaling & Polishing', 'Tooth-colored fillings', 'Extractions', 'Oral cancer screening'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNZBfyrYKB_YdiVZNX2gYO6xMgDE5ZhH0gzho_SlqN4JmIF8vKojdAGKZVOIvh38-2VRtix7d-sS8ASqBanbn_82iAPLhla7uXkA-cXaYkRQSWeEzhKXPS9--brPiFnFkCRTCQU5zVnbhg_wqOWRoMZ9giq59MtzxzxiKEcHDYkSNiMoqLyBLC-hzehWSz05cRo3y-y0ntOcx_iUy1sJlgibl4Sj9CJhH_Jqqq43AxCXQsceFxHNfzNGcIz8N0IwAfurR9tEn-'
  }
];

export default function Services() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">Our Dental Services</h1>
          <p className="text-lg text-slate-600">
            We offer a wide range of dental treatments tailored to your specific needs, using the latest technology and a gentle touch.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[16/10]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-6">
                <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                      <CheckCircle2 className="text-[#137fec] size-5" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#137fec] text-white font-bold rounded-xl hover:bg-[#137fec]/90 transition-all"
                  >
                    Book Consultation
                    <ArrowRight className="size-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="mt-24 bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Not sure which treatment is right for you?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            Schedule a comprehensive oral examination and our experts will guide you through the best options for your smile.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-[#137fec] text-white font-bold rounded-xl hover:bg-[#137fec]/90 transition-all inline-block"
          >
            Get Expert Advice
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
