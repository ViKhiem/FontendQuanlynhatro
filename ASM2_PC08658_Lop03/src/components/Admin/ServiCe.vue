<script setup>

</script>

<template>
    <main>
      <div class="container mt-4">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Chỉ số điện
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Chỉ số nước
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Tổng
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <!-- Tab Chỉ số điện -->
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div class="card mt-3">
              <div class="card-header">
                <div class="row">
                  <div class="col-md-4">
                    <label for="electricMonth" class="form-label"
                      >Tháng/năm</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="electricMonth"
                      placeholder="mm/yyyy"
                    />
                  </div>
                </div>
              </div>
              <div class="table-responsive m-2">
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Số phòng</th>
                      <th scope="col">Tên chủ phòng</th>
                      <th scope="col">Loại phòng</th>
                      <th scope="col">Số điện Kw (cũ)</th>
                      <th scope="col">Số điện Kw (mới)</th>
                      <th scope="col">Tổng (Kw)</th>
                      <th scope="col">Thành tiền (VND)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Nguyễn Vĩ Khiêm</td>
                      <td>Phòng lạnh</td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Nhập số cũ"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Nhập số mới"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Tổng"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Thành tiền"
                          disabled
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Tab Chỉ số nước -->
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div class="card mt-3">
              <div class="card-header">
                <div class="row">
                  <div class="col-md-4">
                    <label for="waterMonth" class="form-label">Tháng/năm</label>
                    <input
                      type="text"
                      class="form-control"
                      id="waterMonth"
                      placeholder="mm/yyyy"
                    />
                  </div>
                </div>
              </div>
              <div class="table-responsive m-2">
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Số phòng</th>
                      <th scope="col">Tên chủ phòng</th>
                      <th scope="col">Loại phòng</th>
                      <th scope="col">Số nước M3 (cũ)</th>
                      <th scope="col">Số nước M3 (mới)</th>
                      <th scope="col">Tổng (M3)</th>
                      <th scope="col">Thành tiền (VND)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Nguyễn Vĩ Khiêm</td>
                      <td>Phòng lạnh</td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Nhập số cũ"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Nhập số mới"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Tổng"
                          disabled
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Thành tiền"
                          disabled
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Tab Tổng -->
          <div
            class="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            <div class="card mt-3">
              <div class="card-header">
                <div class="row">
                  <div class="col-md-4">
                    <label for="totalMonth" class="form-label">Tháng/năm</label>
                    <input
                      type="text"
                      class="form-control"
                      id="totalMonth"
                      placeholder="mm/yyyy"
                    />
                  </div>
                </div>
              </div>
              <div class="table-responsive m-2">
                <table class="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Số phòng</th>
                      <th scope="col">Tên chủ phòng</th>
                      <th scope="col">Loại phòng</th>
                      <th scope="col">Số điện Kw (tổng)</th>
                      <th scope="col">Số nước M3 (tổng)</th>
                      <th scope="col">Tổng (điện + nước)</th>
                      <th scope="col">Thành tiền</th>
                      <th scope="col">Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Nguyễn Vĩ Khiêm</td>
                      <td>Phòng lạnh</td>
                      <td>
                        <input type="text" class="form-control" disabled />
                      </td>
                      <td>
                        <input type="text" class="form-control" disabled />
                      </td>
                      <td>
                        <input type="text" class="form-control" disabled />
                      </td>
                      <td>
                        <input type="text" class="form-control" disabled />
                      </td>
                      <td>
                        <input type="text" class="form-control" disabled />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>
