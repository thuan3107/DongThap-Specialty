<template>
<div class=container>
	<Form
		ref="contactForm"
		@submit="submitContact"
		:validation-schema="contactFormSchema"
	>
		<div class="form-group">
			<!-- <label for="name">Tên</label> -->
			<Field
				name="name"
				type="text"
				class="form-control"
				placeholder="Họ và Tên"
				v-model="contactLocal.name"
			/>
			<ErrorMessage name="name" class="error-feedback" />
		</div>
		
		<div class="form-group phone email">
			<!-- <label for="email">E-mail</label> -->
			<Field
				name="email"
				type="text"
				class="form-control-email form-control"
				placeholder="Email"
				v-model="contactLocal.email"
			/>
			<ErrorMessage name="email" class="error-feedback" />
		</div>
			<div class="form-group phone">
			<!-- <label for="phone">Điện thoại</label> -->
			<Field
				name="phone"
				type="tel"
				class="form-control"
				placeholder="Điện thoại"
				v-model="contactLocal.phone"
			/>
			<ErrorMessage name="phone" class="error-feedback" />
		</div>
		
	
		<div class="form-group">
			<!-- <label for="address">Địa chỉ</label> -->
			<Field
				name="address"
				type="text"
				class="form-control"
				placeholder="Địa chỉ"
				v-model="contactLocal.address"
			/>
			<ErrorMessage name="address" class="error-feedback" />
		</div>
		
		<div class="form-group1 form-group phone tinh">
			<!-- <label for="tinh">Tỉnh</label> -->
		     <Field
				name="tinh"
				type="select"
				class="form-control"
					placeholder="Tỉnh/Thành Phố"
				v-model="contactLocal.tinh"
			
			/> 
			
			
		
			<ErrorMessage name="tinh" class="error-feedback" />
		</div>
			<div  class="form-group1 form-group phone huyen">
			<!-- <label for="huyen">Quận/Huyện</label> -->
			<Field
				name="huyen"
				type="text"
				class="form-control"
					placeholder="Quận/Huyện"
				v-model="contactLocal.huyen"
			/>
			<ErrorMessage name="huyen" class="error-feedback" />
		</div >
			<div class="form-group1 phone">
			<!-- <label for="xa">Phường/xã</label> -->
			<Field
				name="xa"
				type="text"
				class="form-control"
					placeholder="Xã/Phường"
				v-model="contactLocal.xa"
			/>
			<ErrorMessage name="xa" class="error-feedback" />
		</div>

		<div class="form-group form-check">
			<input
				name="favorite"
				type="checkbox"
				class="form-check-input"
				v-model="contactLocal.favorite"
			/>
			<label for="favorite" class="form-check-label">
				<strong>Xác nhân đặt hàng</strong>
			</label>
		</div>

		<div class="form-group">
			<router-link to="/cart" style="">
			<button class="btn btn-primary1">
			  Trở về giỏ hàng
			</button>
			</router-link>
			<button class="btn btn-primary">
			 Đặt hàng
			</button>
			<button
				v-if="contactLocal._id"
				type="button"
				class="ml-2 btn btn-danger"
				@click="deleteContact"
			>
				<i class="fas fa-trash"></i> Xóa
			</button>
		</div>
	</Form>

	</div>
	
    
</template>

<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
	components: {
		Form,
		Field,
		ErrorMessage,
	},
	emits: ["submit:contact", "delete:contact"],
	props: {
		contact: { type: Object, required: true },
		resetAfterSubmit: { type: Boolean, default: false },
	},
	data() {
		const contactFormSchema = yup.object().shape({
			name: yup
				.string()
				.required("Tên phải có giá trị.")
				.min(2, "Tên phải ít nhất 2 ký tự.")
				.max(50, "Tên có nhiều nhất 50 ký tự."),
		    	address: yup
				.string()
				.required("Địa chỉ chưa nhập!")
				.max(50, "Địa chỉ tối đa 50 ký tự!"),
		        email: yup
				.string()
				.required("E-mail chưa nhập!")
				.max(50, "E-mail tối đa 50 ký tự!"),
			   tinh: yup
				.string()
				.required("Tỉnh không có giá trị!")
				.max(50, "Tỉnh tối đa 20 ký tự!"),	
		    	huyen: yup
				.string()
				.required("Huyện không có giá trị!")
				.max(50, "Huyện tối đa 20 ký tự!"),	
			    xa: yup
				.string()
				.required("Xã không có giá trị!")
				.max(50, "Xã tối đa 20 ký tự!"),			
			
			phone: yup
				.string()
				.required("Điện thoại không có giá trị!")
				.matches(
					/((09|03|07|08|05)+(\d{8})\b)/g,
					"Số điện thoại không hợp lệ."
				),
			
		});
		return {
			contactLocal: this.contact,
			contactFormSchema,
		};
	},
	methods: {
		submitContact() {
			this.$emit("submit:contact", this.contactLocal);
			if (this.resetAfterSubmit) {
				this.$refs.contactForm.resetForm();
			}
		},
		deleteContact() {
			this.$emit("delete:contact", this.contactLocal._id);
		},
	},
};
</script>

<style scoped>
@import "@/assets/form.css";

.phone{
	display: inline-block;
}
.container{
	   display: inline-block;
		width:590px;
	
		
}
.btn-primary{
	width: 290px;
	height: 50px;
     background:#338DbD;
	 
}
.btn-primary1{
	width: 140px;
	height: 50px;
    background: #338DbD;
	color:aliceblue;
	margin-right:130px;
	 
}
.form-group1{
	width:176px;

}
.email{
	width:350px;
	
}

.huyen{
	margin-right: 15px;
	margin-left: 15px;
}
.form-control-email {
    width: 340px;
}
</style>
