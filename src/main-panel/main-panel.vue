<template>
    <div>
        <div>
            <h2>控制台</h2>
        </div>
        <event-create></event-create>
        <event-list></event-list>
    </div>
</template>

<script>
	import eventCreate from '../event-create/event-create'
    import eventList from '../event-list/event-list'

	export default {
		name: "main-panel",
        components: { eventCreate, eventList },
		data() {
			return {}
		}
	}
</script>

<style lang="scss">

</style>