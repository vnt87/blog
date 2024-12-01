---
title: Apt-get update chậm như rùa? Hãy chuyển sang dùng mirror trong nước
description: Apt-get update chậm như rùa? Hãy chuyển sang dùng mirror trong nước
pubDate: '2021-07-30'
updatedDate: '2024-12-01T03:51:14.400Z'
heroImage: /blog-placeholder-2.jpg
categories:
  - tips-tricks
tags:
  - shark
  - slow-apt-update
  - sources-list
  - ubuntu
  - ubuntu-mirror
---

_The following post content will be written in Vietnamese since it addresses a specific problem that only affect Ubuntu users currently residing in Vietnam_

Mấy ngày hôm nay mấy anh em dùng Ubuntu như tôi chắc khốn khổ vì chạy cái apt update cũng phải mất cả nửa ngày. Lí do thì vẫn như thường lệ, [cá mập cắn cáp AAG](https://tienphong.vn/cap-quang-aag-gap-su-co-internet-di-quoc-te-bi-anh-huong-post1357028.tpo), chuyện năm nào cũng xảy ra đều như vắt chanh mỗi năm khi đất nước có ngày hội lớn. Chúng ta bất lực với cá mập nhưng không có nghĩa chúng ta không có cách khác để giải quyết. Nếu các bạn check danh sách mirrors của Ubuntu sẽ thấy VN là 1 trong những nước có tương đối nhiều mirrors với 9 cái:

![](/blog-placeholder-1.jpg)

Điều này có nghĩa chúng ta hoàn toàn có thể sử dụng mirrors trong nước để gia tăng tốc độ cho apt. Trong những phiên bản gần đây của Ubuntu chức năng tìm mirror đã được build luôn vào trong apt get nhưng ko được enable mặc định. Vì vậy để enable features này chúng ta cần thêm những dòng sau vào file /etc/apt/sources.list

```
deb mirror://mirrors.ubuntu.com/mirrors.txt focal main restricted universe multiversedeb mirror://mirrors.ubuntu.com/mirrors.txt focal-updates main restricted universe multiversedeb mirror://mirrors.ubuntu.com/mirrors.txt focal-backports main restricted universe multiversedeb mirror://mirrors.ubuntu.com/mirrors.txt focal-security main restricted universe multiverse
```

(Lưu ý VD trên là dành cho Ubuntu 20.04, nếu các bạn dùng Ubuntu bản khác thì nhớ thay thế code name _focal_ bằng code name của version tương ứng _Lucid, Precise_ etc.)

Chạy lại apt update và chứng kiến sự thay đổi kinh hoàng trong tốc độ:

![](/blog-placeholder-1.jpg)
