import './product-image-slider.scss' // Import một tệp CSS hoặc SASS để sử dụng trong component này.

import PropTypes from 'prop-types' // Import thư viện PropTypes để xác định kiểu dữ liệu của props.

import { Swiper, SwiperSlide } from 'swiper/react' // Import components từ thư viện Swiper/react để tạo một hộp ảnh trượt.

import { Navigation, Thumbs } from 'swiper' // Import modules Navigation và Thumbs từ thư viện Swiper, chúng sẽ được sử dụng trong hộp ảnh trượt.

import { useState } from 'react' // Import useState từ thư viện React để sử dụng trong component.

const ProductImagesSlider = props => { // Định nghĩa một functional component ProductImagesSlider và nhận props.

    const [activeThumb, setActiveThumb] = useState() // Sử dụng useState để tạo một biến state activeThumb và hàm setActiveThumb.

    return <>
        <Swiper
            loop={true} // Thiết lập hộp ảnh trượt lặp lại vô hạn.
            spaceBetween={10} // Thiết lập khoảng cách giữa các ảnh là 10px.
            navigation={true} // Hiển thị các nút điều hướng (next và prev).
            modules={[Navigation, Thumbs]} // Kích hoạt modules Navigation và Thumbs.
            grabCursor={true} // Hiển thị biểu tượng "grab" khi di chuyển chuột trên hình ảnh.
            thumbs={{ swiper: activeThumb }} // Liên kết các hộp ảnh trượt chính và các hộp ảnh trượt nhỏ thông qua biến activeThumb.
            className='product-images-slider' // Thiết lập lớp CSS cho hộp ảnh trượt chính.
        >
            {
                props.images.map((item, index) => (
                    <SwiperSlide key={index}>
                        {/* // Hiển thị một hình ảnh từ danh sách images. */}
                        <img src={item} alt="product images" />
                    </SwiperSlide>
                ))
            }
        </Swiper>
        <Swiper
            onSwiper={setActiveThumb} // Khi hộp ảnh trượt nhỏ được tạo, gọi setActiveThumb để cập nhật biến activeThumb.
            loop={true} // Thiết lập hộp ảnh trượt lặp lại vô hạn.
            spaceBetween={10} // Thiết lập khoảng cách giữa các ảnh là 10px.
            slidesPerView={4} // Hiển thị 4 ảnh trên một trang.
            modules={[Navigation, Thumbs]} // Kích hoạt modules Navigation và Thumbs.
            className='product-images-slider-thumbs' // Thiết lập lớp CSS cho hộp ảnh trượt nhỏ.
        >
            {
                props.images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="product-images-slider-thumbs-wrapper">\
                            {/* // Hiển thị một hình ảnh từ danh sách images trong hộp ảnh trượt nhỏ. */}
                            <img src={item} alt="product images" />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </>
}

ProductImagesSlider.propTypes = {
    images: PropTypes.array.isRequired // Xác định kiểu dữ liệu của props 'images' là một mảng và bắt buộc phải có.
}

export default ProductImagesSlider // Xuất component ProductImagesSlider để sử dụng ở nơi khác trong ứng dụng.
