<!-- <template>
	<div class="page row">
		<div class="col-md-10">
			<InputSearch v-model="searchText" />
		</div>
		<div class="mt-3 col-md-6">
			<h4>
				Danh bạ
				<i class="fas fa-address-book"></i>
			</h4>
			<ProductList
				v-if="filteredContactsCount > 0"
				:products="filteredContacts"
				v-model:activeIndex="activeIndex"
			/>
			<p v-else>Không có liên hệ nào.</p>

			<div class="mt-3 row justify-content-around align-items-center">
				<button class="btn btn-sm btn-primary" @click="refreshList()">
					<i class="fas fa-redo"></i> Làm mới
				</button>

				<button class="btn btn-sm btn-success" @click="goToAddContact">
					<i class="fas fa-plus"></i> Thêm mới
				</button>

				<button
					class="btn btn-sm btn-danger"
					@click="removeAllContacts"
				>
					<i class="fas fa-trash"></i> Xóa tất cả
				</button>
			</div>
		</div>
		<div class="mt-3 col-md-6">
			<div v-if="productItem">
				<h4>
					Chi tiết Liên hệ
					<i class="fas fa-address-card"></i>
				</h4>
				<ProductListItem :productItem ="activeContact" />
				
			</div>
		</div>
	</div>
</template>

<script>
import { swalert } from "@/mixins/swal.mixin";
// import ContactCard from "@/components/ContactCard.vue";
import InputSearch from "@/components/InputSearch.vue";
// import ContactList from "@/components/ContactList.vue";
// import ContactService from "@/services/contact.service";
import ProductService from "@/services/product.service";
import ProductList from "@/components/product/ProductList.vue";
import ProductListItem from "../components/product/ProductListItem.vue";

export default {
	components: {
    // ContactCard,
    InputSearch,
    // ContactList,
    ProductList,
    ProductListItem
},
	data() {
		return {
			products: [],
			activeIndex: -1,
			searchText: "",
		};
	},
	watch: {
		searchText() {
			this.activeIndex = -1;
		},
	},
	computed: {
		contactStrings() {
			return this.products.map((product) => {
				const { id,title, price } = product;
				return [id, title, price].join("");
			});
		},
		filteredContacts() {
			if (!this.searchText) return this.products;
			return this.products.filter((_product, index) =>
				this.contactStrings[index].includes(this.searchText)
			);
		},
		activeContact() {
			if (this.activeIndex < 0) return null;
			return this.filteredContacts[this.activeIndex];
		},
		filteredContactsCount() {
			return this.filteredContacts.length;
		},
	},
	methods: {
		async retrieveContacts() {
			try {
				this.products = await ProductService.getAll();
				this.products.sort((current, next) =>
					current.title.localeCompare(next.title)
				);
			} catch (error) {
				console.log(error);
			}
		},

		refreshList() {
			this.retrieveContacts();
			this.activeIndex = -1;
		},

		async removeAllContacts() {
			swalert
				.fire({
					title: "Xóa tất cả Liên hệ",
					icon: "warning",
					text: "Bạn muốn xóa tất cả Liên hệ?",
					showCloseButton: true,
					showCancelButton: true,
				})
				.then(async (result) => {
					if (result.isConfirmed) {
						try {
							await ContactService.deleteAll();
							this.refreshList();
						} catch (error) {
							console.log(error);
						}
					}
				});
		},

		goToAddContact() {
			this.$router.push({ name: "product.add" });
		},
	},
	created() {
		this.refreshList();
	},
};
</script>

<style scoped>
.page {
	text-align: left;
	max-width: 750px;
}
</style> -->
 
<!-- Thanh search -->