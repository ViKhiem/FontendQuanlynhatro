<script setup>

</script>
<template>
    <main>
      <div class="container mt-5">
        <div class="card p-2">
          <h2 class=" mb-4">Sửa Phòng</h2>

          <form>
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="phongSo" class="form-label">Phòng số </label>
                <input
                  type="text"
                  class="form-control"
                  id="phongSo"
                  placeholder="1"
                />
              </div>
              <div class="col-md-6">
                <label for="room" class="form-label">Loại phòng</label>
                <select class="form-select" id="room">
                  <option value="room1" selected>Phòng thường</option>
                  <option value="room2">Phòng thường có gác</option>
                  <option value="room3">Phòng lạnh</option>
                  <option value="room4">Phòng lạnh có gác</option>
                </select>
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="hoppdong" class="form-label">Hợp đồng(tháng) </label>
                <input
                  type="text"
                  class="form-control"
                  id="hopdong"
                  placeholder="6"
                />
              </div>
              <div class="col-md-6">
                <label for="donGia" class="form-label" >Đơn giá </label>
                <input
                  type="text"
                  class="form-control"
                  id="donGia"
                  placeholder="3,000,000"
                />
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="dai" class="form-label">Dài </label>
                <input
                  type="text"
                  class="form-control"
                  id="dai"
                  placeholder="4"
                />
              </div>
              <div class="col-md-6">
                <label for="rong" class="form-label">Rộng </label>
                <input
                  type="text"
                  class="form-control"
                  id="rong"
                  placeholder="5"
                />
              </div>
            </div>
            <div class="row mb-3">
              <div class="col-md-6">
                <label for="soNguoiToiDa" class="form-label"
                  >Số lượng người tối đa </label
                >
                <input
                  type="number"
                  class="form-control"
                  id="soNguoiToiDa"
                  placeholder="4"
                />
              </div>
              <div class="col-md-6">
                <label for="choThue" class="form-label">Cho thuê</label>
                <div>
                  <input
                    type="radio"
                    class="form-check-input"
                    name="choThue"
                    id="choNam"
                    value="Nam"
                    checked
                  />
                  <label for="choNam" class="form-check-label me-3">Nam</label>
                  <input
                    type="radio"
                    class="form-check-input"
                    name="choThue"
                    id="choNu"
                    value="Nu"
                  />
                  <label for="choNu" class="form-check-label">Nữ</label>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label for="moTaThem" class="form-label">Mô tả thêm</label>
              <textarea class="form-control" id="moTaThem" rows="3"></textarea>
            </div>
            <div class="row mt-4 mb-2">
              <div class="col-12">
                <div class="input-group">
                  <label class="input-group-text" for="fileUpload"
                    >Tải ảnh hoặc thông tin lên:</label
                  >
                  <input type="file" class="form-control" id="fileUpload" />
                </div>
              </div>
            </div>
            <div class="text-end">
              <button type="button" class="btn btn-warning"><a href="room.html">Quay về</a></button>
              <button type="submit" class="btn btn-success">Lưu</button>
            </div>
          </form>
        </div>
      </div>
    </main>
</template>
