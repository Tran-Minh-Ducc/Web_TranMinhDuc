

*Người thực hiện:* Trần Minh Đức

---

## 1. Tên đề tài

CommuteMatch – Ghép chuyến đi chung cho cộng đồng

## 2. Tên trang đã thực hiện

| Vai trò | Trang |
|---|---|
| Quản trị viên | admin-dashboard.html, admin-user-management.html, admin-platform-settings.html, admin-trip-management.html, admin-report-center.html |
| Điều phối viên | coordinator-mobility-dashboard.html, coordinator-demand-heatmap.html, coordinator-report-center.html, coordinator-trip-detail.html, coordinator-pickup-zone-management.html |

## 3. Mục đích của trang

### Quản trị viên

| Trang | Mục đích |
|---|---|
| admin-dashboard.html | Tổng quan hệ thống: tổng người dùng, chuyến, báo cáo; biểu đồ tăng trưởng; hoạt động gần đây. |
| admin-user-management.html | Quản lý người dùng (vai trò, trạng thái) qua bảng và form thêm/sửa (drawer/modal). |
| admin-platform-settings.html | Quản lý cấu hình nền tảng: số chỗ tối đa, thời hạn hủy chuyến, ngưỡng điểm AI, danh mục lý do báo cáo. |
| admin-trip-management.html | Quản lý toàn bộ chuyến (người tạo, trạng thái, số chỗ), xem chi tiết chuyến (drawer). |
| admin-report-center.html | Quản lý báo cáo & đánh giá vi phạm toàn hệ thống (người báo, đối tượng, loại, trạng thái). |

### Điều phối viên

| Trang | Mục đích |
|---|---|
| coordinator-mobility-dashboard.html | Theo dõi chỉ số nhu cầu (số chuyến, yêu cầu, tỷ lệ ghép), biểu đồ, báo cáo mới, vùng/khung giờ cao điểm. |
| coordinator-demand-heatmap.html | Bản đồ nhiệt mô phỏng nhu cầu theo khu vực × khung giờ, kèm lý do, mức độ tin cậy, trạng thái thiếu dữ liệu. |
| coordinator-report-center.html | Xử lý bảng báo cáo (người báo, đối tượng, loại, trạng thái); chi tiết báo cáo (drawer). |
| coordinator-trip-detail.html | Xem thông tin chuyến, người tham gia, báo cáo & đánh giá liên quan tới chuyến. |
| coordinator-pickup-zone-management.html | Quản lý danh sách điểm đón (tên, khu vực, trạng thái); form thêm/sửa. |

## 4. Các chức năng chính

### Quản trị viên

| Trang | Chức năng chính | Điều hướng đến |
|---|---|---|
| admin-dashboard | Lọc theo thời gian | user-management, platform-settings, trip-management, report-center |
| admin-user-management | Thêm, sửa, đổi vai trò, vô hiệu hóa/kích hoạt, tìm kiếm, lọc, phân trang | dashboard |
| admin-platform-settings | Thêm, sửa, xóa cấu hình, khôi phục mặc định, kiểm tra hợp lệ | dashboard |
| admin-trip-management | Xem (R), ẩn/gắn cờ (U), lưu trữ/khôi phục (D) chuyến vi phạm; tìm kiếm, lọc, phân trang | dashboard, report-center |
| admin-report-center | Xem báo cáo (R), xem/lưu trữ đánh giá vi phạm (D), ghi chú xử lý | trip-management, user-management |

### Điều phối viên

| Trang | Chức năng chính | Điều hướng đến |
|---|---|---|
| coordinator-mobility-dashboard | Lọc theo thời gian/khu vực, xem nhanh | report-center, demand-heatmap, pickup-zone-management |
| coordinator-demand-heatmap | Chọn khu vực/giờ; Chấp nhận / Sửa / Từ chối / Tạo / Lưu; tạo điểm đón từ đề xuất | pickup-zone-management, dashboard |
| coordinator-report-center | Lọc, xem, cập nhật trạng thái (đang chờ → đang xử lý → hoàn thành/từ chối), ghi chú xử lý, lưu trữ | trip-detail, dashboard |
| coordinator-trip-detail | Ẩn/gắn cờ chuyến (U), xem báo cáo (R), lưu trữ đánh giá vi phạm (D) | report-center, dashboard |
| coordinator-pickup-zone-management | Thêm, sửa, vô hiệu hóa, xóa điểm đón; tìm kiếm, lọc | demand-heatmap, dashboard |

## 5. Công nghệ sử dụng

- HTML5, CSS3, JavaScript
- (bổ sung thêm nếu có: thư viện biểu đồ, framework CSS, ...)
- Thiết kế giao diện: Figma

## 6. Link Figma

[Dán link Figma tại đây](#)

## 7. Link video

[Dán link video demo tại đây](#)

## 8. Link GitHub

[Dán link GitHub tại đây](#)

---

© Trần Minh Đức
