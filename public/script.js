
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyVdxDtoZQyhZ5xzCfAAE2X4_5o1Nk7lNZYwqt_S2C9Eikqc7xZKrwslyBpRuhcSU2GrA/exec'
  const form = document.forms['furniture-contact-form']
  const btnKirim = document.querySelector('.btn-kirim')
  const btnLoading = document.querySelector('.btn-loading')
  const myAlert = document.querySelector('.alert')
  const tutup = document.querySelector('.tutup')

  form.addEventListener('submit', e => {
    e.preventDefault()
    // change submite klik
    // show loading remove send
    btnLoading.classList.toggle('hidden')
    btnKirim.classList.toggle('hidden')
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        // show button send, remove button loading
        btnLoading.classList.toggle('hidden')
        btnKirim.classList.toggle('hidden')
        // show alert
        myAlert.classList.toggle('hidden')
        // reset form
        form.reset()
        console.log('Success!', response)
      })
      .catch(error => console.error('Error!', error.message))
  })

  tutup.addEventListener('click', function() {
    myAlert.classList.toggle('hidden')
  })
