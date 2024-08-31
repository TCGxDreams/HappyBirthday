
document.getElementById('submitBtn').addEventListener('click', function() {
    // Lấy giá trị từ các ô input
    const stk_nh = document.getElementById('input1').value.trim();
    const TenNganHang = document.getElementById('input2').value.trim();
    const ChuSoHuu = document.getElementById('input3').value.trim();
    const SoMoMo = document.getElementById('input4').value.trim();

    // Kiểm tra điều kiện: ít nhất một ô input phải có giá trị
    if (!stk_nh && !TenNganHang && !ChuSoHuu && !SoMoMo) {
        alert("Vui lòng điền ít nhất một ô thông tin.");
        return; // Dừng việc gửi dữ liệu nếu không có ô input nào được điền
    }

    // Tạo đối tượng dữ liệu để gửi lên API
    const data = {
        STK_NH: stk_nh || null, // Nếu không có giá trị, đặt là null
        TenNganHang: TenNganHang || null,
        TenChuSoHuu: ChuSoHuu || null,
        SoMoMo: SoMoMo || null
    };

    // Gửi dữ liệu lên Mock API
    fetch('https://66cd2dbd8ca9aa6c8cc99b92.mockapi.io/BBN', { // Thay đổi URL endpoint tùy theo Mock API của bạn
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert("Gửi dữ liệu thành công");
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Gửi dữ liệu không thành công");
    });
});

