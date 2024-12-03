import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Navigation, Pagination } from 'swiper/modules'
import { Link } from 'react-router-dom'
import { FavoriteButton } from './FavoriteButton'

export const Carousel = ({ items, category }) => {
    return (
        <div className="swiper-carousel">
            <h2>{category}</h2>
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={6}
                height={300}
                navigation
                pagination={{ clickable: true }}
                className="swiper-container"
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id} className="swiper-slide">
                        <div className="carousel-item">
                            <Link to={`/item/${item.id}?category=${encodeURIComponent(category)}`} className="carousel-item__link">
                                <img
                                    src={`${process.env.REACT_APP_IMAGE_BASE_URL}${item.poster_path}`}
                                    alt={item.title}
                                    className="carousel-item__image"
                                />
                                <div className="carousel-item__overlay">
                                    <p className="carousel-item__details">View Details</p>
                                </div>
                            </Link>
                            <div className='carousel-item__title'>
                                <h3>{item.title}</h3>
                                <FavoriteButton movie={item} />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
