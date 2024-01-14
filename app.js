$(document).ready(() => {

    $('a').click((e) => {
        e.preventDefault();
    });


    // open and close the menu, while aslo appling the shadow on the main container
    $('.open-menu').click(() => {
        $('.main-list').animate({
            'left': '0'
        }, 400);

        $('.container').addClass('filtered-bg');
    });

    $('.close-menu').click(() => {
        $('.main-list').animate({
            'left': '-100%'
        }, 400);
        $('.container').removeClass('filtered-bg');
    });

    // adding items to the cart
    let addBtn = $('#add-item');
    let removeItem = $('#remove-item');
    let quantityInput = $('.item-quanity');
    let quantity = 0;

    addBtn.click(() => {
        quantity++;
        quantityInput.attr('value', quantity);
        if (quantity >= 1) {
            $('.cart-tag').css('display', 'grid');
            $('.cart-tag').text(quantity);
        }
    });

    removeItem.click(() => {
        if (quantity <= 0) {
            quantityInput.attr('value', 0);
            $('.cart-tag').css('display', 'none');
        } else {
            quantity--;
            quantityInput.attr('value', quantity);
            $('.cart-tag').text(quantity);
        }
    });

    // switching through the images
    $('.thumb-img').click((e) => {
        $(e.target).addClass('active-img');
        $(e.target).siblings().removeClass('active-img');
        let selectedImg = $(e.target).attr('data-img');

        $('.hero-img').attr('src', selectedImg);
    });


    // switing images for mobile
    // Get the list of thumbnail images
    var $thumbnails = $('.thumb-img');

    // Get the prev and next arrow elements
    var $prevArrow = $('#prev');
    var $nextArrow = $('#next');

    // Get the hero image element
    var $heroImage = $('.hero-img');

    // Index to keep track of the current active thumbnail
    var currentImageIndex = 0;

    // Function to update the hero image based on the current active thumbnail
    function updateHeroImage() {
        var imageUrl = $thumbnails.eq(currentImageIndex).data('img');
        $heroImage.attr('src', imageUrl);

        // Update the active class for thumbnails
        $thumbnails.removeClass('active-img');
        $thumbnails.eq(currentImageIndex).addClass('active-img');
    }

    // Click event for the next arrow
    $nextArrow.click(function () {
        currentImageIndex = (currentImageIndex + 1) % $thumbnails.length;
        updateHeroImage();
    });

    // Click event for the prev arrow
    $prevArrow.click(function () {
        currentImageIndex = (currentImageIndex - 1 + $thumbnails.length) % $thumbnails.length;
        updateHeroImage();
    });

    // Click event for thumbnail images
    $thumbnails.click(function () {
        currentImageIndex = $thumbnails.index(this);
        updateHeroImage();
    });


    // hide and shwo the cart
    $('.cart-container').hide();
    $('.cart').click(() => {
        $('.cart-container').toggle(400);
    });


    // adding the item to the cart
    $('.add-item').click(() => {
        let count = quantityInput.attr('value') * 125.00;
        let item = `<div class="products-cart-item">
                        <img src="https://github.com/Benjihunt97/Product-Page/blob/main/images/image-product-1-thumbnail.jpg?raw=true" alt="" class="cart-img">
                        <div class="product-cart-details">
                            <p class="product-cart-title">Fall Limited Edition Sneakers</p>
                            <p class="product-cart-info">
                                $125.00 x <span class="cart-quanity">${quantityInput.attr('value')}</span>
                                <span class="product-total">$${count}.00</span>
                            </p>
                        </div>
                        <i class="fa fa-trash"></i>

                        <button class="checkout-btn">Checkout</button>
                    </div>
    `;

        $('.cart-empty').css('display', 'none');
        $('.products-cart').html(item);
    });

    // removing an item
    $('.fa-trash').click((e) => {
        $(e.target).remove().parent('.products-cart-item');
    });
}); 
