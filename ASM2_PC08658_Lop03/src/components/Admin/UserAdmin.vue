<script setup></script>

<template>
  <main>
    <section class="category py-5">
      <div class="container">
        <div class="card p-3 mb-4">
          <div class="row flex-row-reverse g-3">
            <div class="col-md-4">
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Tìm kiếm" />
                <button class="btn btn-outline-success" type="submit">Tìm</button>
              </form>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-xl-12">
            <div class="table-responsive">
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Mã phòng</th>
                    <th scope="col">Tên người thuê</th>
                    <th scope="col">Loại phòng</th>
                    <th scope="col">Tiền phòng</th>
                    <th scope="col">Trạng thái thanh toán</th>
                    <th scope="col">Trạng thái điện nước</th>
                    <th scope="col">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>T01</td>
                    <td>Phòng thường</td>
                    <td>Phòng lạnh</td>
                    <td>1.700.000 VNĐ</td>
                    <td>Chưa thanh toán</td>
                    <td>Chưa thanh toán</td>
                    <td>
                      <a class="btn btn-warning me-1" href="#" role="button">Sửa</a>
                      <a class="btn btn-danger me-1" href="#" role="button">Xóa</a>
                      <a class="btn btn-primary" href="#" role="button">Xem</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
