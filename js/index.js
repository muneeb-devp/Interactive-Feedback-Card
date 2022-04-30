document.querySelectorAll('.rating').forEach(rating => {
  const resetRatingsColor = () =>
    document.querySelectorAll('.rating').forEach(rating => {
      rating.classList.remove('rating-selected')
    })

  rating.addEventListener('click', function (e) {
    resetRatingsColor()

    const rating = e.target.textContent
    e.target.classList.toggle('rating-selected')

    localStorage.setItem('rating', rating)
  })
})

document.querySelector('button').addEventListener('click', () => {
  const rating = localStorage.getItem('rating')
  if (Number(rating)) {
    document.querySelector('.thanks-component').classList.toggle('visible')
    document.querySelector('.component').classList.add('hidden')

    const ratingSpan = document.querySelector('.thanks-component span')
    ratingSpan.textContent = `You selected ${rating} out of 5`
  } else alert('Please give your feedback before clicking submit! ')
})
