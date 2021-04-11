<template>
    <div>
    <b-skeleton-wrapper variant="info">
      <template #loading>
        <b-card>
          <b-skeleton width="85%"></b-skeleton>
          <b-skeleton width="55%"></b-skeleton>
          <b-skeleton width="70%"></b-skeleton>
        </b-card>
      </template>
      
      <b-card>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra nunc sapien,
        non rhoncus elit tincidunt vitae. Vestibulum maximus, ligula eu feugiat molestie,
        massa diam imperdiet odio, vitae viverra ligula est id nisi. Aliquam ut molestie est.
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
        turpis egestas. Phasellus at consequat dui. Aenean tristique sagittis quam,
        sit amet sollicitudin neque sodales in.
      </b-card>
    </b-skeleton-wrapper>

        <b-skeleton-wrapper variant="danger">
        <template #loading>
            <b-card>
            <b-skeleton width="85%" height="40px" animation="throb"></b-skeleton>
            <b-skeleton width="55%" animation="throb"></b-skeleton>
            <b-skeleton width="70%" animation="throb"></b-skeleton>
            </b-card>
        </template>
        
        <b-card>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra nunc sapien,
            non rhoncus elit tincidunt vitae. Vestibulum maximus, ligula eu feugiat molestie,
            massa diam imperdiet odio, vitae viverra ligula est id nisi. Aliquam ut molestie est.
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Phasellus at consequat dui. Aenean tristique sagittis quam,
            sit amet sollicitudin neque sodales in.
        </b-card>
        </b-skeleton-wrapper>

        <b-skeleton-wrapper variant="success">
            <template #loading>
                <b-card>
                <b-skeleton width="85%" animation="fade"></b-skeleton>
                <b-skeleton width="55%" animation="fade"></b-skeleton>
                <b-skeleton width="70%" animation="fade"></b-skeleton>
                </b-card>
            </template>
            
            <b-card>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra nunc sapien,
                non rhoncus elit tincidunt vitae. Vestibulum maximus, ligula eu feugiat molestie,
                massa diam imperdiet odio, vitae viverra ligula est id nisi. Aliquam ut molestie est.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Phasellus at consequat dui. Aenean tristique sagittis quam,
                sit amet sollicitudin neque sodales in.
            </b-card>
        </b-skeleton-wrapper>
    </div>
</template>

<script>

import BSkeletonWrapper from "../components/b-skeleton-wrapper";
import BCard from "../components/b-card";
import BSkeleton from "../components/b-skeleton";


export default {
  name: 'navSkeleton',
  components: {
    BSkeletonWrapper,
    BCard,
    BSkeleton
  }
}
</script>

<style>
</style>
