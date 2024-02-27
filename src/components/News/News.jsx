import React from 'react'
import './news.css'

export default function News() {
  return (
    <div className='news'>
        <div className='news-container'>
          <div className='news_titles'>
            <h2>Новости</h2>
          </div>
          <div className='all_news'>  
              <a href='#'>Все новости</a>
          </div>
        </div>
        <div className='news-card__warpper'>
          <div className='news-card__background'>
            <div className='news-card__holder'> 
              <div className='news-card__items'>
                <time className='news-crad__date'>2024/01/31</time>
                <h2 className='news-card__title'>В СтГАУ прошел отбор на региональный этап чемпионата «Профессионалы»</h2>
              </div>
            </div>
          </div>
          <div className='news-card__background'>
            <div className='news-card__holder'> 
              <div className='news-card__items'>
                <time className='news-crad__date'>2024/01/31</time>
                <h2 className='news-card__title'>В СтГАУ прошел отбор на региональный этап чемпионата «Профессионалы»</h2>
              </div>
            </div>
          </div>
          <div className='news-card__background none2'>
            <div className='news-card__holder'> 
              <div className='news-card__items'>
                <time className='news-crad__date'>2024/01/31</time>
                <h2 className='news-card__title'>В СтГАУ прошел отбор на региональный этап чемпионата «Профессионалы»</h2>
              </div>
            </div>
          </div>
          <div className='news-card__background none1'>
            <div className='news-card__holder'> 
              <div className='news-card__items'>
                <time className='news-crad__date'>2024/01/31</time>
                <h2 className='news-card__title'>В СтГАУ прошел отбор на региональный этап чемпионата «Профессионалы»</h2>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
