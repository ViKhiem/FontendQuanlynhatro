<script setup>

</script>

<template>

    <div class="container mt-5">
      <h1 class="text-center mb-4">Báo cáo doanh thu</h1>
      <div class="card mb-4">
        <div class="card-header bg-primary text-white">
            <h5>Doanh thu theo tháng</h5>
        </div>
        <div class="card-body">
            <canvas id="revenueChart"></canvas>
        </div>
      </div>
        <!-- Doanh thu theo tháng -->
        <div class="row mb-4">
            <div class="col-12">
                <div class="card">
                    <div class="card-header bg-primary text-white">
                        <h5 class="card-title mb-0">Doanh thu theo tháng</h5>
                    </div>
                    <div class="card-body">
                        <table class="table table-bordered table-hover">
                            <thead class="table-light">
                                <tr>
                                    <th>Tháng</th>
                                    <th>Doanh thu (VND)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tháng 1</td>
                                    <td>50,000,000</td>
                                </tr>
                                <tr>
                                    <td>Tháng 2</td>
                                    <td>40,000,000</td>
                                </tr>
                                <tr>
                                    <td>Tháng 3</td>
                                    <td>45,000,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <!-- Người chưa thanh toán -->
        <div class="row mb-4">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header bg-danger text-white">
                        <h5 class="card-title mb-0">Người chưa thanh toán</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Nguyễn Văn A
                                <span class="badge bg-danger rounded-pill">2,000,000 VND</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Trần Thị B
                                <span class="badge bg-danger rounded-pill">1,500,000 VND</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Lê Văn C
                                <span class="badge bg-danger rounded-pill">3,000,000 VND</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Người đã thanh toán -->
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header bg-success text-white">
                        <h5 class="card-title mb-0">Người đã thanh toán</h5>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Phạm Thị D
                                <span class="badge bg-success rounded-pill">2,500,000 VND</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Hoàng Văn E
                                <span class="badge bg-success rounded-pill">3,000,000 VND</span>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-center">
                                Đinh Thị F
                                <span class="badge bg-success rounded-pill">4,000,000 VND</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
