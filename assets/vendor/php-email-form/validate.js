/**
* Form Validation, Direct Email (jantadiagnosticscentre@gmail.com) & WhatsApp Integration
* Janta Diagnostic Centre & Blood Bank
*/
(function () {
  "use strict";

  const forms = document.querySelectorAll('.php-email-form');

  forms.forEach(function (thisForm) {
    thisForm.addEventListener('submit', function (event) {
      event.preventDefault();

      let action = thisForm.getAttribute('action') || 'api/appointment';
      const loading = thisForm.querySelector('.loading');
      const errorMessage = thisForm.querySelector('.error-message');
      const sentMessage = thisForm.querySelector('.sent-message');

      if (loading) loading.classList.add('d-block');
      if (errorMessage) {
        errorMessage.classList.remove('d-block');
        errorMessage.innerHTML = '';
      }
      if (sentMessage) sentMessage.classList.remove('d-block');

      const formData = new FormData(thisForm);
      const isAppointmentForm = thisForm.querySelector('select[name="service"]') || thisForm.querySelector('input[name="date"]');

      // Extract details
      const name = formData.get('name') || '';
      const phone = formData.get('phone') || '';
      const email = formData.get('email') || '';
      const date = formData.get('date') || '';
      const service = formData.get('service') || formData.get('department') || '';
      const message = formData.get('message') || '';
      const subject = formData.get('subject') || (isAppointmentForm ? 'New Appointment Booking' : 'General Inquiry');

      // Prepare payload for FormSubmit direct email to jantadiagnosticscentre@gmail.com
      const emailPayload = isAppointmentForm ? {
        _subject: `New Appointment Request: ${name} (${service || 'Diagnostic'})`,
        _template: 'table',
        _captcha: 'false',
        'Patient Name': name,
        'Phone Number': phone,
        'Email Address': email,
        'Preferred Date': date,
        'Service Required': service,
        'Message / Instructions': message || 'None'
      } : {
        _subject: `New Contact Inquiry: ${subject} from ${name}`,
        _template: 'table',
        _captcha: 'false',
        'Visitor Name': name,
        'Email Address': email,
        'Subject': subject,
        'Message': message
      };

      // Handler for UI success
      function showSuccessUI() {
        if (loading) loading.classList.remove('d-block');

        if (sentMessage) {
          if (isAppointmentForm) {
            const waText = encodeURIComponent(
              `🏥 *New Appointment Booking - Janta Diagnostic Centre*\n` +
              `👤 *Name:* ${name}\n` +
              `📞 *Phone:* ${phone}\n` +
              (email ? `📧 *Email:* ${email}\n` : '') +
              (service ? `🩺 *Service:* ${service}\n` : '') +
              (date ? `📅 *Preferred Date:* ${date}\n` : '') +
              (message ? `📝 *Note:* ${message}\n` : '')
            );

            sentMessage.innerHTML = `
              <div class="py-2 text-start">
                <div class="fw-bold mb-1 text-success fs-6"><i class="bi bi-check-circle-fill me-1"></i> Appointment Request Submitted!</div>
                <div class="small text-muted mb-2">Details <strong>jantadiagnosticscentre@gmail.com</strong> par bhej di gayi hain. Humari team aapse <strong>${phone || 'phone'}</strong> par jald hi sampark karegi.</div>
                <div class="mt-2 d-flex flex-wrap gap-2">
                  <a href="https://wa.me/918126189415?text=${waText}" target="_blank" 
                     class="btn btn-sm btn-success fw-bold d-inline-flex align-items-center gap-2 px-3 py-2 shadow-sm rounded-pill">
                    <i class="bi bi-whatsapp fs-6"></i> Send to WhatsApp (+91 8126189415)
                  </a>
                  <a href="tel:+918126189415" class="btn btn-sm btn-outline-dark rounded-pill px-3 py-2">
                    <i class="bi bi-telephone-fill me-1"></i> Call Clinic
                  </a>
                </div>
              </div>
            `;
          } else {
            const waContactText = encodeURIComponent(
              `🏥 *Contact Inquiry - Janta Diagnostic Centre*\n` +
              `👤 *Name:* ${name}\n` +
              (email ? `📧 *Email:* ${email}\n` : '') +
              (subject ? `📌 *Subject:* ${subject}\n` : '') +
              (message ? `📝 *Message:* ${message}\n` : '')
            );

            sentMessage.innerHTML = `
              <div class="py-2 text-start">
                <div class="fw-bold mb-1 text-success fs-6"><i class="bi bi-check-circle-fill me-1"></i> Message Sent Successfully!</div>
                <div class="small text-muted mb-2">Aapka sandesh <strong>jantadiagnosticscentre@gmail.com</strong> par bhej diya gaya hai.</div>
                <div class="mt-2">
                  <a href="https://wa.me/918126189415?text=${waContactText}" target="_blank" 
                     class="btn btn-sm btn-success fw-bold d-inline-flex align-items-center gap-2 px-3 py-2 shadow-sm rounded-pill">
                    <i class="bi bi-whatsapp fs-6"></i> Urgent? Chat on WhatsApp (+91 8126189415)
                  </a>
                </div>
              </div>
            `;
          }
          sentMessage.classList.add('d-block');
        }

        thisForm.reset();
      }

      // Send via FormSubmit directly to jantadiagnosticscentre@gmail.com
      fetch('https://formsubmit.co/ajax/jantadiagnosticscentre@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(emailPayload)
      })
      .then(() => {
        // Also ping local/Vercel API in background
        try {
          fetch(action, { method: 'POST', body: formData });
        } catch (_) {}
        showSuccessUI();
      })
      .catch((err) => {
        console.warn('Direct email dispatch fallback:', err);
        // Fallback to internal API route
        fetch(action, {
          method: 'POST',
          body: formData,
          headers: { 'X-Requested-With': 'XMLHttpRequest' }
        })
        .finally(() => {
          showSuccessUI();
        });
      });

    });
  });

})();
