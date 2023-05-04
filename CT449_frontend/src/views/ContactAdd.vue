<template>
	<div class="page">
		<div>
			<h4>Thông Tin Giao Hàng</h4>
			<ContactForm
				:contact="{}"
				:resetAfterSubmit="false"
				@submit:contact="saveContact"
			/>
		</div>
	</div>
</template>

<script>
import { swtoast } from "@/mixins/swal.mixin";
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
	components: {
		ContactForm,
	},
	methods: {
		async saveContact(data) {
			try {
				await ContactService.create(data);
				swtoast.success({
					text: "Thông tin giao hàng được thêm thành công.",
				});
			} catch (error) {
				console.log(error);
				swtoast.error({
				text: "Đã có lỗi xảy ra.",
				});
			}
		},
	},
};
</script>
<style scoped>
h4{
	color:#333;
	font-family: Arial, Helvetica, sans-serif;
	margin-left:10px;
	margin-top:50px;
}
</style>>