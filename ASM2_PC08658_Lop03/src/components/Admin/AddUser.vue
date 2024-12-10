<script setup>
</script>

<template>
    <main>
      <div class="container mt-4">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <!-- Cột Trái -->
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="username" class="form-label">Họ và Tên:*</label>
                  <input
                    type="text"
                    class="form-control"
                    name="username"
                    id="username"
                    placeholder="Nhập Họ Tên"
                  />
                </div>
                <p>Giới tính:*</p>
                <div class="d-flex gap-3 mb-4">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="genderMale"
                    />
                    <label class="form-check-label" for="genderMale">Nam</label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="radio"
                      name="gender"
                      id="genderFemale"
                      checked
                    />
                    <label class="form-check-label" for="genderFemale"
                      >Nữ</label
                    >
                  </div>
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">Số điện thoại:</label>
                  <input
                    type="tel"
                    class="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Nhập số điện thoại"
                  />
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label"
                    >Địa chỉ thường trú:</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    name="address"
                    id="address"
                    placeholder="Nhập địa chỉ thường trú"
                  />
                </div>
                <div class="mb-3">
                  <label for="birthday" class="form-label">Ngày sinh:*</label>
                  <input
                    type="date"
                    class="form-control"
                    name="birthday"
                    id="birthday"
                  />
                </div>
                <div class="mb-3">
                  <label for="room" class="form-label">Chọn phòng:</label>
                  <select class="form-select" id="room">
                    <option value="" selected disabled>Chọn phòng</option>
                    <option value="1">Phòng thường</option>
                    <option value="2">Phòng lạnh</option>

                  </select>
                </div>
                <div class="mb-3">
                  <label for="startDate" class="form-label"
                    >Ngày bắt đầu:*</label
                  >
                  <input
                    type="date"
                    class="form-control"
                    name="startDate"
                    id="startDate"
                  />
                </div>
              </div>

              <!-- Cột Phải -->
              <div class="col-md-6">
                <div class="mb-3">
                  <label for="iduser" class="form-label">CMND/CCCD:*</label>
                  <input
                    type="text"
                    class="form-control"
                    name="iduser"
                    id="iduser"
                    placeholder="Nhập CMND/CCCD"
                  />
                </div>
                <div class="mb-3">
                  <label for="idIssueDate" class="form-label">Ngày cấp:*</label>
                  <input
                    type="date"
                    class="form-control"
                    name="idIssueDate"
                    id="idIssueDate"
                  />
                </div>
                <div class="mb-3">
                  <label for="email" class="form-label">Email:</label>
                  <input
                    type="email"
                    class="form-control"
                    name="email"
                    id="email"
                    placeholder="example@mail.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="birthPlace" class="form-label">Nơi sinh:</label>
                  <input
                    type="text"
                    class="form-control"
                    name="birthPlace"
                    id="birthPlace"
                    placeholder="Tỉnh/Thành phố"
                  />
                </div>
                <div class="mb-3">
                  <label for="roomPrice" class="form-label">Tiền phòng:</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      id="roomPrice"
                      placeholder="Tiền phòng"
                    />
                    <span class="input-group-text">VND</span>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="deposit" class="form-label">Tiền đặt cọc:</label>
                  <div class="input-group">
                    <input
                      type="text"
                      class="form-control"
                      id="deposit"
                      placeholder="Tiền đặt cọc"
                    />
                    <span class="input-group-text">VND</span>
                  </div>
                </div>
                <div class="mb-3">
                  <label for="notes" class="form-label">Ghi chú:</label>
                  <textarea
                    class="form-control"
                    id="notes"
                    rows="3"
                    placeholder="Ghi chú"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="text-end mt-2">
                <button type="button" class="btn btn-warning me-2"><a href="room.html">Quay về</a></button>
                <button type="submit" class="btn btn-success">Lưu</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>
