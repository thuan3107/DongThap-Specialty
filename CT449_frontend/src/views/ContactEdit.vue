<!-- <template>
	<div v-if="contact" class="page">
		<h4>Hiệu chỉnh Liên hệ</h4>
		<ContactForm
			:contact="contact"
			@submit:contact="updateContact"
			@delete:contact="deleteContact"
		/>
	</div>
</template>

<script>
import { swtoast, swalert } from "@/mixins/swal.mixin";
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
	components: {
		ContactForm,
	},
	props: {
		id: { type: String, required: true },
	},
	data() {
		return {
			contact: null,
		};
	},
	methods: {
		async getContact(id) {
			try {
				this.contact = await ContactService.get(id);
			} catch (error) {
				console.log(error);
				this.$router.push({
					name: "notfound",
					params: { pathMatch: this.$route.path.split("/").slice(1) },
					query: this.$route.query,
					hash: this.$route.hash,
				});
			}
		},

		async updateContact(data) {
			try {
				await ContactService.update(this.contact._id, data);
				swtoast.success({
					text: "Liên hệ được cập nhật thành công.",
				});
			} catch (error) {
				console.log(error);
				swtoast.error({
					text: "Đã có lỗi xảy ra.",
				});
			}
		},

		async deleteContact() {
			swalert
				.fire({
					title: "Xóa Liên hệ",
					icon: "warning",
					text: "Bạn muốn xóa Liên hệ này?",
					showCloseButton: true,
					showCancelButton: true,
				})
				.then(async (result) => {
					if (result.isConfirmed) {
						try {
							await ContactService.delete(this.contact._id);
							swtoast.success({
								text: "Liên hệ được xóa thành công.",
							});
							this.$router.push({ name: "contactbook" });
						} catch (error) {
							console.log(error);
							swtoast.error({
								text: "Đã có lỗi xảy ra.",
							});
						}
					}
				});
		},
	},
	created() {
		this.getContact(this.id);
	},
};
</script> -->
