<script setup></script>

<template>
  <main>
    <div class="container">
      <!-- Section: Login Form -->
      <section class="text-center text-lg-start mt-5">
        <div class="card mb-3">
          <h1 class="text-center text-primary mt-2">ĐĂNG NHẬP</h1>
          <div class="row g-0 d-flex align-items-center">
            <!-- Image Column -->
            <div class="col-lg-4 d-none d-lg-flex">
              <img
                src="../../assets/image/LogoNVK.jpg"
                alt="LogoNVK"
                class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
              />
            </div>
            <!-- Form Column -->
            <div class="col-lg-8">
              <div class="card-body py-5 px-md-5">
                <form>
                  <!-- Email Input -->
                  <div class="mb-3">
                    <label for="phone" class="form-label">Số điện thoại</label>
                    <input
                      type="tel"
                      class="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Số điện thoại"
                    />
                    <small id="helpId" class="form-text text-muted"></small>
                  </div>

                  <!-- Password Input -->
                  <div class="mb-3">
                    <label for="password" class="form-label">Nhập mật khẩu</label>
                    <input
                      type="password"
                      class="form-control"
                      name="password"
                      id="password"
                      placeholder="Nhập mật khẩu"
                    />
                    <small id="helpId" class="form-text text-muted"></small>
                  </div>
                  <a
                    name="login"
                    id="login"
                    class="btn btn-outline-info mb-3"
                    href="login.html"
                    role="button"
                  >
                    <RouterLink to="/login" class="dropdown-item">Đăng nhập</RouterLink>
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- End Section: Login Form -->
    </div>
  </main>
</template>
