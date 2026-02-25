import { motion } from 'motion/react';
import { Star, Quote, User } from 'lucide-react';

const testimonials = [
  {
    name: 'Amit Sharma',
    role: 'Local Resident',
    content: 'Dr. Ruhil is amazing! I was terrified of root canals, but he made the process completely painless. The clinic is very clean and modern. Highly recommended!',
    rating: 5,
    date: '2 weeks ago'
  },
  {
    name: 'Priya Verma',
    role: 'Teacher',
    content: 'Best dental clinic in Rohtak. I got my dental implants done here and the results are fantastic. Dr. Ruhil explains everything clearly and patiently.',
    rating: 5,
    date: '1 month ago'
  },
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner',
    content: 'Very professional staff and excellent service. The teeth whitening treatment gave me a whole new level of confidence. Thank you Ruhil Dental Clinic!',
    rating: 5,
    date: '3 months ago'
  },
  {
    name: 'Suman Hooda',
    role: 'Homemaker',
    content: 'My kids love coming here. The doctor is very friendly with children. They have a special way of making kids feel comfortable during checkups.',
    rating: 5,
    date: '4 months ago'
  },
  {
    name: 'Vikram Singh',
    role: 'Engineer',
    content: 'I had an emergency toothache and they accommodated me immediately. The treatment was quick and effective. Truly a life saver!',
    rating: 4,
    date: '5 months ago'
  },
  {
    name: 'Anjali Gupta',
    role: 'Student',
    content: 'Got my braces from here. The progress has been great and the cost was very reasonable compared to other clinics in the city.',
    rating: 5,
    date: '6 months ago'
  }
];

export default function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 md:py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">What Our Patients Say</h1>
          <p className="text-lg text-slate-600">
            Don't just take our word for it. Hear from the thousands of happy patients we've treated over the years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-6 hover:shadow-xl transition-all relative"
            >
              <Quote className="absolute top-6 right-8 text-[#137fec]/10 size-12" />
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`size-4 ${index < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'}`}
                  />
                ))}
              </div>
              <p className="text-slate-600 italic leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-50">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400">
                  <User className="size-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">{testimonial.role} • {testimonial.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="mt-20 bg-[#137fec]/5 rounded-3xl p-8 md:p-12 border border-[#137fec]/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Share Your Experience</h2>
            <p className="text-slate-600">Are you a patient? We'd love to hear your feedback. Your reviews help us improve and help others find quality dental care.</p>
          </div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-[#137fec] font-bold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all border border-[#137fec]/20 flex items-center gap-2"
          >
            <img src="https://www.google.com/favicon.ico" alt="Google" className="size-5" />
            Write a Google Review
          </a>
        </div>
      </div>
    </motion.div>
  );
}
