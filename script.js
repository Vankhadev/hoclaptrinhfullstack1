

// =======================================================
// 1. LẤY CÁC PHẦN TỬ TỪ HTML RA ĐỂ XỬ LÝ
// =======================================================

// [Làm gì]: Tìm nút bấm 3 gạch có class="menu-toggle" trong HTML.
// [Khi nào dùng]: Luôn dùng khi cần gán sự kiện click cho một nút bấm.
const menuToggle = document.querySelector('.menu-toggle');

// [Làm gì]: Tìm thẻ icon <i> nằm bên trong nút menu-toggle.
// [Khi nào dùng]: Để lát nữa ta đổi icon từ 3 gạch (fa-bars) sang dấu X (fa-xmark) khi mở menu.
const menuIcon = document.querySelector('.menu-toggle i');

// [Làm gì]: Tìm khối menu danh sách liên kết có class="nav-links".
// [Khi nào dùng]: Để thêm/xóa class "active" giúp hiện hoặc ẩn menu.
const navLinks = document.querySelector('.nav-links');

// [Làm gì]: Lấy tất cả các thẻ liên kết <a> bên trong menu.
// [Khi nào dùng]: Để khi người dùng click chọn 1 mục (ví dụ "Ẩm Thực"), menu sẽ tự động đóng lại.
const allLinks = document.querySelectorAll('.nav-links a');


// =======================================================
// 2. SỰ KIỆN KHI BẤM VÀO NÚT MENU (3 GẠCH / DẤU X)
// =======================================================
menuToggle.addEventListener('click', (e) => {
    // [Làm gì]: Ngăn chặn sự kiện click này lan ra ngoài màn hình.
    // [Khi nào dùng]: Để tránh việc bấm vào nút mở menu lại bị tính năng "bấm ra ngoài đóng menu" bên dưới bắt được.
    e.stopPropagation();

    // [Làm gì]: Bật/Tắt class 'active' cho menu (chưa có thì thêm vào, có rồi thì gỡ ra).
    // [Khi nào dùng]: Đây là cách chuẩn nhất trong lập trình web để đóng/mở một popup hay menu.
    navLinks.classList.toggle('active');

    // [Làm gì]: Kiểm tra nếu menu đang mở (có class 'active') thì đổi icon sang dấu X (fa-xmark), ngược lại đổi về 3 gạch (fa-bars).
    // [Khi nào dùng]: Giúp giao diện trực quan, người dùng biết bấm lần nữa sẽ đóng menu.
    if (navLinks.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
});


// =======================================================
// 3. TỰ ĐỘNG ĐÓNG MENU KHI CLICK VÀO BẤT KỲ ĐƯỜNG LINK NÀO
// =======================================================
// [Khi nào dùng]: Khi người dùng chọn trang muốn xem, menu cần tự thu gọn lại để lộ nội dung trang.
allLinks.forEach((link) => {
    link.addEventListener('click', () => {
        // [Làm gì]: Gỡ bỏ class 'active' để ẩn menu đi.
        navLinks.classList.remove('active');

        // [Làm gì]: Trả lại icon 3 gạch ban đầu.
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
});


// =======================================================
// 4. TỰ ĐỘNG ĐÓNG MENU KHI BẤM RA NGOÀI VÙNG MENU (CLICK OUTSIDE)
// =======================================================
// [Khi nào dùng]: Tạo trải nghiệm xịn như các app hiện đại (chạm ra vùng tối bên ngoài là menu tự đóng).
document.addEventListener('click', (e) => {
    // [Làm gì]: Kiểm tra xem vị trí người dùng vừa click có nằm bên trong menu hay nút bấm không.
    // Nếu KHÔNG nằm bên trong -> Tức là bấm ra ngoài.
    if (navLinks && menuToggle && !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
});


// =======================================================
// 5. XỬ LÝ GỬI FORM LIÊN HỆ (TRANG LIEN-HE.HTML)
// =======================================================
// [Khi nào dùng]: Ngăn trang web bị tải lại và hiển thị thông báo cảm ơn khi gửi form thành công.
const contactForm = document.getElementById('contactForm');
const formSuccessMessage = document.getElementById('formSuccessMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // [Làm gì]: Ngăn chặn trình duyệt load lại trang mặc định
        e.preventDefault();

        // [Làm gì]: Hiển thị khung thông báo gửi thành công màu xanh
        if (formSuccessMessage) {
            formSuccessMessage.style.display = 'block';
            // [Làm gì]: Xóa trắng các ô nhập liệu sau khi gửi thành công
            contactForm.reset();
            // [Làm gì]: Cuộn nhẹ màn hình đến dòng thông báo
            formSuccessMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}
