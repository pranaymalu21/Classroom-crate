(() => {
  const plan = document.querySelector('[data-plan]');
  const form = document.querySelector('#enquiry');
  const details = form.elements.details;
  plan.addEventListener('click', () => {
    form.scrollIntoView({ behavior: 'smooth', block: 'start' });
    details.value = 'New preschool starter kit';
    setTimeout(() => form.elements.name.focus({ preventScroll: true }), 550);
  });
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const school = data.get('school').trim();
    const body = [`Your name: ${data.get('name').trim()}`, `School or centre name: ${school}`, `City: ${data.get('city').trim()}`, `When do you open?: ${data.get('opening').trim()}`, `Phone or email: ${data.get('contact').trim()}`, `Anything else?: ${data.get('details').trim()}`].join('\n');
    window.location.href = `mailto:s.pranay.malu21@gmail.com?subject=${encodeURIComponent(`Classroom Crate enquiry from ${school}`)}&body=${encodeURIComponent(body)}`;
  });
})();
