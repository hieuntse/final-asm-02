//json data mẫu, xóa phần data này, fetch mock API để thao tác
const items = [
  {
    id: "1",
    title: "Mua bàn phím",
    platform: "Shopee",
    price: 350000,
    date: "25-10-2026",
    note: "Bàn phím dùng để học lập trình",
  },
  {
    id: "2",
    title: "Mua sách JavaScript",
    platform: "Tiki",
    price: 150000,
    date: "26-10-2026",
    note: "Sách tham khảo",
  },
];

const list = document.getElementById("items");
//innerHTML render mẫu, có thể sử dụng lại cho bài làm
const renderItems = (items) => {
  list.innerHTML = items.length
    ? items
        .map(
          (item) => `
          <div class="item-card">
            <h3>${item.title}</h3>
            <p><span class="tag">${item.platform}</span></p>
            <p class="price">${new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(item.price)}</p>
            <p>Ngày mua: <span>${item.date}</span></p>
            <p>Ghi chú: <span>${item.note || "Không có"}</span></p>
            <button type="button" class="secondary" data-action="edit" data-id="${item.id}">Sửa</button>
          </div>
        `,
        )
        .join("")
    : "Không có dữ liệu phù hợp.";
};

renderItems(items);
