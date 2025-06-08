<template>
    <div class="min-h-screen bg-gray-100 p-4">
        <h1 class="text-2xl font-bold mb-4">Time Zone Sync Planner</h1>

        <div class="mb-4">
            <div v-for="(member, index) in team" :key="index" class="mb-2 flex gap-2">
                <input v-model="member.name" class="border p-2 w-1/3" placeholder="Name" />
                <select v-model="member.timezone" class="border p-2 w-2/3">
                    <option v-for="tz in timezones" :key="tz" :value="tz">
                        {{ tz }}
                    </option>
                </select>
                <button @click="removeMember(index)" class="text-red-600">✖</button>
            </div>
            <button @click="addMember" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Add Member</button>
        </div>

        <div class="overflow-auto">
            <table class="table-auto border-collapse w-full">
                <thead>
                    <tr>
                        <th class="border px-4 py-2">Hour (UTC)</th>
                        <th v-for="member in team" :key="member.name" class="border px-4 py-2">
                            {{ member.name }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="hour in 24" :key="hour">
                        <td class="border px-2 py-1 text-center">{{ hour }}:00</td>
                        <td v-for="member in team" :key="member.name" class="border px-2 py-1 text-center">
                            {{ formatHour(hour, member.timezone) }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { DateTime } from 'luxon'

export default {
    data() {
        return {
            team: [
                { name: 'Alice', timezone: 'America/New_York' },
                { name: 'Bob', timezone: 'Europe/Berlin' },
            ],
            timezones: Intl.supportedValuesOf('timeZone'),
        }
    },
    methods: {
        addMember() {
            this.team.push({ name: '', timezone: 'UTC' })
        },
        removeMember(index) {
            this.team.splice(index, 1)
        },
        formatHour(hour, tz) {
            return (
                DateTime.fromObject({ hour }, { zone: 'UTC' }).setZone(tz).toFormat('HH:mm') +
                ' (' +
                tz.split('/').pop().replace('_', ' ') +
                ')'
            )
        },
    },
}
</script>

<style>
body {
    font-family: sans-serif;
}
</style>
