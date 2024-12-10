<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../../assets/image/LogoNVK.jpg" alt="Logo NVK" height="60" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Trang chủ</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/room" class="nav-link">Phòng trọ</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/useradmin" class="nav-link">Người dùng</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/service" class="nav-link">Dịch vụ</RouterLink>
            </li>
          </ul>
          <ul>
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="dropdownId"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  >Tài khoản
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownId">
                  <li>
                    <RouterLink to="/login" class="dropdown-item">Đăng nhập</RouterLink>
                  </li>
                  <li><RouterLink to="/" class="dropdown-item">Đăng xuất</RouterLink></li>
                </ul>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
