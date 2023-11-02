from django.urls import path
from .views import product_list, product_detail, create_product, update_product, delete_product

urlpatterns = [
    path('products/', product_list, name='product-list'),
    path('products/<int:pk>/', product_detail, name='product-detail'),
    path('products/create/', create_product, name='product-create'),
    path('products/update/<int:pk>/', update_product, name='product-update'),
    path('products/delete/<int:pk>/', delete_product, name='product-delete'),
]
