import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle, ShieldCheck, RefreshCw, DollarSign } from 'lucide-react';

export default function OnlineAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    timeSlot: '',
    condition: '',
    extraInfo: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required.";
    
    if (!formData.phone.trim()) {
      tempErrors.phone = "Mobile number is required.";
    } else if (!/^\+?[0-9\s-]{10,15}$/.test(formData.phone)) {
      tempErrors.phone = "Please enter a valid mobile number (10-15 digits).";
    }

    if (!formData.date) tempErrors.date = "Preferred date is required.";
    if (!formData.timeSlot) tempErrors.timeSlot = "Preferred time slot is required.";
    if (!formData.condition) tempErrors.condition = "Please select your condition/symptoms.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      date: '',
      timeSlot: '',
      condition: '',
      extraInfo: ''
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div className="bg-brand-bg min-h-screen font-sans text-text-main">
      
      {/* 1. PAGE TITLE BANNER */}
      <section className="bg-linear-to-r from-teal-100 to-teal-50/50 py-12 px-6 border-b border-primary/10 relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0d9488_1px,transparent_1px)] bg-size-[16px_16px]"></div>
        
        <div className="max-w-4xl mx-auto space-y-4 relative z-10 text-left">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-text-secondary font-medium">
            <Link to="/" className="hover:text-primary transition">Home</Link>
            <ChevronRight className="w-3 h-3 text-text-secondary/50" />
            <span className="text-text-secondary/80">Appointment Portal</span>
            <ChevronRight className="w-3 h-3 text-text-secondary/50" />
            <span className="text-primary font-semibold">Book Slot</span>
          </nav>
          
          <h1 className="text-3xl md:text-4xl font-serif font-extrabold text-primary-darker tracking-tight leading-tight">
            Book Online Appointment Slot
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 px-6 bg-brand-bg">
        <div className="max-w-3xl mx-auto space-y-10 text-center">
          
          {/* 2. INTRO TEXT */}
          <div className="max-w-162.5 mx-auto space-y-2">
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              Please fill out this form to request a physical assessment slot. Once submitted, our office team in Kota will call you to verify details.
            </p>
          </div>

          {/* 3. BOOKING FORM CARD */}
          <div className="bg-white rounded-2xl border border-primary/5 shadow-soft max-w-150 mx-auto overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 md:p-10 text-left space-y-6"
                >
                  <div className="border-b border-primary/10 pb-4 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
                    <h2 className="font-serif font-bold text-xl md:text-2xl text-primary-darker">
                      Book Rehabilitation Session
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* a. Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-main uppercase tracking-wider flex items-center gap-1" htmlFor="name">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 text-sm rounded-xl border ${errors.name ? 'border-red-500' : 'border-primary/10'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-brand-bg`}
                      />
                      {errors.name && <p className="text-xs text-red-500 font-semibold">{errors.name}</p>}
                    </div>

                    {/* b. Mobile Number */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-main uppercase tracking-wider flex items-center gap-1" htmlFor="phone">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3 text-sm rounded-xl border ${errors.phone ? 'border-red-500' : 'border-primary/10'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-brand-bg`}
                      />
                      {errors.phone && <p className="text-xs text-red-500 font-semibold">{errors.phone}</p>}
                    </div>

                    {/* c. Preferred Date & Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Preferred Date */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-text-main uppercase tracking-wider flex items-center gap-1" htmlFor="date">
                          Preferred Date <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          id="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 text-sm rounded-xl border ${errors.date ? 'border-red-500' : 'border-primary/10'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-brand-bg`}
                        />
                        {errors.date && <p className="text-xs text-red-500 font-semibold">{errors.date}</p>}
                      </div>

                      {/* Preferred Time Dropdown */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-text-main uppercase tracking-wider flex items-center gap-1" htmlFor="timeSlot">
                          Preferred Time <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="timeSlot"
                          value={formData.timeSlot}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 text-sm rounded-xl border ${errors.timeSlot ? 'border-red-500' : 'border-primary/10'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-brand-bg`}
                        >
                          <option value="">Select Time Slot</option>
                          <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                          <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                          <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                        </select>
                        {errors.timeSlot && <p className="text-xs text-red-500 font-semibold">{errors.timeSlot}</p>}
                      </div>

                    </div>

                    {/* d. Condition/Symptoms Dropdown */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-main uppercase tracking-wider flex items-center gap-1" htmlFor="condition">
                        Condition / Symptoms <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="condition"
                        value={formData.condition}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 text-sm rounded-xl border ${errors.condition ? 'border-red-500' : 'border-primary/10'} focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-brand-bg`}
                      >
                        <option value="">Select Symptoms</option>
                        <option value="Back / Cervical Spinal Stiffness">Back / Cervical Spinal Stiffness</option>
                        <option value="Joint / Knee / Frozen Shoulder">Joint / Knee / Frozen Shoulder</option>
                        <option value="Sports or Muscular Tear Injury">Sports or Muscular Tear Injury</option>
                        <option value="Paralysis or Stroke Rehabilitation">Paralysis or Stroke Rehabilitation</option>
                        <option value="General Physio Consultation">General Physio Consultation</option>
                      </select>
                      {errors.condition && <p className="text-xs text-red-500 font-semibold">{errors.condition}</p>}
                    </div>

                    {/* e. Extra Info */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-main uppercase tracking-wider" htmlFor="extraInfo">
                        Extra Info
                      </label>
                      <textarea
                        id="extraInfo"
                        rows="3"
                        value={formData.extraInfo}
                        onChange={handleInputChange}
                        placeholder="Briefly describe your symptoms..."
                        className="w-full px-4 py-3 text-sm rounded-xl border border-primary/10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition bg-brand-bg"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition duration-300 shadow-soft disabled:opacity-50 disabled:cursor-not-allowed text-sm uppercase tracking-wider mt-2 flex justify-center items-center gap-2"
                    >
                      {isSubmitting ? (
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        "Book Session Now"
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                /* 4. SUCCESS STATE */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 md:p-12 text-center space-y-6 flex flex-col items-center"
                >
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shadow-inner">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-2xl text-primary-darker">
                      Appointment Request Logged
                    </h3>
                    <p className="text-sm md:text-base text-text-secondary leading-relaxed max-w-sm mx-auto">
                      Thank you for reaching out. Dr. Vinay Gulati's clinic office will contact you within 2 business hours to verify your slot.
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-2.5 border border-primary text-primary hover:bg-primary/5 font-bold rounded-xl transition duration-300 text-sm"
                  >
                    Back to Form
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 5. TRUST STRIP */}
          <div className="max-w-150 mx-auto pt-6 border-t border-primary/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-text-secondary font-medium">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <span>Quick Confirmation</span>
            </div>
            
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <DollarSign className="w-4.5 h-4.5" />
              </div>
              <span>No Booking Fee</span>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <RefreshCw className="w-4.5 h-4.5" />
              </div>
              <span>Flexible Rescheduling</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
