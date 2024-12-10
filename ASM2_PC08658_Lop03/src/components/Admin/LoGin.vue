<script setup>
import { ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRoute } from 'vue-router'

const API_JSON = 'http://localhost:3000/users'
const router = useRoute()
const account = ref({})

function login() {
  console.log(account.value.username)
  console.log(account.value.password)
  axios
    .get(API_JSON + '?username=' + account.value.username)
    .then(function (response) {
      const data = response.data
      const accountAPI = data
      console.log(accountAPI)
      if (account.value.password == accountAPI.password) {
        console.log('Đúng mật khẩu')

        Swal.fire({
          title: 'Thành công!',
          text: 'Đăng nhập thành công',
          icon: 'success',
          confirmButtonText: 'Ok',
        }).then((result) => {
          if (result.isConfirmed) {
            router.push('/')
          }
        })
      }
    })
    .catch(function (error) {
      console.log(error)
    })
}
</script>

<template>
  <main>
    <div class="container">
      <section class="text-center text-lg-start mt-5">
        <div class="card mb-3">
          <h1 class="text-center text-primary mt-2">ĐĂNG NHẬP</h1>
          <div class="row g-0 d-flex align-items-center">
            <div class="col-lg-4 d-none d-lg-flex">
              <img
                src="../../assets/image/LogoNVK.jpg"
                alt="LogoNVK"
                class="w-100 rounded-t-5 rounded-tr-lg-0 rounded-bl-lg-5"
              />
            </div>
            <div class="col-lg-8">
              <div class="card-body py-5 px-md-5">
                <form v-on:submit.prevent="login">
                  <div class="mb-3">
                    <label for="phone" class="form-label">Username</label>
                    <input
                      v-model="account.username"
                      type="tel"
                      class="form-control"
                      name="phone"
                      id="phone"
                      placeholder="Username"
                    />
                    <small id="helpId" class="form-text text-muted"></small>
                  </div>

                  <!-- Password Input -->
                  <div class="mb-3">
                    <label for="password" class="form-label">Nhập mật khẩu</label>
                    <input
                      v-model="account.password"
                      type="password"
                      class="form-control"
                      name="password"
                      id="password"
                      placeholder="Nhập mật khẩu"
                    />
                    <small id="helpId" class="form-text text-muted"></small>
                  </div>
                  <button type="submit" class="btn btn-outline-info mb-3">Đăng nhập</button>
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
